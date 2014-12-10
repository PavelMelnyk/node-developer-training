/**
 * Created by pavelmelnyk on 10.12.14.
 */

//                          --1--
// Number, String, Boolean, Null, Undefined, Object

var number = 23;
    number = 2.3;

var string = 'String';

var boolean = true;
    boolean = false;

var object = {};
// Predefined object type

object = new Array();
object = new Date();



//                             --2--

var a = b = 0; // wrong
var a, b;
a = b = 0; // right
variable = true; // wrong (just if need delete later)
var variable = true; // right


function sum(x, y) {
    variable = true; // wrong
    var variable = true; // right
}



function sum(x, y) {// wrong
    //code
    var variable = true;
    //code
    var variable2 = true;
}

function sum(x, y) {// right (see all var on start)
    var variable = true,
        variable2 = true;
    //code
}


//                             --3--

var b = true || false,
    c = true && false,
    d = !false,
    a = 3 < 5,
    a1 = 4 === 5,
    a2 = 4 == 5,
    a3 = 4 != 5,
    a4 = 4 !== 5;


// wrong
1 == "1"; // true
false == " \n\t "; // true
[[],[]] == true; // true

// right
1 === "1"; // false
false === " \n\t "; // false
[[],[]] === true; // false


//                             --4--


if (4 === 5) //wrong
    a = 5;

if (4 === 5) {
    a = 5;
}


//for                             --5--

var array = [];
for (var i = 0; i < array.length; i++) {}; //wrong
for (var i = 0, max = array.length; i < max; i++) {} //right


//forin                             --6--


var array = [];
    str = 'ddd';
    obj = {
        param:'param'
    };

for (iter in array) {} //wrong
for (iter in str) {} //wrong
for (iter in obj) {} //wrong


for (var param in obj) {
    if (obj.hasOwnProperty(i)) { // jast obj won
    }
}


//while                             --7--

while (true) {break;} //wrong probably

var n = 0,
    x;
while (n < 3) { //right
    n++;
    x += n;
}


//forEach                          --8--


var array = [],
    obj = {
        param:'param'
    };

array.forEach(function(value1, value2, set){});//right




// each                           --9--

//plain JS dasn't have each (jQuery have)


// bolean                         --10--


var bol = Boolean(true),
    bol0 = Boolean('true'),
    bol1 = true,
    bol2 = 1 == 1,
    bol3 = !1;


// string                         --11--


var str = String('textxxsx'),
    srt0 = Object("I am a string"),
    str1 = 'dsds',
    d = 1,
    str = d.toString();


str.charAt(2); // x
str.charCodeAt(2); // 120
str.concat('strin',1); // textstrin1
str.indexOf('te',0); // 0
str.lastIndexOf('s'); // 6
str.length; // 4
str.localeCompare('wrw'); // -1 compare who biger
str.match(/x/g); // ["x", "x", "x", "x"] saerch with regexp
str.replace(/x/, '+'); // te+txxsx
str.replace(/x/g, '+'); // te+t++s+
str.replace('x', '+'); // te+txxsx
str.search(/x/); // 2
str.slice(1,3); // ex
str.split('x'); // ["te", "t", "", "s", ""]
str.substr(2,3); //xtx from start n characters
str.substring(2,3); //xtx from start to end
str.toUpperCase();
str.toLowerCase();
str.trim();


// number                         --12--


var num = Number(2),
    num = Number('2'),
    num = 2,
    num = parseInt('2',10);

num.toString();// "2"
num.toExponential();// "2e+0"
num.toFixed(2); // "2.00"
num.toPrecision(2); // "2.0"




// objects                         --13--


var obj = Object(),
    obj = new Object(),
    obj = Object.create({}),// or Null, optional is Descriptors object
    obj = {name:'test', foo:function(){}};

obj.name;
obj['name'];
obj.foo();
obj['foo']();

obj.toString(); // "[object Object]"
obj.valueOf(); //Object {name: "test"}
obj.hasOwnProperty('name'); // true
obj.propertyIsEnumerable('name'); // true
obj.isPrototypeOf()

// arrey                         --14--


var arr = new Array(),
    arr = Array(),
    arr = new Array(3),
    arr = new Array('one','two','tree'),
    arr = ['one','two','tree'];

arr.length;// 3

arr.concat(4,5);// ["one", "two", "tree", 4, 5]
arr.every(function (x) {return Boolean(x);})// true
arr.some(function (x,i,arr) {return i>=2;});// true

arr.filter(function (x) {return x.length < 4;});//["one", "two"]
arr.forEach(function(x){console.log(x)});
arr.indexOf('two');// 1
arr.lastIndexOf('two');// 1
arr.join(' | ');// "one | two | tree"
arr.map(function (x) {return x.concat('!')});// ["one!", "two!", "tree!"]
arr.pop();// "tree" arr.length 2
arr.push('tree');// 3 arr.length 3
arr.reduce(function(x,y){return x+y});// "onetwotree"
arr.reduceRight(function(x,y){return x+y});//"treetwoone"
arr.reverse();//["tree", "two", "one"]
arr.shift();// "tree" arr.length 2
arr.unshift("tree");//3 arr.length 3
arr.slice(1,2);//["two"]
arr.sort(); // ["one", "tree", "two"]
arr.splice(1,2,'dva','dva2');//["tree", "two"] arr == ["one", "dva", "dva2"]
arr = ['one','two','tree'];
arr.toString();// "one,dva,dva2"


// parseInt                         --14--

parseInt('2',10);//right
parseInt('2');//wrong