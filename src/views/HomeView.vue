<template>
  <div class="container-fluid">
    <div class="row">
      <!-- 看板 -->
      <div class="col-md-12" style="padding: 0px;">
        <CustomCarousel />
      </div>
      <!-- 最新消息 -->
      <div class="col-md-12 content" >
        <News />
      </div>
      <!-- 廣告 -->
      <div class="col-md-12 content" >
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="ad"></div>
            </div>
            <div class="col-md-6">
              <div class="ad"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 排行榜 -->
      <div class="col-md-12 content" >
        <div class="title">
          <div class="mark"></div>
          排行榜
        </div>
        <Leaderboard />
      </div>
      <!-- 熱門推薦 -->
      <div class="col-md-12 content" >
        <div class="title">
          <div class="mark"></div>
          熱門推薦

          <button class="more">
            更多
            <i class="fa-sharp fa-solid fa-angle-right"></i>
          </button>
        </div>
        <HotList />
      </div>
      <!-- 曲風類型 -->
      <div class="col-md-12 content" >
        <div class="title">
          <div class="mark"></div>
          曲風類型

          <button class="more">
            更多
            <i class="fa-sharp fa-solid fa-angle-right"></i>
          </button>
        </div>
        <MelodyType />
      </div>
      <!-- 推薦歌手 -->
      <div class="col-md-12 content" >
        <div class="title">
          <div class="mark"></div>
          推薦歌手
          <button class="tab" :class="{ active : isActiveList[0].isActive}" @click="tabClick(0)">華語</button>
          <button class="tab" :class="{ active : isActiveList[1].isActive}" @click="tabClick(1)">歐美</button>
          <button class="tab" :class="{ active : isActiveList[2].isActive}" @click="tabClick(2)">日韓</button>

          <button class="more">
            更多
            <i class="fa-sharp fa-solid fa-angle-right"></i>
          </button>
        </div>
        <RecommendedSinger />
      </div>
    </div>
  </div>
</template>

<script>
import CustomCarousel from "../components/CustomCarousel.vue"
import News from "../components/News.vue"
import Leaderboard from "../components/Leaderboard.vue"
import HotList from "../components/HotList.vue"
import MelodyType from "../components/MelodyType.vue"
import RecommendedSinger from "../components/RecommendedSinger.vue"

import { ref } from 'vue'
export default {
  components: {
    CustomCarousel,
    News,
    Leaderboard,
    HotList,
    MelodyType,
    RecommendedSinger
  },
  setup() {

    /* RecommendedSinger */
    const isActiveList = ref([
      {
        Type: "華語",
        isActive: true
      },
      {
        Type: "歐美",
        isActive: false
      },
      {
        Type: "日韓",
        isActive: false
      },
    ]);
    const tabClick = (index) => {
      isActiveList.value.forEach(el => {
        el.isActive = false;
      });
      isActiveList.value[index].isActive = true;
    }
    /* End RecommendedSinger */
    

    return { 
      isActiveList,
      tabClick
    }
	}
}
</script>

<style lang="scss" scoped>
  .content{
    padding: 20px 9vw;
  }

  .ad{
    height: 225px;
    background: #CECECE;
    border-radius: 30px;
    margin: 20px 0px;
  }

  .title{
    width: 80vw;
    text-align: left;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
    display: flex;
    align-items: center;
    margin: 30px auto;
    padding: 0px 20px;
    position: relative;
    .mark{
      width: 27px;
      height: 27px;
      border-radius: 50%;
      background: #CECECE;
      margin: 0px 5px;
    }
  }

  .more{
    position: absolute;
    right: 20px;
    background: transparent;
    border: none;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
  }

  .tab{
    background: transparent;
    border: none;
    width: 62px;
    height: 25px;
    background: #CECECE;
    border-radius: 30px;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #575757;
    margin-left: 30px;
    &.active{
      background: #575757;
      color: #CECECE;
    }
  }

  @media screen and (max-width:768px){
    .tab{
      display: none;
    }
  }
</style>
