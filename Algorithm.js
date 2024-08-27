const fibonacci = (n) => {
  const fib = [0, 1]
  for (i=2 ; i<=n; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}
//BIG O Notation O(n)

function factorial (n){
  let fact = 1
  for (let i = 2; i <= n; i++){
    fact *=i
  }
  return fact
}
// BIG O Notation O(n)

function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0){
      return false
    }
  }
  return true
}
// BIG O Notation O(sqrt(n))

function isPowerOfTwo (n) {
  if (n < 1) {
    return false
  }
  while (n > 1) {
    if (n % 2 !== 0){
      return false
    }
    n /= 2
  }
  return true
}

// BIG O Notation O(logn)

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false
  }
  return (n & (n-1)) === 0
}
// BIG O Notation O(1)

// Recursive function

function recursiveFibonacci (n) {
  if (n < 2){
    return n
  }
  return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

// BIG O Notation O(2^n)

function recursiveFactorial(n) {
  if (n === 0){
    return 1
  }
  return n * recursiveFactorial(n-1)
}
// BIG O Notation O(n)


// Search algo
//****linear Search

const linearSearch = (n, tar) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === tar) {
      return i
    }
  }
  return -1
}
const arr = [0,1,2,4,5,7,9]
//console.log(linearSearch(arr, 8))

// BIG O Notation O(n)

const binarySearch = (n, tar) => {
  let leftIndex = 0
  let rightIndex = n.length - 1
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if (n[middleIndex] === tar) {
      return middleIndex
    }
    if (n[middleIndex] < tar) {
      leftIndex = middleIndex + 1
    }else {
      rightIndex = middleIndex - 1
    }
  }
  return -1
}

// BIG O Notation O(logn)


const recursiveBinarySearch = (n , tar) => {
  return search(n ,tar, 0, n.length - 1)
}
const search = (n ,tar, leftIndex, rightIndex) => {
  if ( leftIndex > rightIndex) {
    return -1
  }
  let middleIndex = Math.floor((leftIndex + rightIndex)/2)
  if (n[middleIndex] === tar) {
    return middleIndex
  }
  if (tar < n[middleIndex]) {
    return search(n, tar, leftIndex, middleIndex -1)
  }else {
    return search(n, tar, middleIndex + 1, rightIndex)
  }
}

// BIG O Notation O(logn)
 
// *******sort algo


const bubbleSort = (n) => {
  let swapped
  do {
    swapped = false
  
    for (let i = 0; i < n.length - 1; i++){
      if (n[i] > n[i + 1]) {
        let temp = n[i]
        n[i] = n[i +1]
        n[i + 1] = temp
        swapped = true
      }
    }
  }while (swapped)
}
let ar = [9,3,2,8,4,6,7,0,1]
// bubbleSort(ar)
// console.log(ar)

const insertion = (n) => {
  for (i = 1; i < n.length; i++) {
    let nti = n[i] // 9
    let se = i - 1 // 6
    while (se >= 0 && n[se] > nti) {
      n[se + 1]  = n[se]
      se = se - 1 // 3
    }
    n[se + 1] = nti
  }
}
// insertion(ar)
// console.log(ar)

// BIG O Notation O(n)

const quickSort = (n) => {
  if (n.length < 2) {
    return n
  }
  const pivot = n[n.length - 1]
  const left = []
  const right = []
  for (let i = 0; i < n.length - 1; i++) {
    if (n[i] < pivot) {
      left.push(n[i])
    }else {
      right.push(n[i])
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)]
}
// console.log(quickSort(ar))

// BIG O Notation O(nlogn)



function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0 ,mid)
  const rightArr = arr.slice(mid)
  
  return merge(mergeSort(leftArr), mergeSort(rightArr))
  
}

function merge(leftArr, rightArr) {
  const sorted = []
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]){
      sorted.push(leftArr.shift())
    }else {
      sorted.push(rightArr.shift())
    }
  }
  return [...sorted, ...leftArr, ...rightArr]
}
// console.log(ar)

// BIG O Notation O(nlogn)

//  stack implementation

class Stack {
  constructor() {
    this.items = {}
    this.front = -1
    this.currentLength = 0
  }
  isEmpty() {
    return this.front === -1
  }
  add(element) {
    this.front = this.front +1
    this.items[this.front] = element
    this.currentLength++
  }
  rem(){
    if(this.isEmpty()) {
      return -1
    }
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front--
    return item
  }
  peek() {
    return this.items[(this.front)]
  }
  size(){
    return this.currentLength
  }
  show(){
    console.log(this.items)
  }
}


let stack = new Stack()
// // console.log(stack)
// stack.add(19)
// stack.add(29)
// stack.add(39)
// stack.add(49)
// stack.show()
//stack.show()
// stack.isEmpty()
// stack.lengthh()
// stack.peek()
// stack.show()


// queue
class Queue {
  constructor() {
    this.items = {}
    this.rear = 0
    this.front= 0
  }
  enqueue(element) {
    this.items[this.rear] = element
    this.rear++
  }
  dequeue() {
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  }
  isEmpty() {
    return this.rear - this.front === 0
  }
  size(){
    return this.rear - this.front
  }
  peek() {
    return this.items[this.front]
  }
  show(){
    console.log(this.items)
  }
}
// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.show()
// queue.dequeue()
// queue.show()


// circular Queue

class CircularQueue {
  constructor (capacity) {
    this.items = new Array(capacity)
    this.capacity = capacity
    this.currentLength = 0 
    this.front  = -1 
    this.rear = -1
  }
  isFull(){
    return this.capacity === this.currentLength
  }
  isEmpty(){
    return this.currentLength === 0
  }
  enqueue(element){
    if(!this.isFull()){
      this.rear = this.rear +1
      this.items[this.rear] = element
      this.capacity++
      if(this.front === -1){
        this.front = this.rear
      }
    }
  }
  dequeue(){
    if(this.isEmpty()){
      return null
    }
    const item = this.items[this.front]
    this.items[this.front] = null
    this.front = this.front +1
    this.capacity--
    if (this.isEmpty()){
      this.rear = -1
      this.front = -1 
    }
    return item
  }

}













