# runtime-environment
Runtime environment data library for JavaScript

# Installing

NodeJS:
```
npm install runtime-environment
import { runtime } from "runtime-environment"
```

Deno:
```javascript
import { runtime } from "https://raw.githubusercontent.com/CyberDie22/runtime-environment/main/runtime-environment.js"
```

```javascript
runtime.environment // 'nodejs' or 'deno'
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
