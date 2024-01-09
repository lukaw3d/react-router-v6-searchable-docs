"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1894],{1966:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var t=a(5893),s=a(1151);const n={title:"useSearchParams (RN)",sidebar_position:void 0},o="useSearchParams (React Native)",c={id:"hooks/use-search-params-rn",title:"useSearchParams (RN)",description:"This is the React Native version of useSearchParams. For the web version, go here.",source:"@site/react-router/docs/hooks/use-search-params-rn.md",sourceDirName:"hooks",slug:"/hooks/use-search-params-rn",permalink:"/react-router-v6-searchable-docs/hooks/use-search-params-rn",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1664661581,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{title:"useSearchParams (RN)"},sidebar:"tutorialSidebar",previous:{title:"useRoutes",permalink:"/react-router-v6-searchable-docs/hooks/use-routes"},next:{title:"useSearchParams",permalink:"/react-router-v6-searchable-docs/hooks/use-search-params"}},i={},h=[];function u(e){const r={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:a}=r;return a||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"usesearchparams-react-native",children:[(0,t.jsx)(r.code,{children:"useSearchParams"})," (React Native)"]}),"\n",(0,t.jsxs)("docs-info",{children:["This is the React Native version of ",(0,t.jsx)(r.code,{children:"useSearchParams"}),". For the web version, ",(0,t.jsx)(r.a,{href:"./use-search-params",children:"go here"}),"."]}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Type declaration"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"declare function useSearchParams(\n  defaultInit?: URLSearchParamsInit\n): [URLSearchParams, SetURLSearchParams];\n\ntype ParamKeyValuePair = [string, string];\n\ntype URLSearchParamsInit =\n  | string\n  | ParamKeyValuePair[]\n  | Record<string, string | string[]>\n  | URLSearchParams;\n\ntype SetURLSearchParams = (\n  nextInit?:\n    | URLSearchParamsInit\n    | ((prev: URLSearchParams) => URLSearchParamsInit),\n  navigateOpts?: : NavigateOptions\n) => void;\n\ninterface NavigateOptions {\n  replace?: boolean;\n  state?: any;\n  preventScrollReset?: boolean;\n}\n"})})]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"useSearchParams"})," hook is used to read and modify the query string in the URL for the current location. Like React's own ",(0,t.jsxs)(r.a,{href:"https://reactjs.org/docs/hooks-reference.html#usestate",children:[(0,t.jsx)(r.code,{children:"useState"})," hook"]}),", ",(0,t.jsx)(r.code,{children:"useSearchParams"})," returns an array of two values: the current location's ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams",children:"search params"})," and a function that may be used to update them. Just as React's ",(0,t.jsxs)(r.a,{href:"https://reactjs.org/docs/hooks-reference.html#usestate",children:[(0,t.jsx)(r.code,{children:"useState"})," hook"]}),", ",(0,t.jsx)(r.code,{children:"setSearchParams"})," also supports ",(0,t.jsx)(r.a,{href:"https://reactjs.org/docs/hooks-reference.html#functional-updates",children:"functional updates"}),". Therefore, you may provide a function that takes a ",(0,t.jsx)(r.code,{children:"searchParams"})," and returns an updated version."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import * as React from "react";\nimport { View, SearchForm, TextInput } from "react-native";\nimport { useSearchParams } from "react-router-native";\n\nfunction App() {\n  let [searchParams, setSearchParams] = useSearchParams();\n  let [query, setQuery] = React.useState(\n    searchParams.get("query")\n  );\n\n  function handleSubmit() {\n    setSearchParams({ query });\n  }\n\n  return (\n    <View>\n      <SearchForm onSubmit={handleSubmit}>\n        <TextInput value={query} onChangeText={setQuery} />\n      </SearchForm>\n    </View>\n  );\n}\n'})})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,r,a)=>{a.d(r,{Z:()=>c,a:()=>o});var t=a(7294);const s={},n=t.createContext(s);function o(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);