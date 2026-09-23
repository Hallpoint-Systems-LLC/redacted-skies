import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Redacted Skies',
  description:
    'Declassified files, anomalous sightings, and the quietly obvious truth: the skies are not empty.',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#0a0e14' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Redacted Skies' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Declassified files, anomalous sightings, and the quietly obvious truth: the skies are not empty.'
      }
    ],
    // Placeholder social image — replace with a real asset when available
    ['meta', { property: 'og:image', content: '/og-placeholder.svg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Redacted Skies' }],
    [
      'meta',
      {
        name: 'twitter:description',
        content:
          'Declassified files, anomalous sightings, and the quietly obvious truth: the skies are not empty.'
      }
    ],
    ['meta', { name: 'twitter:image', content: '/og-placeholder.svg' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
  ],

  themeConfig: {
    siteTitle: 'Redacted Skies',
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Sightings', link: '/sightings/' },
      { text: 'Crash Files', link: '/crash-sites/' },
      { text: 'Sources', link: '/sources/' },
      { text: 'Timeline', link: '/disclosure-timeline' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Field Manual',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'How to Read the Files', link: '/getting-started#how-to-read-the-files' }
        ]
      },
      {
        text: 'Archives',
        items: [
          { text: 'Sightings Index', link: '/sightings/' },
          { text: 'Case RS-1947-ROSWELL', link: '/sightings/rs-1947-roswell' },
          { text: 'Case RS-2004-NIMITZ', link: '/sightings/rs-2004-nimitz' },
          { text: 'Case RS-2019-MIDWEST', link: '/sightings/rs-2019-midwest' }
        ]
      },
      {
        text: 'Recovered Materials',
        items: [
          { text: 'Crash Sites Overview', link: '/crash-sites/' },
          { text: 'Alloy Anomalies', link: '/crash-sites/alloy-anomalies' },
          { text: 'Propulsion Speculation', link: '/crash-sites/propulsion' }
        ]
      },
      {
        text: 'Sources',
        items: [
          { text: 'Sources Index', link: '/sources/' },
          {
            text: 'Beta Pictoris b Radio Signals',
            link: '/sources/beta-pictoris-b-radio-signals'
          },
          { text: 'How to Add a Source', link: '/sources/CONTRIBUTING' }
        ]
      },
      {
        text: 'The Bigger Picture',
        items: [
          { text: 'Disclosure Timeline', link: '/disclosure-timeline' },
          { text: 'About Redacted Skies', link: '/about' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Hallpoint-Systems-LLC/redacted-skies'
      }
    ],

    footer: {
      message: 'For entertainment and curious minds. No classified documents were harmed.',
      copyright: 'Copyright © Redacted Skies — the skies aren\'t empty.'
    },

    search: {
      provider: 'local'
    },

    outline: {
      label: 'On this page'
    },

    docFooter: {
      prev: 'Previous file',
      next: 'Next file'
    },

    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to day-ops mode',
    darkModeSwitchTitle: 'Switch to night-ops mode',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Archive menu'
  },

  // Prefer dark "dossier" appearance by default
  appearance: 'dark'
})
