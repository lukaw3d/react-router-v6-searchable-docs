"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8610],{4213:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=t(5893),o=t(1151);const a={title:"createBrowserRouter",new:!0,sidebar_position:void 0},s="createBrowserRouter",d={id:"routers/create-browser-router",title:"createBrowserRouter",description:"This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.",source:"@site/react-router/docs/routers/create-browser-router.md",sourceDirName:"routers",slug:"/routers/create-browser-router",permalink:"/react-router-v6-searchable-docs/routers/create-browser-router",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1702506174,formattedLastUpdatedAt:"Dec 13, 2023",frontMatter:{title:"createBrowserRouter",new:!0},sidebar:"tutorialSidebar",previous:{title:"Picking a Router",permalink:"/react-router-v6-searchable-docs/routers/picking-a-router"},next:{title:"createHashRouter",permalink:"/react-router-v6-searchable-docs/routers/create-hash-router"}},i={},l=[{value:"Type Declaration",id:"type-declaration",level:2},{value:"<code>routes</code>",id:"routes",level:2},{value:"<code>basename</code>",id:"basename",level:2},{value:"<code>future</code>",id:"future",level:2},{value:"<code>hydrationData</code>",id:"hydrationdata",level:2},{value:"Partial Hydration Data",id:"partial-hydration-data",level:3},{value:"<code>window</code>",id:"window",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"createbrowserrouter",children:(0,n.jsx)(r.code,{children:"createBrowserRouter"})}),"\n",(0,n.jsxs)(r.p,{children:["This is the recommended router for all React Router web projects. It uses the ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History",children:"DOM History API"})," to update the URL and manage the history stack."]}),"\n",(0,n.jsxs)(r.p,{children:["It also enables the v6.4 data APIs like ",(0,n.jsx)(r.a,{href:"../route/loader",children:"loaders"}),", ",(0,n.jsx)(r.a,{href:"../route/action",children:"actions"}),", ",(0,n.jsx)(r.a,{href:"../hooks/use-fetcher",children:"fetchers"})," and more."]}),"\n",(0,n.jsxs)("docs-info",{children:["Due to the decoupling of fetching and rendering in the design of the data APIs, you should create your router outside of the React tree with a statically defined set of routes. For more information on this design, please see the ",(0,n.jsx)(r.a,{href:"https://remix.run/blog/remixing-react-router",children:"Remixing React Router"})," blog post and the ",(0,n.jsx)(r.a,{href:"https://www.youtube.com/watch?v=95B8mnhzoCM",children:"When to Fetch"})," conference talk."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",metastring:"lines=[4,11-24]",children:'import * as React from "react";\nimport * as ReactDOM from "react-dom";\nimport {\n  createBrowserRouter,\n  RouterProvider,\n} from "react-router-dom";\n\nimport Root, { rootLoader } from "./routes/root";\nimport Team, { teamLoader } from "./routes/team";\n\nconst router = createBrowserRouter([\n  {\n    path: "/",\n    element: <Root />,\n    loader: rootLoader,\n    children: [\n      {\n        path: "team",\n        element: <Team />,\n        loader: teamLoader,\n      },\n    ],\n  },\n]);\n\nReactDOM.createRoot(document.getElementById("root")).render(\n  <RouterProvider router={router} />\n);\n'})}),"\n",(0,n.jsx)(r.h2,{id:"type-declaration",children:"Type Declaration"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"function createBrowserRouter(\n  routes: RouteObject[],\n  opts?: {\n    basename?: string;\n    future?: FutureConfig;\n    hydrationData?: HydrationState;\n    window?: Window;\n  }\n): RemixRouter;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"routes",children:(0,n.jsx)(r.code,{children:"routes"})}),"\n",(0,n.jsxs)(r.p,{children:["An array of ",(0,n.jsx)(r.a,{href:"../route/route",children:(0,n.jsx)(r.code,{children:"Route"})})," objects with nested routes on the ",(0,n.jsx)(r.code,{children:"children"})," property."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'createBrowserRouter([\n  {\n    path: "/",\n    element: <Root />,\n    loader: rootLoader,\n    children: [\n      {\n        path: "events/:id",\n        element: <Event />,\n        loader: eventLoader,\n      },\n    ],\n  },\n]);\n'})}),"\n",(0,n.jsx)(r.h2,{id:"basename",children:(0,n.jsx)(r.code,{children:"basename"})}),"\n",(0,n.jsx)(r.p,{children:"The basename of the app for situations where you can't deploy to the root of the domain, but a sub directory."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'createBrowserRouter(routes, {\n  basename: "/app",\n});\n'})}),"\n",(0,n.jsx)(r.p,{children:"The trailing slash will be respected when linking to the root:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'createBrowserRouter(routes, {\n  basename: "/app",\n});\n<Link to="/" />; // results in <a href="/app" />\n\ncreateBrowserRouter(routes, {\n  basename: "/app/",\n});\n<Link to="/" />; // results in <a href="/app/" />\n'})}),"\n",(0,n.jsx)(r.h2,{id:"future",children:(0,n.jsx)(r.code,{children:"future"})}),"\n",(0,n.jsxs)(r.p,{children:["An optional set of ",(0,n.jsx)(r.a,{href:"../guides/api-development-strategy",children:"Future Flags"})," to enable for this Router. We recommend opting into newly released future flags sooner rather than later to ease your eventual migration to v7."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const router = createBrowserRouter(routes, {\n  future: {\n    // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase\n    v7_normalizeFormMethod: true,\n  },\n});\n"})}),"\n",(0,n.jsx)(r.p,{children:"The following future flags are currently available:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Flag"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"v7_fetcherPersist"})}),(0,n.jsxs)(r.td,{children:["Delay active fetcher cleanup until they return to an ",(0,n.jsx)(r.code,{children:"idle"})," state"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"v7_normalizeFormMethod"})}),(0,n.jsxs)(r.td,{children:["Normalize ",(0,n.jsx)(r.code,{children:"useNavigation().formMethod"})," to be an uppercase HTTP Method"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"v7_partialHydration"})}),(0,n.jsx)(r.td,{children:"Support partial hydration for Server-rendered apps"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"v7_prependBasename"})}),(0,n.jsx)(r.td,{children:"Prepend the router basename to navigate/fetch paths"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"../hooks/use-resolved-path#splat-paths",children:(0,n.jsx)(r.code,{children:"v7_relativeSplatPath"})})}),(0,n.jsx)(r.td,{children:"Fix buggy relative path resolution in splat routes"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"hydrationdata",children:(0,n.jsx)(r.code,{children:"hydrationData"})}),"\n",(0,n.jsxs)(r.p,{children:["When ",(0,n.jsx)(r.a,{href:"../guides/ssr",children:"Server-Rendering"})," and ",(0,n.jsx)(r.a,{href:"../routers/static-router-provider#hydrate",children:"opting-out of automatic hydration"}),", the ",(0,n.jsx)(r.code,{children:"hydrationData"})," option allows you to pass in hydration data from your server-render. This will almost always be a subset of data from the ",(0,n.jsx)(r.code,{children:"StaticHandlerContext"})," value you get back from ",(0,n.jsx)(r.a,{href:"./create-static-handler#handlerqueryrequest-opts",children:"handler.query"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const router = createBrowserRouter(routes, {\n  hydrationData: {\n    loaderData: {\n      // [routeId]: serverLoaderData\n    },\n    // may also include `errors` and/or `actionData`\n  },\n});\n"})}),"\n",(0,n.jsx)(r.h3,{id:"partial-hydration-data",children:"Partial Hydration Data"}),"\n",(0,n.jsxs)(r.p,{children:["You will almost always include a complete set of ",(0,n.jsx)(r.code,{children:"loaderData"})," to hydrate a server-rendered app. But in advanced use-cases (such as Remix's ",(0,n.jsx)(r.a,{href:"https://remix.run/route/client-loader",children:(0,n.jsx)(r.code,{children:"clientLoader"})}),"), you may want to include ",(0,n.jsx)(r.code,{children:"loaderData"})," for only ",(0,n.jsx)(r.em,{children:"some"})," routes that were rendered on the server. If you want to enable partial ",(0,n.jsx)(r.code,{children:"loaderData"})," and opt-into granular ",(0,n.jsx)(r.a,{href:"../route/hydrate-fallback-element",children:(0,n.jsx)(r.code,{children:"route.HydrateFallback"})})," usage, you will need to enable the ",(0,n.jsx)(r.code,{children:"future.v7_partialHydration"})," flag. Prior to this flag, any provided ",(0,n.jsx)(r.code,{children:"loaderData"})," was assumed to be complete and would not result in the execution of route loaders on initial hydration."]}),"\n",(0,n.jsx)(r.p,{children:"When this flag is specified, loaders will run on initial hydration in 2 scenarios:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["No hydration data is provided","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["In these cases the ",(0,n.jsx)(r.code,{children:"HydrateFallback"})," component will render on initial hydration"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.code,{children:"loader.hydrate"})," property is set to ",(0,n.jsx)(r.code,{children:"true"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["This allows you to run the ",(0,n.jsx)(r.code,{children:"loader"})," even if you did not render a fallback on initial hydration (i.e., to prime a cache with hydration data)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'const router = createBrowserRouter(\n  [\n    {\n      id: "root",\n      loader: rootLoader,\n      Component: Root,\n      children: [\n        {\n          id: "index",\n          loader: indexLoader,\n          HydrateFallback: IndexSkeleton,\n          Component: Index,\n        },\n      ],\n    },\n  ],\n  {\n    future: {\n      v7_partialHydration: true,\n    },\n    hydrationData: {\n      loaderData: {\n        root: "ROOT DATA",\n        // No index data provided\n      },\n    },\n  }\n);\n'})}),"\n",(0,n.jsx)(r.h2,{id:"window",children:(0,n.jsx)(r.code,{children:"window"})}),"\n",(0,n.jsxs)(r.p,{children:["Useful for environments like browser devtool plugins or testing to use a different window than the global ",(0,n.jsx)(r.code,{children:"window"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>s});var n=t(7294);const o={},a=n.createContext(o);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);