(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],_=0,f=[];_<i.length;_++)o=i[_],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},r={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/url-shortening/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0532":function(t,e,n){t.exports=n.p+"img/illustration-working.5029d049.svg"},"0798":function(t,e,n){t.exports=n.p+"img/icon-fully-customizable.cc099cea.svg"},"0c43":function(t,e,n){var s={"./icon-brand-recognition.svg":"c7bc","./icon-detailed-records.svg":"aa18","./icon-facebook.svg":"9c81","./icon-fully-customizable.svg":"0798","./icon-instagram.svg":"3b08","./icon-pinterest.svg":"8a30","./icon-twitter.svg":"be9b"};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=a,t.exports=r,r.id="0c43"},"16d0":function(t,e,n){"use strict";n("7ccd")},"1fd4":function(t,e,n){t.exports=n.p+"img/circle_loading.be0d9fd5.gif"},2950:function(t,e,n){},"2b4b":function(t,e,n){"use strict";n("af42")},"3b08":function(t,e,n){t.exports=n.p+"img/icon-instagram.5164a987.svg"},"49c8":function(t,e,n){"use strict";n("71ad")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s,r,a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("the-header"),n("main",{staticClass:"main"},[n("div",{staticClass:"main__column--left"},[n("h2",{staticClass:"main__title"},[t._v("More than just shorter links")]),n("p",{staticClass:"main__subtitle"},[t._v(" Build your brand's recognition and get detailed insights on how your links are performing. ")]),n("the-button",{attrs:{styles:"a-lg-rounded",href:"/"}},[t._v("Get Started")])],1),t._m(0)]),n("section",{staticClass:"features"},[n("div",{staticClass:"shorten-bar"},[n("shorten-bar")],1),n("div",{staticClass:"features__content"},[t._m(1),n("cards")],1)]),n("banner",{attrs:{message:"Boost your links today","text-button":"Get Started"}}),n("the-footer")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main__column--right"},[s("img",{staticClass:"main__image",attrs:{src:n("0532"),alt:"Person in desk"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"features__top"},[n("h3",{staticClass:"features__title"},[t._v("Advanced Statistics")]),n("p",{staticClass:"features__subtitle"},[t._v(" Track how your links are performing across the web with our advanced statistics dashboard. ")])])}],c=(n("ac1f"),n("1276"),n("99af"),{name:"ButtonPrimary",props:["href","styles","type","disabled"],render:function(t){var e=this.styles.split("-")[0];return t(e,{attrs:{class:"button__primary ".concat(this.shape),href:this.href,type:this.type,disabled:this.disabled}},this.$slots.default)},computed:{shape:function(){var t=this.styles.split("-");return"text-".concat(t[1]," p-").concat(t[1]," is-").concat(t[2],"-").concat(t[1])}}}),l=c,u=(n("16d0"),n("2877")),_=Object(u["a"])(l,s,r,!1,null,null,null),f=_.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navigation"},[n("the-logo"),n("div",{staticClass:"navigation__links"},[t._m(0),n("div",{staticClass:"navigation__links--right"},[n("a",{staticClass:"navigation__link",attrs:{href:"#"}},[t._v("Login")]),n("the-button",{attrs:{styles:"a-sm-rounded",href:"/"}},[t._v("Sign Up")])],1)]),n("div",{staticClass:"navigation__mobile",class:t.rotateIcon,on:{click:t.toggleMenu}}),n("transition",{attrs:{name:"slide"}},[t.isMenuOpen?n("div",{staticClass:"navigation__mobile__screen",on:{click:t.toggleMenu}},[n("a",{staticClass:"navigation__mobile__link",attrs:{href:"#"}},[t._v("Features")]),n("a",{staticClass:"navigation__mobile__link",attrs:{href:"#"}},[t._v("Pricing")]),n("a",{staticClass:"navigation__mobile__link",attrs:{href:"#"}},[t._v("Resources")]),n("a",{staticClass:"navigation__mobile__link",attrs:{href:"#"}},[t._v("Login")]),n("a",{staticClass:"navigation__mobile__link",attrs:{href:"#"}},[t._v("Sign Up")])]):t._e()])],1)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation__links--left"},[n("a",{staticClass:"navigation__link",attrs:{href:"#"}},[t._v("Features")]),n("a",{staticClass:"navigation__link",attrs:{href:"#"}},[t._v("Pricing")]),n("a",{staticClass:"navigation__link",attrs:{href:"#"}},[t._v("Resources")])])}],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"logo__title"},[n("a",{staticClass:"logo__link",class:t.textColor,attrs:{href:"/"}},[t._v("Shortly")])])},m=[],v={name:"TheLogo",props:{color:{type:String,default:"dark"}},data:function(){return{colors:{clear:"text-clear",dark:"text-dark"}}},computed:{textColor:function(){return this.colors[this.color]}}},g=v,b=(n("2b4b"),Object(u["a"])(g,p,m,!1,null,null,null)),C=b.exports,k={name:"TheHeader",components:{TheButton:f,TheLogo:C},data:function(){return{isMenuOpen:!1}},computed:{rotateIcon:function(){return this.isMenuOpen?"navigation__mobile--is-open":""}},methods:{toggleMenu:function(t){(t.target.classList.contains("navigation__mobile__link")||t.target.classList.contains("navigation__mobile"))&&(this.isMenuOpen=!this.isMenuOpen)}}},y=k,x=(n("c977"),Object(u["a"])(y,d,h,!1,null,null,null)),w=x.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shorten"},[s("form",{staticClass:"shorten__container",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[s("div",{staticClass:"shorten__input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"shorten__bar",class:t.error?"shorten__bar--error":"",attrs:{autofocus:"",name:"search","aria-hidden":"true",placeholder:"Shorten a link here..."},domProps:{value:t.url},on:{keyup:function(e){t.error=""},input:function(e){e.target.composing||(t.url=e.target.value)}}}),t.error?s("p",{staticClass:"shorten__error",domProps:{textContent:t._s(t.error)}}):t._e(),s("div",{staticClass:"shorten__button"},[s("the-button",{attrs:{disabled:t.isLoading,type:"submit",styles:"button-lg-squared"}},[t.isLoading?s("img",{staticClass:"shorten__loading",attrs:{src:n("1fd4"),alt:"Loading animation"}}):s("span",[t._v("Shorten it!")])])],1)])]),s("div",{staticClass:"shorten__links"},t._l(t.links,(function(e,n){return s("div",{key:e.shorten,staticClass:"shorten__link"},[s("shorten-url",{attrs:{id:n,fullUrl:e.original,shortenUrl:e.shorten},on:{delete:t.deleteUrl}})],1)})),0)])},S=[],j=n("1da1"),B=(n("96cf"),n("d3b7"),n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shorten-url",on:{mouseenter:function(e){t.isHover=!0},mouseleave:function(e){t.isHover=!1}}},[t.isHover?n("span",{staticClass:"shorten-url__close",on:{click:function(e){return t.$emit("delete",t.id)}}}):t._e(),n("a",{staticClass:"shorten-url__full",attrs:{href:t.fullUrl,target:"_blank"},domProps:{textContent:t._s(t.reducedFullUrl)}}),n("div",{staticClass:"shorten-url__manage"},[n("input",{ref:"dummyInput",attrs:{type:"hidden"},domProps:{value:t.shortenUrl}}),n("a",{staticClass:"shorten-url__short",attrs:{href:t.shortenUrl,target:"_blank"},domProps:{textContent:t._s(t.shortenUrl)}}),n("div",{staticClass:"shorten-url__button",class:t.buttonCopy,on:{click:t.copyToClipboard}},[n("the-button",{attrs:{styles:"button-sm-squared",type:"button"},domProps:{textContent:t._s(t.textButton)}})],1)])])}),P=[],$={name:"ShortenUrl",components:{TheButton:f},props:["fullUrl","shortenUrl","id"],data:function(){return{textButton:"Copy",isHover:!1}},computed:{buttonCopy:function(){return"Copy"!==this.textButton?"shorten-url__clicked":""},reducedFullUrl:function(){return this.fullUrl.length>25?this.fullUrl.substring(0,25)+"...":this.fullUrl}},methods:{copyToClipboard:function(){var t=this;this.textButton="Copied!",setTimeout((function(){t.textButton="Copy"}),2e3),this.$refs.dummyInput.type="text",this.$refs.dummyInput.select(),document.execCommand("copy"),this.$refs.dummyInput.type="hidden"}}},U=$,T=(n("8b72"),Object(u["a"])(U,B,P,!1,null,null,null)),E=T.exports,L={name:"ShortenBar",components:{TheButton:f,ShortenUrl:E},data:function(){return{url:"",isLoading:!1,error:"",links:[]}},watch:{links:function(t){localStorage.setItem("shortly-links",JSON.stringify(t))}},methods:{submitForm:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n,s,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.url){e.next=3;break}return t.error="Please add a link",e.abrupt("return");case 3:return t.isLoading=!0,e.prev=4,e.next=7,fetch("https://api.shrtco.de/v2/shorten?url=".concat(t.url));case 7:return n=e.sent,e.next=10,n.json();case 10:if(s=e.sent,t.url="",t.isLoading=!1,n.ok){e.next=15;break}throw new Error(s.error);case 15:r=s.result,a=r.full_short_link,o=r.original_link,t.links.unshift({original:o,shorten:a}),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](4),t.error=e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,19]])})))()},deleteUrl:function(t){this.links=this.links.filter((function(e,n){return n!==t}))}},mounted:function(){var t=JSON.parse(localStorage.getItem("shortly-links"));t&&(this.links=t)}},M=L,I=(n("c1d9"),Object(u["a"])(M,O,S,!1,null,null,null)),F=I.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cards"},[s("div",{staticClass:"cards__element--1"},[s("card",{attrs:{title:"Brand Recognition",content:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."}},[s("img",{attrs:{src:n("c7bc"),alt:"Scale up icon"}})])],1),s("div",{staticClass:"cards__segment"}),s("div",{staticClass:"cards__element--2"},[s("card",{attrs:{title:"Detailed Records",content:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}},[s("img",{attrs:{src:n("aa18"),alt:"Speed icon"}})])],1),s("div",{staticClass:"cards__segment"}),s("div",{staticClass:"cards__element--3"},[s("card",{attrs:{title:"Fully Customizable",content:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."}},[s("img",{attrs:{src:n("0798"),alt:"Customization icon"}})])],1)])},H=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card__icon"},[t._t("default")],2),n("h4",{staticClass:"card__title",domProps:{textContent:t._s(t.title)}}),n("p",{staticClass:"card__content",domProps:{textContent:t._s(t.content)}})])},D=[],N={name:"Card",props:["title","content"]},A=N,G=(n("e5a0"),Object(u["a"])(A,z,D,!1,null,null,null)),J=G.exports,q={name:"Cards",components:{Card:J}},K=q,Q=(n("97f3"),Object(u["a"])(K,R,H,!1,null,null,null)),V=Q.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("h3",{staticClass:"banner__title",domProps:{textContent:t._s(t.message)}}),n("the-button",{attrs:{href:"/",styles:"a-lg-rounded"},domProps:{textContent:t._s(t.textButton)}})],1)},X=[],Y={name:"Banner",props:["message","textButton"],components:{TheButton:f}},Z=Y,tt=(n("cd21"),Object(u["a"])(Z,W,X,!1,null,null,null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"footer__container"},[n("div",{staticClass:"footer__logo"},[n("the-logo",{attrs:{color:"clear"}})],1),n("div",{staticClass:"footer__sections"},[t._m(0),t._m(1),t._m(2),n("div",{staticClass:"footer__section footer__section--social"},[n("social-icon",{attrs:{social:"facebook",href:"http://www.facebook.com"}}),n("social-icon",{attrs:{social:"twitter",href:"http://www.twitter.com"}}),n("social-icon",{attrs:{social:"pinterest",href:"http://www.pinterest.com"}}),n("social-icon",{attrs:{social:"instagram",href:"http://www.instagram.com"}})],1)])])])},st=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer__section"},[n("h4",{staticClass:"footer__desc"},[t._v("Features")]),n("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("Link Shortening")]),n("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("Branded Links")]),n("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("Analytics")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer__section"},[n("h4",{staticClass:"footer__desc"},[t._v("Resources")]),n("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("Blog")]),n("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("Developers")]),n("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("Support")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer__section"},[n("h4",{staticClass:"footer__desc"},[t._v("Company")]),n("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("About")]),n("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("Our Team")]),n("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("Careers")]),n("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v("Contact")])])}],rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"social__link",attrs:{target:"_blank",href:t.href}},[n("img",{staticClass:"social__icon",attrs:{src:t.socialIcon,alt:t.social+" icon"}})])},at=[],ot={name:"SocialIcon",props:["social","href"],computed:{socialIcon:function(){return n("0c43")("./icon-".concat(this.social,".svg"))}}},it=ot,ct=(n("49c8"),Object(u["a"])(it,rt,at,!1,null,null,null)),lt=ct.exports,ut={name:"Footer",components:{TheLogo:C,SocialIcon:lt}},_t=ut,ft=(n("5708"),Object(u["a"])(_t,nt,st,!1,null,null,null)),dt=ft.exports,ht={name:"App",components:{TheHeader:w,ShortenBar:F,TheButton:f,Cards:V,Banner:et,TheFooter:dt}},pt=ht,mt=(n("5c0b"),Object(u["a"])(pt,o,i,!1,null,null,null)),vt=mt.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(vt)}}).$mount("#app")},5708:function(t,e,n){"use strict";n("2950")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"669f":function(t,e,n){},"6e82":function(t,e,n){},"71ad":function(t,e,n){},"7ccd":function(t,e,n){},"8a30":function(t,e,n){t.exports=n.p+"img/icon-pinterest.a02a61bc.svg"},"8b72":function(t,e,n){"use strict";n("669f")},"97f3":function(t,e,n){"use strict";n("d53a")},"9c0c":function(t,e,n){},"9c81":function(t,e,n){t.exports=n.p+"img/icon-facebook.b0e4e1d5.svg"},"9e06":function(t,e,n){},aa18:function(t,e,n){t.exports=n.p+"img/icon-detailed-records.e3d9caa9.svg"},af42:function(t,e,n){},be9b:function(t,e,n){t.exports=n.p+"img/icon-twitter.6aa7fa1f.svg"},c1d9:function(t,e,n){"use strict";n("e981")},c7bc:function(t,e,n){t.exports=n.p+"img/icon-brand-recognition.1922b68a.svg"},c977:function(t,e,n){"use strict";n("fc88")},cd21:function(t,e,n){"use strict";n("6e82")},d53a:function(t,e,n){},e5a0:function(t,e,n){"use strict";n("9e06")},e981:function(t,e,n){},fc88:function(t,e,n){}});
//# sourceMappingURL=app.d0ef9f52.js.map