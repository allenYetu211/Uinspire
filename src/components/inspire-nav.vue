<template>
<div>
    <div class="inspirt-nav gl-bgcolor-white">
        <div class="inspirt-nav-l">
            <div class="inspirt-nav-sidebar inspirt-nav-fliter">
                <button @click="inspirtnavsidebar">
                    <span class="sprite_filter"></span>
                </button>
            </div>
            <div class="inspirt-nav-search">
                <i class="sprite_search"></i>
                <input type="text" placeholder="Search for inspire" name="">
            </div>
        </div>
        <div class="logo gl-size-24 gl-fb"><span class="gl-ftcolor-theme">UI</span>nspire.io</div>
        <div class="inspirt-nav-r">
            <div class="inspirt-nav-layout">
                <button @click="listArrange">
                    <i class="sprite_view-1 sprite_theme" :class="{open: !listArrangestate}"></i>
                </button>
                <button @click="listArrangetwo">
                    <i class="sprite_view-2 sprite_switch" :class="{open: listArrangestate}"></i>
                </button>
            </div>
            <div class="inspirt-nav-sidebar inspirt-nav-personal-infoamtion" @click="sidebarright">
                <i class="sprite_login"></i>
            </div>
        </div>
    </div>
    <!-- 左侧边栏 -->
    <side-bar-filter></side-bar-filter>

    <!-- 右侧边栏 -->
    <side-bar-infor-mation></side-bar-infor-mation>

    <!-- 登录窗口 -->
    <!-- <loginlo-gon></login-logon> -->
</div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import SideBarFilter from './sidebar-filter'
import SideBarInforMation from './sidebar-information'
import LoginLogon from './loginlogon'

export default {
  data () {
    return {
      category: []
    }
  },
  components: {
    SideBarFilter,
    SideBarInforMation,
    LoginLogon
  },
  computed: {
    ...mapGetters([
      'listArrangestate',
      'categoryDate'
    ])
  },
  methods: {
    ...mapActions([
      'inspirtnavsidebar',
      'listArrange',
      'listArrangetwo',
      'sidebarright'
    ])
  }
}
</script>

<style lang="scss">
  .sprite_inspire-nav {
    display:inline-block;
    background:url('../assets/svg_sprite.svg') no-repeat;
    width:30px;
    height:30px;
    vertical-align: -10px;
  }
  .sprite_filter{
    @extend .sprite_inspire-nav;
    background-position: 0px -90px;
  }
  .sprite_search{
    @extend .sprite_inspire-nav;
    background-position: -30px -90px;
  }
  .sprite_theme {
    @extend .sprite_inspire-nav;
    background-position: -120px -90px;
  }
  .sprite_switch {
    @extend .sprite_inspire-nav;
    background-position: -60px -90px;
  }
  .sprite_login{
    @extend .sprite_inspire-nav;
    background-position: -180px -90px;
  }
  .inspirt-nav{
    position:fixed;
    z-index: 999;
    top:0;
    left:0;
    right:0;
    min-width: 1000px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
    & > div {
      float: left;
    }
    button{
      background-color:transparent;
      border:none;
    }
    .logo{
      position:absolute;
      left:50%;
      top:50%;
      transform: translate(-50%, -50%);
    }
    .inspirt-nav-sidebar{
      width:60px;
      height:60px;
    }
    .inspirt-nav-r{
        float:right;
        
        .inspirt-nav-personal-infoamtion{
          border-left: 1px solid #eee;
          margin-left: 20px;
        }
      }
    .inspirt-nav-l{
      float:left;
      .inspirt-nav-fliter{
          border-right: 1px solid #eee;
          margin-right: 20px;
      }
    }
    .inspirt-nav-l,
    .inspirt-nav-r{
      div{
        float:left;
      }
    }
    .inspirt-nav-search{
      input {
        border:none;
        height:60px;
        margin-left: 10px;
        background-color:transparent;
        &::-webkit-input-placeholder{
          color:#DCDCDC;
          font-size:18px;
        }
      }
    }
    .inspirt-nav-layout{
      button{
        margin-left:10px;
      }
    }
  }

</style>