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
        {url: '../../static/img1.jpg'},
        {url: '../../static/img2.jpg'},
        {url: '../../static/img3.jpg'},
        {url: '../../static/img4.jpg'},
        {url: '../../static/img5.jpg'},
        {url: '../../static/img6.jpg'},
        {url: '../../static/img7.jpg'},
        {url: '../../static/img8.jpg'},
        {url: '../../static/img9.jpg'},
        {url: '../../static/img10.jpg'},
        {url: '../../static/img11.jpg'},
        {url: '../../static/img12.jpg'}
      ]
    }
  }
}
</script>
