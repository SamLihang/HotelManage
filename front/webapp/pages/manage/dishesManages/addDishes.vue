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
      <div class="input-box up-box">
        <div class="lable">上传图片：</div>
        <div class="imgBox">
          <img :src="imgPath" alt="">
          <img class="delete" @click="removeImg" src="@/assets/icon/delete.png" v-show="!IsUpload" alt="">
        </div>
        <upload-img v-show="IsUpload"  @fileChange="getImg" ></upload-img>
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
          imgPath:'',
          IsUpload:true

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
        getImg(value) {
          console.log(value.base64)
            this.imgPath = value.base64;
            this.IsUpload = false;
        },
        removeImg(){
          this.imgPath = '';
            this.IsUpload = true;
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
    width: 20%;
    text-align: right;
  }
}
.up-box{
  position: relative;
  .imgBox{
    width: 50%;
    min-height: 4rem;
    background: url('../../../assets/icon/add.png') no-repeat;
    background-size: contain;
    background-position: center;
    position: relative;
    // height: 3rem;
    img:first-of-type{
      width: 100%;
      height: 100%;
    }
    .delete{
      position: absolute;
      right: 0;
      top:0;
    }
  }
} 
</style>
