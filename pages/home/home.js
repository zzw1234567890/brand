// pages/home/home.js

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
    wx.request({
      url: 'https://go.zhangzw.top/web/type/getthirdtype',
      data: {},
      method: "POST",
      header: { "content-type": "application/x-www-form-urlencoded" },
      success: function (e) {
        console.log(e)
        // that.setData({ dishesList: e.data });
        // that.setData({ sview: false });
        // that.setData({ mask: false });
        console.log(e.data)
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