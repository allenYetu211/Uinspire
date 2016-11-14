<template>
  <li :class="{active: navposIndex === index}">
    <button  @click="_titleAction">{{title.tle}}</button>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default{
  props: ['title', 'index'],
  data () {
    return {
      slide: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      let quert = document.querySelector('li')
      this.slide.left = quert.offsetLeft
      this.slide.width = quert.clientWidth
      this.slide.index = this.index
      this.navigationtitle(this.slide)
    })
  },
  computed: {
    ...mapGetters([
      'navposIndex'
    ])
  },
  methods: {
    ...mapActions([
      'navigationtitle'
    ]),
    _titleAction (el) {
      this.slide.left = el.target.parentNode.offsetLeft
      this.slide.width = el.target.parentNode.clientWidth
      this.slide.index = this.index
      this.navigationtitle(this.slide)
    }
  }
}
</script>
