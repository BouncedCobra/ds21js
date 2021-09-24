//2. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]
var n = 30;
random(n);
function random(n){
    var rand = Math.random()*n;
    console.log(rand.toFixed(0));
}