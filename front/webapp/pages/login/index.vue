<template>
  <div class="wrapper">
    <img class="headimg" src="@/assets/image/employee.png" alt="">
    <div class="login">
      <base-input type="text" placeholder="账号" mold="float" v-model="username"></base-input>
      <base-input type="password" placeholder="密码" mold="float" v-model="password"></base-input>
    </div>
    <!-- <nuxt-link to="/menu"> -->
      <mt-button @click.stop.native="login" type="primary" size="normal" class="loginBtn">登陆</mt-button>
    <!-- </nuxt-link> -->
  </div>
</template>

<script>
import { setUser } from '@/utils/auth'
import { MessageBox } from 'mint-ui';
import baseInput from '@/components/layout/baseInput'
export default {
  layout: 'login',
  data () {
    return {
      username: '',
      password: '',
    }
  },
  components: {
    baseInput
  },
  methods: {
    login() {
      this.$fetch('/user/login',{username: this.username, password: this.password}).then(res => {
        if(res.data) {
          setUser(res.data)
          this.$router.push('/menu')
        } else {
          MessageBox('提示', '登陆失败～');
        }
      })
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100%;
    background: #4a6962;
  }
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

