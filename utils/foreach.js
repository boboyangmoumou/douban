function provessSubjects(subjects){
  for(let i=0;i<subjects.length;i++){
    var subject = subjects[i];
    this.provessSubject(subject);
  }
}
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
  var Id = subject.id;
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
  // console.log(subject.text);
}

module.exports = {
  provessSubject:provessSubject,
  provessSubjects:provessSubjects
}
