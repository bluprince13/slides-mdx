module.exports = {
    siteMetadata: {
        title: 'slides'
    },
    pathPrefix: `/slides`,
    plugins: [
        {
            resolve: 'gatsby-theme-mdx-deck',
            options: {
                mdx: true,
                contentPath: 'src/decks'            }
        }
    ]
}
