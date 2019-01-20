---
path: /blog/code
date: '2019-01-19'
title: Lets test code markdown
---

Welcome to Part Four of the tutorial! Halfway through! Hope things are starting
to feel pretty comfortable 😀

## Recap of first half of the tutorial

So far, you've been learning how to use React.js—how powerful it is to be able to
create your _own_ components to act as custom building blocks for websites.

You’ve also explored styling components using CSS Modules.

## What's in this tutorial?

In the next four parts of the tutorial (including this one), you'll be diving into the Gatsby data layer, which is a powerful feature of Gatsby that lets you easily build sites from Markdown, WordPress, headless CMSs, and other data sources of all flavors.

**NOTE:** Gatsby’s data layer is powered by GraphQL. For an in-depth tutorial on
GraphQL, we recommend [How to GraphQL](https://www.howtographql.com/).

## Data in Gatsby

A website has four parts, HTML, CSS, JS, and data. The first half of the
tutorial focused on the first three. Let's learn now how to use data in Gatsby
sites.

What is data?

A very computer science-y answer would be: data is things like `"strings"`,
integers (`42`), objects (`{ pizza: true }`), etc.

For the purpose of working in Gatsby, however, a more useful answer is
"everything that lives outside a React component".

So far, you've been writing text and adding images _directly_ in components.
Which is an _excellent_ way to build many websites. But, often you want to store
data _outside_ components and then bring the data _into_ the component as
needed.

If you're building a site with WordPress (so other contributors
have a nice interface for adding & maintaining content) and Gatsby, the _data_
for the site (pages and posts) are in WordPress and you _pull_ that data, as
needed, into your components.

Data can also live in file types like Markdown, CSV, etc. as well as databases
and APIs of all sorts.

**Gatsby's data layer lets you pull data from these (and any other source)
directly into your components**—in the shape and form you want.

```jsx:title=src/pages/index.js
import React from "react"

export default () => <div>Hello world!</div>
```

This Gatsby page is a React component. When you want to create a form, you need to store the state of the form - what the user has entered. Convert your function (stateless) component to a class (stateful) component.

```jsx:title=src/pages/index.js
import React from "react" // highlight-line

export default class IndexPage extends React.Component {
  render() {
    return <div>Hello world!</div>
  }
}
```

```diff:title=src/pages/index.js
import React from 'react'
import { graphql } from 'gatsby'

- const HomePage = () => {
+ const HomePage = ({data}) => {
  return (
    <div>
-     Hello!
+     {data.site.siteMetadata.description}
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default HomePage
```
