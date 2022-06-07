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
class APIAdmin {
    constructor() { }
    ;
    query() {
        const config = this.getConfig();
        return fetch(config.url, {
            method: "GET",
            headers: config.headers
        }).then(response => response.json())
            .then(response => this.manageResponse(response));
    }
    getConfig() {
        return [...this.APIConfigs].pop();
    }
    manageResponse(response) {
        return response;
    }
}


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

class DadJokesAdmin extends _APIAdmin__WEBPACK_IMPORTED_MODULE_0__.APIAdmin {
    constructor() {
        super();
        this.APIConfigs = [{
                url: 'https://icanhazdadjoke.com/',
                headers: {
                    'Accept': 'application/json'
                }
            }];
    }
    manageResponse(response) {
        return {
            joke: this.getJokeFromResponse(response),
            score: null,
            date: (new Date()).toISOString()
        };
    }
    getJokeFromResponse(response) {
        return response.joke;
    }
}


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

class JokesAdmin extends _jokeAdmin1__WEBPACK_IMPORTED_MODULE_0__.DadJokesAdmin {
    constructor() {
        super();
        this.APIConfigs = [...this.APIConfigs, {
                url: 'https://api.chucknorris.io/jokes/random',
                headers: { 'Accept': 'application/json' }
            }
        ];
        console.log(this.APIConfigs);
    }
    getConfig() {
        return this.APIConfigs[Math.round(Math.random())];
    }
    getJokeFromResponse(response) {
        return response.value !== undefined ? response.value : response.joke;
    }
}


/***/ }),

/***/ "./assets/typescript/classes/weatherAdmin.ts":
/*!***************************************************!*\
  !*** ./assets/typescript/classes/weatherAdmin.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherAdmin": () => (/* binding */ WeatherAdmin)
/* harmony export */ });
/* harmony import */ var _APIAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIAdmin */ "./assets/typescript/classes/APIAdmin.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class WeatherAdmin extends _APIAdmin__WEBPACK_IMPORTED_MODULE_0__.APIAdmin {
    constructor() {
        super();
        this.APIConfigs = [{
                url: 'https://api.openweathermap.org/data/2.5/weather',
                headers: {
                    'Accept': 'application/json'
                },
                key: 'c418fd89427bc617220cfa45fbdfa497'
            }];
    }
    query() {
        const _super = Object.create(null, {
            query: { get: () => super.query }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.configWeatherURL();
            return _super.query.call(this);
        });
    }
    getWeatherIcon(obj) {
        const icon = obj.weather[0].icon;
        return "http://openweathermap.org/img/w/" + icon + ".png";
    }
    configWeatherURL() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.getConfig(), coords = yield this.getLocalCoordinates();
            config.url += `?lat=${coords.latitude}&lon=${coords.longitude}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${config.key}`;
        });
    }
    getLocalCoordinates() {
        const newYorkCoords = {
            latitude: "40.730610",
            longitude: "-73.935242"
        };
        if (navigator.geolocation) {
            return new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            }).then((obj) => ({
                latitude: obj.coords.latitude,
                longitude: obj.coords.longitude
            })).catch(error => newYorkCoords);
        }
        return Promise.resolve(newYorkCoords); // PILLAR COORDENADAS DE NUEVA YORK COMO DEFAULT;
    }
}


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
/* harmony export */   "default": () => (/* binding */ JokeApp)
/* harmony export */ });
/* harmony import */ var _jokeAdmin1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jokeAdmin1 */ "./assets/typescript/classes/jokeAdmin1.ts");
/* harmony import */ var _jokeAdmin2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jokeAdmin2 */ "./assets/typescript/classes/jokeAdmin2.ts");
/* harmony import */ var _weatherAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherAdmin */ "./assets/typescript/classes/weatherAdmin.ts");



