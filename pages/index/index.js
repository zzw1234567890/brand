// pages/index/index.js
var that;
var arrSrc = [];
var index;
var ids;
var collect;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // PIAOSHU: 0,
    mask: true,
    sview: true,
    select: true,
    collection: false,
    // piaoshu:'',
    movies: [
      { url: '/img/brand1.jpg' },
      { url: '/img/brand2.jpg' },
      { url: '/img/brand3.jpg' },
      { url: '/img/brand4.jpg' },
      { url: '/img/brand5.jpg' },
      { url: '/img/brand6.jpg' },
    ],
    nav: [
      { "img": "../../img/pic.png", "name": "建材家居" },
      { "img": "../../img/pic2.png", "name": "建材家居" },
      { "img": "../../img/pic3.png", "name": "建材家居" },
      { "img": "../../img/pic4.png", "name": "建材家居" },
      { "img": "../../img/pic5.png", "name": "建材家居" },
    ],
    brand: [{ "pic": "http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg", "brandName": "CHANEL 香奈儿", "companyName": "(香奈儿(中国)贸易有限公司)", "brandDetail": "(400-120-0500，始于1910年法国,以双C标志/菱形格纹/山茶花为品牌标志,No.5香水/2.55手袋/小黑裙/双色鞋是时尚界永恒经典,法国香奈儿(CHANEL)公司)", "hotPic": "../../img/hot1.png", "hot": "热度1", "age": "24", "country": "法国", "paioshu": "7223", },
    { "pic": "../../img/logo2.jpg", "brandName": "Dior 迪奥", "companyName": "克丽丝汀迪奥商业(上海)有限公司", "brandDetail": "(400-120-0500，始于1910年法国,以双C标志/菱形格纹/山茶花为品牌标志,No.5香水/2.55手袋/小黑裙/双色鞋是时尚界永恒经典,法国香奈儿(CHANEL)公司)", "hotPic": "../../img/hot2.png", "hot": "热度2", "age": "24", "country": "法国", "paioshu": "5827", },
    { "pic": "../../img/logo3.jpg", "brandName": "LANCOME兰蔻", "companyName": "欧莱雅(中国)有限公司", "brandDetail": "(400-120-0500，始于1910年法国,以双C标志/菱形格纹/山茶花为品牌标志,No.5香水/2.55手袋/小黑裙/双色鞋是时尚界永恒经典,法国香奈儿(CHANEL)公司)", "hotPic": "../../img/hot3.png", "hot": "热度3", "age": "24", "country": "法国", "paioshu": "5603", },
    { "pic": "../../img/logo4.jpg", "brandName": "Guerlain娇兰", "companyName": "法国LVMH集团", "brandDetail": "(400-120-0500，始于1910年法国,以双C标志/菱形格纹/山茶花为品牌标志,No.5香水/2.55手袋/小黑裙/双色鞋是时尚界永恒经典,法国香奈儿(CHANEL)公司)", "hotPic": "../../img/hot4.png", "hot": "热度4", "age": "24", "country": "法国", "paioshu": "5303", },
    { "pic": "../../img/logo5.jpg", "brandName": "Burberry博柏利", "companyName": "博柏利(上海)贸易有限公司", "brandDetail": "(400-120-0500，始于1910年法国,以双C标志/菱形格纹/山茶花为品牌标志,No.5香水/2.55手袋/小黑裙/双色鞋是时尚界永恒经典,法国香奈儿(CHANEL)公司)", "hotPic": "../../img/hot5.png", "hot": "热度5", "age": "24", "country": "法国", "paioshu": "4983", },
    ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    //消息通知
    that.setData({
      msgList: [
        { url: "url", title: "多地首套房贷利率上浮 热点城市渐迎零折扣时代" },
        { url: "url", title: "悦如公寓三周年生日趴邀你免费吃喝欢唱" },
        { url: "url", title: "你想和一群有志青年一起过生日嘛？" }]
    });

    //分享
    if (options.id >= 0) {
      // console.log(options.id)
      wx.request({
        url: 'https://go.zhangzw.top/web/brand/index',
        data: {
          id: options.id
        },
        method: "POST",
        header: { "content-type": "application/x-www-form-urlencoded" },
        success: function (e) {
          that.setData({ detail: e.data });
          that.setData({ sview: false });
          that.setData({ mask: false });
          console.log(e.data)
        }
      })
    }
  },

  //投票
  // 点击图片的点赞事件  这里使用的是同步的方式
  toCollect: function (e) {
    that = this;
    index = e.currentTarget.dataset.index;
    if (that.data.brand[index].isvote == 1) {
      collect =true
    } else {
      collect = false
    }
    that.showModal();
  },
  showModal: function (e) {
    var that = this;
    // console.log(collect)
    wx.showModal({
      title: that.data.brand[index].paioshu,
      content: "当前票数", 
      showCancel: true,
      // cancelText: "取消111",
      // cancelColor: "#000",
      confirmText: collect ? "取消投票" : "投票",
      confirmColor: "#166fb4",
      success: function (res) {
        //确定投票
        if (res.confirm) {
            wx.request({
              url: 'https://go.zhangzw.top/web/brand/vote',
              method: 'POST',
              data: {
                userid: wx.getStorageSync("userid"),
                brandid: that.data.brand[index].id
              },
              header: { "content-type": "application/x-www-form-urlencoded" },
              success: function (e) {
                that.setData({ brand: e.data })
              }
            })
        }
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
    that = this;
    //导航
    wx.request({
      url: 'https://go.zhangzw.top/web/type/getfirsttype',
      method: 'POST',
      data: {},
      header: { "content-type": "application/x-www-form-urlencoded" },
      success: function (e) {
        // console.log(e);
        that.setData({ nav: e.data })
      }
    })

    //首页
    wx.request({
      url: 'https://go.zhangzw.top/web/brand/index',
      method: 'POST',
      data: {
        userid: wx.getStorageSync("userid")
      },
      header: { "content-type": "application/x-www-form-urlencoded" },
      success: function (e) {
        // console.log(e);
        that.setData({ brand: e.data })
      }
    })
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
  onShareAppMessage: function (e) {
    ids = e.target.dataset.id
    // console.log(ids)
    if (e.from != "menu") {
      return {
        title: "品牌排名",
        imageUrl: ids.pic,
        path: "/pages/index/index?id=" + ids.id,
      }
    } else {
      return {
        title: "品牌 Top",
        imageUrl: '../../img/logo.jpg',
        path: "/pages/index/index",
      }
    }
  },
  //搜索跳转
  search: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },

  //大分类跳转
  home: function (e) {
    var navNumber = e.currentTarget.dataset.id;
    if (navNumber == 1) {
      wx.navigateTo({
        url: '../home/home'
      })
    }
    if (navNumber == 2) {
      wx.navigateTo({
        url: '../offic/offic'
      })
    }
    if (navNumber == 3) {
      wx.navigateTo({
        url: '../wear/wear'
      })
    }
    if (navNumber == 4) {
      wx.navigateTo({
        url: '../food/food'
      })
    }
    if (navNumber == 6) {
      wx.navigateTo({
        url: '../daily/daily'
      })
    }
  },



  //预览图片
  previewImg: function (e) {
    that = this;
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
  //点击事件
  touch: function (e) {
    that = this;
    // console.log(e);
    if (that.data.sview == true) {
      that.setData({ sview: false });
      that.setData({ mask: false });
      that.setData({ detail: e.currentTarget.dataset.detail });
    } else {
      that.setData({ sview: true });
      that.setData({ mask: true });
    }
  },

  // //投票
  // select: function () {

  // }
})