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
                <the-button styles="a-lg-rounded" href="/"
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
            <div class="shorten-bar">
                <shorten-bar></shorten-bar>
            </div>
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
        <banner
            message="Boost your links today"
            text-button="Get Started"
        ></banner>
        <the-footer></the-footer>
    </div>
</template>

<script>
import TheButton from "./components/elements/TheButton.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import ShortenBar from "./components/layouts/ShortenBar.vue";
import Cards from "./components/layouts/Cards.vue";
import Banner from "./components/layouts/Banner.vue";
import TheFooter from "./components/layouts/Footer.vue";
export default {
    name: "App",
    components: {
        TheHeader,
        ShortenBar,
        TheButton,
        Cards,
        Banner,
        TheFooter,
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

    @media only screen and (max-width: $bp-small) {
        flex-direction: column-reverse;
        justify-content: center;
        text-align: center;
        padding: 0 4rem 20rem;
    }

    &__title {
        font-size: 8rem;
        line-height: 9rem;
        font-weight: 700;
        color: $dark-blue;
        letter-spacing: -3px;

        @media only screen and (max-width: $bp-small) {
            padding-top: 4rem;
            font-size: 6rem;
            letter-spacing: -1px;
            line-height: 1.1;
        }
    }

    &__subtitle {
        font-weight: 400;
        font-size: 2rem;
        color: $neutral-violet;
        padding: 0.5rem 0 3rem;
        letter-spacing: 1px;

        @media only screen and (max-width: $bp-small) {
            padding: 2rem 0 4rem;
            font-size: 2.5rem;
            letter-spacing: 0;
        }
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

        @media only screen and (max-width: $bp-small) {
            width: 145%;
            transform: translateX(2%);
        }
    }
}

.shorten-bar {
    max-width: $max-width;
    margin: 2rem auto;
    padding: 0 $margin-body;

    @media only screen and (max-width: $bp-small) {
        padding: 0 4rem;
    }

    & .shorten__container {
        transform: translateY(-50%);
    }

    & .shorten__links {
        margin-top: -7rem;
        @media only screen and (max-width: $bp-small) {
            margin-top: -10rem;
        }
    }
}

.features {
    background-color: $bg-gray;

    &__content {
        max-width: $max-width;
        margin: 0 auto;
        padding: 10rem $margin-body 20rem;

        @media only screen and (max-width: $bp-small) {
            padding: 10rem 4rem 12rem;
        }
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
        @media only screen and (max-width: $bp-small) {
            padding-bottom: 2rem;
        }
    }

    &__subtitle {
        font-size: 1.8rem;
        font-weight: 400;
        color: $neutral-violet;
        width: 45%;
        line-height: 3.5rem;

        @media only screen and (max-width: $bp-small) {
            font-size: 2.2rem;
            width: 90%;
        }
    }
}
</style>
