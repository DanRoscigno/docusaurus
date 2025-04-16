"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["9011"],{43132:function(e,n,t){t.r(n),t.d(n,{frontMatter:()=>a,default:()=>h,contentTitle:()=>o,assets:()=>r,toc:()=>c,metadata:()=>i});var i=JSON.parse('{"id":"api/plugin-methods/i18n-lifecycles","title":"I18n lifecycles","description":"Plugins use these lifecycles to load i18n-related data.","source":"@site/docs/api/plugin-methods/i18n-lifecycles.mdx","sourceDirName":"api/plugin-methods","slug":"/api/plugin-methods/i18n-lifecycles","permalink":"/docs/api/plugin-methods/i18n-lifecycles","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugin-methods/i18n-lifecycles.mdx","tags":[],"version":"current","lastUpdatedBy":"DanRoscigno","lastUpdatedAt":1744807211000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"api","previous":{"title":"Extending infrastructure","permalink":"/docs/api/plugin-methods/extend-infrastructure"},"next":{"title":"Static methods","permalink":"/docs/api/plugin-methods/static-methods"}}'),s=t(85893),l=t(80980);let a={sidebar_position:3},o="I18n lifecycles",r={},c=[{value:"<code>getTranslationFiles({content})</code>",id:"getTranslationFiles",level:2},{value:"<code>translateContent({content,translationFiles})</code>",id:"translateContent",level:2},{value:"<code>translateThemeConfig({themeConfig,translationFiles})</code>",id:"translateThemeConfig",level:2},{value:"<code>async getDefaultCodeTranslationMessages()</code>",id:"getDefaultCodeTranslationMessages",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"i18n-lifecycles",children:"I18n lifecycles"})}),"\n",(0,s.jsx)(n.p,{children:"Plugins use these lifecycles to load i18n-related data."}),"\n",(0,s.jsx)(n.h2,{id:"getTranslationFiles",children:(0,s.jsx)(n.code,{children:"getTranslationFiles({content})"})}),"\n",(0,s.jsx)(n.p,{children:"Plugins declare the JSON translation files they want to use."}),"\n",(0,s.jsxs)(n.p,{children:["Returns translation files ",(0,s.jsx)(n.code,{children:"{path: string, content: ChromeI18nJSON}"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"}),": relative to the plugin localized folder ",(0,s.jsx)(n.code,{children:"i18n/[locale]/[pluginName]"}),". Extension ",(0,s.jsx)(n.code,{children:".json"})," should be omitted to remain generic."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"content"}),": using the Chrome i18n JSON format."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These files will be written by the ",(0,s.jsxs)(n.a,{href:"/docs/cli#docusaurus-write-translations-sitedir",children:[(0,s.jsx)(n.code,{children:"write-translations"})," CLI"]})," to the plugin i18n subfolder, and will be read in the appropriate locale before calling ",(0,s.jsx)(n.a,{href:"#translateContent",children:(0,s.jsx)(n.code,{children:"translateContent()"})})," and ",(0,s.jsx)(n.a,{href:"#translateThemeConfig",children:(0,s.jsx)(n.code,{children:"translateThemeConfig()"})})]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="my-plugin.js"',children:"export default function (context, options) {\n  return {\n    name: 'my-plugin',\n    // highlight-start\n    async getTranslationFiles({content}) {\n      return [\n        {\n          path: 'sidebar-labels',\n          content: {\n            someSidebarLabel: {\n              message: 'Some Sidebar Label',\n              description: 'A label used in my plugin in the sidebar',\n            },\n            someLabelFromContent: content.myLabel,\n          },\n        },\n      ];\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"translateContent",children:(0,s.jsx)(n.code,{children:"translateContent({content,translationFiles})"})}),"\n",(0,s.jsx)(n.p,{children:"Translate the plugin content, using the localized translation files."}),"\n",(0,s.jsx)(n.p,{children:"Returns the localized plugin content."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"contentLoaded()"})," lifecycle will be called with the localized plugin content returned by ",(0,s.jsx)(n.code,{children:"translateContent()"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="my-plugin.js"',children:"export default function (context, options) {\n  return {\n    name: 'my-plugin',\n    // highlight-start\n    translateContent({content, translationFiles}) {\n      const myTranslationFile = translationFiles.find(\n        (f) => f.path === 'myTranslationFile',\n      );\n      return {\n        ...content,\n        someContentLabel: myTranslationFile.someContentLabel.message,\n      };\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"translateThemeConfig",children:(0,s.jsx)(n.code,{children:"translateThemeConfig({themeConfig,translationFiles})"})}),"\n",(0,s.jsxs)(n.p,{children:["Translate the site ",(0,s.jsx)(n.code,{children:"themeConfig"})," labels, using the localized translation files."]}),"\n",(0,s.jsxs)(n.p,{children:["Returns the localized ",(0,s.jsx)(n.code,{children:"themeConfig"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="my-plugin.js"',children:"export default function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    translateThemeConfig({themeConfig, translationFiles}) {\n      const myTranslationFile = translationFiles.find(\n        (f) => f.path === 'myTranslationFile',\n      );\n      return {\n        ...themeConfig,\n        someThemeConfigLabel: myTranslationFile.someThemeConfigLabel.message,\n      };\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"getDefaultCodeTranslationMessages",children:(0,s.jsx)(n.code,{children:"async getDefaultCodeTranslationMessages()"})}),"\n",(0,s.jsxs)(n.p,{children:["Themes using the ",(0,s.jsx)(n.code,{children:"<Translate>"})," API can provide default code translation messages."]}),"\n",(0,s.jsxs)(n.p,{children:["It should return messages in ",(0,s.jsx)(n.code,{children:"Record<string, string>"}),", where keys are translation IDs and values are messages (without the description) localized using the site's current locale."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="my-plugin.js"',children:"export default function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    async getDefaultCodeTranslationMessages() {\n      return readJsonFile(`${context.i18n.currentLocale}.json`);\n    },\n    // highlight-end\n  };\n}\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},80980:function(e,n,t){t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);let s={},l=i.createContext(s);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);