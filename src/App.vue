<style lang="scss">
  .router-rootDirectory{
    padding-top: 60px;
  }
</style>
<template>
  <div id="app">
    <!-- <navigation></navigation> -->
    <inspire-nav></inspire-nav>
    <div class="router-rootDirectory">
      <router-view></router-view>
    </div>
    <contrast-page></contrast-page>
  </div>
</template>

<script>
import Navigation from './components/navigation'
import InspireNav from './components/inspire-nav'
import ContrastPage from './components/contrastPage'
import { mapActions } from 'vuex'

export default {
  components: {
    Navigation,
    ContrastPage,
    InspireNav
  },
  computed: {
    ...mapActions([
      'category'
    ])
  },
  mounted () {
    this.$nextTick(() => {
      this.category
    })
  }
}
</script>

