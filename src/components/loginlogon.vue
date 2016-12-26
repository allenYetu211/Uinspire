<template>
    <div class="startlogin">
      <transition
      name="loginlogonAnimated" tag="em">
      <div class="import-email gl-bgcolor-white" v-if='loginSidebar' :class="{'logon': getreturncode, 'login': loginPopup}">
        <transition name="loginlogon" tag="div">
          <div v-if='!returnimportemail'>
            <h2 class="gl-fb">Join <span class="gl-ftcolor-theme">UI</span>nspire.io</h2>
            <p class="gl-ftcolor-gray gl-fn">Input your E-mail, It’s will auto validation your account.</p>
            <div class="inputEmails">
              <input 
              class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn" 
              placeholder="E-mail" 
              type="email" 
              v-model="loginlogonEmail"
              autofocus="autofocus"
              @keyup="errorEmail = false"
              @keyup.enter="_loginLogon"
              name="">
            </div>
            <div class="login-registered">
              <button 
              @click="_loginLogon" 
              class="gl-bgcolor-black gl-ftcolor-white  gl-fb"
              :class="{'pasError': errorEmail}" >
                <span v-if="!errorEmail">ENTER</span>
                <span v-else>ERROR</span>
              </button>
            </div>
          </div>
        </transition>

         <transition name="loginlogon" tag="div" @after-enter="loginEnter">
          <div v-show="registereduser">
            <div class="logon-information">
              <h2 class="gl-fb">Hello, <span class="gl-ftcolor-theme">Designer</span></h2>
              <p class="gl-ftcolor-gray gl-fn">Please check your E-mail, and type the code to register.</p>
              <div class="VerificationCode gl-fb clearfix">
                  <input class="registeredCode" 
                  ref="loginpwds"  
                  @keyup.enter="_verifynext"  
                  v-model="registered"  
                  type="text" 
                  name="" 
                  maxlength = '6'
                  @keyup="verifycodes"
                  >
                  <span :class="{'active': registered.length === 0}"  class="gl-bgcolor-gray-ed gl-fb"> {{registered[0]}}</span>
                  <span :class="{'active': registered.length === 1}"  class="gl-bgcolor-gray-ed gl-fb"> {{registered[1]}}</span>
                  <span :class="{'active': registered.length === 2}"  class="gl-bgcolor-gray-ed gl-fb"> {{registered[2]}}</span>
                  <span :class="{'active': registered.length === 3}"  class="gl-bgcolor-gray-ed gl-fb"> {{registered[3]}}</span>
                  <span :class="{'active': registered.length === 4}"  class="gl-bgcolor-gray-ed gl-fb"> {{registered[4]}}</span>
                  <span :class="{'active': registered.length === 5}"  class="gl-bgcolor-gray-ed gl-fb"> {{registered[5]}}</span>
              </div>
              <div class="login-registered">
                <button 
                @click="_verifynext"
                class="gl-bgcolor-black gl-ftcolor-white gl-fb"
                :class="{'pasError': verifyCode}" >
                <span v-if="!verifyCode">ENTER</span>
                <span v-else>ERROR</span>
                </button>
                <button 
                class="gl-bgcolor-gray gl-ftcolor-white gl-fb" >RESENT</button>
              </div>
            </div>
          </div>

        </transition>

        <transition name="loginlogon" tag="div" @after-enter="loginEnter">
          <div v-show="logonverifynext">
            <div class="logon-information">
              <h2 class="gl-fb">Hello, <span class="gl-ftcolor-theme">Designer</span></h2>
              <p class="gl-ftcolor-gray gl-fn">Pleasa type your infomation to finish register.</p>
            
            <div class="user-informations">
              
              <input @focus="validationPassWord = false" ref="loginpwd"  v-model="logonPassword" class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn"  placeholder="Password"   type="password" name="">
              <input @focus="validationlogonName = false" v-model="logonName" class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn"  placeholder="Name"   type="text" name="">
              <input @focus="validationlogonCompany = false" v-model="logonCompany" class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn"  placeholder="Company"   type="text" name="">
              <input @focus="validationlogonJob = false"  @keyup.enter="_logonuser" v-model="logonJob" class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn"  placeholder="Job Title"   type="text" name="">

              <div :class="{inputError: validationPassWord}" class="validationPassWord">Please enter above 6 characters</div>
              <div :class="{inputError: validationlogonName}"  class="validationlogonName">Please enter your Name</div>
              <div :class="{inputError: validationlogonCompany}" class="validationlogonCompany">Please enter Company Name</div>
              <div :class="{inputError: validationlogonJob}"  class="validationlogonJob">Please enter your job title</div>

            </div>

              <div class="login-registered">
                  <div @click="userlogonsuccess" :class="{'success': logonsuccess}">
                    <span class="gl-ftcolor-white gl-fb">SUCCESS</span>
                  </div>
                  <button 
                  @click="_logonuser"
                  class="gl-bgcolor-black gl-ftcolor-white gl-fb" :class="{'pasError': upError}">REGISTER</button>
                </div>

            </div>
          </div>
        </transition>

        <transition name="loginlogon" tag="div" @after-enter="loginEnter">
            <div v-if="loginPopup">
              <div class="headerportrait gl-bgcolor-gray-ed">
                <img :src="loginuserdata.icon_link">
              </div>
              <div class="username gl-ftcolor-black gl-fb gl-size-26" :class="{'gl-bgcolor-gray-ed': !loginPopup}">
              {{loginuserdata.user_name}}
              </div>
              <div class="userinformation gl-ftcolor-gray">{{loginuserdata.position}}</div>
              
              <!-- <div class="useremail gl-bgcolor-gray-ed">{{loginlogonEmail}}</div> -->

              <div class="importPassword">
                <input class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn" disabled="disabled"   type="text" name="" :value="loginlogonEmail">
                <input class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn" 
                ref="loginpwd"
                @keyup.enter="_userlogin"
                @keyup="_test"
                v-model="loginuserpassword"  
                placeholder="Password"   
                type="password" 
                 >
                <a class="gl-ftcolor-gray" href="#">Forgot?</a>
              </div>
              <div class="login-registered">
                  <div :class="{'success': userSuccess}">
                    <span class="gl-ftcolor-white gl-fb">SUCCESS</span>
                  </div>
                  <button 
                  @click="_userlogin" 
                  class="gl-bgcolor-black gl-ftcolor-white  gl-fb" :class="{'pasError': upError}">
      
                    <span v-if="!upError">SIGN IN</span>
                    <span v-else>ERROR</span>
                  </button>
                 </div>
            </div>
        </transition>
      </div>
      </transition>
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
      loginuserpassword: '',
      errorEmail: false,
      userpasError: false,
      validationPassWord: false,
      validationlogonName: false,
      validationlogonCompany: false,
      validationlogonJob: false
    }
  },
  watch: {
    upError: function () {
      this.upError ? this.userpasError = true : this.userpasError = false
    }
  },
  computed: {
    ...mapGetters([
      'returnimportemail',
      'getreturncode',
      'registereduser',
      'logonverifynext',
      'loginPopup',
      'loginuserdata',
      'logonsuccess',
      'emailError',
      'upError',
      'userSuccess',
      'loginSidebar',
      'verifyCode'
    ])
  },
  methods: {
    ...mapActions([
      'importemail',
      'setreturncode',
      'logonuser',
      'verifynext',
      'userlogin',
      'userlogonsuccess',
      'changestate',
      'verifycodes'
    ]),
    _deleteLogin () {
      this.changestate()
    },
    _test () {
      this.changestate()
    },
    _userlogin () {
      if (this.loginuserpassword.length === 0) {
        return
      }
      let _userinformation = []
      let userinfor = {}
      userinfor['password'] = this.loginuserpassword
      userinfor['email'] = this.loginlogonEmail
      _userinformation.push(userinfor)
      this.userlogin(_userinformation)
    },
    _loginLogon () {
      let pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
      if (!pattern.test(this.loginlogonEmail)) {
        this.errorEmail = true
        return
      }
      this.importemail(this.loginlogonEmail)
    },
    _logonuser () {
      let logonuserinformation = []
      let logonins = {}
      if (this.logonPassword.length < 6) {
        this.validationPassWord = true
      }
      if (this.logonName.length === 0) {
        this.validationlogonName = true
      }
      if (this.logonCompany.length === 0) {
        this.validationlogonCompany = true
      }
      if (this.logonJob.length === 0) {
        this.validationlogonJob = true
      }
      logonins['email'] = this.loginlogonEmail
      logonins['password'] = this.logonPassword
      logonins['name'] = this.logonName
      logonins['company'] = this.logonCompany
      logonins['position'] = this.logonJob
      // var {email,
      // password,
      // name,
      // company,
      // position} =
      //   {email: this.loginlogonEmail,
      //     password: this.logonPassword,
      //     name: this.logonName,
      //     company: this.logonCompany,
      //     position: this.logonJob}
      logonuserinformation.push(logonins)
      if (this.logonName.length !== 0 && this.logonCompany.length !== 0 && this.logonJob.length !== 0 && this.logonPassword.length > 6) {
        console.log('12312312312')
        this.setreturncode(logonuserinformation)
      }
    },
    _verifynext () {
      console.log(222)
      let verifyCode = []
      let logon = {}
      logon['email'] = this.loginlogonEmail
      logon['code'] = this.registered
      verifyCode.push(logon)
      this.verifynext(verifyCode)
    },
    loginEnter () {
      this.$refs.loginpwd.focus()
      this.$refs.loginpwds.focus()
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
      height:360px;
      padding:40px 100px;
      position:absolute;
      z-index:998;
      top:50%;
      left:50%;
      transform:translate(-50%, -50%);
      text-align:center;
      box-shadow: 0 12px 30px 0 rgba(0,0,0,0.25);
      transition:height 0.5s;
      &.login{
        height:570px;
      }
      &.logon{
        height:590px;
      }
      &.qr-code{
        height:350px;
      }
      .login-registered {
        margin-top: 50px;
        position:relative;
        div{
          position:absolute;
          width:151px;
          height: 52px;
          left: 50%;
          top: -1px;
          transform: translateX(-50%) scaleX(0);
          background: #2EF037;
          transform-origin: left;
          transition: transform 0.2s;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          span{
            opacity: 0;
            transition: opacity 0.3s 0.2s;
          }
          &.success {
            transform: translateX(-50%) scaleX(1);
            span{
              opacity: 1;
            }
          }
        }
        button{
          margin:0px 5px;
          transition: background-color 0.2s;
          &.pasError {
            background-color:#f44000;
            animation: shake 0.3s;
          }
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
          color:#dcdcdc;
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
        margin-top: 20px;
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
        margin-bottom:50px;

      }
      .importPassword{
        position:relative;
        input:first-child{
          margin-bottom: 5px;
        }
        a{
          position:absolute;
          right: 15px;
          bottom: 20px;
          text-decoration: none;
          font-size: 20px;
        }
      }
      .user-pas-error{
        padding-top: 10px;
        color: #F40909;
      }
      .inputEmails{
        position: relative;
        .errorEmail{
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          color:#F40909;
        }
      }
    }

      .logon-information{
        .user-informations{
          position: relative;
          .validationPassWord,
          .validationlogonName,
          .validationlogonCompany,
          .validationlogonJob{
            position: absolute;
            right: 10px;
            font-size:12px;
            color:#F40909;
            opacity: 0;
            transition: opacity 0.2s;
            &.inputError{
              opacity: 1;
            }
          }
          .validationPassWord{
            top: 25px;
          }
          .validationlogonName{
            top: 115px;
          }
          .validationlogonCompany{
            top: 180px;
          }
          .validationlogonJob{
           top: 245px;
          }
        }
        input{
          &[type="text"]{
            margin-bottom: 5px;
          }
          // &:last-child{
          //   margin-bottom:50px !important;
          // }

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
          z-index: 98;
          // width: 120%;
          // letter-spacing: 1.28em;
          // font-size: 36px;
          // background: rgba(0,0,0,0);
        }
        span {
          display:block;
          margin: 0px 2px;
          float: left;
          width: calc(100% / 6  - 5px);
          height: 60px;
          line-height: 60px;
          font-size: 36px;
          position: relative;
          &.active:after{
            display: block;
            content: '';
            position:absolute;
            width: 1px;
            left: 30px;
            top: 15px;
            bottom: 15px;
            background-color:#000;
            animation: animated_flash 1.2s ease infinite forwards;
          }
        }
      }   
}
</style>