[![Build Status](https://travis-ci.com/devchris/jsdig.svg?branch=master)](https://travis-ci.com/devchris/jsdig)

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
import dig from 'jsdig';
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
jsdig(world, 'locations', 'usa') === 'Indianapolis';
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
jsdig(world, 'locations', 0, 'europe') === 'Bamberg';
```

3. If it can't find the value, it will return null.


# License

MIT © Christoph Drechsler
