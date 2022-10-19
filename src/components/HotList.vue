<template>
    <Carousel 
        :value="datas" 
        :numVisible="5" 
        :numScroll="1" 
        :responsiveOptions="responsiveOptions"
        :showIndicators = "false"
    >
        <template #item="slotProps">
        <div class="card Leaderboard-card">
            <div class="Leaderboard-img"></div>
            <div class="card-body">
                <p id="songName">
                    {{slotProps.data.songName}}
                </p>
                <small id="singer">
                    {{slotProps.data.singer}}
                </small>
            </div>
        </div>
        </template>
    </Carousel>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const datas = ref([
            {
                songName: "馬拉美的星期二",
                singer: "吳青鋒"
            },
            {
                songName: "馬拉美的星期二",
                singer: "吳青鋒"
            },
            {
                songName: "馬拉美的星期二",
                singer: "吳青鋒"
            },
            {
                songName: "馬拉美的星期二",
                singer: "吳青鋒"
            },
            {
                songName: "馬拉美的星期二",
                singer: "吳青鋒"
            },
        ]);
        const responsiveOptions = ref([
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '600px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '480px',
                numVisible: 1,
                numScroll: 1
            }
        ]);

        return { 
            datas,
            responsiveOptions,
        }
    }
}
</script>

<style lang="css" scoped>
    .Leaderboard-card{
        height: 280px;
        width: 186px;
        background: #FFFFFF;
        border-radius: 20px;
        margin: auto;
        overflow: hidden;
        text-align: left;
    }
    .Leaderboard-img{
        width: 100%;
        height: 186px;
        background: #CECECE;
    }
    .Leaderboard-card p{
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
        margin-bottom: 5px;
    }
    .Leaderboard-card small{
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #888888;
    }
</style>