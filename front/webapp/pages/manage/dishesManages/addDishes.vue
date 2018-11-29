<template>
  <div>
    <mt-header title="蔬菜类" class="head">
      <mt-button icon="back" slot="left" @click.stop="goback">返回</mt-button>
      <mt-button slot="right" @click.native="save">保存</mt-button>
    </mt-header>
    <main>
      <div class="input-box">
        <div class="lable">菜名：</div>
        <base-input v-model="fruitName" width="50%"></base-input>
      </div>
      <div class="input-box">
        <div class="lable">规格：</div>
        <base-input v-model="size" type="number" width="50%"></base-input>
      </div>
      <div class="input-box">
        <div class="lable">备注：</div>
        <base-input v-model="tips" width="50%"></base-input>
      </div>
      <div>
        <div class="imgBox"><img v-bind:src="imgPath" alt=""></div>
        <upload-img @refDom="refDom" @fileChange="getImg" ></upload-img>
      </div>
    </main>
  </div>
</template>

<script>
  import BaseInput from '@/components/layout/baseInput'
  import UploadImg from '@/components/commen/uploadImg'
  
    export default {
      name: "businessIncome",
      data(){
        return {
          fruitName:'',
          size:'',
          tips:'',
          imgPath:''
        }
      },  
      components:{
          BaseInput,
          UploadImg
      },
      computed: {
        goback() {
          this.$router.go(-1)
        },
        save() {
          this.goback()
        }
      },
      methods: {
        refDom() {
          console.log(1)
        },
        getImg(value) {
            console.log(value.base64);
            this.imgPath = value.base64;
            // console.log(value.file);
            // console.log(value.files);

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
