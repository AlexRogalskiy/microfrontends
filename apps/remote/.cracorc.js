const {ModuleFederationPlugin} = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
    webpack: {
        configure: {
            output: {
                publicPath: "auto",
            },
        },
        plugins: {
            add: [
                new ModuleFederationPlugin({
                    name: "remote",
                    filename: "remoteEntry.js",
                    exposes: {
                        "./SharedComponent": "./src/SharedComponent",
                    },
                    shared: {
                        ...deps,
                        ui: {
                            singleton: true,
                        },
                        react: {
                            singleton: true,
                            requiredVersion: deps.react,
                        },
                        "react-dom": {
                            singleton: true,
                            requiredVersion: deps["react-dom"],
                        },
                    },
                }),
            ],
        },
    },
});
