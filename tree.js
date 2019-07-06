class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
};

// 二叉搜索树的左子节点小于父节点，右子节点大于父节点。如果插入时遇到相等于父节点的按实际情况处理，只要保证遍历时的单调性即可。
class BinaySearchTree {
    constructor() {
        this.root = null;
    }
    remove(key){
        this.root = this.removeNode(this.root, key);
    }

    removeNode(node ,key){
        if(node === null) {
            return null
        };
        if(this.compare(key, node.key) === -1) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if(this.compare(key, node.key) === 1) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if(node.left === null && node.right === null) { // 左右子节点为空
                node = null;
                return node;
            } else if(node.left === null && node.right !== null) { // 左子节点为空， 右子节点不为空
                node = node.right;
                return node;
            } else if(node.left !== null && node.right === null) { // 左子节点不为空， 右子节点为空
                node = node.left;
                return node;
            } else { // 左右子节点均不为空
                let minNode = this.getMinNode(node.right);
                node.key = minNode.key;
                node.right = this.removeNode(node.right, minNode.key); // 右字树被移除了最小的节点给当前被移除的节点赋值
                return node;
            }
        }
    }

    compare(key1, key2){
        if(key1 > key2) {
            return 1;
        } else if(key1 === key2) {
            return 0;
        } else {
            return -1;
        }
    }

    getDepth(node){ // 获取当前节点深度
        if(node === null) return 0;
        return Math.max(this.getDepth(node.left), this.getDepth(node.right)) + 1;

    }

    getMinNode(node){ //获取最小值
        let min = node;
        while(min !== null && min.left !== null) {
            min = min.left;
        }
        return min;
    }

    getMaxtNode(node){ // 获取最大值
        let max = node;
        if(max !== null && max.right !== null) {
            max = max.right;
        }
        return max;
    }

    searchNode(key, node){ // 搜索特定值
        if(node === null) return false;
        if(this.compare(key, node.key === 1)) {
            this.searchNode(node.left);
        } else if(this.compare(key, node.key) === -1) {
            this.searchNode(node.right);
        } else {
             return true;
        }
    }

    inOderTraverseNode(node, callback){ // 中根遍历
        if(node === null) return;
        this.inOderTraverseNode(node.left, callback);
        callback(node);
        this.inOderTraverseNode(node.right, callback);
    }   

    preTraverseNode(node, callback){ // 先根遍历
        if(node === null) return;
        callback(node);
        this.preTraverseNode(node.left, callback);
        this.preTraverseNode(node.right, callback);
    }   

    afterTraverseNode(node, callback){ // 后根遍历
        if(node === null) return;
        this.afterTraverseNode(node.left, callback);
        this.afterTraverseNode(node.right, callback);
        callback(node);
    }   

    insertNode(node, key){
        if(node === null) return new Node(key);
        if(this.compare(node.key , key) === 1) {
            node.left = this.insertNode(node.left, key);
        } else {
            node.right = this.insertNode(node.right, key);
        }
        return node;
    };

    insert(key){ // 插入值
        if(this.root === null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    getHeight(node){
        if(node === null) {
            return -1;
        }
        return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }
}

class AVLTree extends BinaySearchTree {
    constructor() {
        super();
        this.root = null;
    }

    insert(key){
        this.root = this.insertNode(this.root, key);
    }

    remove(key){
        this.root = this.removeNode(this.root, key);
    }

    insertNode(node, key){
        if(node === null) return new Node(key);
        if(this.compare(node.key , key) === 1) {
            node.left = this.insertNode(node.left, key);
        } else {
            node.right = this.insertNode(node.right, key);
        }

        const differientHeight = this.getHeight(node.left) - this.getHeight(node.right);
        if(differientHeight < -1) { // 右子树深
            if(this.compare(node.right.key, key) === 1) { // 目标右子节点值大于插入节点值，即插入节点在目标节点右子节点的左子树上。RL
                node = this.rotateRL(node);
            } else {
                node = this.rotateRR(node);
            }
        } else if(differientHeight > 1 ) {// 左子树深
            if(this.compare(node.left.key, key) === 1) { //目标左子节点值大于插入节点值，即插入节点在目标节点左子节点左子树上。RL
                node = this.rotateLL(node);
            } else {
                node = this.rotateLR(node);
            }
        } else {} // 平衡


        return node;

    };

    removeNode(node, key){
        node = super.removeNode(node, key);
        if(node === null) return null;
        const diffHeight = this.getHeight(node.left) - this.getHeight(node.right);
        console.log(node.key, diffHeight)
        if(diffHeight > 1) { // 从左子树深
            const leftDiffHeight = this.getHeight(node.left.left) - this.getHeight(node.left.right);

            if(leftDiffHeight < -1) { // 右子树深，LR
                node = this.rotateLR(node);
            } else { // 左子树深或平衡
                node = this.rotateLL(node);
            }
        } else if(diffHeight < -1){ // 从右子树删除
            const rightDiffHeight = this.getHeight(node.right.left) - this.getHeight(node.right.right);
            if(rightDiffHeight > 1) { // 左子树深， RL
                node = this.rotateRL(node);
            } else { // 右子树深或平衡，RR
                node = this.rotateRR(node);
            }
        }
        return node;
    }


    rotateLL(node){
        const top = node.left;
        node.left = top.right;
        top.right = node;
        return top;
    }

    rotateRR(node){
        const top = node.right;
        node.right = top.left;
        top.left = node;
        return top;
    }

    rotateLR(node){
        node.left = this.rotateRR(node.left);
        return this.rotateLL(node);
    }

    rotateRL(node){
        node.right = this.rotateLL(node.right);
        return this.rotateRR(node);
    }
}


export { BinaySearchTree, AVLTree }