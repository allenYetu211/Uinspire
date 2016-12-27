<template>
<div class="the-personal-data">

  <div class="personal">
    <div class="personal-headportrait gl-bgcolor-gray-f7">
      <img :src="userInformation.headimgurl">
    </div>
    <p class="gl-fb">{{userInformation.user_name}}</p>
    <p class="">{{userInformation.company}} {{userInformation.position}}</p>
  </div>
  <div class="personal-infordata">

    <div class="personal-validation">
      <input class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn" disabled="disabled" :value="userInformation.email" type="email" name="" placeholder="Email">
      <input @keyup="agianuserinformations" ref="changePassword" class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn" type="password" name="" placeholder="Password">
    </div>

    <div class="personal-validation">
      <input @keyup="agianuserinformations" ref="changeName" class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn" :value="userInformation.user_name" type="text" name="" placeholder="Name">
      <input @keyup="agianuserinformations" ref="changeCompany" class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn" :value="userInformation.company" type="text" name="" placeholder="Company">
      <input @keyup="agianuserinformations" ref="changePosition" class="gl-bgcolor-gray-ed gl-ftcolor-black gl-fn" :value="userInformation.position" type="text" name="" placeholder="Job Title">
    </div>

    <div  class="personal-registered">
        <button @click="_changeUserif" class="gl-bgcolor-black gl-ftcolor-white gl-fb" :class="{'success': changeUserState}">
          <span v-if="!changeUserState">ENTER</span>
          <span v-else>SUCCESS</span>
        </button>
        <!-- <router-link :to="{ name: 'UserJoinus' }" tag="button" class="gl-bgcolor-black gl-ftcolor-white gl-fb">ENTER</router-link> -->
        <button  class="gl-bgcolor-gray gl-ftcolor-white gl-fb">CANCEL</button>
    </div>

  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'userInformation',
      'changeUserState'
    ])
  },
  methods: {
    ...mapActions([
      'cuinformation',
      'userinformations',
      'agianuserinformations'
    ]),
    _changeUserif () {
      let userinfor = {
        email: this.userInformation.email,
        password: this.$refs.changePassword.value,
        name: this.$refs.changeName.value,
        company: this.$refs.changeCompany.value,
        position: this.$refs.changePosition.value
      }
      this.userinformations(userinfor)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.cuinformation()
    })
  }
}
</script>

<style lang="scss">
.the-personal-data{
  width:400px;
  margin: 0 auto;
  text-align: center;
  padding: 80px 0;
}
  .personal{
    .personal-headportrait{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto;
      overflow: hidden;
      & + p {
        width: 155px;
        height: 24px;
        color: #222;
        font-size: 20px;
      }
      img{
        width: 100%;
      }
    }
    p{
      margin: 10px auto;
      &:last-child{
        width: 100px;
        height: 16px;
        line-height: 14px; 
        color: #dcdcdc;
        font-size: 14px;
      }
    }
  }
  .personal-infordata{
    margin-top:60px;
    input{
      display: block;
      border: none;
      width: 100%;
      height: 60px;
      padding: 10px 15px;
      font-size: 20px;
      margin: 2px 0;
    }
    .personal-validation{
      margin: 20px 0;
    }
  }
  .personal-registered{
    margin-top: 80px;
    button{
      width: 150px;
      height: 50px;
      border: none;
      font-size: 20px;
      cursor: pointer;
      margin:0 5px;
      transition: background-color 0.5s;
      &.success{
        background-color:#2EF037;
      }
    }
  }
</style>