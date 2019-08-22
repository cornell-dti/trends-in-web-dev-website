module.exports = {
  title: 'Trends in Web Development',
  tagline: 'Course offered by Cornell DTI',
  url: 'https://web-dev.cornelldti.org',
  baseUrl: '/',
  favicon: 'img/logo.png',
  organizationName: 'cornell-dti',
  projectName: 'trends-in-web-dev-website',
  themeConfig: {
    prismTheme: require('./atom-one-light-theme'),
    navbar: {
      title: 'Trends in Web Development',
      logo: {
        alt: 'Cornell DTI Web Development Course Logo',
        src: 'img/logo.png'
      },
      links: [
        { to: 'docs/introduction', label: 'Getting Started', position: 'left' },
        { to: 'docs/lecture1', label: 'Lectures', position: 'left' },
        {
          href: 'https://github.com/cornell-dti',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course',
          items: [
            { label: 'Introduction', to: 'docs/introduction' },
            { label: 'Setup Environment', to: 'docs/setup-environment' },
            { label: 'Setup Editor', to: 'docs/setup-editor' },
            { label: 'First Lecture', to: 'docs/lecture1' }
          ]
        },
        {
          title: 'Cornell DTI',
          items: [
            { label: 'Website', href: 'https://www.cornelldti.org' },
            { label: 'GitHub', href: 'https://github.com/cornell-dti' },
            { label: 'Facebook', href: 'https://www.facebook.com/cornelldti/' },
            {
              label: 'Medium',
              href: 'https://medium.com/cornell-design-tech-initiative/'
            }
          ]
        },
        {
          title: 'Cornell DTI Products',
          items: [
            { label: 'Flux', href: 'https://www.cornelldti.org/Projects/flux' },
            { label: 'Queue Me In', href: 'https://queueme.in/' },
            {
              label: 'Research Connect',
              href: 'https://www.research-connect.com/'
            },
            { label: 'Course Reviews', href: 'http://www.cureviews.org/' },
            { label: 'Samwise', href: 'https://samwise.today' },
            {
              label: 'cue',
              href: 'https://www.cornelldti.org/Projects/events'
            },
            {
              label: 'O-Week',
              href: 'https://www.cornelldti.org/Projects/orientation'
            }
          ]
        }
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png'
      },
      copyright: `Copyright © ${new Date().getFullYear()} Cornell Design & Tech Initiative. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};
