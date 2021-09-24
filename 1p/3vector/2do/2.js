/** PROBLEM 2
 * removeAt(p)
 *
 * removes value at position p
 * @arg {number} p - position
 *
 * @example
 * removeAt(3)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */

var p = 3;
removeAt(p);

function removeAt(p){
    var array = new Array();
    array.push(0,1,2,3,4,5,6,7,8,9);
    console.log(array);
    array.splice(p,1);
    console.log(array);
}