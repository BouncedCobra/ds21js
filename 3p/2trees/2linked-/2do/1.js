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
        constructor (value) {
        this.value = value
        this.right = null
        this.left = null
        }
    }
    
    class Tree {
        constructor () {
        this.root = null
        }
    
        isEmpty () {
        return this.root === null
        }
    
        add (value) {
        // arbol no tiene elementos
        if (this.isEmpty()) {
            this.root = new Node(value)
            return
        }
    
        var aux = this.root
    
        while (aux) {
            // vamos hacia la izquierda
            if (value < aux.value) {
            if (aux.left) {
                aux = aux.left
            } else {
                aux.left = new Node(value)
                return
            }
            } else { // vamos hacia la derecha
            if (aux.right) {
                aux = aux.right
            } else {
                aux.right = new Node(value)
                return
            }
            }
        }
        }
    
        addRecursive (value, node = this.root) {
        if (!node) {
            this.root = new Node(value)
            return
        }
    
        if (value < node.value) {
            if (node.left) {
            return this.addRecursive(value, node.left)
            }
            node.left = new Node(value)
            return
        } else { // vamos hacia la derecha
            if (node.right) {
            return this.addRecursive(value, node.right)
            }
            node.right = new Node(value)
            return
        }
        }
    
        find (value) {
        if (this.isEmpty()) {
            return null
        }
    
        var aux = this.root
        if (aux.value === value) {
            return aux
        }
    
        while(aux) {
            // si encontramos el nodo con el valor
            // paramos de iterar.
            if (aux.value === value) {
            break
            }
            // seguimos buscando a la derecha
            if (aux.value < value) {
            aux = aux.right
            } else if (aux.value > value) {
            // seguimos buscando a la izquierda
            aux = aux.left
            }
        }
        // retornamos el nodo encontrado.
        // si no encontramos el nodo con el valor
        // aux, toma el valor null.
        return aux
        }
    
        findRecursive(value, node = this.root) {
        if (node.value === value) {
            return node
        }
    
        if (node.value < value) {
            return this.findRecursive(value, node.right)
        } else if (node.value > value) {
            return this.findRecursive(value, node.left)
        }
        }
    
        findMin(node = this.root) {
        if (!this.isEmpty()) {
            /**
             * siempre a la izquierda de cualquier nodo
             * estar?? el menor valor.
             * iteramos hasta el ??ltimo menor.
             */
            while (node.left) {
            node = node.left
            }
            return node
        }
        }
    
        delete (value, node = this.root) {
        if (!node) {
            return null
        }
        if (node.value === value) {
            // no tiene hijos
            if (!node.left && !node.right) {
            return null
            }
            // no tiene hijo izquierdo
            if (!node.left) {
            return node.right
            }
            // no tiene hijo derecho
            if (!node.right) {
            return node.left
            }
    
            // tiene dos hijos
            // buscamos el menor de los hijos
            var temp = this.findMin(node.right)
            // con ese valor reemplazamos el valor del nodo que queremos eliminar.
            node.value = temp.value;
            // seguimos iterando para reemplazar la rama que cambio,
            // eliminando el nodo que est?? repetido
            node.right = this.delete(temp.value, node.right)
            return node;
        }
        // buscamos a la derecha
        if (node.value < value) {
            node.right = this.delete(value, node.right)
            return node
        }
        // buscamos a la izquierda
        if (node.value > value) {
            node.left = this.delete(value, node.left)
            return node
        }
        }
        print (node = this.root) {
        if (!node) {
            return
        }
        this.print(node.left)
        console.log(node.value)
        this.print(node.right)
        }
        /**
         * recorre primero toda la rama izquierda
         * de izquierda al centro.
         * Luego imprime la ra??z, y finalmente
         * recorre la rama derecha, del centro hacia
         * la derecha.
         */
        inOrder (node = this.root) {
        if (!node) {
            return
        }
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
        }
        /**
         * Imprime primero la ra??z, luego
         * toda la rama izquierda de izquierda al centro.
         * y finalmente recorre la rama derecha,
         * del centro hacia la derecha.
         */
        preOrder (node = this.root) {
        if (!node) {
            return
        }
        console.log(node.value)
        this.preOrder(node.left)
        this.preOrder(node.right)
        }
        /**
         * Recorre el ??rbol de izquierda hacia el centro.
         * Luego del centro hacia la derecha, y finalmente
         * imprime la ra??z.
         */
        postOrder (node = this.root) {
        if (!node) {
            return
        }
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value)
        }
    }
    
    var t = new Tree()
    
    for (var i = 0; i < 3; i++) {
        t.add((Math.random()*10).toFixed(0))
    }
    console.log("In Order---------------")
    t.inOrder()
    console.log()
    console.log("Pre Order--------------")
    t.preOrder()
    console.log()
    console.log("PostOrder--------------")
    t.postOrder()
    console.log()
    t.print()