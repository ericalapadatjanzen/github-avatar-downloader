

var GITHUB_USER = "ericalapadatjanzen";
var GITHUB_TOKEN = "16ef1493f4eb677a3a7c1e1d7aacf2619b812618";

// var https = require('https');
var request = require('request');
var fs = require('fs');




function getRepoContributors(repoOwner, repoName, cb) {
  var options =  {
    url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'ericalapadatjanzen'
    }
  };

  request(options, cb);

}
getRepoContributors(process.argv[2], process.argv[3], function(err, result, body) {
  let parsedResults = JSON.parse(body);
  for (var i = 0 ; i < parsedResults.length; i++) {
    let avatarUrl = parsedResults[i]['avatar_url'];
    downloadingImageByURL(avatarUrl, `avatars/${i}.jpg`);
  }
});

function downloadingImageByURL(url, filepath){
  request(url).pipe(fs.createWriteStream(filepath));

}



