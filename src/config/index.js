module.exports = {
  siteTitle: 'Kelvin Kamau | Software Engineer',
  siteDescription:
    'Design-minded software engineer keen to create mobile and web developer starring elegant designs, an open source hobbyist and a community mentor keen to inspire change-makers.',
  siteKeywords:
    'Kelvin Kamau, Kelvin, Kamau, kamaucodes, software engineer, front-end engineer, web developer, javascript, android',
  siteUrl: 'https://www.kelvinkamau.app',
  siteLanguage: 'en_US',
  siteImage: 'https://www.kelvinkamau.app/og.PNG',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Kelvin Kamau',
  location: 'Nairobi, KE',
  email: 'chat@kelvinkamau.app',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/kelvinkamau',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kelvinkamau',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/kelvinkamau/',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/justkeykay',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kamaucodes',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Ping',
      url: '#contact',
    },
  ],

  twitterHandle: '@kamaucodes',
  googleAnalyticsID: 'UA-89234800-1',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
