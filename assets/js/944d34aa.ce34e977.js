"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9063],{649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(5893),o=t(1151);const r={title:"Link",sidebar_position:void 0},s="<Link>",a={id:"components/link",title:"Link",description:"This is the web version of ``. For the React Native version, go here.",source:"@site/react-router/docs/components/link.md",sourceDirName:"components",slug:"/components/link",permalink:"/react-router-v6-searchable-docs/components/link",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1702503228,formattedLastUpdatedAt:"Dec 13, 2023",frontMatter:{title:"Link"},sidebar:"tutorialSidebar",previous:{title:"Link (RN)",permalink:"/react-router-v6-searchable-docs/components/link-native"},next:{title:"NavLink",permalink:"/react-router-v6-searchable-docs/components/nav-link"}},c={},l=[{value:"<code>relative</code>",id:"relative",level:2},{value:"<code>preventScrollReset</code>",id:"preventscrollreset",level:2},{value:"<code>replace</code>",id:"replace",level:2},{value:"<code>state</code>",id:"state",level:2},{value:"<code>reloadDocument</code>",id:"reloaddocument",level:2},{value:"<code>unstable_viewTransition</code>",id:"unstable_viewtransition",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"link",children:(0,i.jsx)(n.code,{children:"<Link>"})}),"\n",(0,i.jsxs)("docs-info",{children:["This is the web version of ",(0,i.jsx)(n.code,{children:"<Link>"}),". For the React Native version, ",(0,i.jsx)(n.a,{href:"./link-native",children:"go here"}),"."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Type declaration"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'declare function Link(props: LinkProps): React.ReactElement;\n\ninterface LinkProps\n  extends Omit<\n    React.AnchorHTMLAttributes<HTMLAnchorElement>,\n    "href"\n  > {\n  to: To;\n  preventScrollReset?: boolean;\n  relative?: "route" | "path";\n  reloadDocument?: boolean;\n  replace?: boolean;\n  state?: any;\n  unstable_viewTransition?: boolean;\n}\n\ntype To = string | Partial<Path>;\n\ninterface Path {\n  pathname: string;\n  search: string;\n  hash: string;\n}\n'})})]}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"<Link>"})," is an element that lets the user navigate to another page by clicking or tapping on it. In ",(0,i.jsx)(n.code,{children:"react-router-dom"}),", a ",(0,i.jsx)(n.code,{children:"<Link>"})," renders an accessible ",(0,i.jsx)(n.code,{children:"<a>"})," element with a real ",(0,i.jsx)(n.code,{children:"href"})," that points to the resource it's linking to. This means that things like right-clicking a ",(0,i.jsx)(n.code,{children:"<Link>"})," work as you'd expect. You can use ",(0,i.jsx)(n.code,{children:"<Link reloadDocument>"})," to skip client side routing and let the browser handle the transition normally (as if it were an ",(0,i.jsx)(n.code,{children:"<a href>"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import * as React from "react";\nimport { Link } from "react-router-dom";\n\nfunction UsersIndexPage({ users }) {\n  return (\n    <div>\n      <h1>Users</h1>\n      <ul>\n        {users.map((user) => (\n          <li key={user.id}>\n            <Link to={user.id}>{user.name}</Link>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["A relative ",(0,i.jsx)(n.code,{children:"<Link to>"})," value (that does not begin with ",(0,i.jsx)(n.code,{children:"/"}),") resolves relative to the parent route, which means that it builds upon the URL path that was matched by the route that rendered that ",(0,i.jsx)(n.code,{children:"<Link>"}),". It may contain ",(0,i.jsx)(n.code,{children:".."})," to link to routes further up the hierarchy. In these cases, ",(0,i.jsx)(n.code,{children:".."})," works exactly like the command-line ",(0,i.jsx)(n.code,{children:"cd"})," function; each ",(0,i.jsx)(n.code,{children:".."})," removes one segment of the parent path."]}),"\n",(0,i.jsxs)("docs-info",{children:[(0,i.jsx)(n.code,{children:"<Link to>"})," with a ",(0,i.jsx)(n.code,{children:".."})," behaves differently from a normal ",(0,i.jsx)(n.code,{children:"<a href>"})," when the current URL ends with ",(0,i.jsx)(n.code,{children:"/"}),". ",(0,i.jsx)(n.code,{children:"<Link to>"})," ignores the trailing slash, and removes one URL segment for each ",(0,i.jsx)(n.code,{children:".."}),". But an ",(0,i.jsx)(n.code,{children:"<a href>"})," value handles ",(0,i.jsx)(n.code,{children:".."})," differently when the current URL ends with ",(0,i.jsx)(n.code,{children:"/"})," vs when it does not."]}),"\n",(0,i.jsxs)("docs-info",{children:["Please see the ",(0,i.jsx)(n.a,{href:"../hooks/use-resolved-path#splat-paths",children:"Splat Paths"})," section on the ",(0,i.jsx)(n.code,{children:"useResolvedPath"})," docs for a note on the behavior of the ",(0,i.jsx)(n.code,{children:"future.v7_relativeSplatPath"})," future flag for relative ",(0,i.jsx)(n.code,{children:"<Link to>"})," behavior within splat routes"]}),"\n",(0,i.jsx)(n.h2,{id:"relative",children:(0,i.jsx)(n.code,{children:"relative"})}),"\n",(0,i.jsxs)(n.p,{children:["By default, links are relative to the route hierarchy (",(0,i.jsx)(n.code,{children:'relative="route"'}),"), so ",(0,i.jsx)(n.code,{children:".."})," will go up one ",(0,i.jsx)(n.code,{children:"Route"})," level from the current contextual route. Occasionally, you may find that you have matching URL patterns that do not make sense to be nested, and you'd prefer to use relative ",(0,i.jsx)(n.em,{children:"path"})," routing from the current contextual route path. You can opt into this behavior with ",(0,i.jsx)(n.code,{children:'relative="path"'}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'// Contact and EditContact do not share additional UI layout\n<Route path="/" element={<Layout />}>\n  <Route path="contacts/:id" element={<Contact />} />\n  <Route\n    path="contacts/:id/edit"\n    element={<EditContact />}\n  />\n</Route>;\n\nfunction EditContact() {\n  // Since Contact is not a parent of EditContact we need to go up one level\n  // in the current contextual route path, instead of one level in the Route\n  // hierarchy\n  return (\n    <Link to=".." relative="path">\n      Cancel\n    </Link>\n  );\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"preventscrollreset",children:(0,i.jsx)(n.code,{children:"preventScrollReset"})}),"\n",(0,i.jsxs)(n.p,{children:["If you are using ",(0,i.jsx)(n.a,{href:"./scroll-restoration",children:(0,i.jsx)(n.code,{children:"<ScrollRestoration>"})}),", this lets you prevent the scroll position from being reset to the top of the window when the link is clicked."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<Link to="?tab=one" preventScrollReset={true} />\n'})}),"\n",(0,i.jsx)(n.p,{children:"This does not prevent the scroll position from being restored when the user comes back to the location with the back/forward buttons, it just prevents the reset when the user clicks the link."}),"\n",(0,i.jsx)(n.p,{children:"An example when you might want this behavior is a list of tabs that manipulate the url search params that aren't at the top of the page. You wouldn't want the scroll position to jump up to the top because it might scroll the toggled content out of the viewport!"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n      \u2502                         \u251c\u2500\u2500\u2510\n      \u2502                         \u2502  \u2502\n      \u2502                         \u2502  \u2502 scrolled\n      \u2502                         \u2502  \u2502 out of view\n      \u2502                         \u2502  \u2502\n      \u2502                         \u2502 \u25c4\u2518\n    \u250c\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2510\n    \u2502                             \u251c\u2500\u2510\n    \u2502                             \u2502 \u2502 viewport\n    \u2502   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u2502 \u2502\n    \u2502   \u2502  tab   tab   tab    \u2502   \u2502 \u2502\n    \u2502   \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524   \u2502 \u2502\n    \u2502   \u2502                     \u2502   \u2502 \u2502\n    \u2502   \u2502                     \u2502   \u2502 \u2502\n    \u2502   \u2502 content             \u2502   \u2502 \u2502\n    \u2502   \u2502                     \u2502   \u2502 \u2502\n    \u2502   \u2502                     \u2502   \u2502 \u2502\n    \u2502   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2502 \u2502\n    \u2502                             \u2502\u25c4\u2518\n    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"replace",children:(0,i.jsx)(n.code,{children:"replace"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"replace"})," property can be used if you'd like to replace the current entry in the history stack via ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState",children:(0,i.jsx)(n.code,{children:"history.replaceState"})})," instead of the default usage of ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History/pushState",children:(0,i.jsx)(n.code,{children:"history.pushState"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"state",children:(0,i.jsx)(n.code,{children:"state"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"state"})," property can be used to set a stateful value for the new location which is stored inside ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History/state",children:"history state"}),". This value can subsequently be accessed via ",(0,i.jsx)(n.code,{children:"useLocation()"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<Link to="new-path" state={{ some: "value" }} />\n'})}),"\n",(0,i.jsx)(n.p,{children:'You can access this state value while on the "new-path" route:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"let { state } = useLocation();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"reloaddocument",children:(0,i.jsx)(n.code,{children:"reloadDocument"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"reloadDocument"})," property can be used to skip client side routing and let the browser handle the transition normally (as if it were an ",(0,i.jsx)(n.code,{children:"<a href>"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"unstable_viewtransition",children:(0,i.jsx)(n.code,{children:"unstable_viewTransition"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"unstable_viewTransition"})," prop enables a ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API",children:"View Transition"})," for this navigation by wrapping the final state update in ",(0,i.jsx)(n.code,{children:"document.startViewTransition()"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<Link to={to} unstable_viewTransition>\n  Click me\n</Link>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you need to apply specific styles for this view transition, you will also need to leverage the ",(0,i.jsx)(n.a,{href:"../hooks//use-view-transition-state",children:(0,i.jsx)(n.code,{children:"unstable_useViewTransitionState()"})})," hook (or check out the ",(0,i.jsx)(n.code,{children:"transitioning"})," class and ",(0,i.jsx)(n.code,{children:"isTransitioning"})," render prop in ",(0,i.jsx)(n.a,{href:"./nav-link",children:"NavLink"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'function ImageLink(to) {\n  const isTransitioning =\n    unstable_useViewTransitionState(to);\n  return (\n    <Link to={to} unstable_viewTransition>\n      <p\n        style={{\n          viewTransitionName: isTransitioning\n            ? "image-title"\n            : "",\n        }}\n      >\n        Image Number {idx}\n      </p>\n      <img\n        src={src}\n        alt={`Img ${idx}`}\n        style={{\n          viewTransitionName: isTransitioning\n            ? "image-expand"\n            : "",\n        }}\n      />\n    </Link>\n  );\n}\n'})}),"\n",(0,i.jsxs)("docs-warning",{children:[(0,i.jsx)(n.code,{children:"unstable_viewTransition"})," only works when using a data router, see ",(0,i.jsx)(n.a,{href:"../routers/picking-a-router",children:"Picking a Router"})]}),"\n",(0,i.jsx)("docs-warning",{children:"Please note that this API is marked unstable and may be subject to breaking changes without a major release"})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);