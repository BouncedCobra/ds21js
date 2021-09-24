//2. selectionsort
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

var swap = function(i, indexMin){
    var aux = array[i];
    array[i] = array[indexMin];
    array[indexMin] = aux;
    con+=1;
  }

selectionSort();
function selectionSort(){
    var length = array.length, //{1}
    indexMin;
    for (var i=0; i<length-1; i++){ //{2}
        indexMin = i; //{3}
        for (var j=i; j<length; j++){ //{4}
            if(array[indexMin]>array[j]){ //{5}
                indexMin = j; //{6}
            }
        }   
        if (i !== indexMin){ //{7}
        swap(i, indexMin);
        }
    }
    final();
    console.log("Second array", array);
    console.log("tiempo ",t1-t0," en milisegundos");
    console.log("Numero de pasos: ",con);
}