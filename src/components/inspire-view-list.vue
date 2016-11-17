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
        width:calc(100% / 8 - 20px);
      }
      .imagesShow-paypal{
          position:absolute;
          bottom:0px;
          z-index:99;
          display:flex;
          height:40px;
          line-height:40px;
          background-color:#fff;
          width:100%;
          transition:transform 0.3s, opacity 0.3s 0.1s;
          padding:0 5px;
          pointer-events: none;
          transform:translateY(100%);
          &.active{
             transform:translateY(0%);
             opacity: 1;
             pointer-events: all;
          }
          &>div{
            flex:1;
            &:last-child{
              flex:5;
            }
            button{
              border:none;
              background-color:transparent;
              padding:0;
              opacity:0.15;
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
    .sprite_lights{
        width:20px;
        height:20px;
        display:inline-block;
        background:url('../../static/svg_sprite.svg') no-repeat;
        background-position:0px -120px;
        vertical-align:middle;
    }
    .sprite_like{
      @extend .sprite_lights;
      background-position:-20px -120px;
    }
    .sprite_correct{
      @extend .sprite_lights;
      background-position:-40px -120px;
    }
</style>

<template>
  <li :class="{lists: listArrangestate ,active : hover}" @click="_postData" @mouseover="_mouseover"  @mouseout="_mouseout">
    <div class="imagesShow-box-shadow" :class="{active : hover}">
      <img :src="itmes.url">
        <div class="imagesShow-paypal"  :class="{active : hover}">
          <div class="imagesShow-paypal-py">
              Paypal
          </div>
          <div class="imagesShow-paypal-fn">
              <button><i class="sprite_lights"></i></button>
              <button ><i class="sprite_like"></i></button>
              <button @click.stop="_like" :class="{_like: like}"><i class="sprite_correct"></i></button>
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
      'lesscontrasts',
      'filmslide'
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
    },
    _postData () {
      this.filmslide(this.index)
      // console.log(this.itmes)
    }
  }
}
</script>
