var util = require('../../utils/feath.js')
var subjectUtil = require("../../utils/foreach.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    result:[],
    pn:0,
    navigateTitle: "",
    requestUrl: "",
    totalCount: 0,
    isEmpty: true,
    // flag:true
    isFreshing: false,
    n:0
  },
  onscrolltolower:function(e){
    console.log('more');
    var nextUrl = this.data.requestUrl + 
    "?start=" + this.data.totalCount + "&count=20";
    if(this.data.isFreshing===true){
      return
    }else{
      console.log(this.data.n++);
      util.http(nextUrl, this.processDoubanData);
      this.data.isFreshing = true;
    }
    wx.stopPullDownRefresh();
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onReachBottom:function(){
    console.log("加载更多")
  },
  onPullDownRefresh:function(event){
    var refreshUrl= this.data.requestUrl + "?star=0&count=20";
    this.data.result = {};
    this.data.isEmpty = true;
    this.data.flag = true;
    this.data.totalCount = 0;
    console.log("判断");
    util.http(refreshUrl, this.processDoubanData);
    wx.stopPullDownRefresh();
  },
  onLoad: function (options) {
    var dataUrl = "https://api.douban.com/v2/movie/top250";
    this.data.requestUrl = dataUrl;
    if (this.data.isFreshing === true){
      return
    }else{
      console.log(this.data.n++);
      util.http(dataUrl, this.processDoubanData);
      this.data.isFreshing;
    }
    wx.stopPullDownRefresh();
  },
  processDoubanData: function (moviesDouban){
    var that = this;
    var results = moviesDouban.subjects;
    subjectUtil.provessSubjects(results);
    var totalMovies = {}
    if(!this.data.isEmpty){
      totalMovies = this.data.result.concat(results);
    }else{
      totalMovies = results;
      this.data.isEmpty=false;
    }
    that.setData({
      result: totalMovies,
      hidden: true
    })
    this.data.isFreshing=false;
    this.data.totalCount += 20;
    wx.stopPullDownRefresh();
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