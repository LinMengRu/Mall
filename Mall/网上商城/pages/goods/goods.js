// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  changeItem: function (e) {
    this.setData({
      item: e.target.dataset.item
    })
  },
  changeTab: function (e) {
    this.setData({
      tab: e.detail.current
    })
  },

})