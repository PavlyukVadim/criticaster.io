import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../header'

import './stylesheets/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Criticaster"
      meta={[
        { name: 'description', content: 'Welcome to Criticaster! Here you can find some javascript tutorials.' },
        { name: 'keywords', content: 'javascript, canvas, 2d games, games in js' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
