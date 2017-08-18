var util = require('../../utils/feath.js')
var subjectUtil = require("../../utils/foreach.js")
Page({

  data: {
    movies:{},  
  },

  onLoad: function (options) {
    var Id = options.id;
    console.log(options.id);
    var dataUrl = "https://api.douban.com/v2/movie/subject/"+Id;
    util.http(dataUrl, this.processDoubanData);
  },
  processDoubanData: function (moviesDouban) {
    var that = this;
    var movies = moviesDouban;
    subjectUtil.moreInfo(movies);
    console.log(movies);
    that.setData({
      movies:movies
    })
  },

})