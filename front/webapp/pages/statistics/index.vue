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
    <div class="charts">
      <div class="income" ref="pie"></div>
    </div>
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
let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/legend');
require('echarts/lib/component/markLine');

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
      pickerDate: "",
      myChart: {},
      data: [{
              name: new Date(2018, 10, 1) +"",
              value: [[new Date(2018, 10, 1).getFullYear(), new Date(2018, 10, 1).getMonth() + 1, new Date(2018, 10, 1).getDate()].join('/'),Math.random() * 1000 | 0]
            },
            {
              name: new Date(2018, 10, 2) + "",
              value: [[new Date(2018, 10, 2).getFullYear(), new Date(2018, 10, 2).getMonth() + 1, new Date(2018, 10, 2).getDate()].join('/'),Math.random() * 1000 | 0]
            },
            {
              name: new Date(2018, 10, 3) + "",
              value: [[new Date(2018, 10, 3).getFullYear(), new Date(2018, 10, 3).getMonth() + 1, new Date(2018, 10, 3).getDate()].join('/'),Math.random() * 1000 | 0]
            },
            {
              name: new Date(2018, 10, 4) + "",
              value: [[new Date(2018, 10, 4).getFullYear(), new Date(2018, 10, 4).getMonth() + 1, new Date(2018, 10, 4).getDate()].join('/'),Math.random() * 1000 | 0]
            },
            {
              name: new Date(2018, 10, 5) + "",
              value: [[new Date(2018, 10, 5).getFullYear(), new Date(2018, 10, 5).getMonth() + 1, new Date(2018, 10, 5).getDate()].join('/'),Math.random() * 1000 | 0]
            }],
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
    this.myChart = echarts.init(this.$refs.pie)
    this.myChart.setOption({
      title: {
          text: '收支统计'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['收入', '支出']
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        featrue: {
          saveAsImage: {}
        }
      },
      xAxis: {
          type: 'time',
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        name: '收入',
        type: 'line',
        data: this.data,
      }, {
        name: '支出',
        type: 'line',
        data: this.data,
      }]
    });
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
    .charts {
      .income {
        width: 100%;
        height: 5rem;
      }
    }
  }
</style>
