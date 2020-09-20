// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'vblog',
  siteDescription: 'gridsome 写的博客',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['blog-lists', 'socials', 'projects'],
        singleTypes: ['general'],
      }
    }
  ],
  templates: {
    StrapiSocials: [
      {
        path: '/social/:id',
        component: './src/templates/social.vue'
      }
    ],
    StrapiProjects: [
      {
        path: '/project/:id',
        component: './src/templates/project.vue'
      }
    ],
    // StrapiTag: [
    //   {
    //     path: '/tag/:id',
    //     component: './src/templates/Tag.vue'
    //   }
    // ]
  }
}