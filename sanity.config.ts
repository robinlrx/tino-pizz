import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  projectId: '64queq5n',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: [],
  },
})