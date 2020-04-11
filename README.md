[![Build Status](https://travis-ci.com/devchris/jsdig.svg?branch=master)](https://travis-ci.com/devchris/jsdig)

Lightweight Javascript implementation with no dependencies of Ruby's hash#dig (https://apidock.com/ruby/Hash/dig)

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
```

# How to use it

1. With an Object:

```
const world = {
  locations: {
    europe: 'Bamberg',
    usa: 'Indianapolis'
  }
}
```

```
world.dig('locations', 'usa') === 'Indianapolis';
```

2. With an Array:
```
const world = {
  locations: [{
    europe: 'Bamberg',
  }, {
    usa: 'Indianapolis'
  }]
}
```

```
world.dig('locations', 0, 'europe') === 'Bamberg';
```

3. If it can't find the value, it will return null.


# License

MIT © Christoph Drechsler
