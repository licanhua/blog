---
title: LeetCode 1
date: "2021-12-11T23:12:03.284Z"
description: "Leetcode good example"
tags: ["JavaScript", "Data Structures", "leetcode"]

---

[160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)

```js
 // Assume list A and list B, the intersection of A and B 
 // should be the same as intersection of AB and BA
 // ...A ...B
 // ...B ...A
 var getIntersectionNode = function(headA, headB) {
  let cur1 = headA;
  let cur2 = headB;
  while (cur1 != cur2) {
      cur1 = cur1 ? cur1.next : headB;
      cur2 = cur2 ? cur2.next : headA;
  }
  return cur1;
};
```

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

[148. Sort list](https://leetcode.com/problems/sort-list/)
- fast and slow pointers
- let or var in function

```js
function sortList(head) {
    if (head == null || head.next == null) return head;
    let slow = head, fast = head.next;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow.next;
    slow.next = null;
    let l1 = sortList(head);
    let l2 = sortList(mid);
    let dummy = new ListNode();
    let cur = dummy;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 == null ? l2 : l1;
    return dummy.next;
};
```