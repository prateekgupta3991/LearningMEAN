var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
	title: 'Express',
	todos : [
		{ description : "Buy eggs" , due : new Date(new Date().getTime() + 24*60*60*1000 ), done : false  },
		{ description : "Write a blog post about the current sprint", due : new Date(new Date().getTime()+24*60*60*1000), done : false }, 
		{ description : "Building a memory app", due : new Date(new Date().getTime()+24*60*60*1000), done:true  },
		]
	 });
});

module.exports = router;
