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
    flag:true
  },
  onscrolltolower:function(e){
    console.log('more');
    var nextUrl = this.data.requestUrl + 
    "?start=" + this.data.totalCount + "&count=20";
    util.http(nextUrl,this.processDoubanData)
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
    this.data.page = flase;
    this.data.totalCount = 0;
    util.http(refreshUrl, this.processDoubanData);
    wx.stopPullDownRefresh();
  },
  onLoad: function (options) {
    // this.recommend();
    // var category = options.category;
    // this.data.navigateTitle = category;
    var dataUrl = "https://api.douban.com/v2/movie/top250";
    this.data.requestUrl = dataUrl;
    util.http(dataUrl, this.processDoubanData)
  },
  processDoubanData: function (moviesDouban){
    // console.log(res.data.subjects);
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
    // wx.setStorage({
    //   key:'key',
    //   data:totalMovies
    // }),
    // wx.getStorage({
    //   key: 'key',
    //   success: function(res) {
    //     console.log(res.data);
    //     result: totalMovies;
    //     hidden: true;
    //   },
    // })
    // this.data.totalCount += 20;
    // console.log(this.data.totalCount);
      if(!this.page.flag){
        this.data.totalCount += 20;
      }
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