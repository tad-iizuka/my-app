import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBLnlah3Mug5nNnMZQ6-XKeyemWPoJNRVY',
      authDomain: 'ubunifu-dev-530cb.firebaseapp.com',
      databaseURL: 'https://ubunifu-dev-530cb.firebaseio.com',
      projectId: 'ubunifu-dev-530cb',
      storageBucket: 'ubunifu-dev-530cb.appspot.com',
      messagingSenderId: '1019884437057'
    })
  }
}).$mount('#app')
