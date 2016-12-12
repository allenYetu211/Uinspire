<template>
      <div class="informations-uploade" :class="{loadsuccess: !ic.isuploadsuccess}">
          <form @submit.prevent="">
              <div class="file-img-information">
                  <div class="upload-img">
                      <img :src="ic.url">
                  </div>
                  <div class="file-img-imfor">
                      <p class="gl-fb Platform">
                          Platform
                          <span class="gl-fn infoamtions-r">{{ic.Platform}}</span>
                      </p>
                      <p class="gl-fb Dimension">
                          Dimension
                          <span class="gl-fn infoamtions-r">{{ic.width}} * {{ic.height}}</span>
                      </p>
                      <p class="gl-fb Size">
                          Size
                          <span class="gl-fn infoamtions-r">{{ic.size}}KB</span>
                      </p>
                  </div>
              </div>
              <div class="upload-information">
                  <div class="upload-form-gurop">
                      <h5 
                      class="gl-fb" 
                      :class="{ pleaseinput: appname }">Name
                      <span 
                      v-show="appname" 
                      class="gl-fn">Please input the website name
                      </span>
                      </h5>
                      <div v-if="ic.Platform === 'iPhone' || ic.Platform === 'iPad'">
                          <input type="text" v-model="ic.name" name="" placeholder="Input APP Name Search">
                          <button 
                          @click="_AppStore" 
                          data-platform='ios' 
                          class="search">
                          <i class="sprite_find"></i> 
                          </button>
                          <div class="_Apps clearfix">
                             <li v-if="searchNull" class="_AppItem consent-information">Input App Name</li>
                             <li v-else class="_AppItem consent-information">Search 0 result,Retry?</li>
                              <ul :class="{'search-height': searchHeight, 'theSelected': theSelecteds}">
                                <div class="waitingdata" v-if= "getAppStore.length === 0">
                                  In the search...
                                </div>
                                  
                                  <li 
                                  @click.stop="_getAppData" 
                                  class="_AppItem list-complete-item" 
                                  v-for="(ics, imoc) in getAppStore" 
                                  :data-Gnd="imoc" 
                                  data-platform='ios' 
                                  :key="imoc" 
                                  :data-index="imoc" 
                                  :style="{animationDelay: animationDelay}">
                                      <div class="appIcon">
                                          <img :src="ics.artworkUrl512">
                                      </div>
                                      <div>
                                          <p class="appName">{{ics.trackName}}</p>
                                          <p class="artistName">{{ics.artistName}} {{imoc}}</p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div v-if="ic.Platform === 'Android'">
                          <input type="text" v-model="ic.name" name="" placeholder="Input Name Search">
                          <button @click="_AppStore" data-platform='android' class="search"><i class="sprite_find"></i></button>
                          <div class="_Apps">

                             <li v-if="searchNull" class="_AppItem consent-information">Input App Name</li>
                             <li v-else class="_AppItem consent-information">Search 0 result,Retry?</li>
                               <ul :class="{'search-height': searchHeight, 'theSelected': theSelecteds}">
                               <div class="waitingdata" v-if= "getAppStore.length === 0">
                                  In the search...
                                </div>
                               <transition-group 
                                   name="list-complete"
                                   tag="p"
                                   >
                                  <li 
                                  @click.stop="_getAppData" 
                                  class="_AppItem list-complete-item" 
                                  v-for="(ics, imoc) in getAppStore" 
                                  :key="imoc" 
                                  :data-Gnd="imoc" data-platform='android'>
                                      <div class="appIcon">
                                          <img :src="ics.icons.px256">
                                      </div>
                                      <div>
                                          <p class="appName" v-html="ics.title"></p>
                                          <p 
                                          class="artistName" 
                                          v-for='infor in ics.apks'>{{infor.versionName}}</p>
                                      </div>
                                  </li>
                                  </transition-group>
                              </ul>
                          </div>
                      </div>
                      <div v-if="ic.Platform === 'WEB'">
                          <input type="text" v-model="ic.name" name="" placeholder="Input Name Search">
                          <div class="_Apps">
                              <ul>
                                  <li 
                                  @click.stop="_getAppData" 
                                  class="_AppItem" 
                                  v-for="(ics, imoc) in getAppStore" 
                                  :data-Gnd="imoc" 
                                  data-platform='android'>
                                      <div class="appIcon">
                                          <img :src="ics.icons.px256">
                                      </div>
                                      <div>
                                          <p class="appName" v-html="ics.title"></p>
                                          <p class="artistName" v-for='infor in ics.apks'>{{infor.versionName}} </p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      <div class="upload-form-gurop">
                          <h5 
                          class="gl-fb" 
                          :class="{pleaseinput: applink}">Link
                          <span 
                          v-show="applink" 
                          class="gl-fn">Please input the website link
                          </span>
                          </h5>
                          <input type="text" v-model="ic.link" name="">
                      </div>
                      </div>

                  </div>
                  <div class="upload-form-gurop">
                      <h5 
                      class="gl-fb" 
                      :class="{ pleaseinput: appcategory}">Category
                      <span 
                      v-show="appcategory && ic.Category.length === 0" 
                      class="gl-fn">Please Select Category</span></h5>
                      <div class="clearfix">
                          <div 
                          class="category-checkbox" 
                          v-for="(ck, ins) in categoryDate">
                              <input
                              v-model="ic.Category" 
                              :value="ins" 
                              :id="'ckcategory_' + index + ins " 
                              type="checkbox" 
                              name="" 
                              style="display:none">
                              <i class="sprite_checkbox"></i>
                              <label :for="'ckcategory_' + index + ins ">{{ck}}</label>
                          </div>
                      </div>
                  </div>
                  <div class="upload-form-gurop">
                      <h5 class="gl-fb">Tags</h5>
                      <div>
                          <div class="upload-tag">
                              <span class="tag-laber" v-for="(tag, tagindex) in updataTag">
                                {{tag}}
                                <i :data-tag="tagindex" @click="_deleteTag"></i>
                              </span>
                              <button 
                              @click="_popupShow" 
                              class="updata-Tag" 
                              type="button">
                              <i class="sprite_addTag"></i>
                              </button>
                              <div 
                              class="popup-tag" 
                              v-if="updataTag.length < 5 && popup">
                              <div class="popup-input">
                                  <input v-model="inputTag" maxlength="8" type="text" name="" placeholder="Tag..">
                                  <button @click="_addPushTag" class="popup-addTag">Add</button>
                              </div>
                                  <ul>
                                    <li v-for="tag in tagList" @click="_addhistory">{{tag}}</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="upload-btn">
                      <button 
                      class="gl-fb gl-bgcolor-black gl-ftcolor-white" 
                      type="button" 
                      @click="_uplosings">UPLOAD
                      </button>
                      <button 
                      type="button gl-ftcolor-white" 
                      :data-cancelIndex='index' 
                      @click="_upcancel" 
                      class="gl-fb upload-cancel">CANCEL
                      </button>
                  </div>
              </div>
          </form>
      </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import '../Publicjs/filter.js'
