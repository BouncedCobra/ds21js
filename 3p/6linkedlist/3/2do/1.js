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
            let node=new  Node(data)   
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
    var current=this.head;
    console.log(current.data);        
    current=this.head;  

    for(var i=0;i>this.size;i++){             
        previous=current                         
        current=current.next  
        console.log("for")        
    }     
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
    if (this.dataStore.length == 0) {
        return true;
    }
    else{
        return false;
    }
}

function print(element){
    console.log(element);
}

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
q.toString();
q.dequeue()
print("Front of queue: " + q.front());
print("Back of queue: " + q.back());