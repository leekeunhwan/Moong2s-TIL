class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 *
 * Linked List
 *
 * 특징
 *
 * 1. 연속되는 항목들이 포인터로 연결된다.
 * 2. 마지막 항목은 null을 가리킨다.
 * 3. 프로그램이 수행되는 동안 크기가 커지거나 작아질 수 있다.
 * 4. (시스템 메모리가 허용되는 한) 필요한 만큼 길어질 수 있다.
 * 5. 메모리 공간을 낭비하지 않는다. (하지만 포인터를 위한 추가적인 메모리를 필요로 한다.)
 *
 * 배열에 비해 데이터의 추가/삽입 및 삭제가 용이하나 순차적으로 탐색하지 않으면,
 * 특정 위치의 요소에 접근할 수 없어 일반적으로 탐색 속도가 떨어진다.
 * 즉, 탐색 또는 정렬을 자주 하면 배열을, 추가/삭제가 많으면 연결 리스트를 사용하는 것이 유리하다.
 *
 */

class LinkedList {
  constructor() {
    this._length = 0;
    this._head = null;
  }

  append = (data) => {
    const node = new ListNode(data);
    let current;

    if (this._head == null) {
      this._head = node;
    } else {
      current = this._head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this._length++;
  };

  removeAt = (position) => {
    if (position > -1 && position < this._length) {
      let current = this._head;
      let previous = 0;
      let index = 0;

      if (position === 0) {
        this._head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = previous.next;
        }
        previous.next = current.next;
      }

      this._length--;
      current.next = null;
      return current.data;
    }

    return "삭제하고자하는 position이 유효하지 않습니다.";
  };

  indexOf = (data) => {
    let current = this._head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }

      index++;
      current = current.next;
    }

    return -1;
  };

  remove = (data) => {
    const index = this.indexOf(data);
    return this.removeAt(index);
  };

  insert = (position, data) => {
    if (position > -1 && position <= this._length) {
      const node = new ListNode(data);
      let current = this._head;
      let previous = 0;
      let index = 0;

      if (position === 0) {
        node.next = current;
        this._head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
      }

      this._length++;
      return "추가 되었습니다.";
    }

    return "추가하고자하는 position이 유효하지 않습니다.";
  };

  toString = () => {
    let current = this._head;
    let str = "";

    while (current) {
      str += current.data;
      current = current.next;
    }

    return str;
  };

  isEmpty = () => {
    return this._length === 0;
  };

  size = () => {
    return this._length;
  };
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.indexOf(10);
list.insert(1, 50);
