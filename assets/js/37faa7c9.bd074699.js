"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5133],{4807:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var n=a(5893),r=a(1151);const o={title:"matchPath",sidebar_position:void 0},s="matchPath",c={id:"utils/match-path",title:"matchPath",description:"Type declaration",source:"@site/react-router/docs/utils/match-path.md",sourceDirName:"utils",slug:"/utils/match-path",permalink:"/react-router-v6-searchable-docs/utils/match-path",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1652913167,formattedLastUpdatedAt:"May 18, 2022",frontMatter:{title:"matchPath"},sidebar:"tutorialSidebar",previous:{title:"Location",permalink:"/react-router-v6-searchable-docs/utils/location"},next:{title:"matchRoutes",permalink:"/react-router-v6-searchable-docs/utils/match-routes"}},i={},h=[];function l(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...t.components},{Details:a}=e;return a||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"matchpath",children:(0,n.jsx)(e.code,{children:"matchPath"})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Type declaration"}),(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"declare function matchPath<\n  ParamKey extends string = string\n>(\n  pattern: PathPattern | string,\n  pathname: string\n): PathMatch<ParamKey> | null;\n\ninterface PathMatch<ParamKey extends string = string> {\n  params: Params<ParamKey>;\n  pathname: string;\n  pattern: PathPattern;\n}\n\ninterface PathPattern {\n  path: string;\n  caseSensitive?: boolean;\n  end?: boolean;\n}\n"})})]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"matchPath"})," matches a route path pattern against a URL pathname and returns information about the match. This is useful whenever you need to manually run the router's matching algorithm to determine if a route path matches or not. It returns ",(0,n.jsx)(e.code,{children:"null"})," if the pattern does not match the given pathname."]}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsxs)(e.a,{href:"../hooks/use-match",children:[(0,n.jsx)(e.code,{children:"useMatch"})," hook"]})," uses this function internally to match a route path relative to the current location."]})]})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},1151:(t,e,a)=>{a.d(e,{Z:()=>c,a:()=>s});var n=a(7294);const r={},o=n.createContext(r);function s(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);