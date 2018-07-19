// pages/offic/offic.js

var that;
var index;
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    curNav: '0',
    curIndex: '0',
    // dishesList[0]:true,
    navList: [{
      id: 0,
      pic: "/img/sofa2.png",
      name: '厨卫家具',
    },
    {
      id: 1,
      pic: "/img/dian.png",
      name: '生活电器',
    },
    {
      id: 2,
      pic: "/img/jiadian.png",
      name: '大家电',
    },
    {
      id: 3,
      pic: "/img/com.png",
      name: '电脑/硬件',
    },
    {
      id: 4,
      pic: "/img/shuma.png",
      name: '智能数码',
    },
    {
      id: 5,
      pic: "/img/peijian.png",
      name: '数码/配件',
    },
    {
      id: 6,
      pic: "/img/ying.png",
      name: '影音娱乐',
    },
    {
      id: 7,
      pic: "/img/internet.png",
      name: '网络设备',
    },
    {
      id: 8,
      pic: "/img/game.png",
      name: '网站游戏',
    },
    {
      id: 9,
      pic: "/img/ban.png",
      name: '办公设备',
    },
    {
      id: 10,
      pic: "/img/wenju.png",
      name: '文具/耗材',
    },
    ],
    dishesList: [
      [{
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 1,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 2,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      ],
      [{
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 4,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 5,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 6,
      },
      ],
      [{
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 4,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 5,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 6,
      },
      ],
      [{
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 4,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 5,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 6,
      },
      ],
      [{
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 1,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 2,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      ],
      [{
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 1,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 2,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      ],
      [{
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 1,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 2,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      ],
      [{
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 1,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 2,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      ],
      [{
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 1,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 2,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      ],
      [{
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 1,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 2,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      ],
      [{
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 1,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 2,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      ],
      [{
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 1,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 2,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      {
        name: '衣服',
        pic: "/img/sofa2.png",
        id: 3,
      },
      ],
    ],
  },
  onLoad: function () {
    // 分类
    that = this;
    wx.request({
      url: 'https://go.zhangzw.top/web/type/getsecondtype',
      method: 'POST',
      data: "navNumber == 2",
      header: { "content-type": "application/x-www-form-urlencoded" },
      success: function (e) {
        // console.log(e);
        that.setData({ navList: e.data })
      }
    })

  },
  selectNav: function (e) {
    // console.log(e);
    that = this;
    let id = e.currentTarget.dataset.id;
    // console.log(e);
    index = e.currentTarget.dataset.index;
    that.setData({
      curNav: id,
      curIndex: index,
    });
  },


  //搜索跳转
  search: function () {
    // console.log('a')
    wx.navigateTo({
      url: '../search/search',
    })
  },
  //三级分类跳转
  classify:function(){
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