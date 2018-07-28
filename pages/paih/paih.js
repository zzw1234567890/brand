// pages/paih/paih.js
var app = getApp()
var that;
var arrSrc = [];
var index;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yview: false,
    view: true,
    index: '',
    mask: true,
    sview: true,


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    that=this,
    //搜索跳转请求
    // wx.request({
    //   url: 'https://go.zhangzw.top/web/search/index',
    //   method: 'POST',
    //   data: {
    //     userid: wx.getStorageSync("userid"),
    //     search: wx.getStorageSync("label"),
    //   },
    //   header: {
    //     "content-type": "application/x-www-form-urlencoded"
    //   },
    //   success: function (e) {
    //     console.log(e);
    //     that.setData({
    //       brand: e.data
    //     })
    //   }
    // })


    //搜索热词跳转请求
    // wx.request({
    //   url: 'https://go.zhangzw.top/web/search/index',
    //   method: 'POST',
    //   data: {
    //     userid: wx.getStorageSync("userid"),
    //     search: wx.getStorageSync("text "),
    //   },
    //   header: {
    //     "content-type": "application/x-www-form-urlencoded"
    //   },
    //   success: function (e) {
    //     // console.log(e);
    //     that.setData({
    //       brand: e.data
    //     })
    //   }
    // })

    // //第三分类跳转请求
    // // if (wx.getStorageSync("that.data.searchValue ") || wx.getStorageSync("label ") || wx.getStorageSync("text ")){
    // //   wx.
    // // }
    wx.request({
      url: 'https://go.zhangzw.top/web/search/index',
      method: 'POST',
      data: {
        search: wx.getStorageSync("label"),
        userid: wx.getStorageSync("userid"),
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        console.log(e);
        that.setData({
          brand: e.data
        })
      }
    })

 

  },
 
  //关注和已关注
  btnClick: function (e) {
    var that = this;
    // console.log(that.data.view)
    if (that.data.yview == true) {
      that.setData({
        yview: false,
        view: true
      })
    }
    else {
      that.setData({
        view: false,
        yview: true
      })
    }
  },
  //预览图片
  previewImg: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var Pic = that.data.brand;
    for (var a = 0; a < Pic.length; a++) {
      var temp = Pic[a].pic;
      arrSrc.push(temp)
    }
    // console.log(arrSrc)
    wx.previewImage({
      current: Pic[index].pic,     //当前图片地址
      urls: arrSrc,               //所有要预览的图片的地址集合 数组形式
    });
    // console.log(Pic[index].pic);
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

  },
  //点击事件
  touch: function (e) {
    that = this;
    // console.log(e);
    if (that.data.sview == true) {
      that.setData({
        sview: false
      });
      that.setData({
        mask: false
      });

      that.setData({
        detail: e.currentTarget.dataset.detail
      });

    } else {
      that.setData({
        sview: true
      });
      that.setData({
        mask: true
      });
    }
    // console.log(e.currentTarget.dataset.detail);
  },
})