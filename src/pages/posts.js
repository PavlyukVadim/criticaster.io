import React from 'react'
import Link from 'gatsby-link'
import TemplateWrapper from '../components/layout'

const PostsPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const posts = edges
    .filter((edge) => {
      return (
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.hidden !== true
      )
    })
    .map(edge => (
    		<li key={edge.node.id}>
          {edge.node.frontmatter.date}
          &nbsp;>>&nbsp;
    			<Link to={edge.node.frontmatter.path}>
            {edge.node.frontmatter.title}
          </Link>
    		</li>
    	)
    )

  return (
    <TemplateWrapper>
      <div>
        <h2>Blog posts: </h2>
        <ul>
          {posts}
        </ul>
      </div>
    </TemplateWrapper>
  );
};

export default PostsPage

export const PostsQuery = graphql`
  query PostQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            hidden
          }
        }
      }
    }
  }
`
