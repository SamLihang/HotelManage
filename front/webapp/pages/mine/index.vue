<!--  author:   Date:  -->
<template>
  <div>
    <base-footer />
  </div>
</template>

<script>
import baseFooter from '@/components/layout/baseFooter'
// import baseScroll from '@/components/layout/baseScroll'
import { mapState } from 'vuex';
export default {
  name: "",
  asyncData ({ parmas }) {
    return { 
    }
  },
  components: {
    baseFooter,
    // baseScroll,
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
