---
title: JavaScript Common Mistakes
date: "2021-12-20T11:00:00.000Z"
description: "JavaScript Common Mistakes"
tags: ["JavaScript", "Common Mistakes"]
---

## Accidentally Using the Assignment Operator
- This if statement returns true (maybe not as expected), because 10 is true:

```js
let x = 0;
if (x = 10) {...}

let x = 0;
if (x = 0) {...}
```

## Expecting Loose Comparison
In regular comparison, data type does not matter. This if statement returns true:
```js
let x = 10;
let y = "10";
if (x == y) // true
```

In strict comparison, data type does matter. This if statement returns false:
```js
let x = 10;
let y = "10";
if (x === y) // false
```

## switch statements use strict comparison
```js
let x = 10;
switch(x) {
  case "10": alert("Hello"); // no alert. should use case 10:
}
```

## Confusing Addition & Concatenation
```js
let x = 10;
x = 10 + 5;       // Now x is 15

let y = 10;
y += "5";        // Now y is "105"
```

## Misunderstanding Floats
```js
let x = 0.1;
let y = 0.2;
let z = x + y            // the result in z will not be 0.3. but 0.30000000000000004

let z = (x * 10 + y * 10) / 10;       // z will be 0.3
```

## Undefined is Not Null

You can test if an object exists by testing if the type is undefined
```js
if (typeof myObj === "undefined") 
```

but it will throw exception if
```js
if (myObj === null) 
if (myObj === undefined) 
```

How to test a obj is not empty
```js
if (typeof myObj !== "undefined" && myObj !== null) 
```

## type coercion
```js
let x = 'hello' && 123;   // x === 123

```

## Incorrect references to this
```js
Game.prototype.restart = function () {
  
  var self = this;   // save reference to 'this', while it's still this!
  this.timer = setTimeout(function(){
    this.clearBoard();   // this doesn't work here.
    self.clearBoard();    // oh OK, I do know who 'self' is!
  }, 0);
};
```

## NaN
```js
console.log(NaN == NaN);    // false
console.log(NaN === NaN);   // false
console.log(isNaN(NaN));    // true
```

## Incorrect use of function definitions inside for loops
```js
var elements = document.getElementsByTagName('input');
var n = elements.length;    // assume we have 10 elements for this example
for (var i = 0; i < n; i++) {
    elements[i].onclick = function() {
        console.log("This is element #" + i); // Actual Result: This is element #10
    };
}
```

Fix it with a function
```js
var makeHandler = function(num) {  // outer function
     return function() {   // inner function
         console.log("This is element #" + num);
     };
};
for (var i = 0; i < n; i++) {
    elements[i].onclick = makeHandler(i+1);
}

```
## Reference
https://www.w3schools.com/js/js_mistakes.asp

