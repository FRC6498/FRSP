// issac and/or isaac feel free to do everything here thanks
var startMsg = "FRSP STARTED";
var newVal;
var ele;

function Log(msg)
{
    if(msg == typeof(String))
    {
        Console.Log("[FRSP]: " + msg);
    }
}
function Start()
{
    Log(startMsg);
    alert("FIRST RSP STARTED");
}

window.onload = Start;

incrementValue(id) 
{
    if(id == typeof(String))
    {
        var val = parseInt(document.getElementById(id).value, 10);
        val = isNaN(val) ? 0 : val;
        val++;
        document.getElementById(id).value = val;
    }
    else
    {
        throw new TypeError("[FRSP] The id provided was not a string");
    }
}