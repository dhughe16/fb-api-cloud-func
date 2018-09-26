const FB = require('fb');

exports.fbPost = function fbPost(event, context) {

  var token = "your-token";
  var url = "http://www.youtube.com";
  var m = "Hello world!";

  let message =  m;

    // These fields should always stay the same.
    FB.api(
        '/263674121151608/feed',
        'POST', {
        	"fields":"id,name,permalink_url",
          "link": url,
         	"message": message,
         	"access_token": token
        },
      );

    console.log("Success");
};
