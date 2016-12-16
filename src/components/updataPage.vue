<template>
<div class="loaderPage">
    <div class="upload-screenshot">
        <h2 class="gl-fb">Upload <span class="gl-ftcolor-theme">Screenshot</span></h2>
        <p class="gl-ftcolor-gray">Drag or select screenshot file in this box</p>
    </div>
    <div class="al-container">
        <div class="file-upload">
            <div 
            @dragover.stop.prevent="" 
            @drop.stop.prevent="handleFilSelect" 
            class="drop_zone gl-bgcolor-gray-f7">
                    <div class="upload-images" v-if='outintimagedata.length === 0'>
                        <img src="../assets/upload-images-icon.png">
                        <p>Drag or select screenshot file in this box.<br/>Support JPG & PNG file. A file size in less than 5MB;</p>
                    </div>  
                    <div class="informations  list-complete-m-item" 
                    v-for="(ic,indexcount) in outintimagedata"  
                    :key="indexcount">
                        <div class="file-img">
                            <img :src="ic.url">
                        </div>
                        <div class="file-imginfromation">
                            <p class="gl-fb gl-color-black">{{ic.imgname}}</p>
                            <p>{{ic.size}}KB</p>
                            <div class="progressbar-start" v-if="ic.progressbar">
                               <p class="iswaiting" v-if="ic.iswaiting">Waiting</p>
                               <p class="isuploading" v-if="ic.isuploading">Uploading...</p>
                               <p class="gl-ftcolor-theme" v-if="ic.isuploadsuccess">Uploading Success</p>
                               <div 
                              class="file-progress-bar gl-bgcolor-gray-f7" 
                              v-if="ic.progressbar">
                                <span 
                                :style= "'transform: scaleX(' + ic.progress + ')'"
                                :class='{
                                 waiting: ic.iswaiting,
                                 uploading: ic.isuploading,
                                 uploadfaild: ic.isuploadfaild,
                                 uploadsuccess: ic.isuploadsuccess
                                 }'></span>
                              </div>
                            </div>
                        </div>
                    </div>
            </div>
              <transition-group name="uploadsuccess">
              <up-data-page-form
               v-for="(ic, index) in outintimagedata"
               :ic='ic' 
               :index="index"
               :key="index"
                v-if="!ic.isuploadsuccess"
              >
               </up-data-page-form>
               </transition-group>
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
      // this.$nextTick(() => {
      //   this.$http.get('http://inspire.stoyard.com/index.php/api/inspire/getCategoryList').then((response) => {
      //     this.categ = JSON.parse(response.data)
      //     for (let i = 0; i < this.categ.data.length; i++) {
      //       this.category.push(this.categ.data[i].name_en)
      //     }
      //   }).then((repones) => {
      //   })
      // })
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
              if (file.name.slice(-4) !== '.jpg' && file.name.slice(-4) !== '.JPG' && file.name.slice(-5) !== '.jpeg' && file.name.slice(-5) !== '.JPEG' && file.name.slice(-4) !== '.png' && file.name.slice(-4) !== '.PNG') {
                window.alert('Support JPG & PNG file. ')
                return
              }
              images['imgname'] = file.name
              if (file.size > 1024 * 1024 * 5) {
                window.alert(' A file size in less than 5MB.')
                return
              }
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
              images['progressbar'] = false
              images['iswaiting'] = false
              images['isuploading'] = false
              images['isuploadfaild'] = false
              images['isuploadsuccess'] = false
              images['progress'] = 0
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
  .upload-screenshot{
    min-height: 180px;
    padding:50px;
    text-align:center;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
         font-size: 36px;
         margin: 15px 0;
    }
    p {
          font-size: 14px;
          margin-bottom: 5px;
    }
  }
  .drop_zone{
    padding:20px 10px;
    min-height:300px;
    max-height: 600px;
    overflow-y:scroll;
    margin: 0 auto;
    border-radius: 7px;
    position:relative;
    .upload-images{
      position:absolute;
      left: 50%;
      top: 50%;
      transform:translate(-50%, -50%);
      text-align: center;
      img{
        width: 90px;
        padding-bottom: 25px;
        text-align: center;
        margin: 0 auto;
      }
      p{
        
        color: #CDCDCD;
        line-height: 2;
      }
    }
  }
  .informations{
    width: calc(100% / 2 - 20px);
    display: inline-block;
    padding:15px;
    background: #FFFFFF;
    height: 105px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10);    
    margin:10px 10px;
    &>div{
      float: left;
      &.file-img{
          width: 25%;
          height: 0;
          overflow: hidden;
          padding-bottom: 25%;
          border:1px solid #f4f4f4;
          img{
            max-width:100%;
        }
      }
        &.file-imginfromation{
          padding:0 0 0 15px;
          width: 75%;
          position:relative;
          height: 100%;
          p:nth-child(1){
            font-size: 14px;
            line-height: 18px;
            margin-bottom:2px;
          }
          p:nth-child(2){
            font-size: 12px;
            color: #CDCDCD;
            letter-spacing: 0.16px;
          }
          .progressbar-start{
            position: absolute;
            left: 15px;
            right: 0;
            bottom: 0;
            p{
              font-size:12px;
              margin-bottom: 1px;
            }
          }
          .file-progress-bar{
            width: 100%;
            height: 4px;
            position: relative;
            border-radius: 8px;
            overflow:hidden;
            span{
              display: block;
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              right: 0;
              transition: transform 0.5s, opacity 0.5s;
              transform-origin: left;
              &.uploading{
                background-color:#FFFF00;
              }
              &.uploadsuccess{
                background-color:#2EF037;
              }
            }
          }
        }
     }
  }
  .al-container{
    width:700px;
    margin:0 auto;
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