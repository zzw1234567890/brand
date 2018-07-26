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
    yview: false,
    view: true,
    index: '',
    mask: true,
    sview: true,
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
        "trend": "/img/up.png",
        "title": "CHANEL 香奈儿",
        "age": "33岁",
        "nation": "美国",
      },
    ],
    detail: [
      {
        "pic": "/img/mac.png",
        "brandName": "CHANEL 香奈儿",
        "companyName": "(香奈儿(中国)贸易有限公司)",
        "brandDetail": "(400-120-0500，始于1910年法国,以双C标志/菱形格纹/山茶花为品牌标志,No.5香水/2.55手袋/小黑裙/双色鞋是时尚界永恒经典,法国香奈儿(CHANEL)公司)",
        "age": "33岁",
        "country": "法国",
      },
      {
        "pic": "/img/mac.png",
        "brandName": "CHANEL 香奈儿",
        "companyName": "(香奈儿(中国)贸易有限公司)",
        "brandDetail": "(400-120-0500，始于1910年法国,以双C标志/菱形格纹/山茶花为品牌标志,No.5香水/2.55手袋/小黑裙/双色鞋是时尚界永恒经典,法国香奈儿(CHANEL)公司)",
        "age": "33岁",
        "country": "法国",
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
    // console.log(e);
  },
})