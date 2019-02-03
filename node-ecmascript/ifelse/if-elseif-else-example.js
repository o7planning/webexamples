// (1) (vi)
// Khai báo một biến
// Đại diện cho điểm thi (score) của bạn

// (en)
// Declaring a varible
// Represent your test scores.
let score = 70;

console.log("Your score =" + score);

// (2) (vi)
// Nếu điểm số nhỏ hơn 50
// (en)
// If the score is less than 50
if (score < 50) {
  console.log("You are not pass");
}
// (3) (vi)
// Ngược lại nếu score lớn hơn hoặc bằng 50 và nhỏ hơn 80.
// (en)
// Else if the score more than or equal to 50 and less than 80.
else if (score >= 50 && score < 80) {
  console.log("You are pass");
}
// (4) (vi)
// Trường hợp còn lại (Nghĩa là lớn hơn hoặc bằng 80)
// (en)
// Remaining cases (that is greater than or equal to 80)
else {
  console.log("You are pass, good student!");
}
