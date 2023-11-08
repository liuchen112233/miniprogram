// pages/uploadFile/uploadFile.js
Page({
  uploadFile: function () {
    wx.getSystemInfo().then(res => {
      if (res.model.includes('iPhone')) {
        wx.chooseMessageFile({
          count: 1,
          type: 'file',
          success: (res) => {
            console.log(res);
            this.setData({
              file: res.tempFiles[0]
            })
          }
        })
      } else {
        wx.getFileSystemManager(1, 'all').then(res => {
          console.log(res);
        })
      }
    })
  },
  navigateToshow: function () {
    wx.navigateTo({
      url: "/pages/showDocument/showDocument",
      success: (res) => {
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          file: this.data.file
        })
      },
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    file: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})