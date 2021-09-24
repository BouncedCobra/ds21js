//1. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements

var n = 1000;
function Eratosthenes(n){
    var nArray = new Array (n +1);
    nArray.fill(true);
    nArray[0] = nArray[1] = false;

    for(var i = 2; i<=Math.sqrt(n); i++){
        for (var j=2; i*j<=n; j++){
            nArray[i*j] = false;
        }
    }
    return nArray.reduce((acc, val, ind) => {
        if(val){
           return acc.concat(ind);
        }else{
           return acc;
        };
     },[]);
  };
  console.log(Eratosthenes(n));
