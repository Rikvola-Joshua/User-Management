export const validateUrl = function (url) {
  var r = new RegExp(/^(http|https):\/\/[^ "]+$/i);

  if (url == "") {
    return url
  }

  else if (r.test(url)) {
    return url
  }

  else {
    return 'http://' + url
  }
}
