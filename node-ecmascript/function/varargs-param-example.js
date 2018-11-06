
function showInfo(name, ... points)  {
    console.log("------------ ");
    console.log("Name: " + name);

    console.log("Array length: "+ points.length);

    for(let i=0; i< points.length; i++)  {
      console.log( points[i] );
    }
}

showInfo("Tom", 52, 82, 93);

showInfo("Jerry", 10, 50);

showInfo("Donald");
