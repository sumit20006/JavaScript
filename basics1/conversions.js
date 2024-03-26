let num = 123;
let str = "Hitesh";
console.log(typeof num);
console.log(typeof str);

console.log(num);
console.log(str);

let value = Number(str);
console.log(typeof value);
console.log(value);

let value2 = String(num);
console.log(typeof value2);
console.log(value2);

/*
undefined => NaN
null => 0
true => 1
false => 0
"hitesh" => (Number)NaN
123 => (String)123
*/

let login=1;
let booleanlogin= Boolean(login);
console.log(booleanlogin);

/*
1 => true
0 => false
"hitesh" => true(filled variable)
"" => false(empty variable)
*/
