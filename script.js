var randnum=Math.floor(Math.random()*10)+1
var tries=4
function checkGuess() {
	var inputVal=document.getElementById('guess').value
	//alert(randnum +"   "+tries+"   "+inputVal)
	if (inputVal != randnum && tries>=0) {
		//document.getElementById('lives').label="you have "+tries+" lives remaining"
		
		if (tries > 1 ){
			alert("you have "+tries+" lives remaining")
		}else {
			alert("you have "+tries+" life remaining")			
		}
		
		tries-=1
	}
	else if (inputVal==randnum && tries>=0) {
		alert('You Won!')
		location.reload()
	}
	else {
		alert("You Lose")
	}
}