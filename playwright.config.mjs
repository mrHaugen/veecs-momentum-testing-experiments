import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['sample.feature'],
  require: ['steps.mjs'],
});

export default defineConfig({
  testDir,
  reporter: 'html',
});
