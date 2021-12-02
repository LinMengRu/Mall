// pages/admin/admin.js
Page({

  data: {

  },
  out() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  users() {
    wx.navigateTo({
      url: '/pages/admin-user/admin-user',
    })
  },
  goods() {
    wx.navigateTo({
      url: '/pages/admin-goods/admin-goods',
    })
  },

})