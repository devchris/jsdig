![Build](https://github.com/devchris/jsdig/workflows/Build/badge.svg)

Lightweight Javascript implementation of Ruby's hash#dig (https://apidock.com/ruby/Hash/dig) - no dependencies

# How to install it

Via npm
```
npm install jsdig
```

Via yarn
```
yarn add jsdig
```

After installing, import it in your project with:

```
import 'jsdig';

OR

require('jsdig');
```

# How to use it

- With an Object:

```js
const world = {
  locations: {
    europe: 'Bamberg',
    usa: 'Indianapolis'
  }
};
```

```js
world.dig('locations', 'usa');
// => 'Indianapolis'
```

- With an Array:
```js
const world = {
  locations: [{
    europe: 'Bamberg',
  }, {
    usa: 'Indianapolis'
  }]
};
```

```js
world.dig('locations', 0, 'europe');
// => 'Bamberg'
```

- It can also call a function inside a nested object, or in an array, or in both:
```js
const germany = () => 'germany';
const world = [0, 1, { location: { europe: germany } }, 3];
world.dig(2, 'location', 'europe') === germany;
world.dig(2, 'location', 'europe')() === 'germany';
```

- If it can't find the value, it will return null.


# License

MIT © Christoph Drechsler
