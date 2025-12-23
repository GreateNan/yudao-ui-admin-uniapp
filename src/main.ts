import ElementPlus from 'element-plus'
import vant from 'vant'
import { createSSRApp } from 'vue'
import UserPicker from '@/pages-system/user/form/components/user-picker.vue'

import App from './App.vue'
import { requestInterceptor } from './http/interceptor'
import { routeInterceptor } from './router/interceptor'
import store from './store'
import '@/style/index.scss'
import 'virtual:uno.css'
import 'element-plus/dist/index.css'
import 'vant/lib/index.css'
import FcDesigner from '/fcDesignerPro/dist1/index.es.js'

FcDesigner.component('UserSelect', UserPicker)
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(routeInterceptor)
  app.use(requestInterceptor)
  // 挂载 ElementPlus
  app.use(ElementPlus)
  app.use(vant)

  // 挂载 formCreate
  app.use(FcDesigner.formCreate)
  return {
    app,
  }
}
