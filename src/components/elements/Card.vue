<template>
    <div class="card">
        <div class="card__icon">
            <slot></slot>
        </div>
        <h4 class="card__title" v-text="title"></h4>
        <p class="card__content" v-text="content"></p>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["title", "content"],
};
</script>

<style lang="scss">
.card {
    background-color: $light;
    width: 100%;
    padding: 8rem 3rem 4rem;
    border-radius: 0.5rem;
    position: relative;

    @media only screen and (max-width: $bp-small) {
        text-align: center;
        padding: 8rem 5rem 6rem;
    }

    &__icon {
        background-color: $primary-dark;
        display: inline-block;
        padding: 2.5rem;
        border-radius: 99rem;
        position: absolute;
        top: 0;
        transform: translateY(-50%);

        @media only screen and (max-width: $bp-small) {
            left: 50%;
            margin-left: -33px;
        }

        & > * {
            display: block;
            height: 4rem;
            width: 4rem;
        }
    }

    &__title {
        font-size: 2.2rem;
        font-weight: 700;
        padding-bottom: 1rem;
        color: $dark-violet;

        @media only screen and (max-width: $bp-small) {
            font-size: 3.2rem;
        }
    }

    &__content {
        font-weight: 400;
        font-size: 1.6rem;
        color: $neutral-violet;

        @media only screen and (max-width: $bp-small) {
            font-size: 2.2rem;
        }
    }
}
</style>
