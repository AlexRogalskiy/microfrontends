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
                    name: "app",
                    filename: "remoteEntry.js",
                    remotes: {
                        // remote is the name of application
                        remote: "remote@http://localhost:3001/remoteEntry.js",
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
