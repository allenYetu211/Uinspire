<style lang="scss" scoped>
    li {
      float: left;
      width:calc(100% / 6 - 20px);
      margin: 10px 10px;
      position:relative;
      overflow:hidden;
      transition: box-shadow 0.3s;
      
       &.active{
           box-shadow: 0px 2px 18px 0px rgba(0,0,0,0.25);
        }
    
      img{
        width:100%;
      }
      &.lists{
        width:calc(100% / 9 - 20px);
      }
      .imagesShow-paypal{
          position:absolute;
          bottom:0px;
          display:flex;
          height:40px;
          line-height:40px;
          background-color:#fff;
          width:100%;
          transition:transform 0.3s, opacity 0.3s 0.1s;
          padding:0 10px;
          // opacity: 0;
          pointer-events: none;
          transform:translateY(100%);
          // &.active{
          //   transform:translateY(100%);
          // }
          &.active{
             transform:translateY(0%);
             opacity: 1;
             pointer-events: all;
          }
          &>div{
            flex:1;
            button{
              border:none;
              background-color:transparent;
              opacity:0.5;
              &._like{
                opacity: 1;
              }
            }
          }
          &-fn{
            text-align: right;
          }
      }
    }
</style>
<template>
        <li :class="{lists: listArrangestate ,active : hover}" @mouseover="_mouseover"  @mouseout="_mouseout">
          <div class="imagesShow-box-shadow" :class="{active : hover}">
            <img :src="itmes.url">
              <div class="imagesShow-paypal"  :class="{active : hover}">
                <div class="imagesShow-paypal-py">
                    Paypal
                </div>
                <div class="imagesShow-paypal-fn">
                    <button>--</button>
                    <button @click="_like" :class="{_like: like}">--</button>
                    <button>--</button>
                </div>
              </div>
            </div>
          </li>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default{
  props: ['itmes', 'index'],
  data () {
    return {
      like: false,
      hover: false
    }
  },
  computed: {
    ...mapGetters([
      'listArrangestate',
      'addlessstate',
      'likecount'
    ])
  },
  methods: {
    ...mapActions([
      'addlike',
      'lesslike',
      'contrasts',
      'lesscontrasts'
    ]),
    _like (e) {
      if (this.like === true) {
        this.lesslike()
        this.lesscontrasts(this.itmes.url)
      } else {
        if (this.likecount > 5) return
        this.addlike()
        this.contrasts(this.itmes.url)
      }
      this.like = !this.like
    },
    _mouseover () {
      this.hover = true
    },
    _mouseout () {
      if (this.like === true) return
      this.hover = false
    }
  }
}
</script>
