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

<!-- ## Categories: -->

<!-- 1. [JS Core](/js-dictionary/js-core)
1. [Design Patterns](/js-dictionary/design-patterns)
1. [Architecture principles](/js-dictionary/architecture-principles)
1. [Functional programming](/js-dictionary/functional-programming)
1. [Testing in JS]() -->

# Dictionary:

<!-- https://overreacted.io/react-as-a-ui-runtime/ -->

<!-- https://habr.com/ru/post/458916/ -->

<!-- https://frontend-stuff.com/blog/react-16.9/ -->

## A:
## B:
## C:

#### ```Context```

<!-- https://habr.com/ru/post/419449/ -->

<!-- https://github.com/facebook/react/issues/13739 -->

#### ```Controlled Components```

#### ```Uncontrolled Components```

#### ```React.createRef```

Way to access DOM nodes or React elements created in the render method.
Motivations for creating the ```React.createRef``` method in [RFC](https://github.com/reactjs/rfcs/pull/17/files).

<details>
  <summary>Example with focusing text input</summary>

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
  <summary>Example with React.forwardRef</summary>

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
  <summary>Example with focusing text input</summary>

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
## G:
## H:

#### ```HOCs```

#### ```Hooks```

<!-- https://reactjs.org/docs/hooks-state.html -->
<!-- https://reactjs.org/docs/hooks-effect.html -->
<!-- https://reactjs.org/docs/hooks-faq.html#how-do-lifecycle-methods-correspond-to-hooks -->

<!-- https://www.youtube.com/watch?v=dpw9EHDh2bM -->

<!-- https://blog.jakoblind.no/react-redux-hooks/ -->

<!-- examples -->

<!-- https://gist.github.com/alexeyraspopov/205eecdc57b0f8e0d2f462609b25ba0d -->

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

<!-- https://medium.com/@rossbulat/react-lazy-suspense-and-concorrent-react-breakdown-with-examples-2758de98cb1c -->

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

#### ```MobX```

<!-- https://reactjs.org/blog/2018/10/23/react-v-16-6.html -->

## N:
## O:
## P:

#### ```PureComponent```

Only rerender if at least one state or prop value changes, it performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.


## Q:
## R:

#### ```Recompose```

Utility belt for function components and HOCs (```pure```, ```shouldUpdate```). Use React Hooks instead of it.

#### ```Redux```

Store managment library.

#### ```Reconciliation```

<!-- https://reactjs.org/docs/reconciliation.html#recursing-on-children -->

#### ```Refs```

Read more about [Callback Refs](/posts/react-glossary#reactcreateref).

#### ```Render props```

#### ```Reselect```

Library for creating a memoized function for selection data. Might be used for effective data computation from the Redux store (keep in your store minimum data and create derivatives data using selectors).

## S:
## T:
## U:
## V:
## W:
## X:
## Y:
## Z:
