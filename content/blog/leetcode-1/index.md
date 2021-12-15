
---
title: LeetCode 1
date: "2021-12-11T23:12:03.284Z"
description: "Leetcode good example"
tags: ["JavaScript", "Data Structures", "leetcode"]

---


[189. Rotate Array](https://leetcode.com/problems/rotate-array/)

It's the best example to use splice
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k %= nums.length;
    nums.splice(0, 0, ...nums.splice(-k, k))
};
```