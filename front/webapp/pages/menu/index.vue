<!--  author:   Date:  -->
<template>
  <div>
    <mt-search v-model="searchKey" class="searchbar"></mt-search>
    <base-scroll class="scroller" :height="scrollHeight" :startScroll="scrollTop" @loadTop="loadTop" @loadBottom="loadBottom" ref="scroll">
      <div>
        <div v-for="(catagory,index) in dataSource" :key="index" class="catagory">
          <mt-cell class="catagory_title" :title="catagory.name" is-link  :to="{path: '/menu/catagory', query: {name: catagory.name}}"></mt-cell>
          <div class="cell_content" v-for="(item, i) in catagory.catagoryItem" :key="i" @click.stop="editItem(index,i)">
            <h5 class="cell_name">{{item.name}}</h5>
            <p class="cell_unit">斤</p>
            <span class="cell_number">{{item.num}}</span>
          </div>
        </div>
      </div>
    </base-scroll>
    <base-footer />
    <mt-popup
      v-model="popupVisible"
      position="bottom"
      class="popup">
      <div class="popupContent">
        <h5 class="pop_name">菜名：{{editData.name}}</h5>
        <div class="pop_num">
          <p>数量：</p><number v-model="editData.num"></number>
        </div>
        <div class="pop_mark">
          <p>备注：</p><base-input v-model="editData.remark"></base-input>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import baseFooter from '@/components/layout/baseFooter'
import baseScroll from '@/components/layout/baseScroll'
import baseInput from '@/components/layout/baseInput'
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
            { name: '青菜', num: 1, remark: "sssafdfa" },
            { name: '青菜', num: 1, remark: "sssafdfa" },
            { name: '青菜', num: 1, remark: "sssafdfa" },
            { name: '青菜', num: 1, remark: "sssafdfa" },
            { name: '青菜', num: 1, remark: "sssafdfa" },
            { name: '青菜', num: 1, remark: "sssafdfa" },
            { name: '青菜', num: 1, remark: "sssafdfa" },
            { name: '青菜', num: 1, remark: "sssafdfa" },
            { name: '青菜', num: 1, remark: "sssafdfa" },
            { name: '青菜', num: 1, remark: "sssafdfa" },
            { name: '青菜', num: 1, remark: "sssafdfa" },
            { name: '青菜', num: 1, remark: "sssafdfa" },
          ]
        },
         {
          name: '肉类',
          catagoryItem: [
            { name: '猪肉' ,num: 1, remark: "adfasdfafa"},
            { name: '猪肉' ,num: 1, remark: "adfasdfafa"},
            { name: '猪肉' ,num: 1, remark: "adfasdfafa"},
            { name: '猪肉' ,num: 1, remark: "adfasdfafa"},
            { name: '猪肉' ,num: 1, remark: "adfasdfafa"},
            { name: '猪肉' ,num: 1, remark: "adfasdfafa"},
            { name: '猪肉' ,num: 1, remark: "adfasdfafa"},
            { name: '猪肉' ,num: 1, remark: "adfasdfafa"},
            { name: '猪肉' ,num: 1, remark: "adfasdfafa"},
            { name: '猪肉' ,num: 1, remark: "adfasdfafa"},
            { name: '猪肉' ,num: 1, remark: "adfasdfafa"},
            { name: '猪肉' ,num: 1, remark: "adfasdfafa"},
            { name: '猪肉' ,num: 1, remark: "adfasdfafa"},
          ]
        }
      ]
    }
  },
  components: {
    number,
    baseFooter,
    baseScroll,
    baseInput,
  },
  data () {
    return {
      selected: null,
      topStatus: '',
      searchKey: '',
      scrollTop: 0,
      editData: {},
      popupVisible: false,
    };
  },
  methods: {
    editItem(index,i) {
      this.editData = this.dataSource[index].catagoryItem[i]
      this.popupVisible = true;
    },
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
  .catagory {
    background: #dff2ff;
    padding-bottom: .3rem;
    &+.catagory {
      margin-top: .4rem;
    }
    .catagory_title {
      background: #dff2ff;
    }
  }
  .cell_content {
    display: flex;
    width: 90%;
    margin: 0 auto;
    height: 1.5rem;
    border-radius: .1rem;
    background: #a1bd9f;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    &+.cell_content {
      margin-top: .3rem;
    }
    .cell_name {
      width: 2rem;
      margin-left: 1rem;
      font-size: .4rem;
    }
    .cell_unit {
      width: 1rem;
      font-size: .3rem;
      color: #333;
    }
    .cell_number {
      width: 2rem;
      font-size: .4rem;
    }
  }
  .popup {
    width: 100%;
    .popupContent {
      height: 3rem;
      width:100%; 
      background: #fff;
      padding: .5rem;
      font-size: .4rem;
      .pop_name {
        font-size: .5rem
      }
      .pop_num {
        display: flex;
        flex-flow: row nowrap;
        p {
          white-space: nowrap;
        }
      }
      .pop_mark {
        display: flex;
        flex-flow: row nowrap;
        p {
          white-space: nowrap;
        }
      }
    }
  }
</style>
<style>
  .mint-searchbar {
    background-color: #6194bb
  }
  .mint-searchbar-core {
    text-indent: .1rem;
  }
</style>
