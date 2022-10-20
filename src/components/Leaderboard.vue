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
            <div class="card-body">
                <div id="describe">
                    <small>{{slotProps.data.passedTime}}</small>
                    <p>{{slotProps.data.title}}</p>
                </div>
                <ul class="list-group list-music">
                    
                    <li 
                    class="list-group-item"
                    v-for="(item ,index) in slotProps.data.songs"
                    :key="index"
                    >
                        <span>{{index+1}}</span>
                        <div class="image"></div>
                        <div class="song">
                            <p id="songName">
                                {{item.songName}}
                            </p>
                            <small id="singer">
                                {{item.singer}}
                            </small>
                        </div>
                    </li>
                    
                </ul>
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
                passedTime: "20小時前",
                title: "綜合排行",
                songs:[
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    }
                ]
            },
            {
                passedTime: "20小時前",
                title: "熱門排行",
                songs:[
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    }
                ]
            },
            {
                passedTime: "20小時前",
                title: "新歌排行",
                songs:[
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    }
                ]
            },
            {
                passedTime: "20小時前",
                title: "新歌排行",
                songs:[
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    },
                    {
                        songName: "漫漫長夜",
                        singer: "Deca joins"
                    }
                ]
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

<style lang="css" scoped>
    .Leaderboard-card{
        height: 435px;
        width: 340px;
        background: #FFFFFF;
        border-radius: 20px;
        box-shadow: 2px 2px 18px 2px rgba(0, 0, 0, 0.08);
        margin: auto;
        overflow: hidden;
    }
    .Leaderboard-card #describe{
        text-align: left;
    }
    .Leaderboard-card #describe small{
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
        color: #888888;
    }
    .Leaderboard-card #describe p{
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
        margin-bottom: 5px;
    }
    .Leaderboard-card .list-music{
        text-align: left;
    }
    .Leaderboard-card .list-music .list-group-item{
        border: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 0px;
    }
    .Leaderboard-card .list-music .list-group-item span{
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
        margin-right: 10px;
    }
    .Leaderboard-card .list-music .list-group-item .image{
        width: 49px;
        height: 49px;
        background: #CECECE;
        border-radius: 5px;
        margin-right: 5px;
    }
    .Leaderboard-card .list-music .list-group-item #songName{
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #000000;
        margin: 0px;
    }
    .Leaderboard-card .list-music .list-group-item #singer{
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
        color: #888888;
    }
</style>