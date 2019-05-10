package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type Component struct {
	Path string
}

func main() {
	r := gin.Default()
	r.Static("/js", "./js")
	r.LoadHTMLGlob("templates/*")

	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.tmpl", gin.H{
			"Title": "Micro FrontEnds",
			"Components": []Component{
				{Path: "/js/component1.js"},
				{Path: "/js/component2.js"},
				{Path: "/js/component3.js"},
			},
		})
	})

	r.Run(":4444")
}
