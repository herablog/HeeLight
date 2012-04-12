(function(){

	var socket = io.connect('http://127.0.0.1:3000');
	
	socket.on('connect', function(){
		console.log('connect');
		var el = document.getElementById('btn');
		el.className = 'on';
    el.addEventListener('click', function(){
      console.log('hee');
      socket.emit('hee');
    }, false);
	});
})();