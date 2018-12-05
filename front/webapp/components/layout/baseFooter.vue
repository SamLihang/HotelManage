<!--  author:   Date:  -->
<template>
  <mt-tabbar v-model="selected" class="footer">
    <mt-tab-item id="menu">
      <img slot="icon" src="@/assets/image/boss.png">
      菜单
    </mt-tab-item>
    <mt-tab-item id="statistics">
      <img slot="icon" src="@/assets/image/boss.png">
      统计
    </mt-tab-item>
    <mt-tab-item id="manage">
      <img slot="icon" src="@/assets/image/boss.png">
      管理
    </mt-tab-item>
    <mt-tab-item id="mine">
      <img slot="icon" src="@/assets/image/boss.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: "baseFooter",
  components: {
  },
  data () {
    return {
      selected: this.$route.name,
    };
  },
  methods: {
  },
  computed: {
  },
  watch: {
    selected(newVal, oldVal) {
      this.$router.push(`/${newVal}`)
    }
  },
  mounted() {
  },
}

</script>
<style lang='scss' scoped>
  .footer {
    z-index: 99
  }
</style>
