import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Repo-git-teste/', // O nome do seu repositório entre barras
})
