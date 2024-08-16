import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/portfolio/', // Certifique-se de que este caminho corresponde ao nome do repositório e à estrutura do GitHub Pages
});
