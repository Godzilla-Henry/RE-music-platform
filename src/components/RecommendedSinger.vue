<template>
    <Carousel 
        :value="datas" 
        :numVisible="6" 
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
        /* position: relative; */
        height: 180px;
        width: 130px;
        /* background: #FFFFFF; */
        /* border-radius: 20px; */
        margin: auto;
        overflow: hidden;
    }
    .Leaderboard-img{
        width: 130px;
        height: 130px;
        background: #CECECE;
        border-radius: 50%;
    }
    .Leaderboard-card p{
        margin: 10px;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
    }
</style>