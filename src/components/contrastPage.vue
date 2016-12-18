
<template>
<div class="comtrast-poups">
    <div :style="{transitionDelay: upDelay}" class="comtrast" :class="{open: comtrastpopup}">
        <template v-if="!filmslidestate">
            <div class="close">
                <button @click="comtrastOpenCount"><i class="sprite_close"></i></button>
            </div>
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
                        @before-enter="beforeEnter">
                            <!-- :style="{animationDelay: trans_dalay}" -->
                            <img v-show="comtrastpopup" :data-index="index" :src="itms" alt="">
                        </transition>
                    </li>
                </ul>
            </div>
        </template>
        <template v-else>
            <div class="close">
                <button @click="comtrastopen"><i class="sprite_close"></i></button>
            </div>
            <ul class="films-parent clearfix" :style="filmswidth">
                <li v-for="(itmes,index) in showDataList" class="films-li" :class="{action: actionindex === index}">
                    <img :src="itmes.url">
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
        <button class="screen gl-fb gl-size-16" @click="comtrastOpenCount">
            <i class="sprite_screen"></i> FullScreen
        </button>
        <button class="download gl-fb gl-size-16">
            <i class="sprite_download"></i> Add Board
        </button>
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
      'actionindex',
      'uinspireioDate'
    ])
  },
  updated () {
    let lateLi = document.querySelectorAll('li.films-li')
    this.transformUpdata(lateLi, this.actionindex)
  },
  beforeUpdate () {
    // console.log('next:' + this.actionindex)
    // this.transformUpdata()
    // let lateLi = document.querySelectorAll('li.films-li')
    // console.log(lateLi)
  },
  methods: {
    ...mapActions([
      'comtrast',
      'comtrastopen',
      'addfilmsilde',
      'lessfilmsilde'
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
      let delay = el.dataset.index * 40
      el.style.animationDelay = delay + 'ms'
    },
    _prev () {
      let lateLi = document.querySelectorAll('li.films-li')
      if (this.actionindex <= 0) {
        return
      }
      this.lessfilmsilde()
      this.transformUpdata(lateLi, this.actionindex)
    },
    _next () {
      let lateLi = document.querySelectorAll('li.films-li')
      if (this.actionindex >= lateLi.length - 1) {
        return
      }
      this.addfilmsilde()
      this.transformUpdata(lateLi, this.actionindex)
    },
    transformUpdata (arrays, _late) {
      let count = _late = _late - 1
      let tlate = -count * 100
      for (let i = 0; i < arrays.length; i++) {
        arrays[i].style.webkitTransform = 'translateX(' + tlate + '%)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comtrast-poups{
  position:relative;
}
.screenDownload{
      position:fixed;
      bottom: 0;
      left: 0;
      right:0;
      z-index:997;
      display:flex;
      justify-content: center;
      align-itmes:center;
      padding:0;
      background:rgba(255,255,255,.99);
      // box-shadow: 0px -2px 14px 0px rgba(0,0,0,0.09);
      border-top:1px solid #eee;
      transform:translateY(100%);
      transition:transform 0.3s;
      &.open{
        transform:translateY(0);
      }
      button{
        margin: 0;
        padding:20px 30px;
        height:60px;
        border:0px solid #222;
        background: linear-gradient(-180deg, #FFFFFF 0%, #FFFFFF 100%);
        transition: all 0.3s;
        border-right:1px solid #eee;
        &:first-child{
          border-left:1px solid #eee;
        }
        i{
          margin-top:-2px;
        }
        i.sprite_screen{
          display:inline-block;
          width:20px;
          height:20px;
          background:url('../assets/svg_sprite.svg')no-repeat;
          background-position:-5px -125px;
          margin-right:10px;
          vertical-align:middle;
        }
        i.sprite_download{
          @extend i.sprite_screen;
          background-position:-65px -125px;
        }
        &:hover {
          background: linear-gradient(-180deg, #FDFDFD 0%, #F3F3F3 98%);
        }
      }
    }
.comtrast{
  position: fixed;
  top:0;
  right:0;
  left: 0;
  bottom:0px;
  z-index:1000;
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
        background:url('../assets/svg_sprite.svg');
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
          background:url('../assets/svg_sprite.svg')no-repeat;
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
    transition: transform 0.5s, opacity 0.5s;
    opacity: 0.5;
        &.action{
          opacity: 1;
        }
        img{
          max-width:80%;
          vertical-align:middle;
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
      background:url('../assets/svg_sprite.svg')no-repeat;
      &.sprite_next{
        background-position: -35px 0;
      }
    }
    .sprite_prev{
      position:0;
    }
}
 
</style>
