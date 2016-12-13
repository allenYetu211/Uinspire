<template>
  <div class="moodboard">
    <div class="moodboard-head">
        <h2 class="gl-fb"> <span class="gl-ftcolor-theme">Mood</span>board </h2>
        <p class="gl-ftcolor-gray">Drag or select screenshot file in this box</p>

        <div class="moodboard-members" v-if = "$route.name === 'MoodBoardDetailView' ">
          <div v-for=" bers in members" class="members">
            <div class="gl-bgcolor-gray-f7">
              <img src="">
            </div>
          </div>
        </div>
    </div>
    <div class="children-router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      members: [
      { membersportrait: '' },
      { membersportrait: '' },
      { membersportrait: '' }
      ]
    }
  }
}
</script>

<style lang="scss">
  .moodboard-head{
    min-height: 180px;
    padding:50px;
    text-align:center;
    border-bottom: 1px solid #e0e0e0;
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
  .moodboard-members{
    padding: 20px 0;
  }
  .members{
    display: inline-block;
    margin: 0 5px;
    border-radius: 50%;
    overflow: hidden;
    div {
      width: 40px;
      height: 40px;
    }
  }
  .children-router{
    padding: 30px 20px;
  }
</style>
