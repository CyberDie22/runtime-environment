# runtime-environment-check
Runtime environment checker for JavaScript

# Installing

NodeJS:
```
npm install runtime-environment-check
```

Deno:
```javascript
import { runtime } from "https://raw.githubusercontent.com/CyberDie22/runtime-environment-check/main/runtime-environment-check.js"
```

```
runtime.environment // NodeJS or Deno
```

# Features

Currently this only gives you your runtime environment:
```javascript
runtime.environment
```
as well as command line arguments accessible by:
```javascript
runtime.args
```
