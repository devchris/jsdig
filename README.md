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
