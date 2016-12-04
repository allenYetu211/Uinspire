<template>
  <div>

  <!--   <div class="startlogin">
      <div class="import-email gl-bgcolor-white" :class="{login:returnimportemail}">
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
              class="gl-bgcolor-black gl-ftcolor-white" >Validation</button>
            </div>
          </div>
        </transition>

        <transition name="loginlogon" tag="div">
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
                class="gl-bgcolor-black gl-ftcolor-white" >Sing in</button>
              </div>
          </div>
          </transition>

      </div>
    </div> -->
    <!-- <div class="sidebar-information gl-bgcolor-white">
      <div class="log-userinformation">
        <div class="log-userheaderportrait">
        
        </div>

        <div class="log-func">
         <a href="#">Inspire</a>
         <a href="#">Moodboard</a>
         <a href="#">Profile</a>
         <router-link :to="{ name: 'updatePage'}">Upload</router-link>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'returnimportemail'
    ])
  },
  methods: {
    ...mapActions([
      'importemail'
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
        margin-bottom:50px;
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
}
.sidebar-information{
  position:fixed;
  right: 0;
  top: 60px;
  bottom: 0;
  z-index:998;
  width: 350px;
}

</style>
