/*
* (c) 2008-2012 AddThis, Inc
* ID: ra-4f7a6ff33137be6e
*/

if (!((window._atc || {}).ver)) {
  var _atd = "www.addthis.com/",
    _atr = "//s7.addthis.com/",
    _atrc = "//c.copyth.is/",
    _euc = encodeURIComponent,
    _duc = decodeURIComponent,
    _atc = {
      dbg: 0,
      rrev: 119166,
      dr: 0,
      ver: 250,
      loc: 0,
      enote: "",
      cwait: 500,
      bamp: 0.25,
      camp: 1,
      csmp: 0.0001,
      damp: 0,
      famp: 0.02,
      pamp: 0.2,
      tamp: 1,
      lamp: 1,
      plmp: 0.00001,
      vamp: 1,
      vrmp: 0,
      ohmp: 0,
      ltj: 1,
      xamp: 1,
      abf: !! window.addthis_do_ab,
      qs: 0,
      cdn: 0,
      rsrcs: {
        bookmark: _atr + "static/r07/bookmark034.html",
        atimg: _atr + "static/r07/atimg034.html",
        countercss: _atr + "static/r07/counter009.css",
        counterIE67css: _atr + "static/r07/counterIE67004.css",
        counter: _atr + "static/r07/counter012.js",
        core: _atr + "static/r07/core061.js",
        wombat: _atr + "static/r07/bar019.js",
        wombatcss: _atr + "static/r07/bar008.css",
        qbarcss: _atr + "bannerQuirks.css",
        fltcss: _atr + "static/r07/floating009.css",
        barcss: _atr + "static/r07/banner004.css",
        barjs: _atr + "static/r07/banner003.js",
        contentcss: _atr + "static/r07/content007.css",
        contentjs: _atr + "static/r07/content009.js",
        copythis: _atrc + "static/r07/copythis00C.js",
        copythiscss: _atrc + "static/r07/copythis00C.css",
        ssojs: _atr + "static/r07/ssi004.js",
        ssocss: _atr + "static/r07/ssi004.css",
        authjs: _atr + "static/r07/auth010.js",
        peekaboocss: _atr + "static/r07/peekaboo002.css",
        overlayjs: _atr + "static/r07/overlay005.js",
        widget32css: _atr + "static/r07/widgetbig052.css",
        widget20css: _atr + "static/r07/widgetmed003.css",
        widgetcss: _atr + "static/r07/widget102.css",
        widgetIE67css: _atr + "static/r07/widgetIE67005.css",
        widgetpng: "//s7.addthis.com/static/r07/widget051.gif",
        embed: _atr + "static/r07/embed007.js",
        embedcss: _atr + "static/r07/embed002.css",
        link: _atr + "static/r07/link005.html",
        pinit: _atr + "static/r07/pinit011.html",
        linkedin: _atr + "static/r07/linkedin020.html",
        fbshare: _atr + "static/r07/fbshare004.html",
        tweet: _atr + "static/r07/tweet025.html",
        menujs: _atr + "static/r07/menu141.js",
        sh: _atr + "static/r07/sh110.html"
      }
    };
}(function () {
  var h, q = window,
    D = document;
  var t = (window.location.protocol == "https:"),
    G, n, B = (navigator.userAgent || "unk").toLowerCase(),
    y = (/firefox/.test(B)),
    p = (/msie/.test(B) && !(/opera/.test(B))),
    c = {
      0: _atr,
      1: "//ct1.addthis.com/",
      2: "//ct2.addthis.com/",
      3: "//ct3.addthis.com/",
      4: "//ct4.addthis.com/",
      5: "//ct5.addthis.com/",
      100: "//ct0.addthis.com/"
    }, F = {
      au: "1",
      hk: "1",
      is: "1",
      id: "1",
      jp: "1",
      my: "1",
      ph: "1",
      sg: "1",
      kr: "1",
      ch: "1",
      tw: "1",
      th: "1",
      tr: "1",
      ru: "1",
      vn: "1"
    }, H = {
      de: "1",
      es: "1"
    }, l = {
      no: "1",
      pl: "1"
    }, g = {
      be: "1",
      ca: "1",
      fr: "1",
      mx: "1",
      nl: "1",
      no: "1",
      pl: "1",
      gb: "1",
      us: "1"
    }, o = {
      at: "1",
      cz: "1",
      dk: "1",
      fi: "1",
      gr: "1",
      hu: "1",
      it: "1",
      pt: "1",
      ro: "1",
      se: "1",
      ua: "1"
    };
  _atc.cdn = 0;
  if (!window.addthis || window.addthis.nodeType !== h) {
    try {
      G = window.navigator ? (navigator.userLanguage || navigator.language) : "";
      n = G.split("-").pop().toLowerCase();
      if (n.length != 2) {
        n = "unk";
      }
      if (_atr.indexOf("-") > -1) {} else {
        if (window.addthis_cdn !== h) {
          _atc.cdn = window.addthis_cdn;
        } else {
          if (F[n]) {
            _atc.cdn = 5;
          } else {
            if (g[n]) {
              _atc.cdn = (y || p) ? 5 : 1;
            } else {
              if (H[n]) {
                _atc.cdn = (p || (/chrome/.test(B))) ? 5 : 1;
              } else {
                if (l[n]) {
                  _atc.cdn = y ? 5 : 1;
                } else {
                  if (o[n]) {
                    _atc.cdn = (p) ? 5 : 1;
                  }
                }
              }
            }
          }
        }
      }
      if (_atc.cdn) {
        for (var A in _atc.rsrcs) {
          if (_atc.rsrcs.hasOwnProperty(A)) {
            _atc.rsrcs[A] = _atc.rsrcs[A].replace(_atr, typeof (window.addthis_cdn) === "string" ? window.addthis_cdn : c[_atc.cdn]).replace(/live\/([a-z])07/, "live/$107");
          }
        }
        _atr = c[_atc.cdn];
      }
    } catch (C) {}
    function b(k, e, d, a) {
      return function () {
        if (!this.qs) {
          this.qs = 0;
        }
        _atc.qs++;
        if (!((this.qs++ > 0 && a) || _atc.qs > 1000) && window.addthis) {
          window.addthis.plo.push({
            call: k,
            args: arguments,
            ns: e,
            ctx: d
          });
        }
      };
    }
    function z(e) {
      var d = this,
        a = this.queue = [];
      this.name = e;
      this.call = function () {
        a.push(arguments);
      };
      this.call.queuer = this;
      this.flush = function (s, r) {
        this.flushed = 1;
        for (var k = 0; k < a.length; k++) {
          s.apply(r || d, a[k]);
        }
        return s;
      };
    }
    window.addthis = {
      ost: 0,
      cache: {},
      plo: [],
      links: [],
      ems: [],
      timer: {
        load: ((new Date()).getTime())
      },
      _Queuer: z,
      _queueFor: b,
      data: {
        getShareCount: b("getShareCount", "data")
      },
      bar: {
        show: b("show", "bar"),
        initialize: b("initialize", "bar")
      },
      login: {
        initialize: b("initialize", "login"),
        connect: b("connect", "login")
      },
      configure: function (e) {
        if (!q.addthis_config) {
          q.addthis_config = {};
        }
        if (!q.addthis_share) {
          q.addthis_share = {};
        }
        for (var a in e) {
          if (a == "share" && typeof (e[a]) == "object") {
            for (var d in e[a]) {
              if (e[a].hasOwnProperty(d)) {
                if (!addthis.ost) {
                  q.addthis_share[d] = e[a][d];
                } else {
                  addthis.update("share", d, e[a][d]);
                }
              }
            }
          } else {
            if (e.hasOwnProperty(a)) {
              if (!addthis.ost) {
                q.addthis_config[a] = e[a];
              } else {
                addthis.update("config", a, e[a]);
              }
            }
          }
        }
      },
      box: b("box"),
      toaster: b("toaster"),
      button: b("button"),
      counter: b("counter"),
      count: b("count"),
      toolbox: b("toolbox"),
      update: b("update"),
      init: b("init"),
      ad: {
        menu: b("menu", "ad", "ad"),
        event: b("event", "ad"),
        getPixels: b("getPixels", "ad")
      },
      util: {
        getServiceName: b("getServiceName")
      },
      ready: b("ready"),
      addEventListener: b("addEventListener", "ed", "ed"),
      removeEventListener: b("removeEventListener", "ed", "ed"),
      user: {
        getID: b("getID", "user"),
        getGeolocation: b("getGeolocation", "user", null, true),
        getPreferredServices: b("getPreferredServices", "user", null, true),
        getServiceShareHistory: b("getServiceShareHistory", "user", null, true),
        ready: b("ready", "user"),
        isReturning: b("isReturning", "user"),
        isOptedOut: b("isOptedOut", "user"),
        isUserOf: b("isUserOf", "user"),
        hasInterest: b("hasInterest", "user"),
        isLocatedIn: b("isLocatedIn", "user"),
        interests: b("getInterests", "user"),
        services: b("getServices", "user"),
        location: b("getLocation", "user")
      },
      session: {
        source: b("getSource", "session"),
        isSocial: b("isSocial", "session"),
        isSearch: b("isSearch", "session")
      },
      _pmh: new z("pmh")
    };
    var v = document.body.getElementsByTagName("script")[0];

    function f(a) {
      a.style.width = a.style.height = "1px";
      a.style.position = "absolute";
      a.style.zIndex = 100000;
    }
    if (document.location.href.indexOf(_atr) == -1) {
      var u = document.getElementById("_atssh");
      if (!u) {
        u = document.createElement("div");
        u.style.visibility = "hidden";
        u.id = "_atssh";
        f(u);
        v.parentNode.appendChild(u);
      }
      function i(a) {
        if (a && !(a.data || {})["addthisxf"]) {
          if (addthis._pmh.flushed) {
            _ate.pmh(a);
          } else {
            addthis._pmh.call(a);
          }
        }
      }
      if (window.postMessage) {
        if (window.attachEvent) {
          window.attachEvent("onmessage", i);
        } else {
          if (window.addEventListener) {
            window.addEventListener("message", i, false);
          }
        }
      }
      if (!u.firstChild) {
        var j, B = navigator.userAgent.toLowerCase(),
          x = Math.floor(Math.random() * 1000);
        j = document.createElement("iframe");
        j.id = "_atssh" + x;
        j.title = "AddThis utility frame";
        u.appendChild(j);
        f(j);
        j.frameborder = j.style.border = 0;
        j.style.top = j.style.left = 0;
        _atc._atf = j;
      }
    }
    var E = document.createElement("script");
    E.type = "text/javascript";
    E.src = (t ? "https:" : "http:") + _atc.rsrcs.core;
    v.parentNode.appendChild(E);
    var m = 10000;
    setTimeout(function () {
      if (!window.addthis.timer.core) {
        if (Math.random() < _atc.ohmp) {
          (new Image()).src = "//m.addthisedge.com/live/t00/oh.gif?" + Math.floor(Math.random() * 4294967295).toString(36) + "&cdn=" + _atc.cdn + "&sr=" + _atc.ohmp + "&rev=" + _atc.rrev + "&to=" + m;
        }
        if (_atc.cdn !== 0) {
          var d = document.createElement("script");
          d.type = "text/javascript";
          d.src = (t ? "https:" : "http:") + _atr + "static/r07/core061.js";
          v.parentNode.appendChild(d);
        }
      }
    }, m);
  }
})();
