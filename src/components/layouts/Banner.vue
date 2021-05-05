<template>
    <div class="banner">
        <h3 class="banner__title" v-text="message"></h3>
        <the-button
            href="/"
            styles="a-lg-rounded"
            v-text="textButton"
        ></the-button>
    </div>
</template>

<script>
import TheButton from "../elements/TheButton.vue";
export default {
    name: "Banner",
    props: ["message", "textButton"],
    components: {
        TheButton,
    },
};
</script>

<style lang="scss">
.banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6rem 0;
    background-color: $primary-dark;
    background-image: url("../../assets/images/bg-boost-desktop.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: bottom center;

    &__title {
        font-size: 3.5rem;
        font-weight: 700;
        padding-bottom: 2rem;
        color: $light;
        letter-spacing: -1px;
    }
}
</style>
