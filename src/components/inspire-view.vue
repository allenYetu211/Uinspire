<style lang="scss" scoped>
  .imagesShow{
    padding:15px 15px 80px;
    background: #fafafa;
    min-height: 100vh;
    ul{
        margin: 0;
        position:relative;
        min-width:1440px;
        & + p {
          text-align: center;
        }
      }
}
</style>
<template>
  <div class="router">
    <div class="imagesShow">
      <ul id='inspire-view-list' class=" clearfix" ref='parentScrollTop'>
          <!-- <transition> -->
            <transition-group
            @before-enter="beforeEnter"
             enter-active-class="animated cardAnimations cardAnimationsIn"
             leave-active-class="animated cardAnimations cardAnimationsOut">
              <inspire-view-list  v-for="(itms, index) in uinspireioDate" :data-index="index" :key="index" :itmes="itms" :index="index"></inspire-view-list>
            </transition-group>
          <!-- </transition> -->
          {{$router.name}}
          {{uinspireioDate.length}}
      </ul>
       <p class="gl-fb gl-ftcolor-gray" v-if="appLoadingSate">End</p>
       <div class="loadingAnimation" v-if='appLoadingAnimation'>
          loading...
       </div>
    </div>
      <transition
          enter-active-class="animated appCollection fadeIn"
          leave-active-class="animated appCollection fadeOut"
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
      showlist: false,
      cardCount: 0
    }
  },
  created () {
    let self = this
    let scrollDown = 0
    let verlibar = false
    window.onscroll = function () {
      console.log(self.$route.name === 'inspire')
      if (!self.$route.name === 'inspire') {
        return
      } else {
        if (!verlibar) {
          verlibar = true
          return
        }
        let scrolltop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrolltop > scrollDown) {
          if (self.$refs.parentScrollTop.offsetHeight < scrolltop + document.documentElement.clientHeight) {
            self.uinspireio(self.uinspireioDate[self.uinspireioDate.length - 1].id)
          }
        }
        scrollDown = scrolltop
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.uinspireio()
    })
  },
  computed: {
    ...mapGetters([
      'infor',
      'uinspireioDate',
      'collectionPopup',
      'appLoadingSate',
      'appLoadingAnimation'
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
    addCount () {
      if (this.cardCount > 71) {
        this.cardCount = 0
      }
      this.cardCount++
    },
    beforeEnter (el) {
      this.addCount()
      let delay = this.cardCount * 25
      el.style.animationDelay = delay + 'ms'
    },
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
