<style lang="scss" scoped>
  .informations-uploade{
    display: flex;
    flex:row;
    padding: 50px 0;

    & > div.file-img-information{
      flex:4;
      margin-right:50px;
      div.upload-img{
        margin-bottom:20px;
        img{
          width:100%;
          box-shadow: 0 3px 9px 0 rgba(0,0,0,0.30);
        }
      }
      .file-img-imfor{
        p{
          padding:5px 0;
          font-weight:700;
          font-size: 12px;
          color: #222222;
          letter-spacing: 0.12px;
        }
      }
      span.infoamtions-r{
        font-family: PingFang SC;
        float: right;
      }
    }
    & > div.upload-information{
      flex:6;
      .upload-form-gurop{
        margin-bottom:20px;
        &>label,&>h5{
          display:block;
          padding:0 0 5px 0;
          font-weight:700;
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
</style>

<template>
<div>
    <div class="informations-uploade">
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
              <input type="text" name="">
            </div>

            <div class="upload-form-gurop">
              <label>Link</label>
              <input type="text" name="">
            </div>

<!-- Platform -->
           <!--  <div class="upload-form-gurop ">
              <h5>Platform</h5>
              <div class="gurop-radio">
                <div class="platform-laber" v-for="(pl, inx) in Platform">
                  <label @click="_getindex" :data-inx= "inx" :for="'icinfor_list'+ index + inx"
                   :class="{active: inx === actionsInx}">{{pl.infor}}</label>
                  <input :id="'icinfor_list'+ index + inx" type="radio" name="icinfor">
                </div>
              </div>
            </div> -->

            <div class="upload-form-gurop">
              <h5>Category</h5>
              <div>
                <!-- <div class="category-checkbox" :class="{active: categoryActive}" v-for="(ck, ins) in category">
                  <input @click.stop="_categoryActive" :id="'ckcategory' + index + ins "  type="checkbox" name="">
                  <i class="sprite_checkbox"></i>
                  <label @click.stop="_categoryActive" :for="'ckcategory' + index + ins ">{{ck.infor}}</label>
                </div> -->
                <mation-checkbox v-for="(ck, ins) in category" v-on:change="checkboxChange" :checkedList="checkedList" :index="index" :ck="ck" :ins="ins"></mation-checkbox>
              </div>
            </div>

            <div class="upload-form-gurop">
              <h5>Tag</h5>
              <div>
                <input type="text" name="">
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import MationCheckbox from './updataPage-information-checkbox'
export default {
  components: {
    MationCheckbox
  },
  props: ['ic', 'index'],
  data () {
    return {
      categoryActive: false,
      category: [
        {infor: '主页'},
        {infor: '启动页'},
        {infor: '使用引导'},
        {infor: '菜单导航'},
        {infor: '注册/登陆'},
        {infor: '个人中心'},
        {infor: '列表页'},
        {infor: '图片展示'},
        {infor: '内容详情'},
        {infor: '评论/消息'},
        {infor: '搜索'},
        {infor: '设置'},
        {infor: '数据'},
        {infor: '关于'},
        {infor: '下载/反馈'},
        {infor: '其他'}
      ],
      Platform: [
        {infor: 'iPhone'},
        {infor: 'iPad'},
        {infor: 'Android'},
        {infor: 'Web'}
      ],
      actionsInx: '',
      checkedList: []
    }
  },
  methods: {
    _getindex (el) {
      this.actionsInx = window.Number(el.target.dataset.inx)
    },
    checkboxChange (ev) {
      console.log('event', ev)
      if (ev.checked && !this.ckeckedList.indexOf(ev.name)) {
        console.log('checked', ev.name)
      } else {
        console.log('uncheck', ev.name)
      }
    }
  }
}
</script>