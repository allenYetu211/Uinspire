<template>
  <div class="moodboard-datail-projects">
    <div class="app-container">
      <ul class="moodboard-projects">
        <router-link :to="{name: 'MoodBoardDetailView'}" tag="li" v-for="infor in infordata">
          <div class="project-introduce">
            <img :src="infor.url">
          </div>
          <p class="gl-fb">{{infor.appname}}</p>
          <p class="gl-ftcolor-gray">{{infor.screenshot}} Screenshot</p>
        </router-link>
        <li>
          <div class="add-projects gl-bgcolor-gray-f7 gl-ftcolor-gray-ab">
            <div>
                Add Moodboard
            </div>
          </div>
        </li>
      </ul>
    </div>
  
  </div>
</template>

<script>
export default {
  data () {
    return {
      infordata: [
      {url: 'static/img1.jpg', appname: 'Walkthrough', screenshot: '22'},
      {url: 'static/img1.jpg', appname: 'Walkthrough', screenshot: '22'},
      {url: 'static/img2.jpg', appname: 'Walkthrough', screenshot: '22'},
      {url: 'static/img3.jpg', appname: 'Walkthrough', screenshot: '22'},
      {url: 'static/img4.jpg', appname: 'Walkthrough', screenshot: '22'},
      {url: 'static/img5.jpg', appname: 'Walkthrough', screenshot: '22'},
      {url: 'static/img6.jpg', appname: 'Walkthrough', screenshot: '22'},
      {url: 'static/img7.jpg', appname: 'Walkthrough', screenshot: '22'},
      {url: 'static/img8.jpg', appname: 'Walkthrough', screenshot: '22'},
      {url: 'static/img9.jpg', appname: 'Walkthrough', screenshot: '22'},
      {url: 'static/img10.jpg', appname: 'Walkthrough', screenshot: '22'}
      ]
    }
  }
}
</script>

<style lang="scss">
  .moodboard-datail-projects{
      ul.moodboard-projects{
        li{
          width: calc(100% / 4 - 20px);
          margin: 10px;
          display: inline-block;
          cursor: pointer;
          &:last-child{
            float: right;
          }
          p{
            margin: 10px 0;
            text-align: center;
            &:first-child {
              font-size: 16px;
            }
            &:last-child{
              font-size: 12px;
            }
          }
          .project-introduce, .add-projects{
            width: 100%;
            height: 0;
            padding-bottom: 68%;
            overflow: hidden;
          }
          img{
            width: 100%;
          }
        }
         .add-projects {
            position: relative;
            div{
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
         }
      }
  }


</style>
