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
# Features

Get runtime environment:
```javascript
runtime.environment
```

Get command line arguments:
```javascript
runtime.args
```

Exit the program:
```javascript
runtime.exit(0)
```
