const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'todo-tutorial',
    short_name: 'todo-tutorial',
    themeColor: '#0a4def'
  }
})
