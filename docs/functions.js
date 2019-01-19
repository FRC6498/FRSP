var i = 0;
var teamnum;
function buttonClick(id) 
{
	document.getElementById(id).value = ++i;
}
function saveData()
{		
	localStorage.setItem('team', teamnum);
}