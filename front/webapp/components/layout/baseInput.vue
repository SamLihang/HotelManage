<!--  author:   Date:  -->
<template>
  <div class="baseInput">
    <span class="baseInput_placeholder" :class="{active: val}">{{placeholder}}</span>
    <input class="baseInput_input" :type="type" v-model="val">
  </div>
</template>

<script>
export default {
  name: "baseInput",
  components: {

  },
  data () {
    return {
      val: this.value
    };
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: ''
  },
  methods: {

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
    width: 100%;
    height: .8rem;
    margin-top: .8rem;
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
        color: #666;
        font-size: .45rem;
      }
    }
    .baseInput_input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 4px;
      text-indent: .2rem;
    }
  }
</style>