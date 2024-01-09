"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5382],{6894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var o=t(5893),r=t(1151);const s={title:"FAQs",order:4,sidebar_position:4},a="FAQs",i={id:"start/faq",title:"FAQs",description:"Here are some questions that people commonly have about React Router v6. You might also find what you're looking for in the examples.",source:"@site/react-router/docs/start/faq.md",sourceDirName:"start",slug:"/start/faq",permalink:"/react-router-v6-searchable-docs/start/faq",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1678894397,formattedLastUpdatedAt:"Mar 15, 2023",sidebarPosition:4,frontMatter:{title:"FAQs",order:4,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/react-router-v6-searchable-docs/start/examples"},next:{title:"Main Concepts",permalink:"/react-router-v6-searchable-docs/start/concepts"}},c={},h=[{value:"What happened to withRouter? I need it!",id:"what-happened-to-withrouter-i-need-it",level:2},{value:"Why does <code>&lt;Route&gt;</code> have an <code>element</code> prop instead of <code>render</code> or <code>component</code>?",id:"why-does-route-have-an-element-prop-instead-of-render-or-component",level:2},{value:"How do I add a No Match (404) Route in react-router v6?",id:"how-do-i-add-a-no-match-404-route-in-react-router-v6",level:2},{value:"<code>&lt;Route&gt;</code> doesn&#39;t render? How do I compose?",id:"route-doesnt-render-how-do-i-compose",level:2},{value:"How do I nest routes deep in the tree?",id:"how-do-i-nest-routes-deep-in-the-tree",level:2},{value:"What Happened to Regexp Routes Paths?",id:"what-happened-to-regexp-routes-paths",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"faqs",children:"FAQs"}),"\n",(0,o.jsxs)(n.p,{children:["Here are some questions that people commonly have about React Router v6. You might also find what you're looking for in the ",(0,o.jsx)(n.a,{href:"https://github.com/remix-run/react-router/tree/dev/examples",children:"examples"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"what-happened-to-withrouter-i-need-it",children:"What happened to withRouter? I need it!"}),"\n",(0,o.jsx)(n.p,{children:"This question usually stems from the fact that you're using React class components, which don't support hooks. In React Router v6, we fully embraced hooks and use them to share all the router's internal state. But that doesn't mean you can't use the router. Assuming you can actually use hooks (you're on React 16.8+), you just need a wrapper."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import {\n  useLocation,\n  useNavigate,\n  useParams,\n} from "react-router-dom";\n\nfunction withRouter(Component) {\n  function ComponentWithRouterProp(props) {\n    let location = useLocation();\n    let navigate = useNavigate();\n    let params = useParams();\n    return (\n      <Component\n        {...props}\n        router={{ location, navigate, params }}\n      />\n    );\n  }\n\n  return ComponentWithRouterProp;\n}\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"why-does-route-have-an-element-prop-instead-of-render-or-component",children:["Why does ",(0,o.jsx)(n.code,{children:"<Route>"})," have an ",(0,o.jsx)(n.code,{children:"element"})," prop instead of ",(0,o.jsx)(n.code,{children:"render"})," or ",(0,o.jsx)(n.code,{children:"component"}),"?"]}),"\n",(0,o.jsxs)(n.p,{children:["In React Router v6 we switched from using v5's ",(0,o.jsx)(n.code,{children:"<Route component>"})," and ",(0,o.jsx)(n.code,{children:"<Route render>"})," APIs to ",(0,o.jsx)(n.code,{children:"<Route element>"}),". Why is that?"]}),"\n",(0,o.jsxs)(n.p,{children:["For starters, we see React itself taking the lead here with the ",(0,o.jsx)(n.code,{children:"<Suspense fallback={<Spinner />}>"})," API. The ",(0,o.jsx)(n.code,{children:"fallback"})," prop takes a React ",(0,o.jsx)(n.strong,{children:"element"}),", not a ",(0,o.jsx)(n.strong,{children:"component"}),". This lets you easily pass whatever props you want to your ",(0,o.jsx)(n.code,{children:"<Spinner>"})," from the component that renders it."]}),"\n",(0,o.jsxs)(n.p,{children:["Using elements instead of components means we don't have to provide a ",(0,o.jsx)(n.code,{children:"passProps"}),"-style API, so you can get the props you need to your elements. For example, in a component-based API there is no good way to pass props to the ",(0,o.jsx)(n.code,{children:"<Profile>"})," element that is rendered when ",(0,o.jsx)(n.code,{children:'<Route path=":userId" component={Profile} />'})," matches. Most React libraries who take this approach end up with either an API like ",(0,o.jsx)(n.code,{children:"<Route component={Profile} passProps={{ animate: true }} />"})," or use a render prop or higher-order component."]}),"\n",(0,o.jsxs)(n.p,{children:["Also, ",(0,o.jsx)(n.code,{children:"Route"}),"'s rendering API in v5 was rather large. As we worked on v4/5, the conversation went something like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// Ah, this is nice and simple!\n<Route path=":userId" component={Profile} />\n\n// But wait, how do I pass custom props to the <Profile> element??\n// Hmm, maybe we can use a render prop in those situations?\n<Route\n  path=":userId"\n  render={routeProps => (\n    <Profile routeProps={routeProps} animate={true} />\n  )}\n/>\n\n// Ok, now we have two ways to render something with a route. :/\n\n// But wait, what if we want to render something when a route\n// *doesn\'t* match the URL, like a Not Found page? Maybe we\n// can use another render prop with slightly different semantics?\n<Route\n  path=":userId"\n  children={({ match }) => (\n    match ? (\n      <Profile match={match} animate={true} />\n    ) : (\n      <NotFound />\n    )\n  )}\n/>\n\n// What if I want to get access to the route match, or I need\n// to redirect deeper in the tree?\nfunction DeepComponent(routeStuff) {\n  // got routeStuff, phew!\n}\nexport default withRouter(DeepComponent);\n\n// Well hey, now at least we\'ve covered all our use cases!\n// ... *facepalm*\n'})}),"\n",(0,o.jsxs)(n.p,{children:["At least part of the reason for this API sprawl was that React did not provide any way for us to get the information from the ",(0,o.jsx)(n.code,{children:"<Route>"})," to your route element, so we had to invent clever ways to get both the route data ",(0,o.jsx)(n.strong,{children:"and"})," your own custom props through to your elements: ",(0,o.jsx)(n.code,{children:"component"}),", render props, ",(0,o.jsx)(n.code,{children:"passProps"})," higher-order-components ... until ",(0,o.jsx)(n.strong,{children:"hooks"})," came along!"]}),"\n",(0,o.jsx)(n.p,{children:"Now, the conversation above goes like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// Ah, nice and simple API. And it's just like the <Suspense> API!\n// Nothing more to learn here.\n<Route path=\":userId\" element={<Profile />} />\n\n// But wait, how do I pass custom props to the <Profile>\n// element? Oh ya, it's just an element. Easy.\n<Route path=\":userId\" element={<Profile animate={true} />} />\n\n// Ok, but how do I access the router's data, like the URL params\n// or the current location?\nfunction Profile({ animate }) {\n  let params = useParams();\n  let location = useLocation();\n}\n\n// But what about components deep in the tree?\nfunction DeepComponent() {\n  // oh right, same as anywhere else\n  let navigate = useNavigate();\n}\n\n// Aaaaaaaaand we're done here.\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Another important reason for using the ",(0,o.jsx)(n.code,{children:"element"})," prop in v6 is that ",(0,o.jsx)(n.code,{children:"<Route children>"})," is reserved for nesting routes. You can read more about this in ",(0,o.jsx)(n.a,{href:"./overview#nested-routes",children:"the guide about getting started"})," with v6."]}),"\n",(0,o.jsx)(n.h2,{id:"how-do-i-add-a-no-match-404-route-in-react-router-v6",children:"How do I add a No Match (404) Route in react-router v6?"}),"\n",(0,o.jsxs)(n.p,{children:["In v4 we would have just left the path prop off a route. In v5 we would have wrapped our 404 element in a Route and used ",(0,o.jsx)(n.code,{children:'path="*"'}),". In v6 use ",(0,o.jsx)(n.code,{children:'path="*"'})," and pass the 404 element into the new ",(0,o.jsx)(n.code,{children:"element"})," prop instead of wrapping it:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'<Route path="*" element={<NoMatch />} />\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"route-doesnt-render-how-do-i-compose",children:[(0,o.jsx)(n.code,{children:"<Route>"})," doesn't render? How do I compose?"]}),"\n",(0,o.jsxs)(n.p,{children:["In v5 the ",(0,o.jsx)(n.code,{children:"<Route>"})," component was just a normal component that was like an ",(0,o.jsx)(n.code,{children:"if"})," statement that rendered when the URL matched its path. In v6, a ",(0,o.jsx)(n.code,{children:"<Route>"})," element doesn't actually ever render, it's simply there for configuration."]}),"\n",(0,o.jsxs)(n.p,{children:["In v5, since routes were just components, ",(0,o.jsx)(n.code,{children:"MyRoute"}),' will be rendered when the path is "/my-route".']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"filename=v5.js",children:'let App = () => (\n  <div>\n    <MyRoute />\n  </div>\n);\n\nlet MyRoute = ({ element, ...rest }) => {\n  return (\n    <Route path="/my-route" children={<p>Hello!</p>} />\n  );\n};\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In v6, however, the ",(0,o.jsx)(n.code,{children:"<Route>"})," is only used for its props, so the following code will never render ",(0,o.jsx)(n.code,{children:"<p>Hello!</p>"})," because ",(0,o.jsx)(n.code,{children:"<MyRoute>"})," has no path that ",(0,o.jsx)(n.code,{children:"<Routes>"})," can see:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"bad filename=v6-wrong.js",children:'let App = () => (\n  <Routes>\n    <MyRoute />\n  </Routes>\n);\n\nlet MyRoute = () => {\n  // won\'t ever render because the path is down here\n  return (\n    <Route path="/my-route" children={<p>Hello!</p>} />\n  );\n};\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can get the same behavior by:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Only rendering ",(0,o.jsx)(n.code,{children:"<Route>"})," elements inside of ",(0,o.jsx)(n.code,{children:"<Routes>"})]}),"\n",(0,o.jsxs)(n.li,{children:["Moving the composition into the ",(0,o.jsx)(n.code,{children:"element"})," prop"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"filename=v6.js",children:'let App = () => (\n  <div>\n    <Routes>\n      <Route path="/my-route" element={<MyRoute />} />\n    </Routes>\n  </div>\n);\n\nlet MyRoute = () => {\n  return <p>Hello!</p>;\n};\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Having a full nested route config available statically in ",(0,o.jsx)(n.code,{children:"<Routes>"})," is going to enable a lot of features in ",(0,o.jsx)(n.code,{children:"v6.x"}),", so we encourage you to put your routes in one top-level config. If you really like the idea of components that match the URL independent of any other components, you can make a component that behaves similarly to the v5 ",(0,o.jsx)(n.code,{children:"Route"})," with this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'function MatchPath({ path, Comp }) {\n  let match = useMatch(path);\n  return match ? <Comp {...match} /> : null;\n}\n\n// Will match anywhere w/o needing to be in a `<Routes>`\n<MatchPath path="/accounts/:id" Comp={Account} />;\n'})}),"\n",(0,o.jsx)(n.h2,{id:"how-do-i-nest-routes-deep-in-the-tree",children:"How do I nest routes deep in the tree?"}),"\n",(0,o.jsxs)(n.p,{children:["In v5 you could render a ",(0,o.jsx)(n.code,{children:"<Route>"})," or ",(0,o.jsx)(n.code,{children:"<Switch>"})," anywhere you want. You can keep doing the very same thing, but you need to use ",(0,o.jsx)(n.code,{children:"<Routes>"})," (",(0,o.jsx)(n.code,{children:"<Route>"})," without an 's' will not work). We call these \"Descendant ",(0,o.jsx)(n.code,{children:"<Routes>"}),'".']}),"\n",(0,o.jsx)(n.p,{children:"It might have looked like this in v5"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"filename=v5.js",children:'// somewhere up the tree\n<Switch>\n  <Route path="/users" component={Users} />\n</Switch>;\n\n// and now deeper in the tree\nfunction Users() {\n  return (\n    <div>\n      <h1>Users</h1>\n      <Switch>\n        <Route path="/users/account" component={Account} />\n      </Switch>\n    </div>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"In v6 it's almost the same:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Note the ",(0,o.jsx)(n.code,{children:"*"})," in the ancestor routes to get it to match deeper URLs even though it has no direct children"]}),"\n",(0,o.jsx)(n.li,{children:"You no longer need to know the entire child route path, you can use a relative route now"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"filename=v6.js",children:'// somewhere up the tree\n<Routes>\n  <Route path="/users/*" element={<Users />} />\n</Routes>;\n\n// and now deeper in the tree\nfunction Users() {\n  return (\n    <div>\n      <h1>Users</h1>\n      <Routes>\n        <Route path="account" element={<Account />} />\n      </Routes>\n    </div>\n  );\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:['If you had a "floating route" in v5 (not wrapped in a ',(0,o.jsx)(n.code,{children:"<Switch>"}),"), simply wrap it in a ",(0,o.jsx)(n.code,{children:"<Routes>"})," instead."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'// v5\n<Route path="/contact" component={Contact} />\n\n// v6\n<Routes>\n  <Route path="contact" element={<Contact />} />\n</Routes>\n'})}),"\n",(0,o.jsx)(n.h2,{id:"what-happened-to-regexp-routes-paths",children:"What Happened to Regexp Routes Paths?"}),"\n",(0,o.jsx)(n.p,{children:"Regexp route paths were removed for two reasons:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Regular expression paths in routes raised a lot of questions for v6's ranked route matching. How do you rank a regex?"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"We were able to shed an entire dependency (path-to-regexp) and cut the package weight sent to your user's browser significantly. If it were added back, it would represent 1/3 of React Router's page weight!"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"After looking at a lot of use cases, we found we can still meet them without direct regexp path support, so we made the tradeoff to significantly decrease the bundle size and avoid the open questions around ranking regexp routes."}),"\n",(0,o.jsx)(n.p,{children:"The majority of regexp routes were only concerned about one URL segment at a time and doing one of two things:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Matching multiple static values"}),"\n",(0,o.jsx)(n.li,{children:"Validating the param in some way (is a number, not a number, etc.)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Matching generally static values"})}),"\n",(0,o.jsx)(n.p,{children:"A very common route we've seen is a regex matching multiple language codes:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"filename=v5-lang-route.js",children:"function App() {\n  return (\n    <Switch>\n      <Route path={/(en|es|fr)/} component={Lang} />\n    </Switch>\n  );\n}\n\nfunction Lang({ params }) {\n  let lang = params[0];\n  let translations = I81n[lang];\n  // ...\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"These are all actually just static paths, so in v6 you can make three routes and pass the code directly to the component. If you've got a lot of them, make an array and map it into routes to avoid the repetition."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"filename=v6-lang-route.js",children:'function App() {\n  return (\n    <Routes>\n      <Route path="en" element={<Lang lang="en" />} />\n      <Route path="es" element={<Lang lang="es" />} />\n      <Route path="fr" element={<Lang lang="fr" />} />\n    </Routes>\n  );\n}\n\nfunction Lang({ lang }) {\n  let translations = I81n[lang];\n  // ...\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Doing some sort of param validation"})}),"\n",(0,o.jsx)(n.p,{children:"Another common case was ensuring that parameters were an integer."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"filename=v5-userId-route.js",children:"function App() {\n  return (\n    <Switch>\n      <Route path={/users\\/(\\d+)/} component={User} />\n    </Switch>\n  );\n}\n\nfunction User({ params }) {\n  let id = params[0];\n  // ...\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"In this case you have to do a bit of work yourself with the regex inside the matching component:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"filename=v6-userId-route.js",children:'function App() {\n  return (\n    <Routes>\n      <Route path="/users/:id" element={<ValidateUser />} />\n      <Route path="/users/*" element={<NotFound />} />\n    </Routes>\n  );\n}\n\nfunction ValidateUser() {\n  let params = useParams();\n  let userId = params.id.match(/\\d+/);\n  if (!userId) {\n    return <NotFound />;\n  }\n  return <User id={params.userId} />;\n}\n\nfunction User(props) {\n  let id = props.id;\n  // ...\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In v5 if the regex didn't match then ",(0,o.jsx)(n.code,{children:"<Switch>"})," would keep trying to match the next routes:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"filename=v5-switch.js",children:'function App() {\n  return (\n    <Switch>\n      <Route path={/users\\/(\\d+)/} component={User} />\n      <Route path="/users/new" exact component={NewUser} />\n      <Route\n        path="/users/inactive"\n        exact\n        component={InactiveUsers}\n      />\n      <Route path="/users/*" component={NotFound} />\n    </Switch>\n  );\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Looking at this example you might be concerned that in the v6 version your other routes won't get rendered at their URLs because the ",(0,o.jsx)(n.code,{children:":userId"}),' route might match first. But, thanks to route ranking, that is not the case. The "new" and "inactive" routes will rank higher and therefore render at their respective URLs:']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"filename=v6-ranked.js",children:'function App() {\n  return (\n    <Routes>\n      <Route path="/users/:id" element={<ValidateUser />} />\n      <Route path="/users/new" element={<NewUser />} />\n      <Route\n        path="/users/inactive"\n        element={<InactiveUsers />}\n      />\n    </Routes>\n  );\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In fact, the v5 version has all sorts of problems if your routes aren't ordered ",(0,o.jsx)(n.em,{children:"just right"}),". V6 completely eliminates this problem."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Remix Users"})}),"\n",(0,o.jsxs)(n.p,{children:["If you're using ",(0,o.jsx)(n.a,{href:"https://remix.run",children:"Remix"}),", you can send proper 40x responses to the browser by moving this work into your loader. This also decreases the size of the browser bundles sent to the user because loaders only run on the server."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"filename=remix-useLoaderData.js",children:'import { useLoaderData } from "remix";\n\nexport async function loader({ params }) {\n  if (!params.id.match(/\\d+/)) {\n    throw new Response("", { status: 400 });\n  }\n\n  let user = await fakeDb.user.find({\n    where: { id: params.id },\n  });\n  if (!user) {\n    throw new Response("", { status: 404 });\n  }\n\n  return user;\n}\n\nfunction User() {\n  let user = useLoaderData();\n  // ...\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Instead of rending your component, remix will render the nearest ",(0,o.jsx)(n.a,{href:"https://remix.run/docs/en/v1/api/conventions#catchboundary",children:"catch boundary"})," instead."]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(7294);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);