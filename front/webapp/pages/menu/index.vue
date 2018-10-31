<!--  author:   Date:  -->
<template>
  <div>
    <mt-search v-model="searchKey" class="searchbar"></mt-search>
    <div class="scroller">
      <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange">
        <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
          <div v-for="(catagory,index) in dataSource" :key="index">
            <mt-cell :title="catagory.name" is-link  :to="{path: '/menu/catagory', query: {name: catagory.name}}"></mt-cell>
            <mt-cell-swipe :title="item.name" v-for="(item, index) in catagory.catagoryItem" :key="index"></mt-cell-swipe>
          </div>
          <!-- <mt-cell-swipe title="青菜"></mt-cell-swipe>
          <mt-cell-swipe title="青菜"></mt-cell-swipe>
          <mt-cell-swipe title="青菜"></mt-cell-swipe>
          <mt-cell-swipe title="青菜"></mt-cell-swipe>
          <mt-cell-swipe title="青菜"></mt-cell-swipe>
          <mt-cell-swipe title="青菜"></mt-cell-swipe>
          <mt-cell-swipe title="青菜"></mt-cell-swipe>
          <mt-cell title="肉类" is-link  to="/"></mt-cell>
          <mt-cell-swipe title="猪肉"></mt-cell-swipe>
          <mt-cell-swipe title="猪肉"></mt-cell-swipe>
          <mt-cell-swipe title="猪肉"></mt-cell-swipe>
          <mt-cell-swipe title="猪肉"></mt-cell-swipe>
          <mt-cell-swipe title="猪肉"></mt-cell-swipe>
          <mt-cell-swipe title="猪肉"></mt-cell-swipe> -->
        </div>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">Loading...</span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  asyncData ({ parmas }) {
    return { 
      dataSource: [
        {
          name: '蔬菜类',
          catagoryItem: [
            { name: '青菜' },
            { name: '青菜' },
            { name: '青菜' },
            { name: '青菜' },
            { name: '青菜' },
            { name: '青菜' },
            { name: '青菜' },
            { name: '青菜' },
            { name: '青菜' },
          ]
        },
         {
          name: '肉类',
          catagoryItem: [
            { name: '猪肉' },
            { name: '猪肉' },
            { name: '猪肉' },
            { name: '猪肉' },
            { name: '猪肉' },
            { name: '猪肉' },
            { name: '猪肉' },
            { name: '猪肉' },
            { name: '猪肉' },
            { name: '猪肉' },
            { name: '猪肉' },
            { name: '猪肉' },
          ]
        }
      ]
    }
  },
  components: {

  },
  data () {
    return {
      topStatus: '',
      searchKey: '',
    };
  },
  methods: {
    loadTop() {
      console.log('load top')
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadMore() {
      console.log('load more')
    },
  },
  computed: {

  },
  mounted() {
  },
}

</script>
<style lang='scss' scoped>
  .searchbar {
    font-size: .3rem;
  }
  .scroller {
    position: absolute;
    top: 44px;        //ToChange
    left: 0;
    width: 100%;
    height: calc(100% - 44px);
    overflow: scroll;
  }
</style>
<style>
  .mint-searchbar-core {
    text-indent: .1rem;
  }
</style>
