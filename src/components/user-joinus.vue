<template>
  <div>
    <div class="joinus-title">
      <h2 class="gl-ftcolor-black gl-fb">Join <span class="gl-ftcolor-theme">Editor</span></h2>
      <p class="gl-ftcolor-gray">If you want to upload better app screenshot</p>
    </div>
    <div class="joinus">
      <div class="joinus-introduce">
        <div class="joinus-introduce-left gl-bgcolor-gray-f7">
          <p class="introduce gl-ftcolor-black">Want to be part of the UInspire’s community? Submit your design inspiration and we’ll review it. Don’t worry we always reward our collaborators!</p>
          <p class="introduce gl-ftcolor-black">You can send us your amazing design to our email address. We’ll build an proper tool to submit as soon as we can! 👊</p>
          <div class="joinus-introduce-informations">
            <p>Cheers</p>
            <p>Jingchao from  <span class="gl-ftcolor-black gl-fb"><span class="gl-ftcolor-theme">UI</span>nspire.io</span></p>
          </div>
        </div>
        <!-- {{userInformation}} -->
        <div class="joinus-introduce-right">
          <input class="gl-bgcolor-gray-f7 gl-ftcolor-black gl-fn" type="text" :value="userInformation.user_name" name="" placeholder="Name">
          <input class="gl-bgcolor-gray-f7 gl-ftcolor-black gl-fn" type="text" :value="userInformation.company" name="" placeholder="Company">
          <input class="gl-bgcolor-gray-f7 gl-ftcolor-black gl-fn" type="text" :value="userInformation.position" name="" placeholder="Job Title">
          <input v-model="Phone" class="gl-bgcolor-gray-f7 gl-ftcolor-black gl-fn" type="text" name="" placeholder="Phone">
          <input v-model="Wechat" class="gl-bgcolor-gray-f7 gl-ftcolor-black gl-fn" type="text" name="" placeholder="Wechat">
          <textarea v-model="About"class="gl-bgcolor-gray-f7 gl-ftcolor-black gl-fn" placeholder="About you…"></textarea>

          <div  class="joinus-registered">
            <button @click="_userjoinus"  class="gl-bgcolor-black gl-ftcolor-white gl-fb" :class="{'success': userPermissions}">
            <span v-if="!userPermissions">SENT</span>
            <span v-else>SUCCESS</span>
            </button>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      Phone: '',
      Wechat: '',
      About: ''
    }
  },
  computed: {
    ...mapGetters([
      'userInformation',
      'userPermissions'
    ])
  },
  methods: {
    ...mapActions([
      'cuinformation',
      'permissions'
    ]),
    _userjoinus () {
      let newObjects = {
        name: this.userInformation.user_name,
        company: this.userInformation.company,
        position: this.userInformation.position,
        phone: this.Phone,
        wechat: this.Wechat,
        About: this.About
      }
      this.permissions(newObjects)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.cuinformation()
    })
  }
}
</script>

<style lang="scss" scoped>
.joinus{
  width: 820px;
  margin: 60px auto 0;
}

.joinus-title{
  min-height: 180px;
  padding:50px;
  text-align:center;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
       font-size: 36px;
       margin: 15px 0;
  }
  p {
        font-size: 14px;
        margin-bottom: 5px;
  }
}

.joinus-introduce{
  display: flex;
  & > div {
    height: 580px;
    max-width:380px;
    flex: 1;
    margin: 0 10px;
  }
  .joinus-introduce-left{
    padding: 20px;
    position: relative;
    border-radius: 1px;
    p{
      font-size :16px;
      line-height: 2;
    }
    p.introduce{
      
      margin-bottom: 30px;
    }
    .joinus-introduce-informations{
      position: absolute;
      bottom: 20px;
      left: 20px;
        p{

        }
    }
  }
  .joinus-introduce-right{
    input{
      display: block;
      border: none;
      width: 100%;
      height: 60px;
      padding: 10px 15px;
      font-size: 20px;
      margin: 3px 0;
      &:first-child{
        margin-top:0px;
      }
    }
    textarea {
      margin: 12px 0;
      border: none;
      width: 100%;
      height: 180px;
      resize: none;
      padding: 10px 15px;
      font-size: 20px;
        &::-webkit-input-placeholder{ 
        font-size: 20px;
        color: #dcdcdc;
      }
      &:focus {
        outline:none;
      }
    }
    .joinus-registered{
      margin-top: 7px;
          button{
            width: 150px;
            height: 50px;
            border: none;
            font-size: 20px;
            cursor: pointer;
            transition: background-color 0.5s;
            margin-right:10px;
            &.success{
              background-color:#2EF037;
            }
        }
    }
  }
}
</style>
