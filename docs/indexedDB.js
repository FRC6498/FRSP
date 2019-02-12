if(!window.indexedDB)
{
    alert("Your browser doesn't support a stable version of indexedDB. Some features will not work properly. We apologize for the inconvenience.");
}

//Open sesame
var db;
var request = window.indexedDB.open("frsp");

request.onerror = function(event) {
    //do something idk
    alert("ree y u no let me use indexedDeeBeeeeeeeee");
};

db.onerror = function(event) {
    alert("Databwase Error owo:" + event.target.errorCode);
}
request.onsuccess = function(event) {
    //yes
    console.log("[FRSP]: we did it boys");
    db = event.target.result;
};