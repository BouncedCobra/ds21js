/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * @arg {tree} n - tree
 *
 * @example
 * inorder(root)
 * 
 * PROBLEM 2
 * posorder(n)
 *
 * traverses a tree in POSORDER
 * @arg {tree} n - tree
 *
 * @example
 * posorder(root)
 * 
 */


class Node {     
    constructor(data,left=null,right=null){         
        this.data=data         
        this.left=left
        this.right=right     
    } 
} 
let cont=0,cont1=0
class LinkedList{     
    constructor(){         
        this.head=null         
        this.size=0 
        this.tail=null    
    } 

    AddFirst(data){
        let node=new  Node(data)   
        cont++
        if(cont==1){
            node.left = this.head 
        }
        if(cont==2){
            node.right =this.head
            cont=0
        }
        this.head=node
        if(this.tail==null){
            this.tail=node
        }
        this.size++     
    }

     AddEnd(data){
        let node=new Node(data)
        if(this.head==null){
            this.AddFirst(data)
        }else{
            if(this.tail.left==null || this.tail.right==null){
                cont1++
                if(cont1==1){
                    this.tail.left=node
                }
                if(cont1==2){
                    this.tail.right=node
                    cont1=0
                    this.tail=node
                }
            }else{
                this.tail=node
            }
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
    
    SizeList(){
        console.log(this.size)
    }
}
let l = new LinkedList

for(i=0; i<100; i++){
    l.AddEnd((Math.random()*100).toFixed(0));
}
