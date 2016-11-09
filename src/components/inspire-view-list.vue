<style lang="scss" scoped>
    li {
      float: left;
      width:16.66666%;
      // height:0;
      // padding-bottom:27%;
      padding: 10px 10px;      
      // background-color:#ccc;
      position:relative;
      // overflow:hidden;
      .imagesShow-box-shadow{
        transition: box-shadow 0.3s;
        &.active{
           box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.39);
        }
      }
      img{
        width:100%;
      }
      &.lists{
        width:11.111111%;
        padding-bottom:17%;
        padding-left: 5px;
        padding-right: 5px;
      }
      .imagesShow-paypal{
          position:absolute;
          bottom:0px;
          display:flex;
          height:40px;
          line-height:40px;
          background-color:#fff;
          width:calc(100% - 20px);
          transition:transform 0.3s, opacity 0.3s;
          padding:0 10px;
          opacity: 0;
          pointer-events: none;
          transform:translateY(100%);
          // &.active{
          //   transform:translateY(100%);
          // }
          &.active{
             transform:translateY(-25%);
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
        <li :class="{lists: listArrangestate}" @mouseover="_mouseover"  @mouseout="_mouseout">
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
  props: ['itmes'],
  data () {
    return {
      like: false,
      hover: false
    }
  },
  computed: {
    ...mapGetters([
      'listArrangestate',
      'addlessstate'
    ])
  },
  methods: {
    ...mapActions([
      'addlike',
      'lesslike'
    ]),
    _like (e) {
      if (this.like === true) {
        this.lesslike()
      } else {
        this.addlike()
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
