$(document).ready(function(){
	alert('hello world');
  $("button").click(function(){
		var key = '8EG835-PWAPUX262A';
		var url = 'http://api.wolframalpha.com/v2/query?appid=';
		var req = '&input=pi&format=image,plaintext';
		var query = url+key+req;
    $.get(query,function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});



alert('hello');




$(document).ready(function(){
				console.log('here!');
				var key = '8EG835-PWAPUX262A';
				var url = 'http://api.wolframalpha.com/v2/query?appid=';
				var req = '&input=pi&format=image,plaintext';
				var query = url+key+req;
				var meh = '5';
				console.log(query);
				$.get(query,function(data,status){
					// alert("Data: " + data + "\nStatus: " + status);
					console.log('hello');	
				});
			console.log('hello');
			});