<style lang="scss">
  .imagesShow{
    ul{
        margin: 0;
      }
}
</style>
<template>
  <div class="router">
    <div class="imagesShow">
      <ul>
        <inspire-view-list v-for="itms in infor" :itmes="itms"></inspire-view-list>
      </ul>
    </div>
  </div>
</template>

<script>
import InspireViewList from './inspire-view-list'

export default {
  components: {
    InspireViewList
  },
  data () {
    return {
      infor: [
        {url: '../../static/Rectangle.jpg'},
        {url: '../../static/Rectangle.jpg'},
        {url: '../../static/Rectangle.jpg'},
        {url: '../../static/Rectangle.jpg'},
        {url: '../../static/Rectangle.jpg'}
      ]
    }
  }
}
</script>
