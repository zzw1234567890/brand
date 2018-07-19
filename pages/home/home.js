// pages/home/home.js
var animation = wx.createAnimation({})
var i = 1;
Page({
  data: {
    donghua: true,
    left1: Math.floor(Math.random() * 35 + 1),
    left2: Math.floor(Math.random() * 65 + 1),
    left3: Math.floor(Math.random() * 95 + 1),
    left4: Math.floor(Math.random() * 125 + 1),
    left5: Math.floor(Math.random() * 155 + 1),
    left6: Math.floor(Math.random() * 305 + 1),
  },
  onShow: function () {
    this.donghua()
  },
  donghua: function () {
    setTimeout(function () {
      animation.translateY(604).step({ duration: 6000 })
      this.setData({
        ["animationData" + i]: animation.export()
      })
      i++;
    }.bind(this), 500)
    if (i < 7) {
      setTimeout(function () {
        this.donghua()
      }.bind(this), 1000)
    } else {
      console.log(22)
      setTimeout(function () {
        this.setData({
          donghua: false
        })
      }.bind(this), 4500)
    }
  }
})
