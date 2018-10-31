<!--  author:   Date:  -->
<template>
  <div>
    <mt-search v-model="searchKey" class="searchbar"></mt-search>
    <div class="scroller">
      <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
        <mt-cell title="蔬菜类" is-link  to="/"></mt-cell>
        <mt-cell-swipe title="青菜"></mt-cell-swipe>
        <mt-cell-swipe title="青菜"></mt-cell-swipe>
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
        <mt-cell-swipe title="猪肉"></mt-cell-swipe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {

  },
  data () {
    return {
      searchKey: '',
    };
  },
  methods: {
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