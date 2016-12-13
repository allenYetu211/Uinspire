<template>
  <li>
    <img :src="ins.url">
    <button @click="showcolsemoodbarod">X</button>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['ins', 'index'],
  computed: {
    ...mapGetters([
      'showcolsemood'
    ])
  },
  methods: {
    ...mapActions([
      'showcolsemoodbarod'
    ])
  }
}
</script>

<style lang="scss" scoped>
  li{ 
    width: calc( 100% / 6 - 20px);
    display: inline-block;
    margin: 5px 10px;
    position: relative;
    img{
      width: 100%;
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
</style>