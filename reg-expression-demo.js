console.log("/abc/.test('abcde'):",/abc/.test("abcde"));// true
console.log("/abc/.test('abgdedf'):",/abc/.test("abgdedf")); //false
console.log(/[0-9]/.test('in 1992'));// true
//01-30-2003 15:20

let dateTime=/\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
//->true
console.log(dateTime.test("30-jan-2003 15:20"));
//-> false
console.log(/'\d+'/.test("'123'"));// true
console.log(/'\d+'/.test("''")); //false

console.log(/'\d*'/.test("'123'")); //true

console.log(/'\d*'/.test("''")); //false
//1-30-2003 15:20
let dateTime2=/\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/;
console.log(dateTime2.test("1-30-2003 15:20"));
//->true

//MATCHES AND GROUPS
console.log(/\d+/.exec("one two 100"));
let match=/\d+/.exec('one two 100'); // out put match=['100',index:8,input:'one two 100']
console.log("match====="+match); // out put=match====100