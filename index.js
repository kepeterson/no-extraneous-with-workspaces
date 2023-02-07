const moduleA = require('module-a');

// when calling `node index.js`, this should log the _current value_ of `exportedValue`
// in packages/module-a/index.js without requiring a `yarn install` on every change to `module-a`
console.log(`The value of moduleA.exportedValue is ${moduleA.exportedValue}`)