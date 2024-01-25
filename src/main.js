import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { loadFonts } from './plugins/webfontloader';
import VuetifyComponents from '@payoffice2.0/vuetify';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { setupI18n } from './plugins/i18n';
import('@/styles/overrides.scss');
import '@/plugins/restapi';
import lodash from 'lodash';

const app = createApp(App);
const i18n = setupI18n(app);

const customLightTheme = {
  dark: false,
  colors: {
    primary: '#d60b52',
    secondary: '#1e1e20',
    'light-secondary': '#4e4e56',
    tertiary: '#ea610d',
    'light-grey': '#f0f0f0',
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "customLightTheme",
    themes: {
      customLightTheme
    },
  }
});

loadFonts();
window._ = lodash;
window.$_ = lodash;

app.use(router)
  .use(store)
  .use(vuetify)
  .use(VuetifyComponents);
  
app.mount('#app')
