<style lang="scss" scoped>
  .comtrast-poups{
    position:relative;
  }
  .screenDownload{
        position:fixed;
        bottom: 0;
        left: 0;
        right:0;
        z-index:999;
        display:flex;
        justify-content: center;
        align-itmes:center;
        padding:10px 0;
        background:rgba(255,255,255,.99);
        box-shadow: 0px -2px 14px 0px rgba(0,0,0,0.09);
        transform:translateY(100%);
        transition:transform 0.3s;
        &.open{
          transform:translateY(0);
        }
        button{
          margin: 0 20px;
          padding:5px 20px;
          border-radius:50px;
          border:1px solid #222;
          background:transparent;
          transition:background-color 0.5s, border-color 0.3s;
          i.sprite_screen{
            display:inline-block;
            width:20px;
            height:20px;
            background:url('../../static/css_sprite.png')no-repeat;
            background-position:-95px -95px;
            margin-right:10px;
            vertical-align:middle;
          }
          i.sprite_download{
            @extend i.sprite_screen;
            background-position:-125px -95px;
          }
          &:hover {
            background-color:#FFFF00;
            border-color:transparent;
          }
        }
      }
  .comtrast{
    position: fixed;
    top:0;
    right:0;
    left: 0;
    bottom:0px;
    z-index:998;
    background-color:rgba(255,255,255,.97);
    transform:translate3d(0, -100%, 0);
    transition:transform 0.5s;
    .close{
      position:absolute;
      right: 15px;
      top:15px;
      opacity:1;
      z-index:999;
      button{
        border-color:transparent;
        background-color: transparent;
        i.sprite_close{
          display:block;
          width:30px;
          height:30px;
          background:url('../../static/css_sprite.png');
          background-position:-5px -55px;
        }
      }
    }
    &.open{
      transform:translate3d(0,0,0);
    }
    &-popup{
      width:100%;
      height:100%;
      &-ul{
        width:100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
      &-li{
        margin: 10px;
        text-align: center;
        position:relative;
        img{
          width:100%;
          vertical-align: middle;
          box-shadow: 0 2px 18px 0 rgba(0,0,0,0.25);
        }
        &:hover .delete{
          opacity: 1;
        }
        .delete{
          position:absolute;
          width:1.5rem;
          height:1.5rem;
          right:-10px;
          top:-10px;
          border:none;
          border-radius:50%;
          background-color:#fff;
          box-shadow: 0 2px 4px 0 rgba(0,0,0,0.15);
          opacity:0;
          transition: opacity 0.5s;
          padding:0;
          i.sprite_delete{
            display:block;
            width:20px;
            height:20px;
            background:url('../../static/css_sprite.png')no-repeat;
            background-position:-58px -120px;
          }
        }
      }
    }
  }
  .films-parent{
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    padding: 50px 0;
    position:relative;
    text-align:center;
     .films-li{
      display: inline-block;
      width:33.333333%;
      padding:20px 50px;
      &.action{
        img{
          opacity: 1;
        }
      }
    img{
      opacity: 0.5;
      max-width:80%;
      vertical-align:middle;
      transition: opacity 0.5s;
    }
  }
}
.arrow{
  button{
    background:transparent;
    border:none;
  }
    &-prev,&-next{
    position: absolute;
    top:45%;
    z-index:999;
    transform:translateY(-50%);
    }
    &-prev{
      left:33%;
    }
    &-next{
      right:33%;
    }
    i{
      display:inline-block;
      width:25px;
      height:50px;
      background:url('../../static/css_sprite.png')no-repeat;
      &.sprite_next{
        background-position: -35px 0;
      }
    }
    .sprite_prev{
      position:0;
    }
}
 
</style>
<template>
<div class="comtrast-poups">

  <div :style="{transitionDelay: upDelay}"
   class="comtrast"
   :class="{open: comtrastpopup}"
   >
    <template v-if="!filmslidestate">
      <div class="close"> <button @click="comtrastOpenCount"><i class="sprite_close"></i></button> </div>
          <div class="comtrast-popup">
            <ul class="comtrast-popup-ul">
              <li :style="{width:mathWidth}" class="comtrast-popup-li" v-for="(itms, index) in contrastins">
                <button class="delete">
                  <i class="sprite_delete"></i>
                </button>
                <transition
                  name="custom-classes-transition"
                  enter-active-class="animated slideInDown"
                  leave-active-class="animated slideOutUp"
                  @before-enter= "beforeEnter"
                  > 
                   <!-- :style="{animationDelay: trans_dalay}" -->
                  <img v-show="comtrastpopup"
                   :data-index="index"
                   :src="itms" alt="">
                </transition>

              </li>
            </ul>
          </div>
    </template>
        
    <template  v-else>
        
        <div class="close"> 
          <button @click="comtrastopen"><i class="sprite_close"></i></button> 
        </div>
          <ul class="films-parent clearfix" :style="filmswidth">
            <li v-for="(itmes,index) in showDataList" class="films-li" 
            :class="{action: actionindex === index}">
              <img :src="itmes.url" >
            </li>
            <div class="arrow">
            <div class="arrow-prev">
                <button @click="_prev"><i class="sprite_prev"></i></button>
            </div>
            <div class="arrow-next">
                <button @click="_next"><i class="sprite_next"></i></button>
            </div>
        </div>
          </ul>
      </template>

  </div>
  <div class="screenDownload" :class="{open : addlessstate}">
        <button class="screen" @click="comtrastOpenCount">
        <i class="sprite_screen"></i>
        Ful-screen</button>
        <button class="download">
        <i class="sprite_download"></i>
        Download</button>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      mathWidth: '',
      upDelay: '',
      filmswidth: ''
    }
  },
  watch: {
  },
  computed: {
    ...mapGetters([
      'comtrastpopup',
      'contrastins',
      'likecount',
      'addlessstate',
      'filmslidestate',
      'showDataList',
      'actionindex'
    ])
  },
  mounted () {
    this.$nextTick(function () {
      console.log('next:' + this.actionindex)
    })
  },
  beforeUpdate () {
    console.log('next:' + this.actionindex)
  },
  methods: {
    ...mapActions([
      'comtrast',
      'comtrastopen'
    ]),
    comtrastOpenCount () {
      this.comtrast()
      if (this.likecount === 1 || 2 || 3) {
        this.mathWidth = '25%'
      } else {
        this.mathWidth = 'calc(100% / ' + this.likecount + ' + 20px)'
      }
      if (this.comtrastpopup !== true) {
        this.upDelay = '240ms'
      } else {
        this.upDelay = '0ms'
      }
    },
    beforeEnter (el) {
      var delay = el.dataset.index * 40
      el.style.animationDelay = delay + 'ms'
    },
    _prev () {
    },
    _next () {
    }
  }
}
</script>
