"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9148],{6177:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(5893),o=r(1151);const a={title:"createStaticRouter",new:!0,sidebar_position:void 0},c="createStaticRouter",i={id:"routers/create-static-router",title:"createStaticRouter",description:"createStaticRouter is used when you want to leverage a data router for rendering on your server (i.e., Node or another Javascript runtime). For a more complete overview, please refer to the Server-Side Rendering guide.",source:"@site/react-router/docs/routers/create-static-router.md",sourceDirName:"routers",slug:"/routers/create-static-router",permalink:"/react-router-v6-searchable-docs/routers/create-static-router",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1701730876,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{title:"createStaticRouter",new:!0},sidebar:"tutorialSidebar",previous:{title:"createStaticHandler",permalink:"/react-router-v6-searchable-docs/routers/create-static-handler"},next:{title:"RouterProvider",permalink:"/react-router-v6-searchable-docs/routers/router-provider"}},s={},d=[{value:"Type Declaration",id:"type-declaration",level:2},{value:"<code>opts.future</code>",id:"optsfuture",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"createstaticrouter",children:(0,n.jsx)(t.code,{children:"createStaticRouter"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"createStaticRouter"})," is used when you want to leverage a ",(0,n.jsx)(t.a,{href:"./picking-a-router",children:"data router"})," for rendering on your server (i.e., ",(0,n.jsx)(t.a,{href:"https://nodejs.org/",children:"Node"})," or another Javascript runtime). For a more complete overview, please refer to the ",(0,n.jsx)(t.a,{href:"../guides/ssr",children:"Server-Side Rendering"})," guide."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:"lines=[3,31]",children:'import {\n  createStaticHandler,\n  createStaticRouter,\n  StaticRouterProvider,\n} from "react-router-dom/server";\nimport Root, {\n  loader as rootLoader,\n  ErrorBoundary as RootBoundary,\n} from "./root";\n\nconst routes = [\n  {\n    path: "/",\n    loader: rootLoader,\n    Component: Root,\n    ErrorBoundary: RootBoundary,\n  },\n];\n\nexport async function renderHtml(req) {\n  let { query, dataRoutes } = createStaticHandler(routes);\n  let fetchRequest = createFetchRequest(req);\n  let context = await query(fetchRequest);\n\n  // If we got a redirect response, short circuit and let our Express server\n  // handle that directly\n  if (context instanceof Response) {\n    throw context;\n  }\n\n  let router = createStaticRouter(dataRoutes, context);\n  return ReactDOMServer.renderToString(\n    <React.StrictMode>\n      <StaticRouterProvider\n        router={router}\n        context={context}\n      />\n    </React.StrictMode>\n  );\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"type-declaration",children:"Type Declaration"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"declare function createStaticRouter(\n  routes: RouteObject[],\n  context: StaticHandlerContext,\n  opts: {\n    future?: {\n      v7_partialHydration?: boolean;\n    };\n  }\n): Router;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"optsfuture",children:(0,n.jsx)(t.code,{children:"opts.future"})}),"\n",(0,n.jsxs)(t.p,{children:["An optional set of ",(0,n.jsx)(t.a,{href:"../guides/api-development-strategy",children:"Future Flags"})," to enable for this Static Router. We recommend opting into newly released future flags sooner rather than later to ease your eventual migration to v7."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const router = createBrowserRouter(routes, {\n  future: {\n    // Opt-into partial hydration\n    v7_partialHydration: true,\n  },\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"The following future flags are currently available:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Flag"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../routers/create-browser-router#partial-hydration-data",children:(0,n.jsx)(t.code,{children:"v7_partialHydration"})})}),(0,n.jsx)(t.td,{children:"Support partial hydration for Server-rendered apps"})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"See also:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../routers/create-static-handler",children:(0,n.jsx)(t.code,{children:"createStaticHandler"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../routers/static-router-provider",children:(0,n.jsx)(t.code,{children:"<StaticRouterProvider>"})})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>c});var n=r(7294);const o={},a=n.createContext(o);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);