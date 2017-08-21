//index.js
//获取应用实例
var subjectUtil = require("../../utils/foreach.js")
var app = getApp()
Page({
  data: {
    imgUrls:[
      // "../assets/img/001.jpg",
      "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2485983612.jpg",
      "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2494948513.jpg",
      "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2493892158.jpg",
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
        console.log(res.data.subjects);
        that.setData({
           movies:subjects,
           hidden:true
        });

      }
    })
  },


  

})
