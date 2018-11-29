<template>
  <div>
    <mt-header title="蔬菜类" class="head">
      <mt-button icon="back" slot="left" @click.stop="goback">返回</mt-button>
      <mt-button slot="right" @click.native="save">保存</mt-button>
    </mt-header>
    <main>
      <div class="input-box">
        <div class="lable">菜名：</div>
        <base-input input-width="50%"></base-input>
      </div>
      <div class="input-box">
        <div class="lable">规格：</div>
        <base-input input-width="50%"></base-input>
      </div>
      <div class="input-box">
        <div class="lable">备注：</div>
        <base-input input-width="50%"></base-input>
      </div>
    </main>
  </div>
</template>

<script>
  import BaseInput from '@/components/layout/baseInput'
    export default {
        name: "businessIncome",
      components:{
          BaseInput
      },
      computed: {
        goback() {
          this.$router.go(-1)
        },
        save() {
          this.goback()
        }
      }
    }
</script>

<style lang="scss" scoped>
.input-box{
  display: flex;
  flex-direction: row;
  justify-content:center;
  margin-top: 1rem;
  line-height: 0.8rem;
  .lable{
    font-size: .4rem;
  }
} 
</style>
