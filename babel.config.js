module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'expo-router/babel', // Ensure expo-router is properly configured
        ],
    };
};
