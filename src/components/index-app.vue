<template>
<div class="indexparents">

    <div v-if="loading" class="loading">
      Loading...
    </div>

    <!-- <div v-if="error" class="error"> -->
      <!-- {{ error }} -->
    <!-- </div> -->

    <div v-if="!loading && post" class="indexApp" >
        <div class="app-border-line app-header">
            <div class="app-container clearfix">
                <div class="app-informations">
                    <div class="app-infor-left">
                        <div class="app-logo">
                            <img :src="indexData.lastest_app_info.icon_link">
                        </div>
                        <div class="app-about">
                            <p class="gl-fb">{{indexData.lastest_app_info.name}}</p>
                            <div>
                                <a type="button" class="gl-ftcolor-gray" :href="indexData.lastest_app_info.link">
                                  <i class="sprite_Appstore"></i>View in Appstore
                                </a>
                                <a type="button" class="gl-ftcolor-gray" :href="indexData.lastest_app_info.link">
                                  <i class="sprite_Download"></i>Download
                                  <!-- <img src="http://bshare.optimix.asia/barCode?site=weixin&amp;url={{indexData.lastest_app_info.link}}" alt=""> -->
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="app-infor-right">
                        <p><span class="gl-fb">Developer : </span>{{indexData.lastest_app_info.developer}}</p>
                        <p><span class="gl-fb">Category : </span>{{indexData.lastest_app_info.app_category}}</p>
                        <p><span class="gl-fb">Lastest Version : </span>{{indexData.lastest_app_info.version}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="app-version">
            <div class="app-version-introduce app-border-line" v-for="iap in indexData.app_list_info">
                <div class="app-version-information gl-ftcolor-black">Version {{iap.version}}</div>
                <div class="app-container clearfix">
                    <ul>
                       <transition-group
                        @before-enter="beforeEnter"
                         enter-active-class="animated cardAnimations cardAnimationsIn"
                         leave-active-class="animated cardAnimations cardAnimationsOut">
                        <li class="app-Images" :key="index" v-for="(introduce, index) in iap.data">
                            <div class="app-ImagesRouter" 
                            :style="{ background: 'hsl(' + introduce.hsl.h + ',' + introduce.hsl.s * 100 + '%' + ',' + introduce.hsl.l * 100 + '%)' }">
                              <img :src="introduce.img">
                            </div>
                            <p v-if="introduce.category">{{introduce.category[0]}}</p>
                            
                        </li>
                        </transition-group>
                    </ul>
                </div>

                <div class="app-version-count gl-ftcolor-gray">{{iap.data.length}} screenshot</div>
            </div>

        </div>
    </div>

</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  data () {
    return {
      indexData: null,
      cardCount: 0,
      loading: true,
      post: false
    }
  },
  // beforeRouteEnter (to, from, next) {
  //   axios.get('http://uinspire.io/api/inspire/uniqueappinfo', {
  //     params: {
  //       app_id: to.params.appid
  //     }
  //   }).then((response) => {
  //     // this.indexData = response.data.data
  //     // console.log(this.indexData)
  //     next(vm => {
  //       console.log(response.data.data)
  //       vm.indexData = response.data.data
  //     })
  //   })
  // },
  watch: {
    // $router () {
    //   this.indexData = null
    //   axios.get('http://uinspire.io/api/inspire/uniqueappinfo', {
    //     params: {
    //       app_id: this.$route.params.appid
    //     }
    //   }).then((response) => {
    //     this.indexData = response.data.data
    //   })
    // }
    '$router': 'fetchData'
  },
  created () {
    this.fetchData()
  },
  computed: {
    ...mapGetters([
    ])
  },
  methods: {
    ...mapActions([
      'getapppagedata'
    ]),
    fetchData () {
      axios.get('http://uinspire.io/api/inspire/uniqueappinfo', {
        params: {
          app_id: this.$route.params.appid
        }
      }).then((response) => {
        this.indexData = response.data.data
        console.log('this.indexData:', this.indexData)
        this.loading = false
        this.post = true
      }).catch((error) => {
        console.log(error)
      })
    },
    addCount () {
      if (this.cardCount > 71) {
        this.cardCount = 0
      }
      this.cardCount++
    },
    beforeEnter (el) {
      this.addCount()
      let delay = this.cardCount * 200
      el.style.animationDelay = delay + 'ms'
    }
  }
}
</script>

<style lang="scss">
.sprite_index-app{
    display:inline-block;
    background:url('../assets/svg_sprite.svg') no-repeat;
    width:20px;
    height:20px;
    vertical-align: middle;
    margin-right: 5px;
}
.sprite_Appstore{
  @extend .sprite_index-app;
  background-position: -180px -151px;
}
.sprite_Download{
  @extend .sprite_index-app;
  background-position: -160px -150px;
}
    .app-container{
      width: 980px;
      margin: 0 auto;
      padding: 25px 0 20px;
      position: relative;
      .app-Images{
        .app-ImagesRouter{
          border-radius: 2px;
          overflow: hidden;
          transition: transform .25s, box-shadow .25s;
          box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
          height: 0;
          padding-bottom: 177.7%;
          &:hover{
            box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.12);
          }
        }
      }
    }
  .indexApp{
    .app-header{
      background: #fafafa;
    }
    .app-border-line{
      border-bottom: 1px solid #eee;
    }
    .app-informations{
      width: 100%;
      height: 85px;
      padding: 0 10px;
      display: flex;
      img{
        width: 80px;
        height: 80px;
        vertical-align: middle;
      }
      .app-infor-left{
          float: left;
          flex: 3;
          .app-logo img{
            border-radius:22%;
            box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
          }
          .app-about{
            padding: 0 20px;
            width: 75%;
            a{
              background-color: transparent;
              text-decoration: none;
              border: none;
              font-size: 14px;
              cursor:pointer;
              padding:0;
              margin-right:10px;
            }
            p{
              font-size: 20px;
              line-height: 26px;
              height:50px;
              overflow: hidden;
            }
            div{
              margin-top: 10px;

            }
          }
        div{
          float: left;

        }
      }
      .app-infor-right{
        flex: 2;
        float: right;
        font-size: 14px;
        p{
          margin-bottom: 2px;
          line-height: 1.8;
        }
      }
    }
    .app-version-introduce{
      position: relative;
      li{
        width: calc(100% / 4 - 20px);
        display:inline-block;
        margin: 0px 10px 20px;
        p{
          text-align: center;
          padding: 12px 0;
          font-size: 12px;
        }
        img{
          width: 100%;
        }
      }
      .app-version-information{
        position: absolute;
        left: 20px;
        top: 25px;
        font-size: 16px;
      }
      .app-version-count{
        position: absolute;
        right: 20px;
        top: 25px;
        font-size:14px;
      }
    }
  }
</style>