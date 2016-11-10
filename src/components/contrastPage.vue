<style lang="scss">
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
      button{
        border:1px solid #222;
        background-color: transparent;
        border-radius:50%;
        width:25px;
        height:25px;
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
        }
      }
    }
  }
</style>
<template>
<div class="comtrast-poups">

  <div :style="{transitionDelay: upDelay}" class="comtrast"
   :class="{open: comtrastpopup}"
   >
      <div class="close"> <button @click="comtrastOpenCount"></button> </div>
      <div class="comtrast-popup">
        <ul class="comtrast-popup-ul">
          <li :style="{width:mathWidth}" class="comtrast-popup-li" v-for="(itms, index) in contrastins">
            <button class="delete">
              X
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
  </div>
  <div class="screenDownload" :class="{open : addlessstate}">
        <button class="screen" @click="comtrastOpenCount">Ful-screen</button>
        <button class="download">Download</button>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      mathWidth: '',
      upDelay: ''
    }
  },
  watch: {
  },
  computed: {
    ...mapGetters([
      'comtrastpopup',
      'contrastins',
      'likecount',
      'addlessstate'
    ])
  },
  methods: {
    ...mapActions([
      'comtrast'
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
    beforeEnter: function (el) {
      var delay = el.dataset.index * 40
      el.style.animationDelay = delay + 'ms'
    }
  }
}
</script>
