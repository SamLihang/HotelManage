<template>
  <div>
    <mt-header title="蔬菜类" class="head">
      <mt-button icon="back" slot="left" @click.stop="goback">返回</mt-button>
      <mt-button slot="right" @click.native="save">保存</mt-button>
    </mt-header>
    <main>
      <div class="input-box">
        <div class="lable">菜名：</div>
        <base-input v-model="dish.fruitName" width="50%"></base-input>
      </div>
      <div class="input-box">
        <div class="lable">规格：</div>
        <base-input v-model="dish.size" type="number" width="50%"></base-input>
      </div>
      <div class="input-box">
        <div class="lable">备注：</div>
        <base-input v-model="dish.tips" width="50%"></base-input>
      </div>
      <div class="input-box up-box">
        <div class="lable">上传图片：</div>
        <div class="imgBox">
          <img :src="dish.imgPath" alt="">
          <img class="delete" @click="removeImg" src="@/assets/icon/delete.png" v-show="!IsUpload" alt="">
          <upload-img v-show="IsUpload"  @fileChange="getImg"></upload-img>
        </div>
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
          dish:{
            fruitName:'',
            size:'',
            tips:'',
            imgPath:'',
          },
          IsUpload:true

        }
      },  
      components:{ BaseInput,UploadImg },
      computed: {
        goback() {
          this.$router.go(-1)
        },
      },
      methods: {
        
        getImg(value) {
            this.dish.imgPath = value.base64;
            this.IsUpload = false;
        },
        removeImg(){
          this.dish.imgPath = '';
            this.IsUpload = true;
        },
        save() {
          console.table(this.dish)
          // this.goback()
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
