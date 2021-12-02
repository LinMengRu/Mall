// pages/admin-user/admin-user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true,
    id: null,
    name: null,
    password: null,
    // name: null,
    // pwd: null
  },
  modal_edit: function (e) {
    var id = e.currentTarget.dataset.id
    var name = e.currentTarget.dataset.name
    var password = e.currentTarget.dataset.pwd
    // console.log(id)
    this.setData({
      id: id,
      name: name,
      password: password,
      hiddenmodalput: !this.data.hiddenmodalput
    })

  },
  modal_del: function (e) {
    var id = e.currentTarget.dataset.id
    // console.log(id)
    let that = this;

    wx.request({
      url: 'http://localhost/shopping/admin_users_del.php',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        id: id,
      },
      success: function (res) {
        console.log(res.data);
        that.setData({})
      },
      fail: function (res) {
        console.log("fail");
      }
    })
    this.setData({
      id: id,
    })
  },

  cancelM: function (e) {
    this.setData({
      hiddenmodalput: true,
    })
  },

  confirmM: function (e) {
    console.log("账号：" + this.data.name + "  密码：" + this.data.pwd);
    // console.log(this.data)
    // console.log(this.data.id)
    let that = this;
    wx.request({
      url: 'http://localhost/shopping/admin_users_edit.php',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        id: that.data.id,
        username: that.data.name,
        password: that.data.pwd

      },

      success: function (res) {
        console.log(res.data);
        that.setData({})
      },
      fail: function (res) {
        console.log("fail");
      }
    })

    this.setData({
      hiddenmodalput: true
    })
    that.onShow();
  },
  iName: function (e) {
    this.setData({
      name: e.detail.value,
    })
  },
  iPassword: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost/shopping/admin_users.php',
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      data: {},
      success: function (res) {
        // console.log(res.data.shopping);
        that.setData({
          arr: res.data.shopping,
        })

      },
      fail: function (res) {
        console.log("fail");
      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})