<style lang="scss">
    #app{
      position: relative;
      .screenDownload{
        position:fixed;
        bottom: 0;
        left: 0;
        right:0;
        z-index:7;
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
          border:none;
          border-radius:50px;
          border:1px solid #222;
          background:transparent;
        }
      }
    }
</style>
<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <div class="screenDownload" :class="{open : addlessstate}">
        <button class="screen">Ful-screen</button>
        <button class="download">Download</button>
    </div>
  </div>
</template>

<script>
import Navigation from './components/navigation'
import { mapGetters } from 'vuex'

export default {
  components: {
    Navigation
  },
  computed: {
    ...mapGetters([
      'addlessstate'
    ])
  }
}
</script>

