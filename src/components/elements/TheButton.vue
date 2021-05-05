<script>
export default {
    name: "ButtonPrimary",
    props: ["href", "styles", "type", "disabled"],
    render(createElement) {
        const element = this.styles.split("-")[0];
        return createElement(
            element,
            {
                attrs: {
                    class: `button__primary ${this.shape}`,
                    href: this.href,
                    type: this.type,
                    disabled: this.disabled,
                },
            },
            this.$slots.default
        );
    },
    computed: {
        shape() {
            const forms = this.styles.split("-");
            return `text-${forms[1]} p-${forms[1]} is-${forms[2]}-${forms[1]}`;
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
    transition: all 0.2s ease-in;
    font-family: "Poppins", sans-serif;

    &:hover {
        background-color: lighten($primary, 15);
    }

    &:disabled {
        background-color: lighten($primary, 25);
    }
}
</style>
