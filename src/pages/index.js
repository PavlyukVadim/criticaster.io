import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
    		<Link
    			key={edge.node.id}
    			to={edge.node.frontmatter.path}
    		>
    			{edge.node.frontmatter.title}
    		</Link>
    	)
    )

  return (
  	<div>
  		<h2>Blog posts: </h2>
  		{Posts}
  	</div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
