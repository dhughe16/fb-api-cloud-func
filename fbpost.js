/*
* Darcy Hughes
* ASU Cloud-Based Provisioning Capstone Group
* 9-21-18
* Based on modified helloWorld function from Google.
*/

const FB = require('fb');


exports.fbPost = function fbPost(req, res) {

  // Manually insert you own token
  var token = "your_token";

  // req will be posted to Facebook. Default is 'Hello World!'
  let message = req.query.message || req.body.message || 'Hello World!';

  	var access_token;
    console.log(req.body.message);

    FB.api(
        // Feed of specific ASU Capstone Page
        '/263674121151608/feed',
        'POST', {
        	"fields":"id,name",
         	"message": message,
         	"access_token": token
        },
        function(response) {
            // TODO: Insert error message here
        }
      );

    res.status(200).send("Success");
};
