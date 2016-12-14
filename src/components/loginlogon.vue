<template>
    <div class="startlogin">
      <div class="import-email gl-bgcolor-white" :class="{'logon': getreturncode, 'login': loginPopup}">
        <transition name="loginlogon" tag="div">
          <div v-if='!returnimportemail'>
            <h2 class="gl-fb">Join <span class="gl-ftcolor-theme">UI</span>nspire.io</h2>
            <p class="gl-ftcolor-gray gl-fn">Input your E-mail, It’s will auto validation your account.</p>
            <input 
            class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn" 
            placeholder="E-mail" 
            type="email" 
            v-model="loginlogonEmail"
            name="">
            <div class="login-registered">
              <button 
              @click="_loginLogon" 
              class="gl-bgcolor-black gl-ftcolor-white  gl-fb" >ENTER</button>
            </div>
          </div>
        </transition>

         <transition name="loginlogon" tag="div">
          <div v-if="registereduser">
            <div class="logon-information">
              <h2 class="gl-fb">Hello, <span class="gl-ftcolor-theme">Designer</span></h2>
              <p class="gl-ftcolor-gray gl-fn">Pleasa type your infomation to finish register.</p>
              <div class="VerificationCode clearfix">
                  <input  v-model="registered"  type="text" name="" maxlength = '6'>
                  <span  class="gl-bgcolor-gray-ed gl-fb"> {{registered[0]}}</span>
                  <span  class="gl-bgcolor-gray-ed gl-fb"> {{registered[1]}}</span>
                  <span  class="gl-bgcolor-gray-ed gl-fb"> {{registered[2]}}</span>
                  <span  class="gl-bgcolor-gray-ed gl-fb"> {{registered[3]}}</span>
                  <span  class="gl-bgcolor-gray-ed gl-fb"> {{registered[4]}}</span>
                  <span  class="gl-bgcolor-gray-ed gl-fb"> {{registered[5]}}</span>
              </div>
              <div class="login-registered">
                <button 
                @click="_verifynext"
                class="gl-bgcolor-black gl-ftcolor-white gl-fb" >ENTER</button>
                <button 
                class="gl-bgcolor-gray gl-ftcolor-white gl-fb" >RESENT</button>
              </div>
            </div>
          </div>

        </transition>

        <transition name="loginlogon" tag="div">
          <div v-if="logonverifynext">
            <div class="logon-information">
              <h2 class="gl-fb">Hello, <span class="gl-ftcolor-theme">Designer</span></h2>
              <p class="gl-ftcolor-gray gl-fn">Pleasa type your infomation to finish register.</p>
              <input v-model="logonPassword" class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn"  placeholder="Password"   type="password" name="">
              <input v-model="logonName" class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn"  placeholder="Name"   type="text" name="">
              <input v-model="logonCompany" class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn"  placeholder="Company"   type="text" name="">
              <input v-model="logonJob" class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn"  placeholder="Job Title"   type="text" name="">
              <div class="login-registered">
                <button 
                @click="_logonuser"
                class="gl-bgcolor-black gl-ftcolor-white gl-fb" >Register</button>
              </div>
            </div>
          </div>
        </transition>

        <transition name="loginlogon" tag="div">
            <div v-if="loginPopup">
              <div class="headerportrait gl-bgcolor-gray-ed">
                <img :src="loginuserdata.icon_link">
              </div>
              <div class="username gl-ftcolor-black gl-fb gl-size-26" :class="{'gl-bgcolor-gray-ed': !loginPopup}">
                <input class="gl-bgcolor-gray-ed gl-ftcolor-black" v-model="loginuserpassword"  placeholder="Password"   type="password" name="" :value="loginuserdata.user_name">
              </div>
              <div class="userinformation gl-ftcolor-gray">{{loginuserdata.position}}</div>
              
              <div class="useremail gl-bgcolor-gray-ed">{{loginlogonEmail}}</div>

              <div class="importPassword">
                <input class="gl-bgcolor-gray-ed gl-ftcolor-black" v-model="loginuserpassword"  placeholder="Password"   type="password" name="">
                <a class="gl-ftcolor-gray" href="#">Forgot?</a>
              </div>

              <div class="login-registered">
                  <button 
                  @click="_userlogin" 
                  class="gl-bgcolor-black gl-ftcolor-white  gl-fb" >SIGN IN</button>
                </div>
            </div>
        </transition>
      </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      registered: '',
      loginlogonEmail: '',
      logonPassword: '',
      logonName: '',
      logonCompany: '',
      logonJob: '',
      loginuserpassword: ''
    }
  },
  computed: {
    ...mapGetters([
      'returnimportemail',
      'getreturncode',
      'registereduser',
      'logonverifynext',
      'loginPopup',
      'loginuserdata'
    ])
  },
  methods: {
    ...mapActions([
      'importemail',
      'setreturncode',
      'logonuser',
      'verifynext',
      'userlogin'
    ]),
    _userlogin () {
      let _userinformation = []
      let userinfor = {}
      userinfor['password'] = this.loginuserpassword
      userinfor['email'] = this.loginlogonEmail
      _userinformation.push(userinfor)
      this.userlogin(_userinformation)
    },
    _loginLogon () {
      this.importemail(this.loginlogonEmail)
    },
    _logonuser () {
      let logonuserinformation = []
      let logonins = {}
      logonins['email'] = this.loginlogonEmail
      logonins['password'] = this.logonPassword
      logonins['name'] = this.logonName
      logonins['company'] = this.logonCompany
      logonins['position'] = this.logonJob

      logonuserinformation.push(logonins)
      this.setreturncode(logonuserinformation)
    },
    _verifynext () {
      let verifyCode = []
      let logon = {}
      logon['email'] = this.loginlogonEmail
      logon['code'] = this.registered
      verifyCode.push(logon)
      this.verifynext(verifyCode)
    }
  }
}
</script>

