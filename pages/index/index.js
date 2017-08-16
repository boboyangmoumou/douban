//index.js
//获取应用实例
var subjectUtil = require("../../utils/foreach.js")
var app = getApp()
Page({
  data: {
    imgUrls:[
      "../assets/img/001.jpg",
      "../assets/img/002.jpg",
      "../assets/img/003.jpg",
    ],
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration:1000,
    movies: []
  },
  onLoad:function(){
      this.loadMovies();
  },
  loadMovies:function(options){
    var that = this
    // var url = "https://api.douban.com/v2/movie/in_theaters";
    wx.request({
      url: "https://api.douban.com/v2/movie/in_theaters",
      method:'GET',
      header:{
        "Content-Type": "json"
      },
      success:function(res){
        // console.log(res.data.subjects);
        var subjects = res.data.subjects;
        // that.processDouban(res.data);
        subjectUtil.provessSubjects(subjects);
        console.log();
        that.setData({
           movies:subjects,
           hidden:true
        });

      }
    })
  },


  

})
