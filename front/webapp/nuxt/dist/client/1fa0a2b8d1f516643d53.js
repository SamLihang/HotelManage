(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{175:function(t,e,a){t.exports=a.p+"img/51beb66.png"},176:function(t,e,a){var n=a(180);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(25).default)("18889436",n,!0,{sourceMap:!1})},177:function(t,e,a){var n=a(185);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(25).default)("b52dd950",n,!0,{sourceMap:!1})},178:function(t,e,a){var n=a(190);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(25).default)("6d05d1c8",n,!0,{sourceMap:!1})},179:function(t,e,a){"use strict";var n=a(176);a.n(n).a},180:function(t,e,a){(t.exports=a(24)(!1)).push([t.i,"\n.footer[data-v-1e4e28f9]{z-index:99\n}",""])},181:function(t,e,a){var n=a(196);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(25).default)("1727bf76",n,!0,{sourceMap:!1})},182:function(t,e,a){"use strict";a(27);var n={name:"baseFooter",components:{},data:function(){return{selected:this.$route.name}},methods:{},computed:{},watch:{selected:function(t,e){this.$router.push("/".concat(t))}},mounted:function(){}},o=(a(179),a(15)),s=Object(o.a)(n,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mt-tabbar",{staticClass:"footer",model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"menu"}},[n("img",{attrs:{slot:"icon",src:a(175)},slot:"icon"}),t._v("\n    菜单\n  ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"statistics"}},[n("img",{attrs:{slot:"icon",src:a(175)},slot:"icon"}),t._v("\n    统计\n  ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"manage"}},[n("img",{attrs:{slot:"icon",src:a(175)},slot:"icon"}),t._v("\n    管理\n  ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"mine"}},[n("img",{attrs:{slot:"icon",src:a(175)},slot:"icon"}),t._v("\n    我的\n  ")])],1)},[],!1,null,"1e4e28f9",null);s.options.__file="baseFooter.vue";e.a=s.exports},183:function(t,e,a){"use strict";var n=a(2),o=a(14),s=a(18),i=a(96),l=a(47),r=a(10),c=a(48).f,d=a(64).f,u=a(9).f,m=a(187).trim,p=n.Number,f=p,v=p.prototype,b="Number"==s(a(63)(v)),h="trim"in String.prototype,g=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var a,n,o,s=(e=h?e.trim():m(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var i,r=e.slice(2),c=0,d=r.length;c<d;c++)if((i=r.charCodeAt(c))<48||i>o)return NaN;return parseInt(r,n)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof p&&(b?r(function(){v.valueOf.call(a)}):"Number"!=s(a))?i(new f(g(e)),a,p):g(e)};for(var _,I=a(6)?c(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;I.length>x;x++)o(f,_=I[x])&&!o(p,_)&&u(p,_,d(f,_));p.prototype=v,v.constructor=p,a(11)(n,"Number",p)}},184:function(t,e,a){"use strict";var n=a(177);a.n(n).a},185:function(t,e,a){(t.exports=a(24)(!1)).push([t.i,"\n.baseInput[data-v-4dbb4988]{height:.8rem;position:relative\n}\n.baseInput .baseInput_placeholder[data-v-4dbb4988]{position:absolute;top:0;left:.2rem;z-index:1;font-size:.4rem;color:#999;line-height:.8rem;transition:all .2s ease-in-out\n}\n.baseInput .baseInput_placeholder.active[data-v-4dbb4988]{top:-.8rem;left:0;color:#666;font-size:.45rem\n}\n.baseInput .baseInput_input[data-v-4dbb4988]{position:absolute;top:0;left:0;width:100%;height:100%;border:1px solid #d9d9d9;border-radius:4px;text-indent:.2rem;background:#fff\n}\n.baseInput.baseInput_float[data-v-4dbb4988]{margin-top:.8rem\n}",""])},186:function(t,e,a){"use strict";var n={name:"baseInput",components:{},data:function(){return{val:this.value}},props:{value:"",placeholder:{type:String,default:""},type:{type:String,default:"text"},width:{type:String,default:"100%"},mold:{type:String,default:"base"}},methods:{},computed:{},watch:{value:function(t,e){this.val=t},val:function(t,e){this.$emit("input",t)}},mounted:function(){}},o=(a(184),a(15)),s=Object(o.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"baseInput",class:"baseInput_"+t.mold,style:{width:t.width}},["float"===t.mold?a("span",{staticClass:"baseInput_placeholder",class:{active:t.val}},[t._v(t._s(t.placeholder))]):t._e(),t._v(" "),"checkbox"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"baseInput_input",attrs:{placeholder:"base"===t.mold?t.placeholder:"",type:"checkbox"},domProps:{checked:Array.isArray(t.val)?t._i(t.val,null)>-1:t.val},on:{change:function(e){var a=t.val,n=e.target,o=!!n.checked;if(Array.isArray(a)){var s=t._i(a,null);n.checked?s<0&&(t.val=a.concat([null])):s>-1&&(t.val=a.slice(0,s).concat(a.slice(s+1)))}else t.val=o}}}):"radio"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"baseInput_input",attrs:{placeholder:"base"===t.mold?t.placeholder:"",type:"radio"},domProps:{checked:t._q(t.val,null)},on:{change:function(e){t.val=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"baseInput_input",attrs:{placeholder:"base"===t.mold?t.placeholder:"",type:t.type},domProps:{value:t.val},on:{input:function(e){e.target.composing||(t.val=e.target.value)}}})])},[],!1,null,"4dbb4988",null);s.options.__file="baseInput.vue";e.a=s.exports},187:function(t,e,a){var n=a(5),o=a(17),s=a(10),i=a(188),l="["+i+"]",r=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t,e,a){var o={},l=s(function(){return!!i[t]()||"​"!="​"[t]()}),r=o[t]=l?e(u):i[t];a&&(o[a]=r),n(n.P+n.F*l,"String",o)},u=d.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(r,"")),2&e&&(t=t.replace(c,"")),t};t.exports=d},188:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},189:function(t,e,a){"use strict";var n=a(178);a.n(n).a},190:function(t,e,a){(t.exports=a(24)(!1)).push([t.i,"\n.bscroll[data-v-3ab7c46c]{overflow:scroll;height:1000px;-webkit-overflow-scrolling:touch\n}\n.bscroll .loadmore[data-v-3ab7c46c]{width:100%;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.bscroll .loadmore .mint-loadmore-bottom[data-v-3ab7c46c]{text-align:center\n}\n.bscroll .loadmore ul li[data-v-3ab7c46c]{margin:0;padding:0;height:100px;list-style:none outside none\n}\n.bscroll .loadmore span[data-v-3ab7c46c]{font-size:.4rem;line-height:.8rem\n}",""])},191:function(t,e,a){"use strict";a(183);var n={name:"BScroll",data:function(){return{allLoaded:!1,topStatus:"",bottomStatus:"",topDistance:70,bottomDistance:70,distanceIndex:2,maxDistance:200,loadable:!0}},props:{width:{type:String,default:"100%"},height:{type:Number,default:1e3},bg:{type:String,default:"none"},startScroll:{type:Number,default:0}},methods:{getScrollPos:function(){return this.$refs.scrollContent.scrollTop},scrollTo:function(t){this.$refs.scrollContent.scrollTop=t},handleTopChange:function(t){this.topStatus=t},handleBottomChange:function(t){this.bottomStatus=t},loadTop:function(){this.$emit("loadTop")},loadBottom:function(){this.$emit("loadBottom")},topLoaded:function(){var t=this;setTimeout(function(){t.$refs.loadmore.onTopLoaded()},1e3)},bottomLoaded:function(t){var e=this;!0===t&&(this.loadable=!1),setTimeout(function(){e.allLoaded=t,e.$refs.loadmore.onBottomLoaded()},1e3)}},mounted:function(){this.startScroll&&this.scrollTo(this.startScroll)}},o=(a(189),a(15)),s=Object(o.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"scrollContent",staticClass:"bscroll",style:{height:t.height+"px",width:""+t.width,background:t.bg}},[a("mt-loadmore",{ref:"loadmore",staticClass:"loadmore",attrs:{"top-method":t.loadTop,"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,maxDistance:t.maxDistance,topDistance:t.topDistance,bottomDistance:t.bottomDistance,distanceIndex:t.distanceIndex},on:{"top-status-change":t.handleTopChange,"bottom-status-change":t.handleBottomChange}},[a("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[a("span",{directives:[{name:"show",rawName:"v-show",value:"pull"===t.topStatus,expression:"topStatus === 'pull'"}]},[t._v("下拉刷新")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}]},[t._v("加载中...")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"drop"===t.topStatus,expression:"topStatus === 'drop'"}]},[t._v("释放更新")])]),t._v(" "),t._t("default",[a("ul",t._l(100,function(t,e){return a("li",{key:e})}))]),t._v(" "),a("div",{staticClass:"mint-loadmore-bottom",attrs:{slot:"bottom"},slot:"bottom"},[t.loadable?a("span",[a("span",{directives:[{name:"show",rawName:"v-show",value:"pull"===t.bottomStatus,expression:"bottomStatus === 'pull'"}]},[t._v("上拉加载更多")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.bottomStatus,expression:"bottomStatus === 'loading'"}]},[t._v("加载中...")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"drop"===t.bottomStatus,expression:"bottomStatus === 'drop'"}]},[t._v("释放加载")])]):a("span",[t._v("暂无更多内容")])])],2)],1)},[],!1,null,"3ab7c46c",null);s.options.__file="baseScroll.vue";e.a=s.exports},192:function(t,e,a){t.exports=a.p+"img/d88c823.jpg"},193:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQxMDgyMDU2OTQwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMTI4LjAzNjU4MyA0NDguMzg0MTI0bDc2Ni45OTg2OTUgMCAwIDEyNi44ODk5NjktNzY2Ljk5ODY5NSAwIDAtMTI2Ljg4OTk2OVoiIHAtaWQ9IjIxMjYiIGZpbGw9IiM3MDcwNzAiPjwvcGF0aD48L3N2Zz4="},194:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQxMDgxNjExMjE1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNzg1LjA2NjY2NyA0NjAuOCA1NjMuMiA0NjAuOCA1NjMuMiAyMzguOTMzMzMzIDQ2MC44IDIzOC45MzMzMzMgNDYwLjggNDYwLjggMjM4LjkzMzMzMyA0NjAuOCAyMzguOTMzMzMzIDU2My4yIDQ2MC44IDU2My4yIDQ2MC44IDc4NS4wNjY2NjcgNTYzLjIgNzg1LjA2NjY2NyA1NjMuMiA1NjMuMiA3ODUuMDY2NjY3IDU2My4yWiIgcC1pZD0iMTA0NyIgZmlsbD0iIzcwNzA3MCI+PC9wYXRoPjwvc3ZnPg=="},195:function(t,e,a){"use strict";var n=a(181);a.n(n).a},196:function(t,e,a){(t.exports=a(24)(!1)).push([t.i,"\n.number[data-v-3a128178]{width:100%;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center\n}\n.number .add[data-v-3a128178],.number .sub[data-v-3a128178]{width:.7rem;height:.7rem;border:1px solid #d9d9d9;margin:.2rem;border-radius:50%;background:#ccc\n}\n.number .add img[data-v-3a128178],.number .sub img[data-v-3a128178]{width:100%;height:100%\n}\n.number .number_inp[data-v-3a128178]{width:1rem;height:.5rem;border:1px solid #d9d9d9;text-align:center\n}",""])},197:function(t,e,a){"use strict";a(183);var n={name:"number",components:{},data:function(){return{val:this.value}},props:{placeholder:{type:String,default:""},value:"",min:{type:Number,default:0},max:{type:Number,default:Number.MAX_VALUE}},methods:{addCount:function(){this.val++},subCount:function(){this.val--}},computed:{},watch:{value:function(t,e){this.val=t},val:function(t,e){t<this.min||t>this.max?this.val=e:this.$emit("input",t)}},mounted:function(){}},o=(a(195),a(15)),s=Object(o.a)(n,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"number"},[n("button",{staticClass:"add",on:{click:function(e){return e.stopPropagation(),t.subCount(e)}}},[n("img",{attrs:{src:a(193),alt:""}})]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"number_inp",attrs:{type:"number"},domProps:{value:t.val},on:{input:function(e){e.target.composing||(t.val=e.target.value)}}}),t._v(" "),n("button",{staticClass:"sub",on:{click:function(e){return e.stopPropagation(),t.addCount(e)}}},[n("img",{attrs:{src:a(194),alt:""}})])])},[],!1,null,"3a128178",null);s.options.__file="number.vue";e.a=s.exports},213:function(t,e,a){var n=a(249);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(25).default)("e4838934",n,!0,{sourceMap:!1})},214:function(t,e,a){var n=a(251);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(25).default)("4dc6ee00",n,!0,{sourceMap:!1})},248:function(t,e,a){"use strict";var n=a(213);a.n(n).a},249:function(t,e,a){(t.exports=a(24)(!1)).push([t.i,"\n.menu[data-v-6d5b790a]{position:absolute;top:40px;left:0;width:20%;box-shadow:3px 0 5px #ccc;z-index:1\n}\n.menu .edit[data-v-6d5b790a]{background:var(--color_four)!important;text-align:center\n}\n.menu .menu_item[data-v-6d5b790a]{color:#fff;background:#999\n}\n.menu .menu_item+.menu_item[data-v-6d5b790a]{border-top:1px solid #d9d9d9\n}\n.menu .menu_item.active[data-v-6d5b790a]{color:#333;background:#fff\n}\n.scroller[data-v-6d5b790a]{position:absolute;top:40px;left:20%\n}\n.cell_wrapper[data-v-6d5b790a]{background:#dadada;padding:.3rem 0\n}\n.cell_content[data-v-6d5b790a]{display:flex;width:90%;height:2.5rem;background:#fff;border-radius:.2rem;flex-flow:row nowrap;justify-content:space-between;align-items:center;margin:.3rem auto 0;overflow:hidden;box-shadow:0 3px 5px #ababab\n}\n.cell_content[data-v-6d5b790a]:first-child{margin-top:0\n}\n.cell_content .cell_image[data-v-6d5b790a]{width:40%;height:100%\n}\n.cell_content .cell_image img[data-v-6d5b790a]{width:100%;height:100%\n}\n.cell_content .cell_msg[data-v-6d5b790a]{width:50%;height:100%;display:flex;flex-flow:column nowrap;justify-content:space-around;align-items:flex-end\n}\n.cell_content .cell_msg .cell_name[data-v-6d5b790a]{width:100%;color:#333;margin-left:1rem;font-size:.4rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap\n}\n.cell_content .cell_msg .cell_unit[data-v-6d5b790a]{width:100%;color:#666;font-size:.3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap\n}\n.cell_content .cell_msg .cell_options[data-v-6d5b790a]{width:1.5rem;font-size:.4rem;display:flex;color:#aaa\n}\n.cell_content .cell_msg .cell_options p[data-v-6d5b790a]{color:#7eafca\n}\n.palette[data-v-6d5b790a]{position:absolute;right:10px;bottom:60px;background:var(--color_main)\n}\n.palette .icon-popup[data-v-6d5b790a]{background:var(--color_main);border-radius:50%;width:30px;height:30px;text-align:center;line-height:30px;color:#fff\n}\n.popup[data-v-6d5b790a]{width:100%;height:5rem\n}\n.popup .popup_scroll[data-v-6d5b790a]{height:100%!important\n}",""])},250:function(t,e,a){"use strict";var n=a(214);a.n(n).a},251:function(t,e,a){(t.exports=a(24)(!1)).push([t.i,"\n.menu_item .mint-cell-wrapper{background-image:none\n}",""])},265:function(t,e,a){"use strict";a.r(e);var n=a(16),o=a.n(n),s=a(182),i=a(191),l=a(186),r=a(197),c=a(26),d={name:"",asyncData:function(t){t.parmas;return{categoryList:[{name:"蔬菜类"},{name:"肉类"},{name:"水产"},{name:"冻品"},{name:"干货"}],dataSource:[{name:"蔬菜类",catagory_id:112,catagoryItem:[{name:"青菜",num:1,remark:"sssafdfa"},{name:"青菜",num:1,remark:"sssafdfa"},{name:"青菜",num:1,remark:"sssafdfa"},{name:"青菜",num:1,remark:"sssafdfa"},{name:"青菜",num:1,remark:"sssafdfa"},{name:"青菜",num:1,remark:"sssafdfa"},{name:"青菜",num:1,remark:"sssafdfa"},{name:"青菜",num:1,remark:"sssafdfa"},{name:"青菜",num:1,remark:"sssafdfa"},{name:"青菜",num:1,remark:"sssafdfa"},{name:"青菜",num:1,remark:"sssafdfa"},{name:"青菜",num:1,remark:"sssafdfa"}]},{name:"肉类",catagoryItem:[{name:"猪肉",num:1,remark:"adfasdfafa"},{name:"猪肉",num:1,remark:"adfasdfafa"},{name:"猪肉",num:1,remark:"adfasdfafa"},{name:"猪肉",num:1,remark:"adfasdfafa"},{name:"猪肉",num:1,remark:"adfasdfafa"},{name:"猪肉",num:1,remark:"adfasdfafa"},{name:"猪肉",num:1,remark:"adfasdfafa"},{name:"猪肉",num:1,remark:"adfasdfafa"},{name:"猪肉",num:1,remark:"adfasdfafa"},{name:"猪肉",num:1,remark:"adfasdfafa"},{name:"猪肉",num:1,remark:"adfasdfafa"},{name:"猪肉",num:1,remark:"adfasdfafa"},{name:"猪肉",num:1,remark:"adfasdfafa"}]}]}},components:{number:r.a,baseFooter:s.a,baseScroll:i.a,baseInput:l.a},data:function(){return{selected:null,topStatus:"",searchKey:"",scrollTop:0,editData:{},catagoryIndex:0,popupVisible:!1}},methods:{editItem:function(){this.$router.push({path:"/manage/dishesmanage/editItem",query:{}})},deleteItem:function(){},chooseHandler:function(t){this.catagoryIndex=t},addCategory:function(){this.popupVisible=!1},addHandler:function(){this.popupVisible=!0},editHandler:function(){this.$router.push({path:"/menu/catagory",query:{}})},loadTop:function(){var t=this;console.log("load top"),setTimeout(function(){t.$refs.scroll.topLoaded()},1e3)},loadBottom:function(){var t=this;console.log("load bottom"),setTimeout(function(){t.$refs.scroll.bottomLoaded(!0)},1e3)},handleTopChange:function(t){this.topStatus=t},loadMore:function(){console.log("load more")}},computed:o()({},Object(c.b)({height:function(t){return t.height}}),{scrollHeight:function(){return this.height-40}}),mounted:function(){this.$fetch("/vegetable").then(function(t){console.log(t)})}},u=(a(248),a(250),a(15)),m=Object(u.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-header",{attrs:{fixed:"",title:"模版一"}},[n("mt-button",{attrs:{slot:"left",icon:"back"},nativeOn:{click:function(e){e.stopPropagation(),t.$router.go(-1)}},slot:"left"},[t._v("返回")])],1),t._v(" "),n("div",{staticClass:"menu"},[n("base-scroll",{attrs:{height:t.scrollHeight-96}},t._l(t.dataSource,function(e,a){return n("mt-cell",{key:a,staticClass:"menu_item",class:{active:a===t.catagoryIndex},attrs:{title:e.name},nativeOn:{click:function(e){t.chooseHandler(a)}}})})),t._v(" "),n("mt-cell",{staticClass:"menu_item edit",attrs:{title:"新增"},nativeOn:{click:function(e){return t.addHandler(e)}}}),t._v(" "),n("mt-cell",{staticClass:"menu_item edit",attrs:{title:"修改"},nativeOn:{click:function(e){return t.editHandler(e)}}})],1),t._v(" "),n("base-scroll",{ref:"scroll",staticClass:"scroller",attrs:{width:"80%",height:t.scrollHeight,startScroll:t.scrollTop},on:{loadTop:t.loadTop,loadBottom:t.loadBottom}},[t.dataSource[0]?n("div",{staticClass:"cell_wrapper"},t._l(t.dataSource[t.catagoryIndex].catagoryItem,function(e,o){return n("div",{key:o,staticClass:"cell_content"},[n("div",{staticClass:"cell_image"},[n("img",{attrs:{src:a(192)}})]),t._v(" "),n("div",{staticClass:"cell_msg"},[n("h5",{staticClass:"cell_name"},[t._v("菜名："+t._s(e.name))]),t._v(" "),n("p",{staticClass:"cell_unit"},[t._v("单位：斤")]),t._v(" "),n("div",{staticClass:"cell_options"},[n("p",{on:{click:function(e){return e.stopPropagation(),t.deleteItem(e)}}},[t._v("删除")])])])])})):t._e()]),t._v(" "),n("mt-popup",{staticClass:"popup",attrs:{position:"bottom"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[n("base-scroll",{staticClass:"popup_scroll"},t._l(t.categoryList,function(e,a){return n("mt-cell",{key:a,attrs:{title:e.name},nativeOn:{click:function(e){return e.stopPropagation(),t.addCategory(e)}}})}))],1)],1)},[],!1,null,"6d5b790a",null);m.options.__file="moduleEdit.vue";e.default=m.exports}}]);