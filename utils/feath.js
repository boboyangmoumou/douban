var flag = true;
function http(url, callBack) {
  // if (flag) {
  //   return;
  // }
  flag = true;
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "Content-Type": "json"
    },
    success: function (res) {
        flag = false;
        callBack(res.data);
      
    },
    fail: function (error) {
      flag=false;
      console.log(error)
    }
  })
}

module.exports = {
  http:http
}