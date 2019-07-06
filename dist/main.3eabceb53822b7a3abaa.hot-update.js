webpackHotUpdate("main",{

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ "./tree.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class */ "../class.js");
/* harmony import */ var _css_first_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/first.css */ "./css/first.css");
/* harmony import */ var _css_first_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_first_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_first_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/first.scss */ "./scss/first.scss");
/* harmony import */ var _scss_first_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_first_scss__WEBPACK_IMPORTED_MODULE_3__);




var canvas = document.getElementById('data');
canvas.style.backgroundColor = 'white';
var context = canvas.getContext('2d');
drawBinaryTree();
let colorTest = document.getElementById('colorTest');
let box = document.getElementById('box');
colorTest.className = 'colorTest';
box.className = 'box';
console.log('test');

function drawBinaryTree() {
    let tree = new _tree__WEBPACK_IMPORTED_MODULE_0__["AVLTree"]();
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRDtBQUNiO0FBQ2Q7QUFDRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsNkNBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uM2VhYmNlYjUzODIyYjdhM2FiYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBCaW5heVNlYXJjaFRyZWUsIEFWTFRyZWUgfSAgZnJvbSAnLi90cmVlJztcclxuaW1wb3J0IHsgSHVtYW4gLCBHaXJsfSBmcm9tICcuLi9jbGFzcyc7XHJcbmltcG9ydCAnLi9jc3MvZmlyc3QuY3NzJztcclxuaW1wb3J0ICcuL3Njc3MvZmlyc3Quc2Nzcyc7XHJcbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YScpO1xyXG5jYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcclxudmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuZHJhd0JpbmFyeVRyZWUoKTtcclxubGV0IGNvbG9yVGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvclRlc3QnKTtcclxubGV0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3gnKTtcclxuY29sb3JUZXN0LmNsYXNzTmFtZSA9ICdjb2xvclRlc3QnO1xyXG5ib3guY2xhc3NOYW1lID0gJ2JveCc7XHJcbmNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcblxyXG5mdW5jdGlvbiBkcmF3QmluYXJ5VHJlZSgpIHtcclxuICAgIGxldCB0cmVlID0gbmV3IEFWTFRyZWUoKTtcclxuICAgIC8vbGV0IHRyZWUgPSBuZXcgQmluYXlTZWFyY2hUcmVlKCk7XHJcbiAgICBpbnNlcnQodHJlZSwgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSAsMTIsIDEzLCAxNCwgMTUsIDE2XSk7XHJcbiAgICB0cmVlLnJlbW92ZSgxMylcclxuICAgIGxldCBhcnIgPSBpbml0VHJlZSh0cmVlKTtcclxuICAgIHBhaXRMaW5lKHRyZWUucm9vdCk7XHJcbiAgICBwYWl0Q2lyY2xlKHRyZWUucm9vdCk7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBsZXQgbnVtID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmKGkgPiBhcnIubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKG51bSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0LmFyYyhhcnJbaV0ueCwgYXJyW2ldLnksIDIwLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XHJcbiAgICAgICAgbGV0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChhcnJbaV0ueCwgYXJyW2ldLnksIDEwLCBhcnJbaV0ueCwgYXJyW2ldLnksIDIwKTtcclxuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwncmdiYSgxOTIsIDgwLCA3NywgMCknKTtcclxuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSxcInJlZFwiKTtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIGkrKztcclxuICAgIH0sIDEwMDApO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0KHRyZWUsIGFycikge1xyXG4gICAgYXJyLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgdHJlZS5pbnNlcnQoZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFRyZWUodHJlZSkge1xyXG4gICAgbGV0IG1heFdpZHRoID0gTWF0aC5wb3coMiwgdHJlZS5nZXREZXB0aCh0cmVlLnJvb3QpIC0gMSkgKiA1MDtcclxuICAgIGluaXREYXRhKHRyZWUucm9vdCwgbWF4V2lkdGgpO1xyXG4gICAgbGV0IGFyciA9IFtdO1xyXG4gICAgdHJlZS5wcmVUcmF2ZXJzZU5vZGUodHJlZS5yb290LCAobm9kZSkgPT4ge1xyXG4gICAgICAgIGFyci5wdXNoKG5vZGUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG59XHJcbmZ1bmN0aW9uIGluaXREYXRhKG5vZGUsIG1heFdpZHRoKSB7XHJcbiAgICBpZihub2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYoIW5vZGUuZGVwdGggfHwgbm9kZS5kZXB0aCA9PT0gbnVsbCkge1xyXG4gICAgICAgIG5vZGUuZGVwdGggPSAxO1xyXG4gICAgICAgIG5vZGUueCA9IG1heFdpZHRoIC8gMjtcclxuICAgICAgICBub2RlLnkgPSAxMDA7XHJcbiAgICB9O1xyXG4gICAgaWYobm9kZS5sZWZ0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgbm9kZS5sZWZ0LmRlcHRoID0gbm9kZS5kZXB0aCArIDE7XHJcbiAgICAgICAgbm9kZS5sZWZ0LnggPSBub2RlLnggLSBtYXhXaWR0aC8oNCAqIG5vZGUuZGVwdGgpO1xyXG4gICAgICAgIG5vZGUubGVmdC55ID0gbm9kZS55ICsgNDA7XHJcbiAgICB9XHJcbiAgICBpZihub2RlLnJpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgbm9kZS5yaWdodC5kZXB0aCA9IG5vZGUuZGVwdGggKyAxO1xyXG4gICAgICAgIG5vZGUucmlnaHQueCA9IG5vZGUueCArIG1heFdpZHRoLyg0ICogbm9kZS5kZXB0aCk7XHJcbiAgICAgICAgbm9kZS5yaWdodC55ID0gbm9kZS55ICsgNDA7XHJcbiAgICB9XHJcbiAgICBpbml0RGF0YShub2RlLmxlZnQsIG1heFdpZHRoKTtcclxuICAgIGluaXREYXRhKG5vZGUucmlnaHQsIG1heFdpZHRoKTtcclxufVxyXG5mdW5jdGlvbiBwYWl0TGluZShub2RlKSB7XHJcbiAgICBpZihub2RlID09PSBudWxsKSByZXR1cm47XHJcbiAgICBpZihub2RlLmxlZnQgIT09IG51bGwpIHtcclxuICAgICAgICBkcmF3TGluZShub2RlLngsIG5vZGUueSwgbm9kZS5sZWZ0LngsIG5vZGUubGVmdC55LCBjb250ZXh0KTtcclxuICAgIH1cclxuICAgIGlmKG5vZGUucmlnaHQgIT09IG51bGwpIHtcclxuICAgICAgICBkcmF3TGluZShub2RlLngsIG5vZGUueSwgbm9kZS5yaWdodC54LCBub2RlLnJpZ2h0LnksIGNvbnRleHQpO1xyXG4gICAgfVxyXG4gICAgcGFpdExpbmUobm9kZS5sZWZ0KTtcclxuICAgIHBhaXRMaW5lKG5vZGUucmlnaHQpO1xyXG59XHJcbmZ1bmN0aW9uIHBhaXRDaXJjbGUobm9kZSkge1xyXG4gICAgaWYobm9kZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgZHJhd05vZGUobm9kZS54LCBub2RlLnksIDIwLCBub2RlLmtleSwgY29udGV4dCk7XHJcbiAgICBwYWl0Q2lyY2xlKG5vZGUubGVmdCk7XHJcbiAgICBwYWl0Q2lyY2xlKG5vZGUucmlnaHQpO1xyXG59XHJcbmZ1bmN0aW9uIGRyYXdMaW5lKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZLCBjb250ZXh0KSB7XHJcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgY29udGV4dC5tb3ZlVG8oc3RhcnRYLCBzdGFydFkpO1xyXG4gICAgY29udGV4dC5saW5lVG8oZW5kWCwgZW5kWSk7XHJcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG59XHJcbmZ1bmN0aW9uIGRyYXdOb2RlKHgsIHksIHIsIHRleHQsIGNvbnRleHQpIHtcclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBjb250ZXh0LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XHJcbiAgICBjb250ZXh0LmZpbGwoKTtcclxuICAgIGNvbnRleHQuYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcclxuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgIGNvbnRleHQuZm9udCA9ICcyMHB4IHNlcmlmJztcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuICAgIGNvbnRleHQuZmlsbFRleHQodGV4dCwgeCAtIDUsIHkgKyA1KTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==