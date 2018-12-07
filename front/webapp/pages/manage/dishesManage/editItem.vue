<!--  author:   Date:  -->
<template>
  <div>
    <mt-header fixed title="修改">
      <mt-button @click.native.stop="$router.go(-1)" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="content" :style="{height: `${height - 40}px`}">
      <div class="content_row">
        <p>菜名：</p>
        <base-input type="text" v-modle="vegetableName" width="3rem"/>
      </div>
      <div class="content_row">
        <p>单位：</p>
        <base-input type="text" v-modle="vegetableName" width="1rem"/>
      </div>
      <div class="content_row">
        <p>备注：</p>
        <base-input type="text" v-modle="vegetableName" width="5rem"/>
      </div>
    </div>
    <mt-button size="large" type="primary" @click.native="save" class="saveBtn">保存</mt-button>
  </div>
</template>

<script>
import baseInput from '@/components/layout/baseInput'
import { mapState } from 'vuex';
export default {
  name: "",
  asyncData ({ parmas }) {
    return { 
    }
  },
  components: {
    baseInput
  },
  data () {
    return {
      value: [],
      vegetableName: "",
    };
  },
  methods: {
    save() {

    }
  },
  computed: {
    ...mapState({
      height: store => {return store.height}
    }),
  },
  mounted() {
    
  },
}

</script>
<style lang="scss" scoped>
  .content {
    padding-top: 40px;
    .content_row {
      display: flex;
      margin-left: 2rem;
      margin-bottom: .5rem;  
      height: .8rem;
      line-height: .8rem;
      font-size: .4rem;
      &.content_row {
        margin-top: .5rem;
      }
    }
  }
  .saveBtn {
    height: 40px;
  }
</style>
