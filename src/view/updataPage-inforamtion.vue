<style lang="scss">
</style>

<template>
    <form>
    <div class="informations-uploade">
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
                <div class="platform-laber" v-for="(pl, inx) in Platform">
                  <label @click="_getindex" :data-inx= "inx" :for="'icinfor_list'+ index + inx"
                   :class="{active: inx === actionsInx}">{{pl.infor}}</label>
                  <input :id="'icinfor_list'+ index + inx" type="radio" name="icinfor">
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
</template>

<script>
export default {
  props: ['ic', 'index'],
  data () {
    return {
      Platform: [
        {infor: 'iPhone'},
        {infor: 'iPad'},
        {infor: 'Android'},
        {infor: 'Web'}
      ],
      actionsInx: ''
    }
  },
  methods: {
    _getindex (el) {
      this.actionsInx = window.Number(el.target.dataset.inx)
    }
  }
}
</script>