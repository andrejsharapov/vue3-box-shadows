import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from 'vite-plugin-html';

const isDevMode = process.env.NODE_ENV !== 'production'
const pkg = require('./package.json');

process.env.VITE_APP_VERSION = pkg.version;
process.env.VITE_APP_DESCRIPTION = pkg.description;

if (!isDevMode) {
  process.env.VITE_APP_TITLE = pkg.name;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
            desc: env.VITE_APP_DESCRIPTION,
            version: env.VITE_APP_VERSION,
          }
        }
      }),
    ],
    server: {
      port: 8080,
    },
  }
});
