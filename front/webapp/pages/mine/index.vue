<!--  author:   Date:  -->
<template>
  <div>
    <div class="mine_header">
      <div class="headImg">
        <img src="@/assets/image/boss.png" alt="">
      </div>
      <p class="userName">Boss</p>
    </div>
    <div class="mine_body">
      <mt-cell
        title="我要反馈"
        is-link
      ></mt-cell>
    </div>
    <base-footer />
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
  .mine_header {
    width: 100%;
    height: 6rem;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background: #6194bb;
    .headImg {
      width: 3rem;
      height: 3rem;
      border: 3px solid #d9d9d9;
      border-radius: 50%;
      background: #ddd;
      img {
        width: 100%;
      }
    }
    .userName {
      font-size: .5rem;
      margin-top: .1rem;
    }
  }
</style>
