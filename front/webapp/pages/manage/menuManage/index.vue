<!--  author:   Date:  -->
<template>
  <div class="menu_manage">
    <mt-header fixed title="模版管理">
      <mt-button @click.native.stop="$router.go(-1)" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="content">
      <mt-cell v-for="(item, index) in dataSource" @click.stop.native="clickHandler" :key="index" :title="item.name"></mt-cell>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
  },
  data () {
    return {
    };
  },
  methods: {
    clickHandler() {
      this.$router.push('/manage/menuManage/moduleedit')
    }
  },
  computed: {
    ...mapState({
      height: store => {return store.height}
    }),
  },
  mounted() {
    // this.$request('/template').then(res => {

    // })
  },
}

</script>
<style lang="scss" scoped>
  .menu_manage {
    .content {
      padding-top: 40px;
    }
  }
</style>
