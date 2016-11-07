<style lang="scss" scoped>
  .navigation{
    padding:0 30px;
    background-color:#EFEFEF;
    &>div{
      display:flex;
        button{
        border:none;
        background-color:transparent;
        &:focus{
          outline:none;
        }
      }
    }
    &-headlines{
      padding:50px 0px;
      &>div{
        flex:1;
        &:first-child{
          text-align:left;
          font-weight: 900;
        }
        &:last-child{
          text-align:right;
        }
      }
    }
    &-fiv{
      // padding:0 30px;
      &>div{
        &:first-child{
          text-align:left;
          flex:1;
        }
        &:nth-child(2){
          width:80%;
          text-align:center;
        }
        &:last-child{
          text-align:right;
          flex:1;
        }

      }
    }
  }
</style>
<template>
  <div class="navigation">
    <div class="navigation-headlines">
      <div class="logo">G_Lab inspire</div>
      <div class="sign">
        <button>Sing up</button>
        /
        <button>Log in</button>
        
      </div>
    </div>

    <div class="navigation-fiv">
      <div class="filter">FILTER</div>
      <div class="phone">
        <button>iPhone</button>
        <button>iPad</button>
        <button>Andriod</button>
        <button>Web</button>
      </div>
      <div class="view">
        VIEW
      </div>
    </div>

  </div>
</template>


<script>
</script>
