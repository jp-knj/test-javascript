module.exports = {
 testEnviroment: 'jest-enviroment-jsdom',
    moduleNameMapper: {
     '\\.module\\.css$': 'identity-obj-proxy',
     '\\.css$': require.resolve('./test/style-mock.js')
    },
}