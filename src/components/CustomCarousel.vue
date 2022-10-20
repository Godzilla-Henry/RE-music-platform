<template>
    <div class="items">
        <div class="item prev">
            <div class="img"></div>
        </div>
        <div class="item active">
            <div class="img"></div>
        </div>
        <div class=" item next">
            <div class="img"></div>
        </div>
        <div class="item">
            <div class="img"></div>
        </div>
        <div class="item">
            <div class="img"></div>
        </div>

        <div class="button-container">
            <div class="button"><i class="fa-sharp fa-solid fa-angle-left"></i></div>
            <div class="button"><i class="fa-sharp fa-solid fa-angle-right"></i></div>
        </div>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
export default {
    setup(){
        onMounted(function () {
            // const slider = document.querySelector(".items");
            const slides = document.querySelectorAll(".item");
            const button = document.querySelectorAll(".button");

            // index
            let prev = 0;
            let current = 1;
            let next = 2;

            for (let i = 0; i < button.length; i++) {
                button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
            }

            const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

            const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

            const gotoNum = number => {
                current = number;
                prev = current - 1;
                next = current + 1;

                for (let i = 0; i < slides.length; i++) {
                    slides[i].classList.remove("active");
                    slides[i].classList.remove("prev");
                    slides[i].classList.remove("next");
                }

                if (next == 5) {
                    next = 0;
                }

                if (prev == -1) {
                    prev = 4;
                }

                slides[current].classList.add("active");
                slides[prev].classList.add("prev");
                slides[next].classList.add("next");
            }
        });
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