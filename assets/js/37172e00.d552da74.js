"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9280],{9410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=n(5893),i=n(1151);const c={title:"redirectDocument",new:!0,sidebar_position:void 0},o="redirectDocument",a={id:"fetch/redirectDocument",title:"redirectDocument",description:"This is a small wrapper around redirect that will trigger a document-level redirect to the new location instead of a client-side navigation.",source:"@site/react-router/docs/fetch/redirectDocument.md",sourceDirName:"fetch",slug:"/fetch/redirectDocument",permalink:"/react-router-v6-searchable-docs/fetch/redirectDocument",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1691005151,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"redirectDocument",new:!0},sidebar:"tutorialSidebar",previous:{title:"redirect",permalink:"/react-router-v6-searchable-docs/fetch/redirect"},next:{title:"Utilities",permalink:"/react-router-v6-searchable-docs/utils/index"}},s={},d=[{value:"Type Declaration",id:"type-declaration",level:2},{value:"<code>url</code>",id:"url",level:2},{value:"<code>init</code>",id:"init",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"redirectdocument",children:(0,r.jsx)(t.code,{children:"redirectDocument"})}),"\n",(0,r.jsxs)(t.p,{children:["This is a small wrapper around ",(0,r.jsx)(t.a,{href:"./redirect",children:(0,r.jsx)(t.code,{children:"redirect"})})," that will trigger a document-level redirect to the new location instead of a client-side navigation."]}),"\n",(0,r.jsxs)(t.p,{children:["This is most useful when you have a React Router app living next to a separate app on the same domain and need to redirect from the React Router app to the other app via ",(0,r.jsx)(t.code,{children:"window.location"})," instead of a React Router navigation:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'import { redirectDocument } from "react-router-dom";\n\nconst loader = async () => {\n  const user = await getUser();\n  if (!user) {\n    return redirectDocument("/otherapp/login");\n  }\n  return null;\n};\n'})}),"\n",(0,r.jsx)(t.h2,{id:"type-declaration",children:"Type Declaration"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"type RedirectFunction = (\n  url: string,\n  init?: number | ResponseInit\n) => Response;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"url",children:(0,r.jsx)(t.code,{children:"url"})}),"\n",(0,r.jsx)(t.p,{children:"The URL to redirect to."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'redirectDocument("/otherapp/login");\n'})}),"\n",(0,r.jsx)(t.h2,{id:"init",children:(0,r.jsx)(t.code,{children:"init"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Response/Response",children:"Response"})," options to be used in the response."]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(7294);const i={},c=r.createContext(i);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);