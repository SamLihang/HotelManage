<!--  author:   Date:  -->
<template>
  <div class="baseInput" :class="`baseInput_${mold}`" :style="{width: width}">
    <span class="baseInput_placeholder" :class="{active: isfocus || val}" v-if="mold === 'float'">{{placeholder}}</span>
    <input class="baseInput_input" :type="type" v-model="val" @focus="foucsHandler" @blur="blurHandler" :placeholder="mold === 'base' ? placeholder : ''">
  </div>
</template>

<script>
  export default {
    name: "baseInput",
    components: {

    },
    data () {
      return {
        val: this.value,
        isfocus: false,
      };
    },

    props: {
      value: '',
      placeholder: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      mold: { //base,  float
        type: String,
        default: 'base'
      },
      width: {
        type: String,
        default: '100%'
      }
    },
    methods: {
      foucsHandler() {
        this.isfocus = true
      },
      blurHandler() {
        this.isfocus = false
      }
    },
    computed: {

    },
    watch: {
      value: function (newVal, oldVal) {
        this.val = newVal
      },
      val: function (newVal, oldVal) {
        this.$emit('input', newVal)
      }
    },
    mounted() {

    },
  }

</script>
<style lang='scss' scoped>
  .baseInput {
    height: .8rem;
    position: relative;
    .baseInput_placeholder {
      position: absolute;
      top: 0;
      left: .2rem;
      z-index: 1;
      font-size: .4rem;
      color: #999;
      line-height: .8rem; 
      transition: all ease-in-out .2s;
      &.active {
        top: -.8rem;
        left: 0;
        color: #DDD;
        font-size: .45rem;
      }
    }
    .baseInput_input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      text-indent: .2rem;
      background: #fff;
    }
    &.baseInput_float {
      margin-top: .8rem;
    }
  }
</style>
