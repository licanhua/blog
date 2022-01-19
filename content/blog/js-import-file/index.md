---
title: ES6 import
date: "2022-01-18T22:00:00.000Z"
description: "use 'import name from' to import json and css file in react project"
tags: ["JavaScript", "Import"]
---
'import name from' is the right way to import json and css files in react project.

Yesterday someone complains hostconf doesn't work when they are using adaptivecards-react. After the investigation, the root cause is that she import the json file like below:  

```js
import * as dark from "./dark.json"
```

But actually it should be
```js
import dark from "./dark.json"
```

Here is the why:

- Importing an entire module: 
```js
import * as name from 'module-name'
```

- Import default export from a module:
```js
import name from 'module-name'
```
