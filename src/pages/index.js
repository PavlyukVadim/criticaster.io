import React from 'react'
import Link from 'gatsby-link'
// import { DiscussionEmbed } from 'disqus-react'
import config from './../config'

const { categories: categoriesConfig } = config

// const disqusShortname = 'amadev'
// const disqusConfig = {
//   identifier: 'index',
//   title: 'index',
// }

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const filteredEdges = edges
    .filter(edge => (
      !!edge.node.frontmatter.date &&
      edge.node.frontmatter.category !== 'nope' &&
      edge.node.frontmatter.hidden !== true
    ))
  
  const featuredPosts = filteredEdges
    .filter(edge => !!edge.node.frontmatter.featured)
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
  
  const numberOfLatestPosts = 5
  const latesPosts = filteredEdges
    .slice(0, numberOfLatestPosts)
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

  const categories = filteredEdges
    .map((edge) => edge.node.frontmatter.category)
    .filter((category, i, categories) => {
      return (categories.indexOf(category) === i)
    })

  const postsByCategories = categories
    .sort((category1, category2) => {
      return (
        categoriesConfig[category1].position -
        categoriesConfig[category2].position
      )
    })
    .map((category) => {
      const edgesByCategory = filteredEdges
        .filter((edge) => {
          return (edge.node.frontmatter.category === category)
        })
      
      const isReversion = categoriesConfig[category].reversion
      if (isReversion) {
        edgesByCategory.reverse()
      }

      const posts = edgesByCategory.map(edge => (
        <li key={edge.node.id}>
          <Link
            to={edge.node.frontmatter.path}
          >
            {edge.node.frontmatter.title}
          </Link>
        </li>
      ))
      
      return (
        <div key={category}>
          <h3 className="categoryTitle">
            {categoriesConfig[category].title}:
          </h3>
          <ul>
            {posts}
          </ul>
        </div>
      )
    })
  
  return (
  	<div className="homePage">
      <div className="featuredArticles">
        <h2>Featured articles: </h2>
        <ul>
          {featuredPosts}
        </ul>
      </div>
      <div className="latestArticles">
        <h2>Latest articles: </h2>
        <ol>
          {latesPosts}
        </ol>
      </div>
      <div className="categories">
        <h2>Categories: </h2>
        <div className="categories-wrapper">
          {postsByCategories}
        </div>
      </div>
      {/* <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      /> */}
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
            category
            featured
            hidden
          }
        }
      }
    }
  }
`
