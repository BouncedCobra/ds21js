//1. bubblesort
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted

var array = [];
var t0,t1,i,j, con=0;

function inicio(){
    t0 = performance.now();
}
function final(){
    t1 =  performance.now();
}

inicio();
nale();
function nale(){
    for(i=0; i<100; i++){
        array.push(Math.random()*100);
    }
}
console.log("first array",array);

function swap(array, index1, index2){
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
  con+=1;
}

bubble();
function bubble(){
  var length = array.length;
  for (i=0; i<length; i++){
    for (j=0; j<length-1; j++){
      if (array[j]>array[j+1]){
        swap(array, j, j+1);
      }
    }
  }
  final();
  console.log("Second array", array);
  console.log("tiempo ",t1-t0," en milisegundos");
  console.log("Numero de pasos: ",con);
}