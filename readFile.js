var fs = require('fs');

fs = fs.readFile('/dev/null', 'utf-8', function(err, data){
	if (err) throw err;
	console.log(data);
});


