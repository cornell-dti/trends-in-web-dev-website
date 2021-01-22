const versions = require('./versions.json');

module.exports = {
  title: 'Trends in Web Dev',
  tagline:
    "Build and deploy modern full-stack web applications using best practices in today's most used tech stacks.",
  url: 'https://webdev.cornelldti.org',
  baseUrl: '/',
  favicon: 'img/logo.png',
  organizationName: 'cornell-dti',
  projectName: 'trends-in-web-dev-website',
  themeConfig: {
    prism: {
      theme: require('./atom-one-light-theme'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: require('./navbar'),
    footer: require('./footer'),
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
          includeCurrentVersion: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
