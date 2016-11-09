<style lang="scss">
    #app{
      position: relative;
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
    }
</style>
<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <contrast-page></contrast-page>
    <div class="screenDownload" :class="{open : addlessstate}">
        <button class="screen" @click="comtrast">Ful-screen</button>
        <button class="download">Download</button>
    </div>
  </div>
</template>

<script>
import Navigation from './components/navigation'
import ContrastPage from './components/contrastPage'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Navigation,
    ContrastPage
  },
  computed: {
    ...mapGetters([
      'addlessstate',
      'comtrastpopup'
    ])
  },
  methods: {
    ...mapActions([
      'comtrast'
    ])
  }
}
</script>

