//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    dataList:[
      {
        avatar: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        bgimg:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        userName:'茶树虾',
        position:'发布与外太空',
        title:'梦境标题',
        content:'梦见了很多很多不知道是什么样子的人，然后他们就走了。',
        date:'2018-09-03 14:59:59',
        lable:'高空坠落',
        remanber:'127',        // 记住
        forget:'5',            // 忘记
        sxe:'0'                // 0为女 1为男
      }
    ],
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
    console.log(detail);
  },
  
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
