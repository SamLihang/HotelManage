<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
  export default {
    methods: {
      setHeight() {
        this.$store.commit('setHeight', document.body.clientHeight)
      }
    },
    mounted() {
      this.setHeight()
      window.addEventListener('resize', this.setHeight, false)
    },
  }
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  height: 100%; 
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  height: 100%;
  background: #4a6962;
}
</style>
