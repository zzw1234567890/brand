var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: '1',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this;
    wx.request({
      url: 'https://go.zhangzw.top/web/problem/count',
      data: {
        userid: wx.getStorageSync("userid"),
      },
      method: "POST",
      header: { "content-type": "application/x-www-form-urlencoded" },
      success: function (e) {
        that.setData({ count: e.data.count})
        // console.log(e.data)
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
  onShareAppMessage: function (e) {
    // ids = e.target.dataset.id
    // console.log(e)
    if (e.from != "menu") {
      return {
        title: "品牌测试",
        imageUrl: "../../img/tu.png",
        path: "/pages/mian/mian"
      }
    } else {
      return {
        title: "品牌 Top",
        imageUrl: '../../img/brand1.jpg',
        path: "/pages/main/mian",
      }
    }
  },
  //点击测试
  text: function () {
    wx.navigateTo({
      url: '../text/text'
    })
  }
})