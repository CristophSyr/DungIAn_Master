import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

function htmlInject() {
  return {
    name: 'html-inject',
    transformIndexHtml(html) {
      return html.replace(/<!--\s*include\s+(.*?)\s*-->/g, (match, url) => {
        const filePath = path.resolve(import.meta.dirname, url);
        if (fs.existsSync(filePath)) {
          return fs.readFileSync(filePath, 'utf-8');
        }
        return match;
      });
    }
  };
}

export default defineConfig({
  plugins: [htmlInject()],
});
