import adapter from '@sveltejs/adapter-auto';

const config = {
  kit: {
    adapter: adapter({
      // Puedes especificar la carpeta de implementación aquí
      out: 'roots',
    }),
  },
};

export default config;

