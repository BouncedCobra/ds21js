/** the PROBLEM with arrays
 *
 * for instance, create 100,000, then:
 * insert a new element at position 3
 * remove element at position 4
 * think about the operations that have to be carried out
 *
 * this section has NOT exercises
 */
var p = 3,pr = 4;
var v = 25;//nuevo elemento
var array= new Array();

for(i=0; i<100000; i++){
    array.push((Math.random()*100).toFixed());
}
console.log(array);

insertAt(p,v);
remove(pr);

function insertAt(p,v){
    array.splice(p,0,v);
    console.log(array);
}

function remove(pr){
    array.splice(pr,1);
    console.log(array);
}