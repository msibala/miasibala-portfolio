module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `miasibala`,
    // Your Name
    name: 'Mia Sibala',
    // Main Site Title
    title: `Work In Progress Portfolio`,
    // Description that goes under your name in main bio
    description: `Full-Stack Developer based in Los Angeles, California`,
    // Optional: Twitter account handle
    author: `@miasibala`,
    github: `https://github.com/msibala`,
    linkedin: `https://www.linkedin.com/in/miasibala/`,
    // Content of the About Me section
    about: `Curious full-stack engineer experienced in building websites with Django, Python, Javascript, HTML & CSS.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Junglebook --> Baby Club',
        description:
          'A digital community for expecting and new parents. Built using Django, Python, Javascript, CSS, HTML',
        link: 'https://github.com/msibala/junglebook_project',
      },
      {
        name: 'MARU',
        description:
          'Emulated a small business coffee shop, maru.com. Built using Django, Python, Javascript, CSS, HTML',
        link: 'https://github.com/msibala/maru',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript, Python, Django, Flask, HTML, CSS',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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
