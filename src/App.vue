<style lang="scss"></style>
<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <contrast-page></contrast-page>
  </div>
</template>

<script>
import Navigation from './components/navigation'
import ContrastPage from './components/contrastPage'

export default {
  components: {
    Navigation,
    ContrastPage
  },
  computed: {
  },
  methods: {
  }
}
</script>

