<template>
  <div class="app-wall">
    <ul>
      <li class="app-logo" v-for="app in applogodata">
        <router-link :to="{ name: 'IndexApp'}">
          <img :src="app.icon_link" alt="">
        </router-link>
        <p>{{app.name}}</p>
      </li>
    </ul>  
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'applogodata'
    ])
  },
  methods: {
    ...mapActions([
      'addappwalldata'
    ])
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
          a {
            transform: translateY(-6px) rotate(6deg);
          }
          p {
            opacity: 1;
            transform: translateY(-6px);
          }
         }
         p{
            width: 60%;
            text-overflow: ellipsis;
            text-align: center;
            position: absolute;
            bottom: 20px;
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
        img{
          width: 100%;
          border-radius: 22%;
          box-shadow: 0px 1px 2px 0px rgba(0,0,0,.15);
        }
      }
    }
  }
</style>
