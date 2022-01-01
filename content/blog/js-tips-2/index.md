---
title: JavaScript tips - 2 
date: "2021-12-25T17:00:00.000Z"
description: "JavaScript tips"
tags: ["JavaScript", "Data Structures"]

---

# swap element

```js
const a = ['a', 'b', 'c', 'e', 'd'];
[a[3], a[4]] = [a[4], a[3]]; //[ 'a', 'b', 'c', 'd', 'e' ]
```

```js
a=1, b=2;
[a, b]=[b, a];
```

# Array push to append multiple values
```js
array.push(element)
```

You can use a push() method to append more than one value to an array in a single call.

```js
array.push(item1, item2, item3,...,itemN)
```