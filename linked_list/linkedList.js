const LinkedList = (head = null, tail = null) => {
  const addHead = (newHead) => {
    if (head === null) {
      return LinkedList(newHead);
    }

    if (tail === null) {
      return LinkedList(newHead, LinkedList(head));
    }

    return LinkedList(newHead, LinkedList(head, tail));
  };

  const removeHead = () => {
    if (head === null || tail === null) {
      return LinkedList();
    }

    return LinkedList(tail.getHead(), tail.getTail());
  };

  const initialSegment = (otherList) => {
    const otherHead = otherList.getHead();
    const otherTail = otherList.getTail();

    if (head !== otherHead) {
      return false;
    }

    if (tail === null && otherTail === null) {
      return true;
    }

    return tail.initialSegment(otherTail);
  };

  const equals = (otherList) => {
    return initialSegment(otherList) && otherList.initialSegment(LinkedList(head, tail));
  };

  const length = () => {
    if (head === null) {
      return 0;
    }

    if (tail === null) {
      return 1;
    }

    return tail.length() + 1;
  };

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    return tail;
  };

  const toArray = () => {
    if (head === null) {
      return [];
    }

    if (tail === null) {
      return [head];
    }

    return [head, ...tail.toArray()];
  };

  return {
    addHead,
    removeHead,
    initialSegment,
    equals,
    length,
    getHead,
    getTail,
    toArray
  };
};

LinkedList.toList = (array) => {
  const [head, ...tail] = array;

  if (array.length === 0) {
    return LinkedList();
  }

  if (array.length === 1) {
    return LinkedList(head);
  }

  return LinkedList(head, LinkedList.toList(tail));
};

module.exports.LinkedList = LinkedList;
