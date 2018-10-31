<template>
  <div>
    <mt-header :title="this.$route.query.name">
      <mt-button icon="back" slot="left" @click.stop="goback">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    goback() {
      this.$router.go(-1)
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
</style>
