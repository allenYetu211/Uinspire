<template>
  <div class="joinus">

  <div class="joinus-title">
    <h2 class="gl-ftcolor-black gl-fb">Join <span class="gl-ftcolor-theme">Editor</span></h2>
    <p>If you want to upload better app screenshot</p>
  </div>

  <div class="joinus-introduce">
    <div class="joinus-introduce-left gl-bgcolor-gray-f7">
      <p class="introduce gl-ftcolor-black">Want to be part of the UInspire’s community? Submit your design inspiration and we’ll review it. Don’t worry we always reward our collaborators!</p>
      <p class="introduce gl-ftcolor-black">You can send us your amazing design to our email address. We’ll build an proper tool to submit as soon as we can! 👊</p>
      <div class="joinus-introduce-informations">
        <p>Cheers</p>
        <p>Finalpjc from  <span class="gl-ftcolor-black gl-fb"><span class="gl-ftcolor-theme">UI</span>nspire.io</span></p>
      </div>
    </div>

    <div class="joinus-introduce-right">
      <input class="gl-bgcolor-gray-f7 gl-ftcolor-black" type="text" name="" placeholder="Name">
      <input class="gl-bgcolor-gray-f7 gl-ftcolor-black" type="text" name="" placeholder="Company">
      <input class="gl-bgcolor-gray-f7 gl-ftcolor-black" type="text" name="" placeholder="Job Title">
      <input class="gl-bgcolor-gray-f7 gl-ftcolor-black" type="text" name="" placeholder="Phone">
      <input class="gl-bgcolor-gray-f7 gl-ftcolor-black" type="text" name="" placeholder="Wechat">
      <textarea class="gl-bgcolor-gray-f7 gl-ftcolor-black" placeholder="About you…"></textarea>

      <div  class="joinus-registered">
        <button  class="gl-bgcolor-black gl-ftcolor-white gl-fb">Enter</button>
        <button  class="gl-bgcolor-gray gl-ftcolor-white gl-fb">Resent</button>
      </div>
    </div>

     
  </div>

  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.joinus{
  width: 820px;
  margin: 10px auto 0;
}

.joinus-title{
  text-align: center;
  margin-bottom: 60px;
  h2{
    font-size: 36px;
    margin: 15px 0;
  }
  p{
    font-size: 14px;
  }
}

.joinus-introduce{
  display: flex;
  & > div {
    height: 580px;
    flex: 1;
    padding: 0 15px;
  }
  .joinus-introduce-left{
    padding: 20px;
    position: relative;
    border-radius: 10px;
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
      margin: 2px 0;
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
      margin-top: 10px;
          button{
            width: 150px;
            height: 50px;
            border: none;
            font-size: 20px;
            cursor: pointer;
          }
    }
  }
}
</style>
