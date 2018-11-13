var query = 'Foo B';
var re = new RegExp(query, 'i');
var result = [];
result.push(re.test('Foo Bar'));

console.log(result);

console.log(re.lastIndex);

result.push(re.test('Foo Bar'));

console.log(result);
