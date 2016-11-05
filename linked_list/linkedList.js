const LinkedList = (head = null, tail = null) => {
  const getHead = () => {
    return head;
  };

  const getTail = () => {
    return tail;
  };

  const toArray = (result = []) => {
    if (head === null) {
      return result;
    }

    if (tail === null) {
      return [...result, head];
    }

    return [...result, head, ...tail.toArray()];
  };

  return {
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
