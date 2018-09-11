'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/apis': {//这里是我配置的名字
        target: 'http://api.zhuishushenqi.com',//这个路径是我代理到本地的php服务器
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/apis': ''   //这里重写路径运行后就代理到对应地址,如果后台接口没有约定/apis,就为空
        }
      },
      '/apix': {//这里是我配置的名字
        target: 'http://api.zhuishushenqi.com',//这个路径是我代理到本地的php服务器
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/apix': ''   //这里重写路径运行后就代理到对应地址,如果后台接口没有约定/apis,就为空
        }
      },
      '/apij': {//这里是我配置的名字
        target: 'http://chapter2.zhuishushenqi.com',//这个路径是我代理到本地的php服务器
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/apij': ''   //这里重写路径运行后就代理到对应地址,如果后台接口没有约定/apis,就为空
        }
      },
    },


    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}

//
//     <van-nav-bar title="标题"  @click-left="go" left-arrow>
// <van-icon slot="right" />
//     </van-nav-bar>
//     <van-row type="flex" justify="center">
//     <!--<van-col span="6"><span @click="dan(male)">男生</span></van-col>-->
//     <van-col span="6" v-for="(item,index) in na">{{index}}</van-col>
// <!--<van-col span="6" @click="dan(epub)">女生</van-col>-->
//     </van-row>
//
//     <van-tabs v-model="active">
//     <block v-for="(item,index) in na">
//     <div v-for="ind in index" :title="ind.title">
//     内容 {{ ind }}
// </div>
// </block>
// </van-tabs>