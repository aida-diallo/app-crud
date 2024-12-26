import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'public/build', // Chemin où les fichiers générés sont stockés
        emptyOutDir: true, // Supprime les anciens fichiers de build avant un nouveau build
    },
});
