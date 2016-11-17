<style lang="scss" scoped>
  .category-checkbox{
  float: left;
  width: 25%;
  margin-bottom:15px;
  position:relative;
  font-size:12px;
  input{
    opacity: 0;
  }
  label{
    line-height:20px;
    padding-left:25px;
  }
  &.active{
    i.sprite_checkbox{
      background-position: -120px -120px;
    }
  }
  i{  
    position: absolute;
    z-index:-1;
    left: -3px;
    top: 0;
    display: block;
    width: 20px;
    height: 20px;
    background: url(/static/img/css_sprite.db7a9a8.png) no-repeat;
    &.sprite_checkbox{
      background-position: -140px -120px;
    }
  }
}
</style>

<template>
  <div class="category-checkbox" :class="{active: categoryActive}">

      <input :value="ck.infor" v-model="checkedNames" @change="checkChange" :id="'ckcategory' + index + ins " style="display:none"  type="checkbox" name="">
      <i class="sprite_checkbox"></i>
      <label  @click.stop="_categoryActive" :for="'ckcategory' + index + ins " >{{ck.infor}}</label>
  </div>
</template>

<script>
export default {
  props: ['checkedList', 'ins', 'ck', 'index'],
  data () {
    return {
      categoryActive: false,
      checkedNames: []
    }
  },
  methods: {
    _categoryActive () {
      this.categoryActive = !this.categoryActive
      console.log(this.categoryActive)
    },
    checkChange () {
      this.$emit('change', {name: this.ck.infor, checked: this.checkedNames.length === 1})
    }
  }
}
</script>
