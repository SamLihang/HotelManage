(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{259:function(t,i,s){var e=s(472);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,s(25).default)("3ae1cb23",e,!0,{sourceMap:!1})},471:function(t,i,s){"use strict";var e=s(259);s.n(e).a},472:function(t,i,s){(t.exports=s(24)(!1)).push([t.i,"\n.canvas[data-v-5e38fdde]{display:none\n}",""])},518:function(t,i,s){"use strict";s.r(i);var e=s(16),h=s.n(e),a=s(26),n={data:function(){return{canvasWidth:620,canvasHeight:877,tableW:.8,categoryH:40,vagetableH:30,point:{x:62,y:100},src:""}},methods:{drawCategory:function(t,i){t.strokeStyle="#000",t.beginPath(),t.moveTo(this.point.x,this.point.y),t.lineTo(this.point.x+this.tableW*this.canvasWidth,this.point.y),t.lineTo(this.point.x+this.tableW*this.canvasWidth,this.point.y+this.categoryH),t.lineTo(this.point.x,this.point.y+this.categoryH),t.lineTo(this.point.x,this.point.y),t.closePath(),t.font="500 20px Arial",t.textAlign="center",t.textBaseline="middle",t.fillStyle="#333",t.fillText(i,this.point.x+this.tableW*this.canvasWidth*.5,this.point.y+.5*this.categoryH),this.point={x:this.point.x,y:this.point.y+this.categoryH},t.stroke()},dreawVagetable:function(t,i){t.strokeStyle="#999",t.beginPath(),t.moveTo(this.point.x,this.point.y),t.lineTo(this.point.x+this.tableW*this.canvasWidth,this.point.y),t.lineTo(this.point.x+this.tableW*this.canvasWidth,this.point.y+this.vagetableH),t.lineTo(this.point.x,this.point.y+this.vagetableH),t.lineTo(this.point.x,this.point.y),t.moveTo(this.point.x+this.tableW*this.canvasWidth*.2,this.point.y),t.lineTo(this.point.x+this.tableW*this.canvasWidth*.2,this.point.y+this.vagetableH),t.moveTo(this.point.x+this.tableW*this.canvasWidth*.4,this.point.y),t.lineTo(this.point.x+this.tableW*this.canvasWidth*.4,this.point.y+this.vagetableH),t.moveTo(this.point.x+this.tableW*this.canvasWidth*.6,this.point.y),t.lineTo(this.point.x+this.tableW*this.canvasWidth*.6,this.point.y+this.vagetableH),t.closePath(),t.font="500 12px Arial",t.textAlign="left",t.textBaseline="middle",t.fillStyle="#333",t.fillText(i.vegetable_name,this.point.x+this.tableW*this.canvasWidth*.05,this.point.y+.5*this.vagetableH),t.fillText(i.unit,this.point.x+this.tableW*this.canvasWidth*.25,this.point.y+.5*this.vagetableH),t.fillText(i.num,this.point.x+this.tableW*this.canvasWidth*.45,this.point.y+.5*this.vagetableH),t.fillText(i.remark,this.point.x+this.tableW*this.canvasWidth*.65,this.point.y+.5*this.vagetableH),this.point={x:this.point.x,y:this.point.y+this.vagetableH},t.stroke()}},computed:h()({},Object(a.b)({menu:function(t){return JSON.parse(t.menu)}})),mounted:function(){for(var t=this.$refs.canvas,i=t.getContext("2d"),s=100,e=0;e<this.menu.length;e++){s+=this.categoryH;for(var h=0;h<this.menu[e].categoryItem.length;h++)s+=this.vagetableH}s+=100,t.width=this.canvasWidth,t.height=s,i.lineWidth=1,i.font="500 30px Arial",i.textAlign="center",i.textBaseline="middle",i.fillStyle="#333",i.fillText("石记美食采购单",this.point.x+this.tableW*this.canvasWidth*.5,50),i.font="500 12px Arial",i.fillStyle="#666",i.textAlign="right";var a=new Date;i.fillText("".concat(a.getFullYear(),"年").concat(a.getMonth()+1,"月").concat(a.getDate(),"日 ").concat(a.getHours(),"点").concat(a.getMinutes(),"分"),this.point.x+this.tableW*this.canvasWidth,80),i.strokeStyle="#999",i.beginPath(),i.moveTo(this.point.x,this.point.y),i.lineTo(this.point.x+this.tableW*this.canvasWidth,this.point.y),i.lineTo(this.point.x+this.tableW*this.canvasWidth,this.point.y+this.vagetableH),i.lineTo(this.point.x,this.point.y+this.vagetableH),i.lineTo(this.point.x,this.point.y),i.moveTo(this.point.x+this.tableW*this.canvasWidth*.2,this.point.y),i.lineTo(this.point.x+this.tableW*this.canvasWidth*.2,this.point.y+this.vagetableH),i.moveTo(this.point.x+this.tableW*this.canvasWidth*.4,this.point.y),i.lineTo(this.point.x+this.tableW*this.canvasWidth*.4,this.point.y+this.vagetableH),i.moveTo(this.point.x+this.tableW*this.canvasWidth*.6,this.point.y),i.lineTo(this.point.x+this.tableW*this.canvasWidth*.6,this.point.y+this.vagetableH),i.closePath(),i.font="500 12px Arial",i.textAlign="left",i.textBaseline="middle",i.fillStyle="#333",i.fillText("菜名",this.point.x+this.tableW*this.canvasWidth*.05,this.point.y+.5*this.vagetableH),i.fillText("规格",this.point.x+this.tableW*this.canvasWidth*.25,this.point.y+.5*this.vagetableH),i.fillText("数量",this.point.x+this.tableW*this.canvasWidth*.45,this.point.y+.5*this.vagetableH),i.fillText("备注",this.point.x+this.tableW*this.canvasWidth*.65,this.point.y+.5*this.vagetableH),this.point={x:this.point.x,y:this.point.y+this.vagetableH},i.stroke();for(var n=0;n<this.menu.length;n++){this.drawCategory(i,this.menu[n].category_name);for(var o=0;o<this.menu[n].categoryItem.length;o++)this.dreawVagetable(i,this.menu[n].categoryItem[o])}i.strokeStyle="#000",i.beginPath(),i.moveTo(62,100),i.lineTo(62+this.tableW*this.canvasWidth,100),i.lineTo(62+this.tableW*this.canvasWidth,this.point.y),i.lineTo(this.point.x,this.point.y),i.lineTo(62,100),i.closePath(),i.stroke(),this.src=t.toDataURL("image/png")}},o=(s(471),s(15)),l=Object(o.a)(n,function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("img",{attrs:{src:this.src}}),this._v(" "),i("canvas",{ref:"canvas",staticClass:"canvas"})])},[],!1,null,"5e38fdde",null);l.options.__file="index.vue";i.default=l.exports}}]);