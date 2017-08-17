Page({

  data: {
    movies:{},  
  },

  onLoad: function (options) {
    var movieId = options.id;
    console.log(111);
    console.log(movieId);
    var dataUrl = "https://api.douban.com/v2/movie/top250"+"movieId";
    util.http(dataUrl, this.processDoubanData);
  },
  processDoubanData: function (moviesDouban) {
    var that = this;
    var movies = moviesDouban.subjects;
    console.log(movies);
  },

})