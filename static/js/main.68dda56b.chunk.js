(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(4),s=n(1),b=n.n(s),r=(n(9),n(0)),d=function(t){var e=t.tabs,n=t.makingTabId,c=t.selectedTabId;return Object(r.jsx)("div",{className:"description-card",children:e.map((function(t){return Object(r.jsxs)(b.a.Fragment,{children:[Object(r.jsx)("span",{className:"btn-container",children:Object(r.jsx)("button",{type:"button",className:"tab-btn ".concat(t.id===c&&"tab-btn-active"),onClick:function(){return n(t.id)},children:t.title})}),t.id===c&&Object(r.jsx)("p",{"data-cy":"tab-content",className:"description-card-content",children:t.content})]},t.id)}))})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=function(){var t=Object(s.useState)(o[0].id),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Selected tab is ".concat(n)}),Object(r.jsx)(d,{tabs:o,makingTabId:function(t){return c(t)},selectedTabId:n})]})};a.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.68dda56b.chunk.js.map