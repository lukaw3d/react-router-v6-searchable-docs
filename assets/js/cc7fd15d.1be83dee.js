"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[652],{8774:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=o(5893),t=o(1151);const s={title:"useRouteError",new:!0,sidebar_position:void 0},a="useRouteError",i={id:"hooks/use-route-error",title:"useRouteError",description:"Inside of an errorElement, this hook returns anything thrown during an action, loader, or rendering. Note that thrown responses have special treatment, see isRouteErrorResponse for more information.",source:"@site/react-router/docs/hooks/use-route-error.md",sourceDirName:"hooks",slug:"/hooks/use-route-error",permalink:"/react-router-v6-searchable-docs/hooks/use-route-error",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1667152202,formattedLastUpdatedAt:"Oct 30, 2022",frontMatter:{title:"useRouteError",new:!0},sidebar:"tutorialSidebar",previous:{title:"useRevalidator",permalink:"/react-router-v6-searchable-docs/hooks/use-revalidator"},next:{title:"useRouteLoaderData",permalink:"/react-router-v6-searchable-docs/hooks/use-route-loader-data"}},u={},c=[];function d(e){const r={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"userouteerror",children:(0,n.jsx)(r.code,{children:"useRouteError"})}),"\n",(0,n.jsxs)(r.p,{children:["Inside of an ",(0,n.jsx)(r.a,{href:"../route/error-element",children:(0,n.jsx)(r.code,{children:"errorElement"})}),", this hook returns anything thrown during an action, loader, or rendering. Note that thrown responses have special treatment, see ",(0,n.jsx)(r.a,{href:"../utils/is-route-error-response",children:(0,n.jsx)(r.code,{children:"isRouteErrorResponse"})})," for more information."]}),"\n",(0,n.jsxs)("docs-warning",{children:["This feature only works if using a data router, see ",(0,n.jsx)(r.a,{href:"../routers/picking-a-router",children:"Picking a Router"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'function ErrorBoundary() {\n  const error = useRouteError();\n  console.error(error);\n  return <div>{error.message}</div>;\n}\n\n<Route\n  errorElement={<ErrorBoundary />}\n  loader={() => {\n    // unexpected errors in loaders/actions\n    something.that.breaks();\n  }}\n  action={() => {\n    // stuff you throw on purpose in loaders/actions\n    throw new Response("Bad Request", { status: 400 });\n  }}\n  element={\n    // and errors thrown while rendering\n    <div>{breaks.while.rendering}</div>\n  }\n/>;\n'})})]})}function l(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,r,o)=>{o.d(r,{Z:()=>i,a:()=>a});var n=o(7294);const t={},s=n.createContext(t);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);