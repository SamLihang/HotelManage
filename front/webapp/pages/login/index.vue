<template>
  <div>
    <img class="headimg" src="@/assets/image/employee.png" alt="">
    <div class="login">
      <base-input type="text" placeholder="账号" v-model="account"></base-input>
      <base-input type="text" placeholder="密码" v-model="password"></base-input>
    </div>
    <nuxt-link to="/menu">
      <mt-button type="primary" size="normal" class="loginBtn">登陆</mt-button>
    </nuxt-link>
  </div>
</template>

<script>
import baseInput from '@/components/layout/baseInput'
export default {
  layout: 'login',
  data () {
    return {
      account: '',
      password: '',
    }
  },
  components: {
    baseInput
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .headimg {
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    top: 0;
    left: 50%;
    margin-top: 2rem;
    transform: translateX(-50%);
  }
  .login {
    position: relative;
    width: 60%;
    padding: .5rem;
    margin-top: 1rem;
    background: rgba($color: #000000, $alpha: 0.2);
    margin-left: 20%;
  }
  .loginBtn {
    position: relative;
    width: 60%;
    margin-left: 20%;
    margin-top: .5rem;
  }
</style>
