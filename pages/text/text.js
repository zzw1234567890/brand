// pages/text/text.js
var that;
var endX;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startX: 0, //开始移动时距离左
    endX: 0, //结束移动时距离左
    nowPage: 0, //当前是第几个个页面
    text: [],
    // progress: 0,
    isSelect: false,
    textindex: 0,
    num:0,
    record:13,
    // key:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    that = this;
    wx.request({
      url: 'https://go.zhangzw.top/web/problem/getproblem',
      data: {
        userid: wx.getStorageSync("userid"),
        start: 1,
        // progress: that.data.progress
      },
      method: "POST",
      header: { "content-type": "application/x-www-form-urlencoded" },
      success: function (e) {
        var data = [];
        // var Key=[];
        for (var j = 0; j < e.data.length; j++) {
          data[j] = {};
          data[j].area = [];
          // data[j].key=;
          for (var i = 0; i < 4; i++) {
            data[j].area[i] = {};
            data[j].problem = e.data[j].problem;
            data[j].scale = e.data[j].scale;
            data[j].display = e.data[j].display;
            data[j].slateX = e.data[j].slateX;
            data[j].style = e.data[j].style;
            data[j].zIndex = e.data[j].zIndex;
            data[j].key = e.data[j].key;
            data[j].area[i].pic = e.data[j].option_img[i];
            data[j].area[i].brandName = e.data[j].option_text[i];
            data[j].area[i].class = 'selection1';
          }
        }
        // console.log(data)
        that.setData({ text: data });
        that.setData({ textindex: 0 });
        that.checkPage(that.data.nowPage);
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
  onShareAppMessage: function () {

  },
  /////////////////////////////////////////
  //手指触发开始移动
  moveStart: function (e) {
    var startX = e.changedTouches[0].pageX;
    this.setData({
      startX: startX
    });
  },
  //手指触摸后移动完成触发事件
  moveItem: function (e) {
    that = this;
    // console.log(e)
    endX = e.changedTouches[0].pageX;
    that.setData({
      endX: endX
    });
    if (that.data.nowPage >= (that.data.text.length - 1)) {
      // wx.showToast({
      //   title: '最后一题目了喔,明天再来吧',
      //   icon: 'none'
      // })
      wx.request({
        url: 'https://go.zhangzw.top/web/problem/getproblem',
        data: {
          userid: wx.getStorageSync("userid"),
          start: 1,
          // progress: that.data.progress
        },
        method: "POST",
        header: { "content-type": "application/x-www-form-urlencoded" },
        success: function (e) {
          var data = [];
          for (var j = 0; j < e.data.length; j++) {
            data[j] = {};
            data[j].area = [];
            // data[j].key=;
            for (var i = 0; i < 4; i++) {
              data[j].area[i] = {};
              data[j].problem = e.data[j].problem;
              data[j].scale = e.data[j].scale;
              data[j].display = e.data[j].display;
              data[j].slateX = e.data[j].slateX;
              data[j].style = e.data[j].style;
              data[j].zIndex = e.data[j].zIndex;
              data[j].key = e.data[j].key;
              data[j].area[i].pic = e.data[j].option_img[i];
              data[j].area[i].brandName = e.data[j].option_text[i];
              data[j].area[i].class = 'selection1';
            }
          }
          // console.log(data)
          data = that.data.text.concat(data)
          that.setData({ text: data });
          // that.setData({ textindex: 0 });
          // that.data.nowPage = 0;
          // console.log(that.data.text)
          that.checkPage(that.data.nowPage);
        }
      })
      return;      
    }
    that.setData({
      nowPage: that.data.nowPage + 1,
      textindex: that.data.textindex + 1
    });
    this.checkPage(this.data.nowPage);
  },
  // 页面判断逻辑,传入参数为当前是第几页 
  checkPage: function (index) {
    //信列表数据
    that = this;
    var data = that.data.text;
    var m = 1;
    for (var i = 0; i < data.length; i++) {
      //先将所有的页面隐藏
      var disp = 'text[' + i + '].display';
      var sca = 'text[' + i + '].scale';
      var slateX = 'text[' + i + '].slateX';
      var zIndex = 'text[' + i + '].zIndex';
      var style = 'text[' + i + '].style';
      that.setData({
        [disp]: 0,
        [style]: "display:block",
      });
      // console.log()
      //向左移动上一个页面
      if (i == (index - 1)) {
        that.setData({
          [slateX]: '-120%',
          [disp]: 1,
          [zIndex]: 2,
        });
      }
      //向右移动的最右边要display:none的页面
      if (i == (index + 3)) {
        that.setData({
          [style]: 'display:none',
          [slateX]: '0',
          [zIndex]: -10,
        });
      }
      if (i == index || (i > index && (i < index + 3))) {
        //显示最近的三个
        that.setData({
          [disp]: 1
        });
        //第一
        if (m == 1) {
          this.setData({
            [sca]: 1,
            [slateX]: 0,
            [zIndex]: 1,
          });
        }
        //第二
        else if (m == 2) {
          this.setData({
            [sca]: 0.8,
            [slateX]: '2px',
            [zIndex]: -1,
          });
        }
        //第三
        else if (m == 3) {
          this.setData({
            [sca]: 0.6,
            [slateX]: '4px',
            [zIndex]: -2,
          });
        }
        m++;
      }

    }
  },

  //点击选择
  select: function (e) {
    // console.log('1')
    var select = e.currentTarget.dataset.index;
    // console.log(that.data.text[that.data.textindex].area[select])
    that = this;
    // that.setData({
    //   isSelect: false
    // })
    // 选项没被选择时将执行  
    if (!that.data.isSelect) {
      // 将选项设置为“已被选择”  
      that.setData({
        isSelect: true
      })
      // 注意！此处必须是'=='而不是'=' 
      // console.log(that.data.key)
      var Text = that.data.text[that.data.textindex]
      if (select == Text.key) {
        Text.area[Text.key].class = "selection3";
        setTimeout(function () {
          that.moveItem(e);
          that.setData({
            isSelect: false
          })
        }, 800)
      } else {
        Text.area[select].class = "selection2";
        Text.area[Text.key].class = "selection3";
        setTimeout(function () {
          wx.switchTab({
            url: "../main/main"
          })
        }, 2000)
      }
      that.setData({ text: that.data.text });
    }
    // console.log(that.data.isSelect)
    return;
  },
})