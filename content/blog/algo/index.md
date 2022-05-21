---
title: Trie, Heap and Binary Index Tree
date: "2022-05-21T10:10:03.284Z"
description: "Trie, Max Heap and Binary Index Tree"
tags: ["Trie", "Heap", "Binary Index Tree"]

---

## Trie

```
 structure Node
   Children Node[Alphabet-Size]
   Is-Terminal Boolean
   Value Data-Type
 end structure

Trie-Insert(x, key, value)
    for 0 ≤ i < key.length do
        if x.Children[key[i]] = nil then
          x.Children[key[i]] := Node()
        end if
        x := x.Children[key[i]]
    repeat
    x.Value := value
    x.Is-Terminal := True
```

## Max Heap

```
// Perform a down-heap or heapify-down operation for a max-heap
// A: an array representing the heap, indexed starting at 1
// i: the index to start at when heapifying down
Max-Heapify(A, i):
    left ← 2×i
    right ← 2×i + 1
    largest ← i
    
    if left ≤ length(A) and A[left] > A[largest] then:
        largest ← left

    if right ≤ length(A) and A[right] > A[largest] then:
        largest ← right
    
    if largest ≠ i then:
        swap A[i] and A[largest]
        Max-Heapify(A, largest)

Build-Max-Heap (A):
    for each index i from floor(length(A)/2) downto 1 do:
        Max-Heapify(A, i)
```

## Binary Index Tree

```
void update(int x, int delta)
{
      for(; x <= n; x += x&-x)
        BIT[x] += delta;
}
int query(int x)
{
     int sum = 0;
     for(; x > 0; x -= x&-x)
        sum += BIT[x];
     return sum;
}
```