"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6408"],{57178:function(e,t,r){r.r(t),r.d(t,{frontMatter:()=>i,default:()=>m,contentTitle:()=>c,assets:()=>u,toc:()=>d,metadata:()=>a});var a=JSON.parse('{"id":"api/themes/theme-live-codeblock","title":"\uD83D\uDCE6 theme-live-codeblock","description":"This theme provides a @theme/CodeBlock component that is powered by react-live. You can read more on interactive code editor documentation.","source":"@site/docs/api/themes/theme-live-codeblock.mdx","sourceDirName":"api/themes","slug":"/api/themes/@docusaurus/theme-live-codeblock","permalink":"/docs/api/themes/@docusaurus/theme-live-codeblock","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-live-codeblock.mdx","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1744702265000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"slug":"/api/themes/@docusaurus/theme-live-codeblock"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 theme-classic","permalink":"/docs/api/themes/@docusaurus/theme-classic"},"next":{"title":"\uD83D\uDCE6 theme-search-algolia","permalink":"/docs/api/themes/@docusaurus/theme-search-algolia"}}'),n=r(85893),o=r(80980),l=r(15398),s=r(58636);let i={sidebar_position:3,slug:"/api/themes/@docusaurus/theme-live-codeblock"},c="\uD83D\uDCE6 theme-live-codeblock",u={},d=[{value:"Configuration",id:"configuration",level:3}];function h(e){let t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"-theme-live-codeblock",children:"\uD83D\uDCE6 theme-live-codeblock"})}),"\n",(0,n.jsxs)(t.p,{children:["This theme provides a ",(0,n.jsx)(t.code,{children:"@theme/CodeBlock"})," component that is powered by ",(0,n.jsx)(t.a,{href:"https://commerce.nearform.com/open-source/react-live/",children:"react-live"}),". You can read more on ",(0,n.jsx)(t.a,{href:"/docs/markdown-features/code-blocks#interactive-code-editor",children:"interactive code editor"})," documentation."]}),"\n",(0,n.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(s.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-live-codeblock\n"})})}),(0,n.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/theme-live-codeblock\n"})})}),(0,n.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-live-codeblock\n"})})}),(0,n.jsx)(s.Z,{value:"bun",label:"Bun",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"bun add @docusaurus/theme-live-codeblock\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: ['@docusaurus/theme-live-codeblock'],\n  themeConfig: {\n    liveCodeBlock: {\n      /**\n       * The position of the live playground, above or under the editor\n       * Possible values: \"top\" | \"bottom\"\n       */\n      playgroundPosition: 'bottom',\n    },\n  },\n};\n"})})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},58636:function(e,t,r){r.d(t,{Z:()=>o});var a=r(85893);r(67294);var n=r(90496);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_pnkT",o),hidden:r,children:t})}},15398:function(e,t,r){r.d(t,{Z:()=>g});var a=r(85893),n=r(67294),o=r(90496),l=r(54947),s=r(3620),i=r(844),c=r(97486),u=r(32263),d=r(16971);function h(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var p=r(71607);function f(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let t=e.currentTarget,r=i[c.indexOf(t)].value;r!==n&&(u(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1]}}t?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t),children:i.map(e=>{let{value:t,label:r,attributes:l}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...l,className:(0,o.Z)("tabs__item","tabItem_AQgk",l?.className,{"tabs__item--active":n===t}),children:r??t},t)})})}function b(e){let{lazy:t,children:r,selectedValue:l}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=s.find(e=>e.props.value===l);return e?(0,n.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function v(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:a}=e,o=function(e){let{values:t,children:r}=e;return(0,n.useMemo)(()=>{let e=t??h(r).map(e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}),a=(0,u.lx)(e,(e,t)=>e.value===t.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[t,r])}(e),[l,p]=(0,n.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let a=r.find(e=>e.default)??r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:t,tabValues:o})),[f,b]=function(e){let{queryString:t=!1,groupId:r}=e,a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,n.useCallback)(e=>{if(!o)return;let t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})},[o,a])]}({queryString:r,groupId:a}),[v,g]=function(e){let{groupId:t}=e,r=t?`docusaurus.tab.${t}`:null,[a,o]=(0,d.Nk)(r);return[a,(0,n.useCallback)(e=>{r&&o.set(e)},[r,o])]}({groupId:a}),x=(()=>{let e=f??v;return m({value:e,tabValues:o})?e:null})();return(0,i.Z)(()=>{x&&p(x)},[x]),{selectedValue:l,selectValue:(0,n.useCallback)(e=>{if(!m({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);p(e),b(e),g(e)},[b,g,o]),tabValues:o}}(e);return(0,a.jsxs)("div",{className:(0,o.Z)("tabs-container","tabList_Qoir"),children:[(0,a.jsx)(f,{...t,...e}),(0,a.jsx)(b,{...t,...e})]})}function g(e){let t=(0,p.Z)();return(0,a.jsx)(v,{...e,children:h(e.children)},String(t))}},80980:function(e,t,r){r.d(t,{Z:()=>s,a:()=>l});var a=r(67294);let n={},o=a.createContext(n);function l(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);