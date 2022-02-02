<template>
    <transition :name="transitionName">
        <div
            v-show="visible"
            :style="customStyle"
            class="back-to-ceiling"
            @click="backToTop"
        >
            <span><title>Back to Top</title></span>
        </div>
    </transition>
</template>

<script>
export default {
    name: "BackToTop",
    props: {
        visibilityHeight: {
            type: Number,
            default: 400,
        },
        backPosition: {
            type: Number,
            default: 0,
        },
        customStyle: {
            type: Object,
            default: function () {
                return {
                    //   right: '50px',
                    //   bottom: '50px',
                    //   width: '40px',
                    //   height: '40px',
                    //   'border-radius': '4px',
                    //   'line-height': '45px',
                    //   background: '#08acdf',
                };
            },
        },
        transitionName: {
            type: String,
            default: "fade",
        },
    },
    data() {
        return {
            visible: false,
            interval: null,
            isMoving: false,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
        if (this.interval) {
            clearInterval(this.interval);
        }
    },
    methods: {
        handleScroll() {
            this.visible = window.pageYOffset > this.visibilityHeight;
        },
        backToTop() {
            if (this.isMoving) {
                return;
            }
            const start = window.pageYOffset;
            let i = 0;
            this.isMoving = true;
            this.interval = setInterval(() => {
                const next = Math.floor(
                    this.easeInOutQuad(10 * i, start, -start, 500)
                );
                if (next <= this.backPosition) {
                    window.scrollTo(0, this.backPosition);
                    clearInterval(this.interval);
                    this.isMoving = false;
                } else {
                    window.scrollTo(0, next);
                }
                i++;
            }, 16.7);
        },
        easeInOutQuad(t, b, c, d) {
            if ((t /= d / 2) < 1) {
                return (c / 2) * t * t + b;
            }

            return (-c / 2) * (--t * (t - 2) - 1) + b;
        },
    },
};
</script>

<style scoped>
.back-to-ceiling {
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: #3498db;
    text-indent: -9999px;
    -webkit-border-radius: 60px;
    -moz-border-radius: 60px;
    border-radius: 60px;
}
.back-to-ceiling span {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -8px;
    margin-top: -12px;
    height: 0;
    width: 0;
    border: 8px solid transparent;
    border-bottom-color: #ffffff;
}
.back-to-ceiling:hover {
    background: #6007d4;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.back-to-ceiling .Icon {
    fill: #ffffff;
    background: none;
}
</style>
