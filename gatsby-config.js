module.exports = {
  siteMetadata: {
    siteUrl: "http://www.diunguyenlab.com",
    title: "Diu Nguyen Lab",
    description: "Official website of the Diu Nguyen research group based at Barts Cancer Institute, London",
    keywords: "Leukemia Research, Leukaemia, Cancer, Research, Cancer Research, Blood, Blood Cancer, Haematopoiesis, Hematopoiesis, haematopoiesis, hematopoiesis, RNA binding proteins, Post-transcriptional regulation, RNA metabolism"
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
    `gatsby-plugin-react-helmet`,
  ],
};
