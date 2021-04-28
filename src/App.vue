<template>
    <div id="app">
        <the-header></the-header>
        <main class="main">
            <div class="main__column--left">
                <h2 class="main__title">More than just shorter links</h2>
                <p class="main__subtitle">
                    Build your brand's recognition and get detailed insights on
                    how your links are performing.
                </p>
                <the-button styles="lg-rounded" href="#"
                    >Get Started</the-button
                >
            </div>
            <div class="main__column--right">
                <img
                    class="main__image"
                    src="@/assets/images/illustration-working.svg"
                    alt="Person in desk"
                />
            </div>
        </main>
    </div>
</template>

<script>
import TheButton from "./components/elements/TheButton.vue";
// import SocialIcon from "./components/elements/SocialIcon.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
    name: "App",
    components: {
        // TheButton,
        // SocialIcon,
        TheHeader,
        TheButton,
    },
};
</script>

<style lang="scss">
.main {
    max-width: $max-width;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
        font-size: 8rem;
        line-height: 9rem;
        font-weight: 700;
        color: $dark-blue;
        letter-spacing: -3px;
    }

    &__subtitle {
        font-weight: 400;
        font-size: 2rem;
        color: $neutral-violet;
        padding: 1rem 0 3rem;
    }

    &__column--left {
        flex: 2;
    }
    &__column--right {
        flex: 1;
        width: 50%;
    }

    &__image {
        display: inline-block;
        transform: translateX(20%);
    }
}
</style>
