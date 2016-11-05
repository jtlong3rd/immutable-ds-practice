const { expect } = require('chai');
const { LinkedList } = require('../linked_list/linkedList');

describe('Linked List', function() {
  const list1 = LinkedList();
  const list2 = LinkedList(1);
  const list3 = LinkedList(2, list2);

  describe('constructor', function() {
    it('should exist', function() {
      expect(LinkedList).to.be.a('function');
    });
  });

  describe('getHead', function() {
    it('should exist', function() {
      expect(list1.getHead).to.be.a('function');
    });

    it('should return the head', function() {
      expect(list1.getHead()).to.equal(null);
      expect(list2.getHead()).to.equal(1);
      expect(list3.getHead()).to.equal(2);
    });
  });

  describe('getTail', function() {
    it('should exist', function() {
      expect(list1.getTail).to.be.a('function');
    });

    it('should return the tail', function() {
      expect(list1.getTail()).to.equal(null);
      expect(list2.getTail()).to.equal(null);
      expect(list3.getTail()).to.equal(list2);
    });
  });

  describe('toArray', function() {
    it('should exist', function() {
      expect(list1.toArray).to.be.a('function');
    });

    it('should return an array version of the linked list', function() {
      expect(list1.toArray()).to.deep.equal([]);
      expect(list2.toArray()).to.deep.equal([1]);
      expect(list3.toArray()).to.deep.equal([2, 1]);
    });
  });

  describe('toList', function() {
    it('should exist', function() {
      expect(LinkedList.toList).to.be.a('function');
    });

    it('should return a linked list version of an array', function() {
      const newList1 = LinkedList.toList([]);
      const newList2 = LinkedList.toList([1]);
      const newList3 = LinkedList.toList([3, 2, 1]);

      expect(newList1.getHead()).to.equal(null);
      expect(newList1.getTail()).to.equal(null);

      expect(newList2.getHead()).to.equal(1);
      expect(newList2.getTail()).to.equal(null);

      expect(newList3.getHead()).to.equal(3);
      expect(newList3.getTail().getHead()).to.equal(2);
      expect(newList3.getTail().getTail().getHead()).to.equal(1);
      expect(newList3.getTail().getTail().getTail()).to.equal(null);
    });


  });

});
