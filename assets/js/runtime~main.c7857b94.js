!function(){"use strict";var e,c,f,a,d,b={},t={};function n(e){var c=t[e];if(void 0!==c)return c.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,n),f.loaded=!0,f.exports}n.m=b,n.c=t,e=[],n.O=function(c,f,a,d){if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],a=e[i][1],d=e[i][2];for(var t=!0,r=0;r<f.length;r++)(!1&d||b>=d)&&Object.keys(n.O).every((function(e){return n.O[e](f[r])}))?f.splice(r--,1):(t=!1,d<b&&(b=d));if(t){e.splice(i--,1);var o=a();void 0!==o&&(c=o)}}return c}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,a,d]},n.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(c,{a:c}),c},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var d=Object.create(null);n.r(d);var b={};c=c||[null,f({}),f([]),f(f)];for(var t=2&a&&e;"object"==typeof t&&!~c.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((function(c){b[c]=function(){return e[c]}}));return b.default=function(){return e},n.d(d,b),d},n.d=function(e,c){for(var f in c)n.o(c,f)&&!n.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:c[f]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(c,f){return n.f[f](e,c),c}),[]))},n.u=function(e){return"assets/js/"+({192:"b84c401c",358:"8caf5144",365:"ceaa4c24",387:"c50c920e",428:"42faf210",578:"05cc7069",634:"00778435",710:"d8bcf37c",720:"f94d816f",804:"5c65e767",824:"8fb4e078",996:"a8a7ed98",1235:"d75a6d43",1265:"ad820646",1307:"cf8cc687",1312:"3cf3f69d",1406:"eb2864df",1430:"d37109ed",1477:"b2f554cd",1664:"d88cf764",1801:"73891349",1810:"891ae17b",1883:"de5b8704",1890:"b7992291",1977:"5b6eab1f",2012:"42c7ba3f",2013:"c268139f",2020:"2895e284",2047:"7a4c4d02",2064:"e680130f",2140:"25289d1f",2152:"19667349",2176:"0e4b1fab",2212:"1b59971a",2240:"381009a3",2245:"88f6781a",2410:"ae0b2600",2432:"1dee71fb",2484:"97ad368c",2499:"c237f4aa",2529:"c1bc302a",2601:"7db33633",2632:"7bd006db",2691:"a38a8c5b",2826:"67a7304f",2938:"2d3a4042",2987:"b03dc5af",3066:"e1c92344",3112:"7e722b0b",3237:"1df93b7f",3350:"c6c85278",3365:"1157a7ce",3510:"06509df0",3608:"9e4087bc",3624:"427f9d2c",3626:"06d7c6a6",3778:"34c5a6f4",3834:"c2b05852",3839:"e2da632e",3847:"d50786d6",3981:"05e07559",3991:"ce43e1ab",4038:"145263d1",4057:"5eb252c6",4059:"dd1ba448",4090:"5a121968",4095:"21369d76",4135:"9bd82af6",4182:"400a63e5",4204:"bccda9ab",4275:"22af830d",4289:"3bf54008",4315:"7db104a6",4318:"bb5b1104",4362:"fa4938a4",4390:"c69b0f77",4394:"cd5829fe",4444:"ad56e53d",4460:"3763debd",4480:"520e741b",4606:"f72aea3c",4614:"1f0a6afa",4645:"168821de",4735:"0217f38f",4807:"fafed6e2",4858:"25010c81",4905:"e3292145",4934:"f96f683d",5017:"41411fc6",5028:"6490f083",5114:"897da7a1",5154:"632d44fb",5235:"cd83c525",5237:"a5e0de92",5272:"456160f4",5298:"7154c974",5397:"dd823266",5405:"254b729f",5411:"f36f9871",5496:"6a1de0a6",5568:"4f0692d8",5609:"34340b99",5701:"2efd7a92",5777:"c5e87426",5846:"6595de78",5886:"e61e02b7",6173:"4b699842",6270:"a4717cd4",6338:"ffa6c9f2",6370:"07779d85",6536:"15498faf",6579:"614cf394",6582:"44007af7",6623:"597354b5",6704:"4f4cba50",6763:"4b587976",6876:"59676426",7002:"6749d6f8",7047:"e6cfed0b",7062:"58bb1d0f",7084:"9f56bb44",7123:"f586e6d6",7175:"7ab326c8",7181:"e93d9e53",7279:"5669fd4b",7322:"4e1c8eee",7415:"d93177cc",7476:"1170099e",7536:"d53926b7",7576:"765754c9",7708:"63a834f3",7783:"6f70a0e0",7863:"962797aa",7894:"7a5c4182",7918:"17896441",7990:"676a7c04",7997:"3ac44098",8022:"285fefd4",8039:"a916eec8",8159:"8c3bc699",8163:"b234e68d",8206:"ca5dcf79",8380:"9510f52e",8478:"eb57aecd",8553:"da118e27",8659:"97b2708e",8798:"5d0496e2",8842:"219c64ca",8956:"d7dd9adb",8994:"67fcd22c",9027:"0682386b",9068:"4d09f4bc",9099:"38c5d5d8",9164:"549b9273",9242:"9d61e91f",9275:"1beda944",9333:"98389a97",9342:"9bdd131d",9406:"9e74f5e4",9411:"d8dbc24c",9492:"0ff9b5aa",9511:"06450c56",9514:"1be78505",9731:"af2e0600",9807:"e659d385",9826:"afef7079",9861:"9d708b7f",9862:"a8144ba4",9909:"326e4659",9912:"b391e7a8",9966:"a05c6a31"}[e]||e)+"."+{192:"3b4391ac",358:"cd07b03a",365:"208b88cd",387:"2fda8160",428:"99aa1d9a",578:"e5bf95ba",634:"144909c3",710:"3c7a3975",720:"617a5c49",804:"d8ddc54e",824:"476c181c",996:"e8a652f9",1235:"3d81cdb5",1265:"4cd25066",1307:"0692381b",1312:"fb8a04b6",1406:"92e3326f",1430:"fb61b49a",1477:"5a819867",1664:"38ead513",1801:"9bb852e8",1810:"5506248a",1883:"f941ca2c",1890:"77506ebb",1977:"21bb9a3d",2012:"481927e7",2013:"0ab3014a",2020:"debf42df",2047:"c68e5f5f",2064:"f1d166cd",2140:"2974b270",2152:"a2deaa39",2176:"5ccd38d7",2212:"c7f01392",2240:"75583de8",2245:"7de19d51",2410:"f3a6b8a4",2432:"4dba0703",2484:"e32698a3",2499:"d8df595c",2529:"62247e14",2601:"c0fe04ac",2632:"61f00b2b",2691:"ba9e841a",2826:"05b201c8",2938:"d526a09b",2987:"49fe48f3",3066:"8a4fec1a",3112:"e0a05e85",3237:"2e36eb0d",3350:"d6fdf0d4",3365:"74a8a9ec",3510:"c8d6d11f",3608:"5768e1ae",3624:"9986d4f8",3626:"adcf8197",3778:"28c035ea",3834:"4a30be67",3839:"6bd0aee8",3847:"1bc50e04",3981:"2b51e72d",3991:"654bb1f8",4038:"ad11ce93",4057:"19b53464",4059:"60fa7182",4090:"531eb7ec",4095:"b4443603",4135:"b654f110",4182:"d1fb484e",4204:"2d60aacb",4275:"211a283d",4289:"33d40e44",4315:"2ea32fa4",4318:"9ad83bf0",4362:"4bf68ac5",4390:"9196cd40",4394:"5e5bbed8",4444:"b9403d1d",4460:"354d20b3",4480:"350bac7a",4606:"4198a58c",4608:"53ff98dc",4614:"829eb37c",4645:"72e442ba",4735:"ba243b97",4807:"ecdffa79",4858:"1e4ca3ef",4905:"00f913ce",4934:"eb070f32",5017:"99cf8172",5028:"9c40b57f",5114:"88a44163",5154:"1fcc21f6",5186:"7c6e5928",5235:"9eb06137",5237:"caa5d94e",5272:"261354fd",5298:"4d781fc8",5397:"da648faa",5405:"e2ceb146",5411:"4d145122",5496:"59ce1a8e",5568:"04f14d33",5609:"f8020f56",5701:"f2c74736",5777:"415fede1",5846:"4d679714",5886:"a83005cf",6173:"234d2853",6270:"ffe37a89",6338:"0b060d09",6370:"5e97ac4a",6536:"17980858",6579:"31e02b5c",6582:"1b3b1faa",6623:"1c61344b",6704:"b6bf895e",6763:"30c6f7c0",6876:"0144f703",7002:"802de2ed",7047:"0a3e3466",7062:"c2d770bb",7084:"64123872",7123:"ccfc7a3a",7175:"19ce2668",7181:"65a567f9",7279:"6f88c1cb",7322:"d069c8d5",7415:"a26d01b2",7476:"61d121c2",7536:"9342aeb5",7576:"ad7515ef",7708:"c3862b34",7783:"9ab4b19f",7863:"8ce47750",7894:"8bd7be8f",7918:"9b2a3826",7990:"b007d088",7997:"3ead5c3f",8022:"55c0e181",8039:"84c79500",8159:"dedbff1c",8163:"607d1176",8206:"bfb9111a",8380:"0abdb5ca",8478:"83c0b51a",8553:"760932ed",8659:"1411a7b9",8798:"b5615edb",8842:"b83f66ad",8956:"d74bf9f0",8994:"06a184fd",9027:"4cc65f14",9068:"3a4aa3ea",9099:"87099580",9164:"699e5e93",9242:"0e3bc77b",9275:"4522b634",9333:"4401ab62",9342:"5603e220",9406:"d898be80",9411:"f60f7d6b",9492:"a5f6f190",9511:"07c27b96",9514:"b5efdd25",9558:"3f400288",9731:"4aa6b3e4",9807:"44205dd4",9826:"3d1f78b9",9861:"978de107",9862:"6a4500c6",9909:"cd069e7f",9912:"65cc517f",9966:"b736d686"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.53ee0a34.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a={},d="trends-in-web-dev-website:",n.l=function(e,c,f,b){if(a[e])a[e].push(c);else{var t,r;if(void 0!==f)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var u=o[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+f){t=u;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",d+f),t.src=e),a[e]=[c];var s=function(c,f){t.onerror=t.onload=null,clearTimeout(l);var d=a[e];if(delete a[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((function(e){return e(f)})),c)return c(f)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.gca=function(e){return e={17896441:"7918",19667349:"2152",59676426:"6876",73891349:"1801",b84c401c:"192","8caf5144":"358",ceaa4c24:"365",c50c920e:"387","42faf210":"428","05cc7069":"578","00778435":"634",d8bcf37c:"710",f94d816f:"720","5c65e767":"804","8fb4e078":"824",a8a7ed98:"996",d75a6d43:"1235",ad820646:"1265",cf8cc687:"1307","3cf3f69d":"1312",eb2864df:"1406",d37109ed:"1430",b2f554cd:"1477",d88cf764:"1664","891ae17b":"1810",de5b8704:"1883",b7992291:"1890","5b6eab1f":"1977","42c7ba3f":"2012",c268139f:"2013","2895e284":"2020","7a4c4d02":"2047",e680130f:"2064","25289d1f":"2140","0e4b1fab":"2176","1b59971a":"2212","381009a3":"2240","88f6781a":"2245",ae0b2600:"2410","1dee71fb":"2432","97ad368c":"2484",c237f4aa:"2499",c1bc302a:"2529","7db33633":"2601","7bd006db":"2632",a38a8c5b:"2691","67a7304f":"2826","2d3a4042":"2938",b03dc5af:"2987",e1c92344:"3066","7e722b0b":"3112","1df93b7f":"3237",c6c85278:"3350","1157a7ce":"3365","06509df0":"3510","9e4087bc":"3608","427f9d2c":"3624","06d7c6a6":"3626","34c5a6f4":"3778",c2b05852:"3834",e2da632e:"3839",d50786d6:"3847","05e07559":"3981",ce43e1ab:"3991","145263d1":"4038","5eb252c6":"4057",dd1ba448:"4059","5a121968":"4090","21369d76":"4095","9bd82af6":"4135","400a63e5":"4182",bccda9ab:"4204","22af830d":"4275","3bf54008":"4289","7db104a6":"4315",bb5b1104:"4318",fa4938a4:"4362",c69b0f77:"4390",cd5829fe:"4394",ad56e53d:"4444","3763debd":"4460","520e741b":"4480",f72aea3c:"4606","1f0a6afa":"4614","168821de":"4645","0217f38f":"4735",fafed6e2:"4807","25010c81":"4858",e3292145:"4905",f96f683d:"4934","41411fc6":"5017","6490f083":"5028","897da7a1":"5114","632d44fb":"5154",cd83c525:"5235",a5e0de92:"5237","456160f4":"5272","7154c974":"5298",dd823266:"5397","254b729f":"5405",f36f9871:"5411","6a1de0a6":"5496","4f0692d8":"5568","34340b99":"5609","2efd7a92":"5701",c5e87426:"5777","6595de78":"5846",e61e02b7:"5886","4b699842":"6173",a4717cd4:"6270",ffa6c9f2:"6338","07779d85":"6370","15498faf":"6536","614cf394":"6579","44007af7":"6582","597354b5":"6623","4f4cba50":"6704","4b587976":"6763","6749d6f8":"7002",e6cfed0b:"7047","58bb1d0f":"7062","9f56bb44":"7084",f586e6d6:"7123","7ab326c8":"7175",e93d9e53:"7181","5669fd4b":"7279","4e1c8eee":"7322",d93177cc:"7415","1170099e":"7476",d53926b7:"7536","765754c9":"7576","63a834f3":"7708","6f70a0e0":"7783","962797aa":"7863","7a5c4182":"7894","676a7c04":"7990","3ac44098":"7997","285fefd4":"8022",a916eec8:"8039","8c3bc699":"8159",b234e68d:"8163",ca5dcf79:"8206","9510f52e":"8380",eb57aecd:"8478",da118e27:"8553","97b2708e":"8659","5d0496e2":"8798","219c64ca":"8842",d7dd9adb:"8956","67fcd22c":"8994","0682386b":"9027","4d09f4bc":"9068","38c5d5d8":"9099","549b9273":"9164","9d61e91f":"9242","1beda944":"9275","98389a97":"9333","9bdd131d":"9342","9e74f5e4":"9406",d8dbc24c:"9411","0ff9b5aa":"9492","06450c56":"9511","1be78505":"9514",af2e0600:"9731",e659d385:"9807",afef7079:"9826","9d708b7f":"9861",a8144ba4:"9862","326e4659":"9909",b391e7a8:"9912",a05c6a31:"9966"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(c,f){var a=n.o(e,c)?e[c]:void 0;if(0!==a)if(a)f.push(a[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var d=new Promise((function(f,d){a=e[c]=[f,d]}));f.push(a[2]=d);var b=n.p+n.u(c),t=new Error;n.l(b,(function(f){if(n.o(e,c)&&(0!==(a=e[c])&&(e[c]=void 0),a)){var d=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+c+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,a[1](t)}}),"chunk-"+c,c)}},n.O.j=function(c){return 0===e[c]};var c=function(c,f){var a,d,b=f[0],t=f[1],r=f[2],o=0;if(b.some((function(c){return 0!==e[c]}))){for(a in t)n.o(t,a)&&(n.m[a]=t[a]);if(r)var i=r(n)}for(c&&c(f);o<b.length;o++)d=b[o],n.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return n.O(i)},f=self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[];f.forEach(c.bind(null,0)),f.push=c.bind(null,f.push.bind(f))}()}();