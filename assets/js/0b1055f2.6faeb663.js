"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7848],{2055:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(5893),s=r(1151);const o={title:"useLinkPressHandler",sidebar_position:void 0},a="useLinkPressHandler",i={id:"hooks/use-link-press-handler",title:"useLinkPressHandler",description:"Type declaration",source:"@site/react-router/docs/hooks/use-link-press-handler.md",sourceDirName:"hooks",slug:"/hooks/use-link-press-handler",permalink:"/react-router-v6-searchable-docs/hooks/use-link-press-handler",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1652450285,formattedLastUpdatedAt:"May 13, 2022",frontMatter:{title:"useLinkPressHandler"},sidebar:"tutorialSidebar",previous:{title:"useLinkClickHandler",permalink:"/react-router-v6-searchable-docs/hooks/use-link-click-handler"},next:{title:"useLoaderData",permalink:"/react-router-v6-searchable-docs/hooks/use-loader-data"}},l={},c=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"uselinkpresshandler",children:(0,t.jsx)(n.code,{children:"useLinkPressHandler"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Type declaration"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"declare function useLinkPressHandler(\n  to: To,\n  options?: {\n    replace?: boolean;\n    state?: any;\n  }\n): (event: GestureResponderEvent) => void;\n"})})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"react-router-native"})," counterpart to ",(0,t.jsx)(n.code,{children:"useLinkClickHandler"}),", ",(0,t.jsx)(n.code,{children:"useLinkPressHandler"})," returns a press event handler for custom ",(0,t.jsx)(n.code,{children:"<Link>"})," navigation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { TouchableHighlight } from "react-native";\nimport { useLinkPressHandler } from "react-router-native";\n\nfunction Link({\n  onPress,\n  replace = false,\n  state,\n  to,\n  ...rest\n}) {\n  let handlePress = useLinkPressHandler(to, {\n    replace,\n    state,\n  });\n\n  return (\n    <TouchableHighlight\n      {...rest}\n      onPress={(event) => {\n        onPress?.(event);\n        if (!event.defaultPrevented) {\n          handlePress(event);\n        }\n      }}\n    />\n  );\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var t=r(7294);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);