class JokeApp {
    constructor(typeOfJokes) {
        this.jokes = [];
        this.currentBkg = 1;
        if (typeOfJokes == 'bromas variadas')
            this.jokesApi = new _jokeAdmin2__WEBPACK_IMPORTED_MODULE_1__.JokesAdmin(); // ejercicio 5
        else if (typeOfJokes == "dad's jokes")
            this.jokesApi = new _jokeAdmin1__WEBPACK_IMPORTED_MODULE_0__.DadJokesAdmin(); // ejercicio 1
        this.weatherApi = new _weatherAdmin__WEBPACK_IMPORTED_MODULE_2__.WeatherAdmin();
        this.paintWeather(this.weatherApi);
    }
    get containerJokes() {
        return document.getElementById('acuditsContainer');
    }
    getJoke() {
        if (!this.prevHasScore() && this.jokes.length) {
            return alert("Abans de continuar has de puntuar l'anterior acudit");
        }
        const query = this.jokesApi.query();
        query
            .then(joke => {
            this.addJoke(joke);
            this.showJoke(joke);
        }).catch(e => this.manageError('joke'));
    }
    addJoke(joke) {
        this.jokes.push(joke);
    }
    showJoke(joke) {
        const clone = document.querySelector('template').content.cloneNode(true);
        clone.querySelector('.acudit-text').innerHTML = joke.joke;
        this.removeIconsListeners();
        this.containerJokes.innerHTML = '';
        this.containerJokes.appendChild(clone);
        this.changeBackground();
    }
    removeIconsListeners() {
        const icons = this.containerJokes.querySelectorAll('i');
        Object.keys(icons || {}).forEach(keys => icons[keys].removeEventListener('click', this.vote));
    }
    vote(value) {
        [...this.jokes].pop().score = value;
        this.paintSelection();
    }
    paintSelection() {
        const icons = this.containerJokes.querySelectorAll('i'), target = event.target, cls = ['text-white', 'text-warning'];
        let element, isTarget;
        Object.keys(icons).forEach(key => {
            element = icons[key];
            isTarget = target == element;
            element.classList.remove(cls[Number(isTarget)]);
            element.classList.add(cls[Number(!isTarget)]);
        });
    }
    changeBackground() {
        const container = document.querySelector('.bkg');
        container.classList.remove('bkg' + this.currentBkg);
        this.currentBkg = this.currentBkg == 3 ? 1 : (this.currentBkg + 1);
        setTimeout(() => container.classList.add('bkg' + this.currentBkg), 10);
    }
    prevHasScore() {
        return (([...this.jokes].pop()) || {
            score: null
        }).score !== null;
    }
    manageError(type) {
        const item = type == 'joke' ? 'la broma' : 'el temps';
        alert("Hi ha hagut un error i no s'ha pogut carregar " + item);
        return false;
    }
    paintWeather(weatherApi) {
        weatherApi.query().then((response) => {
            console.log(response);
            const container = document.getElementById('weatherDisplay'), icon = container.querySelector('img'), temp = container.querySelector('#temp');
            icon.setAttribute('src', this.getWeatherIcon(response));
            temp.innerHTML = response.main.temp + 'º';
            container.classList.remove('d-none');
        }).catch(error => this.manageError('temps'));
    }
    getWeatherIcon(obj) {
        return this.weatherApi.getWeatherIcon(obj);
    }
}

})();

