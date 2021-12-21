---
title: JavaScript For..In/For..Of/ForEach Loops 
date: "2021-12-20T06:00:00.000Z"
description: "JavaScript For..In/For..Of/ForEach Loops for Object, Array, Map, and Set"
tags: ["JavaScript", "Loop"]

---

## For..In
for in, iterates keys in an object and indexes in an array

Do not use for in over an Array if the index order is important. The index order is implementation-dependent, and array values may not be accessed in the order you expect.

```js
for (key in object) {
  // code block to be executed
}

for (index in array) {
  code
}
```

You may not get expect result when using it in Map and Set

```js
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
   console.log(pet); // "species"
}
```

## For..Of
The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

```js
for (variable of iterable) {
  // code block to be executed
}


// Array
for (const x of ["BMW", "Volvo", "Mini"]) console.log(x)

// String
for (let x of "language") console.log(x)

// Set
const letters = new Set(["a","b","c"]);
for (const x of letters.values())  console.log(x);
for (const x of letters.keys())  console.log(x);
for (const x of letters)  console.log(x);
for (let [key, value] of letters.entries()) console.log(key + ":" + value);

// Map
var map = new Map([["firstname" ,"Canhua"], 
        ["lastname", "Li"], ["website", "licanhua.github.io"]]);
for (const x of map.values())  console.log(x);
for (const x of map.keys())  console.log(x);
for (const x of map)  console.log(x);
for (let [key, value] of map.entries()) console.log(key + ":" + value);

```

## ForEach
JavaScript forEach() is related to the execution of a function on each element of an array which means that for each() method is exclusively related to the elements defined in an array. This can only be used on Maps, Arrays and sets which represents another fact that the elements should be arranged in a specific order to perform some activity.

```js
// Ordered data structure(callback function() (present_value [,index[,data_structure]])[, thisArg])
arr.forEach(function(element, index, array) { /* ... */ }, thisArg)
map.forEach(function(value, key, map) { /* ... */ }, thisArg)
set.forEach(function(value, key, set) { /* ... */ }, thisArg)

// Map
new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach((value, key, map) => {
  console.log(`m[${key}] = ${value}`);
})
// m[foo] = 3
// m[bar] = [object Object]
// m[baz] = undefined

// Set
new Set(['foo', 'bar', undefined]).forEach((value1, value2, set) => {
    console.log('s[' + value1 + '] = ' + value2);
})
// s[foo] = foo
// s[bar] = bar
// s[undefined] = undefined

["a","b","c"].forEach((element, index) => console.log(`arr[${index}] = ${element}`));
// arr[0] = a
// arr[1] = b
// arr[2] = c

```