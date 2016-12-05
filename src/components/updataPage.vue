<template>
<div class="loaderPage">
    <div class="al-container">
        <div class="file-upload">
            <div 
            @dragover.stop.prevent="handleDragOver" 
            @drop.stop.prevent="handleFilSelect" 
            class="drop_zone">
                    <div class="informations  list-complete-m-item" 
                    v-for="(ic,indexcount) in outintimagedata"  
                    :key="indexcount">
                        <div class="file-img">
                            <img :src="ic.url">
                        </div>
                        <div class="file-imginfromation">
                            <p class="fileimge-name">{{ic.imgname}}</p>
                            <p class="fileimge-size">{{ic.size}}KB</p>
                        </div>
                    </div>
            </div>
            <div v-if="outintimagedata.length !== 0">
                    <up-data-page-form
                     v-for="(ic, index) in outintimagedata"
                     :category='category' 
                     :ic='ic' 
                     :index="index"
                     :key="index" 
                     class="Initialize-information-item">
                     </up-data-page-form>
            </div>
        </div>
    </div>
</div>

</template>

<script>
  import UpDataPageForm from './updataPage-form'
  // import ColorThief from '../../static/color-thief'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    components: {
      UpDataPageForm
    },
    data () {
      return {
        imgInformations: '',
        imgIn: [],
        category: [],
        checkbox_model: [],
        targetHeight: ''
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$http.get('http://inspire-api.stoyard.com/index.php/api/inspire/getCategoryList').then((response) => {
          this.categ = JSON.parse(response.data)
          for (let i = 0; i < this.categ.data.length; i++) {
            this.category.push(this.categ.data[i].name_zh)
          }
        }).then((repones) => {
        })
      })
    },
    computed: {
      ...mapGetters([
        'loadtexts',
        'getRetruenData',
        'outintimagedata',
        'getprogress'
      ])
    },
    methods: {
      ...mapActions([
        'loadtext',
        'storeimagedata'
      ]),
      watchHeight (el) {
        console.log(el)
      },
      _dragover () {
      },
      handleDragOver () {
      },
      handleFilSelect (evt) {
        let i = 0
        let files = evt.dataTransfer.files
        let self = this
        let funApp = function () {
          let images = {}
          let file = files[i]
          if (file) {
            var reader = new window.FileReader()
            reader.onload = function (oireader) {
              images['file'] = file
              images['url'] = oireader.target.result
              images['imgname'] = file.name
              images['size'] = Math.round(file.size / 1024)
              let imc = new window.Image()
              imc.src = oireader.target.result
              images['width'] = imc.naturalWidth
              images['height'] = imc.naturalHeight
              let matching = '0' + imc.naturalWidth + imc.naturalHeight
              matching = matching.toString()
              switch (matching) {
                case '0640960': case '06401136': case '07501334': case '012422208':
                  images['Platform'] = 'iPhone'
                  images['PlatformIndex'] = 1
                  break
                case '01024768': case '020481536': case '027322048': case '07681024': case '015362048': case '020482732':
                  images['Platform'] = 'iPad'
                  images['PlatformIndex'] = 2
                  break
                case '07201280': case '010801920':
                  images['Platform'] = 'Android'
                  images['PlatformIndex'] = 3
                  break
                default:
                  images['Platform'] = 'WEB'
                  images['PlatformIndex'] = 4
                  break
              }
              images['Category'] = []
              images['name'] = ''
              images['tag'] = ''
              images['link'] = ''
              images['icon_link'] = ''
              images['app_category'] = ''
              images['version'] = ''
              self.imgIn.push(images)
              self.imgInformations = self.imgIn
              self.storeimagedata(self.imgInformations)
              i++
              funApp()
            }
            reader.readAsDataURL(file)
          }
        }
        funApp()
      }
    }
  }
</script>

<style lang="scss" scoped>
$color:#EFEFEF;
  .drop_zone{
    padding:20px 10px;
    height:300px;
    overflow-y:scroll;
    margin: 0 auto;
    background: #FCFCFC;
    border: 3px dashed #EFEFEF;
    border-radius: 7px;
    position:relative;
  }
  .informations{
    width: calc(100% / 2 - 20px);
    display: inline-block;
    padding:15px 15px;
    min-height:100px;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);
    border-radius: 2px;
    margin:10px 10px;
    &>div{
      float: left;
      &.file-img{
          width: 20%;
          height: 0;
          overflow: hidden;
          padding-bottom: 20%;
          img{
            max-width:100%;
        }
      }
        &.file-imginfromation{
          padding:0 10px;
          p.fileimge-name{
            font-size: 16px;
            color: #222222;
            letter-spacing: 0.2px;
            margin-bottom:10px;
          }
          p.fileimge-size{
            font-size: 12px;
            color: #CDCDCD;
            letter-spacing: 0.16px;
          }
        }
     }
  }
  .al-container{
    width:640px;
    margin:0 auto;
  }
 .informations-uploade{
    border-bottom:1px solid #EFEFEF;
    padding: 50px 0;
    // height: 0;
    // padding: 0;
    // overflow:hidden;
  }
 .file-upload{
    margin-top:80px;
  }
  .updataSuccess-line{
    margin: 20px 0;
    position: relative;
    &:after{
          position: absolute;
          bottom: 1px;
          content: "";
          height: 1px;
          width: 100%;
          background: #222;
    }
  }
  .updataSuccess{
    width: 100%;
    overflow-x: scroll;
    text-overflow: ellipsis;
    white-space: nowrap;
    .updataInsparent{
      display:inline-block;
      margin:0 5px;
      width: 70px;
      height: 60px;
      overflow: hidden;
      position:relative;
        img{
          position:absolute;
          top:0;
          width: 100%;
          max-height:180px;
      }
    }
  }
</style>