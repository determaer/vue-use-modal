import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vite.dev/config/np
export default defineConfig({
    plugins: [vue(), vueJsx({})],
})
