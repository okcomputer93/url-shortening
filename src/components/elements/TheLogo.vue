<template>
    <h1 class="logo__title">
        <a class="logo__link" :class="textColor" href="/">Shortly</a>
    </h1>
</template>

<script>
export default {
    name: "TheLogo",
    props: {
        color: {
            type: String,
            default: "dark",
        },
    },
    data() {
        return {
            colors: {
                clear: "text-clear",
                dark: "text-dark",
            },
        };
    },
    computed: {
        textColor() {
            return this.colors[this.color];
        },
    },
};
</script>

<style lang="scss">
.logo {
    &__title {
        font-size: 3rem;
        font-weight: 700;

        @media only screen and (max-width: $bp-small) {
            font-size: 4rem;
        }
    }
    &__link {
        text-decoration: none;
    }
}
</style>
