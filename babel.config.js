module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: ["nativewind/babel"]
    };
};
module.exports = {
    assets: ['./assets/fonts'],
};
