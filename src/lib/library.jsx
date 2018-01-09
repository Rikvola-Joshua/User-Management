export const validateUrl = function (url) {
  var r = new RegExp('/^(http|https):\/\/[^ "]+$/');
  if (!r.test(url) && url != "") {
    return 'http://' + url
  } else {
    return url
  }
}
