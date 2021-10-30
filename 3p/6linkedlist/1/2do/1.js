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

    AddFirst(data){
        let node=new  Node(data, null)   
        node.next = this.head 
        this.head=node
        if(this.tail==null){
            this.tail=node
        }
        this.size++     
    }

     AddEnd(data){
        let node=new Node(data,null)
        if(this.head==null){
            this.AddFirst(data)
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    } 

    PrintList(){         
        var current=this.head 

        while(current){         
            console.log(current.data)         
            current=current.next         
        }     
    }  
    
    Contains(v){
        var current=this.head 
        var contains=false

        while(current){
            if(current.data==v){
                contains=true
            }                    
            current=current.next         
        } 
        console.log(contains)
    }
    
    AddAt(data,index){         
        if(index>0 && index>this.size){             
            console.log("Fuera de Rango")         
        }         
        if(index===0){             
            this.InsertFirst(data)             
            return         
        }         
        var node=new Node(data)         
        var current,previous         
        current=this.head         
        var count=0         
        while(count<index){             
            previous=current             
            count++             
            current=current.next             
        }         
        node.next=current         
        previous.next=node         
        this.size++          
    }
    
    SizeList(){
        console.log(this.size)
    }
}
let l = new LinkedList

for(i=0; i<100; i++){
    l.AddEnd((Math.random()*100).toFixed(0));
}
 l.Contains(17)
 l.PrintList()