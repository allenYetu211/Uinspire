<template>
  <div class="app-collection gl-bgcolor-white">
    <button class="collectionClose" @click="closerappcollection">
      <i class="sprite_close"></i>
    </button>
      <ul>
      <div class="itms-collection">
        <li 
        v-for="(list, list_index) in storageAppCollection" 
        :class="{active: list_index === showCollectionIndex}"
        class="films-li"
        :style="{ WebKitTransform: 'translateX(-' + showCollectionIndex * 100 + '%)'}"
       >
          <div class="appcollection-images">
            <img :src="list.img">
          </div>
          
          <div class="appcollection-informations">
            <h2 class="gl-fb">{{list.name}}<span class="gl-nr">{{list.user_name}}</span></h2>
            <p class="gl-fb">category <span class="gl-nr" v-for="categoryEn in list.category.name_en">{{categoryEn}}</span></p>
            <p class="gl-fb">Tags 
            <span v-if="list.tag" class="gl-nr">{{list.tag}}</span>
            <span v-else class="gl-nr">No Tag</span>
            </p>

            <p class="gl-fb">Color 
            <em>
              <span 
              v-for="(hs, index) in list.hsl_tab" 
              v-if= "index > 4 ? false : true"
              :style="{ background: 'hsl(' + hs.h + ',' + hs.s * 100 + '%' + ',' + hs.l * 100 + '%)' }">
              </span>
            </em>
            </p>
          </div>
        </li>
        </div>
      </ul>
    <div class="arrow"   @keyup.left="_prev"  @keyup.right="_next">
        <div class="arrow-prev">
            <button  @click="_prev" :class="{'transparency': showCollectionIndex === 0}"><i class="sprite_prev"></i></button>
        </div>
        <div class="arrow-next">
            <button @click="_next" :class="{'transparency': this.showCollectionIndex === this.storageAppCollection.length - 1}"><i class="sprite_next"></i></button>
        </div>
    </div>
  </div>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      'appcollectionTransfrom': {
        transform: 'translateX(' + this.showCollectionIndex + '%)'
      }
    }
  },
  computed: {
    ...mapGetters([
      'storageAppCollection',
      'showCollectionIndex',
      'collectionPopup'
    ])
  },
  mounted () {
    this.$nextTick(() => {
      let filmsLi = document.querySelector('li.films_li')
      console.log(filmsLi)
    })
  },
  watch: {
    collectionPopup: function () {
      if (this.collectionPopup) {
        setTimeout(() => {
          let lateLi = document.querySelectorAll('li.films-li')
          for (let i = 0; i < lateLi.length; i++) {
            lateLi[i].style.cssText = 'transition: all 0s;transform:translateX(-' + this.showCollectionIndex * 100 + '%);'
          }
        }, 200)
      }
    }
  },
  methods: {
    ...mapActions([
      'closerappcollection',
      'addcollectionindex',
      'lesscollectionindex'
    ]),
    _prev () {
      if (this.showCollectionIndex > 0) {
        this.lesscollectionindex()
        this.transformUpdata()
      }
    },
    _next () {
      if (this.showCollectionIndex <= this.storageAppCollection.length - 2) {
        this.addcollectionindex()
        this.transformUpdata()
      }
    },
    transformUpdata () {
      let lateLi = document.querySelectorAll('li.films-li')
      for (let i = 0; i < lateLi.length; i++) {
        lateLi[i].style.cssText = 'transition: transform 0.2s, opacity: 0.3s;transform:translateX(-' + this.showCollectionIndex * 100 + '%);'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.app-collection{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  button.collectionClose{
    position: absolute;
    right: 30px;
    top: 80px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 99;
    i{
        display: block;
        width: 30px;
        height: 30px;
        background: url('../assets/svg_sprite.svg');
        background-position: -5px -55px;
    }
  }
  ul{
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
     li {
      // min-width: 100%;
      // width: 100%;
      display: inline-block;
      transform: scale(0.8);
      opacity: 0;
      transition: transform 0.3s, opacity 0.3s;
      padding: 0 5px;
      &.active{
        opacity: 1;
        transform: scale(1);
      }
      .appcollection-images{
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
        margin-bottom: 30px;
        height: calc(100vh - 320px);
      }
      img{
        height: 100%;
        // width: 100%;
        vertical-align: -4px;
        border-radius:2px;
      }

    } 
  }
  .itms-collection{
    margin: 0 auto;
    width: calc((100vh - 320px) * 0.582);
  }
  .appcollection-informations{
    height: 120px;
    h2,
    p:nth-child(1),
    p:nth-child(2),
    p:nth-child(3){
      font-size: 12px;
      span{
        font-size: 12px;
        float: right;
        font-weight: 400;
      }
    }
    h2{
      border-bottom: 1px solid #222;
      padding-bottom: 10px;
    }
    p{
      line-height: 2.5;
    }
  
    p:last-child {
      em {
        float: right;
      }
        span{
          display: inline-block;
          width: 25px;
          height: 8px;
          transition: transform 0.2s;
          &:first-child{
            border-radius: 3px 0px 0px 3px;
          }
          &:last-child{
            border-radius: 0px 3px 3px 0px;
          }
          &:hover{
            transform: scale(1.2);
          }
        }
    }
  }
.arrow{
  button{
    background:transparent;
    border:none;
    &.transparency{
      opacity: 0.3;
    }
  }
    &-prev,&-next{
        position: absolute;
        top: 50%;
        z-index: 999;
        transform: translateY(-50%);
    }
    &-prev{
      left:25%;
    }
    &-next{
      right:25%;
    }
    i{
      display:inline-block;
      width:25px;
      height:50px;
      background:url('../assets/svg_sprite.svg')no-repeat;
      &.sprite_next{
        background-position: -36px 0;
      }
    }
    .sprite_prev{
      position:0;
    }
  }
}
.open{
  ul{
    &>li{
    transform: scale(1);
    transition: transform 0.3s;
    }
  }
}
</style>