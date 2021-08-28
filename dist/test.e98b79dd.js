// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n    .skin * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n  .skin *::before,\n  .skin *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n  \n  .skin {\n    position: relative;\n    background-color: #ffe600;\n    height: 100vh;\n  }\n  \n  .nose {\n    border-style: solid;\n    border-width: 11px;\n    border-color: black transparent transparent transparent;\n    border-bottom: none;\n    width: 0px;\n    height: 0px;\n    left: 50%;\n    top: 30vh;\n    margin-left: -11px;\n    position: absolute;\n  }\n  \n  .yuan-wrapper {\n    width: 22px;\n    height: 8px;\n    position: absolute;\n    left: 50%;\n    margin-left: -11px;\n    top: -19px;\n    overflow: hidden;\n  }\n  .yuan {\n    width: 22px;\n    height: 11px;\n    position: absolute;\n    left: 50%;\n    top: 2px;\n    margin-left: -11px;\n    border-radius: 50%;\n    background-color: black;\n  }\n  \n  .eye-left {\n    width: 50px;\n    height: 50px;\n    border: 3px solid black;\n    background: #2e2e2e;\n    left: 50%;\n    top: 30vh;\n    margin-top: -50px;\n    margin-left: -25px;\n    border-radius: 50%;\n    position: absolute;\n    transform: translateX(-120px);\n  }\n  \n  .eye-right {\n    width: 50px;\n    height: 50px;\n    border: 3px solid black;\n    background: #2e2e2e;\n    left: 50%;\n    top: 30vh;\n    margin-top: -50px;\n    margin-left: -25px;\n    border-radius: 50%;\n    position: absolute;\n    transform: translateX(120px);\n  }\n  \n  .eye-right::before {\n    content: \"\";\n    display: block;\n    border: 2px solid black;\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    border-radius: 50%;\n    background: white;\n    left: 6px;\n  }\n  .eye-left::before {\n    content: \"\";\n    display: block;\n    border: 2px solid black;\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    border-radius: 50%;\n    background: white;\n    left: 6px;\n  }\n  \n  .lip-left {\n    border: 3px solid black;\n    border-color: transparent transparent black black;\n    width: 80px;\n    height: 50px;\n    position: absolute;\n    left: 50%;\n    margin-left: -84px;\n    top: 30vh;\n    border-radius: 0 120px/80px;\n    transform: rotate(-25deg);\n    z-index: 3;\n    background-color: #ffe600;\n  }\n  \n  .lip-right {\n    border: 3px solid black;\n    border-color: transparent black black transparent;\n    width: 80px;\n    height: 50px;\n    position: absolute;\n    right: 50%;\n    margin-right: -82px;\n    top: 30vh;\n    border-radius: 120px/80px 0;\n    transform: rotate(25deg);\n    z-index: 3;\n    background-color: #ffe600;\n  }\n  \n  .lip-left::before {\n    content: \"\";\n    display: block;\n    width: 6px;\n    height: 30px;\n    position: absolute;\n    top: -4px;\n    margin-left: -4px;\n    background-color: #ffe600;\n  }\n  \n  .lip-right::after {\n    content: \"\";\n    display: block;\n    width: 6px;\n    height: 30px;\n    position: absolute;\n    top: -4px;\n    margin-left: 72px;\n    background-color: #ffe600;\n  }\n  .mouth-down {\n    border: 3px solid black;\n    width: 120px;\n    height: 500px;\n    position: absolute;\n    top: -330px;\n    border-radius: 60%;\n    background-color: #9b000a;\n    overflow: hidden;\n  }\n  \n  .mouth-down-wrapper {\n    width: 120px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    margin-left: -60px;\n    top: 30vh;\n    margin-top: 30px;\n    overflow: hidden;\n  }\n  \n  .mouth-down::before {\n    content: \"\";\n    display: block;\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    top: 360px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 50%;\n    background-color: #ff485f;\n  }\n  \n  .cheek-left {\n    border: 3px solid black;\n    width: 70px;\n    height: 70px;\n    position: absolute;\n    border-radius: 50%;\n    left: 50%;\n    margin-left: -35px;\n    transform: translateX(180px);\n    top: 30vh;\n    margin-top: 30px;\n    background-color: #ff0000;\n  }\n  .cheek-right {\n    border: 3px solid black;\n    width: 70px;\n    height: 70px;\n    position: absolute;\n    border-radius: 50%;\n    left: 50%;\n    margin-left: -35px;\n    transform: translateX(-180px);\n    top: 30vh;\n    margin-top: 30px;\n    background-color: #ff0000;\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0);\n    }\n    30% {\n      transform: rotate(15deg);\n    }\n    66% {\n      transform: rotate(-15deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .nose:hover {\n    transform-origin: center bottom;\n    animation: wave 300ms infinite linear;\n  }\n  \n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//模块化css文件
//let string2 =``
var n = 1;
var time = 50; //准备两个demo，同时写入Text和html(css样式)。最精髓的地方。

var run = function run() {
  //如果是回车或空格则替换，否则照搬
  // if(string[n]==='\n'){
  //     string2+= '</br>'
  // }else if(string[n]===""){
  //     string2+= '&nbsp'
  // }else{
  //     string2+=string[n]
  // }
  demo.innerHTML = _css.default.substring(0, n);
  demo2.innerText = _css.default.substring(0, n); //让用户看到的代码 

  n += 1;

  if (n > _css.default.length) {
    //当n大于字符串长度就停止写入
    window.clearInterval(id);
  }

  demo2.scrollTop = demo2.scrollHeight; //每次写入都将滚动条滚到滚动条的最大高度
};

var play = function play() {
  return setInterval(run, time); //设立时钟
};

var pause = function pause() {
  window.clearInterval(id); //清除时钟，demo停止写入
};

var slow = function slow() {
  pause();
  time = 100;
  id = play();
};

var middle = function middle() {
  pause();
  time = 50;
  id = play();
};

var fast = function fast() {
  pause();
  time = 0;
  id = play();
};

var id = play();
btnPause.onclick = pause;

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = slow;
btnMiddle.onclick = middle;
btnFast.onclick = fast;
},{"./css.js":"css.js"}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64151" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map