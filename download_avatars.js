

var https = require('https');
var request = require('request');

var GITHUB_USER = "ericalapadatjanzen";
var GITHUB_TOKEN = "16ef1493f4eb677a3a7c1e1d7aacf2619b812618";


function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
console.log("requestURL", request.get(requestURL));

}
getRepoContributors(process.argv[2], process.argv[3], function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});