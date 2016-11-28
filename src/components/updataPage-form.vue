<style lang="scss" scoped>
    form{
          flex: row;
          display: flex;
    &>div.file-img-information{
      flex:3;
      margin-right:40px;
      div.upload-img{
        margin-bottom:20px;
        img{
          width:100%;
          box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.25);
        }
      }
      .file-img-imfor{
        p{
          padding:5px 0;
          font-family: Roboto-Bold;
          font-size: 12px;
          color: #222222;
          letter-spacing: 0.12px;
        }
      }
      span.infoamtions-r{
        font-family: Roboto;
        float: right;
      }
    }
    &>div.upload-information{
      flex:7;
      .upload-form-gurop{
        margin-bottom:15px;
        position:relative;
        button.search{
            position:absolute;
            right:5px;
            top:30px;
            border:none;
            background-color:transparent;
            width:30px;
            height:30px;
            padding: 0;
            i{
              top:0;
              left: 0;
            }
        }
        &>label,&>h5{
          display:block;
          padding:0 0 5px 0;
          font-family: Roboto-Bold;
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
          font-family: Roboto-Light;
        }
      .upload-tag{
          width:100%;
          border:none;
          background: #f4f4f4;
          border-radius: 5px;
          min-height:40px;
          font-size:14px;
          padding:10px 25px 10px 15px;
          position:relative;
          span.tag-laber{
            background: #e1e1e1;
            padding:5px;
            margin:5px;
            display:inline-block;
            position:relative;
            transition:padding 0.5s;
            &:hover{
              padding-right:25px;
            }
            &:hover i {
              opacity: 1;
              transform: translate(0%,-50%);
              // display:block;
              z-index:9;
            }
            i{
              position:absolute;
              top: 50%;
              transform: translate(150%,-50%) rotate(180deg);
              border-radius:50%;
              right:0px;
              display: block;
              width: 15px;
              height:15px;
              line-height:15px;
              text-align:center;
              background-color:#FFFA00;
              // display:none;
              // pointer-events: none;
              opacity: 0;
              z-index:-99;
              transition:opacity 0.5s, transform 0.5s;
              cursor:pointer;
            }
          }
          .popup-tag{
            position:absolute;
            left: 0;
            bottom: -45px;
            width:200px;
            background-color:#fff;
            input{
              padding:10px 55px 10px 10px;
              border:none;
              border-bottom: 1px solid #333;
              position:relative;
              & + button{
                position:absolute;
                top:50%;
                transform: translateY(-50%);
                right:10px;
                border:none;
                background-color:transparent;
              }
            }
            ul{
              padding:0;
              li{
                line-hegiht:40px;
                border-bottom: 1px solid #e0e0e0;
                &:last-child{
                  border:none;
                }
              }
            }
          }
          button.updata-Tag{
            border:none;
            background:transparent;
          }
        }

      }
    }

    ._Apps{
      background:#f4f4f4;
      border-radius: 5px;
      margin:5px 0;
      max-height: 210px;
      overflow-y:scroll; 
      ._AppItem{
          display:flex;
          flex:row;
          border-bottom:1px solid #dcdcdc;
          height:60px;
          padding:10px 12px;
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
                font-family: Roboto-Bold;
                line-height:1.5;
                word-break:keep-all;     
               
              }
              .artistName{
                font-size:12px;
                font-family: Roboto-lignt;
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
          input{
            // opacity: 0;
          }
           input:checked + i {
              background-position: -120px -120px;
            }
          label{
            line-height:20px;
            padding-left:25px;
          }
      // &.active{
      //   i.sprite_checkbox{
      //     background-position: -120px -120px;
      //   }
      // }
          i{  
            position: absolute;
            z-index:-1;
            left: -3px;
            top: 0;
            display: block;
            width: 20px;
            height: 20px;
            background:url('../../static/svg_sprite.svg')no-repeat;
            &.sprite_checkbox{
              background-position: -140px -120px;
            }
      }
}
 
    .upload-btn{
      button{
          color:#222;
          font-size: 14px;
          margin: 0 auto;
          height:40px;
          padding: 10px 25px;
          background-color: #FFFA00;
          border: none;
          border-radius: 3px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
          margin-right:10px;
          &.upload-cancel{
            background-color:#f4f4f4;
          }
        }
    }
  
</style>
<template>
 <div class="informations-uploade">
   <form>
             <div class="file-img-information">
                <div class="upload-img">
                  <img :src="ic.url">
                </div>

                <div class="file-img-imfor">
                  <p class="Platform">
                  Platform
                    <span class="infoamtions-r">{{ic.Platform}}</span>
                  </p>
                  <p class="Dimension">
                    Dimension
                    <span class="infoamtions-r">{{ic.width}} * {{ic.height}}</span>
                  </p>
                  <p class="Size">
                    Size
                    <span class="infoamtions-r">{{ic.size}}KB</span>
                  </p>
                </div>
              </div>
              <div class="upload-information" v-if="ic.Platform === 'iPhone' || ic.Platform === 'iPad'">
                  <div class="upload-form-gurop">
                    <label>Name</label>
                    <input type="text"  v-model="ic.name"  name="" placeholder="Input APP Name Search">
                    <input type="hidden" name="PHP_SESSION_UPLOAD_PROGRESS" value="filename" />
                    <button @click="_AppStore" data-platform='ios' class="search"><i class="sprite_find"></i></button>
                    <!-- https://itunes.apple.com/search?term=xxx&country=CN&media=software&limit=10 -->
                       <div class="_Apps">
                        <ul>
                            <li  @click.stop="_getAppData" class="_AppItem" v-for="(ics, imoc) in getAppStore" :data-Gnd="imoc"  data-platform='ios'>
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
                 

                  <!-- <div class="upload-form-gurop">
                    <label>Link</label>
                    <input type="text" v-model="ic.link" name="">
                  </div> -->

                  <div class="upload-form-gurop">
                    <h5>Category</h5>
                    <div class="clearfix">
                       <div class="category-checkbox" v-for="(ck, ins) in category">
                          <input  v-model="ic.Category" :value="ins"  :id="'ckcategory_' + index + ins " type="checkbox" name="" style="display:none">
                          <i class="sprite_checkbox"></i>
                          <label :for="'ckcategory_' + index + ins " >{{ck}}</label>
                      </div>
                    </div>
                  </div>

                  <div class="upload-form-gurop">
                    <h5>Tags</h5>
                    <div>
                    <!--   <input v-model="ic.tag" type="text" name=""> -->
                      <div class="upload-tag">
                        <span class="tag-laber" v-for="(tag, tagindex) in updataTga">
                          {{tag}}
                          <i :data-tag="tagindex" @click="_deleteTag">x</i>
                        </span>
                        <button @click="_popupShow" class="updata-Tag">添加标签</button>
                        <div class="popup-tag" v-if="updataTga.length < 3 && popup">
                          <input v-model="inputTag" type="text" name="">
                          <button @click="_addPushTag" class="popup-addTag">添加</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="upload-btn">
                    <button type="button" @click="_uplosings">Upload</button>
                    <button type="button" :data-cancelIndex = 'index' @click="_upcancel" class="upload-cancel">Cancel</button>
                  </div>
              </div>

              <div class="upload-information" v-if="ic.Platform === 'Android'">
                  <div class="upload-form-gurop">
                    <label>Name</label>
                    <input type="text"  v-model="ic.name"  name="" placeholder="Input Name Search">
                    <button @click="_AppStore"  data-platform='android' class="search"><i class="sprite_find"></i></button>
             
                       <div class="_Apps">
                        <ul>
                            <li  @click.stop="_getAppData" class="_AppItem" v-for="(ics, imoc) in getAppStore" :data-Gnd="imoc"  data-platform='android'>
                              <div class="appIcon">
                                <img :src="ics.icons.px256">
                              </div>
                              <div> 
                                <p class="appName" v-html="ics.title"></p>
                                <p class="artistName"  v-for = 'infor in ics.apks'>{{infor.versionName}} </p>
                              </div>
                            </li>
                          </ul>
                      </div>
                  </div>
                  <div class="upload-form-gurop">
                    <h5>Category</h5>
                    <div class="clearfix">
                       <div class="category-checkbox" v-for="(ck, ins) in category">
                          <input  v-model="ic.Category" :value="ins"  :id="'ckcategory_' + index + ins " type="checkbox" name="" style="display:none">
                          <i class="sprite_checkbox"></i>
                          <label :for="'ckcategory_' + index + ins " >{{ck}}</label>
                      </div>
                    </div>
                  </div>

                  <div class="upload-form-gurop">
                    <h5>Tags</h5>
                    <div>
                    <!--   <input v-model="ic.tag" type="text" name=""> -->
                      <div class="upload-tag">
                        <span class="tag-laber" v-for="(tag, tagindex) in updataTga">
                          {{tag}}
                          <i :data-tag="tagindex" @click="_deleteTag">x</i>
                        </span>
                        <button @click="_popupShow" class="updata-Tag">添加标签</button>
                        <div class="popup-tag" v-if="popup">
                          <input v-model="inputTag" type="text" name="">
                          <button @click="_addPushTag" class="popup-addTag">添加</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="upload-btn">
                    <button type="button" @click="_uplosings">Upload</button>
                    <button type="button" :data-cancelIndex = 'index' @click="_upcancel" class="upload-cancel">Cancel</button>
                  </div>
              </div>

              <div class="upload-information" v-if="ic.Platform === 'WEB'">
                    <div class="upload-form-gurop">
                      <label>Name</label>
                      <input type="text"  v-model="ic.name"  name="" placeholder="Input Name Search">
                         <div class="_Apps">
                          <ul>
                              <li  @click.stop="_getAppData" class="_AppItem" v-for="(ics, imoc) in getAppStore" :data-Gnd="imoc"  data-platform='android'>
                                <div class="appIcon">
                                  <img :src="ics.icons.px256">
                                </div>
                                <div> 
                                  <p class="appName" v-html="ics.title"></p>
                                  <p class="artistName"  v-for = 'infor in ics.apks'>{{infor.versionName}} </p>
                                </div>
                              </li>
                            </ul>
                        </div>
                    </div>
                    <div class="upload-form-gurop">
                      <label>Link</label>
                      <input type="text" v-model="ic.link" name="">
                    </div>
                    <div class="upload-form-gurop">
                      <h5>Category</h5>
                      <div class="clearfix">
                         <div class="category-checkbox" v-for="(ck, ins) in category">
                            <input  v-model="ic.Category" :value="ins"  :id="'ckcategory_' + index + ins " type="checkbox" name="" style="display:none">
                            <i class="sprite_checkbox"></i>
                            <label :for="'ckcategory_' + index + ins " >{{ck}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="upload-form-gurop">
                      <h5>Tags</h5>
                      <div>
                      <!--   <input v-model="ic.tag" type="text" name=""> -->
                        <div class="upload-tag">
                          <span class="tag-laber" v-for="(tag, tagindex) in updataTga">
                            {{tag}}
                            <i :data-tag="tagindex" @click="_deleteTag">x</i>
                          </span>
                          <button @click="_popupShow" class="updata-Tag">添加标签</button>
                          <div class="popup-tag" v-if="popup">
                            <input v-model="inputTag" type="text" name="">
                            <button @click="_addPushTag" class="popup-addTag">添加</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="upload-btn">
                      <button type="button" @click="_uplosings">Upload</button>
                      <button type="button" :data-cancelIndex = 'index' @click="_upcancel" class="upload-cancel">Cancel</button>
                    </div>
              </div>
        </form>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import '../Publicjs/filter.js'

export default {
  props: ['ic', 'index', 'category'],
  data () {
    return {
      checkedNames: [],
      getAppStore: [],
      updataTga: [],
      inputTag: '',
      popup: false
    }
  },
  computed: {
    ...mapGetters([
      'loadtexts',
      'outintimagedata'
    ])
  },
  methods: {
    ...mapActions([
      'loadtext',
      'postimgdata',
      'deleteimagedata'
    ]),
    _AppStore (el) {
      let __url__ = ''
      if (el.target.dataset.platform === 'ios') {
        __url__ = 'https://itunes.apple.com/search?term=' + this.ic.name + '&country=CN&media=software&limit=10'
      } else {
        __url__ = 'http://apps.wandoujia.com/api/v1/search/$' + this.ic.name + '?opt_fields=title,icons.px256,packageName,apks.versionName'
      }
      this._searchShow = !this._searchShow
      let self = this
      self.$http.get(__url__).then((response) => {
        if (el.target.dataset.platform === 'ios') {
          let _results = JSON.parse(response.data)
          self.getAppStore = _results.results
        } else {
          self.getAppStore = response.data.appList
        }
      }).then((response) => {
      })
    },
    _upcancel (el) {
      // console.log(el.target.dataset.cancelindex)
      console.log(this.outintimagedata)
      this.deleteimagedata(el.target.dataset.cancelindex)
    },
    _uplosings () {
      this.postimgdata(this.ic)
    },
    _popupShow () {
      this.popup = true
    },
    _addPushTag () {
      this.updataTga.push(this.inputTag)
      this.ic['tag'] = this.updataTga
      this.popup = false
    },
    _deleteTag (el) {
      this.updataTga.splice(el.target.dataset.tag, 1)
      this.ic['tag'] = this.updataTga
    },
    _getAppData (event) {
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
    _androidFilter () {

    }
  }
}
</script>
