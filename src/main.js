import "./assets/main.css"
import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import ElementPlus from "element-plus"
import router from "./router"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
// import the package

import "element-plus/dist/index.css"
import VueAwesomePaginate from "vue-awesome-paginate"

// import the necessary css file
import "vue-awesome-paginate/dist/style.css"

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("UID")
  if (to.meta.requireAuth) {
    if (isAuthenticated) {
      next()
    } else {
      next({
        path: "/users/sign-in",
        query: { redirect: to.fullPath },
      })
    }
  }
  // 已登入用戶試圖訪問登入/註冊頁
  else if (isAuthenticated && to.path === "/users/sign-in") {
    next("/users/edit") // 導向會員頁
  }
  // 其他情況
  else {
    next()
  }
})

library.add(fas, fab)
const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate)
app.use(ElementPlus)

app.mount("#app")
