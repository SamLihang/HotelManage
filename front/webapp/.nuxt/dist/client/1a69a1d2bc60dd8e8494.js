(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{176:function(e,t,a){e.exports=a.p+"img/51beb66.png"},177:function(e,t,a){var n=a(190);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(25).default)("63b4412e",n,!0,{sourceMap:!1})},180:function(e,t,a){var n=a(197);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(25).default)("6d05d1c8",n,!0,{sourceMap:!1})},182:function(e,t,a){var n=a(200);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(25).default)("18889436",n,!0,{sourceMap:!1})},187:function(e,t,a){"use strict";var n=a(2),o=a(14),i=a(18),r=a(96),s=a(47),l=a(10),c=a(48).f,d=a(64).f,u=a(9).f,m=a(194).trim,p=n.Number,g=p,v=p.prototype,b="Number"==i(a(63)(v)),f="trim"in String.prototype,_=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var a,n,o,i=(t=f?t.trim():m(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var r,l=t.slice(2),c=0,d=l.length;c<d;c++)if((r=l.charCodeAt(c))<48||r>o)return NaN;return parseInt(l,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof p&&(b?l(function(){v.valueOf.call(a)}):"Number"!=i(a))?r(new g(_(t)),a,p):_(t)};for(var h,y=a(6)?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)o(g,h=y[x])&&!o(p,h)&&u(p,h,d(g,h));p.prototype=v,v.constructor=p,a(11)(n,"Number",p)}},189:function(e,t,a){"use strict";var n=a(177);a.n(n).a},190:function(e,t,a){(e.exports=a(24)(!1)).push([e.i,"\n.baseInput[data-v-c175a2ce]{height:.8rem;position:relative\n}\n.baseInput .baseInput_placeholder[data-v-c175a2ce]{position:absolute;top:0;left:.2rem;z-index:1;font-size:.4rem;color:#999;line-height:.8rem;transition:all .2s ease-in-out\n}\n.baseInput .baseInput_placeholder.active[data-v-c175a2ce]{top:-.8rem;left:0;color:#ddd;font-size:.45rem\n}\n.baseInput .baseInput_input[data-v-c175a2ce]{position:absolute;top:0;left:0;width:100%;height:100%;border:1px solid #d9d9d9;border-radius:4px;text-indent:.2rem;background:#fff\n}\n.baseInput.baseInput_float[data-v-c175a2ce]{margin-top:.8rem\n}",""])},191:function(e,t,a){"use strict";var n={name:"baseInput",components:{},data:function(){return{val:this.value,isfocus:!1}},props:{value:"",placeholder:{type:String,default:""},type:{type:String,default:"text"},mold:{type:String,default:"base"},width:{type:String,default:"100%"}},methods:{foucsHandler:function(){this.isfocus=!0},blurHandler:function(){this.isfocus=!1}},computed:{},watch:{value:function(e,t){this.val=e},val:function(e,t){this.$emit("input",e)}},mounted:function(){}},o=(a(189),a(15)),i=Object(o.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"baseInput",class:"baseInput_"+e.mold,style:{width:e.width}},["float"===e.mold?a("span",{staticClass:"baseInput_placeholder",class:{active:e.isfocus||e.val}},[e._v(e._s(e.placeholder))]):e._e(),e._v(" "),"checkbox"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"baseInput_input",attrs:{placeholder:"base"===e.mold?e.placeholder:"",type:"checkbox"},domProps:{checked:Array.isArray(e.val)?e._i(e.val,null)>-1:e.val},on:{focus:e.foucsHandler,blur:e.blurHandler,change:function(t){var a=e.val,n=t.target,o=!!n.checked;if(Array.isArray(a)){var i=e._i(a,null);n.checked?i<0&&(e.val=a.concat([null])):i>-1&&(e.val=a.slice(0,i).concat(a.slice(i+1)))}else e.val=o}}}):"radio"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"baseInput_input",attrs:{placeholder:"base"===e.mold?e.placeholder:"",type:"radio"},domProps:{checked:e._q(e.val,null)},on:{focus:e.foucsHandler,blur:e.blurHandler,change:function(t){e.val=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"baseInput_input",attrs:{placeholder:"base"===e.mold?e.placeholder:"",type:e.type},domProps:{value:e.val},on:{focus:e.foucsHandler,blur:e.blurHandler,input:function(t){t.target.composing||(e.val=t.target.value)}}})])},[],!1,null,"c175a2ce",null);i.options.__file="baseInput.vue";t.a=i.exports},194:function(e,t,a){var n=a(5),o=a(17),i=a(10),r=a(195),s="["+r+"]",l=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),d=function(e,t,a){var o={},s=i(function(){return!!r[e]()||"​"!="​"[e]()}),l=o[e]=s?t(u):r[e];a&&(o[a]=l),n(n.P+n.F*s,"String",o)},u=d.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=d},195:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},196:function(e,t,a){"use strict";var n=a(180);a.n(n).a},197:function(e,t,a){(e.exports=a(24)(!1)).push([e.i,"\n.bscroll[data-v-3ab7c46c]{overflow:scroll;height:1000px;-webkit-overflow-scrolling:touch\n}\n.bscroll .loadmore[data-v-3ab7c46c]{width:100%;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.bscroll .loadmore .mint-loadmore-bottom[data-v-3ab7c46c]{text-align:center\n}\n.bscroll .loadmore ul li[data-v-3ab7c46c]{margin:0;padding:0;height:100px;list-style:none outside none\n}\n.bscroll .loadmore span[data-v-3ab7c46c]{font-size:.4rem;line-height:.8rem\n}",""])},198:function(e,t,a){"use strict";a(187);var n={name:"BScroll",data:function(){return{allLoaded:!1,topStatus:"",bottomStatus:"",topDistance:70,bottomDistance:70,distanceIndex:2,maxDistance:200,loadable:!0}},props:{width:{type:String,default:"100%"},height:{type:Number,default:1e3},bg:{type:String,default:"none"},startScroll:{type:Number,default:0}},methods:{getScrollPos:function(){return this.$refs.scrollContent.scrollTop},scrollTo:function(e){this.$refs.scrollContent.scrollTop=e},handleTopChange:function(e){this.topStatus=e},handleBottomChange:function(e){this.bottomStatus=e},loadTop:function(){this.$emit("loadTop")},loadBottom:function(){this.$emit("loadBottom")},topLoaded:function(){var e=this;setTimeout(function(){e.$refs.loadmore.onTopLoaded()},1e3)},bottomLoaded:function(e){var t=this;!0===e&&(this.loadable=!1),setTimeout(function(){t.allLoaded=e,t.$refs.loadmore.onBottomLoaded()},1e3)}},mounted:function(){this.startScroll&&this.scrollTo(this.startScroll)}},o=(a(196),a(15)),i=Object(o.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"scrollContent",staticClass:"bscroll",style:{height:e.height+"px",width:""+e.width,background:e.bg}},[a("mt-loadmore",{ref:"loadmore",staticClass:"loadmore",attrs:{"top-method":e.loadTop,"bottom-method":e.loadBottom,"bottom-all-loaded":e.allLoaded,maxDistance:e.maxDistance,topDistance:e.topDistance,bottomDistance:e.bottomDistance,distanceIndex:e.distanceIndex},on:{"top-status-change":e.handleTopChange,"bottom-status-change":e.handleBottomChange}},[a("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[a("span",{directives:[{name:"show",rawName:"v-show",value:"pull"===e.topStatus,expression:"topStatus === 'pull'"}]},[e._v("下拉刷新")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===e.topStatus,expression:"topStatus === 'loading'"}]},[e._v("加载中...")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"drop"===e.topStatus,expression:"topStatus === 'drop'"}]},[e._v("释放更新")])]),e._v(" "),e._t("default",[a("ul",e._l(100,function(e,t){return a("li",{key:t})}))]),e._v(" "),a("div",{staticClass:"mint-loadmore-bottom",attrs:{slot:"bottom"},slot:"bottom"},[e.loadable?a("span",[a("span",{directives:[{name:"show",rawName:"v-show",value:"pull"===e.bottomStatus,expression:"bottomStatus === 'pull'"}]},[e._v("上拉加载更多")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===e.bottomStatus,expression:"bottomStatus === 'loading'"}]},[e._v("加载中...")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"drop"===e.bottomStatus,expression:"bottomStatus === 'drop'"}]},[e._v("释放加载")])]):a("span",[e._v("暂无更多内容")])])],2)],1)},[],!1,null,"3ab7c46c",null);i.options.__file="baseScroll.vue";t.a=i.exports},199:function(e,t,a){"use strict";var n=a(182);a.n(n).a},200:function(e,t,a){(e.exports=a(24)(!1)).push([e.i,"\n.footer[data-v-1e4e28f9]{z-index:99\n}",""])},201:function(e,t,a){var n=a(227);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(25).default)("1727bf76",n,!0,{sourceMap:!1})},202:function(e,t,a){"use strict";a(27);var n={name:"baseFooter",components:{},data:function(){return{selected:this.$route.name}},methods:{},computed:{},watch:{selected:function(e,t){this.$router.push("/".concat(e))}},mounted:function(){}},o=(a(199),a(15)),i=Object(o.a)(n,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mt-tabbar",{staticClass:"footer",model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"menu"}},[n("img",{attrs:{slot:"icon",src:a(176)},slot:"icon"}),e._v("\n    菜单\n  ")]),e._v(" "),n("mt-tab-item",{attrs:{id:"statistics"}},[n("img",{attrs:{slot:"icon",src:a(176)},slot:"icon"}),e._v("\n    统计\n  ")]),e._v(" "),n("mt-tab-item",{attrs:{id:"manage"}},[n("img",{attrs:{slot:"icon",src:a(176)},slot:"icon"}),e._v("\n    管理\n  ")]),e._v(" "),n("mt-tab-item",{attrs:{id:"mine"}},[n("img",{attrs:{slot:"icon",src:a(176)},slot:"icon"}),e._v("\n    我的\n  ")])],1)},[],!1,null,"1e4e28f9",null);i.options.__file="baseFooter.vue";t.a=i.exports},223:function(e,t,a){e.exports=a.p+"img/d88c823.jpg"},224:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQxMDgyMDU2OTQwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMTI4LjAzNjU4MyA0NDguMzg0MTI0bDc2Ni45OTg2OTUgMCAwIDEyNi44ODk5NjktNzY2Ljk5ODY5NSAwIDAtMTI2Ljg4OTk2OVoiIHAtaWQ9IjIxMjYiIGZpbGw9IiM3MDcwNzAiPjwvcGF0aD48L3N2Zz4="},225:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQxMDgxNjExMjE1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNzg1LjA2NjY2NyA0NjAuOCA1NjMuMiA0NjAuOCA1NjMuMiAyMzguOTMzMzMzIDQ2MC44IDIzOC45MzMzMzMgNDYwLjggNDYwLjggMjM4LjkzMzMzMyA0NjAuOCAyMzguOTMzMzMzIDU2My4yIDQ2MC44IDU2My4yIDQ2MC44IDc4NS4wNjY2NjcgNTYzLjIgNzg1LjA2NjY2NyA1NjMuMiA1NjMuMiA3ODUuMDY2NjY3IDU2My4yWiIgcC1pZD0iMTA0NyIgZmlsbD0iIzcwNzA3MCI+PC9wYXRoPjwvc3ZnPg=="},226:function(e,t,a){"use strict";var n=a(201);a.n(n).a},227:function(e,t,a){(e.exports=a(24)(!1)).push([e.i,"\n.number[data-v-3a128178]{width:100%;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center\n}\n.number .add[data-v-3a128178],.number .sub[data-v-3a128178]{width:.7rem;height:.7rem;border:1px solid #d9d9d9;margin:.2rem;border-radius:50%;background:#ccc\n}\n.number .add img[data-v-3a128178],.number .sub img[data-v-3a128178]{width:100%;height:100%\n}\n.number .number_inp[data-v-3a128178]{width:1rem;height:.5rem;border:1px solid #d9d9d9;text-align:center\n}",""])},228:function(e,t,a){"use strict";a(187);var n={name:"number",components:{},data:function(){return{val:this.value}},props:{placeholder:{type:String,default:""},value:"",min:{type:Number,default:0},max:{type:Number,default:Number.MAX_VALUE}},methods:{addCount:function(){this.val++},subCount:function(){this.val--}},computed:{},watch:{value:function(e,t){this.val=e},val:function(e,t){e<this.min||e>this.max?this.val=t:this.$emit("input",e)}},mounted:function(){}},o=(a(226),a(15)),i=Object(o.a)(n,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"number"},[n("button",{staticClass:"add",on:{click:function(t){return t.stopPropagation(),e.subCount(t)}}},[n("img",{attrs:{src:a(224),alt:""}})]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"number_inp",attrs:{type:"number"},domProps:{value:e.val},on:{input:function(t){t.target.composing||(e.val=t.target.value)}}}),e._v(" "),n("button",{staticClass:"sub",on:{click:function(t){return t.stopPropagation(),e.addCount(t)}}},[n("img",{attrs:{src:a(225),alt:""}})])])},[],!1,null,"3a128178",null);i.options.__file="number.vue";t.a=i.exports},257:function(e,t,a){var n=a(468);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(25).default)("046fe4bb",n,!0,{sourceMap:!1})},258:function(e,t,a){var n=a(470);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(25).default)("3d4bec71",n,!0,{sourceMap:!1})},467:function(e,t,a){"use strict";var n=a(257);a.n(n).a},468:function(e,t,a){(e.exports=a(24)(!1)).push([e.i,"\n.searchbar[data-v-3833b3ef]{position:fixed;top:0;left:0;width:100%;height:44px;font-size:.3rem;z-index:99\n}\n.menu[data-v-3833b3ef]{position:absolute;top:44px;left:0;width:20%;box-shadow:3px 0 5px #ccc;z-index:1\n}\n.menu .edit[data-v-3833b3ef]{background:var(--color_four)!important;text-align:center\n}\n.menu .menu_item[data-v-3833b3ef]{color:#fff;background:#999\n}\n.menu .menu_item+.menu_item[data-v-3833b3ef]{border-top:1px solid #d9d9d9\n}\n.menu .menu_item.active[data-v-3833b3ef]{color:#333;background:#fff\n}\n.scroller[data-v-3833b3ef]{position:absolute;padding-bottom:1.5rem;top:44px;left:20%;background:#dadada!important\n}\n.cell_wrapper[data-v-3833b3ef]{background:#dadada;padding:.3rem 0\n}\n.cell_content[data-v-3833b3ef]{display:flex;width:90%;height:2.5rem;background:#fff;border-radius:.2rem;flex-flow:row nowrap;justify-content:space-between;align-items:center;margin:.3rem auto 0;overflow:hidden;box-shadow:0 3px 5px #ababab\n}\n.cell_content[data-v-3833b3ef]:first-child{margin-top:0\n}\n.cell_content .cell_image[data-v-3833b3ef]{width:40%;height:100%\n}\n.cell_content .cell_image img[data-v-3833b3ef]{width:100%;height:100%\n}\n.cell_content .cell_msg[data-v-3833b3ef]{width:50%;height:100%;display:flex;flex-flow:column nowrap;justify-content:space-around;align-items:flex-end\n}\n.cell_content .cell_msg .cell_name[data-v-3833b3ef]{width:100%;color:#333;margin-left:1rem;font-size:.4rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap\n}\n.cell_content .cell_msg .cell_unit[data-v-3833b3ef]{width:100%;color:#666;font-size:.3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap\n}\n.cell_content .cell_msg .cell_number[data-v-3833b3ef]{width:2rem;font-size:.4rem\n}\n.palette[data-v-3833b3ef]{position:absolute;right:10px;bottom:60px;font-size:.4rem;background:var(--color_main)\n}\n.palette .icon-popup[data-v-3833b3ef]{font-size:.3rem;background:var(--color_main);border-radius:50%;width:30px;height:30px;text-align:center;line-height:30px;color:#fff\n}\n.popup[data-v-3833b3ef]{width:100%;height:3rem\n}\n.popup .popup_scroll[data-v-3833b3ef]{height:100%!important\n}\n.popup .remark[data-v-3833b3ef]{width:80%;margin:1rem auto;position:relative\n}",""])},469:function(e,t,a){"use strict";var n=a(258);a.n(n).a},470:function(e,t,a){(e.exports=a(24)(!1)).push([e.i,"\n.mint-searchbar{background-color:#6194bb;background-color:var(--color_main)\n}\n.mint-searchbar-core{text-indent:.1rem\n}\n.menu_item .mint-cell-wrapper{background-image:none\n}",""])},515:function(e,t,a){"use strict";a.r(t);var n=a(16),o=a.n(n),i=a(202),r=a(198),s=a(191),l=a(228),c=a(26),d=a(33),u={name:"",asyncData:function(e){e.parmas;return{dataSource:[{category_name:"蔬菜类",category_id:5,categoryItem:[{vegetable_id:103,vegetable_name:"香菇",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:104,vegetable_name:"白玉菇",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:105,vegetable_name:"海鲜菇",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:106,vegetable_name:"白蘑菇",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:107,vegetable_name:"上海青",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:108,vegetable_name:"广东菜心",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:109,vegetable_name:"黄豆芽",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:110,vegetable_name:"腐竹",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:111,vegetable_name:"鲜茶树菇",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:112,vegetable_name:"干茶树菇",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:113,vegetable_name:"香干",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:114,vegetable_name:"千张",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:115,vegetable_name:"盒豆腐",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:116,vegetable_name:"茶干",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:117,vegetable_name:"榨菜",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:118,vegetable_name:"韭黄",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:119,vegetable_name:"韭菜",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:120,vegetable_name:"韭菜花",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:121,vegetable_name:"藕",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:122,vegetable_name:"小葱",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:123,vegetable_name:"青大蒜",unit:"斤",user_id:20,category_id:5,category_name:"蔬菜类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""}]},{category_name:"肉类",category_id:1,categoryItem:[{vegetable_id:1,vegetable_name:"五花肉",unit:"斤",user_id:20,category_id:1,category_name:"肉类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:2,vegetable_name:"五花肉丝",unit:"斤",user_id:20,category_id:1,category_name:"肉类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:3,vegetable_name:"全精肉",unit:"斤",user_id:20,category_id:1,category_name:"肉类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:6,vegetable_name:"肉末",unit:"斤",user_id:20,category_id:1,category_name:"肉类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:7,vegetable_name:"猪肝",unit:"斤",user_id:20,category_id:1,category_name:"肉类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:8,vegetable_name:"猪脚",unit:"斤",user_id:20,category_id:1,category_name:"肉类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:9,vegetable_name:"猪肚",unit:"斤",user_id:20,category_id:1,category_name:"肉类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:10,vegetable_name:"猪腰",unit:"斤",user_id:20,category_id:1,category_name:"肉类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""},{vegetable_id:11,vegetable_name:"猪大肠",unit:"斤",user_id:20,category_id:1,category_name:"肉类",CreatedAt:"0001-01-01T00:00:00Z",UpdatedAt:"0001-01-01T00:00:00Z",num:1,remark:""}]}]}},components:{number:l.a,baseFooter:i.a,baseScroll:r.a,baseInput:s.a},data:function(){return{selected:null,topStatus:"",searchKey:"",scrollTop:0,editData:{},categoryIndex:0,remarkItem:{},popupVisible:!1,categoryList:[]}},methods:{saveHandler:function(){var e=this,t=JSON.stringify(this.dataSource);this.$fetch("/menus",{menu:t},"post").then(function(a){0===a.code&&(e.$store.commit("setMenu",t),Object(d.Toast)("保存成功"))}),this.$refs.palette.collapse()},addHandler:function(e){this.remarkItem=e,this.popupVisible=!0},addCategory:function(){this.popupVisible=!1,this.$fetch("/category",{category_name:"水产"},"post").then(function(e){console.log(e)})},resetHandler:function(){this.$store.commit("setMenu","[]"),this.initdata()},templateHandler:function(){this.$router.push({path:"/menu/template"})},exportHandler:function(){this.$router.push("/saveimg")},expandedHandler:function(){window.document.addEventListener("touchstart",this.collapse,!1)},collapseHandler:function(){window.document.removeEventListener("touchstart",this.collapse,!1)},collapse:function(){this.$refs.palette.collapse()},chooseHandler:function(e){this.categoryIndex=e},editHandler:function(){this.$router.push({path:"menu/category",query:this.categoryList[this.categoryIndex]})},loadTop:function(){var e=this;setTimeout(function(){e.$refs.scroll.topLoaded()},1e3)},loadBottom:function(){var e=this;setTimeout(function(){e.$refs.scroll.bottomLoaded(!0)},1e3)},handleTopChange:function(e){this.topStatus=e},loadMore:function(){console.log("load more")},initdata:function(){var e=this;this.menu.length?this.dataSource=this.menu:this.$fetch("/menus").then(function(t){e.dataSource=JSON.parse(t.data.menu),e.$store.commit("setMenu",t.data.menu)}),this.$fetch("/category").then(function(t){e.categoryList=t.data})}},computed:o()({},Object(c.b)({height:function(e){return e.height},menu:function(e){return e.menu?JSON.parse(e.menu):null}}),{categoryItem:function(){if(!this.categoryList||!this.categoryList.length)return[];var e=this.categoryList[this.categoryIndex].category_id,t=this.dataSource.filter(function(t){return t.category_id===e})[0];return t?t.categoryItem:[]},scrollHeight:function(){return this.height-44-55}}),mounted:function(){this.initdata()}},m=(a(467),a(469),a(15)),p=Object(m.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("mt-search",{staticClass:"searchbar",model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}}),e._v(" "),n("div",{staticClass:"menu"},[n("base-scroll",{attrs:{height:e.scrollHeight-50}},e._l(e.categoryList,function(t,a){return n("mt-cell",{key:a,staticClass:"menu_item",class:{active:a===e.categoryIndex},attrs:{title:t.category_name},nativeOn:{click:function(t){e.chooseHandler(a)}}})})),e._v(" "),n("mt-cell",{staticClass:"menu_item edit",attrs:{title:"修改"},nativeOn:{click:function(t){return e.editHandler(t)}}})],1),e._v(" "),n("base-scroll",{ref:"scroll",staticClass:"scroller",attrs:{width:"80%",height:e.scrollHeight,startScroll:e.scrollTop},on:{loadTop:e.loadTop,loadBottom:e.loadBottom}},[e.dataSource[0]?n("div",{staticClass:"cell_wrapper"},e._l(e.categoryItem,function(t,o){return n("div",{key:o,staticClass:"cell_content"},[n("div",{staticClass:"cell_image"},[n("img",{attrs:{src:a(223)},on:{click:function(a){e.addHandler(t)}}})]),e._v(" "),n("div",{staticClass:"cell_msg"},[n("h5",{staticClass:"cell_name"},[e._v("菜名："+e._s(t.vegetable_name))]),e._v(" "),n("p",{staticClass:"cell_unit"},[e._v("单位: "+e._s(t.unit))]),e._v(" "),n("number",{model:{value:t.num,callback:function(a){e.$set(t,"num",a)},expression:"item.num"}})],1)])})):e._e()]),e._v(" "),n("base-footer"),e._v(" "),n("mt-palette-button",{ref:"palette",staticClass:"palette",attrs:{content:"+",direction:"lt",radius:80,mainButtonStyle:"color:#fff;background-color:var(--color_main);"},on:{expanded:e.expandedHandler,collapse:e.collapseHandler}},[n("div",{staticClass:"my-icon-button indexicon icon-popup",on:{click:function(t){return t.stopPropagation(),e.resetHandler(t)}}},[e._v("重制")]),e._v(" "),n("div",{staticClass:"my-icon-button indexicon icon-popup",on:{click:function(t){return t.stopPropagation(),e.templateHandler(t)}}},[e._v("模版")]),e._v(" "),n("div",{staticClass:"my-icon-button indexicon icon-popup",on:{click:function(t){return t.stopPropagation(),e.saveHandler(t)}}},[e._v("保存")]),e._v(" "),n("div",{staticClass:"my-icon-button indexicon icon-popup",on:{click:function(t){return t.stopPropagation(),e.exportHandler(t)}}},[e._v("导出")])]),e._v(" "),n("mt-popup",{staticClass:"popup",attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[n("base-input",{staticClass:"remark",attrs:{width:"80%",mold:"float",placeholder:"备注："},model:{value:e.remarkItem.remark,callback:function(t){e.$set(e.remarkItem,"remark",t)},expression:"remarkItem.remark"}})],1)],1)},[],!1,null,"3833b3ef",null);p.options.__file="index.vue";t.default=p.exports}}]);