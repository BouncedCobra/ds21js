/*PROBLEM 1
 * insertAt(p,v)
 *
 * inserts a value v, at position p, in the array
 * @arg {number} p - position
 * @arg {number} v - value
 *
 * @example
 * insertAt(3,3)
 *Verify operation result by outputing the array before and after*/
var p = 5;
var v = 8;
var array= new Array();

insertAt(p,v);
function insertAt(p,v){
    array.push(1,2,3,4,5,6,7,8,9);
    console.log(array);
    array.splice(p,0,v);
    console.log(array);
}