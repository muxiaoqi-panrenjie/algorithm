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
  private size = 0;
  getlength() {
    return this.size;
  }
  // 尾部添加一个node节点
  append(value: T) {
    // 创建一个新的节点
    const newNode = new myNode(value);
    // 判断this.head 是否是null
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
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
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join("->"));
  }
  //  insert插入链表
  insert(value: T, position: number): boolean {
    // 临界判断
    if (position > this.size || position < 0) return false;
    // 创建一个新的节点
    const newNode = new myNode(value);
    // 如果position为0
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      // let previous: myNode<T> | null = null;
      // let index = 0;
      // while (index++ < position && current) {
      //   previous = current;
      //   current = current.next;
      // }
      // index === position
      current = this.getNode(position);
      let previous = this.getNode(position - 1);
      newNode.next = current;
      previous!.next = newNode;
    }
    this.size++;
    return true;
  }
  removeAt(position: number): T | null {
    // 越界判断
    if (position < 0 || position > this.size) return null;
    // 如果删除的是第一个
    let current = this.head;
    if (position === 0) {
      this.head = current?.next ?? null;
    } else {
      // let index = 0;
      // let previous: myNode<T> | null = null;
      // while (index++ < position && current) {
      //   previous = current;
      //   current = current.next;
      // }
      let previous = this.getNode(position -1);
      current = previous?.next ?? null;
      previous!.next = current?.next ?? null;
    }
    return current?.value ?? null;
  }
  get(position: number): T | null {
    let current = this.head;
    let index = 0;
    // let previous : myNode<T> | null = null;
    // while ( index++ < position && current ) {
    //   previous = current;
    //   current = current.next;
    // }
    // console.log(current?.value ?? null);
    console.log(this.getNode(position)?.value ?? null);
    return this.getNode(position)?.value ?? null;
  }
  private getNode(position: number): myNode<T> | null {
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current?.next;
    }
    return current;
  }
}

const first = new LinkedList<string>();
export { first };
