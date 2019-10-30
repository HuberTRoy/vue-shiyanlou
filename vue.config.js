module.exports = {
    devServer: {
        proxy: {
              '/api': {  
                target: 'http://localhost:8000/api',//设置你调用的接口域名
                changeOrigin: true,  
                pathRewrite: {  
                  '^/api/': ''
                }  
              }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? 'http://120.78.14.107/' : '/',
    assetsDir: process.env.NODE_ENV === 'production' ? 'statics' : '',
}