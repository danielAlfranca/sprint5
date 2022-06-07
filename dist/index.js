var JokeApp;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/typescript/classes/APIAdmin.ts":
/*!***********************************************!*\
  !*** ./assets/typescript/classes/APIAdmin.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIAdmin": () => (/* binding */ APIAdmin)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var APIAdmin = /** @class */ (function () {
    function APIAdmin() {
    }
    ;
    APIAdmin.prototype.query = function () {
        var _this = this;
        var config = this.getConfig();
        return fetch(config.url, {
            method: "GET",
            headers: config.headers
        }).then(function (response) { return response.json(); })
            .then(function (response) { return _this.manageResponse(response); });
    };
    APIAdmin.prototype.getConfig = function () {
        return __spreadArray([], this.APIConfigs, true).pop();
    };
    APIAdmin.prototype.manageResponse = function (response) {
        return response;
    };
    return APIAdmin;
}());



/***/ }),

/***/ "./assets/typescript/classes/jokeAdmin1.ts":
/*!*************************************************!*\
  !*** ./assets/typescript/classes/jokeAdmin1.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DadJokesAdmin": () => (/* binding */ DadJokesAdmin)
/* harmony export */ });
/* harmony import */ var _APIAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIAdmin */ "./assets/typescript/classes/APIAdmin.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DadJokesAdmin = /** @class */ (function (_super) {
    __extends(DadJokesAdmin, _super);
    function DadJokesAdmin() {
        var _this = _super.call(this) || this;
        _this.APIConfigs = [{
                url: 'https://icanhazdadjoke.com/',
                headers: {
                    'Accept': 'application/json'
                }
            }];
        return _this;
    }
    DadJokesAdmin.prototype.manageResponse = function (response) {
        return {
            joke: this.getJokeFromResponse(response),
            score: null,
            date: (new Date()).toISOString()
        };
    };
    DadJokesAdmin.prototype.getJokeFromResponse = function (response) {
        return response.joke;
    };
    return DadJokesAdmin;
}(_APIAdmin__WEBPACK_IMPORTED_MODULE_0__.APIAdmin));



/***/ }),

/***/ "./assets/typescript/classes/jokeAdmin2.ts":
/*!*************************************************!*\
  !*** ./assets/typescript/classes/jokeAdmin2.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JokesAdmin": () => (/* binding */ JokesAdmin)
/* harmony export */ });
/* harmony import */ var _jokeAdmin1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jokeAdmin1 */ "./assets/typescript/classes/jokeAdmin1.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var JokesAdmin = /** @class */ (function (_super) {
    __extends(JokesAdmin, _super);
    function JokesAdmin() {
        var _this = _super.call(this) || this;
        _this.APIConfigs = __spreadArray(__spreadArray([], _this.APIConfigs, true), [{
                url: 'https://api.chucknorris.io/jokes/random',
                headers: { 'Accept': 'application/json' }
            }], false);
        return _this;
    }
    JokesAdmin.prototype.getConfig = function () {
        return this.APIConfigs[Math.floor(Math.random())];
    };
    JokesAdmin.prototype.getJokeFromResponse = function (response) {
        return response.value !== undefined ? response.value : response.joke;
    };
    return JokesAdmin;
}(_jokeAdmin1__WEBPACK_IMPORTED_MODULE_0__.DadJokesAdmin));



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************!*\
  !*** ./assets/typescript/classes/jokeApp.ts ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jokeAdmin1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jokeAdmin1 */ "./assets/typescript/classes/jokeAdmin1.ts");
/* harmony import */ var _jokeAdmin2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jokeAdmin2 */ "./assets/typescript/classes/jokeAdmin2.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


var JokeApp = /** @class */ (function () {
    function JokeApp(typeOfJokes) {
        if (typeOfJokes == 'bromas variadas')
            this.jokesAdmin = new _jokeAdmin2__WEBPACK_IMPORTED_MODULE_1__.JokesAdmin();
        else if (typeOfJokes == "dad's jokes")
            this.jokesAdmin = new _jokeAdmin1__WEBPACK_IMPORTED_MODULE_0__.DadJokesAdmin();
    }
    Object.defineProperty(JokeApp.prototype, "containerJokes", {
        get: function () {
            return document.getElementById('acuditsContainer');
        },
        enumerable: false,
        configurable: true
    });
    JokeApp.prototype.getJoke = function () {
        var _this = this;
        if (!this.prevHasScore() && this.jokes.length) {
            return alert("Abans de continuar has de puntuar l'anterior acudit");
        }
        var query = this.jokesAdmin.query();
        query
            .then(function (joke) { return _this.showJoke(joke); })
            .catch(function (e) { return _this.manageError('joke'); });
    };
    JokeApp.prototype.showJoke = function (joke) {
        var clone = document.querySelector('template').content.cloneNode(true);
        clone.querySelector('.acudit-text').innerHTML = joke.joke;
        this.removeIconsListeners();
        this.containerJokes.innerHTML = '';
        this.containerJokes.appendChild(clone);
    };
    JokeApp.prototype.removeIconsListeners = function () {
        var _this = this;
        var icons = this.containerJokes.querySelectorAll('i');
        Object.keys(icons || {}).forEach(function (keys) { return icons[keys].removeEventListener('click', _this.vote); });
    };
    JokeApp.prototype.vote = function (value) {
        __spreadArray([], this.jokes, true).pop().score = value;
        this.paintSelection();
    };
    JokeApp.prototype.paintSelection = function () {
        var icons = this.containerJokes.querySelectorAll('i'), target = event.target, cls = ['text-success', 'text-warning'];
        var element, isTarget;
        Object.keys(icons).forEach(function (key) {
            element = icons[key];
            isTarget = target == element;
            element.classList.remove(cls[Number(isTarget)]);
            element.classList.add(cls[Number(!isTarget)]);
        });
    };
    JokeApp.prototype.prevHasScore = function () {
        return ((__spreadArray([], this.jokes, true).pop()) || {
            score: null
        }).score !== null;
    };
    JokeApp.prototype.manageError = function (type) {
        var item = type == 'joke' ? 'la broma' : 'el temps';
        alert("Hi ha hagut un error i no s'ha pogut carregar " + item);
        return false;
    };
    return JokeApp;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JokeApp);

})();

