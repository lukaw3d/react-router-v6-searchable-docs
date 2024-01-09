"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8504],{9482:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=o(5893),r=o(1151);const a={title:"lazy",new:!0,sidebar_position:void 0},s="lazy",l={id:"route/lazy",title:"lazy",description:"In order to keep your application bundles small and support code-splitting of your routes, each route can provide an async function that resolves the non-route-matching portions of your route definition (loader, action, Component/element, ErrorBoundary/errorElement, etc.).",source:"@site/react-router/docs/route/lazy.md",sourceDirName:"route",slug:"/route/lazy",permalink:"/react-router-v6-searchable-docs/route/lazy",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1692382309,formattedLastUpdatedAt:"Aug 18, 2023",frontMatter:{title:"lazy",new:!0},sidebar:"tutorialSidebar",previous:{title:"hydrateFallbackElement",permalink:"/react-router-v6-searchable-docs/route/hydrate-fallback-element"},next:{title:"loader",permalink:"/react-router-v6-searchable-docs/route/loader"}},i={},d=[{value:"Statically Defined Properties",id:"statically-defined-properties",level:2},{value:"Multiple Routes in a single file",id:"multiple-routes-in-a-single-file",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lazy",children:(0,t.jsx)(n.code,{children:"lazy"})}),"\n",(0,t.jsxs)(n.p,{children:["In order to keep your application bundles small and support code-splitting of your routes, each route can provide an async function that resolves the non-route-matching portions of your route definition (",(0,t.jsx)(n.code,{children:"loader"}),", ",(0,t.jsx)(n.code,{children:"action"}),", ",(0,t.jsx)(n.code,{children:"Component"}),"/",(0,t.jsx)(n.code,{children:"element"}),", ",(0,t.jsx)(n.code,{children:"ErrorBoundary"}),"/",(0,t.jsx)(n.code,{children:"errorElement"}),", etc.)."]}),"\n",(0,t.jsxs)(n.p,{children:["Lazy routes are resolved on initial load and during the ",(0,t.jsx)(n.code,{children:"loading"})," or ",(0,t.jsx)(n.code,{children:"submitting"})," phase of a navigation or fetcher call. You cannot lazily define route-matching properties (",(0,t.jsx)(n.code,{children:"path"}),", ",(0,t.jsx)(n.code,{children:"index"}),", ",(0,t.jsx)(n.code,{children:"children"}),", ",(0,t.jsx)(n.code,{children:"caseSensitive"}),") since we only execute your lazy route functions after we've matched known routes."]}),"\n",(0,t.jsxs)("docs-warning",{children:["This feature only works if using a data router, see ",(0,t.jsx)(n.a,{href:"../routers/picking-a-router",children:"Picking a Router"})]}),"\n",(0,t.jsxs)(n.p,{children:["Each ",(0,t.jsx)(n.code,{children:"lazy"})," function will typically return the result of a dynamic import."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'let routes = createRoutesFromElements(\n  <Route path="/" element={<Layout />}>\n    <Route path="a" lazy={() => import("./a")} />\n    <Route path="b" lazy={() => import("./b")} />\n  </Route>\n);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then in your lazy route modules, export the properties you want defined for the route (",(0,t.jsx)(n.code,{children:"loader"}),", ",(0,t.jsx)(n.code,{children:"Component"}),", ",(0,t.jsx)(n.code,{children:"ErrorBoundary"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'export async function loader({ request }) {\n  let data = await fetchData(request);\n  return json(data);\n}\n\nexport function Component() {\n  let data = useLoaderData();\n\n  return (\n    <>\n      <h1>You made it!</h1>\n      <p>{data}</p>\n    </>\n  );\n}\n\n// If you want to customize the component display name in React dev tools:\nComponent.displayName = "SampleLazyRoute";\n\nexport function ErrorBoundary() {\n  let error = useRouteError();\n  return isRouteErrorResponse(error) ? (\n    <h1>\n      {error.status} {error.statusText}\n    </h1>\n  ) : (\n    <h1>{error.message || error}</h1>\n  );\n}\n\n// If you want to customize the component display name in React dev tools:\nErrorBoundary.displayName = "SampleErrorBoundary";\n'})}),"\n",(0,t.jsx)("docs-info",{children:(0,t.jsxs)(n.p,{children:["Note that there's no ",(0,t.jsx)(n.code,{children:"default"})," export in this lazy-loaded file.  That's because ",(0,t.jsx)(n.code,{children:"default"})," is not a valid key on a route object.  These files generally should only export keys you would define on a route object, such as ",(0,t.jsx)(n.code,{children:"loader"}),", ",(0,t.jsx)(n.code,{children:"action"}),", ",(0,t.jsx)(n.code,{children:"Component"}),", ",(0,t.jsx)(n.code,{children:"ErrorBoundary"}),", etc.  All exports will be spread directly on the route object unless you manually return an object from ",(0,t.jsx)(n.code,{children:"lazy"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"statically-defined-properties",children:"Statically Defined Properties"}),"\n",(0,t.jsxs)(n.p,{children:["Any properties defined statically on the route cannot be overwritten by the ",(0,t.jsx)(n.code,{children:"lazy"})," function, and you'll receive a console warning if you attempt to overwrite them."]}),"\n",(0,t.jsxs)(n.p,{children:["Additionally, as an optimization, if you statically define a ",(0,t.jsx)(n.code,{children:"loader"}),"/",(0,t.jsx)(n.code,{children:"action"})," then it will be called in parallel with the ",(0,t.jsx)(n.code,{children:"lazy"})," function. This is useful if you have slim loaders that you don't mind on the critical bundle, and would like to kick off their data fetches in parallel with the component download. This is close to how Remix handles fetching because each route is it's own API route."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'let route = {\n  path: "projects",\n  loader: ({ request }) => fetchDataForUrl(request.url),\n  lazy: () => import("./projects"),\n};\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This also allows you to do more granular code splitting. For example, you could split your ",(0,t.jsx)(n.code,{children:"loader"})," and ",(0,t.jsx)(n.code,{children:"Component"})," into different files for parallel downloading:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'let route = {\n  path: "projects",\n  async loader({ request, params }) {\n    let { loader } = await import("./projects-loader");\n    return loader({ request, params });\n  },\n  lazy: () => import("./projects-component"),\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"multiple-routes-in-a-single-file",children:"Multiple Routes in a single file"}),"\n",(0,t.jsxs)(n.p,{children:["While ",(0,t.jsx)(n.code,{children:"lazy"})," may generally be used 1:1 with an async ",(0,t.jsx)(n.code,{children:"import()"})," per route, you are free to implement a more advanced ",(0,t.jsx)(n.code,{children:"lazy"})," function and just need to return the properties you want added to that route. This opens up some interesting possibilities."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you want to avoid loading multiple chunks for nested routes, you could store them all in the same file and return them to the individual routes. Modern bundlers will latch onto the same Promise for the different ",(0,t.jsx)(n.code,{children:"import()"})," invocations."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// Assume pages/Dashboard.jsx has all of our loaders/components for multiple\n// dashboard routes\nlet dashboardRoute = {\n  path: "dashboard",\n  async lazy() {\n    let { Layout } = await import("./pages/Dashboard");\n    return { Component: Layout };\n  },\n  children: [\n    {\n      index: true,\n      async lazy() {\n        let { Index } = await import("./pages/Dashboard");\n        return { Component: Index };\n      },\n    },\n    {\n      path: "messages",\n      async lazy() {\n        let { messagesLoader, Messages } = await import(\n          "./pages/Dashboard"\n        );\n        return {\n          loader: messagesLoader,\n          Component: Messages,\n        };\n      },\n    },\n  ],\n};\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>s});var t=o(7294);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);