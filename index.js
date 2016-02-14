var express = require('express');
var app = express();
var rp = require('request-promise');
var request = require('request');
app.set('view engine','ejs');
app.get('/', function(req,res){
    res.render('default');
})
app.get('/pop', function (req,res) {
compare(req,res);

});




function compare(req,res){
    firstuser = req.query.firstuser;
    seconduser = req.query.seconduser;
    var firstdetails =0;
    var seconddetails=0;
    var path1 = 'https://api.github.com/users/'+firstuser;
    var options = { method: 'GET',
        url:path1 ,
        headers:
        {  'User-Agent': 'deepakavs',
            'cache-control': 'no-cache'
        } };

    rp(options, function (error, response, body) {
        if (error) throw new Error(error);


    }).then(function (body) {
        var repos= parseInt(JSON.parse(body).public_repos);
        var folls = parseInt(JSON.parse(body).followers);

        var count =repos+ folls;
        firstdetails =count;
        //console.log("first" + firstdetails);
        rp(options, function (error, response, body) {
            if (error) throw new Error(error);


        }).then(function (body) {
            var repos= parseInt(JSON.parse(body).public_repos);
            var folls = parseInt(JSON.parse(body).followers);
            var count =repos+ folls;
            seconddetails=count;
            // console.log("second" + seconddetails);
            if(parseInt(firstdetails) > parseInt(seconddetails))
                res.send({popular:firstuser});
            else
                res.send({popular:seconduser});
        });
    });


    var path2 = 'https://api.github.com/users/' + seconduser;
    var options = { method: 'GET',
        url:path2 ,
        headers:
        {  'User-Agent': 'deepakavs',
            'cache-control': 'no-cache'
        } };
}

app.listen(3000, function(){
   console.log('listening on 3000');
})