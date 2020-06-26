module.exports = {
  siteMetadata: {
    title: `Swisher Signal`,
    description: `A melting of all the things I write and code about`,
    author: `Michael Swisher`,
  },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                names: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            }
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                defaultLayouts: {
                    posts: require.resolve('./src/layout/post-layout.js'),
                    default: require.resolve('./src/layout/default-layout.js'),
                },
            },
        },
    ],
}
