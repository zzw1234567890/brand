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
    showView: true,
    showView1: false,
    bg: true,
    sview: false,
    view: true,
    index: '',
    brand: [
      {
        "pic": "http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg",
        "title": "魅可/M.A.C",
        "trend": "/img/up.png",
        "age": "33岁",
        "nation": "美国",
      },
      {
        "pic": "/img/mac.png",
        "trend": "/img/down.png",
        "title": "魅可/M.A.C",
        "age": "33岁",
        "nation": "美国",
      },
    ],
    brand1: [
      {
        "pic": "http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg",
        "title": "魅可/M.A.C~",
        "trend": "/img/up.png",
        "age": "33岁",
        "nation": "美国",
      },
      {
        "pic": "/img/mac.png",
        "trend":"/img/up.png",
        "title": "CHANEL 香奈儿",
        "age": "33岁",
        "nation": "美国",
      },
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // 点击按钮切换榜单
  showButton: function () {
    var that = this;
    that.setData({
      showView: true,
      showView1: false,
      bg: true,
    })
  },
  showButton1: function () {
    var that = this;
    that.setData({
      showView: false,
      showView1: true,
      bg: false,
    })
  },
  //关注和已关注
  btnClick: function (e) {
    var that = this;
    console.log(that.data.view)
    if (that.data.sview == true) {
      that.setData({
        sview: false,
        view: true
      })
    }
    else {
      that.setData({
        view: false,
        sview: true
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
  
  }
})