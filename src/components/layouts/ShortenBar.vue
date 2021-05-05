<template>
    <div class="shorten">
        <form
            @submit.prevent="submitForm"
            class="shorten__container"
            action="#"
        >
            <div class="shorten__input">
                <input
                    autofocus
                    placeholder="Shorten a link here..."
                    class="shorten__bar"
                    :class="error ? 'shorten__bar--error' : ''"
                    v-model="url"
                    @keyup="error = ''"
                />
                <div class="shorten__button">
                    <the-button
                        :disabled="isLoading"
                        type="submit"
                        styles="button-lg-squared"
                    >
                        <span v-if="!isLoading">Shorten it!</span>
                        <img
                            class="shorten__loading"
                            v-else
                            src="@/assets/images/circle_loading.gif"
                            alt="Loading animation"
                        />
                    </the-button>
                </div>
            </div>
            <p v-if="error" class="shorten__error" v-text="error"></p>
        </form>
        <div class="shorten__links">
            <div
                class="shorten__link"
                v-for="(link, index) in links"
                :key="link.shorten"
            >
                <shorten-url
                    @delete="deleteUrl"
                    :id="index"
                    :fullUrl="link.original"
                    :shortenUrl="link.shorten"
                ></shorten-url>
            </div>
        </div>
    </div>
</template>

<script>
import TheButton from "../elements/TheButton.vue";
import ShortenUrl from "./ShortenUrl.vue";
export default {
    name: "ShortenBar",
    components: {
        TheButton,
        ShortenUrl,
    },
    data() {
        return {
            url: "",
            isLoading: false,
            error: "",
            links: [],
        };
    },
    watch: {
        links(newVal) {
            localStorage.setItem("shortly-links", JSON.stringify(newVal));
        },
    },
    methods: {
        async submitForm() {
            if (!this.url) {
                this.error = "Please add a link";
                return;
            }
            this.isLoading = true;
            try {
                const response = await fetch(
                    `https://api.shrtco.de/v2/shorten?url=${this.url}`
                );
                const data = await response.json();

                this.url = "";
                this.isLoading = false;

                if (!response.ok) {
                    throw new Error(data.error);
                }
                const { full_short_link, original_link } = data.result;
                this.links.unshift({
                    original: original_link,
                    shorten: full_short_link,
                });
            } catch (error) {
                this.error = error;
            }
        },
        deleteUrl(id) {
            this.links = this.links.filter((_, index) => index !== id);
        },
    },
    mounted() {
        this.links = JSON.parse(localStorage.getItem("shortly-links"));
    },
};
</script>

<style lang="scss">
.shorten {
    width: 100%;
    display: block;

    &__container {
        width: 100%;
        padding: 4rem;
        border-radius: 1rem;
        background-color: $primary-dark;
        background-image: url("../../assets/images/bg-shorten-desktop.svg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: bottom center;
        position: relative;
    }

    &__input {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__bar {
        flex-grow: 1;
        padding: 1.2rem 3rem;
        font-size: 2rem;
        font-weight: 400;
        color: $dark-blue;
        border-radius: 1rem;
        border: none;
        font-family: "Poppins", sans-serif;

        &::placeholder {
            font-size: 2rem;
            font-weight: 400;
            color: $neutral;
            font-family: "Poppins", sans-serif;
        }

        &--error {
            border: 3px solid $secondary;

            &::placeholder {
                color: rgba($secondary, 0.582);
            }
        }
    }

    &__button {
        flex: none;
        margin-left: 3rem;
        width: 18.7rem;
    }

    &__links {
        padding-top: 2rem;
    }

    &__link:not(:last-child) {
        padding-bottom: 1.5rem;
    }

    &__loading {
        width: 3rem;
        height: 3rem;
        margin: 0 3.8rem;
        display: block;
    }

    &__error {
        position: absolute;
        padding-top: 0.3rem;
        color: $dark-violet;
        font-size: 1.5rem;
        font-style: italic;
        color: $secondary;
    }
}
</style>
