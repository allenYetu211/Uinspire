<style lang="scss">
  .imagesShow{
    padding:20px 20px 80px;
    ul{
        margin: 0;
      }
}
</style>
<template>
  <div class="router">
    <div class="imagesShow">
      <ul class="clearfix">
        <inspire-view-list v-for="(itms, index) in infor" :itmes="itms" :index="index"></inspire-view-list>
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
