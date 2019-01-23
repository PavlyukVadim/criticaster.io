import React, { Component} from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    const disqus_config = function () {
      this.page.url = 'amadev.com'
      this.page.identifier = 'a'
    }

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          <div id="disqus_thread"></div>
            <script>
              window.disqus_config = disqus_config
              
              (function() {
                const d = document
                const s = d.createElement('script')

                // IMPORTANT: Replace EXAMPLE with your forum shortname!
                s.src = 'https://amadev.disqus.com/embed.js'
                s.setAttribute('data-timestamp', +new Date())
                (d.head || d.body).appendChild(s)
              })()
            </script>
            <noscript>
              Please enable JavaScript to view the 
              <a href="https://disqus.com/?ref_noscript" rel="nofollow">
                comments powered by Disqus.
              </a>
            </noscript>
        </body>
      </html>
    )
  }
}
