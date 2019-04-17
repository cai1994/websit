const FileManagerPlugin = require('filemanager-webpack-plugin')

module.exports = {
    // 配置 axios 代理请求
    publicPath: "./",

    devServer: {
        // port: 8080,
        open: true,
        proxy: {
            "/api": {
                target: "http://120.78.70.187:9081/",  //测试
                // target: "https://xiang7.net/", //生产
                // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
                    "^/api": ""
                }
            }
        }
    },

    configureWebpack: {  //webpack的相关配置在这里
        plugins: [
            new FileManagerPlugin({  //初始化 filemanager-webpack-plugin 插件实例
                onEnd: {
                    delete: [   //首先需要删除项目根目录下的dist.zip
                        './dist.zip',
                    ],
                    archive: [ //然后我们选择dist文件夹将之打包成dist.zip并放在根目录
                        { source: './dist', destination: './dist.zip' },
                    ]
                }
            })
        ]
    },
    

    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require("postcss-px2rem")({
                        remUnit: 54
                    })
                ]
            }
        }
    },
    productionSourceMap: true,// 生产环境是否生成 sourceMap 文件
    lintOnSave: false
};
