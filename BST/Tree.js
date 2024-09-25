// Tree.js

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class Tree {
    constructor(array) {
        this.array = array;
        this.root = this.buildTree(array);
    }

    buildTree(array) {
        const uniqueSortedArray = [...new Set(array)].sort((a, b) => a - b);

        const build = (arr) => {
            if (arr.length === 0) return null;

            const mid = Math.floor(array.length / 2);
            const node = new Node(array[mid]);

            node.left = this.buildTree(array.slice(0, mid));
            node.right = this.buildTree(array.slice(mid + 1));

            return node;
        }

        return build(uniqueSortedArray);
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;

        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    deleteItem(value) {

        if (this.root === null) {
            return;
        }

        function deleteNode(node, value) {
            if (node === null) return null;

            if (value < node.value) {
                node.left = deleteNode(node.left, value);
            } else if (value > node.value) {
                node.right = deleteNode(node.right, value);
            } else {
                if (node.left === null && node.right === null) return null;

                if (node.left === null) {
                    return node.right;
                } else if (node.right === null) {
                    return node.left;
                }

                let successor = findMinValue(node.right);
                node.value = successor.value;
                node.right = deleteNode(node.right, successor.value);
            }
            return node;
        }

        function findMinValue(node) {
            while (node.left !== null) {
                node = node.left;
            }
            return node;
        }

        this.root = deleteNode(this.root, value);
    }

    find(value) {
        let currentNode = this.root;

        while (currentNode != null) {
            if (value === currentNode.value) {
                return currentNode;
            }
            currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
        }
        return null;
    }

    levelOrder(callback) {
        if (typeof callback !== 'function') throw new Error('A callback function is required');

        if (this.root === null) return;

        let queue = [this.root];

        while (queue.length > 0) {
            const currentNode = queue.shift();
            callback(currentNode);

            if (currentNode.left !== null) queue.push(currentNode.left);
            if (currentNode.right !== null) queue.push(currentNode.right);
        }
    }

    inOrder(callback) {
        if (typeof callback !== 'function') throw new Error('A callback function is required');
        if (this.root === null) return;

        const traverse = (node) => {
            if (node === null) return;

            traverse(node.left);

            callback(node);

            traverse(node.right);
        }

        traverse(this.root);
    }

    preOrder(callback) {
        if (typeof callback !== 'function') throw new Error('A callback function is required');
        if (this.root === null) return null;

        const traverse = (node) => {
            if (node === null) return;

            callback(node);

            traverse(node.left);

            traverse(node.right);
        }

        traverse(this.root);
    }

    postOrder(callback) {
        if (typeof callback !== 'function') throw new Error('A callback function is required');
        if (this.root === null) return null;


        const traverse = (node) => {
            if (node === null) return;
            traverse(node.left);
            traverse(node.right);
            callback(node);
        }

        traverse(this.root);

    }


    height(node) {
        if (node === null) return 0;

        const leftHeight = this.height(node.left);
        if (leftHeight === -1) return -1; // unbalanced

        const rightHeight = this.height(node.right);
        if (rightHeight === -1) return -1; // unbalanced

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        return Math.max(leftHeight, rightHeight) + 1;

    }

    depth(node) {
        if (node === null) return -1;

        let currentNode = this.root;
        let depth = 0;

        const findDepth = (currentNode, targetNode, currentDepth) => {

            if (currentNode === null) return false;

            if (currentNode === targetNode) {
                depth = currentDepth;
                return true;
            }

            if (findDepth(currentNode.left, targetNode, currentDepth + 1)) return true;

            return findDepth(currentNode.right, targetNode, currentDepth + 1);
        };

        findDepth(this.root, node, depth);
        return depth;
    }

    isBalanced() {
        return this.checkBalanced(this.root);
    };

    checkBalanced(node) {
        if (node === null) return true;

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        const balanced = Math.abs(leftHeight - rightHeight) <= 1;

        return balanced && this.checkBalanced(node.left) && this.checkBalanced(node.right);
    }

    rebalance() {
        const sortedValues = [];
        this.inOrder((node) => sortedValues.push(node.value));

        this.root = this.buildTree(sortedValues);
    }


}

module.exports = Tree;