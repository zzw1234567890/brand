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
    navList: [{
      id: 0,
      pic: "/img/qiang.png",
      name: '墙顶饰材',
    },
    {
      id: 1,
      pic: "/img/di.png",
      name: '地面材料',
    },
    {
      id: 2,
      pic: "/img/weiyu.png",
      name: '卫浴五金',
    },
    {
      id: 3,
      pic: "/img/menc.png",
      name: '门窗/楼梯',
    },
    {
      id: 4,
      pic: "/img/shuidian.png",
      name: '水电材料',
    },
    {
      id: 5,
      pic: "/img/bancai.png",
      name: '板材/饰材',
    },
    {
      id: 6,
      pic: "/img/deng.png",
      name: '照明/灯饰',
    },
    {
      id: 7,
      pic: "/img/jianzhu.png",
      name: '建筑材料',
    },
    {
      id: 8,
      pic: "/img/jiasi.png",
      name: '家私定制',
    },
    {
      id: 9,
      pic: "/img/buyi.png",
      name: '家纺/布艺',
    },
    {
      id: 10,
      pic: "/img/fangchan.png",
      name: '房产/安防',
    },
    ],

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
    console.log(e.currentTarget.dataset.text)
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