<template>
    <a class="button__primary" :class="shape" :href="href">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: "ButtonPrimary",
    props: ["href", "styles"],
    computed: {
        shape() {
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
    text-decoration: none;
    transition: all 0.4s ease-in;

    &:hover {
        background-color: lighten($primary, 15);
    }
}
</style>
