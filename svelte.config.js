// En tu archivo svelte.config.js o en el archivo de configuración de tu adaptador
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    // ... otras configuraciones
    adapter: adapter({
      // Agregar el fallback aquí
      fallback: 'loading.html',
    }),
  },
};








