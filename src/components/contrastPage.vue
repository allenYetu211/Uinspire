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
      }
      &-li{
        margin: 10px;
        text-align: center;
      }
    }
  }
</style>
<template>
<div class="comtrast-poups">
  <div class="comtrast" :class="{open: comtrastpopup}">
      <div class="close"> <button @click="comtrast"></button> </div>
      <div class="comtrast-popup">
        <ul class="comtrast-popup-ul">
          <li :style="{width:mathWidth}" class="comtrast-popup-li" v-for="itms in contrastins">
            <img :src="itms.conimg" alt="">
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
      stlyeWidth: {
        width: this.mathWidth
      }
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
      this.mathWidth = 'calc(100% / ' + this.likecount + ' + 20px)'
      console.log(this.mathWidth)
    }
  }
}
</script>
