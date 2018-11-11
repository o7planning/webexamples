
let s1 = "Welcome to geeks for geeks!";
 console.log("s1=" + s1);
 // Kiểm tra s1
 // Khớp với bất kỳ ký tự nào
 // Quy tắc: .
 let regex = /eek/

  let values = s1.match(regex);
 console.log( values);


 let s2 = "abcde";
  console.log("s2=" + s2);
  // Kiểm tra s2
  // Khớp với bất kỳ ký tự nào
  // Quy tắc: .

  let values2 = s2.match(/./);
  console.log("Matches: " + values2);
