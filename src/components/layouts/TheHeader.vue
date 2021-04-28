<template>
    <nav class="navigation">
        <the-logo></the-logo>
        <div class="navigation__links">
            <div class="navigation__links--left">
                <a href="#" class="navigation__link">Features</a>
                <a href="#" class="navigation__link">Pricing</a>
                <a href="#" class="navigation__link">Resources</a>
            </div>
            <div class="navigation__links--right">
                <a href="#" class="navigation__link">Login</a>
                <the-button styles="sm-rounded" href="#">Sign Up</the-button>
            </div>
        </div>
    </nav>
</template>

<script>
import TheButton from "../elements/TheButton.vue";
import TheLogo from "../elements/TheLogo.vue";
export default {
    name: "TheHeader",
    components: {
        TheButton,
        TheLogo,
    },
};
</script>

<style lang="scss">
.navigation {
    max-width: $max-width;
    margin: 0 auto;
    padding: 3rem 0;

    display: flex;

    &__links {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &--left {
            flex-basis: 30%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        &--right {
            flex-basis: 15%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    &__link {
        font-size: 1.2rem;
        text-decoration: none;
        font-weight: 700;
        color: $neutral-violet;

        &:hover {
            color: $primary-dark;
        }
    }
}
</style>
