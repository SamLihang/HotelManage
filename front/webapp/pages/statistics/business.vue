<template>
  <div>
    <mt-header title="今日营业额" class="head">
      <mt-button icon="back" slot="left" @click.stop="goback">返回</mt-button>
      <mt-button slot="right" @click.native="save">保存</mt-button>
    </mt-header>
    <main>
      <div class="input-box">
        <div class="lable">采购额：</div>
        <base-input v-model="purchase" width="50%"></base-input>
      </div>
      <div class="input-box">
        <div class="lable">营业额：</div>
        <base-input v-model="income" width="50%"></base-input>
      </div>
    </main>
  
  </div>
</template>

<script>
  import BaseInput from '@/components/layout/baseInput'
    export default {
      name: "businessIncome",
      data(){
        return {
          purchase:'',
          income:''
        }
      },
      components:{
          BaseInput
      },
      computed: {
        // goback() {
        //   this.$router.go(-1)
        // },
        save() {
          console.log(this.purchase);
          // this.goback();
        }
      }
    }
</script>

<style lang="scss" scoped>
main{
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
}

</style>
