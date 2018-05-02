// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import VueI18n from 'vue-i18n';

import Vuetify from 'vuetify';

import Vuex from 'vuex';
// import store from '@/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.use(Vuex);

Vue.config.productionTip = false;
// Set lang
Vue.config.lang = 'ja';

/* eslint-disable no-new */
// Ready translated locale messages
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  },
  fr: {
    message: {
      hello: 'Bonjour le monde'
    }
  }
};

const i18n = new VueI18n({
  locale: 'fr', // set locale
  messages // set locale messages
});

// Create VueI18n instance with options
new Vue({
  // name: => uniquement pour les composents recursifs et les
  el: '#app',
  router,
  render: h => h(App)
});

// i18n /* this is equivalent to `i18n: i18n,` (without quotes, naturally)*/

/* Formation Edouardo vendredi 13 *******
******************************
A chercher = Test driven application
mount => monte les comoosants enfants
shallow => ignore le contenue d'un enfant ===> lire la doc vue-test utils
const wrapper le contenu => expect => voir doc "Test rendered HTML output the component

passe le contenu (slots) à la place de la data (props) = différence entre slots et props

Stubs un component = mock un comp de manière à le shinter/bypasser

Les props booleen se passe tels quel (vuetify)

dans css loader 3chevrons >>> à chercher*/
