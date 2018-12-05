<!--  author:   Date:  -->
<template>
  <div class="number">
    <button class="add" @click.stop="subCount"><img src="@/assets/icon/sub.svg" alt=""></button>
    <input class="number_inp" type="number" v-model="val">
    <button class="sub" @click.stop="addCount"><img src="@/assets/icon/add.svg" alt=""></button>
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
    value: '',
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Number.MAX_VALUE
    }
  },
  methods: {
    addCount() {
      this.val++
    },
    subCount() {
      this.val--
    }
  },
  computed: {

  },
  watch: {
    value: function (newVal, oldVal) {
      this.val = newVal
    },
    val: function (newVal, oldVal) {
      if(newVal < this.min || newVal > this.max) {
        this.val = oldVal
      } else {
        this.$emit('input', newVal)
      }
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
      border: 1px solid #d9d9d9;
      margin: .2rem;
      border-radius: 50%;
      background: #ccc;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .number_inp {
      width: 1rem;
      height: .5rem;
      border: 1px solid #d9d9d9;
      text-align: center;
    }
  }
</style>