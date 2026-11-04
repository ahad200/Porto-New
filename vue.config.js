const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Jangan kirim source map ke production (build lebih kecil & cepat)
  productionSourceMap: false
})


