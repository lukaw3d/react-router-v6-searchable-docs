"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6812],{8827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(5893),a=t(1151);const o={title:"hydrateFallbackElement",new:!0,sidebar_position:void 0},l="hydrateFallbackElement",i={id:"route/hydrate-fallback-element",title:"hydrateFallbackElement",description:"If you are using Server-Side Rendering and you are leveraging partial hydration, then you can specify an Element/Component to render for non-hydrated routes during the initial hydration of the application.",source:"@site/react-router/docs/route/hydrate-fallback-element.md",sourceDirName:"route",slug:"/route/hydrate-fallback-element",permalink:"/react-router-v6-searchable-docs/route/hydrate-fallback-element",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1701730876,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{title:"hydrateFallbackElement",new:!0},sidebar:"tutorialSidebar",previous:{title:"errorElement",permalink:"/react-router-v6-searchable-docs/route/error-element"},next:{title:"lazy",permalink:"/react-router-v6-searchable-docs/route/lazy"}},c={},d=[];function s(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hydratefallbackelement",children:(0,r.jsx)(n.code,{children:"hydrateFallbackElement"})}),"\n",(0,r.jsxs)(n.p,{children:["If you are using ",(0,r.jsx)(n.a,{href:"../guides/ssr",children:"Server-Side Rendering"})," and you are leveraging ",(0,r.jsx)(n.a,{href:"../routers/create-browser-router#partial-hydration-data",children:"partial hydration"}),", then you can specify an Element/Component to render for non-hydrated routes during the initial hydration of the application."]}),"\n",(0,r.jsxs)("docs-info",{children:["If you do not wish to specify a React element (i.e., ",(0,r.jsx)(n.code,{children:"hydrateFallbackElement={<MyFallback />}"}),") you may specify an ",(0,r.jsx)(n.code,{children:"HydrateFallback"})," component instead (i.e., ",(0,r.jsx)(n.code,{children:"HydrateFallback={MyFallback}"}),") and React Router will call ",(0,r.jsx)(n.code,{children:"createElement"})," for you internally."]}),"\n",(0,r.jsxs)("docs-warning",{children:["This feature only works if using a data router, see ",(0,r.jsx)(n.a,{href:"../routers/picking-a-router",children:"Picking a Router"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'let router = createBrowserRouter(\n  [\n    {\n      id: "root",\n      path: "/",\n      loader: rootLoader,\n      Component: Root,\n      children: [\n        {\n          id: "invoice",\n          path: "invoices/:id",\n          loader: loadInvoice,\n          Component: Invoice,\n          HydrateFallback: InvoiceSkeleton,\n        },\n      ],\n    },\n  ],\n  {\n    future: {\n      v7_partialHydration: true,\n    },\n    hydrationData: {\n      root: {\n        /*...*/\n      },\n      // No hydration data provided for the `invoice` route\n    },\n  }\n);\n'})}),"\n",(0,r.jsxs)("docs-warning",{children:["There is no default fallback and it will just render ",(0,r.jsx)(n.code,{children:"null"})," at that route level, so it is recommended that you always provide your own fallback element."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(7294);const a={},o=r.createContext(a);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);