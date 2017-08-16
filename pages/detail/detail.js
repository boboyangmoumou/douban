var subjectUtil = require("../../utils/foreach.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    result:[],
    goodsList:[],
    scrollTop:0,
    scroolHeight:0,
    start:0,
    hiddenEnd:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onReachBottom:function(){
    console.log("加载更多")
    if(!this.data.hiddenEnd){
      return;
    }
    this.showMovie();
  },
  onLoad: function (options) {
    this.recommend();
  },

  recommend: function () {
    var that=this;
    var _url = "https://api.douban.com/v2/movie/top250?start=i&count=20";
    wx.request({
      url:_url,
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success:function(res){
        console.log(res.data.subjects);
        var results = res.data.subjects;
        subjectUtil.provessSubjects(results);
        that.setData({
          result:results,
          hidden:true
        })
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
    
  }
})