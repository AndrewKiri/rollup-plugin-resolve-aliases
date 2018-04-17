# rollup-plugin-resolve-aliases
Define aliases when bundling packages with Rollup that work the same way as Webpack's aliases resolving to index.js files by default if the folder is imported.

## Installation with NPM
```
$ npm install rollup-plugin-resolve-aliases
```

## Installation with Yarn
```
$ yarn add rollup-plugin-resolve-aliases
```

## Usage with default export
```javascript
// rollup.config.js
import resolveAliases from 'rollup-plugin-resolve-aliases';

export default {
  input: './src/index.js',
  plugins: [resolveAliases({
    someAlias: './someFolder'
  })],
};
// rollup.config.js [END]

// someFolder/index.js
const SomeComponent = {}
export default SomeComponent
// someFolder/index.js [END]

// file where alias is supposed to be used
import SomeComponent from 'someAlias' // will be resolved to ->> ./someFolder/index.js
// file where alias is supposed to be used [END]
```

## Usage with destructuring
```javascript
// rollup.config.js
import resolveAliases from 'rollup-plugin-resolve-aliases';

export default {
  input: './src/index.js',
  plugins: [resolveAliases({
    someAlias: './someFolder'
  })],
};
// rollup.config.js [END]

// someFolder/index.js
const SomeComponent = {}
const SomeOtherComponent = {}
const EvenAnotherComponent = {}
export default {
  SomeComponent,
  SomeOtherComponent,
  EvenAnotherComponent
}
// someFolder/index.js [END]

// file where alias is supposed to be used
import { SomeComponent, SomeOtherComponent, EvenAnotherComponent } from 'someAlias';
// file where alias is supposed to be used [END]
```

## PR reviewers
[@andrewkiri](https://github.com/AndrewKiri)

## License
MIT, see `LICENSE` for more information
