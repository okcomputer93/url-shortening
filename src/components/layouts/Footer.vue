<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__logo">
                <the-logo color="clear"></the-logo>
            </div>
            <div class="footer__sections">
                <div class="footer__section">
                    <h4 class="footer__desc">Features</h4>
                    <a class="footer__link" href="#">Link Shortening</a>
                    <a class="footer__link" href="#">Branded Links</a>
                    <a class="footer__link" href="#">Analytics</a>
                </div>
                <div class="footer__section">
                    <h4 class="footer__desc">Resources</h4>
                    <a class="footer__link" href="#">Blog</a>
                    <a class="footer__link" href="#">Developers</a>
                    <a class="footer__link" href="#">Support</a>
                </div>
                <div class="footer__section">
                    <h4 class="footer__desc">Company</h4>
                    <a class="footer__link" href="#">About</a>
                    <a class="footer__link" href="#">Our Team</a>
                    <a class="footer__link" href="#">Careers</a>
                    <a class="footer__link" href="#">Contact</a>
                </div>
                <div class="footer__section footer__section--social">
                    <social-icon
                        social="facebook"
                        href="http://www.facebook.com"
                    ></social-icon>
                    <social-icon
                        social="twitter"
                        href="http://www.twitter.com"
                    ></social-icon>
                    <social-icon
                        social="pinterest"
                        href="http://www.pinterest.com"
                    ></social-icon>
                    <social-icon
                        social="instagram"
                        href="http://www.instagram.com"
                    ></social-icon>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import TheLogo from "../elements/TheLogo.vue";
import SocialIcon from "../elements/SocialIcon.vue";
export default {
    name: "Footer",
    components: {
        TheLogo,
        SocialIcon,
    },
};
</script>

<style lang="scss">
.footer {
    background-color: $dark-violet;
    padding: 6rem $margin-body;

    @media only screen and (max-width: $bp-small) {
        padding: 6rem 4rem;
    }

    &__container {
        max-width: $max-width;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        @media only screen and (max-width: $bp-small) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    }

    &__logo {
        flex: 2;

        @media only screen and (max-width: $bp-small) {
            padding-bottom: 5rem;
        }
    }

    &__sections {
        flex: 3;
        display: flex;
        justify-content: space-between;

        @media only screen and (max-width: $bp-small) {
            flex-direction: column;
        }
    }

    &__section {
        flex: 1;

        @media only screen and (max-width: $bp-small) {
            padding-bottom: 4rem;
        }

        &--social {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            @media only screen and (max-width: $bp-small) {
                min-width: 15rem;
            }
        }
    }

    &__desc {
        font-weight: 700;
        font-size: 1.2rem;
        color: $light;
        padding-bottom: 1.5rem;

        @media only screen and (max-width: $bp-small) {
            padding-bottom: 3rem;
        }
    }

    &__link {
        display: block;
        text-decoration: none;
        color: $neutral;
        padding-bottom: 1rem;
        font-weight: 400;
        font-size: 1.2rem;

        @media only screen and (max-width: $bp-small) {
            padding-bottom: 2rem;
        }

        &:hover {
            color: $primary;
        }
    }
}
</style>
