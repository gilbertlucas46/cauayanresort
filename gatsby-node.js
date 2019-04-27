const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');



exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
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
     
      results.data.allMarkdownRemark.edges.forEach(({node}) => {
        const slug = `${node.frontmatter.title.split(' ').join('-').toLowerCase()}`
        createPage({
          path: `/villas/${slug}`,
          component: path.resolve('./src/components/villasLayout.js'),
          context: {
            slug: `${slug}`,
          }
        });
      })
      resolve();
    })
  });
}
exports.onCreateNode = ({ node }) => {
    fmImagesToRelative(node);
  }