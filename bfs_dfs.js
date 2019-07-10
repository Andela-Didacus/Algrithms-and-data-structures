class Node {
    constructor(data) {
      this.data = data;
      this.right = null;
      this.left = null;
    }
  }
  
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertNode(data) {
        let newNode = new Node(data);
        if(!this.root) {
            this.root = newNode;
            return this.root;
        } else {
            this.insertNodeHelper(this.root, newNode);
        }
    }

    insertNodeHelper(node, newNode) {
        if(newNode.data > node.data) {
            if(node.right == null) {
                node.right = newNode;
                return node;
            } else {
                this.insertNodeHelper(node.right, newNode);
            }
        } else if(newNode.data < node.data) {
            if(!node.left) {
                node.left = newNode;
                return node;
            } else {
                this.insertNodeHelper(node.left, newNode);
            }
        } else { 
            return `${newNode.data} is a duplicate`;
        }
    }

    remove(data) {
        if(!this.root) {
            return null;
        } else {
            return this.removeNodeHelper(this.root, data);
        }
    }

    removeNodeHelper(node, data) {
        if(data > node.data) {
            if(!node.right) {
                return null;
            } else {
                this.removeNodeHelper(node.right, data);
            }
        } else if(data < node.data) {
            if(!node.left) {
                return "Not found";
            } else {
                this.removeNodeHelper(node.left, data);
            }
        } else if(node.data === data) {
            if(!node.left && !node.right) {
                return null;
            } else if(!node.left) {
                node = node.right;
                return node;
            } else if(!node.right) {
                node = node.left;
                return node;
            } else {
                let tempNode = node.right;
                node.data = this.findMinNode(tempNode).data;
                node.right = this.removeNodeHelper(tempNode, node.data);
                return node;
            }
        }
    }
    findMinNode(node=this.root) {
        if(!node.left) {
            return node;
        };
        let minNode;
        while(node.left) {
            minNode = node.left;
            node = node.left;
        }
        
        return minNode;
    }
    search(value) {
        let count = 0;
        let currentNode = this.root;
        if(this.root === null) {
            return "empty BST";
        }
        while(currentNode) {
            if(currentNode.data === value) {
                return ` Found at position ${count}`;
            } else if(value > currentNode.data) {
                currentNode = currentNode.right;
                count++;
            } else {
                currentNode = currentNode.left;
                count++;
            }
        }
        return "not found";
    }
    inorder() {
        if(!this.root) {
            return null;
        }
        let results = new Array;
        let traverseInOrder = (node) => {
            if(node.left) {
                traverseInOrder(node.left);
            }
            results.push(node.data);
            if(node.right) {
                traverseInOrder(node.right);
            }
        }
        traverseInOrder(this.root);
        return results;
    }
    preOrder() {
        if(!this.root) {
            return null;
        }
        let results = new Array;
        let traversePreOrder = (node) => {
            results.push(node.data);
            node.left && traversePreOrder(node.left);
            node.right && traversePreOrder(node.right);
        }
        traversePreOrder(this.root);
        return results;
    }
    postOrder() {
        if(!this.root) {
            return null;
        }
        let results = [];
        let traversePostOrder = (node) => {
            node.left && traversePostOrder(node.left);
            node.right && traversePostOrder(node.right);
            results.push(node.data);
        }
        traversePostOrder(this.root);
        return results;
    }

    levelOrder() {
        let result = [];
        let que = [];
        if(this.root != null) {
            que.push(this.root);
            while(que.length > 0) {
                let node = que.shift();
                result.push(node.data);
                console.log(result);
                if(node.left != null) {
                que.push(node.left);
                }
                if(node.right != null) {
                que.push(node.right);
                }
            }
            return result;
        } else {
            return null;
        }
    }
    levelOrder2() {
        let result = [];
        let Q = []; 
        if (this.root != null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                };
                if (node.right != null) {
                    Q.push(node.right);
                };
            };
            return result;
        } else {
            return null;
        };
    };
}

let didah = new BinarySearchTree();
didah.insertNode(54);
didah.insertNode(24);
didah.insertNode(40);
didah.insertNode(15);
didah.insertNode(14);
didah.insertNode(13);
didah.insertNode(16);
// didah.remove(15);
// console.log(didah.root.left);
// didah.search(15);
console.log(didah.inorder());
console.log(didah.preOrder());
console.log(didah.postOrder());
console.log(didah.levelOrder());
console.log(didah.levelOrder2());