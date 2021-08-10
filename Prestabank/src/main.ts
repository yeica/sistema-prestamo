import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import "buefy/dist/buefy.css"
import axios from 'axios'
import firebase from 'firebase/app'

Vue.use(Buefy)

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDwyAF7aK_s56Cjss3kn4YQYTxb4NmvGLw",
    authDomain: "sistema-prestamo.firebaseapp.com",
    projectId: "sistema-prestamo",
    storageBucket: "sistema-prestamo.appspot.com",
    messagingSenderId: "331379447797",
    appId: "1:331379447797:web:38c33302a802bb3e2db2bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let app: any;

  firebase.auth().onAuthStateChanged(user => {
    if (!app){
      app = new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }
  })

