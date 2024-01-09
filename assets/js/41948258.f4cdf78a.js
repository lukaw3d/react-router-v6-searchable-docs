"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6521],{1941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(5893),n=r(1151);const a={title:"Router",sidebar_position:void 0},s="<Router>",i={id:"router-components/router",title:"Router",description:"Type declaration",source:"@site/react-router/docs/router-components/router.md",sourceDirName:"router-components",slug:"/router-components/router",permalink:"/react-router-v6-searchable-docs/router-components/router",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1662745445,formattedLastUpdatedAt:"Sep 9, 2022",frontMatter:{title:"Router"},sidebar:"tutorialSidebar",previous:{title:"NativeRouter",permalink:"/react-router-v6-searchable-docs/router-components/native-router"},next:{title:"StaticRouter",permalink:"/react-router-v6-searchable-docs/router-components/static-router"}},c={},u=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"router",children:(0,o.jsx)(t.code,{children:"<Router>"})}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Type declaration"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"declare function Router(\n  props: RouterProps\n): React.ReactElement | null;\n\ninterface RouterProps {\n  basename?: string;\n  children?: React.ReactNode;\n  location: Partial<Location> | string;\n  navigationType?: NavigationType;\n  navigator: Navigator;\n  static?: boolean;\n}\n"})})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"<Router>"})," is the low-level interface that is shared by all router components (like ",(0,o.jsx)(t.code,{children:"<BrowserRouter>"})," and ",(0,o.jsx)(t.code,{children:"<StaticRouter>"}),"). In terms of React, ",(0,o.jsx)(t.code,{children:"<Router>"})," is a ",(0,o.jsx)(t.a,{href:"https://reactjs.org/docs/context.html#contextprovider",children:"context provider"})," that supplies routing information to the rest of the app."]}),"\n",(0,o.jsxs)(t.p,{children:["You probably never need to render a ",(0,o.jsx)(t.code,{children:"<Router>"})," manually. Instead, you should use one of the higher-level routers depending on your environment. You only ever need one router in a given app."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"<Router basename>"}),' prop may be used to make all routes and links in your app relative to a "base" portion of the URL pathname that they all share. This is useful when rendering only a portion of a larger app with React Router or when your app has multiple entry points. Basenames are not case-sensitive.']})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>s});var o=r(7294);const n={},a=o.createContext(n);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);