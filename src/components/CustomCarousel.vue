<template>
    <div class="items">
        <div 
        class="item" 
        :class="{active: classList[0].active, prev: classList[0].prev, next: classList[0].next}"
        >
            <div class="img"></div>
        </div>
        <div 
        class="item" 
        :class="{active: classList[1].active, prev: classList[1].prev, next: classList[1].next}"
        >
            <div class="img"></div>
        </div>
        <div 
        class="item" 
        :class="{active: classList[2].active, prev: classList[2].prev, next: classList[2].next}"
        >
            <div class="img"></div>
        </div>
        <div 
        class="item" 
        :class="{active: classList[3].active, prev: classList[3].prev, next: classList[3].next}"
        >
            <div class="img"></div>
        </div>
        <div 
        class="item" 
        :class="{active: classList[4].active, prev: classList[4].prev, next: classList[4].next}"
        >
            <div class="img"></div>
        </div>

        <div class="button-container">
            <div class="button" @click="gotoPrev()"><i class="fa-sharp fa-solid fa-angle-left"></i></div>
            <div class="button" @click="gotoNext()"><i class="fa-sharp fa-solid fa-angle-right"></i></div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
export default {
    setup(){
        const classList = ref([
            {
                active: false,
                prev: true,
                next: false
            },
            {
                active: true,
                prev: false,
                next: false
            },
            {
                active: false,
                prev: false,
                next: true
            },
            {
                active: false,
                prev: false,
                next: false
            },
            {
                active: false,
                prev: false,
                next: false
            },
        ]);
        // pointer
        let current = 1;
        let prev = 0;
        let next = 2;
        const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(4);
        const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);
        const gotoNum = (num) => {
            current = num;
            prev = current - 1;
            next = current + 1;

            // reset
            classList.value.forEach(el => {
                el.active = false;
                el.prev = false;
                el.next = false;
            });

            if (next == 5) next = 0;
            if (prev == -1) prev = 4;
            
            classList.value[current].active = true;
            classList.value[prev].prev = true;
            classList.value[next].next = true;
        };

        return{
            classList,
            gotoPrev,
            gotoNext
        }
    }
}
</script>

<style lang="scss" scoped>
.items {
    position: relative;
    user-select: none;
    /* border: 1px solid black; */
    width: 100%;
    height: 500px;
    overflow: hidden;
    .item {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80vw;
        height: 380px;
        /* border-radius: 50%; */
        overflow: hidden;
        transition: all 300ms ease-in-out;
        z-index: -1;
        opacity: 0;
        border-radius: 20px;
        .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            background: #969696;
        }
        &.active {
            opacity: 1;
            z-index: 99;
            box-shadow: 0px 0px 50px -35px rgba(0, 0, 0, 0.75);
            height: 438px;
        }
        &.prev {
            z-index: 2;
            opacity: 0.25;
            transform: translate(-151%, -50%);
        }
        &.next {
            z-index: 2;
            opacity: 0.25;
            transform: translate(51%, -50%);
        }
    }
    .button-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80vw;
        height: 100px;
        z-index: 100;
        /* border: 1px solid black; */
    }
}

.button-container .button {
    cursor: pointer;
    transition: all 300ms ease-in-out;
    width: 100px;
    height: 100px;
    background: rgba(91, 91, 91, 0.5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
        color: #fff;
        font-size: 75px;
    }
    &:hover {
        opacity: 1;
    }
    &:nth-child(1) {
        position: absolute;
        left : -50px;
    }
    &:nth-child(2) {
        position: absolute;
        right : -50px;
    }
}
</style>