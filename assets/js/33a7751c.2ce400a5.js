"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["19077"],{56653:function(e,t,n){n.d(t,{Z:()=>a});let a=n.p+"assets/images/boost_algolia_test_url_records-966da8893c73d2263b5dfe7c8d10c9a1.png"},23632:function(e,t,n){n.r(t),n.d(t,{frontMatter:()=>i,default:()=>h,contentTitle:()=>s,assets:()=>d,toc:()=>c,metadata:()=>a});var a=JSON.parse('{"id":"advanced/boosting","title":"Algolia search boosting","description":"Guide readers to important docs with metadata.","source":"@site/docs/advanced/boosting.mdx","sourceDirName":"advanced","slug":"/advanced/boosting","permalink":"/docs/advanced/boosting","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/boosting.mdx","tags":[],"version":"current","lastUpdatedBy":"DanRoscigno","lastUpdatedAt":1744890973000,"frontMatter":{"description":"Guide readers to important docs with metadata."},"sidebar":"docs","previous":{"title":"Client architecture","permalink":"/docs/advanced/client"},"next":{"title":"Upgrading Docusaurus","permalink":"/docs/migration"}}'),o=n(85893),r=n(80980);let i={description:"Guide readers to important docs with metadata."},s="Algolia search boosting",d={},c=[{value:"Steps",id:"steps",level:2},{value:"Add metadata",id:"add-metadata",level:2},{value:"Configure the Algolia index",id:"configure-the-algolia-index",level:2},{value:"Configure the Algolia Crawler",id:"configure-the-algolia-crawler",level:2},{value:"Modify the <code>recordExtractor</code> function",id:"modify-the-recordextractor-function",level:3},{value:"Extract the <code>pageBoost</code> metadata",id:"extract-the-pageboost-metadata",level:3},{value:"Assign the <code>pageRank</code>",id:"assign-the-pagerank",level:3},{value:"Testing",id:"testing",level:2},{value:"Production",id:"production",level:2},{value:"More information",id:"more-information",level:2}];function l(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"algolia-search-boosting",children:"Algolia search boosting"})}),"\n",(0,o.jsx)(t.p,{children:"Algolia DocSearch is a popular choice for Docusaurus sites. Algolia provides methods for boosting the ranking of pages in the search, and this guide covers a method using metadata added to pages and edits to the default Algolia crawler configuration."}),"\n",(0,o.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Configure Docusaurus to use Algolia DocSearch. To get started with DocSearch see ",(0,o.jsx)(t.a,{href:"/docs/search",children:"Search"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Add metadata to pages that you would like to boost."}),"\n",(0,o.jsx)(t.li,{children:"Configure your Algolia index to adjust page ranking based on the added metadata."}),"\n",(0,o.jsx)(t.li,{children:"Configure the Algolia Crawler to use the added metadata."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"add-metadata",children:"Add metadata"}),"\n",(0,o.jsx)(t.p,{children:"Here is an example of the desired metadata in a page to be boosted by 100 in the page ranking:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<meta data-rh="true" name="pageBoost" content="100">\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Adding metadata, other than ",(0,o.jsx)(t.code,{children:"description"})," and ",(0,o.jsx)(t.code,{children:"keywords"}),", is done by adding HTML within your Markdown/MDX files."]}),"\n",(0,o.jsx)(t.p,{children:"This is the edit to a Markdown/MDX file:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-md",children:'---\ntitle: Page name\n---\n\n\x3c!-- highlight-start --\x3e\n<head>\n  <meta name="pageBoost" content="100"/>\n</head>\n\x3c!-- highlight-end --\x3e\n\n## Overview\n'})}),"\n",(0,o.jsx)(t.h2,{id:"configure-the-algolia-index",children:"Configure the Algolia index"}),"\n",(0,o.jsxs)(t.p,{children:["Each Algolia index has several configuration options. The section to configure for page boosting is ",(0,o.jsx)(t.strong,{children:"Index"})," \u2192 ",(0,o.jsx)(t.strong,{children:"Configuration"})," \u2192 ",(0,o.jsx)(t.strong,{children:"Relevance Essentials"})," \u2192 ",(0,o.jsx)(t.strong,{children:"Ranking and Sorting"})," \u2192 ",(0,o.jsx)(t.strong,{children:"Custom Ranking"})]}),"\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"weight.pageRank"})})," is not in the list of custom ranking attributes, add it with ",(0,o.jsx)(t.strong,{children:"Add custom ranking attribute"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"configure-the-algolia-crawler",children:"Configure the Algolia Crawler"}),"\n",(0,o.jsxs)(t.p,{children:["The Algolia Crawler configuration is edited in your Algolia account. Access the crawler editor from the Algolia dashboard for your Algolia application at ",(0,o.jsx)(t.strong,{children:"Data sources"})," \u2192 ",(0,o.jsx)(t.strong,{children:"Crawler"})," by choosing the name of the crawler, and then ",(0,o.jsx)(t.strong,{children:"Editor"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"There are three edits to be made:"}),"\n",(0,o.jsxs)(t.h3,{id:"modify-the-recordextractor-function",children:["Modify the ",(0,o.jsx)(t.code,{children:"recordExtractor"})," function"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["In the JavaScript snippets the ",(0,o.jsx)(t.code,{children:"$"})," is the Cheerio instance, and allows you to manipulate the HTML Document Object Model (DOM). Links are in the ",(0,o.jsx)(t.strong,{children:"More information"})," section at the end of this doc."]})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"recordExtractor"})," needs access to the Cheerio instance to extract the metadata from the DOM."]}),"\n",(0,o.jsxs)(t.p,{children:["Verify that the ",(0,o.jsx)(t.code,{children:"recordExtractor"})," function includes the Cheerio instance as a parameter. Your record extractor function may have the ",(0,o.jsx)(t.code,{children:"$"}),", if so you can skip this step. Your record extractor may also have other parameters listed, you should not remove parameters."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"recordExtractor: ({ $, helpers }) => {\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"extract-the-pageboost-metadata",children:["Extract the ",(0,o.jsx)(t.code,{children:"pageBoost"})," metadata"]}),"\n",(0,o.jsxs)(t.p,{children:["Within the ",(0,o.jsx)(t.code,{children:"recordExtractor"})," function, add the highlighted line to extract the ",(0,o.jsx)(t.code,{children:"pageBoost"})," metadata into ",(0,o.jsx)(t.code,{children:"const pageBoost"}),", with a default value of 0 if no metadata is present in the page."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'recordExtractor: ({ $, helpers }) => {\n  // highlight-start\n  // Extract metadata\n  const pageBoost = $("meta[name=\'pageBoost\']").attr("content") || "0";\n  // highlight-end\n'})}),"\n",(0,o.jsxs)(t.h3,{id:"assign-the-pagerank",children:["Assign the ",(0,o.jsx)(t.code,{children:"pageRank"})]}),"\n",(0,o.jsxs)(t.p,{children:["The",(0,o.jsx)(t.code,{children:"pageRank"})," property is of type ",(0,o.jsx)(t.code,{children:"string | number"}),", add the highlighted line to the ",(0,o.jsx)(t.code,{children:"recordProps"})," code. In this example it is added after ",(0,o.jsx)(t.code,{children:"content"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'return helpers.docsearch({\n  recordProps: {\n\n    // your recordProps may populate lvl0 - lvl6 here\n\n    content: "article p, article li, article td:last-child",\n    // highlight-start\n    pageRank: Number(pageBoost),\n    // highlight-end\n  },\n'})}),"\n",(0,o.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"To test the changes to the page metadata and the Algolia Crawler build and publish your Docusaurus site."}),"\n",(0,o.jsxs)(t.li,{children:["View the source of a modified page and check for the added ",(0,o.jsx)(t.code,{children:"pageBoost"})," metadata. It should look like this (with the content you assigned) in the HTML:","\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<meta data-rh="true" name="pageBoost" content="100">\n'})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["Open the Crawler UI and test one of the pages you are boosting. Access the crawler editor from the Algolia dashboard for your Algolia application at ",(0,o.jsx)(t.strong,{children:"Data sources"})," \u2192 ",(0,o.jsx)(t.strong,{children:"Crawler"})," by choosing the name of the crawler, and then ",(0,o.jsx)(t.strong,{children:"Editor"}),". In the top navigation select ",(0,o.jsx)(t.strong,{children:"URL Tester"})," and test a boosted page, verify that ",(0,o.jsx)(t.code,{children:"weight.pageRank"})," is set in the ",(0,o.jsx)(t.strong,{children:"Records"})," tab:\n",(0,o.jsx)(t.img,{alt:"Algolia test URL records",src:n(56653).Z+"",width:"1328",height:"666"})]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"production",children:"Production"}),"\n",(0,o.jsx)(t.p,{children:"Run a production crawl after testing individual URLs and confirm the updated search results."}),"\n",(0,o.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/markdown-features/head-metadata",children:"Adding metadata"})}),"\n",(0,o.jsxs)(t.p,{children:["Configuring ",(0,o.jsx)(t.a,{href:"/docs/search",children:"Search"})]}),"\n",(0,o.jsxs)(t.p,{children:["Algolia Crawler ",(0,o.jsx)(t.a,{href:"https://docsearch.algolia.com/docs/record-extractor",children:"record extractor"})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},80980:function(e,t,n){n.d(t,{Z:()=>s,a:()=>i});var a=n(67294);let o={},r=a.createContext(o);function i(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);