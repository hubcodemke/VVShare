module.exports=function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=13)}([function(n,e){n.exports=require("react")},function(n,e,r){var t=r(5),o=r(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(t(o,i),o.locals?o.locals:{});n.exports=a},function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=(a=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(i).concat([o]).join("\n")}var a,c,s;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},function(n,e){n.exports=require("copy-to-clipboard")},function(n,e){n.exports=require("qrcode")},function(n,e,r){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),a=[];function c(n){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===n){e=r;break}return e}function s(n,e){for(var r={},t=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],l=r[s]||0,d="".concat(s," ").concat(l);r[s]=l+1;var u=c(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:h(f,e),references:1}),t.push(d)}return t}function l(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function f(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var b=null,v=0;function h(n,e){var r,t,o;if(e.singleton){var i=v++;r=b||(b=l(e)),t=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=l(e),t=p.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=c(r[t]);a[o].references--}for(var i=s(n,e),l=0;l<r.length;l++){var d=c(r[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=i}}}},function(n,e,r){var t=r(2),o=r(7);(e=t(!1)).i(o),e.push([n.i,".vvshare-wrapper {\r\n  padding: 0;\r\n}\r\n.vvshare-item {\r\n  list-style: none;\r\n  background-color: #000;\r\n  color: #fff;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  overflow: hidden;\r\n  top: 0;\r\n  opacity: 1;\r\n  text-align: center;\r\n  -webkit-transition: all ease 0.3s;\r\n  transition: all ease 0.3s;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n\r\n.vvshare-item:hover {\r\n  top: -5px;\r\n  opacity: 0.75;\r\n}\r\n.vvshare-item i {\r\n  display: block;\r\n  overflow: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n.vvshare-facebook {\r\n  background-color: #4267b2;\r\n}\r\n.vvshare-twitter {\r\n  background-color: #55acee;\r\n}\r\n.vvshare-linkedin {\r\n  background-color: #0077b5;\r\n}\r\n.vvshare-weibo {\r\n  background-color: #ff9933;\r\n}\r\n.vvshare-weixin {\r\n  background-color: #4ec034;\r\n}\r\n\r\n#qrcode-win-wrap {\r\n  text-align: center;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 10000;\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n}\r\n.qrcode-win-content {\r\n  color: #fff;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  display: inline-block;\r\n}\r\n.qrcode-win-content-m {\r\n  min-width: 80%;\r\n}\r\n.qrcode-win-title {\r\n  margin: 0 auto;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n}\r\n.qrcode-win-code {\r\n  margin: 30px auto;\r\n}\r\n.qrcode-win-des {\r\n  margin: 0 auto;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  background-color: rgba(35, 35, 35, 0.7);\r\n  border-radius: 999em;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.35) inset;\r\n  padding: 10px 30px;\r\n  display: inline-block;\r\n}\r\n\r\n#qrcode-copyurl {\r\n  width: 96%;\r\n  border: 0;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  padding: 0 2%;\r\n  overflow: hidden;\r\n  font-size: 14px;\r\n}\r\n#qrcode-copybtn {\r\n  height: 40px;\r\n  line-height: 40px;\r\n  width: 100px;\r\n  font-size: 16px;\r\n  border: 0;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  padding: 0;\r\n  margin: 10px auto;\r\n  cursor: pointer;\r\n}\r\n",""]),n.exports=e},function(n,e,r){var t=r(2),o=r(8),i=r(9),a=r(10),c=r(11),s=r(12);e=t(!1);var l=o(i),d=o(i,{hash:"#iefix"}),u=o(a),f=o(c),p=o(s,{hash:"#iconfont"});e.push([n.i,'@font-face {font-family: "iconfont";\r\n  src: url('+l+"); /* IE9 */\r\n  src: url("+d+") format('embedded-opentype'), \r\n  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),\r\n  url("+u+") format('woff'),\r\n  url("+f+") format('truetype'), \r\n  url("+p+') format(\'svg\'); /* iOS 4.1- */\r\n}\r\n\r\n.iconfont {\r\n  font-family: "iconfont" !important;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.icon-linkedin:before {\r\n  content: "\\e764";\r\n}\r\n\r\n.icon-weixin:before {\r\n  content: "\\e63b";\r\n}\r\n\r\n.icon-facebook:before {\r\n  content: "\\e676";\r\n}\r\n\r\n.icon-weibo:before {\r\n  content: "\\e699";\r\n}\r\n\r\n.icon-twitter:before {\r\n  content: "\\e655";\r\n}\r\n\r\n',""]),n.exports=e},function(n,e,r){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,r){"use strict";r.r(e),e.default=r.p+"0fb7e92575b37bd3b7a07ef6ded1c087.eot"},function(n,e,r){"use strict";r.r(e),e.default=r.p+"e83907c0b130279d91c7d46b76c43d74.woff"},function(n,e,r){"use strict";r.r(e),e.default=r.p+"4f4d4d6bd6d3509cccfd28623cfc2114.ttf"},function(n,e,r){"use strict";r.r(e),e.default=r.p+"b97ead2c4c9b8d74ac16ed9824614b91.svg"},function(n,e,r){"use strict";r.r(e);var t=r(0),o=r.n(t),i=r(3),a=r.n(i),c=(r(1),r(4));function s(n){window.open(n,"_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350")}function l(n){var e=n.url,r=n.winTitle,t=n.winDes,o="qrcode-win-wrap",i=document.getElementById(o);null!=i&&i.parentNode.removeChild(i);var s=document.createElement("div");s.id=o,s.innerHTML='<div class="qrcode-win-content"></div>',document.body.appendChild(s);var l=document.querySelector(".qrcode-win-content");if(/Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent))/micromessenger/i.test(navigator.userAgent.toLocaleLowerCase())?(l.className=l.className+" qrcode-win-content-m",l.innerHTML='<p class="qrcode-win-title">请使用右上角...<br/>分享到好友或朋友圈</p>'):(l.className=l.className+" qrcode-win-content-m",l.innerHTML='<p class="qrcode-win-copyinput"><input  id="qrcode-copyurl" value="'.concat(e,'"/></p>\n                        <p class="qrcode-win-copybtn"><button id="qrcode-copybtn">复制</button></p>\n                        <p class="qrcode-win-copyresult"></p>'),document.getElementById("qrcode-copybtn").onclick=function(){var n=document.querySelector(".qrcode-win-copyresult");a()(e)?n.innerHTML="复制成功,去黏贴分享":n.innerHTML="复制失败,请手动复制"});else{l.innerHTML='<p class="qrcode-win-title">'.concat(r,'</p>\n                      <p class="qrcode-win-code"><canvas id="qrcode-win-canvas"></canvas></p>\n                      <p class="qrcode-win-des">').concat(t,"</p>");var d=document.getElementById("qrcode-win-canvas");c.toCanvas(d,e,{errorCorrectionLevel:"H",margin:2,width:200},(function(n){n&&console.error(n)}))}i=document.getElementById(o),document.body.addEventListener("click",(function(n){l.contains(n.target)||(i.style.display="none")}))}e.default=function(n){var e=n.title,r=void 0===e?document.title:e,t=n.url,i=void 0===t?window.location.href:t,a=n.image,c=n.description,d=n.network,u=void 0===d?["facebook","linkedin","twitter","weixin","weibo"]:d,f=n.alignment,p=void 0===f?"right":f,b=n.width,v=void 0===b?32:b,h=n.height,m=void 0===h?32:h,g=n.padding,w=void 0===g?0:g,y=n.radius,A=void 0===y?4:y,k=n.marginRight,q=void 0===k?0:k,x=n.marginLeft,M=void 0===x?8:x,C=n.fontSize,S=void 0===C?20:C,E={width:v,height:m,lineHeight:m+"px",padding:w,borderRadius:A,marginRight:q,marginLeft:M},T=function(n){!function(n){var e=n.plat,r=n.url,t=n.title;switch(n.image,n.description,e){case"facebook":s("https://www.facebook.com/sharer.php?u=".concat(r));break;case"twitter":s("https://twitter.com/share?url=".concat(r,"&text=").concat(t));break;case"linkedin":s("https://www.linkedin.com/shareArticle?url=".concat(r));break;case"weibo":s("http://service.weibo.com/share/share.php?appkey=&title=".concat(t,"&url=").concat(r,"&searchPic=false&style=simple"));break;case"weixin":l({url:r,winTitle:"微信分享",winDes:"打开微信扫一扫"})}}({plat:n,url:i,title:r,image:a,description:c})};return o.a.createElement("ul",{className:"vvshare-wrapper",style:{textAlign:p}},u.map((function(n){return o.a.createElement("li",{className:"vvshare-item vvshare-".concat(n," "),key:n,style:E,onClick:function(){return T(n)}},o.a.createElement("i",{className:"iconfont icon-".concat(n),style:{fontSize:S}}))})))}}]);