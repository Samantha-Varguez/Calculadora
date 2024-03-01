var http = require('http');
http.createServer( function(request, response) {
	response.writeHead(200, 
		{
		"Content-Type": "text/json"
		}
	);
	var json = JSON.stringify({
		name: "samantha",
		email: "varguezsamy@gmail.com",
		url: "samantha-varguez.github",
		gps : {
			lat : 18.85,
			lng : -97.099
		}
	});
	response.end(json);
}).listen(8081);
console.log('server running on port 8080');
