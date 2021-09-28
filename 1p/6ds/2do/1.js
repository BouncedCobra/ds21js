// 1. DS-obj
// a. produce 1e5 random names, ie name35927
// b. add each random name into our ds-obj
// c. measure the time it took
// d. calculate the average of 7 runs
function inicio(){
    t0 = performance.now();
}
function final(){
    t1 =  performance.now();
}
let obj = {}
var i,j,ti,tt=0;
//es6
const add    = (key, value) => obj[key] = value
const get    = (key)  => obj[key]
const remove = (key)  => delete obj[key]
const clear  = ()  => obj = {}

//first
for(j=0; j<7; j++){
    inicio();
    for(i=0; i<100000; i++){
        add(i,"Name"+(Math.random()*10000).toFixed(0));
    }
    final()
    ti = t1-t0;
    tt = tt+ti;
}

console.log(obj);

console.log(tt/7);