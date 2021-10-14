module.exports = {
  siteMetadata: {
    siteUrl: "http://www.diunguyenlab.com",
    title: "diunguyenlabcom",
    description: "Initial Title"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
