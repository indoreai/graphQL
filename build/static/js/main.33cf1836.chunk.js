(this.webpackJsonpgraphqlandpwa=this.webpackJsonpgraphqlandpwa||[]).push([[0],{51:function(n,e,a){},61:function(n,e,a){},64:function(n,e,a){"use strict";a.r(e);var c=a(4),t=(a(1),a(37)),s=a.n(t),r=a(20),i=a(8),l=a(24),o=(a(51),a(66)),d=a(65),j=a(22),b=a(30),h=a(31),u=a.n(h);function m(){var n=Object(b.a)(["\n{\n  continents {\n     code\n      name,\n      countries {\n      name,\n       code,\n       native\n      }\n    }\n  }"]);return m=function(){return n},n}function O(){var n=Object(b.a)(["\nquery continent($code: ID!) {\n  continent(code: $code) {\n      name,\n      code,\n      countries {\n          name,\n           code,\n           native,\n           languages {\n             name,\n             code\n           }\n      }\n  }\n}\n"]);return O=function(){return n},n}var x=u()(O()),p=u()(m()),v=Object(i.f)((function(n){var e=n.code,a=n.name,t=n.history;return Object(c.jsxs)(d.a.Item,{onClick:function(){return function(n){return t.push("/continent-details/"+n)}(e)},className:"text-justify text-center text-uppercase",children:[a,Object(c.jsx)("sup",{className:"font-weight-light font-italic",children:e})]})})),f=Object(i.f)((function(n){var e=n.history,a=Object(j.a)(p),t=a.data,s=a.loading,r=a.error;if(s)return Object(c.jsx)("p",{children:"Loading..."});if(r)return Object(c.jsx)("p",{children:"Error"});return Object(c.jsxs)(o.a,{children:[Object(c.jsx)("nav",{className:"navbar navbar-dark nav-color ",children:"Continent List"}),Object(c.jsx)(d.a,{variant:"flush",children:t.continents.length>0?t.continents.map((function(n){return Object(c.jsx)(v,Object(l.a)(Object(l.a)({},n),{},{onClick:function(){return a=n.code,e.push("/continent-details/"+a);var a}}),n.code)})):null})]})})),N=function(n){var e=n.name,a=n.code;return Object(c.jsxs)("div",{className:"col-md-3",children:[Object(c.jsx)("h3",{className:"display-5",children:e}),Object(c.jsxs)("p",{children:["Contry name is ",e," and this code is : ",a]})]})},g=(a(61),Object(i.f)((function(n){var e=Object(j.a)(x,{variables:{code:n.match.params.id}}),a=e.loading,t=e.data,s=e.error;if(a)return Object(c.jsx)("p",{children:"Loading..."});if(s)return Object(c.jsx)("p",{children:"Oops!! Something wrong!!"});var r=t.continent;return Object(c.jsxs)("div",{children:[Object(c.jsx)("nav",{className:"navbar navbar-dark nav-color",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)("span",{className:"navbar-brand",children:"Continent Detail "}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:""})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(c.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(c.jsx)("li",{className:"navbar-brand",children:Object(c.jsxs)("span",{className:"nav-link",onClick:function(){return n.history.push("/")},children:["Continent List ",Object(c.jsx)("span",{className:"sr-only",children:"(current)"})]})})})})]})}),Object(c.jsxs)("main",{role:"main",className:"container-fluid ",children:[Object(c.jsx)("div",{className:"row bg mb15",children:Object(c.jsx)("div",{className:"col",children:Object(c.jsxs)("div",{className:"jumbotron",children:[Object(c.jsx)("h1",{className:"display-2",children:r.name}),Object(c.jsxs)("p",{className:"lead",children:["This Continent Name is ",r.name,"."]})]})})}),Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-md-12 mb-4",children:[Object(c.jsxs)("p",{children:[r.name," based Country and langauges here."]}),Object(c.jsx)("h3",{className:"display-3",children:"Country List"}),Object(c.jsx)("div",{className:"row",children:r.countries.map((function(n){return Object(c.jsx)(N,Object(l.a)({},n),n.code)}))})]})})})]}),Object(c.jsx)("footer",{className:"container-fluid foter",children:Object(c.jsx)("div",{className:"row bg",children:Object(c.jsx)("div",{className:"col-lg-12",children:Object(c.jsxs)("p",{className:"text-center",children:["Original design by ",Object(c.jsx)("span",{children:"IndoreAI"})]})})})})]})})));var y=function(){return Object(c.jsx)(r.a,{children:Object(c.jsxs)(i.c,{children:[Object(c.jsx)(i.a,{exact:!0,path:"/",component:f}),Object(c.jsx)(i.a,{path:"/continent-details/:id",component:g})]})})},w=(a(62),a(11)),C=a(19),k=a(43),I=a(44),L=new k.a,q=new I.a({uri:"https://countries.trevorblades.com/"}),D=new C.a({cache:L,link:q});s.a.render(Object(c.jsx)(w.a,{client:D,children:Object(c.jsx)(y,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.33cf1836.chunk.js.map