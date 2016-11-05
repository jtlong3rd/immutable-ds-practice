module.exports.LinkedList = (head = null, tail = null) => {
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
