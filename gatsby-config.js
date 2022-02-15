module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Mia Sibala',
    // Main Site Title
    title: `Mia Sibala Portfolio`,
    // Description that goes under your name in main bio
    description: `Full-Stack Developer based in Los Angeles, California`,
    // Optional: Twitter account handle
    author: `@miasibala`,
    email: `sibalamia@gmail.com`,
    github: `https://github.com/msibala`,
    linkedin: `https://www.linkedin.com/in/miasibala/`,
   
    // Content of the About Me section
    about: `I'm a full-stack web developer passionate about making ideas come to life and learning from other code bases to continuously refine my skills. I have been building projects mainly in Python, Django and some Javascript since July 2021. I recently participated in a Hackathon in January 2022. I also founded the women who code besties community so women in tech have a safe space to chat about networking,coding blocks, fitness etc. Previous experience: Financial, Business and Marketing Analysis at ROW8, Deluxe, IMAX, Paramount Pictures.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Sweet Treats',
        description:
          'A web application to identify real time inventory of artisan ice cream shops thus saving time of commuting. Utilized HTML, CSS, Javscript, Node.js, Python, Django. Responsible for creating the database using SQLite and reformatting folder structure on Github. ',
        link: 'https://pure-caverns-71325.herokuapp.com/',
      },
      {
        name: 'MARU',
        description:
          'Emulated a Los Angeles based small business coffee shop, maru.com. Built using Django, Python, Javascript, CSS, HTML',
        link: 'https://github.com/msibala/maru',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript, Python, Django, Flask, Gatsby, HTML, CSS',
      },
      {
        name: 'Databases',
        description: 'MySQL'
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
