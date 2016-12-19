<template>
  <div class="app-collection gl-bgcolor-white">
    
  </div>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions([
    ])
  },
  computed: {
    ...mapGetters([
    ])
  }
}
</script>

<style lang="scss">
.app-collection{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}
</style>