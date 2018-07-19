// var Api = require("../../utils/api.js")
var ARR_NEWS_DATA = []
Page({
  data: {
    hidden: true,
    xinwen_list: [
      {"pic":"../../img/logo.jpg"},
      { "pic": "../../img/logo2.jpg" },
      { "pic": "../../img/logo3.jpg" },
      ],
    indicatorDots: false,
    autoplay: false,
    interval: 2000,
    indicatordots: true,
    duration: 1000
  },

  onLoad: function () {
    var that = this;
    var videoUrl = Api.Url + "&isvideo=1"
    Api.fetchGet(videoUrl, (err, res) => {
      for (var i = 0; i < 14; i++) {
        res.data[i].inputtime = Api.js_date_time(res.data[i].inputtime)
        ARR_NEWS_DATA.push(res.data[i])
      }
      that.setData({
        hidden: true,
        xinwen_list: ARR_NEWS_DATA,
      })
    })
  },
  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../video/video-listdetails?id=" + postId
    })
  },
  onShareAppMessage: function () {
    return {
      title: '柳州1号+ 视听页面',
      path: 'pages/video/video'
    }
  }
})
