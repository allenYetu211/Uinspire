<style lang="scss" scoped>
.login{
  padding:50px;
  .input-infor{
    margin: 0 0 40px 0;
    position:relative;
    span{
      position:absolute;
      top:15px;
      font-size:16px;
      color:#aaa;
      transition: transform 0.3s, color 0.3s;
      &.open{
        transform: scale(0.8) translate(-10%,-180%);
        color: #222;
      }
    }
    input{
      width:100%;
      line-height:35px;
      border:none;
      border-bottom:2px solid #CDCDCD;
      &.usererror{
        border-color:#D0011B;
      }
    }
  }
  .login-button{
    text-align:center;
      button{
        font-size:20px;
        margin:0 auto;
        padding:15px 45px;
        background-color:#FFFA00;
        border:none;
        border-radius:3px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.15);
      }
  }
  .error{
    padding: 5px 0;
    color:#D0011B;
    height:0;
    line-height:35px;
    overflow: hidden;
    transition: height 0.5s;
    &.usererror{
      height:35px;
    }
  }
}
</style>

<template>
  <div class="login col-xs-12 col-sm-4 col-sm-offset-4">
    <form>
      <div class="input-infor">
        <input :class="{usererror: verify}" @focus="_focus" data-infor="name" @blur="_blur"  type="username" name="">
        <p class="error" :class="{usererror: verify}">Email Error</p>
        <span class="span-informations"  :class="{open: focuesName}">E-mail</span>
      </div>

      <div class="input-infor">
        <input @focus="_focus" @blur="_blur" data-infor="word" type="Password" name="">
        <span :class="{open: focuesPass}">Password</span>
      </div>
      
      <div class="login-button">
        <button>LOG IN</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    _focus (el) {
      if (el.target.dataset.infor === 'name') {
        this.focuesName = true
      } else {
        this.focuesPass = true
      }
    },
    _blur (el) {
      if (el.target.dataset.infor === 'name') {
        if (el.target.value !== '') { return }
        this.focuesName = false
      } else {
        if (el.target.value !== '') { return }
        this.focuesPass = false
      }
    }
  },
  data () {
    return {
      focuesName: false,
      focuesPass: false,
      verify: false
    }
  }
}
</script>