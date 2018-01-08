export const validateUrl = function (providedUrl) {
  var url = providedUrl;
  var r = new RegExp('/^(http|https):\/\/[^ "]+$/');
  if (!r.test(url)) {
    return 'http://' + url
  } else {
    return url
  }
}
