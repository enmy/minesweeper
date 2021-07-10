(self.webpackChunk=self.webpackChunk||[]).push([[773],{80:(e,t,r)=>{r(689),r(144)},689:(e,t,r)=>{window._=r(486),window.axios=r(669),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},144:(e,t,r)=>{"use strict";r.r(t);var n=r(294),o=r(935),a=r(800);function i(e){return-1===e}function u(e,t,r,n,o){e-1>=0&&o(e-1,t),t-1>=0&&o(e,t-1),e-1>=0&&t-1>=0&&o(e-1,t-1),e+1<r&&o(e+1,t),t+1<n&&o(e,t+1),e+1<r&&t+1<n&&o(e+1,t+1),e-1>=0&&t+1<n&&o(e-1,t+1),e+1<r&&t-1>=0&&o(e+1,t-1)}function l(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6;c(e,t,r);for(var o=0;o++<1e3;)try{return s(e,t,r,n)}catch(e){if(!(e instanceof f))throw e}throw new Error("Giving up trying to create the board, there are too many mines.")}function s(e,t,r,n){for(var o=0,a=function(e,t){for(var r=new Array(e),n=0;n<e;n++){r[n]=new Array(t);for(var o=0;o<t;o++)r[n][o]=0}return r}(e,t);o<r;){var l=Math.floor(Math.random()*e),s=Math.floor(Math.random()*t);i(a[l][s])||(a[l][s]=-1,o++,u(l,s,e,t,(function(e,t){if(!i(a[e][t])&&(a[e][t]++,a[e][t]>n))throw new f})))}return a}function c(e,t,r){if(e<6||t<6)throw new Error("The side should be bigger than 5");if(e*t>512)throw new Error("The board is too big. It should be less than 512 cells");if(e*t*.25<r)throw new Error("There are too many mines for this board.");if(.25*e>t||.25*t>e)throw new Error("One side is too small compared to the other.")}function f(){}function d(e){return e.map((function(e){return e.map((function(e){return{value:e,state:"covered"}}))}))}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e){var t=e.width,r=e.height,o=e.mines,a=e.maxAdjacentMines,s=y((0,n.useState)((function(){return d(l(t,r,o))})),2),c=s[0],f=s[1],h=y((0,n.useState)(!1),2),g=h[0],b=h[1],p=y((0,n.useState)(!1),2),j=p[0],w=p[1],x=y((0,n.useState)(o),2),S=x[0],C=x[1],A=y(function(e,t){var r=m((0,n.useState)(0),2),o=r[0],a=r[1];return(0,n.useEffect)((function(){if(e){var t=setInterval((function(){a((function(e){return e+1}))}),1e3);return function(){return clearInterval(t)}}}),[e]),(0,n.useEffect)((function(){t||a(0)}),[t]),[o,a]}(j,g),1)[0];(0,n.useEffect)((function(){g?(w(!1),f((function(e){return e.forEach((function(t,r){return t.forEach((function(t,n){(i(t.value)||"flagged"===t.state)&&M(e,r,n)}))})),v(e)}))):C(o)}),[g]),(0,n.useEffect)((function(){for(var e=0;e<c.length;e++)for(var t=0;t<c[e].length;t++)if(!i(c[e][t].value)&&"uncovered"!==c[e][t].state)return;b("won")}),[c]),(0,n.useEffect)((function(){k()}),[t,r,o]),(0,n.useEffect)((function(){C(o)}),[o]);var E=(0,n.useCallback)((function(e,t){g||(w(!0),f((function(r){return O(r,e,t),v(r)})))}),[g,t,r]),k=(0,n.useCallback)((function(){f(d(l(t,r,o,a))),b(!1)}),[t,r,o,a]),I=(0,n.useCallback)((function(e,t){g||f((function(r){var n=r[e][t];return"flagged"===n.state?(n.state="question-mark",C((function(e){return e+1}))):"covered"===n.state?(n.state="flagged",C((function(e){return e-1}))):"question-mark"===n.state&&(n.state="covered"),v(r)}))}),[g]);function O(e,n,o){var a=e[n][o];i(a.value)?(a.state="exploted",b("lose")):M(e,n,o),0===a.value&&"flagged"!==a.state&&u(n,o,t,r,(function(t,r){"uncovered"!==e[t][r].state&&O(e,t,r)}))}function M(e,t,r){var n=e[t][r];["covered","question-mark"].includes(n.state)?n.state="uncovered":"flagged"===n.state&&!i(n.value)&&g&&(n.state="wrong-flagged")}return{board:c,uncover:E,restart:k,toogleFlag:I,seconds:A,minesCounter:S,gameEnded:g}}function j(e){return function(e){switch(e){case"question":return String.fromCodePoint(10067);case"bomb":return String.fromCodePoint(128163);case"boom":return String.fromCodePoint(128165);case"triangular_flag":return String.fromCodePoint(128681);case"smiling_face_with_sunglasses":return String.fromCodePoint(128526);case"dizzy_face":return String.fromCodePoint(128565);case"neutral_face":return String.fromCodePoint(128528);case"cross_mark":return String.fromCodePoint(10060);default:throw Error("Emoji ".concat(e," not implemented"))}}(e.code)}var w=r(893);function x(e){var t=e.cell;switch(t.state){case"covered":return" ";case"flagged":return(0,w.jsx)(j,{code:"triangular_flag"});case"question-mark":return(0,w.jsx)(j,{code:"question"});case"exploted":return(0,w.jsx)(j,{code:"boom"});case"uncovered":return i(t.value)?(0,w.jsx)(j,{code:"bomb"}):t.value||" ";case"wrong-flagged":return(0,w.jsx)(j,{code:"cross_mark"});default:throw Error("Cell state '".concat(t.state,"' not implemented"))}}function S(e){var t=e.gameState;switch(t){case"won":return(0,w.jsx)(j,{code:"smiling_face_with_sunglasses"});case!1:return(0,w.jsx)(j,{code:"neutral_face"});case"lose":return(0,w.jsx)(j,{code:"dizzy_face"});default:throw Error("Game state '".concat(t,"' not implemented"))}}function C(e){var t=p(e.boardDimensions),r=t.board,o=t.uncover,a=t.restart,i=t.toogleFlag,u=t.seconds,l=t.minesCounter,s=t.gameEnded,c=(0,n.useCallback)((function(e,t,r){e.preventDefault(),i(t,r)}),[i]);return(0,w.jsx)("table",{className:"board",children:(0,w.jsxs)("tbody",{children:[(0,w.jsx)("tr",{children:(0,w.jsxs)("td",{className:"header",colSpan:r[0].length,children:[(0,w.jsx)("div",{className:"counter",style:{float:"left"},children:l}),(0,w.jsx)("div",{className:"counter",style:{float:"right"},children:u>999?999:u}),(0,w.jsx)("div",{className:"restarter",onClick:a,children:(0,w.jsx)(S,{gameState:s})})]})}),r.map((function(e,t){return(0,w.jsx)("tr",{children:e.map((function(e,r){return(0,w.jsx)("td",{className:"cell ".concat(e.state," cell-").concat(e.value),onClick:function(){return o(t,r)},onContextMenu:function(e){return c(e,t,r)},children:(0,w.jsx)(x,{cell:e})},"".concat(t,",").concat(r))}))},t)}))]})})}var A=["setBoardDimensions"];function E(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function k(e){var t=e.boardDimensions,r=e.showForm,n=e.maxAdjacentMines,o=void 0===n?8:n,a=t.setBoardDimensions,i=E(t,A);return(0,w.jsxs)("div",{className:r?"":"invisible",children:[(0,w.jsxs)("label",{htmlFor:"width",children:["Width",(0,w.jsx)("input",{type:"number",className:"dimension",name:"width",value:i.height,onChange:function(e){return a(i.width,e.target.value,i.mines,o)}})]}),(0,w.jsx)("br",{}),(0,w.jsxs)("label",{htmlFor:"height",children:["Height",(0,w.jsx)("input",{type:"number",className:"dimension",name:"height",value:i.width,onChange:function(e){return a(e.target.value,i.height,i.mines,o)}})]}),(0,w.jsx)("br",{}),(0,w.jsxs)("label",{htmlFor:"mines",children:["Mines",(0,w.jsx)("input",{type:"number",className:"dimension",name:"mines",value:i.mines,onChange:function(e){return a(i.width,i.height,e.target.value,o)}})]})]})}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(){var e=M((0,n.useState)(!1),2),t=e[0],r=e[1],o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultWidth,r=void 0===t?8:t,o=e.defaultHeight,a=void 0===o?8:o,i=e.defaultMines,u=void 0===i?10:i,l=e.defaultMaxAdjacentMines,s=void 0===l?6:l,c=I((0,n.useState)(r),2),f=c[0],d=c[1],m=I((0,n.useState)(a),2),h=m[0],v=m[1],y=I((0,n.useState)(u),2),g=y[0],b=y[1],p=I((0,n.useState)(s),2),j=p[0],w=p[1],x=(0,n.useCallback)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6;d(e),v(t),b(r),w(n)}),[]);return{width:f,height:h,mines:g,maxAdjacentMines:j,setBoardDimensions:x}}(),i=o.setBoardDimensions;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h1",{children:"Minesweeper"}),(0,w.jsx)("h3",{children:(0,w.jsx)("i",{children:"by: Enmy Perez"})}),(0,w.jsx)(a.ErrorBoundary,{fallbackRender:function(e){var t=e.error,r=e.resetErrorBoundary;return(0,w.jsxs)("div",{style:{marginTop:"4em",marginBottom:"4em"},children:[(0,w.jsx)("h3",{style:{color:"red"},children:t.message}),(0,w.jsx)("button",{onClick:r,className:"py-4",children:"Try again"})]})},children:(0,w.jsx)(C,{boardDimensions:o})}),(0,w.jsxs)("div",{children:[(0,w.jsx)("span",{className:"level-selector",onClick:function(){return i(8,8,10)},children:"Beginner"}),(0,w.jsx)("span",{className:"level-selector",onClick:function(){return i(16,16,40)},children:"Intermediate"}),(0,w.jsx)("span",{className:"level-selector",onClick:function(){return i(16,30,99,8)},children:"Expert"}),(0,w.jsx)("span",{className:"level-selector",onClick:function(){return r((function(e){return!e}))},children:"Custom"})]}),(0,w.jsx)(k,{boardDimensions:o,showForm:t})]})}document.getElementById("root")&&o.render((0,w.jsx)(_,{}),document.getElementById("root"))},662:()=>{}},e=>{"use strict";var t=t=>e(e.s=t);e.O(0,[170,898],(()=>(t(80),t(662))));e.O()}]);
//# sourceMappingURL=app.js.map