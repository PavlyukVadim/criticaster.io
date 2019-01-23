import React from 'react'
import rehypeReact from 'rehype-react'
import { DiscussionEmbed } from 'disqus-react'
import './index.scss'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, htmlAst } = markdownRemark

  const disqusShortname = 'amadev'
  const disqusConfig = {
    identifier: frontmatter.title,
    title: frontmatter.title,
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <section className="post-body">
          {renderAst(htmlAst)}
        </section>
      </div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
