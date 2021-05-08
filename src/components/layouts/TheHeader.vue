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
                <the-button styles="a-sm-rounded" href="/">Sign Up</the-button>
            </div>
        </div>
        <div
            @click="toggleMenu"
            class="navigation__mobile"
            :class="rotateIcon"
        ></div>
        <transition name="slide">
            <div
                v-if="isMenuOpen"
                @click="toggleMenu"
                class="navigation__mobile__screen"
            >
                <a href="#" class="navigation__mobile__link">Features</a>
                <a href="#" class="navigation__mobile__link">Pricing</a>
                <a href="#" class="navigation__mobile__link">Resources</a>
                <a href="#" class="navigation__mobile__link">Login</a>
                <a href="#" class="navigation__mobile__link">Sign Up</a>
            </div>
        </transition>
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
    data() {
        return {
            isMenuOpen: false,
        };
    },
    computed: {
        rotateIcon() {
            return this.isMenuOpen ? "navigation__mobile--is-open" : "";
        },
    },
    methods: {
        toggleMenu(event) {
            if (
                event.target.classList.contains("navigation__mobile__link") ||
                event.target.classList.contains("navigation__mobile")
            )
                this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style lang="scss">
.navigation {
    max-width: $max-width;
    margin: 0 auto;
    padding: 3rem $margin-body;

    display: flex;

    @media only screen and (max-width: $bp-small) {
        padding: 3rem 4rem;
        justify-content: space-between;
        align-items: center;
    }

    &__links {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media only screen and (max-width: $bp-small) {
            display: none;
        }

        &--left {
            flex-basis: 35rem;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        &--right {
            flex-basis: 17rem;
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

    &__mobile {
        position: relative;
        display: none;
        position: fixed;
        right: 4rem;
        z-index: 30;

        @media only screen and (max-width: $bp-small) {
            display: block;
        }

        &,
        &::after,
        &::before {
            width: 25px;
            height: 3px;
            background-color: $neutral-violet;
            transition: all 0.5s ease-in;
        }

        &::after,
        &::before {
            content: "";
            position: absolute;
        }

        &::before {
            top: 9px;
        }

        &::after {
            top: -9px;
        }

        &--is-open {
            background-color: transparent;

            &::before {
                top: 0;
                transform: rotate(-315deg);
            }

            &::after {
                top: 0;
                transform: rotate(315deg);
            }
        }

        &__screen {
            min-width: 50vw;
            min-height: 100vh;
            z-index: 20;
            position: fixed;
            background-color: rgba($primary-dark, 0.98);
            top: 0;
            right: 0;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            display: none;

            @media only screen and (max-width: $bp-small) {
                display: flex;
            }
        }

        &__link {
            text-decoration: none;
            color: $primary;
            font-size: 3.5rem;
            padding: 2rem 0;
        }
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: transform 0.4s ease-in;
    }

    .slide-leave-to,
    .slide-enter {
        transform: translateX(200%);
    }
}
</style>
