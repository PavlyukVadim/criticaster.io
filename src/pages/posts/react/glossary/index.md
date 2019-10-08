---
path: /posts/react-glossary
date: '2019-07-30'
title: 📙 React Glossary
category: react
metaTitle: React Dictionary
metaDescription: React Glossary
metaKeywords: 'javascript, html5, canvas'
wrapperClass: dictionary
---

Glossary of React Terms ⚛

[A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)

# Dictionary:

<!-- https://overreacted.io/react-as-a-ui-runtime/ -->

<!-- https://habr.com/ru/post/458916/ -->

## A:
## B:
## C:

#### ```Context```

Provides a way to pass data through the component tree without having to pass props down manually at every level. 

<details>
  <summary>Example 🔥</summary>

```js
const ThemeContext = React.createContext({  // highlight-line
  theme: themes.dark,
  toggleTheme: () => {},
})

const ThemeTogglerButton = () => {
  return (
    <ThemeContext.Consumer>  // highlight-line
      {({theme, toggleTheme}) => (  // highlight-line
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

class App extends Component {
  state = {
    theme: themes.light,  // highlight-line
    toggleTheme: this.toggleTheme,  // highlight-line
  }

  this.toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }))
  }

  render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>  // highlight-line
        <div>
          <ThemeTogglerButton />
        </div>
      </ThemeContext.Provider>
    )
  }
}
```
</details>

#### ```Controlled Components```

#### ```Uncontrolled Components```

#### ```React.createRef```

