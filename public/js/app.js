(self.webpackChunk=self.webpackChunk||[]).push([[773],{80:(r,t,e)=>{e(689),e(146)},689:(r,t,e)=>{window._=e(486),window.axios=e(669),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},146:(r,t,e)=>{"use strict";e.r(t);var n=e(294),o=e(935);function a(r,t,e,n,o){r-1>=0&&o(r-1,t),t-1>=0&&o(r,t-1),r-1>=0&&t-1>=0&&o(r-1,t-1),r+1<e&&o(r+1,t),t+1<n&&o(r,t+1),r+1<e&&t+1<n&&o(r+1,t+1),r-1>=0&&t+1<n&&o(r-1,t+1),r+1<e&&t-1>=0&&o(r+1,t-1)}function i(r,t,e){!function(r,t,e){if(r<6||t<6)throw new Error("The side should be bigger than 5");if(r*t>512)throw new Error("The board is too big. It should be less than 512 cells");if(r*t*.25<e)throw new Error("There are too many mines for this board.");if(.25*r>t||.25*t>r)throw new Error("One side is too small compared to the other.")}(r,t,e);for(var n=0;n++<1e3;)try{return u(r,t,e)}catch(r){if(!(r instanceof l))throw r}throw new Error("Giving up trying to create the board, there are too many mines.")}function u(r,t,e){for(var n=0,o=function(r,t){for(var e=new Array(r),n=0;n<r;n++){e[n]=new Array(t);for(var o=0;o<t;o++)e[n][o]=0}return e}(r,t);n<e;){var i=Math.floor(Math.random()*r),u=Math.floor(Math.random()*t);c(o[i][u])||(o[i][u]=-1,n++,a(i,u,r,t,(function(r,t){if(!c(o[r][t])&&(o[r][t]++,o[r][t]>6))throw new l})))}return o}function c(r){return-1===r}function l(){}var s=e(893);function f(r){return function(r){if(Array.isArray(r))return m(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||h(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==e)return;var n,o,a=[],i=!0,u=!1;try{for(e=e.call(r);!(i=(n=e.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(r){u=!0,o=r}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(r,t)||h(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(r,t){if(r){if("string"==typeof r)return m(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(r,t):void 0}}function m(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function y(){var r=d((0,n.useState)((function(){return i(10,10,16).map((function(r){return r.map((function(r){return{value:r,state:"covered"}}))}))})),2),t=r[0],e=r[1];function o(r,t){e((function(e){return console.log({cell:e[r][t],x:r,y:t}),e[r][t].state="uncovered",0===e[r][t].value&&a(r,t,10,10,(function(r,t){"uncovered"!==e[r][t].state&&o(r,t)})),f(e)}))}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Minesweeper"}),(0,s.jsx)("h3",{children:(0,s.jsx)("i",{children:"by: Enmy Perez"})}),(0,s.jsx)("table",{className:"board",children:(0,s.jsx)("tbody",{children:t.map((function(r,t){return(0,s.jsx)("tr",{children:r.map((function(r,e){return(0,s.jsx)("td",{className:"cell ".concat(r.state),onClick:function(){return o(t,e)},children:"covered"===r.state?" ":r.value||" "},"".concat(t,",").concat(e))}))},t)}))})})]})}document.getElementById("root")&&o.render((0,s.jsx)(y,{}),document.getElementById("root"))},662:()=>{}},r=>{"use strict";var t=t=>r(r.s=t);r.O(0,[170,898],(()=>(t(80),t(662))));r.O()}]);
//# sourceMappingURL=app.js.map