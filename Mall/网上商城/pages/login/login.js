// pages/user/user.js
Page({

  data: {
    username1: null,
    password1: null,
    username2: null,
    password2: null,
    name: null,
    pwd: null,
    hiddenmodalput: true,
  },
  login: function (e) {
    var that = this;
    var name = e.detail.value.user;
    var pwd = e.detail.value.password;
    // console.log(name, pwd)
    wx.request({
      url: 'http://localhost/shopping/admin_users.php',
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      data: {},
      success: function (res) {
        console.log(res.data);

        wx.request({
          url: 'http://localhost/shopping/admin_admin.php',
          method: 'GET',
          header: {
            'Content-Type': 'application/json'
          },
          data: {},
          success: function (res) {
            console.log(res.data);
            for (var i = 0; i < res.data.admin.length; i++) {
              that.username2 = res.data.admin[i].adminname,
                that.password2 = res.data.admin[i].adminpwd
              // console.log(that.username2)
            }
            if (name == that.username2 && pwd == that.password2) {
              console.log('管理员登陆成功')
              wx.navigateTo({
                url: '/pages/admin/admin',
              })
              return;
            } else {
              console.log('登录失败')
            }
            that.setData({})

          },
          fail: function (res) {
            console.log("fail");
          }
        })

        for (var i = 0; i < res.data.shopping.length; i++) {
          that.username1 = res.data.shopping[i].username,
            that.password1 = res.data.shopping[i].password

          if (name == that.username1 && pwd == that.password1) {
            console.log('用户登陆成功')
            wx.switchTab({
              url: '/pages/user/user',
            })
            return;
          } else {
            console.log('登录失败')
          }
        }
        that.setData({
          name: name,
          pwd: pwd
        })
      },
      fail: function (res) {
        console.log("fail");
      }
    })
  },

  modal_add: function (e) {
    var id = e.currentTarget.dataset.id
    var name = e.currentTarget.dataset.name
    var password = e.currentTarget.dataset.pwd
    // console.log(id)
    this.setData({
      id: id + 1,
      name: name,
      password: password,
      hiddenmodalput: !this.data.hiddenmodalput
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
      url: 'http://localhost/shopping/admin_users_add.php',
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
  modal_help() {
    wx.showModal({
      title: '忘记密码',
      content: '是否向管理员发送请求',
      success: function (res) {
        if (res.confirm) { //这里是点击了确定以后
          console.log('请求帮助')
        } else { //这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})