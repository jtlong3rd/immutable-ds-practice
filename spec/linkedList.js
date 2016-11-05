const { expect } = require('chai');
const { LinkedList } = require('../linked_list/linkedList');

describe('Linked List', function() {
  describe('Constructor', function() {
    it('should exist', function() {
      expect(LinkedList).to.be.a('function');
    });
  });
});
