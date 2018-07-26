// pages/collection/collection.js
var index;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    brand: [{ "pic": "http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg", "brandName": "CHANEL 香奈儿", "companyName": "(香奈儿(中国)贸易有限公司)", "brandDetail": "(400-120-0500，始于1910年法国,以双C标志/菱形格纹/山茶花为品牌标志,No.5香水/2.55手袋/小黑裙/双色鞋是时尚界永恒经典,法国香奈儿(CHANEL)公司)", "hotPic": "../../images/hot1.png", "hot": "热度1", "age": "24", "country": "法国", "paioshu": "7223", },
      { "pic": "../../images/logo2.jpg", "brandName": "Dior 迪奥", "companyName": "克丽丝汀迪奥商业(上海)有限公司", "brandDetail": "(400-120-0500，始于1910年法国,以双C标志/菱形格纹/山茶花为品牌标志,No.5香水/2.55手袋/小黑裙/双色鞋是时尚界永恒经典,法国香奈儿(CHANEL)公司)", "hotPic": "../../images/hot2.png", "hot": "热度2", "age": "24", "country": "法国", "paioshu": "5827", },
      { "pic": "../../images/logo3.jpg", "brandName": "LANCOME兰蔻", "companyName": "欧莱雅(中国)有限公司", "brandDetail": "(400-120-0500，始于1910年法国,以双C标志/菱形格纹/山茶花为品牌标志,No.5香水/2.55手袋/小黑裙/双色鞋是时尚界永恒经典,法国香奈儿(CHANEL)公司)", "hotPic": "../../images/hot3.png", "hot": "热度3", "age": "24", "country": "法国", "paioshu": "5603", },
      { "pic": "../../images/logo4.jpg", "brandName": "Guerlain娇兰", "companyName": "法国LVMH集团", "brandDetail": "(400-120-0500，始于1910年法国,以双C标志/菱形格纹/山茶花为品牌标志,No.5香水/2.55手袋/小黑裙/双色鞋是时尚界永恒经典,法国香奈儿(CHANEL)公司)", "hotPic": "../../images/hot4.png", "hot": "热度4", "age": "24", "country": "法国", "paioshu": "5303", },
      { "pic": "../../images/logo5.jpg", "brandName": "Burberry博柏利", "companyName": "博柏利(上海)贸易有限公司", "brandDetail": "(400-120-0500，始于1910年法国,以双C标志/菱形格纹/山茶花为品牌标志,No.5香水/2.55手袋/小黑裙/双色鞋是时尚界永恒经典,法国香奈儿(CHANEL)公司)", "hotPic": "../../images/hot5.png", "hot": "热度5", "age": "24", "country": "法国", "paioshu": "4983", },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  delete:function(){
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
  }
})