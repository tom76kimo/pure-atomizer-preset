// module.exports = preset({});

Object.defineProperty(module.exports, "buildPreset", {
  configurable: true,
  writable: true,
  enumerable: false,
  value: preset,
});

function preset(context, opts) {
    // var atomicConfigPath = opts.atomicConfigPath;
    return {
        plugins: [
            require('./babel-purecss-plugin'),
            ['babel-plugin-atomizer', { configPath: __dirname + '/atomic.js' }]
        ]
    };
}
