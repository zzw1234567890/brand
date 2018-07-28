// pages/home/home.js
var that;
var Index;
// var index0;
var id;

Page({
  data: {
    // iindex:0,
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    curNav: 1,
    curIndex: 0,
    // index0:[],

  },
  onLoad: function (e) {
    
  },
  selectNav: function (e) {
    that = this;   
    id = e.currentTarget.dataset.id;
    that.setData({
      curNav: id,
      curIndex: e.currentTarget.dataset.index
    });

    //三级分类请求   

    Index = that.data.curIndex
    // third = that.data.dishesList[Index];

    wx.request({
      url: 'https://go.zhangzw.top/web/type/getthirdtype',
      method: 'POST',
      data: {
        second_id: id
      },
      header: { "content-type": "application/x-www-form-urlencoded" },
      success: function (e) {
        var key = `dishesList[${Index}]`;// =>'dishesList[' + Index +']'
        that.setData({ [key]: e.data });
        // console.log(e)
      }
    })
  },


  //搜索跳转
  search: function () {
    // console.log('a')
    wx.navigateTo({
      url: '../search/search',
    })
  },

  //三级分类跳转
  classify: function (e) {
    var that = this
    var label = e.currentTarget.dataset.text
    // console.log(e.currentTarget.dataset.text)
    wx.setStorageSync('label', label)

    wx.navigateTo({
      url: '../paih/paih',
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
    // console.log(id);
    //二级分类请求
    wx.request({
      url: 'https://go.zhangzw.top/web/type/getsecondtype',
      method: 'POST',
      data: {
        first_id: wx.getStorageSync('navNumber')
      },
      header: { "content-type": "application/x-www-form-urlencoded" },
      success: function (e) {
        // console.log(e)
        wx.setStorageSync("id", e.data[0].id)
        that.setData({navList:e.data});
        wx.request({
          url: 'https://go.zhangzw.top/web/type/getthirdtype',
          method: 'POST',
          data: {
            second_id: wx.getStorageSync("id")
          },
          header: { "content-type": "application/x-www-form-urlencoded" },
          
          success: function (e) {
            // console.log(e)
            var curIndex = that.data.curIndex
            var key = `dishesList[${curIndex}]`;// =>'dishesList[' + Index +']'
            that.setData({ [key]: e.data });

            // // index0=e.data[0]
            // that.setData({ [key]: e.data[0] });
          }
        })
      }
    });
    
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