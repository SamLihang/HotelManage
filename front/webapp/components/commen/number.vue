<!--  author:   Date:  -->
<template>
  <div class="number">
    <button class="add"><img src="@/assets/icon/sub.svg" alt=""></button>
    <input class="number_inp" type="number" v-model="val">
    <button class="sub"><img src="@/assets/icon/add.svg" alt=""></button>
  </div>
</template>

<script>
export default {
  name: "number",
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
  .number {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    .add, .sub {
      width: .7rem;
      height: .7rem;
      border: 1px solid;
      margin: .2rem;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .number_inp {
      width: 1rem;
      height: .5rem;
      border: 1px solid;
      text-align: center;
    }
  }
</style>