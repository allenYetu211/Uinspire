<style lang="scss" scoped>
  span{
    display:inline-block;
    height:8px;
    width: 30px;
    margin:10px;
  }
</style>
<template>
      <!-- <span  :style="color.cs"></span> -->
      <span  :style="seeColor"></span>
      <!-- <span  :style="{'color': `color.cs`}"></span> -->
</template>
<script>
export default {
  props: ['color'],
  data () {
    return {
      seeColor: {
        'background-color': this.color.cs
      }
    }
  }
}
</script>