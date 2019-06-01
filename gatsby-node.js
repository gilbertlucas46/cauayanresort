const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
      villas: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/villas/"}}) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }      
      }   
    `).then(results => {
     
      results.data.villas.edges.forEach(({node}) => {
        const slug = `${node.frontmatter.title}`
        createPage({
          path: `/villas/${slug.split(' ').join('-').toLowerCase()}`,
          component: path.resolve('./src/components/villasLayout.js'),
          context: {
            slug: `${slug}`,
          }
        })
      })
      resolve();
    })
  });
}
exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};