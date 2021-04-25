<template>
    <a class="button__primary" :class="styles" :href="href">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: "ButtonPrimary",
    props: ["href", "styles"],
};
</script>

<style lang="scss">
.button__primary {
    display: inline-block;
    background-color: $primary;
    color: $light;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
}
</style>
