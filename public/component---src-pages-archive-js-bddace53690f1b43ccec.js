"use strict";(self.webpackChunkv2=self.webpackChunkv2||[]).push([[527],{226:function(e,t,a){a.r(t);var n=a(7294),r=a(5414),i=a(9),l=a(537),d=a(355),o=a(4741),c=a(9086),s=a(3082),m=i.default.div.withConfig({displayName:"archive__StyledTableContainer",componentId:"sc-u5epm8-0"})(["margin:100px -20px;@media (max-width:768px){margin:50px -10px;}table{width:100%;border-collapse:collapse;.hide-on-mobile{@media (max-width:768px){display:none;}}tbody tr{&:hover,&:focus{background-color:var(--light-navy);}}th,td{padding:10px;text-align:left;&:first-child{padding-left:20px;@media (max-width:768px){padding-left:10px;}}&:last-child{padding-right:20px;@media (max-width:768px){padding-right:10px;}}svg{width:20px;height:20px;}}tr{cursor:default;td:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);}td:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);}}td{&.year{padding-right:20px;@media (max-width:768px){padding-right:10px;font-size:var(--fz-sm);}}&.title{padding-top:15px;padding-right:20px;color:var(--lightest-slate);font-size:var(--fz-xl);font-weight:600;line-height:1.25;}&.company{font-size:var(--fz-lg);white-space:nowrap;}&.tech{font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;.separator{margin:0 5px;}span{display:inline-block;}}&.links{min-width:100px;div{display:flex;align-items:center;a{",";flex-shrink:0;}a + a{margin-left:10px;}}}}}"],(function(e){return e.theme.mixins.flexCenter}));t.default=function(e){var t=e.location,a=e.data.allMarkdownRemark.edges,i=(0,n.useRef)(null),h=(0,n.useRef)(null),u=(0,n.useRef)([]),f=(0,s.Tb)();function p(){return{width:window.innerWidth}}var g,x,E,v=(g=(0,n.useState)("undefined"!=typeof window&&p()),x=g[0],E=g[1],(0,n.useEffect)((function(){function e(){E(p())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),x).width;return(0,n.useEffect)((function(){f||(d.Z.reveal(i.current,(0,l.srConfig)()),d.Z.reveal(h.current,(0,l.srConfig)(200,0)),u.current.forEach((function(e,t){return d.Z.reveal(e,(0,l.srConfig)(10*t))})))}),[]),n.createElement(o.Ar,{location:t},n.createElement(r.q,{title:"Archive"}),n.createElement("main",null,n.createElement("header",{ref:i},n.createElement("h1",{className:"big-heading"},"Archive"),n.createElement("p",{className:"subtitle"},"A list of things I’ve worked on")),n.createElement(m,{ref:h},n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Year"),n.createElement("th",null,"Title"),n.createElement("th",{className:"hide-on-mobile"},"Made at"),n.createElement("th",{className:"hide-on-mobile"},"Built with"),n.createElement("th",null,"Link"))),n.createElement("tbody",null,a.length>0&&a.map((function(e,t){var a=e.node.frontmatter,r=a.date,i=a.github,l=a.external,d=a.title,o=a.archiveTitle,s=a.tech,m=a.company;return n.createElement("tr",{key:t,ref:function(e){return u.current[t]=e}},n.createElement("td",{className:"overline year"},""+new Date(r).getFullYear()),n.createElement("td",{className:"title"},o&&v<=480?o:d),n.createElement("td",{className:"company hide-on-mobile"},m?n.createElement("span",null,m):n.createElement("span",null,"—")),n.createElement("td",{className:"tech hide-on-mobile"},s.length>0&&s.map((function(e,t){return n.createElement("span",{key:t},e,"",t!==s.length-1&&n.createElement("span",{className:"separator"},"·"))}))),n.createElement("td",{className:"links"},n.createElement("div",null,l&&n.createElement("a",{href:l,"aria-label":"External Link"},n.createElement(c.JO,{name:"External"})),i&&n.createElement("a",{href:i,"aria-label":"GitHub Link"},n.createElement(c.JO,{name:"GitHub"})))))})))))))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-bddace53690f1b43ccec.js.map