const L = require('./functional')

describe('Linked Lists', () => {
  describe('A Node', () => {
    test('has properties "data" and "next"', () => {
      const node = L.Node('a', 'b')
      expect(node.data).toEqual('a')
      expect(node.next).toEqual('b')
    })
  })

  describe('Insert First', () => {
    test('appends a node to the start of the list', () => {
      const list = L.linkedList()
      L.insertFirst(list, 'first')
      expect(list.head.data).toEqual('first')
      L.insertFirst(list, 'second')

      expect(list.head.data).toEqual('second')
    })
  })

  describe('Size', () => {
    test('returns the number of items in the linked list', () => {
      const list = L.linkedList()
      expect(list.length).toEqual(0)
      L.insertFirst(list, 'first')
      L.insertFirst(list, 'first')
      L.insertFirst(list, 'first')
      L.insertFirst(list, 'first')
      expect(list.length).toEqual(4)
    })
  })

  describe('GetFirst', () => {
    test('returns the first element', () => {
      const list = L.linkedList()
      L.insertFirst(list, 'first')
      expect(L.getFirst(list).data).toEqual('first')
      L.insertFirst(list, 'second')
      expect(L.getFirst(list).data).toEqual('second')
    })
  })

  describe('GetLast', () => {
    test('returns the last element', () => {
      const list = L.linkedList()
      L.insertFirst(list, 'first')
      expect(L.getLast(list)).toEqual({ data: 'first', next: null })
      L.insertFirst(list, 'second')
      expect(L.getLast(list)).toEqual({ data: 'first', next: null })
    })
  })

  describe('Clear', () => {
    test('empties out the list', () => {
      const list = L.linkedList()
      expect(list.length).toEqual(0)
      L.insertFirst(list, 'first')
      L.insertFirst(list, 'first')
      L.insertFirst(list, 'first')
      L.insertFirst(list, 'first')
      expect(list.length).toEqual(4)
      L.clear(list)
      expect(list.length).toEqual(0)
    })
  })

  describe('RemoveFirst', () => {
    test('removes the first node when the list has a size of one', () => {
      const list = L.linkedList()
      L.insertFirst(list, 'first')
      L.removeFirst(list)
      expect(list.length).toEqual(0)
      expect(L.getFirst(list)).toEqual(null)
    })

    test('removes the first node when the list has a size of three', () => {
      const list = L.linkedList()
      L.insertFirst(list, 'first')
      L.insertFirst(list, 'second')
      L.insertFirst(list, 'third')
      L.removeFirst(list)
      expect(list.length).toEqual(2)
      expect(L.getFirst(list).data).toEqual('second')
      L.removeFirst(list)
      expect(list.length).toEqual(1)
      expect(L.getFirst(list).data).toEqual('first')
    })
  })

  describe('RemoveLast', () => {
    test('RemoveLast removes the last node when list is empty', () => {
      const list = L.linkedList()
      expect(() => {
        L.removeLast(list)
      }).not.toThrow()
    })

    test('RemoveLast removes the last node when list is length 1', () => {
      const list = L.linkedList()
      L.insertFirst(list, 'first')
      L.removeLast(list)
      expect(list.head).toEqual(null)
    })

    test('RemoveLast removes the last node when list is length 2', () => {
      const list = L.linkedList()
      L.insertFirst(list, 'first')
      L.insertFirst(list, 'second')

      L.removeLast(list)

      expect(list.length).toEqual(1)
      expect(list.head.data).toEqual('second')
    })

    test('RemoveLast removes the last node when list is length 3', () => {
      const list = L.linkedList()
      L.insertFirst(list, 'first')
      L.insertFirst(list, 'second')
      L.insertFirst(list, 'third')

      L.removeLast(list)

      expect(list.length).toEqual(2)
      expect(L.getLast(list).data).toEqual('second')
    })
  })

  describe('InsertLast', () => {
    test('adds to the end of the list', () => {
      const list = L.linkedList()
      L.insertFirst(list, 'first')
      L.insertFirst(list, 'second')

      expect(list.length).toEqual(2)
      expect(L.getLast(list).data).toEqual('first')
    })
  })

  describe('GetAt', () => {
    test('returns the node at given index', () => {
      const list = L.linkedList()
      expect(L.getAt(list, 10)).toEqual(null)

      L.insertLast(list, 'first')
      L.insertLast(list, 'second')
      L.insertLast(list, 'third')
      L.insertLast(list, 'fourth')

      expect(L.getAt(list, 0).data).toEqual('first')
      expect(L.getAt(list, 1).data).toEqual('second')
      expect(L.getAt(list, 2).data).toEqual('third')
      expect(L.getAt(list, 3).data).toEqual('fourth')
    })
  })

  describe('RemoveAt', () => {
    test('removeAt doesnt crash on an empty list', () => {
      const list = L.linkedList()
      expect(() => {
        L.removeAt(list, 0)
        L.removeAt(list, 1)
        L.removeAt(list, 2)
      }).not.toThrow()
    })

    test('removeAt doesnt crash on an index out of bounds', () => {
      const list = L.linkedList()
      expect(() => {
        L.insertFirst(list, 'a')
        L.removeAt(list, 1)
      }).not.toThrow()
    })

    test('removeAt deletes the first node', () => {
      const list = L.linkedList()
      L.insertLast(list, 'first')
      L.insertLast(list, 'second')
      L.insertLast(list, 'third')
      L.insertLast(list, 'fourth')
      expect(L.getAt(list, 0).data).toEqual('first')
      L.removeAt(list, 0)
      expect(L.getAt(list, 0).data).toEqual('second')
    })

    test('removeAt deletes the node at the given index', () => {
      const list = L.linkedList()
      L.insertLast(list, 'first')
      L.insertLast(list, 'second')
      L.insertLast(list, 'third')
      L.insertLast(list, 'fourth')
      expect(L.getAt(list, 1).data).toEqual('second')
      L.removeAt(list, 1)
      expect(L.getAt(list, 1).data).toEqual('third')
    })

    test('removeAt works on the last node', () => {
      const list = L.linkedList()
      L.insertLast(list, 'first')
      L.insertLast(list, 'second')
      L.insertLast(list, 'third')
      L.insertLast(list, 'fourth')
      expect(L.getAt(list, 3).data).toEqual('fourth')

      L.removeAt(list, 3)
      expect(L.getAt(list, 3)).toEqual(null)
    })
  })

  describe('InsertAt', () => {
    test('inserts a new node with data at the 0 index when the list is empty', () => {
      const list = L.linkedList()
      L.insertAt(list, 'hi', 0)
      expect(L.getFirst(list).data).toEqual('hi')
    })

    test('inserts a new node with data at the 0 index when the list has elements', () => {
      const list = L.linkedList()
      L.insertLast(list, 'first')
      L.insertLast(list, 'second')
      L.insertLast(list, 'third')

      L.insertAt(list, 'hi', 0)
      expect(L.getAt(list, 0).data).toEqual('hi')
      expect(L.getAt(list, 1).data).toEqual('first')
      expect(L.getAt(list, 2).data).toEqual('second')
      expect(L.getAt(list, 3).data).toEqual('third')
    })

    test('inserts a new node with data at a middle index', () => {
      const list = L.linkedList()
      L.insertLast(list, 'first')
      L.insertLast(list, 'second')
      L.insertLast(list, 'third')
      L.insertLast(list, 'fourth')
      L.insertAt(list, 'hi', 2)

      expect(L.getAt(list, 0).data).toEqual('first')
      expect(L.getAt(list, 1).data).toEqual('second')
      expect(L.getAt(list, 2).data).toEqual('hi')
      expect(L.getAt(list, 3).data).toEqual('third')
      expect(L.getAt(list, 4).data).toEqual('fourth')
    })

    test('inserts a new node with data at a last index', () => {
      const list = L.linkedList()
      L.insertLast(list, 'first')
      L.insertLast(list, 'second')
      L.insertAt(list, 'hi', 2)
      expect(L.getAt(list, 0).data).toEqual('first')
      expect(L.getAt(list, 1).data).toEqual('second')
      expect(L.getAt(list, 2).data).toEqual('hi')
    })

    test('insert a new node when index is out of bounds', () => {
      const list = L.linkedList()
      L.insertLast(list, 'first')
      L.insertLast(list, 'second')
      L.insertAt(list, 'hi', 30)

      expect(L.getAt(list, 0).data).toEqual('first')
      expect(L.getAt(list, 1).data).toEqual('second')
      expect(L.getAt(list, 2).data).toEqual('hi')
    })
  })

  describe('ForEach', () => {
    test('applies a transform to each node', () => {
      const list = L.linkedList()

      L.insertLast(list, 1)
      L.insertLast(list, 2)
      L.insertLast(list, 3)
      L.insertLast(list, 4)

      L.forEach(list, (node, counter) => {
        node.data += 10
      })

      expect(L.getAt(list, 0).data).toEqual(11)
      expect(L.getAt(list, 1).data).toEqual(12)
      expect(L.getAt(list, 2).data).toEqual(13)
      expect(L.getAt(list, 3).data).toEqual(14)
    })
  })
})
