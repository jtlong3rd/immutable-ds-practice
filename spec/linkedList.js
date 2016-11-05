const { expect } = require('chai');
const { LinkedList } = require('../linked_list/linkedList');

describe('Linked List', function() {
  const list1 = LinkedList();
  const list2 = LinkedList(1);
  const list3 = LinkedList(2, list2);

  describe('Constructor', function() {
    it('should exist', function() {
      expect(LinkedList).to.be.a('function');
    });
  });

  describe('getHead', function() {
    it('should return the head', function() {
      expect(list1.getHead()).to.equal(null);
      expect(list2.getHead()).to.equal(1);
      expect(list3.getHead()).to.equal(2);
    });
  });
});
