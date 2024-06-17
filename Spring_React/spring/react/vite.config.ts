import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite プロジェクトの開発サーバーのホストを自動的にローカル IP アドレスに設定
  server: {
    host: true
  }
})
