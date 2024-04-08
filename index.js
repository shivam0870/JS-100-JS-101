
var call = () => {
    console.log("This function is called");
}


call();

function add(num){
    num = num + 10;
    console.log(num);  // What will be the output?
}

var num = 5;
add(num);
console.log(num);   // What will be the output?

const obj = {
    name:  "Jhon"
}
function changeName(obj){
   obj.name = "Doe";
}
console.log("Object before function call");
console.log(obj.name);
changeName(obj);
console.log("Object after function call");
console.log(obj.name);

var a = 10; // variable 'a' global scope

function func(){
   console.log("a is accessible within the function:", a);
}
func();

console.log("a is accessible outside the function:", a);

console.log(a);
var a = 10;

