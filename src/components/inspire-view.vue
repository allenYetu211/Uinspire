<style lang="scss" scoped>
  .imagesShow{
    padding:20px 20px 80px;
    ul{
        margin: 0;
        position:relative;
      }
}
</style>
<template>
  <div class="router">
  <button @click="_changeshowlist"> 6 -> 9</button>
  <button @click="_changeshowlist2"> 9 -> 6</button>
    <div class="imagesShow">
      <ul id='inspire-view-list' class=" clearfix">
          <inspire-view-list  v-for="(itms, index) in infor" :key="index" :itmes="itms" :index="index"></inspire-view-list>
      </ul>
    </div>
  </div>
</template>

<script>
import InspireViewList from './inspire-view-list'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    InspireViewList
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
      setTimeout(() => {
        this._change()
      }, 200)
    })
  },
  methods: {
    ...mapActions([
      'inspirtnavsidebar',
      'listArrange',
      'listArrangetwo',
      'sidebarright'
    ]),
    _change (_showcount = 6, scale = 0.28) {
      let listParents = document.querySelector('#inspire-view-list')
      let listchilren = listParents.getElementsByTagName('li')
      let countArray = []
      let maxWidth = window.innerWidth / _showcount - 20
      let height = window.innerWidth * scale
      // console.log(window.innerWidth * 0.28)
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
        } else if (i % _showcount < _showcount) {
          countArray.push(i % _showcount)
          listchilren[i].style.width = maxWidth + 'px'
          listchilren[i].style.left = maxWidth * (i % _showcount) + 12 * (i % _showcount) + 'px'
          listchilren[i].style.top = count * (height + 5) + 'px'
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
  },
  computed: {
    ...mapGetters([
      'infor'
    ])
  }
}
</script>
