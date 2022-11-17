const path = require('path')

module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js',
        libraryTarget: "umd"
    },
    // 服务器
    devServer: {
        port: 8088,     // 端口
        hot: true,  // 热更新
        open: true     // 启动自动打开浏览器
    },
    // 模式
    mode: "development"
}