<!--  author:   Date:  -->
<template>
  <div>
    <mt-search v-model="searchKey" class="searchbar"></mt-search>
    <base-scroll class="scroller" :height="scrollHeight" :startScroll="scrollTop" @loadTop="loadTop" @loadBottom="loadBottom" ref="scroll">
      <div>
        <div v-for="(catagory,index) in dataSource" :key="index">
          <mt-cell :title="catagory.name" is-link  :to="{path: '/menu/catagory', query: {name: catagory.name}}"></mt-cell>
          <mt-cell-swipe :title="item.name" v-for="(item, index) in catagory.catagoryItem" :key="index">
            <div class="cell_content">
              <p class="cell_unit">斤</p>
              <number v-model="item.num"></number>
            </div>
          </mt-cell-swipe>
        </div>
      </div>
    </base-scroll>
    <base-footer />
  </div>
</template>

<script>
import baseFooter from '@/components/layout/baseFooter'
import baseScroll from '@/components/layout/baseScroll'
import number from '@/components/commen/number'
import { mapState } from 'vuex';
export default {
  name: "",
  asyncData ({ parmas }) {
    return { 
      dataSource: [
        {
          name: '蔬菜类',
          catagoryItem: [
            { name: '青菜', num: 1 },
            { name: '青菜', num: 1 },
            { name: '青菜', num: 1 },
            { name: '青菜', num: 1 },
            { name: '青菜', num: 1 },
            { name: '青菜', num: 1 },
            { name: '青菜', num: 1 },
            { name: '青菜', num: 1 },
            { name: '青菜', num: 1 },
            { name: '青菜', num: 1 },
            { name: '青菜', num: 1 },
          ]
        },
         {
          name: '肉类',
          catagoryItem: [
            { name: '猪肉' ,num: 1},
            { name: '猪肉' ,num: 1},
            { name: '猪肉' ,num: 1},
            { name: '猪肉' ,num: 1},
            { name: '猪肉' ,num: 1},
            { name: '猪肉' ,num: 1},
            { name: '猪肉' ,num: 1},
            { name: '猪肉' ,num: 1},
            { name: '猪肉' ,num: 1},
            { name: '猪肉' ,num: 1},
          ]
        }
      ]
    }
  },
  components: {
    number,
    baseFooter,
    baseScroll,
  },
  data () {
    return {
      selected: null,
      topStatus: '',
      searchKey: '',
      scrollTop: 0,
    };
  },
  methods: {
    loadTop() {
      console.log('load top')
      setTimeout(() => {
        this.$refs.scroll.topLoaded()
      }, 1000)
    },
    loadBottom() {
      console.log('load bottom')
      setTimeout(() => {
         this.$refs.scroll.bottomLoaded(true);
      }, 1000);
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadMore() {
      console.log('load more')
    },
  },
  computed: {
    ...mapState({
      height: store => {return store.height}
    }),
    scrollHeight() {
      return this.height - 44 - 55
    }
  },
  mounted() {
  },
}

</script>
<style lang='scss' scoped>
  .searchbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    font-size: .3rem;
    z-index: 99;
  }
  .scroller {
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .cell_content {
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .cell_unit {
      width: 1rem;
      margin-right: 2rem;
    }
  }
</style>
<style>
  .mint-searchbar {
    background-color: #26a2ff
  }
  .mint-searchbar-core {
    text-indent: .1rem;
  }
</style>
