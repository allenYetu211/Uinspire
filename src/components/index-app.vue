<template>

<div class="indexApp">
    <div class="app-border-line">
        <div class="app-container clearfix">
            <div class="app-informations">
                <div class="app-infor-left">
                    <div class="app-logo">
                        <img :src="appinformations.url">
                    </div>
                    <div class="app-about">
                        <p class="gl-fb">{{appinformations.name}}</p>
                        <div>
                            <button class="gl-ftcolor-gray">
                              <i class="sprite_Appstore"></i>View in Appstore
                            </button>
                            <button class="gl-ftcolor-gray">
                              <i class="sprite_Download"></i>Download
                            </button>
                        </div>
                    </div>
                </div>
                <div class="app-infor-right">
                    <p><span class="gl-fb">Developer : </span>{{appinformations.Developer}}</p>
                    <p><span class="gl-fb">Category : </span>{{appinformations.Category}}</p>
                    <p><span class="gl-fb">Lastest Version : </span>{{appinformations.LastestVersion}}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="app-version">
        <div class="app-version-introduce app-border-line">
            <div class="app-version-information gl-ftcolor-black">Version {{appinformations.LastestVersion}}</div>
            <div class="app-container clearfix">
                <ul>
                    <li v-for="introduce in infordata">
                        <div>
                            <img :src="introduce.url">
                        </div>
                        <p>{{introduce. appname}}</p>
                    </li>
                </ul>
            </div>

            <div class="app-version-count gl-ftcolor-gray">{{infordata.length}} screenshot</div>
        </div>

    </div>
</div>


</template>

<script>
export default {
  data () {
    return {
      appinformations: {
        url: 'static/img1.jpg',
        name: 'PayPal – Send money and manage your payments',
        Developer: 'PayPal, Inc',
        Category: 'Finance',
        LastestVersion: '6.7.0'
      },
      infordata: [
      {url: 'static/img1.jpg', appname: 'Walkthrough'},
      {url: 'static/img1.jpg', appname: 'Walkthrough'},
      {url: 'static/img2.jpg', appname: 'Walkthrough'},
      {url: 'static/img3.jpg', appname: 'Walkthrough'},
      {url: 'static/img4.jpg', appname: 'Walkthrough'},
      {url: 'static/img5.jpg', appname: 'Walkthrough'},
      {url: 'static/img6.jpg', appname: 'Walkthrough'},
      {url: 'static/img7.jpg', appname: 'Walkthrough'},
      {url: 'static/img8.jpg', appname: 'Walkthrough'},
      {url: 'static/img9.jpg', appname: 'Walkthrough'},
      {url: 'static/img10.jpg', appname: 'Walkthrough'},
      {url: 'static/img11.jpg', appname: 'Walkthrough'}
      ]
    }
  }
}
</script>

<style lang="scss">
.sprite_index-app{
    display:inline-block;
    background:url('../assets/svg_sprite.svg') no-repeat;
    width:20px;
    height:20px;
    vertical-align: middle;
    margin-right: 5px;
}
.sprite_Appstore{
  @extend .sprite_index-app;
  background-position: -180px -151px;
}
.sprite_Download{
  @extend .sprite_index-app;
  background-position: -160px -150px;
}
    .app-container{
      width: 980px;
      margin: 0 auto;
      padding: 25px 0 20px;
      position: relative;
    }
  .indexApp{

    .app-border-line{
      border-bottom: 1px solid #eee;
    }
    .app-informations{
      width: 100%;
      height: 85px;
      padding: 0 10px;
      display: flex;
      img{
        width: 80px;
        height: 80px;
        vertical-align: middle;
      }
      .app-infor-left{
          float: left;
          flex: 3;
          .app-logo img{
            border-radius:20px;
          }
          .app-about{
            padding: 0 20px;
            width: 75%;
            button{
              background-color: transparent;
              border: none;
              font-size: 14px;
              cursor:pointer;
              padding:0;
              margin-right:10px;
            }
            p{
              font-size: 20px;
              line-height: 24px;
            }
            div{
              margin-top: 13px;

            }
          }
        div{
          float: left;

        }
      }
      .app-infor-right{
        flex: 2;
        float: right;
        font-size: 14px;
        p{
          margin-bottom: 12px;
        }
      }
    }
    .app-version-introduce{
      position: relative;
      li{
        width: calc(100% / 4 - 20px);
        display:inline-block;
        margin: 0px 10px 15px;
        p{
          text-align: center;
          padding: 10px 0;
          font-size: 12px;
        }
        img{
          width: 100%;
        }
      }
      .app-version-information{
        position: absolute;
        left: 20px;
        top: 25px;
        font-size: 16px;
      }
      .app-version-count{
        position: absolute;
        right: 20px;
        top: 25px;
        font-size:14px;
      }
    }
  }
</style>