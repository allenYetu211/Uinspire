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
           <!--  <transition-group
            @before-enter="beforeEnter"
             leave-active-class="animated cardAnimations cardAnimationsOut"> -->
              <inspire-view-list 
              class="py-jy"  
              v-for="(itms, index) in uinspireioDate" 
              :data-index="index" 
              :key="index" 
              :itmes="itms" 
              :index="index" 
              @vmounted="childMounted(index, uinspireioDate.length)">
              </inspire-view-list>
            <!-- </transition-group> -->
          <!-- </transition> -->
      </ul>
       <p class="gl-fb gl-ftcolor-gray" v-if="appLoadingSate">End</p>
       <div class="loadingAnimation" v-if='appLoadingAnimation'>
          <div class="sk-cube-grid">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
          </div>
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
    let beforScollTop = 0
    if (self.$route.name === 'inspire') {
      window.onscroll = function () {
        // let wt = window.scrollTop
        if (self.$route.name === 'inspire' && self.rollUpdata) {
          let scrolltop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if (scrolltop > scrollDown) {
            if (self.$refs.parentScrollTop.offsetHeight < scrolltop + document.documentElement.clientHeight) {
              self.scrollupdata(self.uinspireioDate[self.uinspireioDate.length - 1].id)
            }
          }
          scrollDown = scrolltop
          // console.log(_pyJy[0].offsetTop)
        }
        let afterScollTop = document.body.scrollTop
        if (afterScollTop - beforScollTop > 0) {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          self.pyjy(scrollTop)
        }
        beforScollTop = afterScollTop
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scrollupdata()
    })
  },
  computed: {
    ...mapGetters([
      'infor',
      'uinspireioDate',
      'collectionPopup',
      'appLoadingSate',
      'appLoadingAnimation',
      'rollUpdata'
    ])
  },
  methods: {
    ...mapActions([
      'inspirtnavsidebar',
      'listArrange',
      'listArrangetwo',
      'sidebarright',
      'uinspireio',
      'scrollupdata'
    ]),
    childMounted (idx, count) {
      if (idx + 1 === count) {
        this.pyjy(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop)
      }
    },
    pyjy (sy) {
      // if (sy > et + eh) {
      //     el.classList.remove('openActions')
      //     el.classList.add('befor_itms')
      //   } else
      // let wh = window.clientHeight
      let _pyJy = document.querySelectorAll('.py-jy')
      for (let i = 0; i < _pyJy.length; i++) {
        let et = _pyJy[i].offsetTop
        let eh = _pyJy[i].clientHeight
        if (et >= sy + eh * 2) {
          _pyJy[i].classList.remove('openActions')
          _pyJy[i].classList.add('after_itms')
        } else {
          _pyJy[i].classList.remove('befor_itms', 'after_itms')
          _pyJy[i].classList.add('openActions')
        }
      }
    },
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
      setTimeout(() => {
        el.removeAttribute('style')
      }, 800)
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
