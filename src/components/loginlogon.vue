<template>
    <div class="startlogin">
      <div class="import-email gl-bgcolor-white" :class="{'login': returnimportemail, 'qr-code': getreturncode}">
        <transition name="loginlogon" tag="div">
          <div v-if='!returnimportemail'>
            <h2>Join <span class="gl-ftcolor-theme">UI</span>nspire.io</h2>
            <p class="gl-ftcolor-gray">Input your E-mail, It’s will auto validation your account.</p>
            <input 
            class="gl-bgcolor-gray-ed gl-ftcolor-black" 
            placeholder="E-mail" 
            type="email" 
            name="">
            <div class="login-registered">
              <button 
              @click="_loginLogon" 
              class="gl-bgcolor-black gl-ftcolor-white  gl-fb" >Validation</button>
            </div>
          </div>
        </transition>

        <transition name="loginlogon" tag="div">
          <div v-if="registereduser">
            <div class="logon-information">
              <h2>Hello, <span class="gl-ftcolor-theme">Designer</span>!</h2>
              <p class="gl-ftcolor-gray">Pleasa type your infomation to finish register.</p>
              <input class="gl-bgcolor-gray-ed gl-ftcolor-black"  placeholder="Password"   type="password" name="">
              <input class="gl-bgcolor-gray-ed gl-ftcolor-black"  placeholder="Name"   type="text" name="">
              <input class="gl-bgcolor-gray-ed gl-ftcolor-black"  placeholder="Company"   type="text" name="">
              <input class="gl-bgcolor-gray-ed gl-ftcolor-black"  placeholder="Job Title"   type="text" name="">
              <div class="login-registered">
                <button 
                @click="setreturncode"
                class="gl-bgcolor-black gl-ftcolor-white gl-fb" >Register</button>
              </div>
            </div>
          </div>
        </transition>

        <transition name="loginlogon" tag="div">
          <div v-if="getreturncode">
            <div class="logon-information">
              <h2>Hello, <span class="gl-ftcolor-theme">Designer</span>!</h2>
              <p class="gl-ftcolor-gray">Pleasa type your infomation to finish register.</p>
              <input class="gl-bgcolor-gray-ed gl-ftcolor-black" type="text" name="" maxlength = '6'>
              <div class="login-registered">
                <button 
                class="gl-bgcolor-black gl-ftcolor-white gl-fb" >Validation</button>
                <button 
                class="gl-bgcolor-gray gl-ftcolor-white gl-fb" >Register</button>
              </div>
            </div>
          </div>
        </transition>



        <!-- <transition name="loginlogon" tag="div">
            <div v-if="returnimportemail">
              <div class="headerportrait gl-bgcolor-gray-ed">
                <img src="">
              </div>
              <div class="username gl-ftcolor-black" :class="{'gl-bgcolor-gray-ed': !returnimportemail}">Allen</div>
              <div class="userinformation gl-ftcolor-gray">have  artistic breath Programmers </div>
              
              <div class="useremail gl-bgcolor-gray-ed"></div>

              <div class="importPassword">
                <input class="gl-bgcolor-gray-ed gl-ftcolor-black"  placeholder="Password"   type="password" name="">
                <a class="gl-ftcolor-gray" href="#">Forgot?</a>
              </div>

              <div class="login-registered">
                  <button 
                  @click="_loginLogon" 
                  class="gl-bgcolor-black gl-ftcolor-white  gl-fb" >Sing in</button>
                </div>
            </div>
        </transition> -->
      </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'returnimportemail',
      'getreturncode',
      'registereduser'
    ])
  },
  methods: {
    ...mapActions([
      'importemail',
      'setreturncode',
      'logonuser'
    ]),
    _loginLogon () {
      this.importemail()
    }
  }
}
</script>

<style lang="scss" scoped>
  .startlogin{
  position:fixed;
  top:0;
  right:0;
  left:0;
  bottom:0;
  z-index:1000;
  .import-email{
      width:600px;
      height:350px;
      padding:40px 100px;
      position:absolute;
      z-index:998;
      top:50%;
      left:50%;
      transform:translate(-50%, -50%);
      text-align:center;
      box-shadow:0 5px 15px rgba(0,0,0,.5);
      transition:height 0.5s;
      &.login{
        height:570px;
      }
      &.qr-code{
        height:350px;
      }
      .login-registered {
        margin-top: 50px;
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
      }
      .username{
        min-height: 25px;
        min-width: 60px;
        font-size:20px;
        margin-bottom: 8px;
      }
      .userinformation{
        @extend .username;
        font-size:16px;
        margin-bottom:20px;

      }
      .useremail{
        @extend .username;
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

}
</style>