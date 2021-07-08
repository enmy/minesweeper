(self.webpackChunk=self.webpackChunk||[]).push([[773],{80:(e,t,r)=>{r(689),r(664)},689:(e,t,r)=>{window._=r(486),window.axios=r(669),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},664:(e,t,r)=>{"use strict";r.r(t);var n=r(294),o=r(935),i=r(800);function a(e){return-1===e}function u(e,t,r,n,o){e-1>=0&&o(e-1,t),t-1>=0&&o(e,t-1),e-1>=0&&t-1>=0&&o(e-1,t-1),e+1<r&&o(e+1,t),t+1<n&&o(e,t+1),e+1<r&&t+1<n&&o(e+1,t+1),e-1>=0&&t+1<n&&o(e-1,t+1),e+1<r&&t-1>=0&&o(e+1,t-1)}function l(e,t,r){!function(e,t,r){if(e<6||t<6)throw new Error("The side should be bigger than 5");if(e*t>512)throw new Error("The board is too big. It should be less than 512 cells");if(e*t*.25<r)throw new Error("There are too many mines for this board.");if(.25*e>t||.25*t>e)throw new Error("One side is too small compared to the other.")}(e,t,r);for(var n=0;n++<1e3;)try{return s(e,t,r)}catch(e){if(!(e instanceof c))throw e}throw new Error("Giving up trying to create the board, there are too many mines.")}function s(e,t,r){for(var n=0,o=function(e,t){for(var r=new Array(e),n=0;n<e;n++){r[n]=new Array(t);for(var o=0;o<t;o++)r[n][o]=0}return r}(e,t);n<r;){var i=Math.floor(Math.random()*e),l=Math.floor(Math.random()*t);a(o[i][l])||(o[i][l]=-1,n++,u(i,l,e,t,(function(e,t){if(!a(o[e][t])&&(o[e][t]++,o[e][t]>6))throw new c})))}return o}function c(){}function f(e){return e.map((function(e){return e.map((function(e){return{value:e,state:"covered"}}))}))}function d(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e){var t=e.width,r=e.height,o=e.mines,i=h((0,n.useState)((function(){return f(l(t,r,o))})),2),s=i[0],c=i[1],m=h((0,n.useState)(!1),2),v=m[0],y=m[1],b=h((0,n.useState)(0),2),g=b[0],p=b[1],w=h((0,n.useState)(!1),2),j=w[0],x=w[1],S=h((0,n.useState)(o),2),C=S[0],E=S[1];(0,n.useEffect)((function(){if(j){var e=setInterval((function(){p((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}}),[j]),(0,n.useEffect)((function(){v?(x(!1),c((function(e){return e.forEach((function(t,r){return t.forEach((function(t,n){a(t.value)&&N(e,r,n)}))})),d(e)}))):(p(0),E(o))}),[v]),(0,n.useEffect)((function(){for(var e=0;e<s.length;e++)for(var t=0;t<s[e].length;t++)if(!a(s[e][t].value)&&"uncovered"!==s[e][t].state)return;y("won")}),[s]),(0,n.useEffect)((function(){I()}),[t,r,o]),(0,n.useEffect)((function(){E(o)}),[o]);var A=(0,n.useCallback)((function(e,t){v||(x(!0),c((function(r){return O(r,e,t),d(r)})))}),[v]),I=(0,n.useCallback)((function(){c(f(l(t,r,o))),y(!1)}),[t,r,o]),k=(0,n.useCallback)((function(e,t,r){e.preventDefault(),v||c((function(e){var n=e[t][r];return"flagged"===n.state?(n.state="covered",E((function(e){return e+1}))):"covered"===n.state&&(n.state="flagged",E((function(e){return e-1}))),d(e)}))}),[]);function O(e,n,o){N(e,n,o);var i=e[n][o];a(i.value)&&(i.state="exploted",y("lose")),0===i.value&&u(n,o,t,r,(function(t,r){"uncovered"!==e[t][r].state&&O(e,t,r)}))}function N(e,t,r){var n=e[t][r];"covered"===n.state&&(n.state="uncovered")}return{board:s,uncover:A,restart:I,toogleFlag:k,seconds:g,minesCounter:C,gameEnded:v}}var b=r(893);function g(e){var t=y(e.boardDimensions),r=t.board,n=t.uncover,o=t.restart,i=t.toogleFlag,u=t.seconds,l=t.minesCounter,s=t.gameEnded;return(0,b.jsx)("table",{className:"board",children:(0,b.jsxs)("tbody",{children:[(0,b.jsx)("tr",{children:(0,b.jsxs)("td",{className:"header",colSpan:r[0].length,children:[(0,b.jsx)("div",{className:"counter",style:{float:"left"},children:l}),(0,b.jsx)("div",{className:"counter",style:{float:"right"},children:u>999?999:u}),(0,b.jsx)("div",{className:"restarter",onClick:o,children:s?"won"===s?String.fromCodePoint(128526):String.fromCodePoint(128565):String.fromCodePoint(128528)})]})}),r.map((function(e,t){return(0,b.jsx)("tr",{children:e.map((function(e,r){return(0,b.jsx)("td",{className:"cell ".concat(e.state),onClick:function(){return n(t,r)},onContextMenu:function(e){return i(e,t,r)},children:"covered"===e.state?" ":"flagged"===e.state?String.fromCodePoint(128681):a(e.value)?"exploted"===e.state?String.fromCodePoint(128165):String.fromCodePoint(128163):e.value||" "},"".concat(t,",").concat(r))}))},t)}))]})})}var p=["setBoardDimensions"];function w(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function j(e){var t=e.boardDimensions,r=e.showForm,n=t.setBoardDimensions,o=w(t,p);return(0,b.jsxs)("div",{className:r?"":"invisible",children:[(0,b.jsxs)("label",{htmlFor:"width",children:["Width",(0,b.jsx)("input",{type:"number",className:"dimension",name:"width",value:o.height,onChange:function(e){return n(o.width,e.target.value,o.mines)}})]}),(0,b.jsx)("br",{}),(0,b.jsxs)("label",{htmlFor:"height",children:["Height",(0,b.jsx)("input",{type:"number",className:"dimension",name:"height",value:o.width,onChange:function(e){return n(e.target.value,o.height,o.mines)}})]}),(0,b.jsx)("br",{}),(0,b.jsxs)("label",{htmlFor:"mines",children:["Mines",(0,b.jsx)("input",{type:"number",className:"dimension",name:"mines",value:o.mines,onChange:function(e){return n(o.width,o.height,e.target.value)}})]})]})}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function A(){var e=C((0,n.useState)(!1),2),t=e[0],r=e[1],o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultWidth,r=void 0===t?8:t,o=e.defaultHeight,i=void 0===o?8:o,a=e.defaultMines,u=void 0===a?10:a,l=x((0,n.useState)(r),2),s=l[0],c=l[1],f=x((0,n.useState)(i),2),d=f[0],h=f[1],m=x((0,n.useState)(u),2),v=m[0],y=m[1],b=(0,n.useCallback)((function(e,t,r){c(e),h(t),y(r)}),[]);return{width:s,height:d,mines:v,setBoardDimensions:b}}(),a=o.setBoardDimensions;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h1",{children:"Minesweeper"}),(0,b.jsx)("h3",{children:(0,b.jsx)("i",{children:"by: Enmy Perez"})}),(0,b.jsx)(i.ErrorBoundary,{fallbackRender:function(e){var t=e.error,r=e.resetErrorBoundary;return(0,b.jsxs)("div",{style:{marginTop:"4em",marginBottom:"4em"},children:[(0,b.jsx)("h3",{style:{color:"red"},children:t.message}),(0,b.jsx)("button",{onClick:r,className:"py-4",children:"Try again"})]})},children:(0,b.jsx)(g,{boardDimensions:o})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"level-selector",onClick:function(){return a(8,8,10)},children:"Beginner"}),(0,b.jsx)("span",{className:"level-selector",onClick:function(){return a(16,16,40)},children:"Intermediate"}),(0,b.jsx)("span",{className:"level-selector",onClick:function(){return a(16,30,99)},children:"Expert"}),(0,b.jsx)("span",{className:"level-selector",onClick:function(){return r((function(e){return!e}))},children:"Custom"})]}),(0,b.jsx)(j,{boardDimensions:o,showForm:t})]})}document.getElementById("root")&&o.render((0,b.jsx)(A,{}),document.getElementById("root"))},662:()=>{}},e=>{"use strict";var t=t=>e(e.s=t);e.O(0,[170,898],(()=>(t(80),t(662))));e.O()}]);
//# sourceMappingURL=app.js.map