import axios from 'axios'

export default {
  props: ['ic', 'index'],
  data () {
    return {
      checkedNames: [],
      getAppStore: [],
      updataTag: [],
      inputTag: '',
      popup: false,
      clickAppStore: true,
      animationDelay: '',
      searchHeight: false,
      theSelecteds: false,
      appname: false,
      applink: false,
      appcategory: false,
      searchStore: false,
      searchNull: true,
      preventTherepeat: true,
      tagList: []
    }
  },
  computed: {
    ...mapGetters([
      'loadtexts',
      'outintimagedata',
      'categoryDate'
    ])
  },
  methods: {
    ...mapActions([
      'loadtext',
      'postimgdata',
      'deleteimagedata'
    ]),
    beforeEnter (el) {
      var delay = el.dataset.imoc * 20
      el.style.animationDelay = delay + 'ms'
    },
    _AppStore (el) {
      let __url__ = ''
      this.getAppStore = []
      this.searchStore = true
      this.searchHeight = true
      this.theSelecteds = false
      this.clickAppStore = false
      if (el.target.dataset.platform === 'ios') {
        __url__ = 'https://itunes.apple.com/search?term=' + this.ic.name + '&country=CN&media=software&limit=10'
      } else {
        __url__ = 'http://apps.wandoujia.com/api/v1/search/$' + this.ic.name + '?opt_fields=title,icons.px256,packageName,apks.versionName'
      }
      this._searchShow = !this._searchShow
      let self = this
      axios.get(__url__).then((response) => {
        if (el.target.dataset.platform === 'ios') {
          let _results = response.data
          if (_results.resultCount === 0) {
            self.searchNull = false
          } else {
            self.getAppStore = _results.results
          }
        } else {
          if (response.data.total === 0) {
            self.searchNull = false
          } else {
            self.getAppStore = response.data.appList
          }
        }
      }).catch((response) => {
      })
    },
    _upcancel (el) {
      this.deleteimagedata(el.target.dataset.cancelindex)
    },
    _uplosings () {
      if (this.ic.name.trim() === '') {
        this.appname = true
      } else if (this.ic.link.trim() === '') {
        this.applink = true
        if (!this.searchStore) {
          this.appname = true
        }
      } else if (this.ic.Category.length === 0) {
        this.appcategory = true
      } else {
        if (this.preventTherepeat) {
          this.postimgdata(this.ic)
          this.preventTherepeat = false
        }
      }
    },
    _popupShow () {
      if (this.updataTag.length >= 5) {
        return
      }
      this.popup = true
    },
    _addhistory (el) {
      this.updataTag.push(el.target.innerText)
      this.ic['tag'] = this.updataTag
      this.popup = false
    },
    _addPushTag () {
      this.updataTag.push(this.inputTag)
      this.ic['tag'] = this.updataTag
      this.popup = false
      this.tagList.push(this.inputTag)
      if (this.tagList.length > 3) {
        this.tagList.shift()
      }
    },
    _deleteTag (el) {
      this.updataTag.splice(el.target.dataset.tag, 1)
      this.ic['tag'] = this.updataTag
    },
    _getAppData (event) {
      this.appname = false
      this.searchHeight = false
      this.theSelecteds = true
      let filter = {}
      let target = this.getAppStore[event.target.dataset.gnd]
      if (event.target.dataset.platform === 'ios') {
        this.ic.link = filter['trackViewUrl'] = target.trackViewUrl
        this.ic.icon_link = filter['artworkUrl512'] = target.artworkUrl512
        this.ic.developer = filter['artistName'] = target.artistName
        this.ic.developer_link = filter['artistViewUrl'] = target.artistViewUrl
        this.ic.app_category = filter['genres'] = target.genres
        this.ic.version = filter['version'] = target.version
        this.ic.name = filter['trackName'] = target.trackName
      } else {
        this.ic.link = filter['trackViewUrl'] = 'http://www.wandoujia.com/apps/' + target.packageName
        let blibli = {}
        blibli['px256'] = target.icons.px256
        this.ic.icon_link = filter['icons'] = blibli
        let nullArray = {}
        nullArray['versionName'] = target.apks[0].versionName
        filter['apks'] = [nullArray]
        let newString = target.title.replace('<em>', '').replace('</em>', '')
        this.ic.name = filter['title'] = newString
      }
      this.getAppStore = []
      this.getAppStore.push(filter)
    },
    _beforeEnter (el) {
      let delay = el.dataset.index * 40
      el.style.animationDelay = delay + 'ms'
    }
  }
}
</script>

