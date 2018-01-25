# JavaScript

```javascript
const length = this.state.items.length;
```
eslint error: `prefer-destructuring`

```javascript
const { length } = this.state.items;
```

The object pattern coerces destructuring sources to objects before accessing properties. That means that it works with primitive values:

```javascript
const { length : len } = 'abc'; // len = 3
const { toString: s } = 123; // s = Number.prototype.toString
```

## Refs
[object destructuring](http://exploringjs.com/es6/ch_destructuring.html)
[Centralized PropTypes](https://medium.freecodecamp.org/react-pattern-centralized-proptypes-f981ff672f3b)