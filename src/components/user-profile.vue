<template>
<div class="the-personal-data">

  <div class="personal">
    <div class="personal-headportrait gl-bgcolor-gray-f7"></div>
    <p class=" gl-bgcolor-gray-f7"></p>
    <p class=" gl-bgcolor-gray-f7"></p>
  </div>

  <div class="personal-infordata">

    <div class="personal-validation">
      <input class="gl-bgcolor-gray-ed gl-ftcolor-black" type="email" name="" placeholder="Email">
      <input class="gl-bgcolor-gray-ed gl-ftcolor-black" type="password" name="" placeholder="Password">
    </div>

    <div class="personal-validation">
      <input class="gl-bgcolor-gray-ed gl-ftcolor-black" type="text" name="" placeholder="Name">
      <input class="gl-bgcolor-gray-ed gl-ftcolor-black" type="text" name="" placeholder="Company">
      <input class="gl-bgcolor-gray-ed gl-ftcolor-black" type="text" name="" placeholder="Job Title">
    </div>

    <div  class="personal-registered">
        <router-link :to="{ name: 'UserJoinus' }" tag="button" class="gl-bgcolor-black gl-ftcolor-white gl-fb">Validation</router-link>
        <button  class="gl-bgcolor-gray gl-ftcolor-white gl-fb">Register</button>
    </div>

  </div>
</div>
</template>

<script></script>

<style lang="scss">
.the-personal-data{
  width:400px;
  margin: 0 auto;
  text-align: center;
  padding: 30px 0;
}
  .personal{
    .personal-headportrait{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto;
      & + p {
        width: 155px;
        height: 24px;
      }
    }
    p{
      margin: 10px auto;
      &:last-child{
        width: 100px;
        height: 16px; 
      }
    }
  }
  .personal-infordata{
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
    button{
      width: 150px;
      height: 50px;
      border: none;
      font-size: 20px;
      cursor: pointer;
    }
  }
</style>