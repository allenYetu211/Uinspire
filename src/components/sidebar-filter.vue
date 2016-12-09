<template>
<div 
class="sidebar-filter gl-bgcolor-white" 
:class="{open : inspirtnavsidebarOpenClose}">
    <div class="category clearfix">
        <h2 class="gl-size-20">Category</h2>
        <div 
        class="gl-col-12 category-list" 
        v-for="(item, index) in categoryDate">
            <input 
            @click="_sendfiltercategory" 
            :data-filterindex='index' 
            type="checkbox" 
            :id="'sidebar-' + index">
            <i class="sprite_checkbox"></i>
            <label class="gl-size-16" :for="'sidebar-' + index">{{item}}</label>
        </div>
        <div class="tags">
            <h2 class="gl-size-20">Tags</h2>
        </div>
        <div class="color">
            <h2 class="gl-size-20">Color</h2>
        </div>
    </div>
</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'categoryDate',
      'inspirtnavsidebarOpenClose'
    ])
  },
  methods: {
    ...mapActions([
      'addfiltercategory',
      'lessfiltercategory'
    ]),
    _sendfiltercategory (el) {
      if (el.target.checked) {
        this.addfiltercategory(el.target.dataset.filterindex)
      } else {
        this.lessfiltercategory(el.target.dataset.filterindex)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-filter{
  position:fixed;
  z-index: 998;
  top: 60px;
  bottom: 0;
  width: 350px;
  border-right: 1px solid #e0e0e0;
  padding: 30px 15px;
  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out;
  &.open{
    transform: translateX(0%);
  }
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
        position:relative;
      }
    input {
      opacity: 0;
      width:15px;
      height:15px;
      & + i{  
            position: absolute;
            z-index:-1;
            left: 0px;
            top: 0px;
            display: block;
            width: 20px;
            height: 20px;
            background:url('../assets/svg_sprite.svg')no-repeat;
            &.sprite_checkbox{
              background-position: -140px -120px;
            }
          }
      &:checked + i{
          background-position: -120px -120px;
        }  
    }
    label {
      // padding-left: 25px;
    }
  }
}
</style>
