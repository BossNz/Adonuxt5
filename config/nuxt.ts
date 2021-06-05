export default {
 ssr:true,
 telemetry: false,
 head: {
  title: 'Adonuxt5',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { hid: 'description', name: 'description', content: '' }
  ],
  link: [
  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
},

css: [
],

plugins: [
],

components: true,

buildModules: [
'@nuxt/typescript-build',
],

modules: [
'@nuxtjs/axios',
],

axios: {},

build: {
},
srcDir: 'resources/'
}