Way to access DOM nodes or React elements created in the render method.
Motivations for creating the ```React.createRef``` method in [RFC](https://github.com/reactjs/rfcs/pull/17/files).

<details>
  <summary>Example with focusing text input 🔥</summary>

```js
class CustomTextInput extends Component {
  constructor(props) {
    super(props)
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef() // highlight-line
  }

  focusTextInput = () => {
    this.textInput.current.focus() // highlight-line
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />  // highlight-line
        <input type="button" onClick={this.focusTextInput} />
      </div>
    )
  }
}
```
</details>

<details>
  <summary>Example with React.forwardRef 🔥</summary>

```js
const FancyButton = React.forwardRef((props, ref) => ( // highlight-line
  <button ref={ref} className="FancyButton">           // highlight-line
    {props.children}
  </button>
))

// You can now get a ref directly to the DOM button:
const ref = React.createRef()                           // highlight-line
<FancyButton ref={ref}>Click me!</FancyButton>          // highlight-line
```
</details>

#### ```Callback Refs```

Way that gives more fine-grain control over when refs are set and unset.

<details>
  <summary> Example with focusing text input 🔥</summary>

```js
class CustomTextInput extends Component {
  constructor(props) {
    super(props)
    // create a ref to store the textInput DOM element
    this.textInput = null // highlight-line
    this.setTextInputRef = el => this.textInput = el // highlight-line
  }

  focusTextInput = () => {
    if (this.textInput) this.textInput.focus() // highlight-line
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />  // highlight-line
        <input type="button" onClick={this.focusTextInput} />
      </div>
    )
  }
}
```
</details>

Attention:

Without binding the ```callback``` to a class method in the constructor, it calls twice (first time with ```null``` and the second with real value) in render during state updates.

Callback refs are preferable when dealing with dynamic refs.

<!-- https://moduscreate.com/blog/everything-you-need-to-know-about-refs-in-react/ -->

More examples in [react-refs-cheatsheet](https://react-refs-cheatsheet.netlify.com).

## D:
## E:
## F:

#### ```Fiber```

New ```reconciliation``` engine. Fiber’s architecture provides a convenient way to track, schedule, pause and abort the work.

Main concept:

```RequestIdleCallback``` - global function that can be used to queue a function to be called during a browser’s idle periods. 

The previos engine used the synchronous recursive model that relied on the built-in stack to walk the tree. Each recursive call adds a frame to the stack. And it does so synchronously.

Fiber offers linked list for getting a opportunity to stop traversal at some point and  resume it later. That’s exactly the condition we wanted to achieve to be able to use the new ```requestIdleCallback``` API. Each iltem of list has 3 items: ```child```, ```sibling```, ```return```.

React performs work in two main phases: render (asynchronously) and commit (synchronously).

* ```Render phase```:

React applies updates to components scheduled through ```setState``` or ```React.render``` and figures out what needs to be updated in the UI. The result of the phase is a tree of fiber nodes marked with ```side-effects```.

* ```Commit phase```:

When React gets to this phase, it has 2 trees (```current```, ```finishedWork```) and the effects list (subset of nodes from the ```finishedWork``` tree linked through the ```nextEffect``` pointer). The whole point of rendering was to determine which nodes need to be inserted, updated, or deleted, and which components need to have their lifecycle methods called. And that’s what the effect list tells us. And it’s exactly the set of nodes that’s iterated during the commit phase.

Read more in article [Inside Fiber](https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/).

## G:
## H:

#### ```HOCs```

#### ```Hooks```

Are a special functions that let you “hook into” React features.

Hooks let us split the code based on what it is doing rather than a lifecycle method name. React will apply every effect used by the component, in the order they were specified.

#### ```useState```

Is a Hook that lets you add React state to function components.

<details>
  <summary> Example with useState 🔥</summary>

```js
import React, { useState } from 'react'

const Example = () => {
  const [count, setCount] = useState(0) // highlight-line

  return (
    <div>
      <p>You clicked {count} times</p> // highlight-line
      <button onClick={() => setCount(count + 1)}> // highlight-line
        Click me
      </button>
    </div>
  )
}
```
</details>

#### ```useEffect```

By using this Hook, you tell ```React``` that your component needs to do something after render (after performing the DOM updates).

Tip: Unlike ```componentDidMount```/```componentDidUpdate```, effects scheduled with ```useEffect``` don’t block the browser from updating the screen.

React **cleans up** the previous effects before applying the next effects.

<details>
  <summary> Example with useEffect 🔥</summary>

```js
import React, { useState, useEffect } from 'react'

const FriendStatus = (props) => {
  const [isOnline, setIsOnline] = useState(null) // highlight-line

  useEffect(() => { // highlight-line
    const handleStatusChange = (status) => {
      setIsOnline(status.isOnline)
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
    // Specify how to clean up after this effect:
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }
    // Only re-subscribe if props.friend.id changes
  } [props.friend.id]) // highlight-line

  if (isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}
```
</details>

#### Custom Hook

Is a JavaScript function whose name starts with ”use” and that may call other Hooks.

<!-- https://reactjs.org/docs/hooks-faq.html#how-do-lifecycle-methods-correspond-to-hooks -->

<!-- https://www.youtube.com/watch?v=dpw9EHDh2bM -->

<!-- https://blog.jakoblind.no/react-redux-hooks/ -->

<!-- examples -->

<!-- https://gist.github.com/alexeyraspopov/1233af30f77e553fc7c949acf5f61dad -->

## I:
## J:
## K:

#### ```Keys```

Keys are usually used for dynamic lists.
When a key changes, React will create a new component instance rather than update the current one.

<!-- https://reactjs.org/docs/lists-and-keys.html -->

## L:

#### ```React.lazy```

API in React to aid in code splitting and importing components into your scripts:

```js
import React, { lazy } from 'react'
const Product = lazy(() => import('./ProductHandler'))
```

Read more about [Suspense](/posts/react-glossary#suspense).

#### ```Lifecycle Methods```

  Mounting                            |  Updating                           |  Unmounting                |
:-------------------------------------|:------------------------------------|:---------------------------|
***constructor***                     |```static getDerivedStateFromProps```| ***componentWillUnmount*** |
```static getDerivedStateFromProps``` |```shouldComponentUpdate```          |  ```--```                  |
***render***                          | ***render***                        |  ```--```                  |
***componentDidMount***               | ```getSnapshotBeforeUpdate```       |  ```--```                  |
```--```                              | ***componentDidUpdate***            |  ```--```                  |

Error Handling                           |
:----------------------------------------|
 ```static getDerivedStateFromError()``` |
 ```componentDidCatch()```               |

Read more about ```Lifecycle Methods``` in [react docs](https://reactjs.org/docs/react-component.html#updating).

#### ```getDerivedStateFromProps```

Is invoked right before calling the ```render``` method. It should return an object to update the state, or ```null``` to update nothing.

Attantion: use ```componentDidUpdate``` for side effects and ```memoization``` for re-compution expensive value in render.

#### ```getSnapshotBeforeUpdate```

Is invoked right before calling the ```componentDidUpdate``` method. It uses to capture some information from the DOM (e.g. scroll position) before it is potentially changed.


## M:

#### ```React.memo```

<!-- https://reactjs.org/blog/2018/10/23/react-v-16-6.html -->

#### ```MobX```

## N:
## O:
## P:

#### ```Profiler```

Measures how often a React application renders and what the “cost” of rendering is. Its purpose is to help identify parts of an application that are slow and may benefit from optimizations.

#### ```PureComponent```

Only rerender if at least one state or prop value changes, it performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.


## Q:
## R:

#### ```Recompose```

Utility belt for function components and HOCs (```pure```, ```shouldUpdate```). Use React Hooks instead of it.

<!-- https://gist.github.com/alexeyraspopov/205eecdc57b0f8e0d2f462609b25ba0d -->

#### ```Redux```

Store managment library.

#### ```Reconciliation```

The process through which React updates the DOM. React then takes tree of components, process it and we get a Virtual DOM. When there is an update in our application (e.g. change in state or props) React will compare the updated Virtual DOM with the old one, then decides what and how should be changed.

Read about new reconciliation engine - [Fiber](/posts/react-glossary#fiber).

#### ```Refs```

Read more about [Callback Refs](/posts/react-glossary#reactcreateref).

#### ```Render props```

A technique for sharing code between React components using a prop whose value is a function.

<details>
  <summary>Example with Mouse 🔥</summary>

```js
class InnerComponent extends Component {
  render() {
    const { mouse } = this.props
    return (
      <div style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    )
  }
}

class Mouse extends Component { 
  this.state = { x: 0, y: 0 }

  handleMouseMove = ({clientX: x,  clientY: y}) => {
    this.setState({x, y})
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div>lorem</div>
        <Mouse render={(mouse) => (
          <InnerComponent mouse={mouse} />
        )}/>
      </div>
    )
  }
}
```

</details>

#### ```Reselect```

Library for creating a memoized function for selection data. Might be used for effective data computation from the Redux store (keep in your store minimum data and create derivatives data using selectors).

## S:

#### ```Suspense```

1. Suspense is not Component Tree sensitive:

```js
render() {
  return(
   <div className='product-list'>
     <Suspense fallback={<h2>Product is loading...</h2>}>
        <p>My product:</p>
        <section>      
           <Product id='1' />
        </section>
     </Suspense>
   </div>
  )
}
```

2. We can have nested Suspense objects within other Suspense objects:

```
MainComponent
  Suspense  
     lazy ProductComponent
        Suspense
          lazy ProductImageComponent
        Suspense
           lazy ProductReviewsComponent
```

```ImageComponent``` and ```ReviewsComponent``` are independent of each other, and are initiated once ```ProductComponent``` has loaded.

3. We can wrap multiple lazily loaded components under one Suspense object.

## T:
## U:
## V:
## W:
## X:
## Y:
## Z:
