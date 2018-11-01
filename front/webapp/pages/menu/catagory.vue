<template>
  <div>
    <mt-header :title="this.$route.query.name" class="head">
      <mt-button icon="back" slot="left" @click.stop="goback">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <base-scroll :height="scrollHeight" class="scroller" @loadTop="loadTop" @loadBottom="loadBottom" ref="scroll">
        <!-- <div v-for="(item,index) in dataSource.catagoryItem" :key="index"> -->
          <mt-checklist
            align="right"
            v-model="data"
            :options="dataSource.catagoryItem">
          </mt-checklist>
          <!-- <mt-cell :title="item.name" >1212</mt-cell> -->
        <!-- </div> -->
    </base-scroll>
    <mt-button size="large" type="primary" @click.native="save" class="saveBtn">保存</mt-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import baseScroll from '@/components/layout/baseScroll'
export default {
   asyncData ({ parmas }) {
    return { 
      dataSource: {
        name: '蔬菜类',
        catagoryItem: ['青菜1', '青菜2', '青菜3', '青菜4', '青菜5', '青菜6', '青菜7', '青菜8']
      }
    }
  },
  data () {
    return {
      data: []
    }
  },
  components: {
    baseScroll
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
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
    save() {
      this.goback()
    }
  },
  computed: {
    ...mapState({
      height: store => {return store.height}
    }),
    scrollHeight() {
      return this.height - 40 - 41
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .scroller{

  }
  .saveBtn {

  }
</style>
