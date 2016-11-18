<style lang="scss" scoped>
$color:#EFEFEF;
  // .updata{
  //   text-align:center;
  //   padding: 50px 0;
  //   .el-upload{
  //       margin: 0 auto;
  //       width: 60%;
  //       min-width: 40%;
  //       position:relative;
  //       // ul{
  //       //   position:absolute;
  //       //   top: 0;
  //       //   left:0;
  //       //   width:100%;
  //       //   height:100%;
  //       //   border-top:0;
  //       // }
  //       .el-dragger{
  //             width:100%;
  //             height:auto;
  //             padding: 100px 0;
  //             border: 2px dashed $color;
  //             background-color:#FCFCFC;
  //             &:hover{
  //               border-color:$color;
  //             }
  //         }
  //        .el-icon-upload{
  //           color:$color;
  //        }
  //       .el-upload__input{
  //         opacity:0;
  //       }
  //       .el-dragger__text{
  //         color:#CDCDCD;
  //           p{
  //             padding: 10px 0;
  //           }
  //         }
  //     }
  //     .el-upload__inner{
  //       padding:20px;
    
  //     }
  // }
  // 
  

  .drop_zone{
    padding:35px 10px;
    // width:300px;
    // height:300px;
    margin: 0 auto;
    background: #FCFCFC;
    border: 3px dashed #EFEFEF;
    border-radius: 7px;
  }
  .informations{
    // width: calc(100% / 2 -10px);
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

  }
 .file-upload{
    margin-top:80px;
  }
</style>
<template>
<div class="al-container">
  <div class="file-upload">
        <div @dragover.stop.prevent="handleDragOver" @drop.stop.prevent="handleFilSelect" class="drop_zone">
            <div class="informations" v-for="ic in imgInformations">
              <div class="file-img">
                <img :src="ic.url">
              </div>

              <div class="file-imginfromation">
                <p class="fileimge-name">{{ic.name}}</p>
                <p class="fileimge-size">{{ic.size}}KB</p>
              </div>
            </div>
        </div>
        <div v-if="imgInformations.length !== 0">
            <up-data-page-form  v-for="(ic, index) in imgInformations" :category='category' :ic='ic' :index="index"></up-data-page-form>
       </div>

    

  </div>
</div>

</template>

<script>
  import UpDataPageForm from './updataPage-form'

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
        checkbox_model: []
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$http.get('http://inspire-api.stoyard.com/index.php/api/inspire/getCategoryList').then((response) => {
          this.categ = JSON.parse(response.data)
          for (let i = 0; i < this.categ.data.length; i++) {
            this.category.push(this.categ.data[i].name_zh)
          }
          console.log(this.category)
        }).then((repones) => {
        })
      })
    },
    computed: {
      ...mapGetters([
        'loadtexts'
      ])
    },
    methods: {
      ...mapActions([
        'loadtext'
      ]),
      _dragover () {
      },
      handleDragOver () {
      },
      handleFilSelect (evt) {
        let i = 0
        let files = evt.dataTransfer.files
        let self = this
        let funApp = function () {
          let imgase = {}
          let file = files[i]
          if (file) {
            var reader = new window.FileReader()
            reader.onload = function (oireader) {
              imgase['url'] = oireader.target.result
              imgase['name'] = file.name
              imgase['size'] = Math.round(file.size / 1024)

              let imc = new window.Image()
              imc.src = oireader.target.result
              imgase['width'] = imc.naturalWidth
              imgase['height'] = imc.naturalHeight
              let matching = '0' + imc.naturalWidth + imc.naturalHeight
              matching = matching.toString()
              switch (matching) {
                case '0640960': case '06401136': case '07501334': case '012422208':
                  imgase['Platform'] = 'iPhone'
                  imgase['PlatformIndex'] = 1
                  break
                case '01024768': case '020481536': case '027322048': case '07681024': case '015362048': case '020482732':
                  imgase['Platform'] = 'iPad'
                  imgase['PlatformIndex'] = 2
                  break
                case '07201280': case '010801920':
                  imgase['Platform'] = 'Android'
                  imgase['PlatformIndex'] = 3
                  break
                default:
                  imgase['Platform'] = 'WEB'
                  imgase['PlatformIndex'] = 4
                  break
              }
              imgase['Category'] = []
              imgase['name'] = ''
              imgase['link'] = ''
              self.imgIn.push(imgase)
              self.imgInformations = self.imgIn
              i++
              funApp()
            }
            reader.readAsDataURL(file)
          }
          console.log(self.imgInformations)
        }
        funApp()
      }
    }
  }
</script>