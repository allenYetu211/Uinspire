<style lang="scss">
  
</style>
<template>
  <div id="app">
    <!-- <navigation></navigation> -->
    <inspire-nav></inspire-nav>
    <router-view></router-view>
    <contrast-page></contrast-page>
  </div>
</template>

<script>
import Navigation from './components/navigation'
import InspireNav from './components/inspire-nav'
import ContrastPage from './components/contrastPage'

export default {
  components: {
    Navigation,
    ContrastPage,
    InspireNav
  },
  computed: {
  },
  methods: {
  }
}
</script>

