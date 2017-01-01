<template>
<div>
    <transition name="sidebar-left">
        <div 
        class="sidebar-filter gl-bgcolor-white" 
        :class="{open : inspirtnavsidebarOpenClose}"
         v-show="sidebarleftopenclose">
            <div class="category clearfix">
                <h2 class="gl-size-20 gl-fb">Category</h2>
                <div 
                class="gl-col-12 category-list" 
                v-for="(item, index) in categoryDate.data">
                    <input 
                    @click="_sendfiltercategory" 
                    :data-filterindex='index' 
                    type="checkbox" 
                    :id="'sidebar-' + index">
                    <i class="sprite_checkbox"></i>
                    <label class="gl-size-14" :for="'sidebar-' + index">{{item.name_en}}</label>
                </div>
            </div>
            <div class="tags">
                <h2 class="gl-size-20 gl-fb">Tags</h2>
            </div>
            <div class="color">
                <h2 class="gl-size-20 gl-fb">Color</h2>
            </div>
        </div>
      </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'categoryDate',
      'inspirtnavsidebarOpenClose',
      'sidebarleftopenclose'
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
.sprite_filter-ico {
    display:inline-block;
    background:url('../assets/svg_sprite.svg') no-repeat;
    width:20px;
    height:20px;
    vertical-align: -10px;
  }

.sidebar-filter{
  position:fixed;
  z-index: 998;
  top: 60px;
  bottom: 0;
  width: 370px;
  border-right: 1px solid #eee;
  padding: 30px 15px;
  // transform: translateX(-100%);
  // transition: transform 0.5s ease-in-out;
  &.open{
    transform: translateX(-20px);
  }
  .category,
  .tags,
  .color{
    padding-bottom:30px;
    h2{
      padding-bottom: 20px;
      font-weight: normal;
    }
  }
  .category{
    .category-list{
        padding-bottom: 20px;
        position:relative;
        padding-left:0px;
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

            @extend .sprite_filter-ico;
            &.sprite_checkbox{
              background-position: -140px -150px;
            }
          }
      &:checked + i{
          background-position: -120px -150px;
        }
      &:checked ~ label{
          color: #222;
      }
    }
    label {
      // padding-left: 25px;
      color: #bbb;
    }
  }
}
</style>
