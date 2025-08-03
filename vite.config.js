import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/prayekt-1/', // ✅ GitHub Pages nurlanishi uchun kerak
  plugins: [react()],
});
