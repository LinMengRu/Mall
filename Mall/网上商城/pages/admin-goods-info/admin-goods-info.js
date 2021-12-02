// pages/admin-goods-info/admin-goods-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // id: null,
    // img: null,
    // name: null,
    // news: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log(e)
    var id = e.id
    var img = e.img
    var name = e.name
    var news = e.news
    var price = e.price
    var number = e.number
    var shop = e.shop
    var area = e.area
    this.setData({
      id: id,
      img: img,
      name: name,
      news: news,
      price: price,
      number: number,
      shop: shop,
      area: area,
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