import vuetify from './vuetify'
import firebase from '@/plugins/firebase'
import router from '@/router'
import pinia from '@/stores'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(firebase)
    .use(router)
    .use(pinia)
}
