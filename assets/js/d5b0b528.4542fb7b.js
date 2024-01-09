"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3726],{883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(5893),i=t(1151);const o={title:"useSubmit",new:!0,sidebar_position:void 0},a="useSubmit",r={id:"hooks/use-submit",title:"useSubmit",description:"The imperative version of `` that lets you, the programmer, submit a form instead of the user.",source:"@site/react-router/docs/hooks/use-submit.md",sourceDirName:"hooks",slug:"/hooks/use-submit",permalink:"/react-router-v6-searchable-docs/hooks/use-submit",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1701794153,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{title:"useSubmit",new:!0},sidebar:"tutorialSidebar",previous:{title:"useSearchParams",permalink:"/react-router-v6-searchable-docs/hooks/use-search-params"},next:{title:"unstable_useViewTransitionState",permalink:"/react-router-v6-searchable-docs/hooks/use-view-transition-state"}},c={},l=[{value:"Submit target",id:"submit-target",level:2},{value:"Submit options",id:"submit-options",level:2},{value:"<code>options.unstable_flushSync</code>",id:"optionsunstable_flushsync",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"usesubmit",children:(0,s.jsx)(n.code,{children:"useSubmit"})}),"\n",(0,s.jsxs)(n.p,{children:["The imperative version of ",(0,s.jsx)(n.code,{children:"<Form>"})," that lets you, the programmer, submit a form instead of the user."]}),"\n",(0,s.jsxs)("docs-warning",{children:["This feature only works if using a data router, see ",(0,s.jsx)(n.a,{href:"../routers/picking-a-router",children:"Picking a Router"})]}),"\n",(0,s.jsx)(n.p,{children:"For example, submitting the form every time a value changes inside the form:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:"[8]",children:'import { useSubmit, Form } from "react-router-dom";\n\nfunction SearchField() {\n  let submit = useSubmit();\n  return (\n    <Form\n      onChange={(event) => {\n        submit(event.currentTarget);\n      }}\n    >\n      <input type="text" name="search" />\n      <button type="submit">Search</button>\n    </Form>\n  );\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This can also be useful if you'd like to automatically sign someone out of your website after a period of inactivity. In this case, we've defined inactivity as the user hasn't navigated to any other pages after 5 minutes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:"lines=[1,10,15]",children:'import { useSubmit, useLocation } from "react-router-dom";\nimport { useEffect } from "react";\n\nfunction AdminPage() {\n  useSessionTimeout();\n  return <div>{/* ... */}</div>;\n}\n\nfunction useSessionTimeout() {\n  const submit = useSubmit();\n  const location = useLocation();\n\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      submit(null, { method: "post", action: "/logout" });\n    }, 5 * 60_000);\n\n    return () => clearTimeout(timer);\n  }, [submit, location]);\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"submit-target",children:"Submit target"}),"\n",(0,s.jsx)(n.p,{children:"The first argument to submit accepts many different values."}),"\n",(0,s.jsx)(n.p,{children:"You can submit any form or form input element:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// input element events\n<input onChange={(event) => submit(event.currentTarget)} />;\n\n// React refs\nlet ref = useRef();\n<button ref={ref} />;\nsubmit(ref.current);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can submit ",(0,s.jsx)(n.code,{children:"FormData"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'let formData = new FormData();\nformData.append("cheese", "gouda");\nsubmit(formData);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Or you can submit ",(0,s.jsx)(n.code,{children:"URLSearchParams"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'let searchParams = new URLSearchParams();\nsearchParams.append("cheese", "gouda");\nsubmit(searchParams);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Or anything that the ",(0,s.jsx)(n.code,{children:"URLSearchParams"})," constructor accepts:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'submit("cheese=gouda&toasted=yes");\nsubmit([\n  ["cheese", "gouda"],\n  ["toasted", "yes"],\n]);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The default behavior if you submit a JSON object for a POST submission is to encode the data into ",(0,s.jsx)(n.code,{children:"FormData"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'submit(\n  { key: "value" },\n  {\n    method: "post",\n    encType: "application/x-www-form-urlencoded",\n  }\n);\n// will serialize into request.formData() in your action\n// and will show up on useNavigation().formData during the navigation\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or you can opt-into JSON encoding:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'submit(\n  { key: "value" },\n  { method: "post", encType: "application/json" }\n);\n// will serialize into request.json() in your action\n// and will show up on useNavigation().json during the navigation\n\nsubmit(\'{"key":"value"}\', {\n  method: "post",\n  encType: "application/json",\n});\n// will encode into request.json() in your action\n// and will show up on useNavigation().json during the navigation\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or plain text:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'submit("value", { method: "post", encType: "text/plain" });\n// will serialize into request.text() in your action\n// and will show up on useNavigation().text during the navigation\n'})}),"\n",(0,s.jsx)(n.h2,{id:"submit-options",children:"Submit options"}),"\n",(0,s.jsx)(n.p,{children:"The second argument is a set of options that map (mostly) directly to form submission attributes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'submit(null, {\n  method: "post",\n  action: "/logout",\n});\n\n// same as\n<Form action="/logout" method="post" />;\n'})}),"\n",(0,s.jsxs)("docs-info",{children:["Please see the ",(0,s.jsx)(n.a,{href:"../hooks/use-resolved-path#splat-paths",children:"Splat Paths"})," section on the ",(0,s.jsx)(n.code,{children:"useResolvedPath"})," docs for a note on the behavior of the ",(0,s.jsx)(n.code,{children:"future.v7_relativeSplatPath"})," future flag for relative ",(0,s.jsx)(n.code,{children:"useSubmit()"})," ",(0,s.jsx)(n.code,{children:"action"})," behavior within splat routes"]}),"\n",(0,s.jsxs)(n.p,{children:["Because submissions are navigations, the options may also contain the other navigation related props from ",(0,s.jsx)(n.a,{href:"../components/form",children:(0,s.jsx)(n.code,{children:"<Form>"})})," such as:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"fetcherKey"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"navigate"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"preventScrollReset"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"relative"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"replace"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"state"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"unstable_viewTransition"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"optionsunstable_flushsync",children:(0,s.jsx)(n.code,{children:"options.unstable_flushSync"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"unstable_flushSync"})," option tells React Router DOM to wrap the initial state update for this submission in a ",(0,s.jsx)(n.a,{href:"https://react.dev/reference/react-dom/flushSync",children:(0,s.jsx)(n.code,{children:"ReactDOM.flushSync"})})," call instead of the default ",(0,s.jsx)(n.a,{href:"https://react.dev/reference/react/startTransition",children:(0,s.jsx)(n.code,{children:"React.startTransition"})}),". This allows you to perform synchronous DOM actions immediately after the update is flushed to the DOM."]}),"\n",(0,s.jsx)("docs-warning",{children:"Please note that this API is marked unstable and may be subject to breaking changes without a major release"})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(7294);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);