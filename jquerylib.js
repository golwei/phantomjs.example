

// Read the Phantom webpage '#intro' element text using jQuery and "includeJs"

"use strict";
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.open("http://www.baidu.com/", function(status) {
    if (status === "success") {
        page.includeJs("http://cdn.bootcss.com/jquery/1.6.4/jquery.min.js", function() {
            page.evaluate(function() {
                console.log("$(\".explanation\").text() -> " + $(".explanation").text());
            });
            phantom.exit(0);
        });
    } else {
      phantom.exit(1);
    }
});