<style lang="scss" scoped>
.sprite{
    width: 16px;
    height: 16px;
    background:url('../assets/svg_sprite.svg')no-repeat;
}
 .informations-uploade{
    border-bottom:1px solid #EFEFEF;
    padding: 50px 0;
    height: 0;
    padding: 0;
    overflow:hidden;
    transition: all 0.5s;
    &.loadsuccess{
      height: 600px;
      padding: 50px 0;
    }
  }
form{
  flex: row;
  display: flex;
  &>div.file-img-information{
    flex:3;
    margin-right:30px;
    div.upload-img{
      padding-bottom: 15px;
      border-bottom: 1px solid #000;
      margin-bottom: 12px;
      img{
        width:100%;
      }
    }
    .file-img-imfor{
      p{
        padding:5px 0;
       font-weight:normal;
        font-size: 12px;
        color: #222222;
        letter-spacing: 0.12px;
      }
    }
  span.infoamtions-r{
    float: right;
  }
}
&>div.upload-information{
  flex:7;
  .upload-form-gurop{
    margin-bottom:20px;
    position:relative;
    h5{
      span{
        float:right;
        color:#ff2727;
        font-size: 12px;
      }
    }
    button.search{
        position:absolute;
        right:5px;
        top:35px;
        border:none;
        background-color:transparent;
        width:30px;
        height:30px;
        padding: 0;
        i{
          top:0;
          left: 0;
          pointer-events: none;
        }
    }
    &>label,&>h5{
      display:block;
      padding:0 0 8px 0;
     font-weight:normal;
      font-size: 14px;
      line-height: 1.5;
      color: #222222;
    }
    .gurop-radio{
      background: #EFEFEF;
      border-radius:5px;
      display: flex;
      padding:1px;
        .platform-laber{
          position:relative;
          flex:1;
          line-height:40px;
          padding:1px;
          label{
            width: 100%;
            padding:0 1px;
            background-color:#fff;
            text-align:center;
            cursor: pointer;
            &.active{
              background-color: transparent;
            }
          }
        input[type="radio"] {
          position:absolute;
          top:0;
          left:0;
          opacity:0;
        }
      }
    }
    input[type="text"] {
      width:100%;
      border:none;
      background: #f4f4f4;
      
      border-radius: 5px;
      height:40px;
      font-size:14px;
      padding:10px 25px 10px 15px;
    }
    input::placeholder{
      color:#D7D7D7;
      font-weight:300;
    }
  .upload-tag{
      width:100%;
      border:none;
      background: #f4f4f4;
      border-radius: 5px;
      height: 44px;
      font-size:14px;
      padding:10px 25px 10px 15px;
      position:relative;
      span.tag-laber{
        background: #D8D8D8;
        padding: 4px 0px 4px 18px ;
        margin:0 5px;
        display:inline-block;
        position:relative;
        transition:padding 0.5s;
        position:relative;
        border-radius:100px;
        font-size: 12px;
        height: 26px;
        line-height: 20px;
        &:before {
          display:block;
          content: '';
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 4px;
          border-radius:50%;
          background-color:#EFEFEF;
          z-index:9;
        }
        &:hover{
          padding-right:6px;
        }
        &:hover i {
          transform: scale(1);
          margin-left: 3px;
        }
        i{
          transform: scale(0);
          display: inline-block;
          @extend .sprite;
          background-position: -243px -151px;
          transition: all 0.5s;
          cursor:pointer;
          vertical-align:-3px;
        }
      }
      .popup-tag{
        position:absolute;
        left: 0;
        top: 50px;
        width:200px;
        background-color:#FFFFFF;
        box-shadow: 0 0 5px rgba(0,0,0,.25);
        .popup-input{
          position:relative;
          & > input{
            padding:10px 55px 10px 10px;
            border:none;
            border-bottom: 1px solid #efefef;
            position:relative;
            border-radius: 0;

            background-color: transparent;
            & + button{
              position:absolute;
              top:50%;
              transform: translateY(-50%);
              right:10px;
              border:none;
              background-color:transparent;
            }
          }
        }
        ul{
          padding-left: 20px;
          li{
            line-height:30px;
            position: relative;
            &:before{
              display: block;
              content: '';
              position: absolute;
              left: -10px;
              top: 50%;
              transform: translateY(-50%);
              background-color: #D8D8D8;
              width: 5px;
              height: 5px;
              border-radius: 50%;

            }
            &:last-child{
              border:none;
            }
          }
        }
      }
      button.updata-Tag{
        border:none;
        background:transparent;
        vertical-align: middle;
        cursor: pointer;
      }
    }

  }
}

  ._Apps{
    background:#f4f4f4;
    border-radius: 5px;
    margin:5px 0;
    position:relative;
    & > li._AppItem {
      border-bottom: none;
    }
    ul{
      background:#f4f4f4;
      position:absolute;
      top:0;
      left:0;
      right:0;
      z-index:99;
      overflow-y:scroll; 
      max-height: 0px;
      transition: height 0.5s;
      .waitingdata {
        position: absolute;
        left:50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &.search-height{
        max-height: 225px;
      }
      &.theSelected{
        max-height: 60px;
      }

    }
    ._AppItem{
        display:flex;
        flex:row;
        border-bottom:1px solid #dcdcdc;
        height:60px;
        padding:10px 12px;
        &.consent-information{
          justify-content: center;
          align-items: center;
          color:#aaa;
        }
        &:last-child{
          border:none;
        }
        &>div{
          pointer-events: none;
          &:first-child{
            width:40px;
            margin-right:12px;
            float: left;
          }
          &:last-child{
            flex:7;
            p{
               max-width:320px;   
               overflow: hidden;
               text-overflow: ellipsis;
               white-space: nowrap;
               user-select: none;
               pointer-events: none;
            }
            .appName{
              font-size:14px;
             font-weight:normal;
              line-height:1.5;
              word-break:keep-all;     
             
            }
            .artistName{
              font-size:12px;
             font-weight:normal;
              line-height:1.5;
              color:#aaa;
            }
          }
        }
        img{
          width:40px;
          border-radius:9px;
        }
      }
  }
}

.category-checkbox{
      float: left;
      width: 25%;
      margin:5px 0;
      position:relative;
      font-size:12px;
           input:checked + i {
              background-position: -120px -150px;
            }
          label{
            line-height:20px;
            padding-left:25px;
          }
          i{  
            position: absolute;
            z-index:-1;
            left: 0;
            top: 0;
            display: block;
            width: 20px;
            height: 20px;
            background:url('../assets/svg_sprite.svg')no-repeat;
            &.sprite_checkbox{
              background-position: -140px -150px;
            }
      }
}
 
.upload-btn{
  button{
      font-size: 18px;
      margin: 0 auto;
      height:50px;
      width:150px;
      padding: 10px 25px;
      border: none;
      margin-right:10px;
      cursor:pointer;
      &.upload-cancel{
        background-color:#f4f4f4;
      }
    }
}
.sprite_addTag{
    @extend .sprite;
    display: block;
    background-position: -262px -153px;
}
.sprite_find {
  @extend .sprite;
  display: block;
  background-position: -34px -93px;
  width: 25px;
  height: 25px;
}
</style>