import Toast from '@vant/weapp/toast/toast';

// pages/showDocument/showDocument.js
Page({
  searchChange: function (e) {
    let str = e.detail
    this.setData({
      content: str
    })
    console.log(str,this.data);
  }, 
  send: function () {
    if (!this.data.content) {
      console.log(this.data.content);
      Toast('请输入数据~');
      return
    }
    let arr = this.data.chatList
    arr.push({
      name: '李四',
      content: this.data.content
    })
    this.setData({
      chatList: arr,
      content: ""
    })
    this.pageScrollToBottom()
  },
  pageScrollToBottom: function () {
    wx.createSelectorQuery().select('#page').boundingClientRect((rect) => {
      if (rect) {
        this.setData({
          scrollTop: rect.height * 2
        })
      }
    }).exec()
  },
  showMask: function () {
    this.setData({
      show: true
    })
  },
  hideMask: function () {
    this.setData({
      show: false
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    file: null,
    windowHeight: 0,
    show: false,
    height: 0,
    scrollTop: 0,
    content: "",
    questionList: [
      'lorem jdhaj sdkjashdjkashdadha十点多啊实打实大师大师大大声sj',
      '活动时间大花洒接电话到货时间肯定哈师大哈市',
      'shdjkahsdjhasdkhsadjkhasdhajs'
    ],
    chatList: [{
        name: '张三',
        content: '测试倒计时发生的绝对是副书记佛挡杀佛可视电话j返回大商股份施工方佛挡杀佛规划局水电费手打',
        type: '0'
      },
      {
        name: '张三',
        content: '测试倒计时发生的绝对是副书记佛挡杀佛可视电话',
        type: '0'
      },
      {
        name: '张三',
        content: '测试倒计时发生的绝对是副书记佛挡杀佛可视电话',
        type: '0'
      },
      {
        name: '张三',
        content: '测试倒计时发生的绝对是副书记佛挡杀佛可视电话',
        type: '0'
      },
      {
        name: '李四',
        content: '测试倒计时发生的绝对是副书记佛挡杀佛可视电话换肤大师客服号上岛咖啡佛挡杀佛上岛咖啡合适的开发和色卡电极法上课',
        type: '1'
      },
      {
        name: '李四',
        content: '测试倒计时发生的绝对是副书记佛挡杀佛可视电话换肤大师客服号上岛咖啡佛挡杀佛上岛咖啡合适的开发和色卡电极法上课',
        type: '1'
      },
      {
        name: '李四',
        content: '测试倒计时发生的绝对是副书记佛挡杀佛可视电话换肤大师客服号上岛咖啡佛挡杀佛上岛咖啡合适的开发和色卡电极法上课',
        type: '1'
      },
      {
        name: '李四',
        content: '测试倒计时发生的绝对',
        type: '1'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', (data) => {
      console.log(data)
      this.setData({
        file: data.file
      })
    })

    wx.createSelectorQuery().select('.head').boundingClientRect((head) => {
      if (head) {
        wx.createSelectorQuery().select('.search').boundingClientRect((search) => {
          if (search) {
            let rpxRate = wx.getSystemInfoSync().screenWidth / 750
            let height = (wx.getSystemInfoSync().windowHeight - head.height - search.height) / rpxRate
            this.setData({
              height,
              windowHeight: wx.getSystemInfoSync().windowHeight / rpxRate
            })
            this.pageScrollToBottom();
          }
        }).exec()
      }
    }).exec()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // var height = wx.getSystemInfoSync().windowHeight;
    // this.setData({
    //   height
    // })
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