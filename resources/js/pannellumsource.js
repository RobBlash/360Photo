$(document).ready(function() {

    //get pannellum parameters from URL query values, then populate source attribute of iframe

    //get query value from URL based on parameter
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


  //populate variables with parameters needed for iframe source
  var basePath = "./resources/pannellum/pannellum.htm?panorama=../../media/images/";
  var autoLoad = "&autoLoad=true";
  var configs = "&config=nocompass.json";

  //parameters passed as URL query values
  //var myvar = getUrlParam('parameter-name','value if not specified in URL')
  var imgName = getUrlParam('image','Empty');
  var title = "&title=" + getUrlParam('title','');
  var author = "&author=" + getUrlParam('author','');

  //concatenate variables into iframe source string
  var srcStr = basePath + imgName + autoLoad + configs + title + author;

  //use jquery to push source attribute to iframe
  $("#pannellum-frame").attr("src",srcStr);

  });