<style lang="scss">
  .startlogin{
  position:fixed;
  top:0;
  right:0;
  left:0;
  bottom:0;
  z-index:1000;
  .import-email{
      width:600px;
      height:370px;
      padding:40px 100px;
      position:absolute;
      z-index:998;
      top:50%;
      left:50%;
      transform:translate(-50%, -50%);
      text-align:center;
      box-shadow: 0 8px 25px 0 rgba(0,0,0,0.15);
      transition:height 0.5s;
      &.login{
        height:570px;
      }
      &.logon{
        height:620px;
      }
      &.qr-code{
        height:350px;
      }
      .login-registered {
        margin-top: 50px;
        button{
          margin:0px 5px;
        }
      }
      h2{
        font-size:36px;
        margin-bottom:15px;
      }
      p {
          font-size:14px;
          margin-bottom:50px;
        }
      input {
        border:none;
        width:100%;
        height:60px;
        padding:10px 15px;
        font-size:20px;
        &::-webkit-input-placeholder {
          color:#BBBBBB;
          font-size:20px;
        }
      }
      button {
        width:150px;
        height:50px;
        border:none;
        font-size:20px;
        cursor:pointer;
      }

      .headerportrait{
        width:100px;
        height:100px;
        margin: 0 auto;
        border-radius: 50%;
        margin-bottom:10px;
        img{
          width: 100%;
          border-radius: 50%;
        }
      }
      .username{
        min-height: 25px;
        min-width: 60px;
        margin-bottom: 8px;
      }
      .userinformation{
        
        font-size:16px;
        margin-bottom:20px;

      }
      .useremail{
        
      }
      .importPassword{
        position:relative;
        a{
          position:absolute;
          right: 15px;
          top: 20px;
          text-decoration: none;
          font-size: 20px;
        }
      }
    }

      .logon-information{
        input{
          &[type="text"]{
            margin-bottom: 5px;
          }
          &:last-child{
            margin-bottom:50px !important;
          }

          &[type="password"]{
            margin-bottom: 30px;
          }
        }

      }   
      .VerificationCode{
        position:relative;
        input {
          position:absolute;
          left: 0;
          right: 0;
          opacity: 0;
        }
        span {
          display:block;
          margin: 0px 2px;
          float: left;
          width: calc(100% / 6  - 5px);
          height: 60px;
          line-height: 60px;
          font-size: 36px;
        }
      }   
}
</style>