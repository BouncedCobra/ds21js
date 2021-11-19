/** INSTRUCTIONS
 * 
 * implement a method, function, non-function solution
 * 
 * PROBLEM 
 *
 * select one implementation af a graph from books (pdfs):
 * mcm14
 * gro14  
 *
 * write it and make sure it runs
 */

function print(value){
    dato="" 
    console.log(value)
}
let dato =""
function putstr(value){
     dato=dato+value
    return dato;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    
    this.addEdge = addEdge;
    this.showGraph = showGraph;
}

function addEdge(v,w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
   let da 
function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        putstr(i + " -> ");
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined)
               da=putstr("\r"+this.adj[i][j] + ' ');
        }
        print(da) 
    }
}

    g = new Graph(5);
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    g.showGraph();