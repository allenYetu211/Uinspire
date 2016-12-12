<template>
  <div class="indexApp">

    <div class="app-informations">

      <div class="app-infor-left">
        <div class="app-logo">
          <img :src="appinformations.url">
        </div>
        <div class="app-about">
          <p>{{appinformations.name}}</p>
          <div>
            <span>View in Appstore</span>
            <span>Download</span>
          </div>
        </div>
      </div>

      <div class="app-infor-right">
        <p><span>Developer</span>{{appinformations.Developer}}</p>
        <p><span>Category</span>{{appinformations.Category}}</p>
        <p><span>Lastest Version</span>{{appinformations.LastestVersion}}</p>
      </div>

    </div>

    <div class="app-version">
      <div class="app-version-information"></div>

      <div class="app-version-introduce">
        <ul>
          <li v-for= "introduce in infordata">
            <div>
              <img :src="introduce.url">
            </div>
            <p>{{introduce. appname}}</p>
          </li>
        </ul>
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
  .indexApp{
    .app-informations{
      width: 760px;
      margin: 0 auto;
      border-bottom: 1px solid #e0e0e0;
      img{
        width: 60px;
        height: 60px;
      }
    }
  }
</style>