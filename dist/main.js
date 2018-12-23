/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

function calculateContainerHeight(state) {
    var container = document.querySelector(".animation__container");
    var activeViewInner = document.querySelector(".animation__view.view--" + state + " .inner");
    container.style.height = activeViewInner ? activeViewInner.offsetHeight + 'px' : void 0;
}
var menuItemsLinks = document.querySelectorAll('nav ul li a');
var menuItems = document.querySelectorAll('nav ul li');
var Portfolio = /** @class */ (function () {
    function Portfolio(initialState) {
        var _this = this;
        this.initialState = initialState;
        var d = new Date();
        document.querySelector('.current-year').textContent = d.getFullYear() + '';
        for (var index = 0; index < menuItemsLinks.length; index++) {
            var element = menuItemsLinks[index];
            element.addEventListener('click', this.stateHandler);
        }
        window.addEventListener('resize', function () {
            calculateContainerHeight(window.location.hash.replace('#', '') || _this.initialState);
        });
        calculateContainerHeight(this.initialState);
        this.stateHandler();
    }
    Portfolio.prototype.stateHandler = function (e) {
        e ? e.preventDefault() : void 0;
        var state;
        if (e) {
            state = e.target.getAttribute('data-state');
        }
        else {
            state = window.location.hash ? window.location.hash.replace('#', '') : 'home';
        }
        window.location.hash = state;
        calculateContainerHeight(state);
        var animationViews = document.querySelectorAll(".animation__view"), activeAnimationView = document.querySelector(".animation__view.view--" + state);
        for (var index = 0; index < animationViews.length; index++) {
            var element = animationViews[index];
            element.classList.remove('is-active');
        }
        for (var index = 0; index < menuItems.length; index++) {
            var element = menuItems[index];
            element.classList.remove('is-active');
        }
        if (e) {
            e.target.parentElement.classList.add('is-active');
        }
        else {
            document.querySelector("nav ul li a[data-state=\"" + (window.location.hash ? window.location.hash.replace('#', '') : 'home') + "\"]").parentElement.classList.add('is-active');
        }
        activeAnimationView ? activeAnimationView.classList.add('is-active') : void 0;
    };
    return Portfolio;
}());
new Portfolio("home");


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./style.css";

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/main.ts ./src/styles/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/main.ts */"./src/main.ts");
module.exports = __webpack_require__(/*! ./src/styles/style.scss */"./src/styles/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxTQUFTLHdCQUF3QixDQUFDLEtBQWE7SUFDN0MsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBZ0IsQ0FBQztJQUNqRixJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDRCQUEwQixLQUFLLFlBQVMsQ0FBZ0IsQ0FBQztJQUV0RyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztB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LENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxTQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2SztRQUVELG1CQUFtQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUgsZ0JBQUM7QUFBRCxDQUFDO0FBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3RFdEIsaUJBQWlCLHFCQUF1QixpQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gY2FsY3VsYXRlQ29udGFpbmVySGVpZ2h0KHN0YXRlOiBzdHJpbmcpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYW5pbWF0aW9uX19jb250YWluZXJgKSBhcyBIVE1MRWxlbWVudDtcclxuICBsZXQgYWN0aXZlVmlld0lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFuaW1hdGlvbl9fdmlldy52aWV3LS0ke3N0YXRlfSAuaW5uZXJgKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGFjdGl2ZVZpZXdJbm5lciA/IGFjdGl2ZVZpZXdJbm5lci5vZmZzZXRIZWlnaHQgKyAncHgnIDogdm9pZCAwO1xyXG59XHJcblxyXG5jb25zdCBtZW51SXRlbXNMaW5rczogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiB1bCBsaSBhJyk7XHJcbmNvbnN0IG1lbnVJdGVtczogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiB1bCBsaScpO1xyXG5cclxuY2xhc3MgUG9ydGZvbGlvIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbml0aWFsU3RhdGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQteWVhcicpLnRleHRDb250ZW50ID0gZC5nZXRGdWxsWWVhcigpICsgJyc7XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1lbnVJdGVtc0xpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gbWVudUl0ZW1zTGlua3NbaW5kZXhdO1xyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zdGF0ZUhhbmRsZXIpXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgY2FsY3VsYXRlQ29udGFpbmVySGVpZ2h0KHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJykgfHwgdGhpcy5pbml0aWFsU3RhdGUpXHJcbiAgICB9KVxyXG5cclxuICAgIGNhbGN1bGF0ZUNvbnRhaW5lckhlaWdodCh0aGlzLmluaXRpYWxTdGF0ZSlcclxuICAgIHRoaXMuc3RhdGVIYW5kbGVyKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgc3RhdGVIYW5kbGVyKGU/OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBlID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogdm9pZCAwO1xyXG5cclxuICAgIGxldCBzdGF0ZTogc3RyaW5nO1xyXG5cclxuICAgIGlmIChlKSB7XHJcbiAgICAgIHN0YXRlID0gKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0ZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoID8gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKSA6ICdob21lJztcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHN0YXRlO1xyXG5cclxuICAgIGNhbGN1bGF0ZUNvbnRhaW5lckhlaWdodChzdGF0ZSk7XHJcblxyXG4gICAgbGV0IGFuaW1hdGlvblZpZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmFuaW1hdGlvbl9fdmlld2ApLFxyXG4gICAgICBhY3RpdmVBbmltYXRpb25WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFuaW1hdGlvbl9fdmlldy52aWV3LS0ke3N0YXRlfWApO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhbmltYXRpb25WaWV3cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGFuaW1hdGlvblZpZXdzW2luZGV4XTtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWVudUl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gbWVudUl0ZW1zW2luZGV4XTtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZSkge1xyXG4gICAgICAoZS50YXJnZXQgYXMgRWxlbWVudCkucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYG5hdiB1bCBsaSBhW2RhdGEtc3RhdGU9XCIke3dpbmRvdy5sb2NhdGlvbi5oYXNoID8gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKSA6ICdob21lJ31cIl1gKS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2ZUFuaW1hdGlvblZpZXcgPyBhY3RpdmVBbmltYXRpb25WaWV3LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpIDogdm9pZCAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbm5ldyBQb3J0Zm9saW8oXCJob21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vc3R5bGUuY3NzXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==