/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * array-based implementation of trees
 * 
 * write it and make sure it runs
 */

class Nodo{   
    constructor(data,left=null,right=null){         
        this.data=data         
        this.left=left
        this.right=right     
    } 
}
let array = []
let cont=0 , cont1=0, cont2=0

function agregar(dato){
    
    node=new Nodo(dato)
    
    if(array[cont]==undefined){
        array[cont]=(node)
    }else{
        cont1++
        if(cont1==1){
            cont2++
            (array[cont].left)=(node)
            array[cont2]=(node)
        }
        if(cont1==2){
            (array[cont].right)=(node)
            cont2++
            array[cont2]=(node)
            cont1=0
            cont++
        }
    }
}
agregar(5)
agregar(2)
agregar(3)
agregar(4)
agregar(25)
agregar(88)
agregar(8)
agregar(7)
console.log(array)