var i = 0;
var teamnum;
function buttonClick() 
{
	document.getElementById("thatch").value = ++i;
}
function saveData()
{		
	localStorage.setItem('team', teamnum);
}
