// pages/admin-goods/admin-goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true,
    hiddenmodalputadd: true,
    hiddenName: true,
  },
  modal_edit: function (e) {
    var id = e.currentTarget.dataset.id
    var goodsimg = e.currentTarget.dataset.gimg
    var goodsname = e.currentTarget.dataset.gname
    var goodsnews = e.currentTarget.dataset.gnews
    var price = e.currentTarget.dataset.gprice
    var number = e.currentTarget.dataset.gnumber
    var shop = e.currentTarget.dataset.gshop
    var area = e.currentTarget.dataset.garea
    console.log(id, goodsimg, goodsname, goodsnews, price, number, shop, area)
    this.setData({
      id: id,
      goodsimg: goodsimg,
      goodsname: goodsname,
      goodsnews: goodsnews,
      price: price,
      number: number,
      shop: shop,
      area: area,
      hiddenmodalput: !this.data.hiddenmodalput
    })

  },
  cancelM: function (e) {
    this.setData({
      hiddenmodalput: true,
    })
  },

  confirmM: function (e) {
    console.log("商品图片：" + this.data.img + "商品名：" + this.data.name + "  详情：" + this.data.news + "  价格：" + this.data.price + "  库存：" + this.data.number + "  店铺名：" + this.data.shop + "  商品产地：" + this.data.area);
    // console.log(this.data)
    // console.log(this.data.id)
    let that = this;
    wx.request({
      url: 'http://localhost/shopping/admin_goods_edit.php',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        id: that.data.id,
        goodsimg: that.data.img,
        goodsname: that.data.name,
        goodsnews: that.data.news,
        price: that.data.price,
        number: that.data.number,
        shop: that.data.shop,
        area: that.data.area,
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
  iNews: function (e) {
    this.setData({
      news: e.detail.value
    })
  },
  iPrice: function (e) {
    this.setData({
      price: e.detail.value
    })
  },
  iNumber: function (e) {
    this.setData({
      number: e.detail.value
    })
  },
  iShop: function (e) {
    this.setData({
      shop: e.detail.value
    })
  },
  iArea: function (e) {
    this.setData({
      area: e.detail.value
    })
  },
  chooseImage() {
    wx.chooseImage({
      success: res => {
        console.log(res)
        this.setData({
          img: res.tempFilePaths[0]
        })
      }
    })
  },
  modal_add: function (e) {
    var aid = e.currentTarget.dataset.aid
    var agoodsimg = e.currentTarget.dataset.agimg
    var agoodsname = e.currentTarget.dataset.agname
    var agoodsnews = e.currentTarget.dataset.agnews
    var aprice = e.currentTarget.dataset.agprice
    var anumber = e.currentTarget.dataset.anumber
    var ashop = e.currentTarget.dataset.ashop
    var aarea = e.currentTarget.dataset.aarea
    console.log(aid, agoodsimg, agoodsname, agoodsnews, aprice, anumber, ashop, aarea)
    this.setData({
      aid: aid,
      agoodsimg: agoodsimg,
      agoodsname: agoodsname,
      agoodsnews: agoodsnews,
      aprice: aprice,
      anumber: anumber,
      ashop: ashop,
      aarea: aarea,
      hiddenmodalputadd: !this.data.hiddenmodalputadd
    })

  },
  cancelMadd: function (e) {
    this.setData({
      hiddenmodalputadd: true,
    })
  },

  confirmMadd: function (e) {
    console.log("商品图片：" + this.data.imgadd + "商品名：" + this.data.nameadd + "  详情：" + this.data.newsadd + "  详情：" + this.data.priceadd + "  库存：" + this.data.numberadd + "  店铺名：" + this.data.shopadd + "  产地：" + this.data.areaadd);

    let that = this;
    wx.request({
      url: 'http://localhost/shopping/admin_goods_add.php',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        addid: that.data.idadd,
        addgoodsimg: that.data.imgadd,
        addgoodsname: that.data.nameadd,
        addgoodsnews: that.data.newsadd,
        addprice: that.data.priceadd,
        addnumber: that.data.numberadd,
        addshop: that.data.shopadd,
        addarea: that.data.areaadd,
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
      hiddenmodalputadd: true
    })
    that.onShow();
  },
  iNameadd: function (e) {
    this.setData({
      nameadd: e.detail.value,
    })
  },
  iNewsadd: function (e) {
    this.setData({
      newsadd: e.detail.value
    })
  },
  iPriceadd: function (e) {
    this.setData({
      priceadd: e.detail.value
    })
  },
  iNumberadd: function (e) {
    this.setData({
      numberadd: e.detail.value
    })
  },
  iShopPriceadd: function (e) {
    this.setData({
      shopadd: e.detail.value
    })
  },
  iAreaadd: function (e) {
    this.setData({
      areaadd: e.detail.value
    })
  },
  addchooseImage() {
    wx.chooseImage({
      success: res => {
        console.log(res)
        this.setData({
          imgadd: res.tempFilePaths[0]
        })
      }
    })
  },
  modal_del: function (e) {
    var id = e.currentTarget.dataset.delid
    console.log(id)
    let that = this;

    wx.request({
      url: 'http://localhost/shopping/admin_goods_del.php',
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
    this.setData({})
  },
  modal_info: function (e) {
    var id = e.currentTarget.dataset.id
    var goodsimg = e.currentTarget.dataset.gimg
    var goodsname = e.currentTarget.dataset.gname
    var goodsnews = e.currentTarget.dataset.gnews
    var price = e.currentTarget.dataset.price
    var number = e.currentTarget.dataset.number
    var shop = e.currentTarget.dataset.shop
    var area = e.currentTarget.dataset.area
    console.log(id, goodsimg, goodsname, goodsnews, price, number, shop, area)

    wx.navigateTo({
      url: '/pages/admin-goods-info/admin-goods-info?id=' + id + '&img=' + goodsimg + '&name=' + goodsname + '&news=' + goodsnews + '&price=' + price + '&number=' + number + '&shop=' + shop + '&area=' + area + '',
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      key: e.detail.value
    })
  },
  search: function (e) {
    // console.log(e)
    let that = this;
    // console.log(that.data.key);
    wx.request({
      url: 'http://localhost/shopping/admin_goods_search.php',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        key: that.data.key,
      },
      success: function (res) {
        // console.log(res.data);
        that.setData({
          arraa: res.data.goodssearch,
          hiddenName: !that.data.hiddenName
        })
      },
      fail: function (res) {
        console.log("fail");
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost/shopping/admin_goods.php',
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      data: {},
      success: function (res) {
        // console.log(res.data)
        that.setData({
          arr: res.data.goods,

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