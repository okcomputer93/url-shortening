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
        <section class="features">
            <div class="features__content">
                <div class="features__top">
                    <h3 class="features__title">Advanced Statistics</h3>
                    <p class="features__subtitle">
                        Track how your links are performing across the web with
                        our advanced statistics dashboard.
                    </p>
                </div>
                <cards></cards>
            </div>
        </section>
    </div>
</template>

<script>
import TheButton from "./components/elements/TheButton.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import Cards from "./components/layouts/Cards.vue";
export default {
    name: "App",
    components: {
        TheHeader,
        TheButton,
        Cards,
    },
};
</script>

<style lang="scss">
.main {
    max-width: $max-width;
    margin: 2rem auto;
    padding: 0 $margin-body 15rem;
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
        padding: 0.5rem 0 3rem;
        letter-spacing: 1px;
    }

    &__column--left {
        flex: 1;
    }
    &__column--right {
        flex: 1;
    }

    &__image {
        width: 130%;
        display: inline-block;
        transform: translateX(12%);
    }
}

.features {
    background-color: $bg-gray;

    &__content {
        max-width: $max-width;
        margin: 0 auto;
        padding: 10rem $margin-body 20rem; //TODO: Resize this when the search component is done.
    }

    &__top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    &__title {
        font-size: 3.8rem;
        font-weight: 700;
        padding-bottom: 1rem;
        color: $dark-violet;
        letter-spacing: -1px;
    }

    &__subtitle {
        font-size: 1.8rem;
        font-weight: 400;
        color: $neutral-violet;
        width: 45%;
        line-height: 3.5rem;
    }
}
</style>
