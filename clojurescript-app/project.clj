(defproject clojurescript-app "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.omcljs/om "1.0.0-beta1"]
                 [org.clojure/clojurescript "1.9.521"]]
  :plugins [[lein-cljsbuild "1.1.7"]]
  :cljsbuild {:builds
              [{:source-paths ["src/cljs"]
                :compiler {:output-to "../js/cljs.js"
                           :optimizations :whitespace
                           :pretty-print true}}]})
