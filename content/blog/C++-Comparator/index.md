---
title: C++ priority_queue and comparator
date: "2021-12-15T13:50:00.000Z"
description: "C++ Comparator for priority_queue"
tags: ["C++", "Comparator"]

---
## std::greater or less
```c++
priority_queue<int,vector<int>,greater<int>> pq;
```

## use function
```c++
bool compare(ListNode* a, ListNode* b)
{
   return (a->val > b->val);
}

priority_queue<ListNode*, vector<ListNode*>, decltype(&compare)> q(compare);

```

## using lambda to compare

```c++
    auto compare = [](int lhs, int rhs)
                {
                    return lhs < rhs;
                };

    std::priority_queue<int, std::vector<int>, decltype(compare)> q(compare);

```

## struct
```c++
struct Compare
{
    bool operator()(const int& lhs, const int& rhs)
    {
        return lhs < rhs;
    }
};
priority_queue<int,vector<int>, Compare > pq;
```