JokeApp = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyw4QkFBWSxHQUFwQjtRQUVJLE9BQU8sQ0FBQyxDQUFDLGtCQUFJLElBQUksQ0FBQyxLQUFLLFFBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTtZQUMvQixLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSTtJQUNyQixDQUFDO0lBRVMsNkJBQVcsR0FBckIsVUFBc0IsSUFBVztRQUU3QixJQUFNLElBQUksR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUMsV0FBVSxDQUFDO1FBRXBELEtBQUssQ0FBQyxnREFBZ0QsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMvRCxPQUFPLEtBQUs7SUFDaEIsQ0FBQztJQUVMLGNBQUM7QUFBRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSm9rZUFwcC8uL2Fzc2V0cy90eXBlc2NyaXB0L2NsYXNzZXMvQVBJQWRtaW4udHMiLCJ3ZWJwYWNrOi8vSm9rZUFwcC8uL2Fzc2V0cy90eXBlc2NyaXB0L2NsYXNzZXMvam9rZUFkbWluMS50cyIsIndlYnBhY2s6Ly9Kb2tlQXBwLy4vYXNzZXRzL3R5cGVzY3JpcHQvY2xhc3Nlcy9qb2tlQWRtaW4yLnRzIiwid2VicGFjazovL0pva2VBcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSm9rZUFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vSm9rZUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0pva2VBcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Kb2tlQXBwLy4vYXNzZXRzL3R5cGVzY3JpcHQvY2xhc3Nlcy9qb2tlQXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFQSUFkbWlueyAvLyBjbGFzZSBnZW5lcmFsIHBhcmEgbGEgZ2VzdGlvbiBkZSBsYXMgYXBpc1xyXG5cclxuICAgIHByb3RlY3RlZCBBUElDb25maWdzOkFQSUNvbmZpZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7fTtcclxuXHJcbiAgICBwdWJsaWMgcXVlcnkoKTpQcm9taXNlPGFueT57XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaChjb25maWcudXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnNcclxuXHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PnRoaXMubWFuYWdlUmVzcG9uc2UocmVzcG9uc2UpKSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldENvbmZpZygpe1xyXG5cclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMuQVBJQ29uZmlnc10ucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9ICAgIFxyXG5cclxufSIsImltcG9ydCB7IEpva2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQVBJQWRtaW4gfSBmcm9tICcuL0FQSUFkbWluJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYWRKb2tlc0FkbWluIGV4dGVuZHMgQVBJQWRtaW57IC8vIENMQVNFIFBBUkEgRUpFUkNJQ0lPIDEgQ09OIFNPTE8gMSBBUElcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLkFQSUNvbmZpZ3MgPSBbe1xyXG5cclxuICAgICAgICAgICAgdXJsOidodHRwczovL2ljYW5oYXpkYWRqb2tlLmNvbS8nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbWFuYWdlUmVzcG9uc2UocmVzcG9uc2U6YW55KTpKb2tle1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICBqb2tlOiB0aGlzLmdldEpva2VGcm9tUmVzcG9uc2UocmVzcG9uc2UpLFxyXG4gICAgICAgICAgICBzY29yZTogbnVsbCxcclxuICAgICAgICAgICAgZGF0ZTogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldEpva2VGcm9tUmVzcG9uc2UocmVzcG9uc2Upe1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2Uuam9rZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERhZEpva2VzQWRtaW4gfSBmcm9tICcuL2pva2VBZG1pbjEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEpva2VzQWRtaW4gZXh0ZW5kcyBEYWRKb2tlc0FkbWluIHsgLy8gQ0xBU0UgUEFSQSBFSkVSQ0lDSU8gNVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuQVBJQ29uZmlncyA9IFsuLi50aGlzLkFQSUNvbmZpZ3Mse1xyXG5cclxuICAgICAgICAgICAgdXJsOidodHRwczovL2FwaS5jaHVja25vcnJpcy5pby9qb2tlcy9yYW5kb20nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0Q29uZmlnKCl7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLkFQSUNvbmZpZ3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldEpva2VGcm9tUmVzcG9uc2UocmVzcG9uc2Upe1xyXG5cclxuICAgICAgIHJldHVybiByZXNwb25zZS52YWx1ZSAhPT0gdW5kZWZpbmVkID8gcmVzcG9uc2UudmFsdWU6cmVzcG9uc2Uuam9rZTtcclxuICAgIH1cclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IERhZEpva2VzQWRtaW4gfSBmcm9tIFwiLi9qb2tlQWRtaW4xXCI7XHJcbmltcG9ydCB7IEpva2VzQWRtaW4gfSBmcm9tIFwiLi9qb2tlQWRtaW4yXCI7XHJcbmltcG9ydCB7IEpva2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9rZUFwcHtcclxuXHJcbiAgICBwcml2YXRlIGpva2VzOkpva2VbXTtcclxuXHJcbiAgICBwcml2YXRlIGpva2VzQWRtaW46RGFkSm9rZXNBZG1pbnxKb2tlc0FkbWluO1xyXG5cclxuICAgIHByaXZhdGUgZ2V0IGNvbnRhaW5lckpva2VzKCl7XHJcblxyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN1ZGl0c0NvbnRhaW5lcicpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZU9mSm9rZXM6c3RyaW5nKXtcclxuXHJcbiAgICAgICAgaWYodHlwZU9mSm9rZXM9PSdicm9tYXMgdmFyaWFkYXMnKSB0aGlzLmpva2VzQWRtaW4gPSBuZXcgSm9rZXNBZG1pbigpO1xyXG5cclxuICAgICAgICBlbHNlIGlmKHR5cGVPZkpva2VzPT1cImRhZCdzIGpva2VzXCIpIHRoaXMuam9rZXNBZG1pbiA9IG5ldyBEYWRKb2tlc0FkbWluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEpva2UoKXtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByZXZIYXNTY29yZSgpICYmIHRoaXMuam9rZXMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJBYmFucyBkZSBjb250aW51YXIgaGFzIGRlIHB1bnR1YXIgbCdhbnRlcmlvciBhY3VkaXRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuam9rZXNBZG1pbi5xdWVyeSgpO1xyXG5cclxuICAgICAgICBxdWVyeVxyXG4gICAgICAgIC50aGVuKGpva2U9PnRoaXMuc2hvd0pva2Uoam9rZSkpXHJcbiAgICAgICAgLmNhdGNoKGU9PnRoaXMubWFuYWdlRXJyb3IoJ2pva2UnKSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dKb2tlKGpva2U6Sm9rZSkge1xyXG5cclxuICAgICAgICBjb25zdCBjbG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlJykuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5hY3VkaXQtdGV4dCcpLmlubmVySFRNTCA9IGpva2Uuam9rZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVJY29uc0xpc3RlbmVycygpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lckpva2VzLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lckpva2VzLmFwcGVuZENoaWxkKGNsb25lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUljb25zTGlzdGVuZXJzKCkge1xyXG5cclxuICAgICAgICBjb25zdCBpY29ucyA9IHRoaXMuY29udGFpbmVySm9rZXMucXVlcnlTZWxlY3RvckFsbCgnaScpO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhpY29ucyB8fCB7fSkuZm9yRWFjaChrZXlzID0+IGljb25zW2tleXNdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy52b3RlKSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZvdGUodmFsdWUpIHtcclxuXHJcbiAgICAgICAgWy4uLnRoaXMuam9rZXNdLnBvcCgpLnNjb3JlID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMucGFpbnRTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBwYWludFNlbGVjdGlvbigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbnMgPSB0aGlzLmNvbnRhaW5lckpva2VzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2knKSxcclxuICAgICAgICAgICAgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxyXG4gICAgICAgICAgICBjbHMgPSBbJ3RleHQtc3VjY2VzcycsICd0ZXh0LXdhcm5pbmcnXTtcclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnQsIGlzVGFyZ2V0O1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhpY29ucykuZm9yRWFjaChrZXkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudCA9IGljb25zW2tleV07XHJcbiAgICAgICAgICAgIGlzVGFyZ2V0ID0gdGFyZ2V0ID09IGVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xzW051bWJlcihpc1RhcmdldCldKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsc1tOdW1iZXIoIWlzVGFyZ2V0KV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJldkhhc1Njb3JlKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKChbLi4udGhpcy5qb2tlc10ucG9wKCkpIHx8IHtcclxuICAgICAgICAgICAgc2NvcmU6IG51bGxcclxuICAgICAgICB9KS5zY29yZSAhPT0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBtYW5hZ2VFcnJvcih0eXBlOnN0cmluZyl7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0eXBlID09ICdqb2tlJyA/ICdsYSBicm9tYSc6J2VsIHRlbXBzJztcclxuXHJcbiAgICAgICAgYWxlcnQoXCJIaSBoYSBoYWd1dCB1biBlcnJvciBpIG5vIHMnaGEgcG9ndXQgY2FycmVnYXIgXCIgKyBpdGVtKTsgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==