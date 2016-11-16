<style lang="scss">
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
      text-align:center;
      button{
          color:#222;
          font-size: 20px;
          margin: 0 auto;
          padding: 15px 45px;
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
            font-size: 20px;
            color: #222222;
            letter-spacing: 0.2px;
            margin-bottom:10px;
          }
          p.fileimge-size{
            font-size: 16px;
            color: #CDCDCD;
            letter-spacing: 0.16px;
          }
        }
     }
  }
  .informations-uploade{
    display: flex;
    flex:row;
    padding: 20px 0;
    & > div.upload-img{
      flex:4;
      margin-right:50px;
      img{
        width:100%;
      }
    }
    & > div.upload-information{
      flex:6;
      .upload-form-gurop{
        margin-bottom:20px;
        &>label,&>h5{
          display:block;
          padding:0 0 5px 0;
          font-family: Roboto-Bold;
          font-size: 14px;
          color: #222222;
          letter-spacing: -0.09px;
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
              // width:100%;
              // height:100%;
            }
          }
        }
        input[type="text"] {
          width:100%;
          border:none;
          background: #EFEFEF;
          border-radius: 5px;
          padding:10px 15px;
        }
      }
    }
  }
  .container-img{

  }
</style>
<template>
 <!--  <div class="updata">
     <el-upload
      action="http://inspire-api.stoyard.com/index.php/api/inspire/adddata"
      type="drag"
      :multiple="true"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
    >
          <i class="el-icon-upload"></i>
          <div class="el-dragger__text">
            将文件拖到此处，或点击图片上传
            <p>当前仅支持jpg、png图片</p>
          </div>
    </el-upload> -->

 <!--      <el-upload
      action="//jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove">
      <el-button size="small" type="primary">UPLOAD</el-button>
    </el-upload> 

  </div>
-->

<div class="container">

  <div class="file-upload">
    <!-- <input type="file" accept="image/*" name=""> -->
        <div @dragover.stop.prevent="handleDragOver" @drop.stop.prevent="handleFilSelect" class="drop_zone">
        <!-- {{imgInformations}} -->
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

    <template v-if="imgInformations.length !== 0">
    <form>
    <div class="informations-uploade" v-for="ic in imgInformations">
        <div class="upload-img">
          <img :src="ic.url">
        </div>

        <div class="upload-information">
            <div class="upload-form-gurop">
              <label>Name</label>
              <input type="text" name="">
            </div>

            <div class="upload-form-gurop">
              <label>Link</label>
              <input type="text" name="">
            </div>

            <div class="upload-form-gurop ">
              <h5>Platform</h5>
              <div class="gurop-radio">
                <div class="platform-laber" v-for="(ic, index) in Platform">
                  <label :for="'icinfor' + index" :class="{active: index === index}">{{ic.infor}}</label>
                  <input :id="'icinfor' + index" type="radio" name="icinfor">
                </div>
              </div>
            </div>

            <div class="upload-form-gurop">
              <h5>Category</h5>
              <div>
                <label></label>
                <input type="checkbox" name="">
              </div>
            </div>

            <div class="upload-form-gurop">
              <h5>Tag</h5>
              <div></div>
            </div>
        </div>
      </div>
    </form>
    <button>upLoad</button>
    </template>


    <!-- <div class="upload-btn">
        <button>Upload</button>
    </div> -->
  </div>
</div>

</template>

<script>
  export default {
    data () {
      return {
        imgInformations: '',
        imgIn: [],
        Platform: [
          {infor: 'iPhone'},
          {infor: 'iPad'},
          {infor: 'Android'},
          {infor: 'Web'}
        ]
      }
    },
    methods: {
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
              imgase['size'] = file.size
              self.imgIn.push(imgase)
              self.imgInformations = self.imgIn
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