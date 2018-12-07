<template>
  <div class="bscroll" :style="{height:`${height}px`, width:`${width}`,background:bg}" ref="scrollContent">
    <mt-loadmore class="loadmore" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange"
    :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :maxDistance="maxDistance"
    :topDistance="topDistance" :bottomDistance="bottomDistance" :distanceIndex="distanceIndex" ref="loadmore">
        <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus === 'pull'">下拉刷新</span>
            <span v-show="topStatus === 'loading'">加载中...</span>
            <span v-show="topStatus === 'drop'">释放更新</span>
        </div>
        <slot>
            <ul>
                <li v-for="(data,index) in 100" :key="index"></li>
            </ul>
        </slot>
        <div slot="bottom" class="mint-loadmore-bottom">
            <span v-if="loadable">
              <span v-show="bottomStatus === 'pull'">上拉加载更多</span>
              <span v-show="bottomStatus === 'loading'">加载中...</span>
              <span v-show="bottomStatus === 'drop'">释放加载</span>
            </span>
            <span v-else>暂无更多内容</span>
        </div>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  name: 'BScroll',
  data () {
    return {
      allLoaded: false,
      topStatus: '',
      bottomStatus: '',
      topDistance: 70,  //触发 topMethod 的下拉距离阈值（像素）
      bottomDistance: 70, //触发 bottomMethod 的上拉距离阈值（像素）
      distanceIndex: 2, //手指移动与组件移动距离的比值
      maxDistance: 200, //组件可移动的最大距离（像素），若为 0 则不限制
      loadable: true,
    }
  },
  props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: Number,
        default: 1000,
      },
      bg: {
        type: String,
        default: 'none',
      },
      startScroll: {
        type: Number,
        default: 0
      }
  },
  methods: {
    getScrollPos() {
      return this.$refs.scrollContent.scrollTop
    },
    scrollTo(scrollTop) {
      this.$refs.scrollContent.scrollTop = scrollTop
    },
    handleTopChange(status) {
        // pull：组件已经被按下，但按下的距离未达到 topDistance，此时释放不会触发 top-method，列表会回到初始位置
        // drop：按下的距离不小于 topDistance，此时释放会触发 top-method
        // loading：组件已被释放，top-method 正在执行 每当组件的状态发生变化时，loadmore 都会触发 top-status-change 方法，参数为组件目前的状态。因此可以像本例一样，使用一个 handleTopChange 方法来处理组件状态的变化。
        this.topStatus = status;
    },
    handleBottomChange(status) {
        //drop 下拉开始 pull 下拉结束
        this.bottomStatus = status
    },
    loadTop() {
      //console.log('触发下拉')
      this.$emit('loadTop')
    },
    loadBottom() {
      //console.log('触发上拉')
      this.$emit('loadBottom')
    },
    topLoaded() {
      //console.log('下拉结束')
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded();
      }, 1000);
    },
    bottomLoaded(loadover) {
      //console.log('上拉结束')
      if(loadover === true){
        this.loadable = false
      }
      setTimeout(() => {
        this.allLoaded = loadover
        this.$refs.loadmore.onBottomLoaded();
      }, 1000);
    }
  },
  mounted(){
    if(this.startScroll) {
      this.scrollTo(this.startScroll)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bscroll{
  overflow: scroll;
  height: 1000px;
  -webkit-overflow-scrolling: touch;
  .loadmore{
    width: 100%;
    transform: translate3d(0,0,0);
    .mint-loadmore-bottom{
      text-align: center;
    }
    ul li{
      margin: 0;
      padding: 0;
      height: 100px;
      list-style:none outside none
    }
    span{
      font-size: .4rem;
      line-height: .8rem;
    }
  }
}
  
</style>
