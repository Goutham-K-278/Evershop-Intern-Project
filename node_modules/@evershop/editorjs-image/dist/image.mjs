(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--loading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .image-tool__image-picture,.image-tool--loading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.image-tool__caption,.image-tool__url{margin-bottom:5px}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', I = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function _(C, a = null, o = {}) {
  const c = document.createElement(C);
  Array.isArray(a) ? c.classList.add(...a) : a !== null && c.classList.add(a);
  for (const i in o)
    o.hasOwnProperty(i) && (c[i] = o[i]);
  return c;
}
var F = /* @__PURE__ */ ((C) => (C.Empty = "empty", C.Uploading = "uploading", C.Filled = "filled", C))(F || {});
class x {
  /**
   * @param ui - image tool Ui module
   * @param ui.api - Editor.js API
   * @param ui.config - user config
   * @param ui.onSelectFile - callback for clicks on Select file button
   * @param ui.readOnly - read-only mode flag
   */
  constructor({ api: a, config: o, onSelectFile: c, readOnly: i }) {
    this.api = a, this.config = o, this.onSelectFile = c, this.readOnly = i, this.nodes = {
      wrapper: _("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: _("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: _("div", this.CSS.imagePreloader),
      caption: _("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      }),
      url: _("div", [this.CSS.input, this.CSS.url], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.url.dataset.placeholder = this.config.urlPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.url), this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * Apply visual representation of activated tune
   * @param tuneName - one of available tunes {@link Tunes.tunes}
   * @param status - true for enable, false for disable
   */
  applyTune(a, o) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${a}`, o);
  }
  /**
   * Renders tool UI
   * @param toolData - saved tool data
   */
  render(a) {
    return a.file === void 0 || Object.keys(a.file).length === 0 ? this.toggleStatus(
      "empty"
      /* Empty */
    ) : this.toggleStatus(
      "uploading"
      /* Uploading */
    ), this.nodes.wrapper;
  }
  /**
   * Shows uploading preloader
   * @param src - preview source
   */
  showPreloader(a) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${a})`, this.toggleStatus(
      "uploading"
      /* Uploading */
    );
  }
  /**
   * Hide uploading preloader
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(
      "empty"
      /* Empty */
    );
  }
  /**
   * Shows an image
   * @param url - image source
   */
  fillImage(a) {
    const o = /\.mp4$/.test(a) ? "VIDEO" : "IMG", c = {
      src: a
    };
    let i = "load";
    o === "VIDEO" && (c.autoplay = !0, c.loop = !0, c.muted = !0, c.playsinline = !0, i = "loadeddata"), this.nodes.imageEl = _(o, this.CSS.imageEl, c), this.nodes.imageEl.addEventListener(i, () => {
      this.toggleStatus(
        "filled"
        /* Filled */
      ), this.nodes.imagePreloader !== void 0 && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   * @param text - caption content text
   */
  fillCaption(a) {
    this.nodes.caption !== void 0 && (this.nodes.caption.innerHTML = a);
  }
  /**
   * Shows url input
   * @param text - caption content text
   */
  fillUrl(a) {
    this.nodes.url !== void 0 && (this.nodes.url.innerHTML = a);
  }
  /**
   * CSS classes
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption",
      url: "image-tool__url"
    };
  }
  /**
   * Creates upload-file button
   */
  createFileButton() {
    const a = _("div", [this.CSS.button]);
    return a.innerHTML = this.config.buttonContent ?? `${L} ${this.api.i18n.t("Select an Image")}`, a.addEventListener("click", () => {
      this.onSelectFile();
    }), a;
  }
  /**
   * Changes UI status
   * @param status - see {@link Ui.status} constants
   */
  toggleStatus(a) {
    for (const o in F)
      Object.prototype.hasOwnProperty.call(F, o) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${F[o]}`, a === F[o]);
  }
}
function D(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
var H = { exports: {} };
(function(C, a) {
  (function(o, c) {
    C.exports = c();
  })(window, function() {
    return function(o) {
      var c = {};
      function i(r) {
        if (c[r]) return c[r].exports;
        var n = c[r] = { i: r, l: !1, exports: {} };
        return o[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
      }
      return i.m = o, i.c = c, i.d = function(r, n, d) {
        i.o(r, n) || Object.defineProperty(r, n, { enumerable: !0, get: d });
      }, i.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, i.t = function(r, n) {
        if (1 & n && (r = i(r)), 8 & n || 4 & n && typeof r == "object" && r && r.__esModule) return r;
        var d = /* @__PURE__ */ Object.create(null);
        if (i.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: r }), 2 & n && typeof r != "string") for (var b in r) i.d(d, b, (function(u) {
          return r[u];
        }).bind(null, b));
        return d;
      }, i.n = function(r) {
        var n = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return i.d(n, "a", n), n;
      }, i.o = function(r, n) {
        return Object.prototype.hasOwnProperty.call(r, n);
      }, i.p = "", i(i.s = 3);
    }([function(o, c) {
      var i;
      i = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        i = i || new Function("return this")();
      } catch {
        typeof window == "object" && (i = window);
      }
      o.exports = i;
    }, function(o, c, i) {
      (function(r) {
        var n = i(2), d = setTimeout;
        function b() {
        }
        function u(e) {
          if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
          if (typeof e != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(e, this);
        }
        function h(e, l) {
          for (; e._state === 3; ) e = e._value;
          e._state !== 0 ? (e._handled = !0, u._immediateFn(function() {
            var s = e._state === 1 ? l.onFulfilled : l.onRejected;
            if (s !== null) {
              var g;
              try {
                g = s(e._value);
              } catch (m) {
                return void y(l.promise, m);
              }
              p(l.promise, g);
            } else (e._state === 1 ? p : y)(l.promise, e._value);
          })) : e._deferreds.push(l);
        }
        function p(e, l) {
          try {
            if (l === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (l && (typeof l == "object" || typeof l == "function")) {
              var s = l.then;
              if (l instanceof u) return e._state = 3, e._value = l, void w(e);
              if (typeof s == "function") return void t((g = s, m = l, function() {
                g.apply(m, arguments);
              }), e);
            }
            e._state = 1, e._value = l, w(e);
          } catch (f) {
            y(e, f);
          }
          var g, m;
        }
        function y(e, l) {
          e._state = 2, e._value = l, w(e);
        }
        function w(e) {
          e._state === 2 && e._deferreds.length === 0 && u._immediateFn(function() {
            e._handled || u._unhandledRejectionFn(e._value);
          });
          for (var l = 0, s = e._deferreds.length; l < s; l++) h(e, e._deferreds[l]);
          e._deferreds = null;
        }
        function v(e, l, s) {
          this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof l == "function" ? l : null, this.promise = s;
        }
        function t(e, l) {
          var s = !1;
          try {
            e(function(g) {
              s || (s = !0, p(l, g));
            }, function(g) {
              s || (s = !0, y(l, g));
            });
          } catch (g) {
            if (s) return;
            s = !0, y(l, g);
          }
        }
        u.prototype.catch = function(e) {
          return this.then(null, e);
        }, u.prototype.then = function(e, l) {
          var s = new this.constructor(b);
          return h(this, new v(e, l, s)), s;
        }, u.prototype.finally = n.a, u.all = function(e) {
          return new u(function(l, s) {
            if (!e || e.length === void 0) throw new TypeError("Promise.all accepts an array");
            var g = Array.prototype.slice.call(e);
            if (g.length === 0) return l([]);
            var m = g.length;
            function f(T, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var S = E.then;
                  if (typeof S == "function") return void S.call(E, function(M) {
                    f(T, M);
                  }, s);
                }
                g[T] = E, --m == 0 && l(g);
              } catch (M) {
                s(M);
              }
            }
            for (var k = 0; k < g.length; k++) f(k, g[k]);
          });
        }, u.resolve = function(e) {
          return e && typeof e == "object" && e.constructor === u ? e : new u(function(l) {
            l(e);
          });
        }, u.reject = function(e) {
          return new u(function(l, s) {
            s(e);
          });
        }, u.race = function(e) {
          return new u(function(l, s) {
            for (var g = 0, m = e.length; g < m; g++) e[g].then(l, s);
          });
        }, u._immediateFn = typeof r == "function" && function(e) {
          r(e);
        } || function(e) {
          d(e, 0);
        }, u._unhandledRejectionFn = function(e) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", e);
        }, c.a = u;
      }).call(this, i(5).setImmediate);
    }, function(o, c, i) {
      c.a = function(r) {
        var n = this.constructor;
        return this.then(function(d) {
          return n.resolve(r()).then(function() {
            return d;
          });
        }, function(d) {
          return n.resolve(r()).then(function() {
            return n.reject(d);
          });
        });
      };
    }, function(o, c, i) {
      function r(t) {
        return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
      }
      i(4);
      var n, d, b, u, h, p, y, w = i(8), v = (d = function(t) {
        return new Promise(function(e, l) {
          t = u(t), (t = h(t)).beforeSend && t.beforeSend();
          var s = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          s.open(t.method, t.url), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var f = t.headers[m];
            s.setRequestHeader(m, f);
          });
          var g = t.ratio;
          s.upload.addEventListener("progress", function(m) {
            var f = Math.round(m.loaded / m.total * 100), k = Math.ceil(f * g / 100);
            t.progress(Math.min(k, 100));
          }, !1), s.addEventListener("progress", function(m) {
            var f = Math.round(m.loaded / m.total * 100), k = Math.ceil(f * (100 - g) / 100) + g;
            t.progress(Math.min(k, 100));
          }, !1), s.onreadystatechange = function() {
            if (s.readyState === 4) {
              var m = s.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var f = w.parseHeaders(s.getAllResponseHeaders()), k = { body: m, code: s.status, headers: f };
              y(s.status) ? e(k) : l(k);
            }
          }, s.send(t.data);
        });
      }, b = function(t) {
        return t.method = "POST", d(t);
      }, u = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string") throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string") throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && r(t.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(n).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function") throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(e) {
        }, t.beforeSend = t.beforeSend || function(e) {
        }, t.ratio && typeof t.ratio != "number") throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string") throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, h = function(t) {
        switch (t.method) {
          case "GET":
            var e = p(t.data, n.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var l = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || n.JSON;
            }(t);
            (w.isFormData(t.data) || w.isFormElement(t.data)) && (l = n.FORM), t.data = p(t.data, l), l !== v.contentType.FORM && (t.headers["content-type"] = l);
        }
        return t;
      }, p = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case n.URLENCODED:
            return w.urlEncode(t);
          case n.JSON:
            return w.jsonEncode(t);
          case n.FORM:
            return w.formEncode(t);
          default:
            return t;
        }
      }, y = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: n = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d, get: function(t) {
        return t.method = "GET", d(t);
      }, post: b, transport: function(t) {
        return t = u(t), w.selectFiles(t).then(function(e) {
          for (var l = new FormData(), s = 0; s < e.length; s++) l.append(t.fieldName, e[s], e[s].name);
          w.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var f = t.data[m];
            l.append(m, f);
          });
          var g = t.beforeSend;
          return t.beforeSend = function() {
            return g(e);
          }, t.data = l, b(t);
        });
      }, selectFiles: function(t) {
        return delete (t = u(t)).beforeSend, w.selectFiles(t);
      } });
      o.exports = v;
    }, function(o, c, i) {
      i.r(c);
      var r = i(1);
      window.Promise = window.Promise || r.a;
    }, function(o, c, i) {
      (function(r) {
        var n = r !== void 0 && r || typeof self < "u" && self || window, d = Function.prototype.apply;
        function b(u, h) {
          this._id = u, this._clearFn = h;
        }
        c.setTimeout = function() {
          return new b(d.call(setTimeout, n, arguments), clearTimeout);
        }, c.setInterval = function() {
          return new b(d.call(setInterval, n, arguments), clearInterval);
        }, c.clearTimeout = c.clearInterval = function(u) {
          u && u.close();
        }, b.prototype.unref = b.prototype.ref = function() {
        }, b.prototype.close = function() {
          this._clearFn.call(n, this._id);
        }, c.enroll = function(u, h) {
          clearTimeout(u._idleTimeoutId), u._idleTimeout = h;
        }, c.unenroll = function(u) {
          clearTimeout(u._idleTimeoutId), u._idleTimeout = -1;
        }, c._unrefActive = c.active = function(u) {
          clearTimeout(u._idleTimeoutId);
          var h = u._idleTimeout;
          h >= 0 && (u._idleTimeoutId = setTimeout(function() {
            u._onTimeout && u._onTimeout();
          }, h));
        }, i(6), c.setImmediate = typeof self < "u" && self.setImmediate || r !== void 0 && r.setImmediate || this && this.setImmediate, c.clearImmediate = typeof self < "u" && self.clearImmediate || r !== void 0 && r.clearImmediate || this && this.clearImmediate;
      }).call(this, i(0));
    }, function(o, c, i) {
      (function(r, n) {
        (function(d, b) {
          if (!d.setImmediate) {
            var u, h, p, y, w, v = 1, t = {}, e = !1, l = d.document, s = Object.getPrototypeOf && Object.getPrototypeOf(d);
            s = s && s.setTimeout ? s : d, {}.toString.call(d.process) === "[object process]" ? u = function(f) {
              n.nextTick(function() {
                m(f);
              });
            } : function() {
              if (d.postMessage && !d.importScripts) {
                var f = !0, k = d.onmessage;
                return d.onmessage = function() {
                  f = !1;
                }, d.postMessage("", "*"), d.onmessage = k, f;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", w = function(f) {
              f.source === d && typeof f.data == "string" && f.data.indexOf(y) === 0 && m(+f.data.slice(y.length));
            }, d.addEventListener ? d.addEventListener("message", w, !1) : d.attachEvent("onmessage", w), u = function(f) {
              d.postMessage(y + f, "*");
            }) : d.MessageChannel ? ((p = new MessageChannel()).port1.onmessage = function(f) {
              m(f.data);
            }, u = function(f) {
              p.port2.postMessage(f);
            }) : l && "onreadystatechange" in l.createElement("script") ? (h = l.documentElement, u = function(f) {
              var k = l.createElement("script");
              k.onreadystatechange = function() {
                m(f), k.onreadystatechange = null, h.removeChild(k), k = null;
              }, h.appendChild(k);
            }) : u = function(f) {
              setTimeout(m, 0, f);
            }, s.setImmediate = function(f) {
              typeof f != "function" && (f = new Function("" + f));
              for (var k = new Array(arguments.length - 1), T = 0; T < k.length; T++) k[T] = arguments[T + 1];
              var E = { callback: f, args: k };
              return t[v] = E, u(v), v++;
            }, s.clearImmediate = g;
          }
          function g(f) {
            delete t[f];
          }
          function m(f) {
            if (e) setTimeout(m, 0, f);
            else {
              var k = t[f];
              if (k) {
                e = !0;
                try {
                  (function(T) {
                    var E = T.callback, S = T.args;
                    switch (S.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(S[0]);
                        break;
                      case 2:
                        E(S[0], S[1]);
                        break;
                      case 3:
                        E(S[0], S[1], S[2]);
                        break;
                      default:
                        E.apply(b, S);
                    }
                  })(k);
                } finally {
                  g(f), e = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, i(0), i(7));
    }, function(o, c) {
      var i, r, n = o.exports = {};
      function d() {
        throw new Error("setTimeout has not been defined");
      }
      function b() {
        throw new Error("clearTimeout has not been defined");
      }
      function u(s) {
        if (i === setTimeout) return setTimeout(s, 0);
        if ((i === d || !i) && setTimeout) return i = setTimeout, setTimeout(s, 0);
        try {
          return i(s, 0);
        } catch {
          try {
            return i.call(null, s, 0);
          } catch {
            return i.call(this, s, 0);
          }
        }
      }
      (function() {
        try {
          i = typeof setTimeout == "function" ? setTimeout : d;
        } catch {
          i = d;
        }
        try {
          r = typeof clearTimeout == "function" ? clearTimeout : b;
        } catch {
          r = b;
        }
      })();
      var h, p = [], y = !1, w = -1;
      function v() {
        y && h && (y = !1, h.length ? p = h.concat(p) : w = -1, p.length && t());
      }
      function t() {
        if (!y) {
          var s = u(v);
          y = !0;
          for (var g = p.length; g; ) {
            for (h = p, p = []; ++w < g; ) h && h[w].run();
            w = -1, g = p.length;
          }
          h = null, y = !1, function(m) {
            if (r === clearTimeout) return clearTimeout(m);
            if ((r === b || !r) && clearTimeout) return r = clearTimeout, clearTimeout(m);
            try {
              r(m);
            } catch {
              try {
                return r.call(null, m);
              } catch {
                return r.call(this, m);
              }
            }
          }(s);
        }
      }
      function e(s, g) {
        this.fun = s, this.array = g;
      }
      function l() {
      }
      n.nextTick = function(s) {
        var g = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var m = 1; m < arguments.length; m++) g[m - 1] = arguments[m];
        p.push(new e(s, g)), p.length !== 1 || y || u(t);
      }, e.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = l, n.addListener = l, n.once = l, n.off = l, n.removeListener = l, n.removeAllListeners = l, n.emit = l, n.prependListener = l, n.prependOnceListener = l, n.listeners = function(s) {
        return [];
      }, n.binding = function(s) {
        throw new Error("process.binding is not supported");
      }, n.cwd = function() {
        return "/";
      }, n.chdir = function(s) {
        throw new Error("process.chdir is not supported");
      }, n.umask = function() {
        return 0;
      };
    }, function(o, c, i) {
      function r(d, b) {
        for (var u = 0; u < b.length; u++) {
          var h = b[u];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(d, h.key, h);
        }
      }
      var n = i(9);
      o.exports = function() {
        function d() {
          (function(p, y) {
            if (!(p instanceof y)) throw new TypeError("Cannot call a class as a function");
          })(this, d);
        }
        var b, u, h;
        return b = d, h = [{ key: "urlEncode", value: function(p) {
          return n(p);
        } }, { key: "jsonEncode", value: function(p) {
          return JSON.stringify(p);
        } }, { key: "formEncode", value: function(p) {
          if (this.isFormData(p)) return p;
          if (this.isFormElement(p)) return new FormData(p);
          if (this.isObject(p)) {
            var y = new FormData();
            return Object.keys(p).forEach(function(w) {
              var v = p[w];
              y.append(w, v);
            }), y;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(p) {
          return Object.prototype.toString.call(p) === "[object Object]";
        } }, { key: "isFormData", value: function(p) {
          return p instanceof FormData;
        } }, { key: "isFormElement", value: function(p) {
          return p instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(y, w) {
            var v = document.createElement("INPUT");
            v.type = "file", p.multiple && v.setAttribute("multiple", "multiple"), p.accept && v.setAttribute("accept", p.accept), v.style.display = "none", document.body.appendChild(v), v.addEventListener("change", function(t) {
              var e = t.target.files;
              y(e), document.body.removeChild(v);
            }, !1), v.click();
          });
        } }, { key: "parseHeaders", value: function(p) {
          var y = p.trim().split(/[\r\n]+/), w = {};
          return y.forEach(function(v) {
            var t = v.split(": "), e = t.shift(), l = t.join(": ");
            e && (w[e] = l);
          }), w;
        } }], (u = null) && r(b.prototype, u), h && r(b, h), d;
      }();
    }, function(o, c) {
      var i = function(n) {
        return encodeURIComponent(n).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, r = function(n, d, b, u) {
        return d = d || null, b = b || "&", u = u || null, n ? function(h) {
          for (var p = new Array(), y = 0; y < h.length; y++) h[y] && p.push(h[y]);
          return p;
        }(Object.keys(n).map(function(h) {
          var p, y, w = h;
          if (u && (w = u + "[" + w + "]"), typeof n[h] == "object" && n[h] !== null) p = r(n[h], null, b, w);
          else {
            d && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? d + Number(w) : w);
            var v = n[h];
            v = (v = (v = (v = v === !0 ? "1" : v) === !1 ? "0" : v) === 0 ? "0" : v) || "", p = i(w) + "=" + i(v);
          }
          return p;
        })).join(b).replace(/[!'()*]/g, "") : "";
      };
      o.exports = r;
    }]);
  });
})(H);
var B = H.exports;
const j = /* @__PURE__ */ D(B);
function O(C) {
  return C !== void 0 && typeof C.then == "function";
}
class q {
  /**
   * @param params - uploader module params
   * @param params.config - image tool config
   * @param params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param params.onError - callback for uploading errors
   */
  constructor({ config: a, onUpload: o, onError: c }) {
    this.config = a, this.onUpload = o, this.onError = c;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   * @param onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: a }) {
    const o = function(i) {
      const r = new FileReader();
      r.readAsDataURL(i), r.onload = (n) => {
        a(n.target.result);
      };
    };
    let c;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
      const i = this.config.uploader.uploadByFile;
      c = j.selectFiles({ accept: this.config.types ?? "image/*" }).then((r) => {
        o(r[0]);
        const n = i(r[0]);
        return O(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n;
      });
    } else
      c = j.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? "image/*",
        headers: this.config.additionalRequestHeaders,
        beforeSend: (i) => {
          o(i[0]);
        },
        fieldName: this.config.field ?? "image"
      }).then((i) => i.body);
    c.then((i) => {
      this.onUpload(i);
    }).catch((i) => {
      this.onError(i);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param url - image source url
   */
  uploadByUrl(a) {
    let o;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (o = this.config.uploader.uploadByUrl(a), O(o) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : o = j.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: a
      }, this.config.additionalRequestData),
      type: j.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((c) => c.body), o.then((c) => {
      this.onUpload(c);
    }).catch((c) => {
      this.onError(c);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param file - file pasted by drag-n-drop
   * @param onPreview - file pasted by drag-n-drop
   */
  uploadByFile(a, { onPreview: o }) {
    const c = new FileReader();
    c.readAsDataURL(a), c.onload = (r) => {
      o(r.target.result);
    };
    let i;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      i = this.config.uploader.uploadByFile(a), O(i) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const r = new FormData();
      r.append(this.config.field ?? "image", a), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([n, d]) => {
        r.append(n, d);
      }), i = j.post({
        url: this.config.endpoints.byFile,
        data: r,
        type: j.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((n) => n.body);
    }
    i.then((r) => {
      this.onUpload(r);
    }).catch((r) => {
      this.onError(r);
    });
  }
}
/**
 * Image Tool for the Editor.js
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.ts — main Tool's interface, public API and methods for working with data
 *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
class P {
  /**
   * @param tool - tool properties got from editor.js
   * @param tool.data - previously saved data
   * @param tool.config - user config for Tool
   * @param tool.api - Editor.js API
   * @param tool.readOnly - read-only mode flag
   * @param tool.block - current Block API
   */
  constructor({ data: a, config: o, api: c, readOnly: i, block: r }) {
    this.api = c, this.readOnly = i, this.block = r, this.config = {
      endpoints: o.endpoints,
      additionalRequestData: o.additionalRequestData,
      additionalRequestHeaders: o.additionalRequestHeaders,
      field: o.field,
      types: o.types,
      captionPlaceholder: this.api.i18n.t(o.captionPlaceholder ?? "Caption"),
      urlPlaceholder: this.api.i18n.t(o.urlPlaceholder ?? "Link"),
      buttonContent: o.buttonContent,
      uploader: o.uploader,
      actions: o.actions,
      onSelectFile: o.onSelectFile
    }, this.uploader = new q({
      config: this.config,
      onUpload: (n) => this.onUpload(n),
      onError: (n) => this.uploadingFailed(n)
    }), this.ui = new x({
      api: c,
      config: this.config,
      // onSelectFile: () => {
      //   this.uploader.uploadSelectedFile({
      //     onPreview: (src: string) => {
      //       this.ui.showPreloader(src);
      //     },
      //   });
      // },
      onSelectFile: () => {
        var n, d;
        return (d = (n = this.config).onSelectFile) == null ? void 0 : d.call(n, this.onUpload.bind(this), this.uploadingFailed.bind(this));
      },
      readOnly: i
    }), this._data = {
      caption: "",
      url: "",
      withBorder: !1,
      withBackground: !1,
      stretched: !1,
      file: {
        url: ""
      }
    }, this.data = a;
  }
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return {
      icon: L,
      title: "Image"
    };
  }
  /**
   * Available image tools
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: I,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: U,
        title: "Stretch image",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: R,
        title: "With background",
        toggle: !0
      }
    ];
  }
  /**
   * Renders Block content
   */
  render() {
    return this.ui.render(this.data);
  }
  /**
   * Validate data: check if Image exists
   * @param savedData — data received after saving
   * @returns false if saved data is not correct, otherwise true
   */
  validate(a) {
    return !!a.file.url;
  }
  /**
   * Return Block data
   */
  save() {
    const a = this.ui.nodes.caption, o = this.ui.nodes.url;
    return this._data.caption = a.innerHTML, this._data.url = o.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   * @returns TunesMenuConfig
   */
  renderSettings() {
    return P.tunes.concat(this.config.actions || []).map((o) => ({
      icon: o.icon,
      label: this.api.i18n.t(o.title),
      name: o.name,
      toggle: o.toggle,
      isActive: this.data[o.name],
      onActivate: () => {
        if (typeof o.action == "function") {
          o.action(o.name);
          return;
        }
        this.tuneToggled(o.name);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: !0 }
        }
      ],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   */
  async onPaste(a) {
    switch (a.type) {
      case "tag": {
        const o = a.detail.data;
        if (/^blob:/.test(o.src)) {
          const i = await (await fetch(o.src)).blob();
          this.uploadFile(i);
          break;
        }
        this.uploadUrl(o.src);
        break;
      }
      case "pattern": {
        const o = a.detail.data;
        this.uploadUrl(o);
        break;
      }
      case "file": {
        const o = a.detail.file;
        this.uploadFile(o);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   * @param data - data in Image Tool format
   */
  set data(a) {
    this.image = a.file, this._data.caption = a.caption || "", this.ui.fillCaption(this._data.caption), this._data.url = a.url || "", this.ui.fillUrl(this._data.url), P.tunes.forEach(({ name: o }) => {
      const c = typeof a[o] < "u" ? a[o] === !0 || a[o] === "true" : !1;
      this.setTune(o, c);
    });
  }
  /**
   * Return Tool data
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   * @param file - uploaded file data
   */
  set image(a) {
    this._data.file = a || { url: "" }, a && a.url && this.ui.fillImage(a.url);
  }
  /**
   * File uploading callback
   * @param response - uploading server response
   */
  onUpload(a) {
    a.success && a.file ? this.image = a.file : this.uploadingFailed("incorrect response: " + JSON.stringify(a));
  }
  /**
   * Handle uploader errors
   * @param errorText - uploading error info
   */
  uploadingFailed(a) {
    console.log("Image Tool: uploading failed because of", a), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   * @param tuneName - tune that has been clicked
   */
  tuneToggled(a) {
    this.setTune(a, !this._data[a]);
  }
  /**
   * Set one tune
   * @param tuneName - {@link Tunes.tunes}
   * @param value - tune state
   */
  setTune(a, o) {
    this._data[a] = o, this.ui.applyTune(a, o), a === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = o;
    }).catch((c) => {
      console.error(c);
    });
  }
  /**
   * Show preloader and upload image file
   * @param file - file that is currently uploading (from paste)
   */
  uploadFile(a) {
    this.uploader.uploadByFile(a, {
      onPreview: (o) => {
        this.ui.showPreloader(o);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   * @param url - url pasted
   */
  uploadUrl(a) {
    this.ui.showPreloader(a), this.uploader.uploadByUrl(a);
  }
}
export {
  P as default
};
