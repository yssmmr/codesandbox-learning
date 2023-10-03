var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var vai1 = "var変数を再宣言";
console.log(val1);

// let変数
let val2 = "let変数";
console.log(val2);

//　letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能
//let val2 = "let変数を再宣言"

//const val3 = "const変数";
//console.log(val3);

//const変数は上書き不可能
//val3 = "const変数を上書き"

//const変数は再宣言不可
//const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの再定義が可能
const val4 = {
  name: "あいうえお",
  age: 28,
};
console.log(val4);

val4.name = "aiueo";
console.log(val4);
