module.exports = {
  title: 'Trends in Web Dev',
  tagline: 'Course offered by Cornell DTI',
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
