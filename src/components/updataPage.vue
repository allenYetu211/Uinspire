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
  
  .file-upload{
    margin-top:80px;
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
        }
    }
  }
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
          padding:10px 15px;
        }
        input::placeholder{
          color:#D7D7D7;
          font-family: Roboto-Light;
        }
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
            background: url(/static/img/css_sprite.db7a9a8.png) no-repeat;
            &.sprite_checkbox{
              background-position: -140px -120px;
            }
      }
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
           <div class="informations-uploade" v-for="(ic, index) in imgInformations">
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
                      <p class="Colors">
                      Colors
                        <span class="infoamtions-r"></span>
                      </p>
                    </div>

                  </div>

                  <div class="upload-information">
                      <div class="upload-form-gurop">
                        <label>Name</label>
                        <input type="text" name="" placeholder="Input APP Name Search">
                      </div>

                      <div class="upload-form-gurop">
                        <label>Link</label>
                        <input type="text" name="">
                      </div>

                      <div class="upload-form-gurop">
                        <h5>Category</h5>
                        <div class="clearfix">
                           <div class="category-checkbox" v-for="(ck, ins) in category">
                              <input  :id="'ckcategory_' + index + ins " style="display:none"  type="checkbox" name="">
                              <i class="sprite_checkbox"></i>
                              <label @click="showcheck" :for="'ckcategory_' + index + ins " >{{ck}}</label>
                          </div>
                        </div>
                      </div>

                      <div class="upload-form-gurop">
                        <h5>Tags</h5>
                        <div>
                          <input type="text" name="">
                        </div>
                      </div>

                      <div class="upload-btn">
                        <button @click="_uplosings">Upload</button>
                      </div>

                  </div>
              </form>
          </div>
     </div>

    

  </div>
</div>

</template>

<script>
  // import upDataPageInformation from '../view/updataPage-inforamtion'
  import { mapActions, mapGetters } from 'vuex'
  export default {

    components: {
      // upDataPageInformation
    },
    data () {
      return {
        imgInformations: '',
        imgIn: [],
        categ: [],
        category: [],
        checkedNames: []
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
      showcheck () {
        console.log(this.checkedNames)
      },
      _uplosings () {
        this.loadtext()
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
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
                  break
                case '01024768': case '020481536': case '027322048': case '07681024': case '015362048': case '020482732':
                  imgase['Platform'] = 'iPad'
                  break
                case '07201280': case '010801920':
                  imgase['Platform'] = 'Android'
                  break
                default:
                  imgase['Platform'] = 'WEB'
                  break
              }
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