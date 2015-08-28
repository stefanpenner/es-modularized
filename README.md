##

## Questions

### principle (dave)

* split normal API from reflective.



### bucket vs utility functions

```js
import Object from 'object;

// form 1:

import { isPrototypeOf } from 'object';

// form 2:

const { isPrototypeOf } = Object;
```

#### form 1:

* bindings remain unbroken

#### form 2:

* bindings diverge

It is possible that both form 1 and form 2 are desirable;

### Clustering

module depth:

self categorizing (nice for docs, shows relation of similar species)

array
array/float32
array/float64
error
error/type
error/range

what about array/uint8-clamped vs array/uint8/clamped
what about weak-map vs weak/map vs map/weak
what about weak-set vs weak/set vs set/weak

top level

array
float32-array
float64-array
error
type-error;
range-erro

### Performance

VMs now have the oppertunity to lazily initializer unused properties on namesapces. For example:

```js
Math.abs // often only incures the penality of initializing `Math.abs`, not the other sibling properties unaccessed
```

As Modules, we likely must ensure the runtimes maintain this

### Safety

Freeze the enviroment

### HotSwaping/Patching

### important `this`

Promise.all Promise.resolve Promise.reject all have an important `this` which
means, they are non-functional without an approriate `this` and as such should
not be available as named exports of the promise module.

Rather if someone would like to capture `all` should prefer importing the
promise module and destructuring the `all`.

example:

```js
import Promise from 'promise';
const { all } = Promise;
```


### some modules are massive buckets, should we break up the helpers functions further?

An example may be Symbols various symbols like search + species (https://people.mozilla.org/~jorendorff/es6-draft.html#table-1) or Math constants

* Reflect feels strange as a module

* Math NS has no more meaning in the module world, it would seem like we can
  either do just a module of named exports, or that + a bucket.

* Does `Math.sin <` get its functionality from `import { sin } from 'math'` ?
  or are they divergent

* module API could be seen as a refresh, bugs can be fixed and defaults changed


```js
window.Promise === import Promise from 'promise';
window.Promise = 1, import Promise from 'promise'; keeps working
Promise.all !=== import { all } from 'promise';
```


----

`import { defineProperty } from 'reflect/object';`

Object.defineProperty !=== defineProperty

it has better defaults, such as {
  value:
  enumerable: true,
  configurable: true,
  writable: true
};

