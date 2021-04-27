<template>
    <a class="social__link" target="_blank" :href="href">
        <img class="social__icon" :src="socialIcon" :alt="`${social} icon`" />
    </a>
</template>

<script>
export default {
    name: "SocialIcon",
    props: ["social", "href"],
    computed: {
        socialIcon() {
            return require(`../../assets/images/icon-${this.social}.svg`);
        },
    },
};
</script>

<style lang="scss">
.social {
    &__link {
        display: inline-block;
    }

    &__icon {
        filter: invert(100%);
        transition: all 0.4s ease-in;

        &:hover {
            filter: invert(74%) sepia(99%) saturate(371%) hue-rotate(117deg)
                brightness(85%) contrast(89%);
        }
    }
}
</style>
