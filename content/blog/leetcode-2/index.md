---
title: LeetCode 2
date: "2021-12-20T03:12:03.284Z"
description: "Leetcode good solution"
tags: ["JavaScript", "Data Structures", "leetcode"]

---

[238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  let output = new Array(n);
  for (let i = 0, left = 1; i < n; ++i) {
    output[i] = left;
    left *= nums[i];
  }
  for (let i = n - 1, right = 1; i >= 0; --i) {
    output[i] *= right;
    right *= nums[i];
  }
  return output;
};

```

[154. Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    const m = (l + r) >> 1;
    if (nums[m] > nums[r]) l = m + 1;
    else if (nums[m] < nums[r]) r = m;
    else --r;
  }
  return nums[l];
};
```

Reverse a String

```js
str.split('').reverse().join('')
[...str].reverse().join('')
```