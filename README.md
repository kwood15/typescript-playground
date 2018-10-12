### Install TypeScript globally
```
npm install -g typescript
```

### To transpile to a JavaScript file
```
tsc main.ts
```

### To transpile to a JavaScript file and run it with Node
```
tsc main.ts && node main.js
```
### ES5
```
tsc main.ts --target ES5 && node main.js
```
### ES6
```
tsc main.ts --target ES6 && node main.js
```