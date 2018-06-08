$(document).ready(function() {
    //get query values from URL based on parameters
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    //call getUrlVars to get value for parameter
    function getUrlParam(parameter, defaultvalue){
      var urlparameter = defaultvalue;
      if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
      return urlparameter;
    }

  //var myvar = getUrlParam('text','Empty')

  var basePath = "./resources/pannellum/pannellum.htm?panorama=../../media/images/"
  var imgName = getUrlParam('image','Empty')
  var autoLoad = "&autoLoad=true"
  var configs = "&config=nocompass.json"
  var title = getUrlParam('title','')
  var author = "&author=Robert Blash"

  var srcStr = basePath + imgName + autoLoad + configs + "&title=" + title + author
  $("#panoframe").attr("src",srcStr);

  });
