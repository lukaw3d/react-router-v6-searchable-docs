"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8138],{4194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var s=n(5893),r=n(1151);const o={title:"useFetchers",new:!0,sidebar_position:void 0},c="useFetchers",a={id:"hooks/use-fetchers",title:"useFetchers",description:"Returns an array of all inflight fetchers without their load, submit, or Form properties (can't have parent components trying to control the behavior of their children! We know from IRL experience that this is a fool's errand.)",source:"@site/react-router/docs/hooks/use-fetchers.md",sourceDirName:"hooks",slug:"/hooks/use-fetchers",permalink:"/react-router-v6-searchable-docs/hooks/use-fetchers",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1678463447,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{title:"useFetchers",new:!0},sidebar:"tutorialSidebar",previous:{title:"useFetcher",permalink:"/react-router-v6-searchable-docs/hooks/use-fetcher"},next:{title:"useFormAction",permalink:"/react-router-v6-searchable-docs/hooks/use-form-action"}},i={},h=[];function l(e){const t={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"usefetchers",children:(0,s.jsx)(t.code,{children:"useFetchers"})}),"\n",(0,s.jsxs)(t.p,{children:["Returns an array of all inflight ",(0,s.jsx)(t.a,{href:"./use-fetcher",children:"fetchers"})," without their ",(0,s.jsx)(t.code,{children:"load"}),", ",(0,s.jsx)(t.code,{children:"submit"}),", or ",(0,s.jsx)(t.code,{children:"Form"})," properties (can't have parent components trying to control the behavior of their children! We know from IRL experience that this is a fool's errand.)"]}),"\n",(0,s.jsxs)("docs-warning",{children:["This feature only works if using a data router, see ",(0,s.jsx)(t.a,{href:"../routers/picking-a-router",children:"Picking a Router"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'import { useFetchers } from "react-router-dom";\n\nfunction SomeComp() {\n  const fetchers = useFetchers();\n  // array of inflight fetchers\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"This is useful for components throughout the app that didn't create the fetchers but want to use their submissions to participate in optimistic UI."}),"\n",(0,s.jsx)(t.p,{children:"For example, imagine a UI where the sidebar lists projects, and the main view displays a list of checkboxes for the current project. The sidebar could display the number of completed and total tasks for each project."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"+-----------------+----------------------------+\n|                 |                            |\n|   Soccer  (8/9) | [x] Do the dishes          |\n|                 |                            |\n| > Home    (2/4) | [x] Fold laundry           |\n|                 |                            |\n|                 | [ ] Replace battery in the |\n|                 |     smoke alarm            |\n|                 |                            |\n|                 | [ ] Change lights in kids  |\n|                 |     bathroom               |\n|                 |                            |\n+-----------------+----------------------------\u2518\n"})}),"\n",(0,s.jsxs)(t.p,{children:['When the user clicks a checkbox, the submission goes to the action to change the state of the task. Instead of creating a "loading state" we want to create an "optimistic UI" that will ',(0,s.jsx)(t.strong,{children:"immediately"})," update the checkbox to appear checked even though the server hasn't processed it yet. In the checkbox component, we can use ",(0,s.jsx)(t.code,{children:"fetcher.formData"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'function Task({ task }) {\n  const { projectId, id } = task;\n  const toggle = useFetcher();\n  const checked = toggle.formData\n    ? toggle.formData.get("complete") === "on"\n    : task.complete;\n\n  return (\n    <toggle.Form\n      method="put"\n      action={`/projects/${projectId}/tasks/${id}`}\n    >\n      <input name="id" type="hidden" defaultValue={id} />\n      <label>\n        <input\n          name="complete"\n          type="checkbox"\n          checked={checked}\n          onChange={(e) => toggle.submit(e.target.form)}\n        />\n      </label>\n    </toggle.Form>\n  );\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"This awesome for the checkbox, but the sidebar will say 2/4 while the checkboxes show 3/4 when the user clicks on of them!"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"+-----------------+----------------------------+\n|                 |                            |\n|   Soccer  (8/9) | [x] Do the dishes          |\n|                 |                            |\n| > Home    (2/4) | [x] Fold laundry           |\n|     WRONG! ^    |                            |\n|          CLICK!--\x3e[x] Replace battery in the |\n|                 |     smoke alarm            |\n|                 |                            |\n|                 | [ ] Change lights in kids  |\n|                 |     bathroom               |\n|                 |                            |\n+-----------------+----------------------------\u2518\n"})}),"\n",(0,s.jsx)(t.p,{children:"Because routes are automatically revalidated, the sidebar will quickly update and be correct. But for a moment, it's gonna feel a little funny."}),"\n",(0,s.jsxs)(t.p,{children:["This is where ",(0,s.jsx)(t.code,{children:"useFetchers"})," comes in. Up in the sidebar, we can access all the inflight fetcher states from the checkboxes - even though it's not the component that created them."]}),"\n",(0,s.jsx)(t.p,{children:"The strategy has three steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Find the submissions for tasks in a specific project"}),"\n",(0,s.jsxs)(t.li,{children:["Use the ",(0,s.jsx)(t.code,{children:"fetcher.formData"})," to immediately update the count"]}),"\n",(0,s.jsx)(t.li,{children:"Use the normal task's state if it's not inflight"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'function ProjectTaskCount({ project }) {\n  let completedTasks = 0;\n  const fetchers = useFetchers();\n\n  // Find this project\'s fetchers\n  const relevantFetchers = fetchers.filter((fetcher) => {\n    return fetcher.formAction?.startsWith(\n      `/projects/${project.id}/tasks/`\n    );\n  });\n\n  // Store in a map for easy lookup\n  const myFetchers = new Map(\n    relevantFetchers.map(({ formData }) => [\n      formData.get("id"),\n      formData.get("complete") === "on",\n    ])\n  );\n\n  // Increment the count\n  for (const task of project.tasks) {\n    if (myFetchers.has(task.id)) {\n      if (myFetchers.get(task.id)) {\n        // if it\'s being submitted, increment optimistically\n        completedTasks++;\n      }\n    } else if (task.complete) {\n      // otherwise use the real task\'s data\n      completedTasks++;\n    }\n  }\n\n  return (\n    <small>\n      {completedTasks}/{project.tasks.length}\n    </small>\n  );\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"It's a little bit of work, but it's mostly just asking React Router for the state it's tracking and doing an optimistic calculation based on it."})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var s=n(7294);const r={},o=s.createContext(r);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);