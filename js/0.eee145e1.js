(self["webpackChunkbiblical_catalyst"]=self["webpackChunkbiblical_catalyst"]||[]).push([[0],{7e3:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return x}});var s=i(4437),a=i(6035),n=i(5294),r=function(){var t=this,e=t._self._c;return e(a.Z,[e(n.Z,{staticClass:"intro-text",attrs:{align:"center",dense:""}},[e(s.Z,{attrs:{cols:"12",sm:"8","offset-sm":"4"}},[e("h5",[t._v(" “"+t._s("ar"==t.$store.state.locale?'سِرَاجٌ لِرِجْلِي كَلاَمُكَ وَنُورٌ لِسَبِيلِي." (مز 119: 105).':"Your word is a lamp for my feet, a light on my path. (Psalm 119:105)")+"” ")])])],1),e(n.Z,t._l(t.categories,(function(t,i){return e(s.Z,{key:i,attrs:{cols:"10",offset:"1","offset-sm":"0",sm:"6",md:"3"}},[e("category-card",{attrs:{category:t}})],1)})),1)],1)},o=[],l=i(7179),c=i(3058),d=i(5223),h=i(4192),g=i(5057),u=i(780),p=i(5234),A=function(){var t=this,e=t._self._c;return e(c.Z,{staticClass:"mx-auto category-card",attrs:{height:"400"}},[t.category.imgSrc?e(u.Z,{staticClass:"white--text align-end",attrs:{height:"200px",src:i(990)(`./${t.category.imgSrc}`)}}):e(u.Z,{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}}),e("div",{staticClass:"ctegory-title"},[t._v(t._s(t.category.title))]),e(d.Qq,{staticClass:"card-subtitle pb-0"},[t._v(" "+t._s(t.category.subtitle)+" ")]),e(h.Z),e(d.ZB,{staticClass:"text--primary card-text"},[e("div",[t._v(t._s(t.category.description))])]),e(d.h7,{staticClass:"card-action"},[e(l.Z,{attrs:{color:"#b78727 ",text:""},on:{click:function(e){return t.goTo(t.category.childrenPath)}}},[t._v(" "+t._s("ar"==t.$store.state.locale?"اقرأ المزيد":"read more")+" "),e(g.Z,{staticClass:"mx-2",attrs:{small:""}},[t._v("mdi-book-open-variant")])],1),e(p.Z),e(l.Z,{attrs:{color:"#b78727 ",icon:""}},[e(g.Z,[t._v("mdi-share-variant")])],1)],1)],1)},m=[],S=(i(7658),{props:{category:{type:Object,required:!0}},methods:{goTo(t){this.$router.push(t)}}}),y=S,b=i(1001),B=(0,b.Z)(y,A,m,!1,null,"2346cefb",null),f=B.exports,w=i(189),v={components:{CategoryCard:f},data(){return{categories:[],readmore:!1}},created(){this.categories=w.DATA[this.$store.state.locale]}},Q=v,E=(0,b.Z)(Q,r,o,!1,null,"32385d8e",null),x=E.exports},4192:function(t,e,i){"use strict";i.d(e,{Z:function(){return a}});var s=i(3276),a=s.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},4437:function(t,e,i){"use strict";i(7658),i(1884);var s=i(144),a=i(2653),n=i(1050);const r=["sm","md","lg","xl"],o=(()=>r.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>r.reduce(((t,e)=>(t["offset"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>r.reduce(((t,e)=>(t["order"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function h(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const g=new Map;e["Z"]=s.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:n}){let r="";for(const a in e)r+=String(e[a]);let o=g.get(r);if(!o){let t;for(t in o=[],d)d[t].forEach((i=>{const s=e[i],a=h(t,i,s);a&&o.push(a)}));const i=o.some((t=>t.startsWith("col-")));o.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),g.set(r,o)}return t(e.tag,(0,a.ZP)(i,{class:o}),s)}})},5294:function(t,e,i){"use strict";i(7658),i(1884);var s=i(144),a=i(2653),n=i(1050);const r=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return r.reduce(((i,s)=>(i[t+(0,n.jC)(s)]=e(),i)),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",(()=>({type:String,default:null,validator:c}))),h=t=>[...o,"space-between","space-around"].includes(t),g=l("justify",(()=>({type:String,default:null,validator:h}))),u=t=>[...o,"space-between","space-around","stretch"].includes(t),p=l("alignContent",(()=>({type:String,default:null,validator:u}))),A={align:Object.keys(d),justify:Object.keys(g),alignContent:Object.keys(p)},m={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,i){let s=m[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const y=new Map;e["Z"]=s.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...g,alignContent:{type:String,default:null,validator:u},...p},render(t,{props:e,data:i,children:s}){let n="";for(const a in e)n+=String(e[a]);let r=y.get(n);if(!r){let t;for(t in r=[],A)A[t].forEach((i=>{const s=e[i],a=S(t,i,s);a&&r.push(a)}));r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(n,r)}return t(e.tag,(0,a.ZP)(i,{staticClass:"row",class:r}),s)}})},5234:function(t,e,i){"use strict";i(9027);var s=i(1050);e["Z"]=(0,s.Ji)("spacer","div","v-spacer")},5057:function(t,e,i){"use strict";i.d(e,{Z:function(){return p}});i(7658);var s,a=i(4609),n=i(8914),r=i(281),o=i(3276),l=i(1050),c=i(144),d=i(4987);function h(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function g(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));const u=(0,d.Z)(a.Z,n.Z,r.Z,o.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,l.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,l.XP)(t).find((e=>t[e]));return e&&s[e]||(0,l.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const i=[],s=this.getDefaultData();let a="material-icons";const n=t.indexOf("-"),r=n<=-1;r?i.push(t):(a=t.slice(0,n),h(a)&&(a="")),s.class[a]=!0,s.class[t]=!r;const o=this.getSize();return o&&(s.style={fontSize:o}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,i)},renderSvgIcon(t,e){const i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},s=this.getSize();return s&&(i.style={fontSize:s,height:s,width:s}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const i={class:{"v-icon__component":!0}},s=this.getSize();s&&(i.style={fontSize:s,height:s,width:s}),this.applyColors(i);const a=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(a,i)])}},render(t){const e=this.getIcon();return"string"===typeof e?g(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var p=c.ZP.extend({name:"v-icon",$_wrapperFor:u,functional:!0,render(t,{data:e,children:i}){let s="";return e.domProps&&(s=e.domProps.textContent||e.domProps.innerHTML||s,delete e.domProps.textContent,delete e.domProps.innerHTML),t(u,e,s?[s]:i)}})},780:function(t,e,i){"use strict";i.d(e,{Z:function(){return g}});i(7658);var s=i(1558),a=i(4402),n=a.Z,r=i(3276),o=i(4987),l=i(2653),c=i(6596),d=i(1050);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var g=(0,o.Z)(n,r.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,c.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:a}=t;s||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=n.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,d.z9)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=n.options.render.call(this,t),i=(0,l.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},4402:function(t,e,i){"use strict";i.d(e,{Z:function(){return r}});var s=i(9196),a=i(4987),n=i(1050),r=(0,a.Z)(s.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,n.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},189:function(t,e){e.DATA={en:[{id:1,name:"howToStudyTheBible",title:"How to Study The Bible",subtitle:"Let these steps be your guide to study the bible.",description:"This section outlines steps to help you in reading the Bible.",imgSrc:"bibleStudy2.jpeg",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:2,name:"oldTestamentScriptures",title:"Old Testament",subtitle:"",description:"",imgSrc:"oldTestament.png",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:3,name:"oldTestamentCharacters",title:"Old Testament Characters",subtitle:"",description:"",imgSrc:"oldTestamentChatacters.jpeg",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:4,name:"newTestamentScriptures",title:"New Testament",subtitle:"",description:"",imgSrc:"newTestament2.jpeg",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:5,name:"newTestamentCharacters",title:"New Testament Characters",subtitle:"",description:"",imgSrc:"newTestamentCharacters.png",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:6,name:"parables",title:"Parables",subtitle:"All 49 parables of Jesus",description:"Jesus used parables to give understanding to those who were seeking him. He revealed the truth to those who were willing to listen and think carefully about what he was saying. But for those who had hardened their hearts against him, the truth remained hidden.",imgSrc:"parables.png",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:7,name:"dreams",title:"Dreams",subtitle:"",description:"Test description",imgSrc:"dreams3.png",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:8,name:"prayers",title:"Prayers",subtitle:"All the prayers mentioned in the Bible,.",description:"Like Solomon's prayer for the new temple 'Now, O my God, let your eyes be open and your ears attentive to the prayer made in this place.'",imgSrc:"prayers.jpeg",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:9,name:"dictionary",title:"Bible dictionary",subtitle:"Learn how to read the bible in english.",description:"if you are not a native English speaker, this is a list of the most common English words you need to know before reading the Bible in English.",imgSrc:"dictionary.png",childrenPath:{name:"dictionaryPage",params:null,query:null}},{id:10,name:"angels",title:"Angels",subtitle:"All the mentioned angels in the bible",description:"if you are not a native English speaker, this is a list of the most common English words you need to know before reading the Bible in English.",imgSrc:"angels.jpeg",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}}],ar:[{id:1,name:"كيفية_دراسة_الكتاب_المقدس",title:"كيفية دراسة الكتاب المقدس",subtitle:" دليلك لقراءة الكتاب المقدس.",description:"يوضح هذا القسم الخطوات التي تساعدك في قراءة الكتاب المقدس.",imgSrc:"bibleStudy2.jpeg",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"كيفية دراسة الكتاب المقدس"}}}]}},990:function(t,e,i){var s={"./angels.jpeg":4678,"./bible.jpeg":6310,"./bibleStudy.jpeg":7630,"./bibleStudy2.jpeg":816,"./bible_live.jpeg":6516,"./dictionary.png":1217,"./download.jpeg":5563,"./dreams.jpg":5547,"./dreams2.jpeg":5576,"./dreams3.png":9698,"./newTestament.jpeg":3918,"./newTestament2.jpeg":5049,"./newTestamentCharacters.png":718,"./oldTestament.png":4786,"./oldTestamentChatacters.jpeg":2834,"./parables.png":6589,"./prayers.jpeg":3866};function a(t){var e=n(t);return i(e)}function n(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id=990},4678:function(t,e,i){"use strict";t.exports=i.p+"img/angels.9d8953b7.jpeg"},6310:function(t){"use strict";t.exports="data:image/jpeg;base64,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"},7630:function(t,e,i){"use strict";t.exports=i.p+"img/bibleStudy.12643165.jpeg"},816:function(t,e,i){"use strict";t.exports=i.p+"img/bibleStudy2.cbe62e2d.jpeg"},6516:function(t,e,i){"use strict";t.exports=i.p+"img/bible_live.3dc1b777.jpeg"},1217:function(t,e,i){"use strict";t.exports=i.p+"img/dictionary.aead4476.png"},5563:function(t){"use strict";t.exports="data:image/jpeg;base64,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"},5547:function(t,e,i){"use strict";t.exports=i.p+"img/dreams.43e067f5.jpg"},5576:function(t,e,i){"use strict";t.exports=i.p+"img/dreams2.745e8acf.jpeg"},9698:function(t,e,i){"use strict";t.exports=i.p+"img/dreams3.d69f18c7.png"},3918:function(t,e,i){"use strict";t.exports=i.p+"img/newTestament.017ede35.jpeg"},5049:function(t,e,i){"use strict";t.exports=i.p+"img/newTestament2.4c2911ae.jpeg"},718:function(t,e,i){"use strict";t.exports=i.p+"img/newTestamentCharacters.15b21709.png"},4786:function(t,e,i){"use strict";t.exports=i.p+"img/oldTestament.5bc703d8.png"},2834:function(t,e,i){"use strict";t.exports=i.p+"img/oldTestamentChatacters.b6b7171c.jpeg"},6589:function(t,e,i){"use strict";t.exports=i.p+"img/parables.3d405353.png"},3866:function(t,e,i){"use strict";t.exports=i.p+"img/prayers.1d2e2837.jpeg"}}]);
//# sourceMappingURL=0.eee145e1.js.map