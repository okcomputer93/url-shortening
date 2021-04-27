<template>
    <div id="app">
        <the-button styles="lg-squared" href="#">Sign Up</the-button>
        <social-icon
            social="facebook"
            href="https://www.facebook.com/"
        ></social-icon>
    </div>
</template>

<script>
import TheButton from "./components/elements/TheButton.vue";
import SocialIcon from "./components/elements/SocialIcon.vue";
export default {
    name: "App",
    components: {
        TheButton,
        SocialIcon,
    },
};
</script>

<style lang="scss" scoped></style>
