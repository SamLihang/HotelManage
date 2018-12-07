<!--  author:   Date:  -->
<template>
  <div>
    <mt-header fixed title="模版一">
      <mt-button @click.native.stop="$router.go(-1)" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="menu">
      <base-scroll :height="scrollHeight - 96">
        <mt-cell class="menu_item" @click.native="chooseHandler(index)" :class="{active: index===catagoryIndex}" :title="menu.name" v-for="(menu,index) in dataSource" :key="index"></mt-cell>
      </base-scroll>
      <mt-cell title="新增" class="menu_item edit" @click.native="addHandler"></mt-cell>
      <mt-cell title="修改" class="menu_item edit" @click.native="editHandler"></mt-cell>
    </div>
    <base-scroll class="scroller" width="80%" :height="scrollHeight" :startScroll="scrollTop" @loadTop="loadTop" @loadBottom="loadBottom" ref="scroll">
      <div class="cell_wrapper" v-if="dataSource[0]">
        <div class="cell_content" v-for="(item,index) in dataSource[catagoryIndex].catagoryItem" :key="index">
          <div class="cell_image"><img src="@/assets/image/green.jpg"></div>
          <div class="cell_msg">
            <h5 class="cell_name">菜名：{{item.name}}</h5>
            <p class="cell_unit">单位：斤</p>
            <div class="cell_options"><p @click.stop="deleteItem">删除</p></div>
          </div>
        </div>
      </div>
    </base-scroll>
    <mt-popup
      v-model="popupVisible"
      class="popup" position="bottom">
      <base-scroll class="popup_scroll">
        <mt-cell v-for="(category,index) in categoryList" :key="index" @click.stop.native="addCategory" :title="category.name" />
      </base-scroll>
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
      categoryList: [
        {name: "蔬菜类"},
        {name: "肉类"},
        {name: "水产"},
        {name: "冻品"},
        {name: "干货"}
      ],
      dataSource: [
        {
          name: '蔬菜类',
          catagory_id: 112, 
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
      ],
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
      // dataSource: [],
      selected: null,
      topStatus: '',
      searchKey: '',
      scrollTop: 0,
      editData: {},
      catagoryIndex: 0,
      popupVisible: false,
    };
  },
  methods: {
    editItem() {
      this.$router.push({path: '/manage/dishesmanage/editItem', query: {}})
    },
    deleteItem() {

    },
    chooseHandler(index) {
      this.catagoryIndex = index
    },
    addCategory() {
      this.popupVisible = false
    },
    addHandler() {
      this.popupVisible = true
    },
    editHandler() {
      this.$router.push({path: '/menu/catagory', query: {}})
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
      return this.height - 40
    }
  },
  mounted() {
    this.$fetch('/vegetable').then(res => {
      console.log(res)
    })
  },
}

</script>
<style lang='scss' scoped>
  .menu {
    position: absolute;
    top: 40px;
    left: 0;
    width: 20%;
    box-shadow: 3px 0 5px #ccc;
    z-index: 1;
    .edit {
      background: var(--color_four) !important;
      text-align: center;
    }
    .menu_item {
      color: #fff;
      background: #999;
      &+.menu_item {
        border-top: 1px solid #d9d9d9;
      }
      &.active {
        color: #333;
        background: #fff;
      }
    }
  }
  .scroller {
    position: absolute;
    top: 40px;
    left: 20%;
  }
  .cell_wrapper {
    background: #dadada;
    padding: .3rem 0;
  }
  .cell_content {
    display: flex;
    width: 90%;
    height: 2.5rem;
    margin: 0 auto;
    background: #fff;
    border-radius: .2rem;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-top: .3rem;
    overflow: hidden;
    box-shadow: 0 3px 5px #ababab;
    &:first-child {
      margin-top: 0;
    }
    .cell_image {
      width: 40%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .cell_msg {
      width: 50%;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: flex-end;
      .cell_name {
        width: 100%;
        color: #333;
        margin-left: 1rem;
        font-size: .4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .cell_unit {
        width: 100%;
        color: #666;
        font-size: .3rem;   
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .cell_options {
        width: 1.5rem;
        font-size: .4rem;
        display: flex;
        color: #aaa;
        p {
          color: #7eafca;
        }
      }
    }
  }
  .palette {
    position: absolute;
    right: 10px;
    bottom: 60px;
    background: var(--color_main);
    .icon-popup {
      background: var(--color_main);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      color: #fff;
    }
  }
  .popup {
    width: 100%;
    height: 5rem;
    .popup_scroll {
      height: 100% !important;
    }
  }
</style>
<style>
  .menu_item .mint-cell-wrapper {
    background-image: none;
  }
</style>
