$(document).ready(function() {

	var url = 'http://localhost:8000';

	var doc = $(document);
	var color = "#"+((1<<24)*Math.random()|0).toString(16);

	console.log("connecting..");
	var socket = io.connect(url);

	socket.on('connect', function(){
		console.log('Connected');
		$('#status').html('<font color="green">Connected</font>');

	});

	
	socket.on('error',  function (error) {
		//just in there were some problems with conenction...
		$('#status').html($('<p>', { text: 'Sorry, but there\'s some problem with your ' + 'connection or the server is down.</p>' } ));
	});


	socket.on('newmsg', function (data) {
		console.log("RECEIVING....");
		processMsg(data);
	});

	$('#input').keydown( function(e){
		if(e.keyCode === 13){
			var msg = '<font color="'+color+'">'+$(this).val()+'</font>';
			console.log("msg" + msg);
			if(!msg){return;}
			socket.emit('message', msg);
			processMsg(msg);
			$(this).val('');
		}
	});

	// process Message
	function processMsg(msg){
		$("#board h1").each(function(){
			$(this).animate({"font-size":"-=15px", "opacity": "-=0.15"},200);
		});
		$("#board").prepend($("<h1>"+msg+"</h1>").fadeIn('slow'))
	}

});
