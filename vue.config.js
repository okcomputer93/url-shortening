module.exports = {
    publicPath:
        process.env.NODE_ENV === "production" ? "/url-shortening/" : "/",
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/styles/main.scss";
                `,
            },
        },
    },
};
