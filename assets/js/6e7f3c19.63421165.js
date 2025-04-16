"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["15839"],{18202:function(e,t,n){n.r(t),n.d(t,{frontMatter:()=>u,default:()=>m,contentTitle:()=>d,assets:()=>g,toc:()=>h,metadata:()=>r});var r=JSON.parse('{"id":"api/plugins/plugin-google-tag-manager","title":"\uD83D\uDCE6 plugin-google-tag-manager","description":"A plugin for adding Google Tag Manager (gtm.js) to a Docusaurus site. Use this plugin in conjunction with the standard gtag plugin for in-depth analysis of how users are using your site.","source":"@site/docs/api/plugins/plugin-google-tag-manager.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-google-tag-manager","permalink":"/docs/api/plugins/@docusaurus/plugin-google-tag-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-google-tag-manager.mdx","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1744702265000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"slug":"/api/plugins/@docusaurus/plugin-google-tag-manager"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-svgr","permalink":"/docs/api/plugins/@docusaurus/plugin-svgr"},"next":{"title":"\uD83D\uDCE6 plugin-ideal-image","permalink":"/docs/api/plugins/@docusaurus/plugin-ideal-image"}}'),s=n(85893),a=n(80980),l=n(15398),o=n(58636),i=n(32240),c=n(66359);let u={sidebar_position:8,slug:"/api/plugins/@docusaurus/plugin-google-tag-manager"},d="\uD83D\uDCE6 plugin-google-tag-manager",g={},h=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function p(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"-plugin-google-tag-manager",children:"\uD83D\uDCE6 plugin-google-tag-manager"})}),"\n","\n",(0,s.jsxs)(t.p,{children:["A plugin for adding ",(0,s.jsx)(t.a,{href:"https://developers.google.com/tag-platform/tag-manager",children:"Google Tag Manager (gtm.js)"})," to a Docusaurus site. Use this plugin in conjunction with the standard ",(0,s.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:"gtag plugin"})," for in-depth analysis of how users are using your site."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["You can use ",(0,s.jsx)(t.a,{href:"https://tagassistant.google.com/",children:"Google's Tag Assistant"})," tool to check if tag manager is set up correctly!"]})}),"\n",(0,s.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,s.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,s.jsx)(t.strong,{children:"only active in production"})," to avoid polluting the analytics statistics."]})}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(o.Z,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-google-tag-manager\n"})})}),(0,s.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-google-tag-manager\n"})})}),(0,s.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-google-tag-manager\n"})})}),(0,s.jsx)(o.Z,{value:"bun",label:"Bun",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"bun add @docusaurus/plugin-google-tag-manager\n"})})})]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["If you use the preset ",(0,s.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,s.jsxs)(t.p,{children:["You can configure this plugin through the ",(0,s.jsx)(t.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(i.Z,{children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"containerId"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsxs)(t.td,{children:["Your Tag Manager container Id (usually starts with ",(0,s.jsx)(t.code,{children:"GTM-"}),")."]})]})})]})}),"\n",(0,s.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,s.jsx)(t.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,s.jsx)(c.Z,{pluginName:"@docusaurus/plugin-google-tag-manager",presetOptionName:"googleTagManager",code:"{\n  containerId: 'GTM-12345',\n}"})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},58636:function(e,t,n){n.d(t,{Z:()=>a});var r=n(85893);n(67294);var s=n(90496);function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_pnkT",a),hidden:n,children:t})}},15398:function(e,t,n){n.d(t,{Z:()=>x});var r=n(85893),s=n(67294),a=n(90496),l=n(54947),o=n(3620),i=n(844),c=n(97486),u=n(32263),d=n(16971);function g(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var p=n(71607);function m(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:i}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let t=e.currentTarget,n=i[c.indexOf(t)].value;n!==s&&(u(t),o(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{c.push(e)},onKeyDown:g,onClick:d,...l,className:(0,a.Z)("tabs__item","tabItem_AQgk",l?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function f(e){let{lazy:t,children:n,selectedValue:l}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=o.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function j(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,a=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??g(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}),r=(0,u.lx)(e,(e,t)=>e.value===t.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[t,n])}(e),[l,p]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:a})),[m,f]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(a),(0,s.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})},[a,r])]}({queryString:n,groupId:r}),[j,x]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[r,a]=(0,d.Nk)(n);return[r,(0,s.useCallback)(e=>{n&&a.set(e)},[n,a])]}({groupId:r}),b=(()=>{let e=m??j;return h({value:e,tabValues:a})?e:null})();return(0,i.Z)(()=>{b&&p(b)},[b]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),x(e)},[f,x,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(m,{...t,...e}),(0,r.jsx)(f,{...t,...e})]})}function x(e){let t=(0,p.Z)();return(0,r.jsx)(j,{...e,children:g(e.children)},String(t))}},56497:function(e,t,n){n.d(t,{Z:()=>a});var r=n(85893);n(67294);var s=n(71607);function a(e){let{children:t,fallback:n}=e;return(0,s.Z)()?(0,r.jsx)(r.Fragment,{children:t?.()}):n??null}},32240:function(e,t,n){n.d(t,{Z:()=>i});var r=n(85893),s=n(67294),a=n(96700),l=n(3620);let o=s.forwardRef(function(e,t){let{name:n,children:o}=e,i=function(e){let t=e;for(;(0,s.isValidElement)(t);)[t]=s.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(o),c=n?`${n}-${i}`:i,u=`#${c}`,d=(0,l.k6)();return(0,a.Z)().collectAnchor(c),(0,r.jsx)("tr",{id:c,tabIndex:0,ref:d.location.hash===u?t:void 0,onClick:e=>{let t="TD"===e.target.tagName.toUpperCase(),n=!!window.getSelection()?.toString();t&&!n&&d.push(u)},onKeyDown:e=>{"Enter"===e.key&&d.push(u)},children:o.props.children})});function i(e){let{children:t,name:n}=e;if("table"!==t.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[a,l]=s.Children.toArray(t.props.children),i=(0,s.useRef)(null);(0,s.useEffect)(()=>{i.current?.focus()},[i]);let c=s.Children.map(l.props.children,e=>(0,r.jsx)(o,{name:n,ref:i,children:e}));return(0,r.jsxs)("table",{className:"apiTable_e8hp",children:[a,(0,r.jsx)("tbody",{children:c})]})}},66359:function(e,t,n){n.d(t,{Z:()=>d});var r=n(85893);n(67294);var s=n(35363),a=n(90158),l=n(77827),o=n(15398),i=n(58636),c=n(27817);let u=void 0;function d(e){let{code:t,pluginName:n,presetOptionName:d}=e,g=(0,a.zu)(u).path;return(0,r.jsxs)(o.Z,{groupId:"api-config-ex",children:[(0,r.jsxs)(i.Z,{value:"preset",label:(0,l.I)({message:"Preset options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(l.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,r.jsx)(s.Z,{to:`${g}/using-plugins#docusauruspreset-classic`,children:(0,r.jsx)(l.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // highlight-start
        ${d}: ${t.replace(/\n/g,"\n        ")},
        // highlight-end
      },
    ],
  ],
};`})]}),(0,r.jsxs)(i.Z,{value:"plugin",label:(0,l.I)({message:"Plugin options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(l.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  plugins: [
    [
      '${n}',
      // highlight-start
      ${t.replace(/\n/g,"\n      ")},
      // highlight-end
    ],
  ],
};`})]})]})}},27817:function(e,t,n){n.d(t,{Z:()=>em});var r={};n.r(r),n.d(r,{ButtonExample:()=>ed});var s=n(85893),a=n(67294),l=n(71607),o=n(90496),i=n(45245),c=n(26378);function u(){let{prism:e}=(0,c.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var d=n(55951),g=n(6324),h=n.n(g),p=n(50923);let m=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,j={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},x={...j,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},b=Object.keys(j);function v(e,t){let n=e.map(e=>{let{start:n,end:r}=x[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${r})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}let y=(0,a.createContext)(null);function k(e){let{metadata:t,wordWrap:n,children:r}=e,l=(0,a.useMemo)(()=>({metadata:t,wordWrap:n}),[t,n]);return(0,s.jsx)(y.Provider,{value:l,children:r})}function w(){let e=(0,a.useContext)(y);if(null===e)throw new p.i6("CodeBlockContextProvider");return e}function N(e){let{as:t,...n}=e,r=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[r,s]=e,a=t[r];a&&"string"==typeof s&&(n[a]=s)}),n}(u());return(0,s.jsx)(t,{...n,style:r,className:(0,o.Z)(n.className,"codeBlockContainer_jDV4",d.k.common.codeBlock)})}let B={codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q"};function C(e){let{children:t,className:n}=e;return(0,s.jsx)(N,{as:"pre",tabIndex:0,className:(0,o.Z)(B.codeBlockStandalone,"thin-scrollbar",n),children:(0,s.jsx)("code",{className:B.codeBlockLines,children:t})})}let Z={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e){let{children:t}=e;return t}var E=n(7316);function I(e){let{line:t,token:n,...r}=e;return(0,s.jsx)("span",{...r})}let T={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function _(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:a,getTokenProps:l}=e,i=function(e){let t=1===e.length&&"\n"===e[0].content?e[0]:void 0;return t?[{...t,content:""}]:e}(t),c=a({line:i,className:(0,o.Z)(n,r&&T.codeLine)}),u=i.map((e,t)=>{let n=l({token:e});return(0,s.jsx)(I,{...n,line:i,token:e,children:n.children},t)});return(0,s.jsxs)("span",{...c,children:[r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:T.codeLineNumber}),(0,s.jsx)("span",{className:T.codeLineContent,children:u})]}):u,(0,s.jsx)("br",{})]})}let A=a.forwardRef((e,t)=>(0,s.jsx)("pre",{ref:t,tabIndex:0,...e,className:(0,o.Z)(e.className,B.codeBlock,"thin-scrollbar")}));function S(e){let{metadata:t}=w();return(0,s.jsx)("code",{...e,className:(0,o.Z)(e.className,B.codeBlockLines,void 0!==t.lineNumbersStart&&B.codeBlockLinesWithNumbering),style:{...e.style,counterReset:void 0===t.lineNumbersStart?void 0:`line-count ${t.lineNumbersStart-1}`}})}function $(e){let{className:t}=e,{metadata:n,wordWrap:r}=w(),a=u(),{code:l,language:i,lineNumbersStart:c,lineClassNames:d}=n;return(0,s.jsx)(E.y$,{theme:a,code:l,language:i,children:e=>{let{className:n,style:a,tokens:l,getLineProps:i,getTokenProps:u}=e;return(0,s.jsx)(A,{ref:r.codeBlockRef,className:(0,o.Z)(t,n),style:a,children:(0,s.jsx)(S,{children:l.map((e,t)=>(0,s.jsx)(_,{line:e,getLineProps:i,getTokenProps:u,classNames:d[t],showLineNumbers:void 0!==c},t))})})}})}var M=n(56497),D=n(44771),R=n(77827);function O(e){let{className:t,...n}=e;return(0,s.jsx)("button",{type:"button",...n,className:(0,o.Z)("clean-btn",t)})}function W(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function V(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let q={copyButtonCopied:"copyButtonCopied_wDuR",copyButtonIcons:"copyButtonIcons_gMWc",copyButtonIcon:"copyButtonIcon_GXfb",copyButtonSuccessIcon:"copyButtonSuccessIcon_ktUX"};function F(e){let{className:t}=e,{copyCode:n,isCopied:r}=function(){let{metadata:{code:e}}=w(),[t,n]=(0,a.useState)(!1),r=(0,a.useRef)(void 0),s=(0,a.useCallback)(()=>{(0,D.Z)(e),n(!0),r.current=window.setTimeout(()=>{n(!1)},1e3)},[e]);return(0,a.useEffect)(()=>()=>window.clearTimeout(r.current),[]),{copyCode:s,isCopied:t}}();return(0,s.jsx)(O,{"aria-label":r?(0,R.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,R.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,R.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)(t,q.copyButton,r&&q.copyButtonCopied),onClick:n,children:(0,s.jsxs)("span",{className:q.copyButtonIcons,"aria-hidden":"true",children:[(0,s.jsx)(W,{className:q.copyButtonIcon}),(0,s.jsx)(V,{className:q.copyButtonSuccessIcon})]})})}function H(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let P={wordWrapButtonIcon:"wordWrapButtonIcon___5r",wordWrapButtonEnabled:"wordWrapButtonEnabled_nam_"};function U(e){let{className:t}=e,{wordWrap:n}=w();if(!(n.isEnabled||n.isCodeScrollable))return!1;let r=(0,R.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,s.jsx)(O,{onClick:()=>n.toggle(),className:(0,o.Z)(t,n.isEnabled&&P.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,s.jsx)(H,{className:P.wordWrapButtonIcon,"aria-hidden":"true"})})}function z(e){let{className:t}=e;return(0,s.jsx)(M.Z,{children:()=>(0,s.jsxs)("div",{className:(0,o.Z)(t,"buttonGroup_KXnS"),children:[(0,s.jsx)(U,{}),(0,s.jsx)(F,{})]})})}let G={codeBlockContent:"codeBlockContent_cKMj",codeBlockTitle:"codeBlockTitle_U6Q0"};function X(e){let{className:t}=e,{metadata:n}=w();return(0,s.jsxs)(N,{as:"div",className:(0,o.Z)(t,n.className),children:[n.title&&(0,s.jsx)("div",{className:G.codeBlockTitle,children:(0,s.jsx)(L,{children:n.title})}),(0,s.jsxs)("div",{className:G.codeBlockContent,children:[(0,s.jsx)($,{}),(0,s.jsx)(z,{})]})]})}function Y(e){let t=function(e){let{prism:t}=(0,c.L)();return function(e){var t,n,r;let s=(n=(t={language:e.language,defaultLanguage:e.defaultLanguage,className:e.className}).language??function(e){if(!e)return;let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(t.className)??t.defaultLanguage,n?.toLowerCase()??"text"),{lineClassNames:a,code:l}=function(e,t){let n=e.replace(/\r?\n$/,"");return function(e,t){let{metastring:n,magicComments:r}=t;if(n&&f.test(n)){let t=n.match(f).groups.range;if(0===r.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${n}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let s=r[0].className;return{lineClassNames:Object.fromEntries(h()(t).filter(e=>e>0).map(e=>[e-1,[s]])),code:e}}return null}(n,{...t})??function(e,t){let{language:n,magicComments:r}=t;if(void 0===n)return{lineClassNames:{},code:e};let s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"],t);case"jsx":case"tsx":return v(["js","jsBlock","jsx"],t);case"html":return v(["js","jsBlock","html"],t);case"python":case"py":case"bash":return v(["bash"],t);case"markdown":case"md":return v(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return v(["tex"],t);case"lua":case"haskell":return v(["lua"],t);case"sql":return v(["lua","jsBlock"],t);case"wasm":return v(["wasm"],t);case"vb":case"vba":case"visual-basic":return v(["vb","rem"],t);case"vbnet":return v(["vbnet","rem"],t);case"batch":return v(["rem"],t);case"basic":return v(["rem","f90"],t);case"fsharp":return v(["js","ml"],t);case"ocaml":case"sml":return v(["ml"],t);case"fortran":return v(["f90"],t);case"cobol":return v(["cobol"],t);default:return v(b,t)}}(n,r),a=e.split(/\r?\n/),l=Object.fromEntries(r.map(e=>[e.className,{start:0,range:""}])),o=Object.fromEntries(r.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),i=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),c=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<a.length;){let t=a[e].match(s);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);o[n]?l[o[n]].range+=`${e},`:i[n]?l[i[n]].start=e:c[n]&&(l[c[n]].range+=`${l[c[n]].start}-${e-1},`),a.splice(e,1)}let u={};return Object.entries(l).forEach(e=>{let[t,{range:n}]=e;h()(n).forEach(e=>{u[e]??=[],u[e].push(t)})}),{code:a.join("\n"),lineClassNames:u}}(n,{...t})}(e.code,{metastring:e.metastring,magicComments:e.magicComments,language:s}),i=function(e){let{className:t,language:n}=e;return(0,o.Z)(t,n&&!t?.includes(`language-${n}`)&&`language-${n}`)}({className:e.className,language:s}),c=(r=e.metastring,(r?.match(m)?.groups.title??"")||e.title),u=function(e){let{showLineNumbers:t,metastring:n}=e;if("boolean"==typeof t)return t?1:void 0;if("number"==typeof t)return t;let r=n?.split(" ").find(e=>e.startsWith("showLineNumbers"));if(r)return r.startsWith("showLineNumbers=")?parseInt(r.replace("showLineNumbers=",""),10):1}({showLineNumbers:e.showLineNumbers,metastring:e.metastring});return{codeInput:e.code,code:l,className:i,language:s,title:c,lineNumbersStart:u,lineClassNames:a}}({code:e.children,className:e.className,metastring:e.metastring,magicComments:t.magicComments,defaultLanguage:t.defaultLanguage,language:e.language,title:e.title,showLineNumbers:e.showLineNumbers})}(e),n=function(){let[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),s=(0,a.useRef)(null),l=(0,a.useCallback)(()=>{let n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[s,e]),o=(0,a.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=s.current;r(e>t||s.current.querySelector("code").hasAttribute("style"))},[s]),[i,c]=(0,a.useState)(),u=(0,a.useCallback)(()=>{c(s.current?.closest("[role=tabpanel][hidden]"))},[s,c]);return(0,a.useEffect)(()=>{u()},[u]),!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Z,r=(0,p.zX)(t),s=(0,p.Ql)(n);(0,a.useEffect)(()=>{let t=new MutationObserver(r);return e&&t.observe(e,s),()=>t.disconnect()},[e,r,s])}(i,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(o(),u())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1}),(0,a.useEffect)(()=>{o()},[e,o]),(0,a.useEffect)(()=>(window.addEventListener("resize",o,{passive:!0}),()=>{window.removeEventListener("resize",o)}),[o]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:l}}();return(0,s.jsx)(k,{metadata:t,wordWrap:n,children:(0,s.jsx)(X,{})})}function J(e){let{children:t,...n}=e,r=(0,l.Z)(),o=a.Children.toArray(t).some(e=>(0,a.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t;return(0,s.jsx)("string"==typeof o?Y:C,{...n,children:o},String(r))}var Q=n(10075);let K=e=>`${e};`;function ee(e){let{code:t,children:n,...r}=e,a=u(),l=r.metastring?.includes("noInline")??!1;return(0,s.jsx)(Q.nu,{noInline:l,theme:a,...r,code:t?.replace(/\n$/,""),transformCode:r.transformCode??K,children:n})}function et(e){let{children:t}=e;return(0,s.jsx)("div",{className:"playgroundContainer_TDLX",children:t})}var en=n(85108),er=n(67490);function es(e){let{children:t}=e;return(0,s.jsx)("div",{className:(0,o.Z)("playgroundHeader_h_Hu"),children:t})}function ea(){return(0,s.jsx)("div",{children:"Loading..."})}function el(){return(0,s.jsx)(M.Z,{fallback:(0,s.jsx)(ea,{}),children:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(er.Z,{fallback:e=>(0,s.jsx)(en.Ac,{...e}),children:(0,s.jsx)(Q.i5,{})}),(0,s.jsx)(Q.IF,{})]})})}function eo(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(es,{children:(0,s.jsx)(R.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,s.jsx)("div",{className:"playgroundPreview_u2xE",children:(0,s.jsx)(el,{})})]})}function ei(){let e=(0,l.Z)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(es,{children:(0,s.jsx)(R.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,s.jsx)(Q.uz,{className:"playgroundEditor_uqZ4"},String(e))]})}function ec(){let{playgroundPosition:e}=(0,c.L)().liveCodeBlock;return(0,s.jsx)(s.Fragment,{children:"top"===e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(eo,{}),(0,s.jsx)(ei,{})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ei,{}),(0,s.jsx)(eo,{})]})})}function eu(e){let{children:t,transformCode:n,...r}=e;return(0,s.jsx)(et,{children:(0,s.jsx)(ee,{code:t,...r,children:(0,s.jsx)(ec,{})})})}function ed(e){return(0,s.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}let eg={React:a,...a,...r};function eh(e){return(0,s.jsx)(eu,{scope:eg,...e})}function ep(e){return e.live?(0,s.jsx)(eh,{...e}):(0,s.jsx)(J,{...e})}function em(e){return(0,s.jsx)(ep,{...e})}}}]);