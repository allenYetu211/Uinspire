<template>
  <div class="sidebar-filter gl-bgcolor-white">
      <div class="category clearfix">
        <h2 class="gl-size-20">Category</h2>
        <div class="gl-col-12 category-list" v-for="(itme, index) in categoryDate">
          <input type="checkbox" :id="'sidebar-' + index">
          <label class="gl-size-16" :for="'sidebar-' + index">{{itme}}</label>
        </div>
      </div>

      <div class="tags">
        <h2 class="gl-size-20">Tags</h2>
      </div>

      <div class="color">
        <h2 class="gl-size-20">Color</h2>
        
      </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'categoryDate'
    ])
  }
}
</script>

<style lang="scss">
.sidebar-filter{
  position:fixed;
  z-index: 1000;
  top: 60px;
  bottom: 0;
  width: 350px;
  border-right: 1px solid #e0e0e0;
  padding: 30px 15px;
  .category,
  .tags,
  .color{
    padding-bottom:60px;
    h2{
      padding-bottom: 20px;
    }
  }
  .category{
    .category-list{
        padding-bottom: 20px;
      }
    input {
      // opacity: 0;
    }
    label {
      // padding-left: 25px;
    }
  }
}
</style>
