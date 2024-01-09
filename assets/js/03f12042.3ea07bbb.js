"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[564],{5753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=n(5893),o=n(1151);const s={title:"useFetcher",new:!0,sidebar_position:void 0},i="useFetcher",c={id:"hooks/use-fetcher",title:"useFetcher",description:"In HTML/HTTP, data mutations and loads are modeled with navigation: ` and . Both cause a navigation in the browser. The React Router equivalents are  and `.",source:"@site/react-router/docs/hooks/use-fetcher.md",sourceDirName:"hooks",slug:"/hooks/use-fetcher",permalink:"/react-router-v6-searchable-docs/hooks/use-fetcher",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1699912443,formattedLastUpdatedAt:"Nov 13, 2023",frontMatter:{title:"useFetcher",new:!0},sidebar:"tutorialSidebar",previous:{title:"useBlocker",permalink:"/react-router-v6-searchable-docs/hooks/use-blocker"},next:{title:"useFetchers",permalink:"/react-router-v6-searchable-docs/hooks/use-fetchers"}},a={},h=[{value:"Options",id:"options",level:2},{value:"<code>key</code>",id:"key",level:3},{value:"Components",id:"components",level:2},{value:"<code>fetcher.Form</code>",id:"fetcherform",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>fetcher.load(href, options)</code>",id:"fetcherloadhref-options",level:3},{value:"<code>options.unstable_flushSync</code>",id:"optionsunstable_flushsync",level:4},{value:"<code>fetcher.submit()</code>",id:"fetchersubmit",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>fetcher.state</code>",id:"fetcherstate",level:3},{value:"<code>fetcher.data</code>",id:"fetcherdata",level:3},{value:"<code>fetcher.formData</code>",id:"fetcherformdata",level:3},{value:"<code>fetcher.json</code>",id:"fetcherjson",level:3},{value:"<code>fetcher.text</code>",id:"fetchertext",level:3},{value:"<code>fetcher.formAction</code>",id:"fetcherformaction",level:3},{value:"<code>fetcher.formMethod</code>",id:"fetcherformmethod",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"usefetcher",children:(0,r.jsx)(t.code,{children:"useFetcher"})}),"\n",(0,r.jsxs)(t.p,{children:["In HTML/HTTP, data mutations and loads are modeled with navigation: ",(0,r.jsx)(t.code,{children:"<a href>"})," and ",(0,r.jsx)(t.code,{children:"<form action>"}),". Both cause a navigation in the browser. The React Router equivalents are ",(0,r.jsx)(t.a,{href:"../components/link",children:(0,r.jsx)(t.code,{children:"<Link>"})})," and ",(0,r.jsx)(t.a,{href:"../components/form",children:(0,r.jsx)(t.code,{children:"<Form>"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["But sometimes you want to call a ",(0,r.jsx)(t.a,{href:"../route/loader",children:(0,r.jsx)(t.code,{children:"loader"})})," outside of navigation, or call an ",(0,r.jsx)(t.a,{href:"../route/action",children:(0,r.jsx)(t.code,{children:"action"})})," (and get the data on the page to revalidate) without changing the URL. Or you need to have multiple mutations in-flight at the same time."]}),"\n",(0,r.jsx)(t.p,{children:"Many interactions with the server aren't navigation events. This hook lets you plug your UI into your actions and loaders without navigating."}),"\n",(0,r.jsxs)("docs-warning",{children:["This feature only works if using a data router, see ",(0,r.jsx)(t.a,{href:"../routers/picking-a-router",children:"Picking a Router"})]}),"\n",(0,r.jsx)(t.p,{children:"This is useful when you need to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"fetch data not associated with UI routes (popovers, dynamic forms, etc.)"}),"\n",(0,r.jsx)(t.li,{children:"submit data to actions without navigating (shared components like a newsletter sign ups)"}),"\n",(0,r.jsx)(t.li,{children:'handle multiple concurrent submissions in a list (typical "todo app" list where you can click multiple buttons and all should be pending at the same time)'}),"\n",(0,r.jsx)(t.li,{children:"infinite scroll containers"}),"\n",(0,r.jsx)(t.li,{children:"and more!"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:['If you\'re building a highly interactive, "app like" user interface, you will ',(0,r.jsx)(t.code,{children:"useFetcher"})," often."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { useFetcher } from "react-router-dom";\n\nfunction SomeComponent() {\n  const fetcher = useFetcher();\n\n  // call submit or load in a useEffect\n  React.useEffect(() => {\n    fetcher.submit(data, options);\n    fetcher.load(href);\n  }, [fetcher]);\n\n  // build your UI with these properties\n  fetcher.state;\n  fetcher.formData;\n  fetcher.json;\n  fetcher.text;\n  fetcher.formMethod;\n  fetcher.formAction;\n  fetcher.data;\n\n  // render a form that doesn\'t cause navigation\n  return <fetcher.Form />;\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Fetchers have a lot of built-in behavior:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Automatically handles cancellation on interruptions of the fetch"}),"\n",(0,r.jsxs)(t.li,{children:["When submitting with POST, PUT, PATCH, DELETE, the action is called first","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"After the action completes, the data on the page is revalidated to capture any mutations that may have happened, automatically keeping your UI in sync with your server state"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["When multiple fetchers are inflight at once, it will","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"commit the freshest available data as they each land"}),"\n",(0,r.jsx)(t.li,{children:"ensure no stale loads override fresher data, no matter which order the responses return"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Handles uncaught errors by rendering the nearest ",(0,r.jsx)(t.code,{children:"errorElement"})," (just like a normal navigation from ",(0,r.jsx)(t.code,{children:"<Link>"})," or ",(0,r.jsx)(t.code,{children:"<Form>"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["Will redirect the app if your action/loader being called returns a redirect (just like a normal navigation from ",(0,r.jsx)(t.code,{children:"<Link>"})," or ",(0,r.jsx)(t.code,{children:"<Form>"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(t.h3,{id:"key",children:(0,r.jsx)(t.code,{children:"key"})}),"\n",(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.code,{children:"useFetcher"})," generate a unique fetcher scoped to that component (however, it may be looked up in ",(0,r.jsx)(t.a,{href:"./use-fetchers",children:(0,r.jsx)(t.code,{children:"useFetchers()"})})," while in-flight). If you want to identify a fetcher with your own ",(0,r.jsx)(t.code,{children:"key"})," such that you can access it from elsewhere in your app, you can do that with the ",(0,r.jsx)(t.code,{children:"key"})," option:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:"lines=[2,8]",children:'function AddToBagButton() {\n  const fetcher = useFetcher({ key: "add-to-bag" });\n  return <fetcher.Form method="post">...</fetcher.Form>;\n}\n\n// Then, up in the header...\nfunction CartCount({ count }) {\n  const fetcher = useFetcher({ key: "add-to-bag" });\n  const inFlightCount = Number(\n    fetcher.formData?.get("quantity") || 0\n  );\n  const optimisticCount = count + inFlightCount;\n  return (\n    <>\n      <BagIcon />\n      <span>{optimisticCount}</span>\n    </>\n  );\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,r.jsx)(t.h3,{id:"fetcherform",children:(0,r.jsx)(t.code,{children:"fetcher.Form"})}),"\n",(0,r.jsxs)(t.p,{children:["Just like ",(0,r.jsx)(t.code,{children:"<Form>"})," except it doesn't cause a navigation. ",(0,r.jsx)("small",{children:"(You'll get over the dot in JSX ... we hope!)"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'function SomeComponent() {\n  const fetcher = useFetcher();\n  return (\n    <fetcher.Form method="post" action="/some/route">\n      <input type="text" />\n    </fetcher.Form>\n  );\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.h3,{id:"fetcherloadhref-options",children:(0,r.jsx)(t.code,{children:"fetcher.load(href, options)"})}),"\n",(0,r.jsx)(t.p,{children:"Loads data from a route loader."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:"lines=[8]",children:'import { useFetcher } from "react-router-dom";\n\nfunction SomeComponent() {\n  const fetcher = useFetcher();\n\n  useEffect(() => {\n    if (fetcher.state === "idle" && !fetcher.data) {\n      fetcher.load("/some/route");\n    }\n  }, [fetcher]);\n\n  return <div>{fetcher.data || "Loading..."}</div>;\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Although a URL might match multiple nested routes, a ",(0,r.jsx)(t.code,{children:"fetcher.load()"})," call will only call the loader on the leaf match (or parent of ",(0,r.jsx)(t.a,{href:"../guides/index-search-param",children:"index routes"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["If you find yourself calling this function inside of click handlers, you can probably simplify your code by using ",(0,r.jsx)(t.code,{children:"<fetcher.Form>"})," instead."]}),"\n",(0,r.jsxs)("docs-info",{children:["Any ",(0,r.jsx)(t.code,{children:"fetcher.load"})," calls that are active on the page will be re-executed as part of revalidation (either after a navigation submission, another fetcher submission, or a ",(0,r.jsx)(t.code,{children:"useRevalidator()"})," call)"]}),"\n",(0,r.jsx)(t.h4,{id:"optionsunstable_flushsync",children:(0,r.jsx)(t.code,{children:"options.unstable_flushSync"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"unstable_flushSync"})," option tells React Router DOM to wrap the initial state update for this ",(0,r.jsx)(t.code,{children:"fetcher.load"})," in a ",(0,r.jsx)(t.a,{href:"https://react.dev/reference/react-dom/flushSync",children:(0,r.jsx)(t.code,{children:"ReactDOM.flushSync"})})," call instead of the default ",(0,r.jsx)(t.a,{href:"https://react.dev/reference/react/startTransition",children:(0,r.jsx)(t.code,{children:"React.startTransition"})}),". This allows you to perform synchronous DOM actions immediately after the update is flushed to the DOM."]}),"\n",(0,r.jsx)("docs-warning",{children:"Please note that this API is marked unstable and may be subject to breaking changes without a major release"}),"\n",(0,r.jsx)(t.h3,{id:"fetchersubmit",children:(0,r.jsx)(t.code,{children:"fetcher.submit()"})}),"\n",(0,r.jsxs)(t.p,{children:["The imperative version of ",(0,r.jsx)(t.code,{children:"<fetcher.Form>"}),". If a user interaction should initiate the fetch, you should use ",(0,r.jsx)(t.code,{children:"<fetcher.Form>"}),". But if you, the programmer are initiating the fetch (not in response to a user clicking a button, etc.), then use this function."]}),"\n",(0,r.jsx)(t.p,{children:"For example, you may want to log the user out after a certain amount of idle time:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:"lines=[1,5,10-13]",children:'import { useFetcher } from "react-router-dom";\nimport { useFakeUserIsIdle } from "./fake/hooks";\n\nexport function useIdleLogout() {\n  const fetcher = useFetcher();\n  const userIsIdle = useFakeUserIsIdle();\n\n  useEffect(() => {\n    if (userIsIdle) {\n      fetcher.submit(\n        { idle: true },\n        { method: "post", action: "/logout" }\n      );\n    }\n  }, [userIsIdle]);\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"fetcher.submit"})," is a wrapper around a ",(0,r.jsx)(t.a,{href:"./use-submit",children:(0,r.jsx)(t.code,{children:"useSubmit"})})," call for the fetcher instance, so it also accepts the same options as ",(0,r.jsx)(t.code,{children:"useSubmit"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to submit to an index route, use the ",(0,r.jsxs)(t.a,{href:"../guides/index-search-param",children:[(0,r.jsx)(t.code,{children:"?index"})," param"]}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you find yourself calling this function inside of click handlers, you can probably simplify your code by using ",(0,r.jsx)(t.code,{children:"<fetcher.Form>"})," instead."]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h3,{id:"fetcherstate",children:(0,r.jsx)(t.code,{children:"fetcher.state"})}),"\n",(0,r.jsxs)(t.p,{children:["You can know the state of the fetcher with ",(0,r.jsx)(t.code,{children:"fetcher.state"}),". It will be one of:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"idle"})," - nothing is being fetched."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"submitting"})," - A route action is being called due to a fetcher submission using POST, PUT, PATCH, or DELETE"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"loading"})," - The fetcher is calling a loader (from a ",(0,r.jsx)(t.code,{children:"fetcher.load"}),") or is being revalidated after a separate submission or ",(0,r.jsx)(t.code,{children:"useRevalidator"})," call"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"fetcherdata",children:(0,r.jsx)(t.code,{children:"fetcher.data"})}),"\n",(0,r.jsx)(t.p,{children:"The returned data from the loader or action is stored here. Once the data is set, it persists on the fetcher even through reloads and resubmissions."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'function ProductDetails({ product }) {\n  const fetcher = useFetcher();\n\n  return (\n    <details\n      onToggle={(event) => {\n        if (\n          event.currentTarget.open &&\n          fetcher.state === "idle" &&\n          !fetcher.data\n        ) {\n          fetcher.load(`/product/${product.id}/details`);\n        }\n      }}\n    >\n      <summary>{product.name}</summary>\n      {fetcher.data ? (\n        <div>{fetcher.data}</div>\n      ) : (\n        <div>Loading product details...</div>\n      )}\n    </details>\n  );\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"fetcherformdata",children:(0,r.jsx)(t.code,{children:"fetcher.formData"})}),"\n",(0,r.jsxs)(t.p,{children:["When using ",(0,r.jsx)(t.code,{children:"<fetcher.Form>"})," or ",(0,r.jsx)(t.code,{children:"fetcher.submit()"}),", the form data is available to build optimistic UI."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'function TaskCheckbox({ task }) {\n  let fetcher = useFetcher();\n\n  // while data is in flight, use that to immediately render\n  // the state you expect the task to be in when the form\n  // submission completes, instead of waiting for the\n  // network to respond. When the network responds, the\n  // formData will no longer be available and the UI will\n  // use the value in `task.status` from the revalidation\n  let status =\n    fetcher.formData?.get("status") || task.status;\n\n  let isComplete = status === "complete";\n\n  return (\n    <fetcher.Form method="post">\n      <button\n        type="submit"\n        name="status"\n        value={isComplete ? "complete" : "incomplete"}\n      >\n        {isComplete ? "Mark Complete" : "Mark Incomplete"}\n      </button>\n    </fetcher.Form>\n  );\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"fetcherjson",children:(0,r.jsx)(t.code,{children:"fetcher.json"})}),"\n",(0,r.jsxs)(t.p,{children:["When using ",(0,r.jsx)(t.code,{children:'fetcher.submit(data, { formEncType: "application/json" })'}),", the submitted JSON is available via ",(0,r.jsx)(t.code,{children:"fetcher.json"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"fetchertext",children:(0,r.jsx)(t.code,{children:"fetcher.text"})}),"\n",(0,r.jsxs)(t.p,{children:["When using ",(0,r.jsx)(t.code,{children:'fetcher.submit(data, { formEncType: "text/plain" })'}),", the submitted text is available via ",(0,r.jsx)(t.code,{children:"fetcher.text"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"fetcherformaction",children:(0,r.jsx)(t.code,{children:"fetcher.formAction"})}),"\n",(0,r.jsx)(t.p,{children:"Tells you the action url the form is being submitted to."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<fetcher.Form action="/mark-as-read" />;\n\n// when the form is submitting\nfetcher.formAction; // "mark-as-read"\n'})}),"\n",(0,r.jsx)(t.h3,{id:"fetcherformmethod",children:(0,r.jsx)(t.code,{children:"fetcher.formMethod"})}),"\n",(0,r.jsx)(t.p,{children:"Tells you the method of the form being submitted: get, post, put, patch, or delete."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<fetcher.Form method="post" />;\n\n// when the form is submitting\nfetcher.formMethod; // "post"\n'})}),"\n",(0,r.jsxs)("docs-warning",{children:["The ",(0,r.jsx)(t.code,{children:"fetcher.formMethod"})," field is lowercase without the ",(0,r.jsx)(t.code,{children:"future.v7_normalizeFormMethod"})," ",(0,r.jsx)(t.a,{href:"../guides/api-development-strategy",children:"Future Flag"}),". This is being normalized to uppercase to align with the ",(0,r.jsx)(t.code,{children:"fetch()"})," behavior in v7, so please upgrade your React Router v6 applications to adopt the uppercase HTTP methods."]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var r=n(7294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);