module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Luan Santos',
    description: 'Fullstack Developer',
    keywords: 'Fullstack Developer, Software Enginner, Front-end Developer',
    url: 'http://luansantosti.github.io/'
  }
};
