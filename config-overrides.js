/**
 * Created by Administrator on 2017/12/27.
 */
const {injectBabelPlugin} = require('react-app-rewired');
module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', {
        libraryName: 'antd',
        style: 'css'
    }], config);
    return config;
};