(this.webpackJsonpmadlibs=this.webpackJsonpmadlibs||[]).push([[0],{20:function(n,e,t){n.exports=t(32)},25:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(15),c=t.n(o),l=(t(25),t(7)),i=t(4),u=t(9),m=function(){return fetch("//madlibz.herokuapp.com/api/random?minlength=5").then((function(n){return n.json()}))},s=t(2),p=t(3);function d(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-transform: capitalize;\n  padding-bottom: 15px;\n  background-color: lightgrey;\n  box-shadow: 0 0 10px grey;\n  & > .header-title {\n    color: green;\n  }\n  & > .header-text {\n    font-style: italic;\n  }\n"]);return d=function(){return n},n}var f=p.a.header(d());var b=function(){return r.a.createElement(f,null,r.a.createElement("h1",{className:"header-title"},"silly stories"),r.a.createElement("p",{className:"header-text"},"mad libs story generator "))};function h(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  padding: 20px;\n\n  & > .form-label {\n    color: green;\n    margin: 5px 0;\n    & > .form-input {\n      margin-right: 5px;\n      width: 150px;\n    }\n  }\n  & > .form-submit {\n    background-color: green;\n    color: white;\n    margin-top: 20px;\n    border: none;\n    padding: 10px 0;\n    box-shadow: 0 0 10px grey;\n  }\n  @media all and (min-width: 760px) {\n    width: 60vw;\n    margin: auto;\n    & > .form-label {\n      color: green;\n      margin: 8px 20px;\n      & > .form-input {\n        margin-right: 5px;\n        width: 150px;\n      }\n    }\n    & > .form-submit {\n    }\n  }\n  @media all and (min-width: 1200px) {\n    width: 30vw;\n  }\n"]);return h=function(){return n},n}var g=p.a.form(h());var x=function(n){var e=n.blanks,t=n.handleUserInput,a=n.userInput,o=n.formSubmitHandler,c=n.errorIds;return r.a.createElement(g,null,r.a.createElement(r.a.Fragment,null,e?e.map((function(n,e){return r.a.createElement("label",{htmlFor:"".concat(e,"-").concat(n),key:e,className:"form-label ".concat(c.includes("".concat(e,"-").concat(n))?"show-alert":"")},r.a.createElement("input",{type:"text",className:"form-input",onChange:t,id:"".concat(e,"-").concat(n),value:a[n]}),n,r.a.createElement("span",{className:"alert"},"*"))})):"",r.a.createElement("input",{type:"submit",value:"Submit",onClick:o,className:"form-submit button"})))};function v(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  & > .new-story {\n    background-color: green;\n    color: white;\n    margin-top: 20px;\n    border: none;\n    padding: 10px 0;\n    box-shadow: 0 0 10px grey;\n  }\n  & > .story-title {\n    font-size: 18px;\n    margin: 20px 0;\n    color: green;\n  }\n  & > .story-text {\n    line-height: 1.2;\n  }\n  @media all and (min-width: 760px) {\n    width: 70vw;\n    margin: auto;\n    & > .story-title {\n      font-size: 22px;\n    }\n  }\n  @media all and (min-width: 1200px) {\n    width: 50vw;\n  }\n"]);return v=function(){return n},n}var w=p.a.div(v());var y=function(n){var e,t=n.title,a=n.story,o=n.userInput,c=n.newStory;return e=a.map((function(n,e){if(0!==n)return r.a.createElement(r.a.Fragment,{key:e},"".concat(n," "),r.a.createElement("span",{className:"user-input"}," ",o[e]))})),r.a.createElement(w,null,r.a.createElement("button",{className:"new-story",onClick:c},"Make another story"),r.a.createElement("h2",{className:"story-title"},t),r.a.createElement("p",{className:"story-text"},e||a))};var E=function(){var n=Object(a.useState)({}),e=Object(u.a)(n,2),t=e[0],o=e[1],c=Object(a.useState)({}),s=Object(u.a)(c,2),p=s[0],d=s[1],f=Object(a.useState)([]),h=Object(u.a)(f,2),g=h[0],v=h[1],w=Object(a.useState)(!1),E=Object(u.a)(w,2),j=E[0],O=E[1];function k(){m().then((function(n){o(Object(i.a)({},n)),n.blanks.map((function(n,e){return d((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(l.a)({},"".concat(e,"-").concat(n),""))}))}))}))}return Object(a.useEffect)((function(){k()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),j?r.a.createElement(y,{userInput:Object.values(p),story:t.value,title:t.title,newStory:function(){O(!1),k()}}):r.a.createElement(x,{blanks:t.blanks,handleUserInput:function(n){var e=n.target.id,t=n.target.value;d(Object(i.a)(Object(i.a)({},p),{},Object(l.a)({},e,t)))},userInput:p,formSubmitHandler:function(n){n.preventDefault();var e=[];for(var t in p)""===p[t]&&e.push(t);v([].concat(e)),0===e.length&&O(!0)},errorIds:g}))},j=t(19);c.a.render(r.a.createElement(j.a,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.cdd34c9b.chunk.js.map