<template>
  <li  :class="{lists: listArrangestate ,active : hover, animated: like}" @click="_postData" @mouseover="_mouseover"  @mouseout="_mouseout">
    <div class="imagesShow-box-shadow"
     :style="{ background: 'hsl(' + itmes.hsl.h + ',' + itmes.hsl.s * 100 + '%' + ',' + itmes.hsl.l * 100 + '%)' }"
     :class="{active : hover}">
      <img :src="itmes.img + '?x-oss-process=image/resize,w_600'">
        <div class="imagesShow-paypal"  @click.stop="" :class="{active : hover}">
          <div class="imagesShow-paypal-py">
              <router-link :to="{ name: 'IndexApp'}" class="gl-ftcolor-black">
                {{itmes.name}}
              </router-link>
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
      hover: false,
      styleObject: {
        width: '',
        left: ''
      },
      list: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      // let maxWidth = window.innerWidth / 6 - 20
      // maxWidth = parseInt(maxWidth)
      // this.$el.style.left = maxWidth * (this.index + 1)
      // if (this.index % 6 < 6) {
      //   this.list.push(this.index % 6)
      //   // console.log(this.list)
      // }
      // this.styleObject.width = maxWidth + 'px'
      // this.styleObject.left = maxWidth * (this.index) + 10 + 'px'
    })
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
      'filmslide',
      'getappcollection'
    ]),
    _like (e) {
      if (this.like === true) {
        this.lesslike()
        this.lesscontrasts(this.itmes.img)
      } else {
        // if (this.likecount > 5) return
        this.addlike()
        this.contrasts(this.itmes.img)
      }
      this.like = !this.like
    },
    _mouseover () {
      this.hover = true
    },
    _mouseout () {
      if (this.like === true) {
        return
      }
      this.hover = false
    },
    _postData () {
      this.getappcollection(this.itmes.id)
      this.$emit('_postData')
      // this.filmslide(this.index)
      // console.log(this.itmes)
    }
  }
}
</script>

<style lang="scss" scoped>
.sprite_inspire-view {
  display:inline-block;
  background:url('../assets/svg_sprite.svg') no-repeat;
  width:20px;
  height:20px;
  vertical-align:middle;
}
.sprite_lights{
  @extend .sprite_inspire-view;
  background-position: 0px -150px;
}
.sprite_like{
  @extend .sprite_inspire-view;
  background-position: -20px -150px;
}
.sprite_correct{
  @extend .sprite_inspire-view;
  background-position: -40px -150px;
}
li {
  width:calc(100% / 6 - 30px);
  min-width: 200px;
  position:relative;
  float: left;
  margin: 15px;
  border-radius: 2px;
  transition: transform .25s, box-shadow .25s;
  overflow: hidden;
  box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.1);
  &.active{
    box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.12);
  }
  &.animated{
    // animation: animateds_start 0.3s forwards;
    transform: translateY(-12px);
    box-shadow: 0px 12px 20px 0px rgba(0,0,0,0.2);
  }
  img{
    width:100%;
  }
  &.lists{
    padding-bottom: 17.7%;
  }
  .imagesShow-box-shadow{
    padding-bottom: 177.7%;
    height: 0;
    overflow: hidden;
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
      transition:transform 0.2s, opacity 0.3s 0.1s, box-shadow 0.3s;
      padding:0 10px;
      pointer-events: none;
      transform:translateY(100%);
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.0);
      &.active{
         transform:translateY(2%) scale(1.005);
         opacity: 1;
         pointer-events: all;
         box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
      }
      &>div{
        flex:4;
        &:last-child{
          flex:4;
        }
        button{
          border:none;
          background-color:transparent;
          padding:0 3px;
          opacity:0.15;
          &._like{
            opacity: 1;
          }
        }
      }
      &-fn{
        text-align: right;
        button{
          cursor: pointer;
        }
      }
      &-py {
        a {
          text-decoration: none;
          font-size: 12px;
        }
      }
  }
}

</style>
