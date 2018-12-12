<!--  author:   Date:  -->
<template>
  <div class="menu_manage">
    <mt-header fixed title="模版管理">
      <mt-button @click.native.stop="$router.go(-1)" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <base-scroll :height="scrollHeight" class="scroller" @loadTop="loadTop" @loadBottom="loadBottom" ref="scroll">
      <div class="content">
        <mt-cell v-for="(item, index) in dataSource" @click.stop.native="clickHandler" :key="index" :title="item.name"></mt-cell>
      </div>
    </base-scroll>
    <mt-button size="large" type="primary" @click.native="addHandler" class="addBtn">新增</mt-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import baseScroll from '@/components/layout/baseScroll';
import { MessageBox } from 'mint-ui';
export default {
  name: "",
  asyncData ({ parmas }) {
    return {
      dataSource: [
        {name: '模版一'},
        {name: '模版二'},
        {name: '模版三'},
      ] 
    }
  },
  components: {
    baseScroll
  },
  data () {
    return {
    };
  },
  methods: {
    loadTop() {
      setTimeout(() => {
        this.$refs.scroll.topLoaded()
      }, 1000);
    },
    loadBottom() {
      setTimeout(() => {
        this.$refs.scroll.bottomLoaded()
      }, 1000);
    },
    clickHandler() {
      this.$router.push('/manage/menuManage/moduleedit')
    },
    addHandler() {
      MessageBox.prompt('请输入模版名称').then(({ value }) => {
        if(value) {
          this.$fetch('/template', {Userid: , TemplateName: , Template}, 'post').then(res => {
            console.log(res)
          })
        }
      });
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
    this.$fetch('/template').then(res => {
      this.dataSource = res.data
    })
  },
}

</script>
<style lang="scss" scoped>
  .menu_manage {
    .scroller {
      padding-top: 40px;
    }
    .addBtn {

    }
  }
</style>
