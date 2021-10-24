/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of chars, numbers, u objects
 * @returns {bool} - true of false, if value v exist or not
 * may use traverse
 *
 * @example
 * contains(3)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
 
 var d;
 var v = "25";//nuevo elemento
 var array= new Array();
 
 for(i=0; i<25; i++){
     array.push((Math.random()*25).toFixed());
 }
 console.log(array);
 
 contains(v);
function contains(v){
    print(array.includes(v));
}
function print(d){
    console.log(d);
}