<template>
    <div
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
        class="shorten-url"
    >
        <span
            @click="$emit('delete', id)"
            v-if="isHover"
            class="shorten-url__close"
        ></span>
        <a
            :href="fullUrl"
            target="_blank"
            class="shorten-url__full"
            v-text="reducedFullUrl"
        ></a>
        <div class="shorten-url__manage">
            <input ref="dummyInput" type="hidden" :value="shortenUrl" />
            <a
                :href="shortenUrl"
                target="_blank"
                class="shorten-url__short"
                v-text="shortenUrl"
            ></a>
            <div
                class="shorten-url__button"
                :class="buttonCopy"
                @click="copyToClipboard"
            >
                <the-button
                    styles="button-sm-squared"
                    type="button"
                    v-text="textButton"
                ></the-button>
            </div>
        </div>
    </div>
</template>

<script>
import TheButton from "../elements/TheButton.vue";
export default {
    name: "ShortenUrl",
    components: {
        TheButton,
    },
    props: ["fullUrl", "shortenUrl", "id"],
    data() {
        return {
            textButton: "Copy",
            isHover: false,
        };
    },
    computed: {
        buttonCopy() {
            return this.textButton !== "Copy" ? "shorten-url__clicked" : "";
        },
        reducedFullUrl() {
            if (this.fullUrl.length > 25)
                return this.fullUrl.substring(0, 25) + "...";
            return this.fullUrl;
        },
    },
    methods: {
        copyToClipboard() {
            this.textButton = "Copied!";
            setTimeout(() => {
                this.textButton = "Copy";
            }, 2000);
            this.$refs.dummyInput.type = "text";
            this.$refs.dummyInput.select();
            // this.$refs.dummyInput.setSelectionRange(0, 99999);
            document.execCommand("copy");
            this.$refs.dummyInput.type = "hidden";
        },
    },
};
</script>

<style lang="scss">
.shorten-url {
    width: 100%;
    background-color: $light;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    position: relative;

    @media only screen and (max-width: $bp-small) {
        flex-direction: column;
        align-items: flex-start;
        padding: 2.5rem 2rem;
    }

    &__close {
        position: absolute;
        width: 2rem;
        height: 2rem;
        top: 0;
        left: 0;
        border-radius: 100%;
        cursor: pointer;

        &::after,
        &::before {
            content: "";
            width: 1rem;
            height: 2px;
            position: absolute;
            top: 60%;
            left: 30%;
            background-color: $neutral-violet;
            display: block;
            border-radius: 2px;
        }

        &::after {
            transform: rotate(-45deg);
        }

        &::before {
            transform: rotate(45deg);
        }
    }

    &__full {
        display: block;
        text-decoration: none;
        color: $dark-violet;
        font-size: 1.5rem;

        @media only screen and (max-width: $bp-small) {
            width: 100%;
            border-bottom: 1px $bg-gray solid;
            padding-bottom: 2rem;
            font-size: 2.5rem;
        }
    }

    &__manage {
        display: flex;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: $bp-small) {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
        }
    }

    &__short {
        display: block;
        text-decoration: none;
        color: $primary;
        font-size: 1.5rem;
        margin-right: 2rem;

        @media only screen and (max-width: $bp-small) {
            width: 100%;
            flex: 1;
            padding: 1.5rem 0;
            font-size: 2.5rem;
            margin-right: 0;
        }
    }

    &__button {
        width: 100%;
        & > * {
            @media only screen and (max-width: $bp-small) {
                flex: 1;
                width: 100%;
                display: block;
                font-size: 2rem !important;
            }
        }
    }

    &__clicked button {
        background-color: $primary-dark !important;
    }
}
</style>
