import tailwindcss from "@tailwindcss/vite";

export default {
  plugins: {
    "@tailwindcss/postcss": {
      optimize: {
        minify: false,
      },
    },
  },
};
