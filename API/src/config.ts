export default () => ({
    port: parseInt(process.env.PORT) || 8000,
    mongo_url: process.env.MONGO_URL || "",
    token_secreto: process.env.TOKEN_SECRETO,
    expires_in: process.env.EXPIRES_IN
});