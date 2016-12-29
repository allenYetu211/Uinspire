<template>
  <div class="app-wall">
    <ul>
    <transition-group
            @before-enter="beforeEnter"
             enter-active-class="animated cardAnimations cardAnimationsIn"
             leave-active-class="animated cardAnimations cardAnimationsOut">
             {{applogodata}}
              <li class="app-logo" v-for="(app, index) in applogodata" :data-index="index" :key="index">
                <router-link :to="{ name: 'IndexApp'}">
                  <span @click="_routerGetIntroduce" :data-appid="app.app_id">
                    <img :src="app.icon_link" alt="">
                  </span>
                </router-link>
                <p>{{app.name}}</p>
              </li>
      </transition-group>
    </ul>  
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      count: 0
    }
  },
  computed: {
    ...mapGetters([
      'applogodata'
    ])
  },
  methods: {
    ...mapActions([
      'addappwalldata',
      'getapppagedata'
    ]),
    addCount () {
      if (this.count > 71) {
        this.count = 0
      }
      this.count++
    },
    beforeEnter (el) {
      this.addCount()
      let delay = this.count * 30
      el.style.animationDelay = delay + 'ms'
    },
    _routerGetIntroduce (el) {
      this.getapppagedata(el.target.dataset.appid)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.addappwalldata()
    })
  }
}
</script>

<style lang="scss">
  .app-wall {
    min-height: 100vh;
    ul {
      .app-logo {
        float: left;
        width: calc(100vw / 6);
        height: calc(100vw / 6);
        display: flex;
        justify-content: center;
        align-items: center;
         border-right: 1px solid #f3f3f3;
         border-bottom: 1px solid #f3f3f3;
         flex-flow: column;
         position: relative;
         &:hover {
          background-image: linear-gradient(-180deg, #FFFFFF 0%, #FAFAFA 74%, #FEFEFE 100%);
          a {
            transform: translateY(-8px) rotate(6deg);
          }
          p {
            opacity: 1;
            transform: translateY(-8px);
          }
         }
         p{
            width: 100%;
            padding: 0 16%;
            text-overflow: ellipsis;
            text-align: center;
            position: absolute;
            bottom: 18%;
            opacity: 0;
            font-size:12px;
            white-space: nowrap;
            overflow: hidden;
            transition: opacity 0.2s, transform 0.2s;
            line-height: 1.2;
         }
         &:nth-child(6n) {
          border-right: 1px solid transparent;
         }
        a{
          display: block;
          width: 40%;
          height: 40%;
          transition: transform 0.25s;
        }
        span {
          display: block;
        }
        img{
          width: 100%;
          border-radius: 22%;
          box-shadow: 0px 1px 2px 0px rgba(0,0,0,.1);
          pointer-events: none;
          // border: 0.5px solid #f3f3f3;
        }
      }
    }
  }
</style>
