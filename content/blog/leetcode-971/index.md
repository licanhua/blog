---
title: LeetCode 971 - Flip Binary Tree To Match Preorder Traversal
date: "2022-03-16T22:12:03.284Z"
description: "Leetcode good solution"
tags: ["JavaScript", "C++", "Data Structures", "leetcode"]

---


[971. Flip Binary Tree To Match Preorder Traversal](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/)

## use stack
```js
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
    const flipped = [];
    const nodes = [];
    
    let index = -1;
    nodes.push(root);
    
    while (nodes.length > 0) {
        const node = nodes.pop();
        index++;
        if (node.val !== voyage[index]) {
            return [-1];
        }
        if (node.left && node.left.val !== voyage[index+1]) {
            // swap
            flipped.push(node.val);
            node.left && nodes.push(node.left);
            node.right && nodes.push(node.right);
        } else {
            node.right && nodes.push(node.right);
            node.left && nodes.push(node.left);
        }
    }
    
    return flipped;
};

```

```c++
class Solution {
  
public:
    vector<int> flipMatchVoyage(TreeNode* root, vector<int>& voyage) {
        vector<int> flipped;
        if (root)
        {
            int index = -1;
            stack<TreeNode*> nodes;
            nodes.push(root);
            while (!nodes.empty()) {
                auto node = nodes.top();
                nodes.pop();
                index++;
                if (voyage[index] != node->val) {
                    return {-1};
                }
                
                if (node->left && node->left->val != voyage[index+1]) {
                    flipped.push_back(node->val);
                    std::swap(node->left, node->right);
                }
                
                if (node->right) {
                    nodes.push(node->right);
                }
                if (node->left) {
                    nodes.push(node->left);
                }
            }
        }
        
        return flipped;
    }
};
```

## DFS
```js
var flipMatchVoyage = function(root, voyage) {
    let index = 0;
    const flipped = [];

    const dfs = (node) => {
        if (!node) return true;
        
        if (node.val !== voyage[index++]) {
            return false;
        }
        
        if (node.left && node.left.val !== voyage[index]) {
            flipped.push(node.val);
            return dfs(node.right) && dfs(node.left);
        } else {
            return dfs(node.left) && dfs(node.right);
        }
    }
    
    if (dfs(root)) {
        return flipped;
    } else {
        return [-1];
    }
};
```