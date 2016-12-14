<template>
  <div>

    <transition name="sidebar-right">
    <div class="sidebar-information gl-bgcolor-white" 
    :class="{open : !sidebarrights}" 
    v-show="!sidebarrights">

      <div class="log-userinformation">
        <div class="log-userheaderportrait clearfix">

          <div class="header-portarait gl-bgcolor-gray-ed">
            <img src="">
          </div>

          <div class="log-userinformations">
            <p class="log-userName gl-bgcolor-gray-ed"></p>
            <p class="log-introduce gl-bgcolor-gray-ed"></p>
          </div>
        </div>

        <div class="log-func gl-fb">
         <router-link :to="{ name: 'inspire'}">Inspire</router-link>
         <router-link :to="{ name: 'MoodBoardDetailProject'}">Moodboard</router-link>
         <router-link :to="{ name: 'UserProfile'}">Profile</router-link>
         <router-link :to="{ name: 'updatePage'}">Upload</router-link>
        </div>
      </div>

      <div class="log-search-moodboard">
        <button><i class="sprite_sidebar-search"></i></button>
        <input placeholder="Search moodboard" type="text" name="" class="gl-fn gl-size-16">
        <button class="gl-bgcolor-gray-dc"> <i class="sprite_sidebar-add"></i></button>
      </div>

      <div class="log-drawing-board">
        <div class="drawing-board gl-bgcolor-gray-ed"></div>
        <div class="drawing-information">
          <div class="drawing-name gl-bgcolor-gray-ed"></div>
          <div class="drawing-infor gl-bgcolor-gray-ed"></div>
        </div>
      </div>

      <div class="about-G_Lab">
        <ul class="G_Lab-introduce">
          <li><a href="" class="gl-ftcolor-black">About</a></li>
          <li><a href="" class="gl-ftcolor-black">Help</a></li>
          <li><a href="" class="gl-ftcolor-black">Support</a></li>
          <li><a href="" class="gl-ftcolor-black">Feedback</a></li>
        </ul>

        <p class="gl-ftcolor-gray-99">
          Copyright © <span class="gl-ftcolor-theme gl-fb">G_Lab Stoyard</span>
        </p>
        <p class="gl-ftcolor-gray-99">
          UInspire.io  2016
        </p>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'sidebarrightopenclose',
      'whetherthelogins',
      'sidebarrights'
    ])
  },
  methods: {
    ...mapActions([
    ])
  }
}
</script>

<style lang="scss" scoped>
.sprite_sidebar{
    display:inline-block;
    background:url('../assets/svg_sprite.svg') no-repeat;
    width:20px;
    height:20px;
    vertical-align: -10px;
}
.sprite_sidebar-search{
  @extend .sprite_sidebar;
  background-position: -200px -150px;
}
.sprite_sidebar-add{
  @extend .sprite_sidebar;
  background-position: -220px -150px;
}
.sidebar-information{
  position:fixed;
  right: 0;
  top: 60px;
  bottom: 0;
  z-index:998;
  width: 370px;
  padding: 20px 20px 15px;
  border-left: 1px solid #eee;
  overflow-y:auto;
  &.open{
    transform: translateX(20px);
  }
  .log-userheaderportrait{
    margin-bottom: 20px;
  }
  .header-portarait{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
    float: left;
  }
  .log-userinformations{
    float: left;
     p.log-userName {
        height:24px;
        width: 150px;
        margin: 5px 0 8px;
      }
     p.log-introduce {
      height:16px;
      width: 100px;
    }
  }
  .log-func{
    a{
      display: block;
      padding: 8px 0;
      font-size: 28px;
      text-decoration:none;
      color:#DCDCDC;
      padding-left: 10px;
      &.router-link-active{
        color: #222;
      }
    }
  }

  .log-search-moodboard{
    border-top: 1px solid #DCDCDC;
    border-bottom: 1px solid #DCDCDC;
    height: 40px;
    margin: 20px 0 20px -20px;
    position: relative;
    input{
      width: 100%;
      height: 100%;
      border: none;
      padding:0 60px 0 40px;
      &::-webkit-input-placeholder{
           color:#DCDCDC;
           font-size:16px;
        } 
    }
    button{
      position: absolute;
      top: 0;
      border:none;
    }
    button:first-child{
      height: 100%;
      left: 3px;
      background-color: transparent;
    }
    button:last-child{
      height: 100%;
      width: 65px;
      right: 0;
    }
  }
  .log-drawing-board {
    height: 40%;
    overflow-y:auto;
    margin-right: -20px;
    .drawing-board{
      width: 60px;
      height: 60px;
      margin-right: 12px;
      float:left;
    }
    .drawing-information{
      float: left;
      .drawing-name{
        width: 156px;
        height: 24px;
        margin-bottom: 8px;
      }
      .drawing-infor{
        width: 120px;
        height: 16px;
      }
    }
  }
  .about-G_Lab{
    text-align: center;
    border-top: 1px solid #DCDCDC;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 20px;
    height: 120px;
    padding: 20px;
     .G_Lab-introduce{
      margin-bottom: 15px;
        li{
          display: inline-block;
          // float:left;
          margin: 0 10px;
          a{
            text-decoration: none;
          }
        }
      }
    p{
      font-size: 14px;
      line-height: 1.6;
    }
  }
}
// @keyframes slideInRightss {
//   from {
//     animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//     transform: translate3d(320px, 0, 0);
//   }
//   60%{
//     transform: translate3d(18px, 0, 0);
//   }
//   75%{
//     transform: translate3d(22px, 0, 0);
//   }
//   90%{
//     transform: translate3d(19px, 0, 0);
//   }
//   to {
//     transform: translate3d(20px, 0, 0);
//   }
// }

</style>
