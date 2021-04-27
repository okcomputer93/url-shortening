<template>
    <div id="app">
        <the-button styles="lg-squared" href="#">Sign Up</the-button>
    </div>
</template>

<script>
import TheButton from "./components/resources/TheButton.vue";
export default {
    name: "App",
    components: {
        TheButton,
    },
};
</script>

<style lang="scss" scoped></style>
