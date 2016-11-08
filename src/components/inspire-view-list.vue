<style lang="scss" scoped>

    li {
      float: left;
      width:16.66666%;
      height:0;
      padding-bottom:30%;
      padding-left: 10px;
      padding-right: 10px;
      background-color:#ccc;
      &.lists{
        width:11.111111%;
        padding-bottom:30%;
      }
    }
</style>
<template>
        <li :class="{lists: listArrangestate}">
          <img :src="itmes.url">
            <div class="imagesShow-paypal">
              <div class="imagesShow-paypal-py">
                  Paypal
              </div>
              <div class="imagesShow-paypal-fn">
                  <button></button>
                  <button></button>
                  <button></button>
              </div>
            </div>
          </li>
</template>
<script>
import { mapGetters } from 'vuex'

export default{
  props: ['itmes'],
  computed: {
    ...mapGetters([
      'listArrangestate'
    ])
  }
}
</script>
