const Node = require('./node');

class LinkedList {
    constructor() {        
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if (this._head == null) {
            this._head = node;
            this._tail = node;
        } 
        else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if (this.length > 0) {
            return this._head.data;
        }
        else {
            return this._head;
        }
    }
        
    tail() {
        if (this.length > 0) {
            return this._tail.data;
        }
        else {
            return this._tail;
        }
    }

    at(index) {
        let res = this._head;
        for(let i = 0;i < index;i++) {
            res = res.next;
        }
        return res.data;
    }
        
    insertAt(index, data) {
        if (index == this.length) {            
            this.append(data);
        }
        else if (this.length > 0 && index == 0) {            
            let node = new Node(data);
            node.next = this._head;
            this._head.prev = node;
            this._head = node;
            this.length++;
        }
        else if (this.length > 0 && index > 0) {
            let node = new Node(data);
            let res = this._head;
            for (let i = 0; i < index; i++) {
                res = res.next;
            }            
            node.prev = res.prev;
            res.prev.next = node;            
            res.prev = node;
            node.next = res;
            this.length++;
        }
        return this;       
    }

    isEmpty() {
        if (this.length < 1) {
            return true;
        }
        else {
            return false;
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
       if (index == 0 && this.length == 1) {
            this._head = null;
            this._tail = null;
            this.length = 0;            
        } else if (index == this.length-1) {
            this._tail = this._tail.prev;            
            this._tail.next = null;
            this.length = this.length-1;
        }
        else {
            let res = this._head;
            for (let i = 0; i < index; i++) {
                res = res.next;
            }
            let res2 = res.next;    
            res = res.prev;
            res.next = res2;
            res2.prev = res;
        }
        return this;
    }

    reverse() {
        let res = this._head;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            let res2 = res.next;
            res.next = prev;
            res.prev = res2;
            prev = res;
            res = res2;
        }
        this._tail = this._head;
        this._head = prev;
        return this;
    }

    indexOf(data) {
        let res = this._head;
        for (let i = 0; i < this.length; i++) {
            if (res.data == data) {
                return i;
            }
            res = res.next;
        }
        return -1
    }
}

module.exports = LinkedList;
