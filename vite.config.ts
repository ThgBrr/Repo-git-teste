import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bussola2/', // Deve ser exatamente o nome do seu repositório
})
