import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/feasible-energies/',  // Add the base URL here
  plugins: [react()],
})
