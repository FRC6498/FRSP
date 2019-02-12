if(!window.indexedDB)
{
    alert("Your browser doesn't support a stable version of indexedDB. Some features will not work properly. We apologize for the inconvenience.");
}

//Open sesame
var dbs;
var request = window.indexedDB.open("frsp");

request.onerror = function(event) {
    //do something idk
    alert("ree y u no let me use indexedDeeBeeeeeeeee");
};

dbs.onerror = function(event) {
    alert("Databwase Error owo:" + event.target.errorCode);
}
request.onsuccess = function(event) {
    //yes
    console.log("[FRSP]: we did it boys");
    dbs = event.target.result;
};

request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var objectStore = db.createOjectStore("name", {keyPath: "key"});
};