import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Repo-git-teste/', // Deve ser o nome exato do repositório
})
