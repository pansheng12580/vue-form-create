import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { ElementPlusResolver, AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      symbolId: 'svg-icon-[dir]-[name]'
    }),
    autoImport({ resolvers: [ElementPlusResolver(), AntDesignVueResolver()] }),
    components({ resolvers: [ElementPlusResolver(), AntDesignVueResolver()] })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
