(function(){
	// load audio
    var audio = new Audio('sound/he.mp3');
    audio.load();
    audio.autoplay = false;

	var socket = io.connect('http://127.0.0.1:3000');
	var count = parseInt(localStorage.getItem('hee')) || 0;
	document.getElementById('contents').innerText = count;
	
	socket.on('connect', function(){
		console.log('connect');
		document.getElementById('contents').className = 'on';
		
		socket.on('soundPlay', function (){
			console.log('sound play');
			var c = ++count;
			localStorage.setItem('hee', c);
			document.getElementById('contents').innerText = c;
			// audio play from start position
	        audio.currentTime = 0;
	        audio.play();
		});
	});
})();