JokeApp = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFTyxNQUFlLFFBQVE7SUFJMUIsZ0JBQWMsQ0FBQztJQUFBLENBQUM7SUFFVCxLQUFLO1FBRVIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWhDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDckIsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87U0FFMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVTLFNBQVM7UUFDZixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVTLGNBQWMsQ0FBQyxRQUFRO1FBRTdCLE9BQU8sUUFBUTtJQUNuQixDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnFDO0FBRS9CLE1BQU0sYUFBYyxTQUFRLCtDQUFRO0lBRXZDO1FBRUksS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUM7Z0JBRWYsR0FBRyxFQUFDLDZCQUE2QjtnQkFDakMsT0FBTyxFQUFFO29CQUVMLFFBQVEsRUFBRSxrQkFBa0I7aUJBQy9CO2FBQ0osQ0FBQztJQUNOLENBQUM7SUFFUyxjQUFjLENBQUMsUUFBWTtRQUVqQyxPQUFPO1lBRUgsSUFBSSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7WUFDeEMsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFO1NBQ25DO0lBQ0wsQ0FBQztJQUVTLG1CQUFtQixDQUFDLFFBQVE7UUFFbEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDNEM7QUFFdEMsTUFBTSxVQUFXLFNBQVEsc0RBQWE7SUFFekM7UUFFSSxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUM7Z0JBRWxDLEdBQUcsRUFBQyx5Q0FBeUM7Z0JBQzdDLE9BQU8sRUFBRSxFQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTthQUN2QztTQUNKLENBQUM7UUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRVMsU0FBUztRQUVmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVTLG1CQUFtQixDQUFDLFFBQVE7UUFFbkMsT0FBTyxRQUFRLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBQyxTQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RFLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCcUM7QUFHL0IsTUFBTSxZQUFhLFNBQVEsK0NBQVE7SUFFdEM7UUFFSSxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztnQkFFZixHQUFHLEVBQUMsaURBQWlEO2dCQUNyRCxPQUFPLEVBQUU7b0JBRUwsUUFBUSxFQUFFLGtCQUFrQjtpQkFDL0I7Z0JBQ0QsR0FBRyxFQUFDLGtDQUFrQzthQUN6QyxDQUFDO0lBQ04sQ0FBQztJQUVZLEtBQUs7Ozs7O1lBRWYsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUU5QixPQUFPLE9BQU0sS0FBSyxZQUFHO1FBQ3hCLENBQUM7S0FBQTtJQUVNLGNBQWMsQ0FBQyxHQUFHO1FBRXJCLE1BQU0sSUFBSSxHQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUV2QyxPQUFPLGtDQUFrQyxHQUFHLElBQUksR0FBRyxNQUFNO0lBQzdELENBQUM7SUFFYSxnQkFBZ0I7O1lBRTFCLE1BQU8sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDekIsTUFBTSxHQUFJLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFFbEQsTUFBTSxDQUFDLEdBQUcsSUFBSSxRQUFRLE1BQU0sQ0FBQyxRQUFRLFFBQVEsTUFBTSxDQUFDLFNBQVMsNERBQTRELE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMxSSxDQUFDO0tBQUE7SUFFTyxtQkFBbUI7UUFFdkIsTUFBUSxhQUFhLEdBQUc7WUFFWixRQUFRLEVBQUMsV0FBVztZQUNwQixTQUFTLEVBQUMsWUFBWTtTQUN6QixDQUFDO1FBRVQsSUFBRyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBRXZCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUMsTUFBTTtnQkFFdEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUMsTUFBTSxDQUFDLENBQUM7WUFFN0QsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBdUIsRUFBQyxFQUFFLEVBQUM7Z0JBRWhDLFFBQVEsRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQzVCLFNBQVMsRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVM7YUFFakMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRSxjQUFhLENBQUMsQ0FBQztTQUNuQztRQUVELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBQyxpREFBaUQ7SUFDM0YsQ0FBQztDQUVKOzs7Ozs7O1VDbkVEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ042QztBQUNIO0FBQ0k7QUFJL0IsTUFBTSxPQUFPO0lBZXhCLFlBQVksV0FBa0I7UUFidEIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQU1sQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBU25CLElBQUcsV0FBVyxJQUFFLGlCQUFpQjtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtREFBVSxFQUFFLENBQUMsQ0FBQyxjQUFjO2FBRTlFLElBQUcsV0FBVyxJQUFFLGFBQWE7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksc0RBQWEsRUFBRSxDQUFDLENBQUMsY0FBYztRQUV2RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksdURBQVksRUFBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXZDLENBQUM7SUFmRCxJQUFZLGNBQWM7UUFFdEIsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDO0lBQ3RELENBQUM7SUFjTSxPQUFPO1FBRVYsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUUzQyxPQUFPLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVwQyxLQUFLO2FBQ0osSUFBSSxDQUFDLElBQUksR0FBRTtZQUVSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLE9BQU8sQ0FBQyxJQUFTO1FBRXJCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTyxRQUFRLENBQUMsSUFBUztRQUV0QixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFnQixDQUFDO1FBRXhGLEtBQUssQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFMUQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyxvQkFBb0I7UUFFeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV4RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRU8sSUFBSSxDQUFDLEtBQUs7UUFFZCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFcEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFHTyxjQUFjO1FBRWxCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEVBQ25ELE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUNyQixHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFekMsSUFBSSxPQUFPLEVBQUUsUUFBUSxDQUFDO1FBRXRCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBRTdCLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsUUFBUSxHQUFHLE1BQU0sSUFBSSxPQUFPLENBQUM7WUFFN0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxnQkFBZ0I7UUFFcEIsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQWdCLENBQUM7UUFFaEUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsVUFBVSxHQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFbkUsVUFBVSxDQUFDLEdBQUUsRUFBRSxVQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUVoRTtJQUNMLENBQUM7SUFFTyxZQUFZO1FBRWpCLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSTtZQUM5QixLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSTtJQUNyQixDQUFDO0lBRVMsV0FBVyxDQUFDLElBQVc7UUFFN0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFDLFdBQVUsQ0FBQztRQUVwRCxLQUFLLENBQUMsZ0RBQWdELEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDL0QsT0FBTyxLQUFLO0lBQ2hCLENBQUM7SUFHTyxZQUFZLENBQUMsVUFBdUI7UUFFeEMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFO1lBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdEIsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNyRCxJQUFJLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFDckMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBRTFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTyxjQUFjLENBQUMsR0FBRztRQUV0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxDQUFDO0NBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Kb2tlQXBwLy4vYXNzZXRzL3R5cGVzY3JpcHQvY2xhc3Nlcy9BUElBZG1pbi50cyIsIndlYnBhY2s6Ly9Kb2tlQXBwLy4vYXNzZXRzL3R5cGVzY3JpcHQvY2xhc3Nlcy9qb2tlQWRtaW4xLnRzIiwid2VicGFjazovL0pva2VBcHAvLi9hc3NldHMvdHlwZXNjcmlwdC9jbGFzc2VzL2pva2VBZG1pbjIudHMiLCJ3ZWJwYWNrOi8vSm9rZUFwcC8uL2Fzc2V0cy90eXBlc2NyaXB0L2NsYXNzZXMvd2VhdGhlckFkbWluLnRzIiwid2VicGFjazovL0pva2VBcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSm9rZUFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vSm9rZUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0pva2VBcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Kb2tlQXBwLy4vYXNzZXRzL3R5cGVzY3JpcHQvY2xhc3Nlcy9qb2tlQXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFQSUFkbWlueyAvLyBjbGFzZSBnZW5lcmFsIHBhcmEgbGEgZ2VzdGlvbiBkZSBsYXMgYXBpc1xyXG5cclxuICAgIHByb3RlY3RlZCBBUElDb25maWdzOkFQSUNvbmZpZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7fTtcclxuXHJcbiAgICBwdWJsaWMgcXVlcnkoKTpQcm9taXNlPGFueT57IC8vIHNvbGljaXRhIGRhdG9zIGEgbGEgYXBpXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaChjb25maWcudXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnNcclxuXHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PnRoaXMubWFuYWdlUmVzcG9uc2UocmVzcG9uc2UpKSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldENvbmZpZygpeyBcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMuQVBJQ29uZmlnc10ucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG1hbmFnZVJlc3BvbnNlKHJlc3BvbnNlKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9ICAgIFxyXG5cclxufSIsImltcG9ydCB7IEpva2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQVBJQWRtaW4gfSBmcm9tICcuL0FQSUFkbWluJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYWRKb2tlc0FkbWluIGV4dGVuZHMgQVBJQWRtaW57IC8vIENMQVNFIFBBUkEgRUpFUkNJQ0lPIDEgQ09OIFNPTE8gMSBBUElcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLkFQSUNvbmZpZ3MgPSBbe1xyXG5cclxuICAgICAgICAgICAgdXJsOidodHRwczovL2ljYW5oYXpkYWRqb2tlLmNvbS8nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbWFuYWdlUmVzcG9uc2UocmVzcG9uc2U6YW55KTpKb2tle1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICBqb2tlOiB0aGlzLmdldEpva2VGcm9tUmVzcG9uc2UocmVzcG9uc2UpLFxyXG4gICAgICAgICAgICBzY29yZTogbnVsbCxcclxuICAgICAgICAgICAgZGF0ZTogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldEpva2VGcm9tUmVzcG9uc2UocmVzcG9uc2Upe1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2Uuam9rZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERhZEpva2VzQWRtaW4gfSBmcm9tICcuL2pva2VBZG1pbjEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEpva2VzQWRtaW4gZXh0ZW5kcyBEYWRKb2tlc0FkbWluIHsgLy8gQ0xBU0UgUEFSQSBFSkVSQ0lDSU8gNVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuQVBJQ29uZmlncyA9IFsuLi50aGlzLkFQSUNvbmZpZ3Mse1xyXG5cclxuICAgICAgICAgICAgdXJsOidodHRwczovL2FwaS5jaHVja25vcnJpcy5pby9qb2tlcy9yYW5kb20nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5BUElDb25maWdzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0Q29uZmlnKCl7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLkFQSUNvbmZpZ3NbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldEpva2VGcm9tUmVzcG9uc2UocmVzcG9uc2Upe1xyXG5cclxuICAgICAgIHJldHVybiByZXNwb25zZS52YWx1ZSAhPT0gdW5kZWZpbmVkID8gcmVzcG9uc2UudmFsdWU6cmVzcG9uc2Uuam9rZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBBUElBZG1pbiB9IGZyb20gJy4vQVBJQWRtaW4nO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyQWRtaW4gZXh0ZW5kcyBBUElBZG1pbnsgLy8gQ0xBU0UgUEFSQSBFSkVSQ0lDSU8gNFxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLkFQSUNvbmZpZ3MgPSBbe1xyXG5cclxuICAgICAgICAgICAgdXJsOidodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGtleTonYzQxOGZkODk0MjdiYzYxNzIyMGNmYTQ1ZmJkZmE0OTcnXHJcbiAgICAgICAgfV1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcXVlcnkoKTpQcm9taXNlPGFueT57IC8vIGVzcGVyYSBhIGF1dG9yaXphY2lvbiBwYXJhIHV0aWxpemFyIG5hdmlnYXRvci5nZW9sb2NhdGlvbiB5IGhhY2UgbGEgcXVlcnlcclxuXHJcbiAgICAgICBhd2FpdCB0aGlzLmNvbmZpZ1dlYXRoZXJVUkwoKTtcclxuIFxyXG4gICAgICAgcmV0dXJuIHN1cGVyLnF1ZXJ5KCk7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRXZWF0aGVySWNvbihvYmopeyAvLyBmb3JtYXRlYSB1cmwgcGFyYSBpY29ubyBkZWwgdGllbXBvXHJcblxyXG4gICAgICAgIGNvbnN0IGljb246c3RyaW5nID0gb2JqLndlYXRoZXJbMF0uaWNvblxyXG5cclxuICAgICAgICByZXR1cm4gXCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93L1wiICsgaWNvbiArIFwiLnBuZ1wiXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBjb25maWdXZWF0aGVyVVJMKCl7IC8vIGZvcm1hdGVhIHVybCBwYXJhIHBldGljaW9uIGRlIGxhIGFwaVxyXG5cclxuICAgICAgICBjb25zdCAgY29uZmlnID0gdGhpcy5nZXRDb25maWcoKSwgXHJcbiAgICAgICAgICAgICAgIGNvb3JkcyA9ICBhd2FpdCB0aGlzLmdldExvY2FsQ29vcmRpbmF0ZXMoKTtcclxuXHJcbiAgICAgICAgY29uZmlnLnVybCArPSBgP2xhdD0ke2Nvb3Jkcy5sYXRpdHVkZX0mbG9uPSR7Y29vcmRzLmxvbmdpdHVkZX0mZXhjbHVkZT1taW51dGVseSxob3VybHksZGFpbHksYWxlcnRzJnVuaXRzPW1ldHJpYyZhcHBpZD0ke2NvbmZpZy5rZXl9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExvY2FsQ29vcmRpbmF0ZXMoKTpQcm9taXNlPGFueT57IC8vIGV4dHJhZSBjb29yZGVuYWRhcyBkZSBsb2NhbGl6YWNpb24gZGVsIG5hdmVnYWRvciBzaSBzZSBwdWVkZVxyXG5cclxuICAgICAgICBjb25zdCAgIG5ld1lvcmtDb29yZHMgPSB7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTpcIjQwLjczMDYxMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTpcIi03My45MzUyNDJcIiBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICBcclxuICAgICAgICAgaWYobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3QpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlc29sdmUscmVqZWN0KTtcclxuXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKG9iajpHZW9sb2NhdGlvblBvc2l0aW9uKT0+KHtcclxuXHJcbiAgICAgICAgICAgICAgICBsYXRpdHVkZTpvYmouY29vcmRzLmxhdGl0dWRlLCBcclxuICAgICAgICAgICAgICAgIGxvbmdpdHVkZTpvYmouY29vcmRzLmxvbmdpdHVkZVxyXG5cclxuICAgICAgICAgICAgfSkpLmNhdGNoKGVycm9yPT5uZXdZb3JrQ29vcmRzKTtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ld1lvcmtDb29yZHMpIC8vIFBJTExBUiBDT09SREVOQURBUyBERSBOVUVWQSBZT1JLIENPTU8gREVGQVVMVDtcclxuICAgIH1cclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IERhZEpva2VzQWRtaW4gfSBmcm9tIFwiLi9qb2tlQWRtaW4xXCI7XHJcbmltcG9ydCB7IEpva2VzQWRtaW4gfSBmcm9tIFwiLi9qb2tlQWRtaW4yXCI7XHJcbmltcG9ydCB7IFdlYXRoZXJBZG1pbiB9IGZyb20gXCIuL3dlYXRoZXJBZG1pblwiO1xyXG5pbXBvcnQgeyBKb2tlLCBXZWF0aGVyUmVzcG9uc2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpva2VBcHB7IC8vIENMQVNFIFBSSU5DSVBBTCBRVUUgR0VTVElPTkEgTEEgQVBQXHJcblxyXG4gICAgcHJpdmF0ZSBqb2tlczpKb2tlW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGpva2VzQXBpOkRhZEpva2VzQWRtaW58Sm9rZXNBZG1pbjtcclxuXHJcbiAgICBwcml2YXRlIHdlYXRoZXJBcGk6V2VhdGhlckFkbWluO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudEJrZyA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgY29udGFpbmVySm9rZXMoKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3VkaXRzQ29udGFpbmVyJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlT2ZKb2tlczpzdHJpbmcpe1xyXG5cclxuICAgICAgICBpZih0eXBlT2ZKb2tlcz09J2Jyb21hcyB2YXJpYWRhcycpIHRoaXMuam9rZXNBcGkgPSBuZXcgSm9rZXNBZG1pbigpOyAvLyBlamVyY2ljaW8gNVxyXG5cclxuICAgICAgICBlbHNlIGlmKHR5cGVPZkpva2VzPT1cImRhZCdzIGpva2VzXCIpIHRoaXMuam9rZXNBcGkgPSBuZXcgRGFkSm9rZXNBZG1pbigpOyAvLyBlamVyY2ljaW8gMVxyXG5cclxuICAgICAgICB0aGlzLndlYXRoZXJBcGkgPSBuZXcgV2VhdGhlckFkbWluKCk7XHJcblxyXG4gICAgICAgIHRoaXMucGFpbnRXZWF0aGVyKHRoaXMud2VhdGhlckFwaSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRKb2tlKCl7IC8vIEhBQ0UgTEEgU09MSUNJVFVEIENPTiBMQSBBUEkgREUgQlJPTUFTIFkgQcORQURFIFkgTVVFU1RSQSBFTCBSRVNVTFRBRE8gXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wcmV2SGFzU2NvcmUoKSAmJiB0aGlzLmpva2VzLmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiQWJhbnMgZGUgY29udGludWFyIGhhcyBkZSBwdW50dWFyIGwnYW50ZXJpb3IgYWN1ZGl0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmpva2VzQXBpLnF1ZXJ5KCk7XHJcblxyXG4gICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgLnRoZW4oam9rZT0+eyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYWRkSm9rZShqb2tlKTsgXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0pva2Uoam9rZSk7IFxyXG5cclxuICAgICAgICB9KS5jYXRjaChlPT50aGlzLm1hbmFnZUVycm9yKCdqb2tlJykpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRKb2tlKGpva2U6Sm9rZSl7IC8vIEHDkUFERSBFTiBMSVNUQSBERSBCUk9NQVNcclxuXHJcbiAgICAgICAgdGhpcy5qb2tlcy5wdXNoKGpva2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0pva2Uoam9rZTpKb2tlKSB7IC8vIFBJTlRBIEVMIEhUTUwgREUgTEEgQlJPTUEgT0JURU5JREEgREUgTEEgQVBJXHJcblxyXG4gICAgICAgIGNvbnN0IGNsb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGVtcGxhdGUnKS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgY2xvbmUucXVlcnlTZWxlY3RvcignLmFjdWRpdC10ZXh0JykuaW5uZXJIVE1MID0gam9rZS5qb2tlO1xyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZUljb25zTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVySm9rZXMuaW5uZXJIVE1MID0gJyc7ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXJKb2tlcy5hcHBlbmRDaGlsZChjbG9uZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlQmFja2dyb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlSWNvbnNMaXN0ZW5lcnMoKSB7IC8vIFJFTVVFVkUgRVZFTlQgTElTVEVORVJTIERFIExPUyBFTU9KSVMgQU5URVMgREUgREVTVFJVSVJMT1NcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbnMgPSB0aGlzLmNvbnRhaW5lckpva2VzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2knKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMoaWNvbnMgfHwge30pLmZvckVhY2goa2V5cyA9PiBpY29uc1trZXlzXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudm90ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2b3RlKHZhbHVlKSB7IC8vIEHDkUFERSBWT1RPIEEgVUxUSU1BIEJST01BXHJcblxyXG4gICAgICAgIFsuLi50aGlzLmpva2VzXS5wb3AoKS5zY29yZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLnBhaW50U2VsZWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcGFpbnRTZWxlY3Rpb24oKSB7IC8vIFBJTlRBIEVNT0pJIFNFTEVDQ0lPTkFETyBZIExPUyBOTyBTRUxFQ0NJT05BRE9TXHJcblxyXG4gICAgICAgIGNvbnN0IGljb25zID0gdGhpcy5jb250YWluZXJKb2tlcy5xdWVyeVNlbGVjdG9yQWxsKCdpJyksXHJcbiAgICAgICAgICAgIHRhcmdldCA9IGV2ZW50LnRhcmdldCxcclxuICAgICAgICAgICAgY2xzID0gWyd0ZXh0LXdoaXRlJywgJ3RleHQtd2FybmluZyddO1xyXG5cclxuICAgICAgICBsZXQgZWxlbWVudCwgaXNUYXJnZXQ7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKGljb25zKS5mb3JFYWNoKGtleSA9PiB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50ID0gaWNvbnNba2V5XTtcclxuICAgICAgICAgICAgaXNUYXJnZXQgPSB0YXJnZXQgPT0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHNbTnVtYmVyKGlzVGFyZ2V0KV0pO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzW051bWJlcighaXNUYXJnZXQpXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VCYWNrZ3JvdW5kKCl7IC8vIENBTUJJQSBFTCBTVkcgREVMIEJBQ0tHUk9VTkRcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJrZycpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmtnJyt0aGlzLmN1cnJlbnRCa2cpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRCa2cgPSAgdGhpcy5jdXJyZW50QmtnID09IDMgPyAxOiAodGhpcy5jdXJyZW50QmtnICsgMSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdia2cnK3RoaXMuY3VycmVudEJrZyksMTApXHJcblxyXG4gICAgICAgIDsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJldkhhc1Njb3JlKCkgeyAvLyAgQ0hFQ0tFQSBTSSBVTFRJTUEgQlJPTUEgSEEgU0lETyBQVU5UVUFEQVxyXG5cclxuICAgICAgIHJldHVybiAoKFsuLi50aGlzLmpva2VzXS5wb3AoKSkgfHwge1xyXG4gICAgICAgICAgICBzY29yZTogbnVsbFxyXG4gICAgICAgIH0pLnNjb3JlICE9PSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG1hbmFnZUVycm9yKHR5cGU6c3RyaW5nKXsgLy8gTUVOU0FKRSBTSSBIQVkgRVJST1IgRU4gU0VSVklET1JcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHR5cGUgPT0gJ2pva2UnID8gJ2xhIGJyb21hJzonZWwgdGVtcHMnO1xyXG5cclxuICAgICAgICBhbGVydChcIkhpIGhhIGhhZ3V0IHVuIGVycm9yIGkgbm8gcydoYSBwb2d1dCBjYXJyZWdhciBcIiArIGl0ZW0pOyBcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBwYWludFdlYXRoZXIod2VhdGhlckFwaTpXZWF0aGVyQWRtaW4peyAvLyBQSU5UQSBFTCBIVE1MIERFTCBMQSBBUEkgREVMIFRJRU1QT1xyXG5cclxuICAgICAgICB3ZWF0aGVyQXBpLnF1ZXJ5KCkudGhlbigocmVzcG9uc2UpPT57XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlckRpc3BsYXknKSxcclxuICAgICAgICAgICAgICAgICAgaWNvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbWcnKSxcclxuICAgICAgICAgICAgICAgICAgdGVtcCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpO1xyXG5cclxuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsdGhpcy5nZXRXZWF0aGVySWNvbihyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICB0ZW1wLmlubmVySFRNTCA9IHJlc3BvbnNlLm1haW4udGVtcCArICfCuic7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcblxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT50aGlzLm1hbmFnZUVycm9yKCd0ZW1wcycpKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0V2VhdGhlckljb24ob2JqKXsgLy8gT0JUSUVORSBJQ09OIFNFR1VOIEVMIFRJRU1QTyBRVUUgSEFHQVxyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWF0aGVyQXBpLmdldFdlYXRoZXJJY29uKG9iailcclxuICAgIH1cclxuICAgIFxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9