import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";
import path from 'path';
import sass from 'sass';
import ViteRequireContext from '@originjs/vite-plugin-require-context';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
// import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: false,
  resolve: {
    alias:[ 
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
          find: 'c',
          replacement: '.',
      },
    ],
    extensions: [
        '.mts',
        '.mjs',
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
        '.vue',
    ],
  },
  plugins: [
    vue(),
    ViteRequireContext.default(),
    viteCommonjs(),
    federation({
        name: 'remote-app',
        filename: 'remoteFile.js',
        optimizeDeps: {
          include: ['vuetify','vue','@payoffice2.0/vuetify'],
        },
        exposes: {
          './LoginForm': {
            name: 'LoginForm',
            import: './src/components/forms/auth/LoginForm.vue',
          },
        },
        shared: {
          'vuetify':{
            singleton: true,
            requiredVersion: '^3.4.10'
          },
          'vue':{},
          '@payoffice2.0/vuetify':{},
        }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: `@import "@/styles/variables.scss";`, // Adjust the path to your Sass variables file
      },
    },
  },
 build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].js',
        minifyInternalExports: false,
        // manualChunks: {
        //   vuetify: ['vuetify'],
        // },
      },
    },
  },
  server: {
    fsServe: {
      alias: {
        'vuetify': 'vuetify',
      },
    },
  }, 
})
