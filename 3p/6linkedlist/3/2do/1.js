/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * linked-list implementation exercise
 * edmodo
 */

 function inicio(){
    t0 = performance.now();
}
function final(){
    t1 =  performance.now();
}

inicio();
 class Node {     
    constructor(data,next=null){         
        this.data=data         
        this.next=next     
    } 
} 

class LinkedList{     
    constructor(){         
        this.head=null         
        this.size=0 
        this.tail=null    
    }
}

function Queue() {
    this.dataStore = LinkedList;
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;

}
    
function enqueue(data) {
    let node=new Node(data,null)
        if(this.head==null){ 
            node.next = this.head 
            this.head=node

            if(this.tail==null){
                this.tail=node
            }
            this.size++  
        }
        else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
}

function dequeue() {
    var current=this.head
    current=this.head        
        Eliminado=current                         
        current=current.next
        this.head=current     
    console.log("Dato eliminado "+ Eliminado.data)        
}

function front() {
    return this.head.data;
}

function back() {
    return this.tail.data;
}

function toString() {
    var current=this.head 

    while(current){         
        console.log(current.data)         
        current=current.next         
    }    
}
    
function empty() {
    if (this.size == 0) {
        return true;
    }
    else{
        return false;
    }
}

function print(element){
    console.log(element);
}
let cont=0;
var q = new Queue();
for(t=0;t<7;t++){
    for(i=0; i<10000; i++){
        q.enqueue((Math.random()*100).toFixed(0));
        cont++
    }
}
final();
print("tiempo "+((t1-t0)/7).toFixed(2)+" en milisegundos");
print("Numero de pasos "+cont);