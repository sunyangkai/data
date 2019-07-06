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
console.log('test')

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRDtBQUNiO0FBQ2Q7QUFDRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsNkNBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uNzYxN2RhNWY3NTljNzAyZmRkNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBCaW5heVNlYXJjaFRyZWUsIEFWTFRyZWUgfSAgZnJvbSAnLi90cmVlJztcclxuaW1wb3J0IHsgSHVtYW4gLCBHaXJsfSBmcm9tICcuLi9jbGFzcyc7XHJcbmltcG9ydCAnLi9jc3MvZmlyc3QuY3NzJztcclxuaW1wb3J0ICcuL3Njc3MvZmlyc3Quc2Nzcyc7XHJcbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YScpO1xyXG5jYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcclxudmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuZHJhd0JpbmFyeVRyZWUoKTtcclxubGV0IGNvbG9yVGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvclRlc3QnKTtcclxubGV0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3gnKTtcclxuY29sb3JUZXN0LmNsYXNzTmFtZSA9ICdjb2xvclRlc3QnO1xyXG5ib3guY2xhc3NOYW1lID0gJ2JveCc7XHJcbmNvbnNvbGUubG9nKCd0ZXN0JylcclxuXHJcbmZ1bmN0aW9uIGRyYXdCaW5hcnlUcmVlKCkge1xyXG4gICAgbGV0IHRyZWUgPSBuZXcgQVZMVHJlZSgpO1xyXG4gICAgLy9sZXQgdHJlZSA9IG5ldyBCaW5heVNlYXJjaFRyZWUoKTtcclxuICAgIGluc2VydCh0cmVlLCBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExICwxMiwgMTMsIDE0LCAxNSwgMTZdKTtcclxuICAgIHRyZWUucmVtb3ZlKDEzKVxyXG4gICAgbGV0IGFyciA9IGluaXRUcmVlKHRyZWUpO1xyXG4gICAgcGFpdExpbmUodHJlZS5yb290KTtcclxuICAgIHBhaXRDaXJjbGUodHJlZS5yb290KTtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGxldCBudW0gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaSA+IGFyci5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobnVtKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQuYXJjKGFycltpXS54LCBhcnJbaV0ueSwgMjAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcclxuICAgICAgICBsZXQgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGFycltpXS54LCBhcnJbaV0ueSwgMTAsIGFycltpXS54LCBhcnJbaV0ueSwgMjApO1xyXG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCdyZ2JhKDE5MiwgODAsIDc3LCAwKScpO1xyXG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLFwicmVkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnQodHJlZSwgYXJyKSB7XHJcbiAgICBhcnIuZm9yRWFjaChlID0+IHtcclxuICAgICAgICB0cmVlLmluc2VydChlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0VHJlZSh0cmVlKSB7XHJcbiAgICBsZXQgbWF4V2lkdGggPSBNYXRoLnBvdygyLCB0cmVlLmdldERlcHRoKHRyZWUucm9vdCkgLSAxKSAqIDUwO1xyXG4gICAgaW5pdERhdGEodHJlZS5yb290LCBtYXhXaWR0aCk7XHJcbiAgICBsZXQgYXJyID0gW107XHJcbiAgICB0cmVlLnByZVRyYXZlcnNlTm9kZSh0cmVlLnJvb3QsIChub2RlKSA9PiB7XHJcbiAgICAgICAgYXJyLnB1c2gobm9kZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcnI7XHJcbn1cclxuZnVuY3Rpb24gaW5pdERhdGEobm9kZSwgbWF4V2lkdGgpIHtcclxuICAgIGlmKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZighbm9kZS5kZXB0aCB8fCBub2RlLmRlcHRoID09PSBudWxsKSB7XHJcbiAgICAgICAgbm9kZS5kZXB0aCA9IDE7XHJcbiAgICAgICAgbm9kZS54ID0gbWF4V2lkdGggLyAyO1xyXG4gICAgICAgIG5vZGUueSA9IDEwMDtcclxuICAgIH07XHJcbiAgICBpZihub2RlLmxlZnQgIT09IG51bGwpIHtcclxuICAgICAgICBub2RlLmxlZnQuZGVwdGggPSBub2RlLmRlcHRoICsgMTtcclxuICAgICAgICBub2RlLmxlZnQueCA9IG5vZGUueCAtIG1heFdpZHRoLyg0ICogbm9kZS5kZXB0aCk7XHJcbiAgICAgICAgbm9kZS5sZWZ0LnkgPSBub2RlLnkgKyA0MDtcclxuICAgIH1cclxuICAgIGlmKG5vZGUucmlnaHQgIT09IG51bGwpIHtcclxuICAgICAgICBub2RlLnJpZ2h0LmRlcHRoID0gbm9kZS5kZXB0aCArIDE7XHJcbiAgICAgICAgbm9kZS5yaWdodC54ID0gbm9kZS54ICsgbWF4V2lkdGgvKDQgKiBub2RlLmRlcHRoKTtcclxuICAgICAgICBub2RlLnJpZ2h0LnkgPSBub2RlLnkgKyA0MDtcclxuICAgIH1cclxuICAgIGluaXREYXRhKG5vZGUubGVmdCwgbWF4V2lkdGgpO1xyXG4gICAgaW5pdERhdGEobm9kZS5yaWdodCwgbWF4V2lkdGgpO1xyXG59XHJcbmZ1bmN0aW9uIHBhaXRMaW5lKG5vZGUpIHtcclxuICAgIGlmKG5vZGUgPT09IG51bGwpIHJldHVybjtcclxuICAgIGlmKG5vZGUubGVmdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGRyYXdMaW5lKG5vZGUueCwgbm9kZS55LCBub2RlLmxlZnQueCwgbm9kZS5sZWZ0LnksIGNvbnRleHQpO1xyXG4gICAgfVxyXG4gICAgaWYobm9kZS5yaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGRyYXdMaW5lKG5vZGUueCwgbm9kZS55LCBub2RlLnJpZ2h0LngsIG5vZGUucmlnaHQueSwgY29udGV4dCk7XHJcbiAgICB9XHJcbiAgICBwYWl0TGluZShub2RlLmxlZnQpO1xyXG4gICAgcGFpdExpbmUobm9kZS5yaWdodCk7XHJcbn1cclxuZnVuY3Rpb24gcGFpdENpcmNsZShub2RlKSB7XHJcbiAgICBpZihub2RlID09PSBudWxsKSByZXR1cm47XHJcbiAgICBkcmF3Tm9kZShub2RlLngsIG5vZGUueSwgMjAsIG5vZGUua2V5LCBjb250ZXh0KTtcclxuICAgIHBhaXRDaXJjbGUobm9kZS5sZWZ0KTtcclxuICAgIHBhaXRDaXJjbGUobm9kZS5yaWdodCk7XHJcbn1cclxuZnVuY3Rpb24gZHJhd0xpbmUoc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFksIGNvbnRleHQpIHtcclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBjb250ZXh0Lm1vdmVUbyhzdGFydFgsIHN0YXJ0WSk7XHJcbiAgICBjb250ZXh0LmxpbmVUbyhlbmRYLCBlbmRZKTtcclxuICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbn1cclxuZnVuY3Rpb24gZHJhd05vZGUoeCwgeSwgciwgdGV4dCwgY29udGV4dCkge1xyXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIGNvbnRleHQuYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3doaXRlJztcclxuICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgY29udGV4dC5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xyXG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdibGFjayc7XHJcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgY29udGV4dC5mb250ID0gJzIwcHggc2VyaWYnO1xyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgY29udGV4dC5maWxsVGV4dCh0ZXh0LCB4IC0gNSwgeSArIDUpO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9