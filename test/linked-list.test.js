'use strict';

const LinkedList = require('../lib/linked-list');


const newList = new LinkedList();

const emptyList = new LinkedList();

for (let i = 0; i < 5; i++) {
  newList.insertAtHead(`value ${i}`);
}

describe('#linked-list.js', () => {
  describe('Happy path', () => {
    test('Check if node is removed', () => {
      newList.remove('value 2');
      expect(newList.head.next.next.value).toEqual('value 1');
    });
  });

  describe('Sad path', () => {
    test('Throw error if list is empty', () => {

      expect(emptyList.remove('value 2')).toEqual(() => {
        '__ERROR__ The list is empty!'
      });
    });
  });
});
