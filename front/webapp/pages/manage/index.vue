<!--  author:   Date:  -->
<template>
  <div>
    <mt-cell title="菜品管理" is-link to="/manage/dishesmanage">
      <!-- <span>icon 是图片</span> -->
      <img slot="icon" src="@/assets/image/boss.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="模版管理" is-link to="/manage/menuManage">
      <!-- <span>icon 是图片</span> -->
      <img slot="icon" src="@/assets/image/boss.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="员工管理" is-link to="/manage/employmanage">
      <!-- <span>icon 是图片</span> -->
      <img slot="icon" src="@/assets/image/boss.png" width="24" height="24">
    </mt-cell>
    <base-footer fixed/>
  </div>
</template>

<script>
import baseFooter from '@/components/layout/baseFooter'
import { mapState } from 'vuex';
export default {
  name: "",
  asyncData ({ parmas }) {
    return { 
    }
  },
  components: {
    baseFooter,
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
