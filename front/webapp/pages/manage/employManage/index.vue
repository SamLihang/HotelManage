<!--  author:   Date:  -->
<template>
  <div>
    <mt-header fixed title="员工管理">
      <mt-button @click.native.stop="$router.go(-1)" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="content">
      <mt-cell
        title="张三"
        to="/manage/employmanage/authmanage"
        is-link
        value="修改权限">
      </mt-cell>
      <mt-cell
        title="李四"
        to="/manage/employmanage/authmanage"
        is-link
        value="修改权限">
      </mt-cell>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "",
  asyncData ({ parmas }) {
    return { 
    }
  },
  components: {
  },
  data () {
    return {
    };
  },
  methods: {
  },
  computed: {
    ...mapState({
      height: store => {return store.height}
    }),
  },
  mounted() {
  },
}

</script>
<style lang="scss" scoped>
  .content {
    margin-top: 40px;
  }
</style>
