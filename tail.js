var fs = require('fs');
var filename = process.argv[2];
fs.open(filename, 'r', function(err, fd) {
	if (err) throw new Error('Could not open file');
	var position = 0;
	fs.stat(filename, read);
	fs.watchFile(filename, read.bind(null, null));

	function read(err, stat) {
		var delta = stat.size - position;
		if (delta <= 0) return;

		fs.read(fd, new Buffer(delta), 0, delta, position, function(err, bytes, buffer) {
			console.log("err", err, "delta", delta, "bytes", bytes, "buffer", buffer.toString());
		});
		position = stat.size;
	} 
});
