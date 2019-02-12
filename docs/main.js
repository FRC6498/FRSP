// issac and/or isaac feel free to do everything here thanks
//did you know:
//Luna was the name of the Soviet program that launched over 25 probes to the Moon.
//Venera lanched 9 probes to Venus, 2 of which landed.
//haha nice cOMMunIsM
//u wearin socks bud? no? u gay lol. 
//haha yes thhats rught o, "buddy" guy
startMsg = new String("FIRST RSP STARTED");

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
    //alert("FIRST RSP STARTED");
}

window.onload = Start;

//this is an object
var item = {
    team: 6498, 
    match: 001,
    sandstorm: {
        line: false,
        hatches: {
            high: 0,
            mid: 0,
            low: 0
        },
        cargo: {
            high: 0,
            mid: 0,
            low: 0
        }
    },
    teleop: {
        hatches: {
            high: 0,
            mid: 0,
            low: 0
        },
        cargo: {
            high: 0,
            mid: 0,
            low: 0
        }
    },
    endgame: {
        hatches: {
            high: 0,
            mid: 0,
            low: 0
        },
        cargo: {
            high: 0,
            mid: 0,
            low: 0
        }
    }
};