// 创建node节点类
class myNode<T> {
  value: T;
  next: myNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

// 创建linkedList的类
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class LinkedList<T> {
  private head: myNode<T> | null = null;
  private size: number = 0;
  getlength() {
    return this.size;
  }
  // 尾部添加一个node节点
  append(value: T) {
    // 创建一个新的节点
    const newNode = new myNode(value);
    // 判断this.head 是否是null
    if(!this.head) {
      this.head = newNode;
    }else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  // 遍历我们的链表
  traverse() {
    const values: T[] = [];
    let current = this.head;
    while(current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join("->"));
  }
  //  insert插入链表
  insert(value: T,position: number) {
    
  }
}

const first = new LinkedList<string>();
export {
  first
}
