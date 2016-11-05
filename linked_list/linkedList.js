module.exports.LinkedList = (head = null, tail = null) => {
  const getHead = () => {
    return head;
  };

  const getTail = () => {
    return tail;
  };

  return {
    getHead,
    getTail
  };
};
