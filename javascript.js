var obj = {
    num : 2
};
console.log("hello");


var addToThis = function(a,b,c){
    
    return this.num + a + b + c; //there is no num
   
};

addToThis.call(obj,10,2,3); //function.call(obj,functionargumentes)
// console.log(addToThis.call(obj,10,2,3));


var arr = [1,2,3];
// console.log(addToThis.apply(obj,arr));

var bound = addToThis.bind(obj);

console.log(bound(1,2,3));
