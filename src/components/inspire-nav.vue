<template>
<div>
    <div class="inspirt-nav gl-bgcolor-white">
        <div class="inspirt-nav-l">
            <div class="inspirt-nav-sidebar inspirt-nav-fliter">
                <button @click="_inrouters">
                    <span class="sprite_filter"></span>
                </button>
            </div>
            <div class="inspirt-nav-search">
                <i class="sprite_search" v-show="rollUpdata"></i>
                <i class="sprite_filter" v-show="!rollUpdata" @click="_goBackHomePage"></i>
                <input 
                v-model="searchChange" 
                @keyup.enter = '_searchChange'
                @change="_searchChange"
                type="text" 
                placeholder="Search for inspire" 
                class="gl-size-18 gl-fn">
                
                <div class="search-popup" :class="{'search-open' : search}">
                  <ul>
                    <li @click="_searchChange" v-for="ifor in searchList">

                      <div class="search-logo">
                        <img :src="ifor.icon_link" alt="">
                      </div>

                      <div class="search-name">
                        {{ifor.name}}
                      </div>

                      <div class="serach-terminal">
                        {{ifor.platform}}
                      </div>

                    </li>
                  </ul>
                  <div class="serach-null" v-show="searchNull">
                    SEARCH IS NULL
                  </div>
                </div>
            </div>
        </div>
        <div class="logo gl-size-24 gl-fb"><router-link class="gl-ftcolor-black" :to= "{name: 'inspire'}" ><span class="gl-ftcolor-theme">UI</span>nspire.io<i class="gl-fb">β</i></router-link></div>
        <div class="inspirt-nav-r">

        <!-- 不要动我！！！！ -->
<!--             <div class="inspirt-nav-layout">
                <button @click="listArrange">
                    <i class="sprite_view-1 sprite_theme" :class="{open: !listArrangestate}"></i>
                </button>
                <button @click="listArrangetwo">
                    <i class="sprite_view-2 sprite_switch" :class="{open: listArrangestate}"></i>
                </button>
            </div> -->
        <!-- 不要动我！！！！ -->
        
            <div class="inspirt-nav-sidebar inspirt-nav-personal-infoamtion" @click="whetherthelogin">
                <i class="sprite_login"></i>
            </div>
        </div>
    </div>
    <!-- 左侧边栏 -->
    <side-bar-filter></side-bar-filter>

    <!-- 右侧边栏 -->
    <side-bar-infor-mation></side-bar-infor-mation>

    <!-- 登录窗口 -->

      <div v-if="loginSidebar">
        <login-logon></login-logon>
      </div>
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
      category: [],
      searchChange: '',
      search: false
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
      'categoryDate',
      'whetherthelogins',
      'loginSidebar',
      'searchList',
      'searchNull',
      'rollUpdata'
    ])
  },
  methods: {
    ...mapActions([
      'inspirtnavsidebar',
      'listArrange',
      'listArrangetwo',
      'sidebarright',
      'sidebarleft',
      'whetherthelogin',
      'searchinformation',
      'rollupdata',
      'scrollupdata'
    ]),
    _goBackHomePage () {
      this.searchChange = ''
      this.rollupdata()
      this.scrollupdata()
    },
    _inrouters () {
      if (this.$route.name === 'inspire') {
        this.sidebarleft()
      }
    },
    _searchChange (el) {
      let searchData = ''
      if (el.target.nodeName.toLowerCase() === 'li') {
        this.search = false
        this.rollupdata()
        this.searchChange = el.target.childNodes[2].innerText
        searchData = {
          wd: '',
          title: encodeURIComponent(el.target.childNodes[2].innerText),
          target: 'li'
        }
      } else {
        this.search = true
        searchData = {
          wd: this.searchChange,
          title: '',
          target: 'other'
        }
      }
      this.searchinformation(searchData)
    }
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
    border-bottom: 1px solid #eee;
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
      a{
        text-decoration: none;
      }
      i{
        font-style: normal;
        font-size: 10px;
        position: absolute;
        top: -6px;
        right: -9px;
        color: #dcdcdc;
      }
    }
    .inspirt-nav-sidebar{
      width:60px;
      height:60px;
    }
    .inspirt-nav-r{
        float:right;
        .inspirt-nav-layout{
          border-left: 1px solid #eee;
          padding-left: 10px;
        }
        .inspirt-nav-personal-infoamtion{
          border-left: 1px solid #eee;
          margin-left: 20px;
        }
      }
    .inspirt-nav-l{
      float:left;
      .inspirt-nav-fliter{
          border-right: 1px solid #eee;
          margin-right: 12px;
      }
    }
    .inspirt-nav-l,
    .inspirt-nav-r{
      & > div{
        float:left;
      }
    }
    .inspirt-nav-search{
      position: relative;
      input {
        min-width:300px;
        border:none;
        height:60px;
        margin-left: 10px;
        background-color:transparent;
        &::-webkit-input-placeholder{
          color:#dcdcdc;
          font-size:18px;
        }
      }
      .search-popup{
        position: absolute;
        z-index: -1;
        left: -13px;
        right: 0;
        top: 60px;
        height: 200px;
        overflow-y: auto;
        text-align: left;
        background-color:#fff;
        opacity: 0;
        border: 1px solid transparent;
        border-top: none;
        display: none;
        // transform: translateY(-100%);
        transition: transform 0.5s, opacity 0.5s;
        padding: 0 20px;
        &.search-open{
          display: block;
          // transform: translateY(0%);
          opacity: 1;
          border-color: #eee;
        }
        .serach-null{
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        li {
          display: flex;
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #eee;
          
          div {
            pointer-events: none;
            &:nth-child(1){
              flex: 1;
              padding: 2px;
              img {
                width: 100%;
              }
            }
            &:nth-child(2){
              width: 75%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            &:nth-child(3){
              flex: 1;
            }
          }
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