import { env } from '../env'

export const corsConfig = {
  credentials: true,
  origin: [
    'https://panvore.app',
    'https://dev.panvore.app',
    'https://demo.panvore.app',
    'https://web-prod.panvore.app',
    'https://web-dev.panvore.app',
    'https://web-demo.panvore.app',
    'http://localhost:3000',
    env.dev.isLocal && 'https://studio.apollographql.com',
    env.client.url,
    'lsp://logseq.io',
    'app://obsidian.md',
    'https://plugins.amplenote.com',
    'amplenote-handler://bundle',
    'capacitor://localhost',
    'http://localhost',
  ],
  maxAge: 86400,
}
