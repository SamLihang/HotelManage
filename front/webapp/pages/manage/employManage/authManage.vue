<!--  author:   Date:  -->
<template>
  <div>
    <mt-header fixed title="权限管理">
      <mt-button @click.native.stop="$router.go(-1)" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="content">
      <mt-checklist
        align="right"
        v-model="value"
        :options="['菜单', '统计', '管理']">
      </mt-checklist>
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
      value: []
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
