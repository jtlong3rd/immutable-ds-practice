const { expect } = require('chai');
const { LinkedList } = require('../linked_list/linkedList');

describe('Linked List', function() {
  const list1 = LinkedList();
  const list2 = LinkedList(1);
  const list3 = LinkedList(2, list2);
  const list4 = LinkedList(3, list3);

  describe('constructor', function() {
    it('should exist', function() {
      expect(LinkedList).to.be.a('function');
    });
  });

  describe('addHead', function() {
    it('should exist', function() {
      expect(list1.addHead).to.be.a('function');
    });

    it('should add a new node to the front of a list', function() {
      const newList = LinkedList().addHead(1).addHead(2).addHead(3);

      expect(newList.getHead()).to.equal(3);
      expect(newList.getTail().getHead()).to.equal(2);
      expect(newList.getTail().getTail().getHead()).to.equal(1);
      expect(newList.getTail().getTail().getTail()).to.equal(null);
    });
  });

  describe('removeHead', function() {
    it('should exist', function() {
      expect(list1.removeHead).to.be.a('function');
    });

    it('should remove a node from the front of a list', function() {
      const newList1 = list4.removeHead();
      const newList2 = newList1.removeHead();
      const newList3 = newList2.removeHead();
      const newList4 = newList3.removeHead();

      expect(newList1.getHead()).to.equal(2);
      expect(newList1.getTail().getHead()).to.equal(1);
      expect(newList1.getTail().getTail()).to.equal(null);

      expect(newList2.getHead()).to.equal(1);
      expect(newList2.getTail()).to.equal(null);

      expect(newList3.getHead()).to.equal(null);
      expect(newList3.getTail()).to.equal(null);

      expect(newList4.getHead()).to.equal(null);
      expect(newList4.getTail()).to.equal(null);
    });
  });

  describe('concat', function() {
    it('should exist', function() {
      expect(list1.concat).to.be.a('function');
    });

    it('should concatenate linked lists', function() {
      expect(LinkedList.toList([]).concat(LinkedList.toList([1, 2, 3, 4])).toArray()).to.deep.equal([1, 2, 3, 4]);
      expect(LinkedList.toList([1]).concat(LinkedList.toList([2, 3, 4])).toArray()).to.deep.equal([1, 2, 3, 4]);
      expect(LinkedList.toList([1, 2]).concat(LinkedList.toList([3, 4])).toArray()).to.deep.equal([1, 2, 3, 4]);
      expect(LinkedList.toList([1, 2, 3]).concat(LinkedList.toList([4])).toArray()).to.deep.equal([1, 2, 3, 4]);
    });
  });

  describe('map', function() {
    it('should exist', function() {
      expect(list1.map).to.be.a('function');
    });

    it('should return a mapped copy of the linked list', function() {
      expect(LinkedList.toList([1, 2, 3, 4]).map(x => x * 2).toArray()).to.deep.equal([2, 4, 6, 8]);
    });
  });

  describe('filter', function() {
    it('should exist', function() {
      expect(list1.filter).to.be.a('function');
    });

    it('should return a filtered copy of the linked list', function() {
      expect(LinkedList.toList([1, 2, 3, 4]).filter(x => x % 2 === 0).toArray()).to.deep.equal([2, 4]);
      expect(LinkedList.toList([2, 3, 4]).filter(x => x % 2 === 0).toArray()).to.deep.equal([2, 4]);
      expect(LinkedList.toList([1, 3]).filter(x => x % 2 === 0).toArray()).to.deep.equal([]);
      expect(LinkedList.toList([1]).filter(x => x % 2 === 0).toArray()).to.deep.equal([]);
    });
  });

  describe('initialSegment', function() {
    it('should exist', function() {
      expect(list1.initialSegment).to.be.a('function');
    });

    it('should detect improper initial segments', function() {
      expect(list1.initialSegment(list1)).to.be.true;
    });

    it('should detect proper initial segments', function() {
      const newList6 = LinkedList.toList([1, 2, 3]);
      const newList7 = LinkedList.toList([1, 2, 3, 4]);

      expect(newList6.initialSegment(newList7)).to.be.true;
    });
  });

  describe('equals', function() {
    it('should exist', function() {
      expect(list1.equals).to.be.a('function');
    });

    it('should return false for two lists of different length', function() {
      expect(list1.equals(list2)).to.be.false;
      expect(list2.equals(list1)).to.be.false;

      expect(list3.equals(list4)).to.be.false;
      expect(list4.equals(list3)).to.be.false;
    });

    it('should return true when two lists have equal values', function() {
      expect(list1.equals(list1)).to.be.true;
      expect(list2.equals(list2)).to.be.true;
      expect(list3.equals(list3)).to.be.true;
      expect(list4.equals(list4)).to.be.true;
    });

    it('should return false when two lists have different values', function() {
      const newList3 = LinkedList(2, list2);
      const newList4 = LinkedList(1, list3);
      const newList4Prime = LinkedList(1, newList3);

      expect(list3.equals(newList3)).to.be.true;
      expect(newList4.equals(newList4Prime)).to.be.true;
    });
  });

  describe('length', function() {
    it('should exist', function() {
      expect(list1.length).to.be.a('function');
    });

    it('should return the length of the list', function() {
      expect(list1.length()).to.equal(0);
      expect(list2.length()).to.equal(1);
      expect(list3.length()).to.equal(2);
      expect(list4.length()).to.equal(3);
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
      expect(list4.toArray()).to.deep.equal([3, 2, 1]);
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
