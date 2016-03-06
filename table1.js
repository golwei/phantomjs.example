var webPage = require('webpage');
var page = webPage.create();

page.includeJs(
  // Include the https version, you can change this to http if you like.
  'https://cdn.bootcss.com/jquery/1.6.4/jquery.min.js',
  function() {
    (page.evaluate(function() {
      // jQuery is loaded, now manipulate the DOM
      var $loginForm = $('form#login');
      $loginForm.find('input[name="username"]').value('phantomjs');
      $loginForm.find('input[name="password"]').value('c45p3r');
    }))
  }
);
