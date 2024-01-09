"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9450],{2026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(5893),s=n(1151);const o={title:"unstable_useViewTransitionState",sidebar_position:void 0},a="unstable_useViewTransitionState",r={id:"hooks/use-view-transition-state",title:"unstable_useViewTransitionState",description:"Type declaration",source:"@site/react-router/docs/hooks/use-view-transition-state.md",sourceDirName:"hooks",slug:"/hooks/use-view-transition-state",permalink:"/react-router-v6-searchable-docs/hooks/use-view-transition-state",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1702600918,formattedLastUpdatedAt:"Dec 15, 2023",frontMatter:{title:"unstable_useViewTransitionState"},sidebar:"tutorialSidebar",previous:{title:"useSubmit",permalink:"/react-router-v6-searchable-docs/hooks/use-submit"},next:{title:"Fetch Utilities",permalink:"/react-router-v6-searchable-docs/fetch/index"}},c={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"unstable_useviewtransitionstate",children:(0,i.jsx)(t.code,{children:"unstable_useViewTransitionState"})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Type declaration"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'declare function unstable_useViewTransitionState(\n  to: To,\n  opts: { relative?: "route" : "path" } = {}\n): boolean;\n\ntype To = string | Partial<Path>;\n\ninterface Path {\n  pathname: string;\n  search: string;\n  hash: string;\n}\n'})})]}),"\n",(0,i.jsxs)(t.p,{children:["This hook returns ",(0,i.jsx)(t.code,{children:"true"})," when there is an active ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API",children:"View Transition"})," to the specified location. This can be used to apply finer-grained styles to elements to further customize the view transition. This requires that view transitions have been enabled for the given navigation via the ",(0,i.jsx)(t.a,{href:"../components/link#unstable_viewtransition",children:"unstable_viewTransition"})," prop on the ",(0,i.jsx)(t.code,{children:"Link"})," (or the ",(0,i.jsx)(t.code,{children:"Form"}),", ",(0,i.jsx)(t.code,{children:"navigate"}),", or ",(0,i.jsx)(t.code,{children:"submit"})," call)."]}),"\n",(0,i.jsx)(t.p,{children:"Consider clicking on an image in a list that you need to expand into the hero image on the destination page:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'function NavImage({ src, alt, id }) {\n  const to = `/images/${id}`;\n  const isTransitioning =\n    unstable_useViewTransitionState(to);\n  return (\n    <Link to={to} unstable_viewTransition>\n      <img\n        src={src}\n        alt={alt}\n        style={{\n          viewTransitionName: isTransitioning\n            ? "image-expand"\n            : "",\n        }}\n      />\n    </Link>\n  );\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(7294);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);