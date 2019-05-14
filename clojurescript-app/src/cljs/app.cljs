(ns clojurescript-app.app
  (:require [goog.dom :as gdom]
            [om.dom :as dom]
            [om.next :as om :refer [defui]]))

(enable-console-print!)

(println "This is the clojurescript app")

(defui Hello
  Object
  (render [this]
          (dom/h1 nil "Hello from Clojurescript")))

(def hello (om/factory Hello))

(.render js/ReactDOM (hello) (gdom/getElement "clojurescript-app"))
