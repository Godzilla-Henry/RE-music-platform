<template>
    <Carousel 
        :value="datas" 
        :numVisible="8" 
        :numScroll="1" 
        :responsiveOptions="responsiveOptions"
        :showIndicators = "false"
    >
        <template #item="slotProps">
        <div class="Leaderboard-card">
            <div class="Leaderboard-img"></div>
            <p>{{slotProps.data.singer}}</p>
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
                singer: "周杰倫"
            },
            {
                singer: "周杰倫"
            },
            {
                singer: "周杰倫"
            },
            {
                singer: "周杰倫"
            },
            {
                singer: "周杰倫"
            },
            {
                singer: "周杰倫"
            },
            {
                singer: "周杰倫"
            },
            {
                singer: "周杰倫"
            },
        ]);
        const responsiveOptions = ref([
            {
                breakpoint: '1920px',
                numVisible: 7,
                numScroll: 1
            },
            {
                breakpoint: '1700px',
                numVisible: 6,
                numScroll: 1
            },
            {
                breakpoint: '1200px',
                numVisible: 4,
                numScroll: 1
            },
            {
                breakpoint: '768px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '500px',
                numVisible: 2,
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

<style lang="scss" scoped>
    .Leaderboard-card{
        /* position: relative; */
        height: 180px;
        width: 130px;
        /* background: #FFFFFF; */
        /* border-radius: 20px; */
        margin: auto;
        overflow: hidden;
        p{
            margin: 10px;
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            color: #000000;
        }
    }
    .Leaderboard-img{
        width: 130px;
        height: 130px;
        background: #CECECE;
        border-radius: 50%;
    }
</style>