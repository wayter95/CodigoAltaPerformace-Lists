function LinkedList(){
    let head = null;
    let length = 0;

    const Node = (kill) => {
        return {
            kill,
            next: null
        }
    }
    const add = (kill) => {
        if(!head) {
            head = Node(kill)
            length++
            return head
        }
        let node = head;

        while(node.next){
            node = node.next;
        }
        node.next = Node(value);
        length++;
        return node.next
    }
    return {
        length: () => length,
        add: (kill) => add(kill),
        print: () => console.log(head)
    }
}

const list = LinkedList();
list.add('A');
list.add('B');
list.add('C');
list.add('D');
list.print();