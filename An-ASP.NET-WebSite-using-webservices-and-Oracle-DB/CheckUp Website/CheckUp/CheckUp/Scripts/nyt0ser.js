/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"a":"70902","c":[".tk-adrianna","\"adrianna\",sans-serif"],"f":"//use.typekit.net/c/5e3c2e/1w;adrianna,2,NDN:R:n3,NDL:R:n4,NDS:R:n7/{format}{/extras*}?3bb2a6e53c9684ffdc9a9bfe135b2a62619e5c28019a937bcbf0d7e0a58588cd6a5e415561898049bb9bb61d714bf500916c3b57947e746c12bcd4b385d7b81681ba4e4d10afa095cff3e2a61e1e674643441cfe8d1d01268d78375f46d409e91f695239abf2accc064d0693aa78f75305a3d8f5451ff4df9cb1d7d2b0612371fabce17777dcec87c648148c393af4d95f4150a470c269899089b821e16bfb49312d69a061d8c83a35fbce222b5fdc3dde5b014760ff798b778a1dffbd","fi":[749,751,755],"fn":["adrianna",["n3","n4","n7"]],"ht":"tk","js":"1.12.12","k":"//use.typekit.net/{id}.js","kt":"nyt0ser","l":"typekit","p":"//p.typekit.net/p.gif?s=1&k=nyt0ser&ht=tk&h={host}&f=749.751.755&a=70902&_={_}","ps":1,"w":"nyt0ser"};
/*{"k":"1.12.12","auto_updating":true}*/
;(function(window,document,undefined){
function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function h(a,b,c){h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return h.apply(null,arguments)}var ca=Date.now||function(){return+new Date};
function da(a,b){this.Fa=a;this.ea=b||a;this.B=this.ea.document}da.prototype.createElement=function(a,b,c){a=this.B.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.B.createTextNode(c));return a};function ea(a,b,c){a=a.B.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function fa(a,b){function c(){a.B.body?b():setTimeout(c,0)}c()}
function l(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ga(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ha(a){return a.ea.location.hostname||a.Fa.location.hostname}function ia(a,b,c,d){function e(a){for(var c=0;c<g.length;c++)if(g[c].href&&-1!==g[c].href.indexOf(b)){a();return}setTimeout(function(){e(a)},0)}var f=a.createElement("link",{rel:"stylesheet",href:b,media:d?"only x":"all"}),g=a.B.styleSheets,k=!1;f.onload=function(){k||(k=!0,c&&c(null))};f.onerror=function(){k||(k=!0,c&&c(Error("Stylesheet failed to load")))};ea(a,"head",f);d&&e(function(){f.media="all"})}
function ja(a,b,c){var d=a.B.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=!1;e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&d.removeChild(e))};d.appendChild(e);setTimeout(function(){f||(f=!0,c&&c(Error("Script load timeout")))},5E3)}}function ka(a){this.Da=a||"-"}
ka.prototype.h=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Da)};function la(a,b){this.e=a;this.u=a.ea.document.documentElement;this.Z=b;this.p="wf";this.o=new ka("-");this.ya=!1!==b.events;this.J=!1!==b.classes}function ma(a){if(a.J){var b=ga(a.u,a.o.h(a.p,"active")),c=[],d=[a.o.h(a.p,"loading")];b||c.push(a.o.h(a.p,"inactive"));l(a.u,c,d)}m(a,"inactive")}
function m(a,b,c){if(a.ya&&a.Z[b])if(c)a.Z[b](c.getName(),n(c));else a.Z[b]()}function q(a,b){this.X=a;this.ga=4;this.Y="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.Y=c[1],this.ga=parseInt(c[2],10))}q.prototype.getName=function(){return this.X};function n(a){return a.Y+a.ga}function s(a,b){this.e=a;this.G=b;this.r=this.e.createElement("span",{"aria-hidden":"true"},this.G)}function t(a){ea(a.e,"body",a.r)}
function u(a){var b;b=[];for(var c=a.X.split(/,\s*/),d=0;d<c.length;d++){var e=c[d].replace(/['"]/g,"");-1==e.indexOf(" ")?b.push(e):b.push("'"+e+"'")}b=b.join(",");c="normal";"o"===a.Y?c="oblique":"i"===a.Y&&(c="italic");return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b+";"+("font-style:"+c+";font-weight:"+(a.ga+"00")+";")}
s.prototype.remove=function(){var a=this.r;a.parentNode&&a.parentNode.removeChild(a)};
function na(a,b,c,d,e,f,g){this.ha=a;this.Ca=b;this.e=c;this.A=d;this.G=g||"BESbswy";this.I={};this.fa=e||3E3;this.pa=f||null;this.R=this.Q=this.P=this.O=null;this.O=new s(this.e,this.G);this.P=new s(this.e,this.G);this.Q=new s(this.e,this.G);this.R=new s(this.e,this.G);a=new q(this.A.getName()+",serif",n(this.A));a=u(a);this.O.r.style.cssText=a;a=new q(this.A.getName()+",sans-serif",n(this.A));a=u(a);this.P.r.style.cssText=a;a=new q("serif",n(this.A));a=u(a);this.Q.r.style.cssText=a;a=new q("sans-serif",
n(this.A));a=u(a);this.R.r.style.cssText=a;t(this.O);t(this.P);t(this.Q);t(this.R)}var w={Qa:"serif",Pa:"sans-serif"},oa=null;function pa(){if(null===oa){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);oa=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return oa}na.prototype.start=function(){this.I.serif=this.Q.r.offsetWidth;this.I["sans-serif"]=this.R.r.offsetWidth;this.Ia=ca();qa(this)};
function ra(a,b,c){for(var d in w)if(w.hasOwnProperty(d)&&b===a.I[w[d]]&&c===a.I[w[d]])return!0;return!1}function qa(a){var b=a.O.r.offsetWidth,c=a.P.r.offsetWidth,d;(d=b===a.I.serif&&c===a.I["sans-serif"])||(d=pa()&&ra(a,b,c));d?ca()-a.Ia>=a.fa?pa()&&ra(a,b,c)&&(null===a.pa||a.pa.hasOwnProperty(a.A.getName()))?sa(a,a.ha):sa(a,a.Ca):ta(a):sa(a,a.ha)}function ta(a){setTimeout(h(function(){qa(this)},a),50)}
function sa(a,b){setTimeout(h(function(){this.O.remove();this.P.remove();this.Q.remove();this.R.remove();b(this.A)},a),0)}function ua(a,b,c){this.e=a;this.F=b;this.aa=0;this.ta=this.oa=!1;this.fa=c}ua.prototype.za=function(a){var b=this.F;b.J&&l(b.u,[b.o.h(b.p,a.getName(),n(a).toString(),"active")],[b.o.h(b.p,a.getName(),n(a).toString(),"loading"),b.o.h(b.p,a.getName(),n(a).toString(),"inactive")]);m(b,"fontactive",a);this.ta=!0;va(this)};
ua.prototype.Aa=function(a){var b=this.F;if(b.J){var c=ga(b.u,b.o.h(b.p,a.getName(),n(a).toString(),"active")),d=[],e=[b.o.h(b.p,a.getName(),n(a).toString(),"loading")];c||d.push(b.o.h(b.p,a.getName(),n(a).toString(),"inactive"));l(b.u,d,e)}m(b,"fontinactive",a);va(this)};function va(a){0==--a.aa&&a.oa&&(a.ta?(a=a.F,a.J&&l(a.u,[a.o.h(a.p,"active")],[a.o.h(a.p,"loading"),a.o.h(a.p,"inactive")]),m(a,"active")):ma(a.F))}function x(){this.K=this.T=-1}x.prototype.now=function(){return(new Date).getTime()};
x.prototype.start=function(){this.T=this.now();this.K=-1};x.prototype.stop=function(){this.K=this.now()};function wa(){var a=[{name:"font-family",value:y.c[z+1]}];this.Ga=[y.c[z]];this.ka=a}function xa(a){for(var b=a.Ga.join(","),c=[],d=0;d<a.ka.length;d++){var e=a.ka[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function A(a,b,c,d){this.n=null!=a?a:null;this.w=null!=b?b:null;this.S=null!=c?c:null;this.h=null!=d?d:null}var ya=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
A.prototype.compare=function(a){return this.n>a.n||this.n===a.n&&this.w>a.w||this.n===a.n&&this.w===a.w&&this.S>a.S?1:this.n<a.n||this.n===a.n&&this.w<a.w||this.n===a.n&&this.w===a.w&&this.S<a.S?-1:0};function B(a,b){return-1===a.compare(b)}function D(a,b){return 0===a.compare(b)||1===a.compare(b)}function za(a,b){return 0===a.compare(b)||-1===a.compare(b)}function E(a,b){return 0===a.compare(b)}A.prototype.toString=function(){return[this.n,this.w||"",this.S||"",this.h||""].join("")};
function F(a){a=ya.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new A(b,c,d,e)}function G(a,b,c,d,e,f,g){this.X=a;this.q=b;this.D=c;this.C=d;this.m=e;this.g=f;this.ba=g}G.prototype.getName=function(){return this.X};function Aa(a,b){this.b=a;this.M=b}
var Ba=new G("Unknown",new A,"Unknown",new A,"Unknown",new A,void 0);
Aa.prototype.parse=function(){var a;if(-1!=this.b.indexOf("MSIE")||-1!=this.b.indexOf("Trident/")){a=H(this);var b=F(I(this)),c=null,d=null,e=null,e=J(this.b,/Trident\/([\d\w\.]+)/,1),f=K(this.M),c=-1!=this.b.indexOf("MSIE")?F(J(this.b,/MSIE ([\d\w\.]+)/,1)):F(J(this.b,/rv:([\d\w\.]+)/,1));""!=e?(d="Trident",e=F(e)):(d="Unknown",e=new A);a=new G("MSIE",c,d,e,a,b,f)}else if(-1!=this.b.indexOf("Edge/"))a=H(this),b=F(I(this)),c=F(J(this.b,/Edge\/([\d\w\.]+)/,1)),a=new G("Edge",c,"Edge",c,a,b,K(this.M));
else if(-1!=this.b.indexOf("Opera"))a:if(a="Unknown",b=F(J(this.b,/Presto\/([\d\w\.]+)/,1)),c=F(I(this)),d=K(this.M),null!==b.n?a="Presto":(-1!=this.b.indexOf("Gecko")&&(a="Gecko"),b=F(J(this.b,/rv:([^\)]+)/,1))),-1!=this.b.indexOf("Opera Mini/"))f=F(J(this.b,/Opera Mini\/([\d\.]+)/,1)),a=new G("OperaMini",f,a,b,H(this),c,d);else{if(-1!=this.b.indexOf("Version/")&&(f=F(J(this.b,/Version\/([\d\.]+)/,1)),null!==f.n)){a=new G("Opera",f,a,b,H(this),c,d);break a}f=F(J(this.b,/Opera[\/ ]([\d\.]+)/,1));
a=null!==f.n?new G("Opera",f,a,b,H(this),c,d):new G("Opera",new A,a,b,H(this),c,d)}else/OPR\/[\d.]+/.test(this.b)?a=Ca(this):/AppleWeb(K|k)it/.test(this.b)?a=Ca(this):-1!=this.b.indexOf("Gecko")?(a="Unknown",b=new A,c=F(I(this)),-1!=this.b.indexOf("Firefox")?(a="Firefox",b=F(J(this.b,/Firefox\/([\d\w\.]+)/,1))):-1!=this.b.indexOf("Mozilla")&&(a="Mozilla"),d=F(J(this.b,/rv:([^\)]+)/,1)),a=new G(a,b,"Gecko",d,H(this),c,K(this.M))):a=Ba;return a};
function H(a){var b=J(a.b,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=J(a.b,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function I(a){var b=J(a.b,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=J(a.b,/Windows Phone( OS)? ([^;)]+)/,2))||(b=J(a.b,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=J(a.b,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=J(a.b,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function Ca(a){var b=H(a),c=F(I(a)),d=F(J(a.b,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new A,f="Unknown";/OPR\/[\d.]+/.test(a.b)?e="Opera":-1!=a.b.indexOf("Chrome")||-1!=a.b.indexOf("CrMo")||-1!=a.b.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.b)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.b.indexOf("PhantomJS")?e="PhantomJS":-1!=a.b.indexOf("Safari")?e="Safari":-1!=a.b.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.b.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
e?f="Unknown":"Silk"==e?f=J(a.b,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=J(a.b,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.b.indexOf("Version/")?f=J(a.b,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=J(a.b,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=J(a.b,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=J(a.b,/PhantomJS\/([\d.]+)/,1));f=F(f);return new G(e,f,"AppleWebKit",d,b,c,K(a.M))}function J(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function K(a){if(a.documentMode)return a.documentMode}function Da(a){this.e=a}
Da.prototype.toString=function(){return encodeURIComponent(ha(this.e))};function Ea(a,b){this.s=a;this.t=b}Ea.prototype.toString=function(){for(var a=[],b=0;b<this.t.length;b++)for(var c=this.t[b],d=c.H(),c=c.H(this.s),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=!0;break a}f=!1}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)b.unshift(parseInt(a.slice(0>d-4?0:d-4,d),2).toString(16));return b.join("")};function N(a){this.Ka=a}
N.prototype.h=function(a){var b=a||{};a=this.Ka.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,d,e){return e&&b[d]?"/"+b[d].join("/"):b[d]||""});a.match(/^\/\//)&&(a="https:"+a);return a.replace(/\/*\?*($|\?)/,"$1")};function Fa(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d].toString());return{format:a,extras:c}}function Ga(a,b){this.N=a;this.W=b;this.ma={};this.la={}}Ga.prototype.H=function(a){return a?(this.ma[a]||this.W).slice(0):this.W.slice(0)};
function Ha(a,b,c){for(var d=[],e=a.N.split(",")[0].replace(/"|'/g,""),f=a.H(),g,k=[],C={},r=0;r<f.length;r++)g=f[r],0<g.length&&!C[g]&&(C[g]=!0,k.push(g));c=c.ra?c.ra(e,k,d):k;a.ma[b]=c;a.la[b]=d}function Ia(a,b){for(var c=a.H(b),d=a.la[b]||[],e=[],f=0;f<c.length;f++)e.push(new q(a.N,c[f]));for(f=0;f<d.length;f++)if(c=d[f].N,c!==a.N)for(var g=d[f].H(),k=0;k<g.length;k++)e.push(new q(c,g[k]));return e}function Ja(a,b){this.N=a;this.W=b}Ja.prototype.H=function(){return this.W};
function Ka(a,b,c,d,e,f,g){this.Ha=a;this.Ba=b;this.V=c||[];this.va=d||null;this.Ja=e||null;this.version=f||null;this.xa=g||null}
Ka.prototype.send=function(a,b,c){var d=new N("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&js={version}&_={_}"),e=encodeURIComponent((window.__adobewebfontsappname__||this.xa||"").toString().substr(0,20));a=encodeURIComponent(ha(a));var f=[],g=[];window.Typekit.fonts||(window.Typekit.fonts=[]);for(var g=window.Typekit.fonts,k=0;k<this.V.length;k++){for(var C=!1,r=0;r<g.length;r++)if(this.V[k]===g[r]){C=
!0;break}C||(f.push(this.V[k]),g.push(this.V[k]))}f.length&&La(d.h({service:this.Ha,token:this.Ja,app:e,hosting:this.Ba,host:a,variations:f.join("."),account:this.va,stylesheetLoadTime:b,fontLoadTime:c,version:this.version,_:(+new Date).toString()}))};function La(a){var b=new Image(1,1),c=!1;b.src=a;b.onload=function(){c=!0;b.onload=null};setTimeout(function(){c||(b.src="about:blank",b.onload=null)},3E3)}function Ma(){this.ia=this.ua=this.L=this.ca=this.da=!0}function O(a){return"Windows"===a.m}
function Na(a){return O(a)&&D(a.g,new A(6,1))}function P(a){return O(a)&&E(a.g,new A(5,1))||O(a)&&E(a.g,new A(5,2))||O(a)&&E(a.g,new A(6,0))||Na(a)}function Q(a){return"Macintosh"===a.m&&(D(a.g,new A(10,4))||null===a.g.n)}function Oa(a,b){return b.da&&("iPhone"===a.m||"iPod"===a.m)&&D(a.g,new A(4,2))&&B(a.g,new A(5))}function Qa(a,b){return b.da&&("iPhone"===a.m||"iPod"===a.m)&&D(a.g,new A(5))}function Ra(a,b){return b.ca&&"iPad"===a.m&&D(a.g,new A(4,2))&&B(a.g,new A(5))}
function Sa(a,b){return b.ca&&"iPad"===a.m&&D(a.g,new A(5))}function R(a,b){return b.L&&"Android"===a.m}function Ta(a,b){return R(a,b)&&D(a.g,new A(2,2))&&B(a.g,new A(3,1))}function Ua(a,b){return R(a,b)&&D(a.g,new A(3,1))&&B(a.g,new A(4,1))}function S(a){return"Linux"===a.m||"Ubuntu"===a.m}function Va(a){return"Safari"===a.getName()&&"AppleWebKit"===a.D||"Unknown"===a.getName()&&"AppleWebKit"===a.D&&("iPhone"===a.m||"iPad"===a.m||"iPod"===a.m)}
function Wa(a){return"Chrome"===a.getName()&&D(a.q,new A(6))&&za(a.q,new A(35))}function Xa(a){return"BuiltinBrowser"===a.getName()}function Ya(a){this.ra=a}function Za(a,b){return b}
var U={Na:"a",Sa:"d",Ma:"i",Oa:"j",La:"k",Ra:"l",NONE:"x"},V={a:function(a,b){return"Safari"===a.getName()&&"AppleWebKit"===a.D&&D(a.C,new A(525,13))&&B(a.C,new A(534,50))&&(P(a)||Q(a))||Xa(a)&&(Ta(a,b)||R(a,b)&&D(a.g,new A(4,1)))||b.L&&"Silk"===a.getName()&&B(a.q,new A(2))&&(Ta(a,b)||Q)||b.L&&"Silk"===a.getName()&&D(a.q,new A(2))&&R(a,b)&&D(a.g,new A(4,1))||Va(a)&&(Ra(a,b)||Oa(a,b))||Wa(a)&&(Ra(a,b)||Oa(a,b))||"Chrome"===a.getName()&&D(a.q,new A(36))&&(Ra(a,b)||Oa(a,b))||"AdobeAIR"===a.getName()&&
D(a.q,new A(2,5))&&(O(a)&&null===a.g.n||S(a)||Q(a))},d:function(a,b){var c;(c=Wa(a)&&(P(a)||S(a)||Q(a)||R(a,b)||"CrOS"===a.m||"CrKey"===a.m||Sa(a,b)||Qa(a,b)))||(c="Gecko"===a.D&&1===a.C.compare(new A(1,9,1))&&za(a.C,new A(38))&&(P(a)||S(a)||Q(a)||R(a,b)));(c=c||"Safari"===a.getName()&&"AppleWebKit"===a.D&&D(a.C,new A(534,50))&&(P(a)||Q(a))||Va(a)&&(Sa(a,b)||Qa(a,b)))||(c="Opera"===a.getName()&&D(a.q,new A(11,10))&&za(a.q,new A(22))&&(P(a)||S(a)||Q(a)||R(a,b)));return c||"MSIE"===a.getName()&&9<=
a.ba&&(Na(a)||O(a)&&E(a.g,new A(6,0)))||"Edge"===a.getName()&&Na(a)||"MSIE"===a.getName()&&b.ua&&"Windows Phone"===a.m&&D(a.g,new A(8))||Xa(a)&&(b.ia&&"BlackBerry"===a.m&&D(a.g,new A(10))||S(a))},j:function(a,b){return Xa(a)&&Ua(a,b)||b.L&&"Silk"===a.getName()&&D(a.q,new A(2))&&(Ua(a,b)||S(a))},i:function(a){return"MSIE"===a.getName()&&D(a.q,new A(6,0))&&(void 0===a.ba||9>a.ba)&&P(a)},l:function(a,b){return"Chrome"===a.getName()&&D(a.q,new A(36))&&(P(a)||S(a)||Q(a)||R(a,b)||"CrOS"===a.m||"CrKey"===
a.m||Sa(a,b)||Qa(a,b))||"Gecko"===a.D&&D(a.C,new A(39))&&(P(a)||S(a)||Q(a)||R(a,b))||"Opera"===a.getName()&&D(a.q,new A(23))&&(P(a)||S(a)||Q(a)||R(a,b))},x:function(){return!1}},$a={};
$a.i=new Ya(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f;f=e;f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+f;c.push(new Ja(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++){f=c[e];for(var g=0;g<f.length;g++){var k=f[g];if(a[k]){d=d.concat(a[k]);break}}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=!0,a.push(f));c=[];for(d=0;d<b.length;d++)for(e=b[d],f=0;f<a.length;f++)g=a[f],
g==e&&c.push(g);return c});var W={};W.a=W.d=W.l=W.j=function(){return[]};W.i=function(a,b,c){return[new Da(a),new Ea(b,c)]};W.k=function(a){return[new Da(a)]};function ab(a,b,c){return W[b](a,b,c)}function X(a){this.e=a;this.s="x";this.ja=this.b=null;this.t=[];this.U=[];this.na=this.$=null}X.prototype.supportsConfiguredBrowser=function(){return"x"!==this.s};
X.prototype.init=function(){if(0<this.U.length){for(var a=[],b=0;b<this.U.length;b++)a.push(xa(this.U[b]));var b=this.e,a=a.join(""),c=this.e.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));ea(b,"head",c)}};
X.prototype.load=function(a,b,c){function d(){}var e=this,f=c||{},g=f.contextPath||".",k=f.hostname||this.na;a=f.timeout;c=!!f.async;var C=!1!==f.events,r=null,L=new x,M=new x;f.active&&(d=f.active);f.active=function(){M.stop();e.qa&&e.qa.send(e.e,-1!==L.T&&-1!==L.K?L.K-L.T:-1,-1!==M.T&&-1!==M.K?M.K-M.T:-1);d()};r=new la(this.e,f);if(this.s){for(var f=$a[this.s]||new Ya(Za),p=0;p<this.t.length;p++)Ha(this.t[p],this.s,f);this.$&&(f=ab(this.e,this.s,this.t),f=Fa(this.s,f),f.contextPath=g,k&&(f.hostname=
k),g=this.$.h(f),L.start(),ia(this.e,g,function(){L.stop();M.start()},c));if(C){for(var T=[],Pa={},v=new ua(this.e,r,a),p=0;p<this.t.length;p++)T=T.concat(Ia(this.t[p],this.s));for(p=0;p<T.length;p++)Pa[T[p].getName()]="BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006";fa(this.e,function(){var a=T,c={},d=Pa||{};if(0===a.length&&b)ma(v.F);else{v.aa+=a.length;b&&(v.oa=b);var e,f=[];for(e=0;e<a.length;e++){var g=a[e],k=d[g.getName()],p=v.F,r=g;p.J&&l(p.u,[p.o.h(p.p,r.getName(),n(r).toString(),"loading")]);
m(p,"fontloading",r);p=null;p=new na(h(v.za,v),h(v.Aa,v),v.e,g,v.fa,c,k);f.push(p)}for(e=0;e<f.length;e++)f[e].start()}})}}};X.prototype.performOptionalActions=function(){};function bb(a,b,c,d){this.Ea=a;this.e=b;this.b=c;this.u=d;this.v=[]}bb.prototype.wa=function(a){this.v.push(a)};bb.prototype.load=function(a,b){var c=a,d=b||{};"string"==typeof c?c=[c]:c&&c.length||(d=c||{},c=[]);if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++)cb(this,c[g],function(){0==--f&&db(e,d)});else db(this,d)};
function cb(a,b,c){b=a.Ea.h({id:encodeURIComponent(b)});ja(a.e,b,c)}function db(a,b){if(0!=a.v.length){for(var c=new la(a.e,b),d=!1,e=0;e<a.v.length;e++)a.v[e].init(),d=d||a.v[e].supportsConfiguredBrowser();if(d)for(c.J&&l(c.u,[c.o.h(c.p,"loading")]),m(c,"loading"),c=0;c<a.v.length;c++)d=a.v[c],d.supportsConfiguredBrowser()&&d.load(null,c==a.v.length-1,b);else ma(c);a.v=[]}}var eb=(new Aa(navigator.userAgent,document)).parse(),fb=new da(window);window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var gb=window.Typekit.config||{},hb=null;gb.k&&(hb=new N(gb.k));var ib=new bb(hb,fb,eb,document.documentElement);window.Typekit.load=function(){ib.load.apply(ib,arguments)};window.Typekit.addKit=function(){ib.wa.apply(ib,arguments)}}var jb,Y,Z,y=window.Typekit.config||{};Z=new X(fb);Z.qa=new Ka(y.ps,y.ht,y.fi,y.a,y.kt,y.js,y.l);Y=new Ma;Y.da=!y.si;Y.ca=!y.st;Y.L=!y.sa;Y.ua=!y.sw;Y.ia=!y.sb;Z.ja=Y;y.f&&(jb=new N(y.f),Z.$=jb);y.hn&&(Z.na=y.hn);var z;
if(y.fn)for(z=0;z<y.fn.length;z+=2)Z.t.push(new Ga(y.fn[z],y.fn[z+1]));if(y.c)for(z=0;z<y.c.length;z+=2)Z.U.push(new wa);Z.b=eb;var kb;a:{var lb=Z.b,mb=new Ma,nb=Z.ja||mb,ob;for(ob in U){var $=U[ob];if(V[$]&&V[$](lb,nb)){kb=$;break a}}for(ob in U)if($=U[ob],V[$]&&V[$](lb,mb)){kb="x";break a}kb="k"}Z.s=kb;window.Typekit.addKit(Z);if(window.WebFont)try{window.Typekit.load()}catch(pb){};
})(this,document);
