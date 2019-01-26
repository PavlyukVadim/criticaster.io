import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
    		<li key={edge.node.id}>
    			<Link
            to={edge.node.frontmatter.path}
          >
            {edge.node.frontmatter.title}
          </Link>
    		</li>
    	)
    )

  return (
  	<div className="homePage">
      <div className="featuredArticles">
        <h2>Featured articles: </h2>
        <ul>
          {Posts}
        </ul>
      </div>
      <div className="latestArticles">
        <h2>Latest articles: </h2>
        <ul>
          {Posts}
        </ul>
      </div>
      <div className="categories">
        <h2>Categories: </h2>
        <h3 className="categoryTitle">Let's make 15 games in JavaScript: </h3>
        <ul>
          {Posts}
        </ul>
      </div>
  	</div>
  )
}

export default IndexPage

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
`
