<template>
  <li>
    <img :src="ins.url">
    <button>X</button>
  </li>
</template>

<script>
export default {
  props: ['ins', 'index']
}
</script>

<style lang="scss">
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