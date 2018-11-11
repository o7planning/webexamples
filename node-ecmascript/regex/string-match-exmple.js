
let s1 = "a";
 console.log("s1=" + s1);
 // Kiểm tra toàn bộ s1
 // Khớp với bất kỳ ký tự nào
 // Quy tắc: .
 // ==> true
 let match = s1.match(/./g);
 console.log("-Match . " + match);

 s1 = "abc";
 console.log("s1=" + s1);
 // Kiểm tra toàn bộ s1
 // Khớp với bất kỳ ký tự nào.
 // ==> false  (Rõ ràng, chuỗi 3 ký tự sao khớp với 1 ký tự bất kỳ?)
 match = s1.match(".");
 console.log("-Match . " + match);

 // Kiểm tra toàn bộ s1
 // Khớp với bất kỳ ký tự nào 0 hoặc nhiều lần
 // Kết hợp các quy tắc: . và *
 // ==> true
 match = s1.match(".*");
 console.log("-Match .* " + match);

 let s2 = "m";
 console.log("s2=" + s2);
 // Kiểm tra toàn bộ s2
 // Bắt đầu bởi m
 // Quy tắc ^
 // true
 match = s2.match("^m");
 console.log("-Match ^m " + match);

 s2 = "mnp";
 console.log("s2=" + s2);
 // Kiểm tra toàn bộ s2
 // Bắt đầu bởi m
 // Quy tắc ^
 // ==> false  (Rõ ràng, chuỗi 3 ký tự sao khớp với 1 ký tự bất kỳ bắt đầu bởi m)
 match = s2.match("^m");
 console.log("-Match ^m " + match);

 // Bắt đầu bởi m
 // Sau đó là ký tự bất kỳ, xuất hiện 1 hoặc nhiều lần.
 // Quy tắc ^ và . và +
 // true
 match = s2.match("^m.+");
 console.log("-Match ^m.+ " + match);

 let s3 = "p";
 console.log("s3=" + s3);
 // Kiểm tra s3 kết thúc bằng p
 // Quy tắc $
 // true
 match = s3.match("p$");
 console.log("-Match p$ " + match);

 s3 = "2nnp";
 console.log("s3=" + s3);
 // Kiểm tra toàn bộ s3
 // Kết thúc bằng p
 // ==> false  (Rõ ràng, chuỗi 4 ký tự sao khớp với 1 ký tự p cuối cùng)
 match = s3.match("p$");
 console.log("-Match p$ " + match);

 // Kiểm tra toàn bộ s3
 // Ký tự bất kỳ xuất hiện 1 lần: .
 // tiếp theo là n, xuất hiện 1 hoặc tối đa 3 lần.
 // Kết thúc bởi p: p$
 // Kết hợp các quy tắc: . , {X,Y}, $
 // true
 match = s3.match(".n{1,3}p$");
 console.log("-Match .n{1,3}p$ " + match);

 let s4 = "2ybcd";
 console.log("s4=" + s4);
 // Bắt đầu là 2
 // Tiếp theo x hoặc y hoặc z
 // Tiếp theo bất kỳ 1 hoặc nhiểu lần.
 // Kết hợp các quy tắc: [abc] , . , +
 // true
 match = s4.match("2[xyz].+");

 console.log("-Match 2[xyz].+ " + match);

 let s5 = "2bkbv";
 // Bắt đầu là bất kỳ, 1 hoặc nhiểu lần
 // Tiếp theo a hoặc b, hoặc c: [abc]
 // Tiếp theo z hoặc v: [zv]
 // Tiếp theo bất kỳ
 // true
 match = s5.match(".+[abc][zv].*");

 console.log("-Match .+[abc][zv].* " + match);
