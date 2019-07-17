import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

window.store = store

//https://www.youtube.com/watch?v=9kRgVxULbag

/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.3.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAbOkUcRPidBkKfhRe4YTDEFUBWg0HC1Kk",
    authDomain: "windowscreator-125d6.firebaseapp.com",
    databaseURL: "https://windowscreator-125d6.firebaseio.com",
    projectId: "windowscreator-125d6",
    storageBucket: "",
    messagingSenderId: "796218478814",
    appId: "1:796218478814:web:d8fa1dfa71958352"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>*/