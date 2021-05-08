<template>
    <div class="cards">
        <div class="cards__element--1">
            <card
                title="Brand Recognition"
                content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
            >
                <img
                    src="@/assets/images/icon-brand-recognition.svg"
                    alt="Scale up icon"
                />
            </card>
        </div>
        <div class="cards__segment"></div>
        <div class="cards__element--2">
            <card
                title="Detailed Records"
                content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            >
                <img
                    src="@/assets/images/icon-detailed-records.svg"
                    alt="Speed icon"
                />
            </card>
        </div>
        <div class="cards__segment"></div>
        <div class="cards__element--3">
            <card
                title="Fully Customizable"
                content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            >
                <img
                    src="@/assets/images/icon-fully-customizable.svg"
                    alt="Customization icon"
                />
            </card>
        </div>
    </div>
</template>

<script>
import Card from "../elements/Card";
export default {
    name: "Cards",
    components: {
        Card,
    },
};
</script>

<style lang="scss">
.cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10rem;
    @media only screen and (max-width: $bp-small) {
        flex-direction: column;
    }

    &__segment {
        background-color: $primary;
        height: 0.8rem;
        margin-top: 6rem;
        flex: 1 0 auto;

        @media only screen and (max-width: $bp-small) {
            width: 0.8rem;
            flex: 1 1 auto;
            margin-top: 0;
            height: 10rem;
        }
    }

    &__element--1 {
        flex: 12;
    }

    &__element--2 {
        flex: 12;
        transform: translateY(15%);

        @media only screen and (max-width: $bp-small) {
            transform: translateY(0);
        }
    }

    &__element--3 {
        flex: 12;
        transform: translateY(30%);

        @media only screen and (max-width: $bp-small) {
            transform: translateY(0);
        }
    }
}
</style>
