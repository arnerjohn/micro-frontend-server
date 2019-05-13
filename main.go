package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"html/template"
	"net/http"
)

type Component struct {
	Path string
	HTML template.HTML
}

func main() {
	connStr := "user=johnarner dbname=micro_frontends sslmode=disable"
	db, err := gorm.Open("postgres", connStr)

	if err != nil {
		panic(err)
	}

	defer db.Close()

	r := gin.Default()
	r.Static("/js", "./js")
	r.LoadHTMLGlob("templates/*")

	r.GET("/", func(c *gin.Context) {
		rows, err := db.Raw("SELECT path, html FROM components").Rows()
		defer rows.Close()

		if err != nil {
			panic(err)
		}

		var comps []Component

		for rows.Next() {
			var path string
			var html string

			rows.Scan(&path, &html)

			comps = append(comps, Component{Path: path, HTML: template.HTML(html)})
		}

		c.HTML(http.StatusOK, "index.tmpl", gin.H{
			"Title":      "Micro FrontEnds",
			"Components": comps,
		})
	})

	r.Run(":4444")
}
