
function wheelHandler(evt)  {

   var fontSize = evt.target.style.fontSize;// 12px, 13px,...

   var value = Number(fontSize.substr(0, fontSize.length-2)); // 12, 13,..

   // Scrolling up
   if (evt.deltaY < 0) {
       if(value < 50)  {
         value++;
       }
   }

   // Scrolling down
   if(evt.deltaY > 0)  {
      if(value > 5)  {
         value--;
      }
   } 

   evt.target.style.fontSize = value+"px";

}
