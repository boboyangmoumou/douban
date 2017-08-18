function provessSubjects(subjects){
  for(let i=0;i<subjects.length;i++){
    var subject = subjects[i];
    this.provessSubject(subject);
  }
}
//top 250
// 获取数据并格式
function provessSubject(subject) {

  //电影名
  var title = subject.title;
  //导演信息
  var directors = subject.directors;
  var directorStr = "";
  for (var index in directors) {

    directorStr = directorStr + directors[index].name + " / ";
  }
  if (directorStr != "") {
    directorStr = directorStr.substring(0, directorStr.length - 2);
  }
  //id
  var movieId = subject.id;
  //演员信息
  var casts = subject.casts;
  var castStr = "";
  for (var index in casts) {
    castStr = castStr + casts[index].name + " / ";
    // console.log(casts[index]);
  }
  if (castStr != "") {
    castStr = castStr.substring(0, castStr.length - 2);
  }
  //类型信息
  var genres = subject.genres;
  var genreStr = "";
  for (var index in genres) {
    genreStr = genreStr + genres[index] + " / ";
  }
  if (genreStr != "") {
    genreStr = genreStr.substring(0, genreStr.length - 2);
  }
  //发行的年份
  var year = subject.year;
  //评分
  var rating=subject.rating.average;
  //将数据格式化
  // var text = "名称：" + title + "\n导演:" + directorStr + "\n演员:" + castStr + "\n类型:"
  //  + genreStr + "\n上映年份:" + year + "(中国大陆)" +"\n评分："+ rating +"分"
  var text = `名称 : ${title} \n导演 : ${directorStr} \n演员 : ${castStr} \n类型 : ${genreStr}\n上映年份 : ${year} \n评分 : ${rating}`
  //拿到格式化的数据
  subject.text = text;
  subject.movieId = movieId;
  // console.log(subject.text);
}

function moreInfo(temp){
    //标题
    var Title = temp.title;
    temp.Title = Title;
    //第二标题
    var originTitle = temp.original_title;
    temp.originTitle = originTitle;

    //地区
    var countries=temp.countries;
    var CountriesStr = '';
    for (var index in countries){
      CountriesStr = CountriesStr + countries[index]+ "/";
    }
    if(CountriesStr != ""){
      CountriesStr = CountriesStr.substring(0,CountriesStr.length -1);
    }
    //时间
    var Year = temp.year;
    var Area = `${Year} ${CountriesStr}`;
    temp.Area = Area;
    console.log(Area);
    //简介
    var summary = temp.summary;

    //评分
    var source = temp.rating.average;
    //类型
    var Type = temp.genres;
    var TypeStr='';
    for (let index in  Type){
      TypeStr = TypeStr + Type[index]+ "/"
    }
    if(TypeStr !=""){
      TypeStr = TypeStr.substring(0,TypeStr.length -1);
    }
    //演员
    var castsStr='';
    var casts = temp.casts;
    for(let index in temp.casts){
      castsStr = castsStr + casts[index].name+ "/";
    }
    if(castsStr != ""){
      castsStr = castsStr.substring(0, castsStr.length -1);
    }

    //导演
    var directors = temp.directors;
    var directorsStr = '';
    for(let index in directors){
      directorsStr = directorsStr + directors[index].name +"/";
    }
    if(directorsStr !=""){
      directorsStr = directorsStr.substring(0,directorsStr.length - 1);
    }
    var moviesText = `评分: ${source} \n类型: ${TypeStr} \n演员: ${castsStr} \n导演: ${directorsStr}`
    temp.moviesText = moviesText;
    console.log(moviesText);
    //图片
    var Image = temp.images.large;
    temp.Image = Image;


}


module.exports = {
  provessSubject:provessSubject,
  provessSubjects:provessSubjects,
  moreInfo:moreInfo
}
