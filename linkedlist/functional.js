const Node = (data, next = null) => {
  return {
    data,
    next,
  }
}

const linkedList = () => {
  let head = null
  let length = 0

  return {
    head,
    length,
  }
}

const insertFirst = (list, data) => {
  list.head = Node(data, list.head)
  list.length++
  return list
}
const listSize = (list) => {
  return list.length
}

const getFirst = (list) => {
  return list.head
}

const getLast = (list) => {
  if (!list.head) {
    return null
  }

  let node = list.head
  while (node) {
    if (!node.next) {
      return node
    }
    node = node.next
  }
}

const clear = (list) => {
  list.head = null
  list.length = 0
  return list
}

const removeFirst = (list) => {
  if (!list.head) {
    return
  }
  list.head = list.head.next
  list.length--
  return list
}

const removeLast = (list) => {
  if (!list.head) {
    return
  }
  if (!list.head.next) {
    list.head = null
    return
  }

  let prev = list.head
  let node = list.head.next
  while (node.next) {
    prev = node
    node = node.next
  }
  prev.next = null
  list.length--
  return list
}

const insertLast = (list, data) => {
  const last = getLast(list)
  if (last) {
    last.next = Node(data)
    list.length++
    return list
  }
  list.head = Node(data)
  list.length++
  return list
}

const getAt = (list, index) => {
  let counter = 0
  let node = list.head
  while (node) {
    if (counter === index) {
      return node
    }
    counter++
    node = node.next
  }
  return null
}
const removeAt = (list, index, data) => {
  if (!list.head) {
    return
  }
  if (index === 0) {
    list.head = list.head.next
    return
  }
  const previous = getAt(list, index - 1)
  if (!previous || !previous.next) {
    return
  }
  previous.next = previous.next.next

  return list
}
const insertAt = (list, data, index) => {
  if (!list.head) {
    list.head = Node(data)
    list.length++
    return list
  }
  if (index === 0) {
    list.head = Node(data, list.head)
    return list
  }

  const prev = getAt(list, index - 1) || getLast(list)
  const node = Node(data, prev.next)
  prev.next = node
  return list
}

const forEach = (list, fn) => {
  let node = list.head
  let counter = 0
  while (node) {
    fn(node, counter)
    node = node.next
    counter++
  }
  return list
}

// const list = linkedList()
// insertFirst(list, 'first')
// insertFirst(list, 'second')
// insertFirst(list, 'third')
// console.log(list)
// console.log(removeFirst(list))
// console.log(insertLast(list, 'last'))
// console.log(getAt(list, 5))
// console.log(insertAt(list, 'insert', 1))

// forEach(list, (node, counter) => console.log(node, counter))

module.exports = {
  Node,
  linkedList,
  insertFirst,
  listSize,
  getFirst,
  getLast,
  clear,
  removeFirst,
  removeLast,
  removeAt,
  insertLast,
  getAt,
  insertAt,
  forEach,
}
