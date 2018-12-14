<template>
  <div>
    <mt-header :title="this.$route.query.category_name || ''" class="head">
      <mt-button icon="back" slot="left" @click.stop="goback">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <base-scroll :height="scrollHeight" class="scroller" @loadTop="loadTop" @loadBottom="loadBottom" ref="scroll">
        <!-- <div v-for="(item,index) in dataSource.catagoryItem" :key="index"> -->
          <mt-checklist
            align="right"
            v-model="data"
            :options="dataSource">
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
  async asyncData ({ app }) {
      // dataSource: {
      //   name: '蔬菜类',
      //   catagoryItem: ['青菜1', '青菜2', '青菜3', '青菜4', '青菜5', '青菜6', '青菜7', '青菜8']
      // }
  },
  data () {
    return {
      dataSource: [
        // name: '蔬菜类',
        // catagoryItem: ['青菜1', '青菜2', '青菜3', '青菜4', '青菜5', '青菜6', '青菜7', '青菜8']
      ],
      data: [],
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
    },
    getVegetables() {
      let query = this.$route.query
      let vegetList = []
      if(query && query.category_id) {
        this.$fetch(`/vegetable`).then(res => {
          if(res.data.length) {
            res.data.every(e => {
              if(e.category_id == 0) {
                e.label = e.vegetable_name
                vegetList.push(e)
              }
              return true
            })
            this.dataSource = vegetList
          }
        })       
      }
    }
  },
  computed: {
    ...mapState({
      height: store => {return store.height},
      menu: store => {return JSON.parse(store.menu)}
    }),
    scrollHeight() {
      return this.height - 40 - 41
    }
  },
  mounted() {
    this.getVegetables()
    this.$store.commit('getMenu')
    this.$nextTick(() => {
      this.menu.some(e => {
        if(e.category_id == this.$route.query.category_id) {
          let _data = []
          e.categoryItem.forEach(element => {
            element.categoryItem = element.vegetable_name
            _data.push(element)
          });
          this.data = _data
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .scroller{

  }
  .saveBtn {

  }
</style>
