<template>
    <div>
        <img :src="src" />
        <canvas ref="canvas" class="canvas"></canvas>
    </div>

</template>
<script> 
    import { mapState } from "vuex";
    export default {
        data () {
            return {
                canvasWidth: 620,
                canvasHeight: 877,
                tableW: .8,
                categoryH: 40,
                vagetableH: 30,
                point: {x: 62 , y: 100},
                src: "",            
            }
        },
        methods:{
            drawCategory(ctx, text) {
                ctx.strokeStyle = "#000"
                ctx.beginPath()
                ctx.moveTo(this.point.x, this.point.y);
                ctx.lineTo(this.point.x + this.tableW * this.canvasWidth , this.point.y )
                ctx.lineTo(this.point.x + this.tableW * this.canvasWidth , this.point.y + this.categoryH)
                ctx.lineTo(this.point.x, this.point.y + this.categoryH)
                ctx.lineTo(this.point.x, this.point.y);
                ctx.closePath()
                ctx.font = '500 20px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#333';
                ctx.fillText(text, this.point.x + this.tableW * this.canvasWidth * .5, this.point.y + this.categoryH * .5);    
                this.point = {x: this.point.x, y: this.point.y + this.categoryH}
                ctx.stroke()
            },
            dreawVagetable(ctx, data) {
                ctx.strokeStyle = "#999"
                ctx.beginPath()
                ctx.moveTo(this.point.x, this.point.y);
                ctx.lineTo(this.point.x + this.tableW * this.canvasWidth , this.point.y )
                ctx.lineTo(this.point.x + this.tableW * this.canvasWidth , this.point.y + this.vagetableH)
                ctx.lineTo(this.point.x, this.point.y + this.vagetableH)
                ctx.lineTo(this.point.x, this.point.y);
                ctx.moveTo(this.point.x + this.tableW * this.canvasWidth * .2 , this.point.y)
                ctx.lineTo(this.point.x + this.tableW * this.canvasWidth * .2 , this.point.y + this.vagetableH)
                ctx.moveTo(this.point.x + this.tableW * this.canvasWidth * .4 , this.point.y)
                ctx.lineTo(this.point.x + this.tableW * this.canvasWidth * .4 , this.point.y + this.vagetableH)
                ctx.moveTo(this.point.x + this.tableW * this.canvasWidth * .6 , this.point.y)
                ctx.lineTo(this.point.x + this.tableW * this.canvasWidth * .6 , this.point.y + this.vagetableH)
                ctx.closePath()
                ctx.font = '500 12px Arial';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#333';
                ctx.fillText(data.name, this.point.x + this.tableW * this.canvasWidth * .05, this.point.y + this.vagetableH * .5);    
                ctx.fillText(data.unit, this.point.x + this.tableW * this.canvasWidth * .25, this.point.y + this.vagetableH * .5);    
                ctx.fillText(data.num, this.point.x + this.tableW * this.canvasWidth * .45, this.point.y + this.vagetableH * .5);    
                ctx.fillText(data.remark, this.point.x + this.tableW * this.canvasWidth * .65, this.point.y + this.vagetableH * .5);    
                this.point = {x: this.point.x, y: this.point.y + this.vagetableH}
                ctx.stroke()
            }
        },
        computed: {
            ...mapState(['menu'])
        },
        mounted () {
            let _canvas = this.$refs.canvas;
            let _ctx = _canvas.getContext('2d');
            // _canvas.width = 2480;
            // _canvas.height = 3508;
            let height = 100
            for(let i = 0; i < this.menu.length; i++) {
                height += this.categoryH
                for(let j = 0; j < this.menu[i].categoryItem.length; j++) {
                    height += this.vagetableH
                }
            }
            height += 100
            _canvas.width = this.canvasWidth;
            _canvas.height = height;
            _ctx.lineWidth=1;
            //绘制表格
            _ctx.font = '500 30px Arial';
            _ctx.textAlign = 'center';
            _ctx.textBaseline = 'middle';
            _ctx.fillStyle = '#333';
            _ctx.fillText('采购单', this.point.x + this.tableW * this.canvasWidth * .5, 50);    
            // 第一步： 绘制横线
            for(let i = 0; i < this.menu.length; i++) {
                this.drawCategory(_ctx, this.menu[i].category_name)
                for(let j = 0; j < this.menu[i].categoryItem.length; j++) {
                    this.dreawVagetable(_ctx, this.menu[i].categoryItem[j])
                }
            }
            _ctx.strokeStyle = "#000"
            _ctx.beginPath()
            _ctx.moveTo(62, 100);
            _ctx.lineTo(62 + this.tableW * this.canvasWidth , 100 )
            _ctx.lineTo(62 + this.tableW * this.canvasWidth , this.point.y)
            _ctx.lineTo(this.point.x, this.point.y)
            _ctx.lineTo(62, 100);
            _ctx.closePath();
            _ctx.stroke()
            this.src = _canvas.toDataURL("image/png");
        },
        
    }
</script>
<style lang="scss" scoped>
    .canvas {
        display: none;
    }
</style>