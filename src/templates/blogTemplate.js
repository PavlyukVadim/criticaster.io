import React from 'react'
import Helmet from 'react-helmet'
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
  const { markdownRemark = {} } = data // data.markdownRemark holds our post data
  const { frontmatter = {}, htmlAst } = markdownRemark
  const { wrapperClass } = frontmatter

  const disqusShortname = 'amadev'
  const disqusConfig = {
    identifier: frontmatter.title,
    title: frontmatter.title,
  }

  const className = `${wrapperClass} blog-post-container`

  return (
    <div className={className}>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.date}</h3>
        <section className="post-body">
          {renderAst(htmlAst)}
        </section>
      </div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
      <Helmet
        title={frontmatter.metaTitle}
        meta={[
          {
            name: 'description',
            content: frontmatter.metaDescription,
          },
          {
            name: 'keywords',
            content: frontmatter.metaKeywords,
          },
        ]}
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
        metaTitle
        metaDescription
        metaKeywords
        wrapperClass
      }
    }
  }
`
