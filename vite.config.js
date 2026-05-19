import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/Semillero_MAGMA/',
    build: {
        outDir: 'dist',
        sourcemap: false
    }
});
