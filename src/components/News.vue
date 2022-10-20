<template>
    <Carousel 
        :value="datas" 
        :numVisible="4" 
        :numScroll="1" 
        :responsiveOptions="responsiveOptions"
        :showIndicators = "false"
    >
        <template #item="slotProps">
        <div class="card Leaderboard-card">
            <div class="Leaderboard-img"></div>
            <div class="card-body">
            <p>{{ slotProps.data.title }}</p>
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
                title: "前十之外！藏在榜單裡的 Hidden Gems"
            },
            {
                title: "前十之外！藏在榜單裡的 Hidden Gems"
            },
            {
                title: "前十之外！藏在榜單裡的 Hidden Gems"
            },
            {
                title: "前十之外！藏在榜單裡的 Hidden Gems"
            },
        ]);
        const responsiveOptions = ref([
            {
                breakpoint: '1920px',
                numVisible: 4,
                numScroll: 1
            },
            {
                breakpoint: '1700px',
                numVisible: 3,
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

<style lang="scss" scoped>
    .Leaderboard-card{
        height: 390px;
        width: 340px;
        background: #FFFFFF;
        border-radius: 20px;
        margin: auto;
        overflow: hidden;
        p{
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            color: #000000;
        }
    }
    .Leaderboard-img{
        width: 100%;
        height: 300px;
        background: #CECECE;
    }
</style>