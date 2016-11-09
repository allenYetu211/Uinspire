<style lang="scss">
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
    filter:blur(5px);
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
  }
</style>
<template>
  <div class="comtrast" :class="{open: comtrastpopup}">
      <div class="close"> <button @click="comtrast"></button> </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
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
