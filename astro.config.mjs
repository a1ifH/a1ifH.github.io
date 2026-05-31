// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://alifh.github.io',
  // If deploying to alifh.github.io (user site), base stays '/'.
  // If deploying to a project repo like alifh.github.io/portfolio, set base: '/portfolio/'
  base: '/',
  output: 'static',
});
