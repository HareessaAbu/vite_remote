// Styles
import { createApp } from 'vue';
import 'vuetify/styles'

import { createVuetify } from 'vuetify'


const app = createApp();

app.use(Vuetify, {
  directives,
  components
});

export default createVuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#d60b52',
        secondary: '#1e1e20',
        'light-secondary': '#4e4e56',
        tertiary: '#ea610d',
        'light-grey': '#f0f0f0',
      },
    },
  },
  lang: {
    locales: { bg, cs, de, el, en, es, hr, hu, it, nl, pl, pt, ro, sk, sl, uk },
    current: defaultLocale,
  },
});