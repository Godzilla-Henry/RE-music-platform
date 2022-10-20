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
            <p>{{slotProps.data.type}}</p>
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
                type: "華語"
            },
            {
                type: "西洋"
            },
            {
                type: "日語"
            },
            {
                type: "韓語"
            },
            {
                type: "韓語"
            },
            {
                type: "韓語"
            },
        ]);
        const responsiveOptions = ref([
            {
                breakpoint: '1920px',
                numVisible: 5,
                numScroll: 1
            },
            {
                breakpoint: '1700px',
                numVisible: 4,
                numScroll: 1
            },
            {
                breakpoint: '1200px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '768px',
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
        position: relative;
        height: 255px;
        width: 255px;
        background: #FFFFFF;
        border-radius: 20px;
        margin: auto;
        overflow: hidden;
    }
    .Leaderboard-img{
        width: 100%;
        height: 100%;
        background: #CECECE;
    }
    .Leaderboard-card p{
        position: absolute;
        right: 15px;
        bottom: 15px;
        margin: 0;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
    }
</style>