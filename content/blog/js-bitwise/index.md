---
title: JavaScript Uses 32 bits Bitwise Operands
date: "2022-01-03T20:12:03.284Z"
description: JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
tags: ["JavaScript", "Bitwise", "32 bits"]

---

JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.

After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.


```js
let a = 4294967293
a // 4294967293
a & a // -3
```