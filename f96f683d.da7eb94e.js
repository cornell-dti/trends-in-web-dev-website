(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{94:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var o=t(1),i=t(6),a=(t(0),t(98)),r={id:"assignment4",title:"Assignment 4"},l={unversionedId:"assignment4",id:"version-2020fa/assignment4",isDocsHomePage:!1,title:"Assignment 4",description:"In this assignment, we finally get to work on frontend!!! You will be developing a simple songs list app which allows you",source:"@site/versioned_docs/version-2020fa/assignment4.md",slug:"/assignment4",permalink:"/docs/assignment4",version:"2020fa"},s=[{value:"Part 1: Song component",id:"part-1-song-component",children:[]},{value:"Part 2: Adding songs",id:"part-2-adding-songs",children:[]},{value:"Part 3: Adding Playlist to App.js",id:"part-3-adding-playlist-to-appjs",children:[]},{value:"Part 4: Optional Challenge",id:"part-4-optional-challenge",children:[]},{value:"Submission",id:"submission",children:[]}],c={rightToc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this assignment, we finally get to work on frontend!!! You will be developing a simple songs list app which allows you\nto add and view songs."),Object(a.b)("h2",{id:"part-1-song-component"},"Part 1: Song component"),Object(a.b)("p",null,"Create a component, Song, that represents a song in your playlist.\nIt will be passed a prop called ",Object(a.b)("inlineCode",{parentName:"p"},"info")," that is an object which contains some information about the song. The fields in this object will be ",Object(a.b)("inlineCode",{parentName:"p"},"title"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"artist"),"."),Object(a.b)("p",null,"You can test this component by importing the Song component in\nApp.js and creating a component:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"<Song info={{ title: 'Never Gonna Give You Up', artist: 'Rick Astley' }} />\n")),Object(a.b)("h2",{id:"part-2-adding-songs"},"Part 2: Adding songs"),Object(a.b)("p",null,"Create a component, Playlist, that contains all of the songs you've added. This will do the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Maintain a state containing a list of ",Object(a.b)("inlineCode",{parentName:"li"},"songs"),", which are objects containing the info about each song."),Object(a.b)("li",{parentName:"ul"},"Have two input fields, one for title and one for artist."),Object(a.b)("li",{parentName:"ul"},"Have a button which allows you to submit the new song and adds to the list.")),Object(a.b)("h2",{id:"part-3-adding-playlist-to-appjs"},"Part 3: Adding Playlist to App.js"),Object(a.b)("p",null,"Initialize your Playlist component in App.js. This can be done by\nimporting Playlist and creating a component:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"<Playlist />")),Object(a.b)("h2",{id:"part-4-optional-challenge"},"Part 4: Optional Challenge"),Object(a.b)("p",null,"Make it so that checking a box next to a song removes it from the Playlist."),Object(a.b)("h2",{id:"submission"},"Submission"),Object(a.b)("p",null,"Submit a zip file of everything in your project directory EXCEPT ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),". You WILL lose points for including ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),"."))}p.isMDXComponent=!0},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(r,".").concat(d)]||u[d]||b[d]||a;return t?i.a.createElement(m,l(l({ref:n},c),{},{components:t})):i.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=t[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);