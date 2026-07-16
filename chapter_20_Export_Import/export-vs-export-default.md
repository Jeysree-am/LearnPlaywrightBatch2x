# Export vs Export Default

| Feature | Named Export (`export`) | Default Export (`export default`) |
|---------|------------------------|-----------------------------------|
| **Syntax** | `export const x = 5;` | `export default x;` |
| **Import syntax** | `import { x } from './module'` | `import x from './module'` |
| **Name at import** | Must use the **exact same name** as exported | Can import with **any name** |
| **Number per module** | Multiple named exports per module | Only **one** default export per module |
| **Use case** | Utility functions, constants, multiple exports | Main/primary functionality of a module |
| **Inline export** | `export const fn = () => {}` | `export default function() {}` |

## Examples

### Named Export

```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import { add, subtract } from './math';
```

### Default Export

```js
// logger.js
const log = (msg) => console.log(msg);
export default log;

// app.js
import log from './logger';       // same name
import myLogger from './logger';  // different name — works fine
```

### Mixed (both in same module)

```js
// utils.js
export default class ApiClient { ... }
export const BASE_URL = 'https://api.example.com';
export const TIMEOUT = 5000;

// app.js
import ApiClient, { BASE_URL, TIMEOUT } from './utils';
```
