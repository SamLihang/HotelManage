<!--  author:   Date:  -->
<template>
  <div>
    <mt-header fixed title="菜品管理">
      <mt-button @click.native.stop="$router.go(-1)" icon="back" slot="left">返回</mt-button>
    </mt-header>
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

</style>
