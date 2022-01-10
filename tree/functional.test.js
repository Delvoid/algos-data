const {
  createNode,
  addNode,
  removeNode,
  Tree,
  traverseBreadthFirst,
  traverseDepthFirst,
} = require('./functional')

describe('Tree', () => {
  describe('Node', () => {
    test('Node has a data and children properties', () => {
      const n = createNode('a')
      expect(n.data).toEqual('a')
      expect(n.children.length).toEqual(0)
    })

    test('Node can add children', () => {
      const node = createNode('a')
      addNode(node, 'b')
      expect(node.children.length).toEqual(1)
      expect(node.children[0].children).toEqual([])
    })

    test('Node can remove children', () => {
      const node = createNode('a')
      addNode(node, 'b')
      expect(node.children.length).toEqual(1)
      removeNode(node, 'b')
      expect(node.children.length).toEqual(0)
    })
  })

  describe('Tree', () => {
    test('starts empty', () => {
      const tree = Tree
      expect(tree.root).toEqual(null)
    })

    test('Can traverse bf', () => {
      const letters = []
      const tree = Tree
      tree.root = createNode('a')
      addNode(tree.root, 'b')
      addNode(tree.root, 'c')
      addNode(tree.root.children[0], 'd')

      traverseBreadthFirst(tree, (node) => {
        letters.push(node.data)
      })

      expect(letters).toEqual(['a', 'b', 'c', 'd'])
    })

    test('Can traverse DF', () => {
      const letters = []
      const tree = Tree
      tree.root = createNode('a')
      addNode(tree.root, 'b')
      addNode(tree.root, 'c')
      addNode(tree.root.children[0], 'd')
      traverseDepthFirst(tree, (node) => {
        letters.push(node.data)
      })

      expect(letters).toEqual(['a', 'b', 'd', 'c'])
    })
  })
})
