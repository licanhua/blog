---
title: JavaScript Knowns
date: "2022-01-10T20:00:00.000Z"
description: "JavaScript Knowns"
tags: ["JavaScript", "Tips"]
---

# implement sum
```js
sum() {

}

console.log(sum(2,1,3));
```

Legacy
```js
function sum() {
    const args = arguments;
    let res = 0;
    for (let i=0; i<args.length; i++) {
        res += args[i];
    }
    return res;
}

console.log(sum(2,1,3));
```

Functions Rest Parameters
```js
function sum(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum(2,1,3));
```

# Contains case insensitive
```js
const a = "This is a test";
const b = "IS";
a.toLowerCase().includes(b.toLowerCase())
!!a.match(new RegExp(b, "i"));
new RegExp(b, "i").test(a)
```

# implement delay(ms)
```js
const delay = (ms) => new Promise(res => setTimeout(res, ms))


function delay(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}
```