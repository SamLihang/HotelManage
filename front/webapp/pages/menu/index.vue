<!--  author:   Date:  -->
<template>
  <div>
    <mt-search v-model="searchKey" class="searchbar"></mt-search>
    <div class="menu">
      <base-scroll :height="scrollHeight - 100">
        <mt-cell class="menu_item" @click.native="chooseHandler(index)" :class="{active: index===categoryIndex}" :title="menu.category_name" v-for="(menu,index) in categoryList" :key="index"></mt-cell>
      </base-scroll>
      <mt-cell title="新增" class="menu_item edit" @click.native="addHandler"></mt-cell>
      <mt-cell title="修改" class="menu_item edit" @click.native="editHandler"></mt-cell>
    </div>
    <base-scroll class="scroller" width="80%" :height="scrollHeight" :startScroll="scrollTop" @loadTop="loadTop" @loadBottom="loadBottom" ref="scroll">
      <div class="cell_wrapper" v-if="dataSource[0]">
        <div class="cell_content" v-for="(item,index) in categoryItem" :key="index">
          <div class="cell_image"><img src="@/assets/image/green.jpg"></div>
          <div class="cell_msg">
            <h5 class="cell_name">菜名：{{item.vegetable_name}}</h5>
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
        <mt-cell v-for="(category,index) in categoryList" :key="index" @click.stop.native="addCategory" :title="category.category_name" />
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
        category_id: 5,
        categoryItem: [
          {vegetable_id: 103, vegetable_name: "香菇", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 104, vegetable_name: "白玉菇", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 105, vegetable_name: "海鲜菇", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 106, vegetable_name: "白蘑菇", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 107, vegetable_name: "上海青", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 108, vegetable_name: "广东菜心", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 109, vegetable_name: "黄豆芽", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 110, vegetable_name: "腐竹", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 111, vegetable_name: "鲜茶树菇", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 112, vegetable_name: "干茶树菇", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 113, vegetable_name: "香干", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 114, vegetable_name: "千张", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 115, vegetable_name: "盒豆腐", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 116, vegetable_name: "茶干", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 117, vegetable_name: "榨菜", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 118, vegetable_name: "韭黄", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 119, vegetable_name: "韭菜", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 120, vegetable_name: "韭菜花", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 121, vegetable_name: "藕", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 122, vegetable_name: "小葱", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 123, vegetable_name: "青大蒜", unit: "斤", user_id: 0, category_id: 5, category_name: "蔬菜类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
        ]
        },
        {
        category_name: '肉类',
        category_id: 1,
        categoryItem: [
          {vegetable_id: 1, vegetable_name: "五花肉", unit: "斤", user_id: 0, category_id: 1, category_name: "肉类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 2, vegetable_name: "五花肉丝", unit: "斤", user_id: 0, category_id: 1, category_name: "肉类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 3, vegetable_name: "全精肉", unit: "斤", user_id: 0, category_id: 1, category_name: "肉类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 6, vegetable_name: "肉末", unit: "斤", user_id: 0, category_id: 1, category_name: "肉类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 7, vegetable_name: "猪肝", unit: "斤", user_id: 0, category_id: 1, category_name: "肉类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 8, vegetable_name: "猪脚", unit: "斤", user_id: 0, category_id: 1, category_name: "肉类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 9, vegetable_name: "猪肚", unit: "斤", user_id: 0, category_id: 1, category_name: "肉类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 10, vegetable_name: "猪腰", unit: "斤", user_id: 0, category_id: 1, category_name: "肉类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 11, vegetable_name: "猪大肠", unit: "斤", user_id: 0, category_id: 1, category_name: "肉类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
          {vegetable_id: 12, vegetable_name: "腊肉", unit: "斤", user_id: 0, category_id: 1, category_name: "肉类", CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", num: 1, remark: ""},
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
      categoryIndex: 0,
      popupVisible: false,
      categoryList: [
        // {category_name: "蔬菜类"},
        // {category_name: "肉类"},
        // {category_name: "水产"},
        // {category_name: "冻品"},
        // {category_name: "干货"}
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
      this.categoryIndex = index
    },
    editHandler() {
      this.$router.push({path: 'menu/category', query: this.categoryList[this.categoryIndex]})
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
      // this.$fetch('/menus').then(res => {
      //   this.dataSource = JSON.parse(res.data.menu)
      //   this.$store.commit('setMenu', res.data.menu)
      // })
      this.$fetch('/category').then(res => {
        this.categoryList = res.data
      })
    }
  },
  computed: {
    ...mapState({
      height: store => {return store.height}
    }),
    categoryItem() {
      if(!this.categoryList.length) return []
      let _categoryId = this.categoryList[this.categoryIndex].category_id
      let _categoryItemList = this.dataSource.filter(e => {
        return e.category_id === _categoryId
        })[0]
      return _categoryItemList ? _categoryItemList.categoryItem : []
    },
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
    padding-bottom: 1.5rem;
    top: 44px;
    left: 20%;
    background: #dadada !important;
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
