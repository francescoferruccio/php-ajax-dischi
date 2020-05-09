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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

// Bonus:
// Attraverso un’altra chiamata ajax, filtrare gli album per artista
$(document).ready(function () {
  // variabili globali
  var btnSearch = $("#btn-search");
  var queryString = "";
  var searchInput = $("#search-input"); // init handlebars

  var source = document.getElementById("album-template").innerHTML;
  var template = Handlebars.compile(source); // DICHIARAZIONE FUNZIONI-------------------------------------------------------
  // funzione che stampa il singolo album in pagina

  function stampaAlbum(album) {
    var context = {
      urlImg: album.poster,
      titolo: album.title.toUpperCase(),
      artista: album.author,
      anno: album.year
    };
    var html = template(context);
    $(".container").append(html);
  } // funzione che ottiene gli album dall'api
  // e filtra in base alla query


  function getAlbums(query) {
    $.ajax({
      url: 'api.php',
      method: 'GET',
      data: {
        query: query
      },
      success: function success(data) {
        for (var key in data) {
          var album = data[key];
          stampaAlbum(album);
        }
      },
      error: function error(errore) {
        console.error("ERRORE");
      }
    });
  }

  function filtra() {
    // cancello il contenuto della pagina
    $(".container").html(""); // memorizzo il valore dell'input

    queryString = searchInput.val(); // svuoto l'input

    searchInput.val(""); // chiamata ajax

    getAlbums(queryString);
  } // CODICE-----------------------------------------------------------------------
  // svuoto il campo di input


  searchInput.val(""); // carico tutti i dischi in pagina

  getAlbums(queryString); // al click sul btn "FILTRA"

  btnSearch.click(function () {
    filtra();
  }); // alla pressione del tasto invio sull'input

  searchInput.keydown(function (event) {
    if (event.which == 13) {
      filtra();
    }
  });
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Francesco\Desktop\Boolean\esercizi\repo-github\php-ajax-dischi\bonus\src\app.js */"./src/app.js");
module.exports = __webpack_require__(/*! C:\Users\Francesco\Desktop\Boolean\esercizi\repo-github\php-ajax-dischi\bonus\src\app.scss */"./src/app.scss");


/***/ })

/******/ });