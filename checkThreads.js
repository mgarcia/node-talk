#!/usr/local/bin/node

var file = process.argv[2]
console.log(process.pid)

	if(file){
		  require('fs').readFile(file, function() {});
	}

//setTimeout(function(){console.log("Hello Threads!!")}, 10000);
