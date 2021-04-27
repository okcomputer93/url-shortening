<template>
    <button class="button__primary" :class="form" :href="href">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ButtonPrimary",
    props: ["href", "styles"],
    computed: {
        form() {
            const forms = this.styles.split("-");
            return `p-${forms[0]} text-${forms[0]} p-${forms[0]} is-${forms[1]}`;
        },
    },
};
</script>

<style lang="scss">
.button__primary {
    display: inline-block;
    background-color: $primary;
    color: $light;
    font-weight: 700;
    cursor: pointer;
    border: none;
    transition: all 0.4s ease-in;

    &:hover {
        background-color: lighten($primary, 15);
    }
}
</style>
