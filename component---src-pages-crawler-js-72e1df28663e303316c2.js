(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+22N":function(e,t,o){"use strict";var l=o("dI71"),n=o("dwco"),r=o.n(n),i=o("q1tI"),a=o.n(i);const s=e=>e.children;let c=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(l.a)(t,e);var o=t.prototype;return o.componentDidMount=function(){r.a.polyfill()},o.handleClick=function(e){e.preventDefault();let t=0,o=!0;const{type:l,element:n,offset:r,timeout:i}=this.props;if(l&&n)switch(l){case"class":t=document.getElementsByClassName(n)[0],o=!!t;break;case"id":t=document.getElementById(n),o=!!t}o?this.scrollTo(t,r,i):console.log("Element not found: "+n)},o.scrollTo=function(e,t,o){void 0===t&&(t=0),void 0===o&&(o=null);const l=e?e.getBoundingClientRect().top+window.pageYOffset:0;o?setTimeout(()=>{window.scroll({top:l+t,left:0,behavior:"smooth"})},o):window.scroll({top:l+t,left:0,behavior:"smooth"})},o.render=function(){return a.a.createElement(s,null,"object"==typeof this.props.children?a.a.cloneElement(this.props.children,{onClick:this.handleClick}):a.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(a.a.Component);t.a=c},JwsL:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var l=o("q1tI"),n=o.n(l),r=o("obyI"),i=o.n(r);function a(){return n.a.createElement("footer",{id:"footer"},n.a.createElement("ul",{className:"icons"},i.a.socialLinks.map(e=>{const{icon:t,url:o,name:l}=e;return n.a.createElement("li",{key:o},n.a.createElement("a",{className:"icon "+t,href:o},n.a.createElement("span",{className:"label"},l)))})),n.a.createElement("p",{className:"copyright"},"© Yuuki Miyoshi",n.a.createElement("br",null),"(Gatsby starter:",n.a.createElement("a",{href:"https://github.com/anubhavsrivastava/gatsby-starter-fractal"},"gatsby-starter-fractal"),", Original HTML/CSS Theme : Fractal by ",n.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"),")"))}},dwco:function(e,t,o){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var o,l=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:l.prototype.scroll||a,scrollIntoView:l.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(o=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?m.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;m.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var o=u(this),l=o.getBoundingClientRect(),r=this.getBoundingClientRect();o!==t.body?(m.call(this,o,o.scrollLeft+r.left-l.left,o.scrollTop+r.top-l.top),"fixed"!==e.getComputedStyle(o).position&&e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function a(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function f(t,o){var l=e.getComputedStyle(t,null)["overflow"+o];return"auto"===l||"scroll"===l}function p(e){var t=c(e,"Y")&&f(e,"Y"),o=c(e,"X")&&f(e,"X");return t||o}function u(e){for(;e!==t.body&&!1===p(e);)e=e.parentNode||e.host;return e}function h(t){var o,l,n,i,a=(r()-t.startTime)/468;i=a=a>1?1:a,o=.5*(1-Math.cos(Math.PI*i)),l=t.startX+(t.x-t.startX)*o,n=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,l,n),l===t.x&&n===t.y||e.requestAnimationFrame(h.bind(e,t))}function m(o,l,i){var s,c,f,p,u=r();o===t.body?(s=e,c=e.scrollX||e.pageXOffset,f=e.scrollY||e.pageYOffset,p=n.scroll):(s=o,c=o.scrollLeft,f=o.scrollTop,p=a),h({scrollable:s,method:p,startTime:u,startX:c,startY:f,x:l,y:i})}}}}()},iGtn:function(e,t,o){"use strict";o.r(t);var l=o("q1tI"),n=o.n(l),r=o("7oih"),i=(o("+22N"),o("JwsL"));t.default=()=>n.a.createElement(r.a,null,n.a.createElement("section",{id:"two",className:"wrapper"},n.a.createElement("div",{className:"inner alt"},n.a.createElement("section",{className:"special"},n.a.createElement("p",null,"I am an individual developer who uses a crawler named ",n.a.createElement("b",null,'"ym-crawler-h"')," to collect data from multiple sites. The collected data is stored on my own data server and is used for my personal natural language processing learning and development. Although I will not directly release the data externally, but I may release the deep learning model that learned the data in the future."),n.a.createElement("p",null,'I consider the content of "robots.txt" to be the site\'s crawl policy, and crawler follow this policy when crawling. If you want to directly prohibit or control it, you can specify the following user agent.'),n.a.createElement("p",null,'User agent of "ym-crawler-h":',n.a.createElement("br",null),'"Mozilla/5.0 (compatible; ym-crawler-h +https://yuukimiyoshi.info/crawler)"'),n.a.createElement("p",null,"If you have any questions or requests, please use the email address in the footer of this page.",n.a.createElement("br",null),"Thank you.")))),n.a.createElement(i.a,null))},obyI:function(e,t){e.exports={siteTitle:"yuukimiyoshi.info",manifestName:"yuuki miyoshi",manifestShortName:"ymiyoshi",manifestStartUrl:"/",manifestBackgroundColor:"#ffffff",manifestThemeColor:"#ffffff",manifestDisplay:"standalone",manifestIcon:"src/assets/img/portfolio_logo_mono_360x360.png",pathPrefix:"/",heading:"Yuuki Miyoshi",subHeadingJp:"情報会社の社内SEです。 ライフワークで各種Webサイト構築を行っています。  ",subHeading:"Full time In-house System Developper. Part time Web Developper.  ",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/yuukimiyo"},{icon:"fa-envelope-o",name:"Email",url:"mailto:miyo.yuuki@gmail.com"}],phone:"",address:"Utsunomiya-shi Tochigi-ken Japan."}}}]);
//# sourceMappingURL=component---src-pages-crawler-js-72e1df28663e303316c2.js.map