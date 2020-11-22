(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),o=(a(0),a(107)),r={id:"assignment2",title:"Assignment 2"},s={unversionedId:"assignment2",id:"version-2020fa/assignment2",isDocsHomePage:!1,title:"Assignment 2",description:"For the second assignment, you will be working with Firebase to perform CRUD",source:"@site/versioned_docs/version-2020fa/assignment2.md",slug:"/assignment2",permalink:"/docs/assignment2",version:"2020fa",sidebar:"docs",previous:{title:"Assignment 1",permalink:"/docs/assignment1"},next:{title:"Assignment 3",permalink:"/docs/assignment3"}},c=[{value:"Part 1: Creating the database",id:"part-1-creating-the-database",children:[]},{value:"Part 2: Manually make a collection",id:"part-2-manually-make-a-collection",children:[]},{value:"Part 3: Create new songs",id:"part-3-create-new-songs",children:[]},{value:"Part 4: Read the list of songs",id:"part-4-read-the-list-of-songs",children:[]},{value:"Part 5: Update a song&#39;s rating",id:"part-5-update-a-songs-rating",children:[]},{value:"Part 6: Delete a song",id:"part-6-delete-a-song",children:[]},{value:"Part 7: Submission",id:"part-7-submission",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"For the second assignment, you will be working with Firebase to perform CRUD\noperations and use queries on a database. In this assignment, we're going to\ncreate a database of songs."),Object(o.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"While writing this assignment, please have the app run on port ",Object(o.a)("inlineCode",{parentName:"p"},"8080"),".\nThis will make grading easier for us."))),Object(o.a)("h2",{id:"part-1-creating-the-database"},"Part 1: Creating the database"),Object(o.a)("p",null,"First, navigate to ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://firebase.google.com/"}),"Firebase")," and create a\nnew project. Go to the settings icon in the upper left, and click on it. Then,\nclick project settings and go to service accounts. Copy and paste the code\nsnippet provided into your ",Object(o.a)("inlineCode",{parentName:"p"},"index.ts")," file. Generate a new private key\nand and rename it to ",Object(o.a)("inlineCode",{parentName:"p"},"service-account.json"),". Put this file in the root of your\nproject. Go to the database section (in the navigation bar on the left) and\ncreate a new Firestore database."),Object(o.a)("h2",{id:"part-2-manually-make-a-collection"},"Part 2: Manually make a collection"),Object(o.a)("p",null,'After the Firestore database is created, make a new collection in the database\ncalled "Songs". Within this collection, create a document called "song1".\nThis document will have three fields, "name", "artist", and "rating", with\nrespective values "Never Gonna Give You Up", "Rick Astley", and your\npersonal rating of the song out of 5. At this point, your database should look\nsomething like this:'),Object(o.a)("img",{src:"/img/a2_db.png",height:"120px",width:"600px"}),Object(o.a)("h2",{id:"part-3-create-new-songs"},"Part 3: Create new songs"),Object(o.a)("p",null,"Write a ",Object(o.a)("inlineCode",{parentName:"p"},"POST")," request with route ",Object(o.a)("inlineCode",{parentName:"p"},"/createSong"),". This request will simply create\na new song document in the songs collection of the database. The id of the\ndocument should be AUTOMATICALLY generated, not a name of your choice."),Object(o.a)("p",null,"We will be passing information in the request body (",Object(o.a)("inlineCode",{parentName:"p"},"req.body"),") in the following format:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"{\n  name: string,\n  artist: string,\n  rating: int\n}\n\nThe endpoint should send back the ID of the added document to the frontend.\n")),Object(o.a)("h2",{id:"part-4-read-the-list-of-songs"},"Part 4: Read the list of songs"),Object(o.a)("p",null,"Write a ",Object(o.a)("inlineCode",{parentName:"p"},"GET")," request with route ",Object(o.a)("inlineCode",{parentName:"p"},"/getSongs"),". This will return a list of the\nsongs in the songs collection, sorted alphabetically by their name. The returned\nobjects should also contain the id of the song."),Object(o.a)("h2",{id:"part-5-update-a-songs-rating"},"Part 5: Update a song's rating"),Object(o.a)("p",null,"Write a ",Object(o.a)("inlineCode",{parentName:"p"},"POST")," request with route ",Object(o.a)("inlineCode",{parentName:"p"},"/updateRating"),". This request will update a\nspecific song's rating in the songs collection of the database. The song will\nbe identified by its ID in the collection."),Object(o.a)("p",null,"We will be passing information in the request body (",Object(o.a)("inlineCode",{parentName:"p"},"req.body"),") in the\nfollowing format:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"{\n  id: string,\n  rating: int\n}\n")),Object(o.a)("h2",{id:"part-6-delete-a-song"},"Part 6: Delete a song"),Object(o.a)("p",null,"Write a ",Object(o.a)("inlineCode",{parentName:"p"},"DELETE")," request with route ",Object(o.a)("inlineCode",{parentName:"p"},"/deleteSong"),". This request will delete\na specific song from the songs collection of the database. The song will be\nidentified by its ID in the collection."),Object(o.a)("p",null,"We will be passing the ID of the song in the query parameters (",Object(o.a)("inlineCode",{parentName:"p"},"req.query"),")\nas a parameter called ",Object(o.a)("inlineCode",{parentName:"p"},"id"),"."),Object(o.a)("p",null,"For example, a request to ",Object(o.a)("inlineCode",{parentName:"p"},"/deleteSong?id=song1")," would delete the song\nyou created in the first part of the assignment (But if you do try deleting\nthat specific one, make sure you add it back, because we will be testing\nthat it is there)."),Object(o.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"Don't know where to start? Reference the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/lecture3#SampleCode"}),"live coding demo Posts example")," from lecture 3! Also, get help in ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"introduction#when-are-office-hours"}),"office hours"),"!"))),Object(o.a)("h2",{id:"part-7-submission"},"Part 7: Submission"),Object(o.a)("p",null,"Submit your assignment as a zip containing your ",Object(o.a)("inlineCode",{parentName:"p"},"index.ts"),", ",Object(o.a)("inlineCode",{parentName:"p"},"package.json"),", and\n",Object(o.a)("inlineCode",{parentName:"p"},"yarn.lock")," files. When you submit your code, comment out the initializeApp statement\nin the code so we can test it against our own database. Don't worry, we won't\nfill your database with junk! \ud83d\ude0a\ud83d\ude0a\ud83d\ude0a"),Object(o.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"DO NOT submit your ",Object(o.a)("inlineCode",{parentName:"p"},"node_modules"),". We WILL deduct points for this.\nLots of points."))))}d.isMDXComponent=!0},107:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(a),b=n,u=m["".concat(r,".").concat(b)]||m[b]||p[b]||o;return a?i.a.createElement(u,s(s({ref:t},l),{},{components:a})):i.a.createElement(u,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);