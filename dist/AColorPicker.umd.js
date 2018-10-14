(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AColorPicker"] = factory();
	else
		root["AColorPicker"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0c05":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AColorPicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cca4");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AColorPicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AColorPicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AColorPicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "2770":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.acp-container{display:inline-block\n}", ""]);

// exports


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cca4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2770");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("56e4b39c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "fa81":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * a-color-picker (https://github.com/narsenico/a-color-picker)
 * 
 * Copyright (c) 2017-2018, Gianfranco Caldi.
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var n=r(4);function i(e){return!0===n(e)&&"[object Object]"===Object.prototype.toString.call(e)}e.exports=function(e){var t,r;return!1!==i(e)&&"function"==typeof(t=e.constructor)&&!1!==i(r=t.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf")}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r,n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),s=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(s).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},function(e,t,r){(e.exports=r(1)(void 0)).push([e.i,"/*!\n * a-color-picker\n * https://github.com/narsenico/a-color-picker\n * \n * Copyright (c) 2017-2018, Gianfranco Caldi.\n * Released under the MIT License.\n */\n\n.a-color-picker {\n    background-color: #fafafa;\n    padding: 2px;\n    box-sizing: border-box;\n    display: inline-flex;\n    flex-direction: column;\n    user-select: none;\n    width: 208px;\n    font: 400 10px Helvetica,Arial,sans-serif;\n}\n\n.a-color-picker input {\n    box-sizing: border-box;\n}\n\n.a-color-picker-row {\n    padding: 2px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    user-select: none;\n}\n\n.a-color-picker-row:not(:first-child) {\n    border-top: solid 1px #eee;\n}\n\n.a-color-picker-column {\n    display: flex;\n    flex-direction: column;\n}\n\n.a-color-picker-cell {\n    flex: 1 1 auto;\n}\n\n.a-color-picker-stack {\n    position: relative;\n    overflow: hidden;\n}\n\n.a-color-picker-dot {\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    top: 0px;\n    left: 0px;\n    background: rgba(255, 255, 255, 0.59);\n    pointer-events: none;\n    border-radius: 50px;\n    border: solid 1px #074462;\n}\n\n.a-color-picker-h,\n.a-color-picker-a {\n    border-radius: 2px;\n}\n\n.a-color-picker-preview {\n    box-sizing: border-box;\n    width: 40px;\n    height: 40px;\n    user-select: none;\n}\n\n.a-color-picker-circle {\n    border-radius: 50px;\n    border: solid 1px #eee;    \n}\n\n.a-color-picker-hsl,\n.a-color-picker-rgb,\n.a-color-picker-single-input {\n    justify-content: space-evenly;\n}\n\n.a-color-picker-hsl>label,\n.a-color-picker-rgb>label,\n.a-color-picker-single-input>label {\n    padding: 0 6px;\n    flex: 0 0 auto;\n}\n\n.a-color-picker-hsl>input,\n.a-color-picker-rgb>input,\n.a-color-picker-single-input>input {\n    text-align: center;\n    padding: 2px 0px;\n    width: 0;\n    flex: 1 1 auto;\n}\n\n.a-color-picker-transparent {\n    background-image: linear-gradient(to right, #f2eeee 1px, transparent 1px), linear-gradient(to bottom, #f2eeee 1px, transparent 1px);\n    background-size: 8px 8px;\n}\n\n.a-color-picker.hide-hsl [show-on-hsl],\n.a-color-picker.hide-rgb [show-on-rgb],\n.a-color-picker.hide-single-input [show-on-single-input],\n.a-color-picker.hide-alpha [show-on-alpha] {\n    display: none;\n}\n\n.a-color-picker-clipbaord {\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    cursor: pointer;\n}\n\n.a-color-picker-palette {\n    flex-flow: wrap;\n    flex-direction: row;\n    justify-content: flex-start;\n    padding: 2px 0px;\n}\n\n.a-color-picker-palette-color {\n    width: 15px;\n    height: 15px;\n    flex: 0 1 15px;\n    margin: 5px;\n    box-sizing: border-box;\n    cursor: pointer;\n    border-radius: 3px;\n    border: solid 1px rgba(203, 203, 203, 0.32);\n}\n\n.a-color-picker-palette-add {\n    text-align: center;\n    line-height: 13px;\n    color: #607D8B;\n}",""])},function(e,t,r){var n=r(2);e.exports="string"==typeof n?n:n.toString()},function(e,t,r){"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */e.exports=function(e){return null!=e&&"object"==typeof e&&!1===Array.isArray(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nvl=t.ensureArray=t.limit=t.getLuminance=t.parseColor=t.parseColorToHsla=t.parseColorToHsl=t.cssHslaToHsla=t.cssHslToHsl=t.parseColorToRgba=t.parseColorToRgb=t.cssRgbaToRgba=t.cssRgbToRgb=t.cssColorToRgba=t.cssColorToRgb=t.intToRgb=t.rgbToInt=t.rgbToHsl=t.hslToRgb=t.rgbToHex=t.PALETTE_MATERIAL_CHROME=t.PALETTE_MATERIAL_500=t.COLOR_NAMES=void 0;var n,i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=(n=r(0))&&n.__esModule?n:{default:n};function s(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var a={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4","indianred ":"#CD5C5C","indigo ":"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"};function l(e,t,r){return e=+e,isNaN(e)?t:e<t?t:e>r?r:e}function c(e,t){return null===e||void 0===e?t:e}function u(e,t,r){var n=[l(e,0,255),l(t,0,255),l(r,0,255)];return"#"+("000000"+((e=n[0])<<16|(t=n[1])<<8|(r=n[2])).toString(16)).slice(-6)}function h(e,t,r){var n=void 0,i=void 0,o=void 0,s=[l(e,0,360)/360,l(t,0,100)/100,l(r,0,100)/100];if(e=s[0],r=s[2],0==(t=s[1]))n=i=o=r;else{var a=function(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e},c=r<.5?r*(1+t):r+t-r*t,u=2*r-c;n=a(u,c,e+1/3),i=a(u,c,e),o=a(u,c,e-1/3)}return[255*n,255*i,255*o].map(Math.round)}function p(e,t,r){var n=[l(e,0,255)/255,l(t,0,255)/255,l(r,0,255)/255];e=n[0],t=n[1],r=n[2];var i=Math.max(e,t,r),o=Math.min(e,t,r),s=void 0,a=void 0,c=(i+o)/2;if(i==o)s=a=0;else{var u=i-o;switch(a=c>.5?u/(2-i-o):u/(i+o),i){case e:s=(t-r)/u+(t<r?6:0);break;case t:s=(r-e)/u+2;break;case r:s=(e-t)/u+4}s/=6}return[360*s,100*a,100*c].map(Math.round)}function d(e,t,r){return e<<16|t<<8|r}function g(e){if(e){var t=a[e.toString().toLowerCase()],r=/^\s*#?((([0-9A-F])([0-9A-F])([0-9A-F]))|(([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})))\s*$/i.exec(t||e)||[],n=i(r,10),o=n[3],s=n[4],l=n[5],c=n[7],u=n[8],h=n[9];if(void 0!==o)return[parseInt(o+o,16),parseInt(s+s,16),parseInt(l+l,16)];if(void 0!==c)return[parseInt(c,16),parseInt(u,16),parseInt(h,16)]}}function f(e){if(e){var t=a[e.toString().toLowerCase()],r=/^\s*#?((([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])?)|(([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?))\s*$/i.exec(t||e)||[],n=i(r,12),o=n[3],s=n[4],l=n[5],c=n[6],u=n[8],h=n[9],p=n[10],d=n[11];if(void 0!==o)return[parseInt(o+o,16),parseInt(s+s,16),parseInt(l+l,16),c?+(parseInt(c+c,16)/255).toFixed(2):1];if(void 0!==u)return[parseInt(u,16),parseInt(h,16),parseInt(p,16),d?+(parseInt(d,16)/255).toFixed(2):1]}}function v(e){if(e){var t=/^rgb\((\d+)[\s,](\d+)[\s,](\d+)\)/i.exec(e)||[],r=i(t,4),n=r[0],o=r[1],s=r[2],a=r[3];return n?[l(o,0,255),l(s,0,255),l(a,0,255)]:void 0}}function b(e){if(e){var t=/^rgba?\((\d+)\s*[\s,]\s*(\d+)\s*[\s,]\s*(\d+)(\s*[\s,]\s*(\d*(.\d+)?))?\)/i.exec(e)||[],r=i(t,6),n=r[0],o=r[1],s=r[2],a=r[3],u=r[5];return n?[l(o,0,255),l(s,0,255),l(a,0,255),l(c(u,1),0,1)]:void 0}}function m(e){if(Array.isArray(e))return[l(e[0],0,255),l(e[1],0,255),l(e[2],0,255),l(c(e[3],1),0,1)];var t=f(e)||b(e);return t&&3===t.length&&t.push(1),t}function y(e){if(e){var t=/^hsl\((\d+)[\s,](\d+)[\s,](\d+)\)/i.exec(e)||[],r=i(t,4),n=r[0],o=r[1],s=r[2],a=r[3];return n?[l(o,0,360),l(s,0,100),l(a,0,100)]:void 0}}function F(e){if(e){var t=/^hsla?\((\d+)\s*[\s,]\s*(\d+)\s*[\s,]\s*(\d+)(\s*[\s,]\s*(\d*(.\d+)?))?\)/i.exec(e)||[],r=i(t,6),n=r[0],o=r[1],s=r[2],a=r[3],u=r[5];return n?[l(o,0,255),l(s,0,255),l(a,0,255),l(c(u,1),0,1)]:void 0}}function A(e){if(Array.isArray(e))return[l(e[0],0,360),l(e[1],0,100),l(e[2],0,100),l(c(e[3],1),0,1)];var t=F(e);return t&&3===t.length&&t.push(1),t}function k(e,t){switch(t){case"rgb":default:return e.slice(0,3);case"rgbcss":return"rgb("+e[0]+", "+e[1]+", "+e[2]+")";case"rgbcss4":return"rgb("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")";case"rgba":return e;case"rgbacss":return"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")";case"hsl":return p.apply(void 0,s(e));case"hslcss":return"hsl("+(e=p.apply(void 0,s(e)))[0]+", "+e[1]+", "+e[2]+")";case"hslcss4":var r=p.apply(void 0,s(e));return"hsl("+r[0]+", "+r[1]+", "+r[2]+", "+e[3]+")";case"hsla":return[].concat(s(p.apply(void 0,s(e))),[e[3]]);case"hslacss":var n=p.apply(void 0,s(e));return"hsla("+n[0]+", "+n[1]+", "+n[2]+", "+e[3]+")";case"hex":return u.apply(void 0,s(e));case"hexcss4":return u.apply(void 0,s(e))+("00"+parseInt(255*e[3]).toString(16)).slice(-2);case"int":return d.apply(void 0,s(e))}}t.COLOR_NAMES=a,t.PALETTE_MATERIAL_500=["#F44336","#E91E63","#E91E63","#9C27B0","#9C27B0","#673AB7","#673AB7","#3F51B5","#3F51B5","#2196F3","#2196F3","#03A9F4","#03A9F4","#00BCD4","#00BCD4","#009688","#009688","#4CAF50","#4CAF50","#8BC34A","#8BC34A","#CDDC39","#CDDC39","#FFEB3B","#FFEB3B","#FFC107","#FFC107","#FF9800","#FF9800","#FF5722","#FF5722","#795548","#795548","#9E9E9E","#9E9E9E","#607D8B","#607D8B"],t.PALETTE_MATERIAL_CHROME=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b"],t.rgbToHex=u,t.hslToRgb=h,t.rgbToHsl=p,t.rgbToInt=d,t.intToRgb=function(e){return[e>>16&255,e>>8&255,255&e]},t.cssColorToRgb=g,t.cssColorToRgba=f,t.cssRgbToRgb=v,t.cssRgbaToRgba=b,t.parseColorToRgb=function(e){return Array.isArray(e)?e=[l(e[0],0,255),l(e[1],0,255),l(e[2],0,255)]:g(e)||v(e)},t.parseColorToRgba=m,t.cssHslToHsl=y,t.cssHslaToHsla=F,t.parseColorToHsl=function(e){return Array.isArray(e)?e=[l(e[0],0,360),l(e[1],0,100),l(e[2],0,100)]:y(e)},t.parseColorToHsla=A,t.parseColor=function(e,t){if(t=t||"rgb",null!==e&&void 0!==e){var r=void 0;if((r=m(e))||(r=A(e))&&(r=[].concat(s(h.apply(void 0,s(r))),[r[3]])))return(0,o.default)(t)?["rgb","rgbcss","rgbcss4","rgba","rgbacss","hsl","hslcss","hslcss4","hsla","hslacss","hex","hexcss4","int"].reduce(function(e,t){return e[t]=k(r,t),e},t||{}):k(r,t.toString().toLowerCase())}},t.getLuminance=function(e,t,r){return.2126*(e=(e/=255)<.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t=(t/=255)<.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*((r/=255)<.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},t.limit=l,t.ensureArray=function(e){return e?Array.from(e):[]},t.nvl=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION=t.PALETTE_MATERIAL_CHROME=t.PALETTE_MATERIAL_500=t.COLOR_NAMES=t.getLuminance=t.intToRgb=t.rgbToInt=t.rgbToHsl=t.hslToRgb=t.rgbToHex=t.parseColor=t.parseColorToHsla=t.parseColorToHsl=t.parseColorToRgba=t.parseColorToRgb=t.from=t.createPicker=void 0;var n,i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(5),a=(n=r(0))&&n.__esModule?n:{default:n};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}
/*!
                                                                                                                                                                                                     * a-color-picker
                                                                                                                                                                                                     * https://github.com/narsenico/a-color-picker
                                                                                                                                                                                                     * 
                                                                                                                                                                                                     * Copyright (c) 2017-2018, Gianfranco Caldi.
                                                                                                                                                                                                     * Released under the MIT License.
                                                                                                                                                                                                     */var u="undefined"!=typeof window&&window.navigator.userAgent.indexOf("Edge")>-1,h="undefined"!=typeof window&&window.navigator.userAgent.indexOf("rv:")>-1,p={id:null,attachTo:"body",showHSL:!0,showRGB:!0,showHEX:!0,showAlpha:!1,color:"#ff0000",palette:null,paletteEditable:!1,useAlphaInPalette:"auto"},d=[200,150],g=[150,16],f=g,v="COLOR",b="RGBA_USER",m="HSLA_USER",y='<div class="a-color-picker-row a-color-picker-stack">\n                            <canvas class="a-color-picker-sl a-color-picker-transparent"></canvas>\n                            <div class="a-color-picker-dot"></div>\n                        </div>\n                        <div class="a-color-picker-row">\n                            <div class="a-color-picker-stack a-color-picker-transparent a-color-picker-circle">\n                                <div class="a-color-picker-preview">\n                                    <input class="a-color-picker-clipbaord" type="text">\n                                </div>\n                            </div>\n                            <div class="a-color-picker-column">\n                                <div class="a-color-picker-cell a-color-picker-stack">\n                                    <canvas class="a-color-picker-h"></canvas>\n                                    <div class="a-color-picker-dot"></div>\n                                </div>\n                                <div class="a-color-picker-cell a-color-picker-stack" show-on-alpha>\n                                    <canvas class="a-color-picker-a a-color-picker-transparent"></canvas>\n                                    <div class="a-color-picker-dot"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-hsl" show-on-hsl>\n                            <label>H</label>\n                            <input name="H" type="number" maxlength="3" min="0" max="360" value="0">\n                            <label>S</label>\n                            <input name="S" type="number" maxlength="3" min="0" max="100" value="0">\n                            <label>L</label>\n                            <input name="L" type="number" maxlength="3" min="0" max="100" value="0">\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-rgb" show-on-rgb>\n                            <label>R</label>\n                            <input name="R" type="number" maxlength="3" min="0" max="255" value="0">\n                            <label>G</label>\n                            <input name="G" type="number" maxlength="3" min="0" max="255" value="0">\n                            <label>B</label>\n                            <input name="B" type="number" maxlength="3" min="0" max="255" value="0">\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-single-input" show-on-single-input>\n                            <label>HEX</label>\n                            <input name="RGBHEX" type="text" select-on-focus>\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-palette"></div>';function F(e,t,r){return e?e instanceof HTMLElement?e:e instanceof NodeList?e[0]:"string"==typeof e?document.querySelector(e):e.jquery?e.get(0):r?t:null:t}function A(e){var t=e.getContext("2d"),r=+e.width,n=+e.height,i=t.createLinearGradient(1,1,1,n-1);return i.addColorStop(0,"white"),i.addColorStop(1,"black"),{setHue:function(e){var o=t.createLinearGradient(0,0,r-1,0);o.addColorStop(0,"hsla("+e+", 100%, 50%, 0)"),o.addColorStop(1,"hsla("+e+", 100%, 50%, 1)"),t.fillStyle=i,t.fillRect(0,0,r,n),t.fillStyle=o,t.globalCompositeOperation="multiply",t.fillRect(0,0,r,n),t.globalCompositeOperation="source-over"},grabColor:function(e,r){return t.getImageData(e,r,1,1).data},findColor:function(e,i,o){for(var s=4*r,a=t.getImageData(0,0,r,n).data,l=[-1,-1],c=0;c<a.length;c+=4)if(Math.abs(a[c]-e)<=5&&Math.abs(a[c+1]-i)<=5&&Math.abs(a[c+2]-o)<=5){l=[c%s/4,Math.floor(c/s)];break}return l}}}function k(e,t,r){return null===e?t:/^\s*$/.test(e)?r:!!/true|yes|1/i.test(e)||!/false|no|0/i.test(e)&&t}var E=function(){function e(t,r){if(l(this,e),r?(t=F(t),this.options=Object.assign({},p,r)):t&&(0,a.default)(t)?(this.options=Object.assign({},p,t),t=F(this.options.attachTo)):(this.options=Object.assign({},p),t=F((0,s.nvl)(t,this.options.attachTo))),!t)throw new Error("Container not found: "+this.options.attachTo);!function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"acp-";if(t.hasAttribute(r+"show-hsl")&&(e.showHSL=k(t.getAttribute(r+"show-hsl"),p.showHSL,!0)),t.hasAttribute(r+"show-rgb")&&(e.showRGB=k(t.getAttribute(r+"show-rgb"),p.showRGB,!0)),t.hasAttribute(r+"show-hex")&&(e.showHEX=k(t.getAttribute(r+"show-hex"),p.showHEX,!0)),t.hasAttribute(r+"show-alpha")&&(e.showAlpha=k(t.getAttribute(r+"show-alpha"),p.showAlpha,!0)),t.hasAttribute(r+"palette-editable")&&(e.paletteEditable=k(t.getAttribute(r+"palette-editable"),p.paletteEditable,!0)),t.hasAttribute(r+"palette")){var n=t.getAttribute(r+"palette");switch(n){case"PALETTE_MATERIAL_500":e.palette=s.PALETTE_MATERIAL_500;break;case"PALETTE_MATERIAL_CHROME":case"":e.palette=s.PALETTE_MATERIAL_CHROME;break;default:e.palette=n.split(/[;\|]/)}}t.hasAttribute(r+"color")&&(e.color=t.getAttribute(r+"color"))}(this.options,t),this.H=0,this.S=0,this.L=0,this.R=0,this.G=0,this.B=0,this.A=1,this.palette={},this.element=document.createElement("div"),this.options.id&&(this.element.id=this.options.id),this.element.className="a-color-picker",this.options.showRGB||(this.element.className+=" hide-rgb"),this.options.showHSL||(this.element.className+=" hide-hsl"),this.options.showHEX||(this.element.className+=" hide-single-input"),this.options.showAlpha||(this.element.className+=" hide-alpha"),this.element.innerHTML=y,t.appendChild(this.element);var n=this.element.querySelector(".a-color-picker-h");this.setupHueCanvas(n),this.hueBarHelper=A(n),this.huePointer=this.element.querySelector(".a-color-picker-h+.a-color-picker-dot");var i=this.element.querySelector(".a-color-picker-sl");this.setupSlCanvas(i),this.slBarHelper=A(i),this.slPointer=this.element.querySelector(".a-color-picker-sl+.a-color-picker-dot"),this.preview=this.element.querySelector(".a-color-picker-preview"),this.setupClipboard(this.preview.querySelector(".a-color-picker-clipbaord")),this.setupInput(this.inputH=this.element.querySelector(".a-color-picker-hsl>input[name=H]")),this.setupInput(this.inputS=this.element.querySelector(".a-color-picker-hsl>input[name=S]")),this.setupInput(this.inputL=this.element.querySelector(".a-color-picker-hsl>input[name=L]")),this.setupInput(this.inputR=this.element.querySelector(".a-color-picker-rgb>input[name=R]")),this.setupInput(this.inputG=this.element.querySelector(".a-color-picker-rgb>input[name=G]")),this.setupInput(this.inputB=this.element.querySelector(".a-color-picker-rgb>input[name=B]")),this.setupInput(this.inputRGBHEX=this.element.querySelector("input[name=RGBHEX]")),this.setPalette(this.element.querySelector(".a-color-picker-palette")),this.setupAlphaCanvas(this.element.querySelector(".a-color-picker-a")),this.alphaPointer=this.element.querySelector(".a-color-picker-a+.a-color-picker-dot"),this.onValueChanged(v,this.options.color)}return o(e,[{key:"setupHueCanvas",value:function(e){var t=this;e.width=g[0],e.height=g[1];for(var r=e.getContext("2d"),n=r.createLinearGradient(0,0,g[0],0),i=0;i<=1;i+=1/360)n.addColorStop(i,"hsl("+360*i+", 100%, 50%)");r.fillStyle=n,r.fillRect(0,0,g[0],g[1]);var o=function(r){var n=(0,s.limit)(r.clientX-e.getBoundingClientRect().left,0,g[0]),i=Math.round(360*n/g[0]);t.huePointer.style.left=n-7+"px",t.onValueChanged("H",i)},a=function e(){document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",e)};e.addEventListener("mousedown",function(e){o(e),document.addEventListener("mousemove",o),document.addEventListener("mouseup",a)})}},{key:"setupSlCanvas",value:function(e){var t=this;e.width=d[0],e.height=d[1];var r=function(r){var n=(0,s.limit)(r.clientX-e.getBoundingClientRect().left,0,d[0]-1),i=(0,s.limit)(r.clientY-e.getBoundingClientRect().top,0,d[1]-1),o=t.slBarHelper.grabColor(n,i);t.slPointer.style.left=n-7+"px",t.slPointer.style.top=i-7+"px",t.onValueChanged("RGB",o)},n=function e(){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",e)};e.addEventListener("mousedown",function(e){r(e),document.addEventListener("mousemove",r),document.addEventListener("mouseup",n)})}},{key:"setupAlphaCanvas",value:function(e){var t=this;e.width=f[0],e.height=f[1];var r=e.getContext("2d"),n=r.createLinearGradient(0,0,e.width-1,0);n.addColorStop(0,"hsla(0, 0%, 50%, 0)"),n.addColorStop(1,"hsla(0, 0%, 50%, 1)"),r.fillStyle=n,r.fillRect(0,0,f[0],f[1]);var i=function(r){var n=(0,s.limit)(r.clientX-e.getBoundingClientRect().left,0,f[0]),i=+(n/f[0]).toFixed(2);t.alphaPointer.style.left=n-7+"px",t.onValueChanged("ALPHA",i)},o=function e(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",e)};e.addEventListener("mousedown",function(e){i(e),document.addEventListener("mousemove",i),document.addEventListener("mouseup",o)})}},{key:"setupInput",value:function(e){var t=this,r=+e.min,n=+e.max,i=e.name;e.hasAttribute("select-on-focus")&&e.addEventListener("focus",function(){e.select()}),"text"===e.type?e.addEventListener("change",function(){t.onValueChanged(i,e.value)}):((u||h)&&e.addEventListener("keydown",function(o){"Up"===o.key?(e.value=(0,s.limit)(+e.value+1,r,n),t.onValueChanged(i,e.value),o.returnValue=!1):"Down"===o.key&&(e.value=(0,s.limit)(+e.value-1,r,n),t.onValueChanged(i,e.value),o.returnValue=!1)}),e.addEventListener("change",function(){var o=+e.value;t.onValueChanged(i,(0,s.limit)(o,r,n))}))}},{key:"setupClipboard",value:function(e){var t=this;e.title="click to copy",e.addEventListener("click",function(){e.value=(0,s.parseColor)([t.R,t.G,t.B,t.A],"hexcss4"),e.select(),document.execCommand("copy")})}},{key:"setPalette",value:function(e){var t=this,r="auto"===this.options.useAlphaInPalette?this.options.showAlpha:this.options.useAlphaInPalette,n=(0,s.ensureArray)(this.options.palette);if(this.options.paletteEditable||n.length>0){var i=function(r,n,i){var o=e.querySelector('.a-color-picker-palette-color[data-color="'+r+'"]')||document.createElement("div");o.className="a-color-picker-palette-color",o.style.backgroundColor=r,o.setAttribute("data-color",r),o.title=r,e.insertBefore(o,n),t.palette[r]=!0,i&&t.onPaletteColorAdd(r)},o=function(r,n){r?(e.removeChild(r),t.palette[r.getAttribute("data-color")]=!1,n&&t.onPaletteColorRemove(r.getAttribute("data-color"))):(e.querySelectorAll(".a-color-picker-palette-color[data-color]").forEach(function(t){e.removeChild(t)}),Object.keys(t.palette).forEach(function(e){t.palette[e]=!1}),n&&t.onPaletteColorRemove())};if(n.map(function(e){return(0,s.parseColor)(e,r?"rgbcss4":"hex")}).filter(function(e){return!!e}).forEach(function(e){return i(e)}),this.options.paletteEditable){var a=document.createElement("div");a.className="a-color-picker-palette-color a-color-picker-palette-add",a.innerHTML="+",e.appendChild(a),e.addEventListener("click",function(e){/a-color-picker-palette-add/.test(e.target.className)?e.shiftKey?o(null,!0):i(r?(0,s.parseColor)([t.R,t.G,t.B,t.A],"rgbcss4"):(0,s.rgbToHex)(t.R,t.G,t.B),e.target,!0):/a-color-picker-palette-color/.test(e.target.className)&&(e.shiftKey?o(e.target,!0):t.onValueChanged(v,e.target.getAttribute("data-color")))})}else e.addEventListener("click",function(e){/a-color-picker-palette-color/.test(e.target.className)&&t.onValueChanged(v,e.target.getAttribute("data-color"))})}else e.style.display="none"}},{key:"onValueChanged",value:function(e,t){switch(e){case"H":this.H=t;var r=(0,s.hslToRgb)(this.H,this.S,this.L),n=i(r,3);this.R=n[0],this.G=n[1],this.B=n[2],this.slBarHelper.setHue(t),this.updatePointerH(this.H),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"S":this.S=t;var o=(0,s.hslToRgb)(this.H,this.S,this.L),a=i(o,3);this.R=a[0],this.G=a[1],this.B=a[2],this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"L":this.L=t;var l=(0,s.hslToRgb)(this.H,this.S,this.L),c=i(l,3);this.R=c[0],this.G=c[1],this.B=c[2],this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"R":this.R=t;var u=(0,s.rgbToHsl)(this.R,this.G,this.B),h=i(u,3);this.H=h[0],this.S=h[1],this.L=h[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"G":this.G=t;var p=(0,s.rgbToHsl)(this.R,this.G,this.B),d=i(p,3);this.H=d[0],this.S=d[1],this.L=d[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"B":this.B=t;var g=(0,s.rgbToHsl)(this.R,this.G,this.B),f=i(g,3);this.H=f[0],this.S=f[1],this.L=f[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"RGB":var y=i(t,3);this.R=y[0],this.G=y[1],this.B=y[2];var F=(0,s.rgbToHsl)(this.R,this.G,this.B),A=i(F,3);this.H=A[0],this.S=A[1],this.L=A[2],this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B);break;case b:var k=i(t,4);this.R=k[0],this.G=k[1],this.B=k[2],this.A=k[3];var E=(0,s.rgbToHsl)(this.R,this.G,this.B),H=i(E,3);this.H=H[0],this.S=H[1],this.L=H[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B),this.updatePointerA(this.A);break;case m:var C=i(t,4);this.H=C[0],this.S=C[1],this.L=C[2],this.A=C[3];var R=(0,s.hslToRgb)(this.H,this.S,this.L),B=i(R,3);this.R=B[0],this.G=B[1],this.B=B[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B),this.updatePointerA(this.A);break;case"RGBHEX":var L=(0,s.cssColorToRgb)(t)||[this.R,this.G,this.B],x=i(L,3);this.R=x[0],this.G=x[1],this.B=x[2];var S=(0,s.rgbToHsl)(this.R,this.G,this.B),w=i(S,3);this.H=w[0],this.S=w[1],this.L=w[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B);break;case v:var T=(0,s.parseColor)(t,"rgba")||[0,0,0,1],G=i(T,4);this.R=G[0],this.G=G[1],this.B=G[2],this.A=G[3];var I=(0,s.rgbToHsl)(this.R,this.G,this.B),P=i(I,3);this.H=P[0],this.S=P[1],this.L=P[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B),this.updatePointerA(this.A);break;case"ALPHA":this.A=t}this.onColorChanged(this.R,this.G,this.B,this.A)}},{key:"onColorChanged",value:function(e,t,r,n){this.preview.style.backgroundColor=1===n?"rgb("+e+","+t+","+r+")":"rgba("+e+","+t+","+r+","+n+")",this.onchange&&this.onchange(this.preview.style.backgroundColor)}},{key:"onPaletteColorAdd",value:function(e){this.oncoloradd&&this.oncoloradd(e)}},{key:"onPaletteColorRemove",value:function(e){this.oncolorremove&&this.oncolorremove(e)}},{key:"updateInputHSL",value:function(e,t,r){this.inputH.value=e,this.inputS.value=t,this.inputL.value=r}},{key:"updateInputRGB",value:function(e,t,r){this.inputR.value=e,this.inputG.value=t,this.inputB.value=r}},{key:"updateInputRGBHEX",value:function(e,t,r){this.inputRGBHEX.value=(0,s.rgbToHex)(e,t,r)}},{key:"updatePointerH",value:function(e){var t=g[0]*e/360;this.huePointer.style.left=t-7+"px"}},{key:"updatePointerSL",value:function(e,t,r){var n=(0,s.hslToRgb)(e,t,r),o=i(n,3),a=o[0],l=o[1],c=o[2],u=this.slBarHelper.findColor(a,l,c),h=i(u,2),p=h[0],d=h[1];p>=0&&(this.slPointer.style.left=p-7+"px",this.slPointer.style.top=d-7+"px")}},{key:"updatePointerA",value:function(e){var t=f[0]*e;this.alphaPointer.style.left=t-7+"px"}}]),e}(),H=function(){function e(t){l(this,e),this.name=t,this.listeners=[]}return o(e,[{key:"on",value:function(e){e&&this.listeners.push(e)}},{key:"off",value:function(e){this.listeners=e?this.listeners.filter(function(t){return t!==e}):[]}},{key:"emit",value:function(e,t){for(var r=this.listeners.slice(0),n=0;n<r.length;n++)r[n].apply(t,e)}}]),e}();function C(e,t){var r=new E(e,t),n={change:new H("change"),coloradd:new H("coloradd"),colorremove:new H("colorremove")},o=!0,a={},l={get element(){return r.element},get rgb(){return[r.R,r.G,r.B]},set rgb(e){var t=i(e,3),n=t[0],o=t[1],a=t[2],l=[(0,s.limit)(n,0,255),(0,s.limit)(o,0,255),(0,s.limit)(a,0,255)];n=l[0],o=l[1],a=l[2],r.onValueChanged(b,[n,o,a,1])},get hsl(){return[r.H,r.S,r.L]},set hsl(e){var t=i(e,3),n=t[0],o=t[1],a=t[2],l=[(0,s.limit)(n,0,360),(0,s.limit)(o,0,100),(0,s.limit)(a,0,100)];n=l[0],o=l[1],a=l[2],r.onValueChanged(m,[n,o,a,1])},get rgbhex(){return this.all.hex},get rgba(){return[r.R,r.G,r.B,r.A]},set rgba(e){var t=i(e,4),n=t[0],o=t[1],a=t[2],l=t[3],c=[(0,s.limit)(n,0,255),(0,s.limit)(o,0,255),(0,s.limit)(a,0,255),(0,s.limit)(l,0,1)];n=c[0],o=c[1],a=c[2],l=c[3],r.onValueChanged(b,[n,o,a,l])},get hsla(){return[r.H,r.S,r.L,r.A]},set hsla(e){var t=i(e,4),n=t[0],o=t[1],a=t[2],l=t[3],c=[(0,s.limit)(n,0,360),(0,s.limit)(o,0,100),(0,s.limit)(a,0,100),(0,s.limit)(l,0,1)];n=c[0],o=c[1],a=c[2],l=c[3],r.onValueChanged(m,[n,o,a,l])},get color(){return this.all.toString()},set color(e){r.onValueChanged(v,e)},get all(){if(o){var e=[r.R,r.G,r.B,r.A],t=r.A<1?"rgba("+r.R+","+r.G+","+r.B+","+r.A+")":s.rgbToHex.apply(void 0,e);(a=(0,s.parseColor)(e,a)).toString=function(){return t},o=!1}return Object.assign({},a)},get onchange(){return n.change&&n.change.listeners[0]},set onchange(e){this.off("change").on("change",e)},get oncoloradd(){return n.coloradd&&n.coloradd.listeners[0]},set oncoloradd(e){this.off("coloradd").on("coloradd",e)},get oncolorremove(){return n.colorremove&&n.colorremove.listeners[0]},set oncolorremove(e){this.off("colorremove").on("colorremove",e)},get palette(){return Object.keys(r.palette).filter(function(e){return r.palette[e]})},on:function(e,t){return e&&n[e]&&n[e].on(t),this},off:function(e,t){return e&&n[e]&&n[e].off(t),this}};return r.onchange=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];o=!0,n.change.emit([l].concat(t),l)},r.oncoloradd=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];n.coloradd.emit([l].concat(t),l)},r.oncolorremove=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];n.colorremove.emit([l].concat(t),l)},r.element.ctrl=l,l}if("undefined"!=typeof window&&!document.querySelector('head>style[data-source="a-color-picker"]')){var R=r(3).toString(),B=document.createElement("style");B.setAttribute("type","text/css"),B.setAttribute("data-source","a-color-picker"),B.innerHTML=R,document.querySelector("head").appendChild(B)}t.createPicker=C,t.from=function(e,t){var r=function(e){return e?Array.isArray(e)?e:e instanceof HTMLElement?[e]:e instanceof NodeList?[].concat(c(e)):"string"==typeof e?[].concat(c(document.querySelectorAll(e))):e.jquery?e.get():[]:[]}(e).map(function(e,r){var n=C(e,t);return n.index=r,n});return r.on=function(e,t){return r.forEach(function(r){return r.on(e,t)}),this},r.off=function(e){return r.forEach(function(t){return t.off(e)}),this},r},t.parseColorToRgb=s.parseColorToRgb,t.parseColorToRgba=s.parseColorToRgba,t.parseColorToHsl=s.parseColorToHsl,t.parseColorToHsla=s.parseColorToHsla,t.parseColor=s.parseColor,t.rgbToHex=s.rgbToHex,t.hslToRgb=s.hslToRgb,t.rgbToHsl=s.rgbToHsl,t.rgbToInt=s.rgbToInt,t.intToRgb=s.intToRgb,t.getLuminance=s.getLuminance,t.COLOR_NAMES=s.COLOR_NAMES,t.PALETTE_MATERIAL_500=s.PALETTE_MATERIAL_500,t.PALETTE_MATERIAL_CHROME=s.PALETTE_MATERIAL_CHROME,t.VERSION="1.1.3"}])});

/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/AColorPicker.vue?vue&type=template&id=7d01358a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"acpContainer",staticClass:"acp-container",attrs:{"acp-color":_vm.color,"acp-show-hsl":_vm.showHsl,"acp-show-rgb":_vm.showRgb,"acp-show-hex":_vm.showHex,"acp-show-alpha":_vm.showAlpha,"acp-palette-editable":_vm.paletteEditable,"acp-palette":_vm.palette,"acp-use-alpha-in-palette":_vm.useAlphaInPalette}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/AColorPicker.vue?vue&type=template&id=7d01358a&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/AColorPicker.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
var _require = __webpack_require__("fa81"),
    from = _require.from;

var boolProp = {
  validator: function validator(value) {
    return ["yes", "no", "true", "false"].indexOf(value) !== -1;
  }
};
/* harmony default export */ var AColorPickervue_type_script_lang_js_ = ({
  name: "a-color-picker",
  props: {
    color: [String, Number],
    showHsl: boolProp,
    showRgb: boolProp,
    showHex: boolProp,
    showAlpha: boolProp,
    paletteEditable: boolProp,
    palette: String,
    useAlphaInPalette: [String, Boolean]
  },
  mounted: function mounted() {
    var _this = this;

    this.picker = from(this.$refs.acpContainer).on("change", function (ctrl, color) {
      _this.$emit("change", ctrl, color);
    }).on("coloradd", function (ctrl, color) {
      _this.$emit("coloradd", ctrl, color);
    }).on("colorremove", function (ctrl, color) {
      _this.$emit("colorremove", ctrl, color);
    });
  }
});
// CONCATENATED MODULE: ./src/AColorPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_AColorPickervue_type_script_lang_js_ = (AColorPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/AColorPicker.vue?vue&type=style&index=0&lang=css&
var AColorPickervue_type_style_index_0_lang_css_ = __webpack_require__("0c05");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/AColorPicker.vue






/* normalize component */

var component = normalizeComponent(
  src_AColorPickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "AColorPicker.vue"
/* harmony default export */ var AColorPicker = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (AColorPicker);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=AColorPicker.umd.js.map