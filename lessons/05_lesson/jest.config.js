module.exports = {
 testEnviroment: 'jest-enviroment-jsdom',
    moduleNameMapper: {
     '\\.css$': require.resolve('./test/style-mock.js')
    },

}