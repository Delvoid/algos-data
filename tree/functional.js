const createNode = (data) => {
  return {
    data,
    children: [],
  }
}

const addNode = (node, data) => {
  node.children.push(createNode(data))
}

const removeNode = (node, data) => {
  node.children = node.children.filter((node) => node.data !== data)
}

// const node = createNode('a')
// console.log(node)
// addNode(node, 'b')
// addNode(node, 'c')
// addNode(node.children[0], 'd')
// removeNode(node, 'c')
// console.log(node)

const Tree = {
  root: null,
}

const traverseBreadthFirst = (tree, fn) => {
  const arr = [tree.root]
  while (arr.length) {
    const node = arr.shift()
    arr.push(...node.children)
    fn(node)
  }
}

const traverseDepthFirst = (tree, fn) => {
  const arr = [tree.root]
  while (arr.length) {
    const node = arr.shift()
    arr.unshift(...node.children)
    fn(node)
  }
}

// let letters = []
// const tree = Tree
// tree.root = createNode('a')
// addNode(tree.root, 'b')
// addNode(tree.root, 'c')
// addNode(tree.root.children[0], 'd')

// console.log(tree.root)

// traverseBreadthFirst(tree, (node) => {
//   letters.push(node.data)
// })
// console.log({ letters })

// letters = []
// traverseDepthFirst(tree, (node) => {
//   letters.push(node.data)
// })
// console.log({ letters })

module.exports = {
  createNode,
  addNode,
  removeNode,
  Tree,
  traverseBreadthFirst,
  traverseDepthFirst,
}
