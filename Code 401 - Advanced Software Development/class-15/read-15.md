# Read 9a: Trees

## TREES

### Common Terminology

* **Node**: A Tree node is a component which contains it's own values but is connected to other nodes. Just like queue nodes, stack nodes etc.
* **Root**: Root is the progenitor. All nodes are children of the root.
* **K**: A number that specifies the max number of children any node may have in a k-tree. A binary tree is k =2.
* **Left**: A reference to the left child node in a binary tree.
* **Right**: A reference to the right child node in a binary tree.
* **Edge**: Edge in a tree is the link between child an parent. In a tree chart it is the line connecting the entries.
* **Leaf**: A node that does not have children.
* **Height**: The height a tree is the number of edges. So a parent > child > child is only a height of 2 *NOT* 3.

### Traversin a Tree

There are two ways, each of which has it's own sub methods: **Depth First** and **Breadth First**.

### Depth First

* Pre-Oder: Root >> left >> right
* In-Order: Left >> Root >> Right
* Post-order: left >> right >> root

### Pre-Order
```
            A
    B               C
D       E       F
```
Would traverse A > B > D, do has no children so it returns D

< to back to B. B > E. E has no children, retrun E.
< back to B. Be no longer has chilren. Return B.
< back to A. A > C > F. F has no children, return F.

### Depth First

In the above tree, it would return A, B, C, D, E, F.