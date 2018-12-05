<!--  author:   Date:  -->
<template>
  <div class="statistics">
    <div class="statistics_header">
      <div class="statistics_header_start" @click="openPicker(0)">
        <p>{{formatDate(pickerValue)}}</p>
      </div>
      <div class="statistics_header_end" @click="openPicker(1)">
        <p>{{formatDate(pickerValue)}}</p>
      </div>
    </div>
    <bottom-buttons>
      <button>添加今日营业额</button>
    </bottom-buttons>
    <base-footer />
    <mt-datetime-picker
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      v-model="pickerValue">
    </mt-datetime-picker>
  </div>
</template>

<script>
import bottomButtons from '@/components/layout/bottomButtons'
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
    bottomButtons,
    // baseScroll,
  },
  data () {
    return {
      pickerValue: new Date(),
      pickerDate: ""
    };
  },
  methods: {
    openPicker() {
      this.$refs.picker.open();
    },
    formatDate(time) {
      let year = new Date(time).getFullYear()
      let month = new Date(time).getMonth()
      let day = new Date(time).getDay()
      return `${year}-${month+1}-${day}`
    }
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
  .statistics {
    .statistics_header {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 1.5rem;
      background: #6194bb;
      .statistics_header_start, .statistics_header_end {
        width: 50%;
        height: 100%;
        color: #fff;
        display: flex;
        font-size: .4rem;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
      }
      .statistics_header_start {
        border-right: 1px solid #ddd;
      }
    }
  }
</style>
