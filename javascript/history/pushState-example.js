function showHistory()  {
   console.log(window.history);
   var log = document.getElementById("log-area");
   log.value="";
   log.value +="history.length="+ history.length +"\n";
   log.value +="history.scrollRestoration="+history.scrollRestoration+"\n";
   log.value +="history.state="+ JSON.stringify(history.state)+"\n";
}

function popstateHandler(popstateEvent)  {
    console.log(popstateEvent );
    document.title = popstateEvent.state.title;
    showHistory();
}

// popstate event handler:
window.onpopstate = popstateHandler;

var number = 0;

function call_pushState()  {
    number = number + 1;
    var title = "State "+ number;

    var dataState = {
         empId : number,
         showProfile: true,
         title: title
    };

    window.history.pushState(dataState, title);
    document.title = title;

    // Show current History:
    showHistory();
}
