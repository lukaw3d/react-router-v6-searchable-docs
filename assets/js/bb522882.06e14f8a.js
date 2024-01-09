"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6955],{9853:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var s=i(5893),t=i(1151);const a={title:"NavLink",sidebar_position:void 0},c="<NavLink>",d={id:"components/nav-link",title:"NavLink",description:'A ` is a special kind of ` that knows whether or not it is "active", "pending", or "transitioning". This is useful in a few different scenarios:',source:"@site/react-router/docs/components/nav-link.md",sourceDirName:"components",slug:"/components/nav-link",permalink:"/react-router-v6-searchable-docs/components/nav-link",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1698783077,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{title:"NavLink"},sidebar:"tutorialSidebar",previous:{title:"Link",permalink:"/react-router-v6-searchable-docs/components/link"},next:{title:"Navigate",permalink:"/react-router-v6-searchable-docs/components/navigate"}},r={},o=[{value:"Default <code>active</code> class",id:"default-active-class",level:2},{value:"<code>className</code>",id:"classname",level:2},{value:"<code>style</code>",id:"style",level:2},{value:"<code>children</code>",id:"children",level:2},{value:"<code>end</code>",id:"end",level:2},{value:"<code>caseSensitive</code>",id:"casesensitive",level:2},{value:"<code>aria-current</code>",id:"aria-current",level:2},{value:"<code>reloadDocument</code>",id:"reloaddocument",level:2},{value:"<code>unstable_viewTransition</code>",id:"unstable_viewtransition",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"navlink",children:(0,s.jsx)(n.code,{children:"<NavLink>"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"<NavLink>"})," is a special kind of ",(0,s.jsx)(n.code,{children:"<Link>"}),' that knows whether or not it is "active", "pending", or "transitioning". This is useful in a few different scenarios:']}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When building a navigation menu, such as a breadcrumb or a set of tabs where you'd like to show which of them is currently selected"}),"\n",(0,s.jsx)(n.li,{children:"It provides useful context for assistive technology like screen readers"}),"\n",(0,s.jsxs)(n.li,{children:['It provides a "transitioning" value to give you finer-grained control over ',(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API",children:"View Transitions"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { NavLink } from "react-router-dom";\n\n<NavLink\n  to="/messages"\n  className={({ isActive, isPending }) =>\n    isPending ? "pending" : isActive ? "active" : ""\n  }\n>\n  Messages\n</NavLink>;\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"default-active-class",children:["Default ",(0,s.jsx)(n.code,{children:"active"})," class"]}),"\n",(0,s.jsxs)(n.p,{children:["By default, an ",(0,s.jsx)(n.code,{children:"active"})," class is added to a ",(0,s.jsx)(n.code,{children:"<NavLink>"})," component when it is active so you can use CSS to style it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'<nav id="sidebar">\n  <NavLink to="/messages" />\n</nav>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"#sidebar a.active {\n  color: red;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"classname",children:(0,s.jsx)(n.code,{children:"className"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"className"})," prop works like a normal className, but you can also pass it a function to customize the classNames applied based on the active and pending state of the link."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'<NavLink\n  to="/messages"\n  className={({ isActive, isPending, isTransitioning }) =>\n    [\n      isPending ? "pending" : "",\n      isActive ? "active" : "",\n      isTransitioning ? "transitioning" : "",\n    ].join(" ")\n  }\n>\n  Messages\n</NavLink>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"style",children:(0,s.jsx)(n.code,{children:"style"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"style"})," prop works like a normal style prop, but you can also pass it a function to customize the styles applied based on the active and pending state of the link."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'<NavLink\n  to="/messages"\n  style={({ isActive, isPending, isTransitioning }) => {\n    return {\n      fontWeight: isActive ? "bold" : "",\n      color: isPending ? "red" : "black",\n      viewTransitionName: isTransitioning ? "slide" : "",\n    };\n  }}\n>\n  Messages\n</NavLink>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"children",children:(0,s.jsx)(n.code,{children:"children"})}),"\n",(0,s.jsxs)(n.p,{children:["You can pass a render prop as children to customize the content of the ",(0,s.jsx)(n.code,{children:"<NavLink>"})," based on the active and pending state, which is useful to change styles on internal elements."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'<NavLink to="/tasks">\n  {({ isActive, isPending, isTransitioning }) => (\n    <span className={isActive ? "active" : ""}>Tasks</span>\n  )}\n</NavLink>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"end",children:(0,s.jsx)(n.code,{children:"end"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"end"})," prop changes the matching logic for the ",(0,s.jsx)(n.code,{children:"active"})," and ",(0,s.jsx)(n.code,{children:"pending"}),' states to only match to the "end" of the NavLink\'s ',(0,s.jsx)(n.code,{children:"to"})," path. If the URL is longer than ",(0,s.jsx)(n.code,{children:"to"}),", it will no longer be considered active."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Link"}),(0,s.jsx)(n.th,{children:"Current URL"}),(0,s.jsx)(n.th,{children:"isActive"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'<NavLink to="/tasks" />'})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/tasks"})}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'<NavLink to="/tasks" />'})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/tasks/123"})}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'<NavLink to="/tasks" end />'})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/tasks"})}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'<NavLink to="/tasks" end />'})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/tasks/123"})}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'<NavLink to="/tasks/" end />'})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/tasks"})}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'<NavLink to="/tasks/" end />'})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/tasks/"})}),(0,s.jsx)(n.td,{children:"true"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"A note on links to the root route"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'<NavLink to="/">'})," is an exceptional case because ",(0,s.jsx)(n.em,{children:"every"})," URL matches ",(0,s.jsx)(n.code,{children:"/"}),". To avoid this matching every single route by default, it effectively ignores the ",(0,s.jsx)(n.code,{children:"end"})," prop and only matches when you're at the root route."]}),"\n",(0,s.jsx)(n.h2,{id:"casesensitive",children:(0,s.jsx)(n.code,{children:"caseSensitive"})}),"\n",(0,s.jsxs)(n.p,{children:["Adding the ",(0,s.jsx)(n.code,{children:"caseSensitive"})," prop changes the matching logic to make it case sensitive."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Link"}),(0,s.jsx)(n.th,{children:"URL"}),(0,s.jsx)(n.th,{children:"isActive"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'<NavLink to="/SpOnGe-bOB" />'})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/sponge-bob"})}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'<NavLink to="/SpOnGe-bOB" caseSensitive />'})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/sponge-bob"})}),(0,s.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"aria-current",children:(0,s.jsx)(n.code,{children:"aria-current"})}),"\n",(0,s.jsxs)(n.p,{children:["When a ",(0,s.jsx)(n.code,{children:"NavLink"})," is active it will automatically apply ",(0,s.jsx)(n.code,{children:'<a aria-current="page">'})," to the underlying anchor tag. See ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current",children:"aria-current"})," on MDN."]}),"\n",(0,s.jsx)(n.h2,{id:"reloaddocument",children:(0,s.jsx)(n.code,{children:"reloadDocument"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"reloadDocument"})," property can be used to skip client side routing and let the browser handle the transition normally (as if it were an ",(0,s.jsx)(n.code,{children:"<a href>"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"unstable_viewtransition",children:(0,s.jsx)(n.code,{children:"unstable_viewTransition"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"unstable_viewTransition"})," prop enables a ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API",children:"View Transition"})," for this navigation by wrapping the final state update in ",(0,s.jsx)(n.code,{children:"document.startViewTransition()"}),". By default, during the transition a ",(0,s.jsx)(n.code,{children:"transitioning"})," class will be added to the ",(0,s.jsx)(n.code,{children:"<a>"})," element that you can use to customize the view transition."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:'a.transitioning p {\n  view-transition-name: "image-title";\n}\n\na.transitioning img {\n  view-transition-name: "image-expand";\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<NavLink to={to} unstable_viewTransition>\n  <p>Image Number {idx}</p>\n  <img src={src} alt={`Img ${idx}`} />\n</NavLink>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You may also use the ",(0,s.jsx)(n.code,{children:"className"}),"/",(0,s.jsx)(n.code,{children:"style"})," props or the render props passed to ",(0,s.jsx)(n.code,{children:"children"})," to further customize based on the ",(0,s.jsx)(n.code,{children:"isTransitioning"})," value."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<NavLink to={to} unstable_viewTransition>\n  {({ isTransitioning }) => (\n    <>\n      <p\n        style={{\n          viewTransitionName: isTransitioning\n            ? "image-title"\n            : "",\n        }}\n      >\n        Image Number {idx}\n      </p>\n      <img\n        src={src}\n        alt={`Img ${idx}`}\n        style={{\n          viewTransitionName: isTransitioning\n            ? "image-expand"\n            : "",\n        }}\n      />\n    </>\n  )}\n</NavLink>\n'})}),"\n",(0,s.jsx)("docs-warning",{children:(0,s.jsx)(n.p,{children:"Please note that this API is marked unstable and may be subject to breaking changes without a major release."})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>c});var s=i(7294);const t={},a=s.createContext(t);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);