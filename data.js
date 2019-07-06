import  { BinaySearchTree, AVLTree }  from './tree';
import { Human , Girl} from '../class';
import './css/first.css';
import './scss/first.scss';
var canvas = document.getElementById('data');
canvas.style.backgroundColor = 'white';
var context = canvas.getContext('2d');
drawBinaryTree();
let colorTest = document.getElementById('colorTest');
let box = document.getElementById('box');
colorTest.className = 'colorTest';
box.className = 'box';
function drawBinaryTree() {
    let tree = new AVLTree();
    //let tree = new BinaySearchTree();
    insert(tree, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15, 16]);
    tree.remove(13)
    let arr = initTree(tree);
    paitLine(tree.root);
    paitCircle(tree.root);
    let i = 0;
    let num = setInterval(() => {
        if(i > arr.length - 1) {
            clearInterval(num);
            return;
        }
        context.beginPath();
        context.arc(arr[i].x, arr[i].y, 20, 0, 2 * Math.PI, true);
        let gradient = context.createRadialGradient(arr[i].x, arr[i].y, 10, arr[i].x, arr[i].y, 20);
        gradient.addColorStop(0,'rgba(192, 80, 77, 0)');
        gradient.addColorStop(1,"red");
        context.fillStyle = gradient;
        context.fill();
        i++;
    }, 1000);

}

function insert(tree, arr) {
    arr.forEach(e => {
        tree.insert(e);
    });
}

function initTree(tree) {
    let maxWidth = Math.pow(2, tree.getDepth(tree.root) - 1) * 50;
    initData(tree.root, maxWidth);
    let arr = [];
    tree.preTraverseNode(tree.root, (node) => {
        arr.push(node);
    });
    return arr;
}
function initData(node, maxWidth) {
    if(node === null) {
        return;
    }
    if(!node.depth || node.depth === null) {
        node.depth = 1;
        node.x = maxWidth / 2;
        node.y = 100;
    };
    if(node.left !== null) {
        node.left.depth = node.depth + 1;
        node.left.x = node.x - maxWidth/(4 * node.depth);
        node.left.y = node.y + 40;
    }
    if(node.right !== null) {
        node.right.depth = node.depth + 1;
        node.right.x = node.x + maxWidth/(4 * node.depth);
        node.right.y = node.y + 40;
    }
    initData(node.left, maxWidth);
    initData(node.right, maxWidth);
}
function paitLine(node) {
    if(node === null) return;
    if(node.left !== null) {
        drawLine(node.x, node.y, node.left.x, node.left.y, context);
    }
    if(node.right !== null) {
        drawLine(node.x, node.y, node.right.x, node.right.y, context);
    }
    paitLine(node.left);
    paitLine(node.right);
}
function paitCircle(node) {
    if(node === null) return;
    drawNode(node.x, node.y, 20, node.key, context);
    paitCircle(node.left);
    paitCircle(node.right);
}
function drawLine(startX, startY, endX, endY, context) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
}
function drawNode(x, y, r, text, context) {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, true);
    context.fillStyle = 'white';
    context.fill();
    context.arc(x, y, r, 0, 2 * Math.PI, true);
    context.strokeStyle = 'black';
    context.stroke();
    context.font = '20px serif';
    context.fillStyle = 'black';
    context.fillText(text, x - 5, y + 5);
}

