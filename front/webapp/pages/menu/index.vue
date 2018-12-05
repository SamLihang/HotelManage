<!--  author:   Date:  -->
<template>
  <div>
    <mt-search v-model="searchKey" class="searchbar"></mt-search>
    <div class="menu">
      <base-scroll :height="scrollHeight - 100">
        <mt-cell class="menu_item" @click.native="chooseHandler(index)" :class="{active: index===catagoryIndex}" :title="menu.category_name" v-for="(menu,index) in dataSource" :key="index"></mt-cell>
      </base-scroll>
      <mt-cell title="新增" class="menu_item edit" @click.native="addHandler"></mt-cell>
      <mt-cell title="修改" class="menu_item edit" @click.native="editHandler"></mt-cell>
    </div>
    <base-scroll class="scroller" width="80%" :height="scrollHeight" :startScroll="scrollTop" @loadTop="loadTop" @loadBottom="loadBottom" ref="scroll">
      <div class="cell_wrapper" v-if="dataSource[0]">
        <div class="cell_content" v-for="(item,index) in dataSource[catagoryIndex].categoryItem" :key="index">
          <div class="cell_image"><img src="@/assets/image/green.jpg"></div>
          <div class="cell_msg">
            <h5 class="cell_name">菜名：{{item.name}}</h5>
            <p class="cell_unit">单位: {{item.unit}}</p>
            <number v-model="item.num"></number>
          </div>
        </div>
      </div>
    </base-scroll>
    <base-footer />
    <mt-palette-button content="+" @expanded="expandedHandler" @collapse="collapseHandler"
      direction="lt" class="palette" :radius="80" ref="palette" mainButtonStyle="color:#fff;background-color:var(--color_main);"
    >
      <div class="my-icon-button indexicon icon-popup" @click.stop="resetHandler">重制</div>
      <div class="my-icon-button indexicon icon-popup" @click.stop="templateHandler">模版</div>
      <div class="my-icon-button indexicon icon-popup" @click.stop='saveHandler'>保存</div>
      <div class="my-icon-button indexicon icon-popup" @click.stop="exportHandler">导出</div>
    </mt-palette-button>
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
      dataSource: [
        {
        category_name: '蔬菜类',
        category_id: 2,
        categoryItem: [
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
            { name: '青菜', unit: "斤", num: 1, remark: "sssafdfa" },
        ]
        },
        {
        category_name: '肉类',
        category_id: 3,
        categoryItem: [
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
            { name: '猪肉' , unit: "斤", num: 1, remark: "adfasdfafa"},
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
      selected: null,
      topStatus: '',
      searchKey: '',
      scrollTop: 0,
      editData: {},
      catagoryIndex: 0,
      popupVisible: false,
      categoryList: [
        {name: "蔬菜类"},
        {name: "肉类"},
        {name: "水产"},
        {name: "冻品"},
        {name: "干货"}
      ],
    };
  },
  methods: {
    saveHandler() {
      let menu = JSON.stringify(this.dataSource)
      this.$fetch('/menus', {menu: menu}, 'post').then(res => {
        console.log(res)
      })
      this.$refs.palette.collapse()
    },
    addHandler() {
      this.popupVisible = true;
    },
    addCategory() {
      this.popupVisible = false;
      this.$fetch('/category', {category_name: '水产'}, 'post').then(res => {
        console.log(res)
      })
    },
    resetHandler() {
      this.initdata()
    },
    templateHandler() {
      this.$router.push({path: '/manage/menuManage'})
    },
    exportHandler() {
      this.$router.push('/saveimg')
    },
    expandedHandler() {
      window.document.addEventListener('touchstart', this.collapse, false)
    },
    collapseHandler() {
      window.document.removeEventListener('touchstart', this.collapse, false)
    },
    collapse() {
      this.$refs.palette.collapse()
    },
    chooseHandler(index) {
      this.catagoryIndex = index
    },
    editHandler() {
      this.$router.push({path: 'menu/catagory', query: {name: this.dataSource[this.catagoryIndex].name || ""}})
    },
    loadTop() {
      setTimeout(() => {
        this.$refs.scroll.topLoaded()
      }, 1000)
    },
    loadBottom() {
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
    initdata() {
      this.$fetch('/menus').then(res => {
        this.$store.commit('setMenu', this.dataSource)
        // this.dataSource = JSON.parse(res.data.menu)
      })
      this.$fetch('/category').then(res => {
        console.log(res)
      })
    }
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
    this.initdata()
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
  .menu {
    position: absolute;
    top: 44px;
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
    top: 44px;
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
      .cell_number {
        width: 2rem;
        font-size: .4rem;
      }
    }
  }
  .palette {
    position: absolute;
    right: 10px;
    bottom: 60px;
    font-size: .4rem;
    background: var(--color_main);
    .icon-popup {
      font-size: .3rem;
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
  .mint-searchbar {
    background-color: var(--color_main)
  }
  .mint-searchbar-core {
    text-indent: .1rem;
  }
  .menu_item .mint-cell-wrapper {
    background-image: none;
  }
</style>
