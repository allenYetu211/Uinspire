<style lang="scss" scoped>
  .imagesShow{
    padding:15px 15px 80px;
    background: #fafafa;
    ul{
        margin: 0;
        position:relative;
        min-width:1440px;
      }
}
</style>
<template>
  <div class="router">
<!--   <button @click="_changeshowlist"> 6 -> 9</button>
  <button @click="_changeshowlist2"> 9 -> 6</button> -->
    <div class="imagesShow">
      <ul id='inspire-view-list' class=" clearfix">
          <!-- <transition> -->
            <inspire-view-list  v-for="(itms, index) in uinspireioDate" :key="index" :itmes="itms" :index="index"></inspire-view-list>
          <!-- </transition> -->
      </ul>
    </div>
      <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
      <app-collection v-show="collectionPopup" :class="{open: collectionPopup}"></app-collection>
    </transition>
  </div>
</template>

<script>
import InspireViewList from './inspire-view-list'
import AppCollection from './app-collection'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    InspireViewList,
    AppCollection
  },
  data () {
    return {
      styleObject: {
        width: '',
        left: ''
      },
      showlist: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this._change()
      this.uinspireio()
    })
  },
  computed: {
    ...mapGetters([
      'infor',
      'uinspireioDate',
      'collectionPopup'
    ])
  },
  methods: {
    ...mapActions([
      'inspirtnavsidebar',
      'listArrange',
      'listArrangetwo',
      'sidebarright',
      'uinspireio'
    ]),
    _change (_showcount = 6, scale = 0.28) {
      let listParents = document.querySelector('#inspire-view-list')
      let listchilren = listParents.getElementsByTagName('li')
      let countArray = []
      let maxWidth = window.innerWidth / _showcount - 20
      let height = window.innerWidth * scale
      console.log(window.innerWidth * 0.28)
      let count = -1
      maxWidth = parseInt(maxWidth)
      for (let i = 0; i < listchilren.length; i++) {
        if (i % _showcount === 0) {
          count++
          countArray = []
          countArray.push(i % _showcount)
          listchilren[i].style.width = maxWidth + 'px'
          listchilren[i].style.top = count * (height + 5) + 'px'
          listchilren[i].style.left = 0 + 'px'
          listchilren[i].style.transition = 'opacity ' + (i % _showcount) * 10 + 'ms'
        } else if (i % _showcount < _showcount) {
          countArray.push(i % _showcount)
          listchilren[i].style.width = maxWidth + 'px'
          listchilren[i].style.left = maxWidth * (i % _showcount) + 12 * (i % _showcount) + 'px'
          listchilren[i].style.top = count * (height + 5) + 'px'
          listchilren[i].style.transition = 'opacity ' + (i % _showcount) * 10 + 'ms'
        }
      }
      listParents.style.height = height * (count + 1) + 'px'
    },
    _changeshowlist () {
      this.listArrangetwo()
      this._change(9, 0.177)
    },
    _changeshowlist2 () {
      this.listArrange()
      this._change(6, 0.28)
    }
  }
}
</script>
