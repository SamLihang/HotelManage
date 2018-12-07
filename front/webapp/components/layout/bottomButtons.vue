<!--  author:   Date:  -->
<template>
  <div class="bottom_buttons">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "baseFooter",
  components: {
  },
  data () {
    return {

    };
  },
  methods: {
  },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
}
</script>

<style lang='scss' scoped>
  .bottom_buttons {
    position: absolute;
    width: 100%;
    height: 1rem;
    background: #fff;
    border: 1px solid #ddd;
    bottom: 55px;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  }
</style>
