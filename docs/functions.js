var i = 0;
var counter = 0;
var teamnum;
function increment(id)
{
    document.getElementById(id).value = ++i;
	console.log("I'm an incrementer");
}
function saveData()
{		
	localStorage.setItem('team', teamnum);
}
