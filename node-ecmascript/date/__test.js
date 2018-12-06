var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(date.toLocaleDateString('de-DE', options));
// expected output: Donnerstag, 20. Dezember 2012

console.log(date.toLocaleDateString('ar-EG', options));
// expected output: الخميس، ٢٠ ديسمبر، ٢٠١٢

console.log(date.toLocaleDateString('ko-KR', options));
// expected output: 2012년 12월 20일 목요일

console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
// VN: 2012-12-20
// en_US:
// Thursday, December 20, 2012
// Thursday, December 20, 2012
// Thursday, December 20, 2012
// 12/20/2012

// de_DE, jp_JP
// 2012 M12 20, Thu
// 2012 M12 20, Thu
// 2012 M12 20, Thu
// 2012-12-20
