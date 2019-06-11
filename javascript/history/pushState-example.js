function showHistory()  {
   console.log(window.history);
   var log = document.getElementById("log-area");
   log.value="";
   log.value +="history.length="+ history.length +"\n";
   log.value +="history.scrollRestoration="+history.scrollRestoration+"\n";
   log.value +="history.state="+ JSON.stringify(history.state)+"\n";
}

function popstateHandler(popstateEvent)  {
    showHistory();
}

// popstate event handler:
window.onpopstate = popstateHandler;

var number = 0;

function call_pushState()  {
    number = number + 1;
    var dataState = {
         empId : number,
         showProfile: true
    };
    var title = "Title "+ number;
    window.history.pushState(dataState, title);

    // Show current History:
    showHistory();
}
