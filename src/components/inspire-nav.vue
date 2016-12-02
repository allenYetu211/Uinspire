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
          <i class="sprite_login"></i>
          <input type="text" placeholder="Search for inspire" name="">
        </div>
      </div>

      <div class="logo gl-size-24"><span class="inspire-color">UI</span>nspire.io</div>

      <div class="inspirt-nav-r">
        <div class="inspirt-nav-layout">
           <button @click="listArrange">
              <i class="sprite_view-1" :class="{open: !listArrangestate}"></i>
            </button>
           <button @click="listArrangetwo" >
              <i class="sprite_view-2" :class="{open: listArrangestate}"></i>
           </button>
        </div>

        <div class="inspirt-nav-sidebar inspirt-nav-personal-infoamtion">
          <i class="sprite_login"></i>
        </div>
      </div>
  </div>
  <side-bar-filter></side-bar-filter>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import SideBarFilter from './sidebar-filter'

export default {
  components: {
    SideBarFilter
  },
  computed: {
    ...mapGetters([
      'listArrangestate'
    ])
  },
  methods: {
    ...mapActions([
      'inspirtnavsidebar',
      'listArrange',
      'listArrangetwo'
    ])
  }
}
</script>

<style lang="scss">
  .sprite_login{
    width:30px;
    height:30px;
    display:inline-block;
    background:url('../../static/svg_sprite.svg') no-repeat;
    background-position:-45px -55px;
    vertical-align: -10px;
  }
  .inspirt-nav{
    position:fixed;
    z-index: 999;
    top:0;
    left:0;
    right:0;
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