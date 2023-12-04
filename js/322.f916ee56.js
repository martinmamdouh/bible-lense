(self["webpackChunkbiblical_catalyst"]=self["webpackChunkbiblical_catalyst"]||[]).push([[322],{4437:function(t,e,i){"use strict";i(7658),i(1884);var s=i(144),a=i(2653),n=i(1050);const r=["sm","md","lg","xl"],o=(()=>r.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>r.reduce(((t,e)=>(t["offset"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>r.reduce(((t,e)=>(t["order"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),h={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const u=new Map;e["Z"]=s.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:n}){let r="";for(const a in e)r+=String(e[a]);let o=u.get(r);if(!o){let t;for(t in o=[],h)h[t].forEach((i=>{const s=e[i],a=d(t,i,s);a&&o.push(a)}));const i=o.some((t=>t.startsWith("col-")));o.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),u.set(r,o)}return t(e.tag,(0,a.ZP)(i,{class:o}),s)}})},5294:function(t,e,i){"use strict";i(7658),i(1884);var s=i(144),a=i(2653),n=i(1050);const r=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return r.reduce(((i,s)=>(i[t+(0,n.jC)(s)]=e(),i)),{})}const c=t=>[...o,"baseline","stretch"].includes(t),h=l("align",(()=>({type:String,default:null,validator:c}))),d=t=>[...o,"space-between","space-around"].includes(t),u=l("justify",(()=>({type:String,default:null,validator:d}))),g=t=>[...o,"space-between","space-around","stretch"].includes(t),p=l("alignContent",(()=>({type:String,default:null,validator:g}))),m={align:Object.keys(h),justify:Object.keys(u),alignContent:Object.keys(p)},y={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,i){let s=y[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const f=new Map;e["Z"]=s.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...h,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:g},...p},render(t,{props:e,data:i,children:s}){let n="";for(const a in e)n+=String(e[a]);let r=f.get(n);if(!r){let t;for(t in r=[],m)m[t].forEach((i=>{const s=e[i],a=S(t,i,s);a&&r.push(a)}));r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),f.set(n,r)}return t(e.tag,(0,a.ZP)(i,{staticClass:"row",class:r}),s)}})},5057:function(t,e,i){"use strict";i.d(e,{Z:function(){return p}});i(7658);var s,a=i(4609),n=i(8914),r=i(281),o=i(3276),l=i(1050),c=i(144),h=i(4987);function d(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function u(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));const g=(0,h.Z)(a.Z,n.Z,r.Z,o.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,l.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,l.XP)(t).find((e=>t[e]));return e&&s[e]||(0,l.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const i=[],s=this.getDefaultData();let a="material-icons";const n=t.indexOf("-"),r=n<=-1;r?i.push(t):(a=t.slice(0,n),d(a)&&(a="")),s.class[a]=!0,s.class[t]=!r;const o=this.getSize();return o&&(s.style={fontSize:o}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,i)},renderSvgIcon(t,e){const i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},s=this.getSize();return s&&(i.style={fontSize:s,height:s,width:s}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const i={class:{"v-icon__component":!0}},s=this.getSize();s&&(i.style={fontSize:s,height:s,width:s}),this.applyColors(i);const a=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(a,i)])}},render(t){const e=this.getIcon();return"string"===typeof e?u(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var p=c.ZP.extend({name:"v-icon",$_wrapperFor:g,functional:!0,render(t,{data:e,children:i}){let s="";return e.domProps&&(s=e.domProps.textContent||e.domProps.innerHTML||s,delete e.domProps.textContent,delete e.domProps.innerHTML),t(g,e,s?[s]:i)}})},2469:function(t,e,i){"use strict";i.d(e,{Z:function(){return g}});i(7658);var s=i(1558),a=i(9196),n=i(4987),r=i(1050),o=(0,n.Z)(a.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,r.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=o,c=i(3276),h=i(2653),d=i(6596);const u="undefined"!==typeof window&&"IntersectionObserver"in window;var g=(0,n.Z)(l,c.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:a}=t;s||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=l.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,r.z9)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=l.options.render.call(this,t),i=(0,h.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},189:function(t,e){e.DATA={en:[{id:1,name:"howToStudyTheBible",title:"How to Study The Bible",subtitle:"Let these steps be your guide.",description:"Reading the Bible is not just a task; it's a life journey that never truly ends. Each time we open its pages, we dive deeper into the profound messages of God, connecting chapters and events that shape the very fabric of our spiritual understanding. As you take this perpetual journey, let these steps be your guide, helping you navigate the rich tapestry of biblical knowledge and drawing you closer to the timeless wisdom it holds.",imgSrc:"bibleStudy2.jpeg",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:2,name:"oldTestamentScriptures",title:"Old Testament Scriptures",subtitle:"",description:"",imgSrc:"oldTestament.png",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:3,name:"oldTestamentCharacters",title:"Old Testament Characters",subtitle:"",description:"",imgSrc:"oldTestamentChatacters.jpeg",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:4,name:"newTestamentScriptures",title:"New Testment Scriptures",subtitle:"",description:"",imgSrc:"newTestament2.jpeg",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:5,name:"newTestamentCharacters",title:"New Testament Characters",subtitle:"",description:"",imgSrc:"newTestamentCharacters.png",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:6,name:"parables",title:"Parables",subtitle:"All 49 parables of Jesus",description:"Jesus used parables to give understanding to those who were seeking him. He revealed the truth to those who were willing to listen and think carefully about what he was saying. But for those who had hardened their hearts against him, the truth remained hidden.",imgSrc:"parables.png",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:7,name:"dreams",title:"Dreams",subtitle:"",description:"Test description",imgSrc:"dreams3.png",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:8,name:"prayers",title:"Prayers",subtitle:"All the prayers mentioned in the Bible,.",description:"Like Solomon's prayer for the new temple 'Now, O my God, let your eyes be open and your ears attentive to the prayer made in this place.'",imgSrc:"prayers.jpeg",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}},{id:9,name:"dictionary",title:"Bible dictionary",subtitle:"Learn how to read the bible in english.",description:"if you are not a native English speaker, this is a list of the most common English words you need to know before reading the Bible in English.",imgSrc:"dictionary.png",childrenPath:{name:"dictionaryPage",params:null,query:null}},{id:10,name:"angels",title:"Angels",subtitle:"All the mentioned angels in the bible",description:"if you are not a native English speaker, this is a list of the most common English words you need to know before reading the Bible in English.",imgSrc:"angels.jpeg",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"How To Study The Bible"},query:null}}],ar:[{id:1,name:"كيفية_دراسة_الكتاب_المقدس",title:"كيفية دراسة الكتاب المقدس",subtitle:"دع هذه الخطوات تكون دليلك.",description:"قراءة الكتاب المقدس ليست مجرد مهمة؛ إنها رحلة حياة لا تنتهي حقًا. في كل مرة نفتح صفحاته، نتغمر أعماقًا في الرسائل العميقة من الله، نتصل بالفصول والأحداث التي تشكل نسيج فهمنا الروحي. أثناء قيامك بهذه الرحلة المستمرة، دع هذه الخطوات تكون دليلك، ساعدة في توجيهك خلال السجادة الغنية بالمعرفة الكتابية وتقربك من الحكمة الخالدة التي تحملها.",imgSrc:"bibleStudy2.jpeg",childrenPath:{name:"canvasPage",params:{canvasType:1,dataSet:"how_to_study_the_bible",category:"كيفية دراسة الكتاب المقدس"}}}]}}}]);
//# sourceMappingURL=322.f916ee56.js.map