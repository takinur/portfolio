<template>
    <kinesis-container :duration="300">
        <kinesis-element :strength="3" type="depth_inv">
            <div
                class="card"
                @click="txt(item.id)"
                @mouseover="hover = true"
                @mouseleave="hover = false"
            >
                <div v-if="item.images.length > 1"
                    class="overlay"
                    :style="{
                        background: `linear-gradient(0deg, #1d1e21 9%, rgb(66 68 76 / 35%) 42%, rgba(34, 35, 38, 0) 146% ), url(${
                            hover ? item.images[0].image : item.images[1].image
                        }) top center/cover`,
                    }"

                ></div>
                <div v-else
                    class="overlay"
                    :style="{
                        background: `linear-gradient(0deg, #1d1e21 9%, rgb(66 68 76 / 35%) 42%, rgba(34, 35, 38, 0) 146% ), url(${
                            item.images[0].image
                        }) top center/cover`,
                    }"
                ></div>

                <div class="info">
                    <kinesis-element :strength="2" type="depth_inv">
                        <h3 class="text-slate-100 font-semibold">
                            {{ item.title }}
                        </h3>
                    </kinesis-element>
                    <div class="tags mt-3">
                        <span
                            class="capitalize text-xs font-bold mr-2 text-slate-400"
                            v-for="tag in item.tags"
                            :key="tag"
                            >{{ tag.name }}</span
                        >
                    </div>
                    <div class="tags links">
                        <a
                            :href="item.demo"
                            target="blank"
                            v-if="item.demo.length > 1"
                            >Visit Site</a
                        >
                        <a :href="item.source" target="blank" v-if="item.source.length > 1"
                            >Source</a
                        >
                    </div>
                </div>
            </div>
        </kinesis-element>
    </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
    components: { KinesisContainer, KinesisElement },
    data: () => ({ hover: false }),
    props: {
        item: Object,
        txt: Function,
    },
};
</script>

<style lang="scss" scoped>
.card:hover .overlay {
    box-shadow: inset 0px -363px 292px -300px #2e2f3180;
    opacity: 1;
}
.card {
    width: 320px;
    height: 480px;
    background: #212225;
    border-radius: 0.8rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        z-index: 0;
        border-radius: 0px 0px 2rem 2rem;
    }
    .overlay {
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        transform: scale(1.02);
        border-radius: 1rem;
        box-shadow: inset 0px 0px 0px 0px #92959a;
        opacity: 0.7;
    }

    .info {
        padding: 0 1.3rem 2rem 1.3rem;
        z-index: 3;
        position: absolute;
        bottom: 0;
        h3 {
            grid-area: txt;
            font-weight: 500;
            font-size: 1.7rem;
            line-height: 1.4;
            margin-bottom: 0rem;
            margin-top: 0;
        }
        .tags {
            display: flex;
            gap: 0.7rem;
            font-weight: 500;
            font-size: 0.8rem;
            color: var(--txt-med);
        }
        .tags.links {
            a {
                color: white;
                text-decoration: none;
                margin-top: 0.6rem;
            }
        }
    }
}
</style>
