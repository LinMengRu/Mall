// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  chooseImage() {
    wx.chooseImage({
      success: res => {
        console.log(res)
        this.setData({
          imgSrc: res.tempFilePaths[0]
        })
      }
    })
  },
  out() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }

})