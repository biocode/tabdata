
  $(document).ready(function(){

    var tabs = []
      , winLen
      , tabLen
      ;

    // count and record all the open tabs for all the windows
    chrome.windows.getAll({populate:true}, function (windows) {
      winLen = windows.length
      for(var i = 0; i < winLen; i++) {
        var t = windows[i].tabs;
        tabLen = t.length
        for(var j = 0; j < tabLen; j++) {
          tabs.push(t[j]);
        }
      }
      console.dir(tabs);
      $("#databox").val(formatData(tabs));
    });

    function formatData(arrayOfTabs) {
      var retStr = ""
        , tmp
        ;

        arrayOfTabs.forEach(function(tab){
          retStr += tab.url + "\n";
        });

        return retStr;
    }
  });
