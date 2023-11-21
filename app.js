// document.write('awsome')
// alert('cool')
// console.log('amazing news')

// Variables
// let name = "Lugi ' texts"
// let address, zip, state
// console.log(name)

// address = '123 main street'
// zip = '606112'
// state = 'CA'
// console.log(address, zip, state)

// working with numbers and strings
// const random_number = 13
// document.querySelector('.form').addEventListener('submit', function (e) {
//   e.preventDefault()
//   let value = document.getElementById('amount').value
//   value = parseInt(value)
//   console.log('Input Value Type', typeof value)
//   console.log(value)
//   console.log('Sum of Two Values', value + random_number)
// })

// Arrays
// let friends = ['mohsan', 'zozzo', 'anaa', 'bob', 44, undefined, null]
// console.log(friends)
// console.log(friends[0])
// friends[4] = 'Mart'
// console.log(friends.length)
// console.log(friends)

// Functions
// let hello = function () {
//   console.log('Hello Man')
//   console.log('Hello Dude')
//   console.log('Hello Bruh')
// }

// let addation = function (n1, n2) {
//   console.log('first-number', n1)
//   console.log('second-nubmer', n2)
//   console.log('summation', n1 + n2)
// }
// hello()
// addation(4, 5)
// addation(4)

// 1-inch = 2.5-cm
// let inch_to_cm = function (x) {
//   return x * 2.5
// }
// let length = 10
// console.log('lenght-in-inch = ', length, ' inch')
// console.log('length-in-cm = ', inch_to_cm(length), 'cm')

// Objects
// let person = {
//   name: 'Gely',
//   lastName: 'Mohy',
//   age: 21,
//   education: true,
//   married: false,
//   sibilings: ['marks', 'sam', 'jakson'],
//   greeting: function () {
//     console.log('Hello My name is Gely')
//   },
// }
// console.log(person)
// console.log(person.name)
// person.greeting()

// // conditional-statment
// if (person.age > 25) {
//   console.log('You are old enough, Welocme')
// } else {
//   console.log('Too Young, please visit after:', 25 - person.age, 'year(s)')
// }

// switch
// let dice = 1
// switch (dice) {
//   case 1:
//     console.log('you roll one')
//     break
//   case 2:
//     console.log('you roll two')
//     break
//   case 3:
//     console.log('you roll three')
//     break
//   case 4:
//     console.log('you roll four')
//     break
//   case 5:
//     console.log('you roll five')
//     break
//   case 6:
//     console.log('you roll six')
//     break
//   default:
//     console.log('please roll the dice')
//     break
// }

// loops for, while, do-while
// console.log('for loop')
// const the_array = ['ahmed', 'mohsan', 'martin']
// for (let index = 0; index < the_array.length; index++) {
//   const element = the_array[index]
//   console.log('welcom aboard', element)
// }

// console.log('while loop')
// let i = 0
// while (i < the_array.length) {
//   const element = the_array[i]
//   console.log('welcome aboard', element)
//   i++
// }

// console.log('do-while loop')
// let money = 0
// do {
//   console.log('you have', money, 'dollors')
//   money--
// } while (money > 0)

// string-methods
// let text = ' Gely Ahmed'
// console.log(text.length)
// console.log(text.toLowerCase())
// console.log(text.toUpperCase())
// console.log(text.indexOf('e'))
// console.log(text.charAt(1))
// console.log(text.charAt(text.length - 1))
// console.log(text.trim())
// console.log(text.trim().startsWith('Gely'))
// console.log(text.includes('Ah'))
// console.log(text.slice(0, 4))

// Template Literals - ES6
// Backtick characters

// const person_name = 'Gely'
// const age = 28
// console.log(
//   `Hey it's ${`Hello there ${name} and he is ${age} years old`} and he is ${
//     age + 5
//   } years old after 5 years`
// )

// Array properties and methods
// let names = ['Gely', 'bob', 'barry', 'ben', 'tarry']
// console.log(names.length)
// console.log(names.concat([5, 4, 2]))
// console.log(names.reverse())
// // insert at the begining of the array (unshift)
// names.unshift('baby')
// names.unshift('olga')
// // remove the begining of the array (shift)
// names.shift()
// console.log(names)
// // insert at the end of the array (push)
// names.push('cool')
// console.log(names)
// // remove the end of the array (pop)
// console.log(names.pop())
// console.log(names)
// // splice - get the element of array and delete them from the original
// new_names = names.splice(0, 4)
// console.log(new_names)
// console.log(names)

// Functions, return
// const gas = [20, 40, 100]
// const food = [10, 40, 50]

// let calculate_total = function (arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   if (sum > 100) {
//     console.log('you are spending too much')
//   } else {
//     console.log('you are good, total below 100')
//   }
//   return sum
// }

// console.log('total-spend-on-gas:', calculate_total(gas))
// console.log('total-spend-on-food:', calculate_total(food))

// Reference vs Value
// number1 = 1
// number2 = number1
// number2 = 8
// console.log(`the first value: ${number1}, the second value: ${number2}`)

// person1 = { name: 'bob' }
// person2 = person1
// person2.name = 'susy'
// console.log(
//   `the name of first-person ${person1.name}, the name of second-person ${person2.name}`
// )

// person1 = { name: 'bob' }
// // copy person1
// person2 = { ...person1 }
// person2.name = 'susy'
// console.log(
//   `the name of first-person ${person1.name}, the name of second-person ${person2.name}`
// )

// Truthy and Falsy
// "", '', ``, 0, -0, NaN, false, null, undefined

// ternary operator
// 5 > 8 ? console.log('condition is true') : console.log('condition is false')

// Callback Functions: passed to another function as an an argument and executed inside that function
// Higher Order Function: accepts another function as an argument or returns another function as a result (return function is called closure)

// Callback-Functions
// function morning() {
//   return 'Good Morning'
// }
// function afternoon() {
//   return 'Good Afternoon'
// }
// // Higher-Functions
// function greeting(name, duration_cb) {
//   const myName = 'John'
//   console.log(`${duration_cb()} ${name}, my name is ${myName}`)
// }
// greeting('bobo', morning)
// greeting('peter', afternoon)

// Powerfull Array Methods: (they iterate over the array, no need to setup for-loop)
// forEach, map, filter, find reduce
// accept CALLBACK-Function as an argument and call cb-function using array-itme as an argument
// const the_array = [0, 1, 2, 3, 4]
// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'cto' },
//   { name: 'olga', age: 22, position: 'CEO' },
// ]
// // forEach
// the_array.forEach((element) => {
//   console.log(element)
// })
// people.forEach((person) => {
//   console.log(person.name, person.age)
// })

// map, returns a new array
// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'cto' },
//   { name: 'olga', age: 22, position: 'CEO' },
// ]
// const ages = people.map((person) => {
//   return person.age + 5
// })
// const newPeople = people.map((person) => {
//   new_person = { ...person }
//   new_person.experience = 5
//   return new_person
// })
// const names = people.map((person) => {
//   return `<h1> ${person.name} </h1>`
// })
// // console.log(ages)
// console.log(newPeople)
// console.log(people)
// console.log(names)

// document.body.innerHTML = names.join('')

// filter
// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'cto' },
//   { name: 'olga', age: 22, position: 'CEO' },
// ]

// const youngPeople = people.filter((person) => {
//   return person.age <= 25
// })
// console.log(youngPeople)

// const developerPeople = people.filter((person) => {
//   return person.position == 'developer'
// })
// console.log(developerPeople)

// find: returns object (single instance) (returns first match, if no match found return undefined)
// const people = [
//   { name: 'bob', age: 20, position: 'developer', id: 1 },
//   { name: 'peter', age: 25, position: 'designer', id: 2 },
//   { name: 'susy', age: 30, position: 'cto', id: 3 },
//   { name: 'olga', age: 22, position: 'CEO', id: 4 },
// ]

// const person = people.find((person) => {
//   return person.id == 4
// })
// console.log(person)

// reduce: iterates, callback function, (aftet the callback function we need to decide what will be the returned value)
// reduces to single value - number, array, object
// take 2 parameters (accumlative, and currentIteam) accumlative is the part we keep adding to it
// const people = [
//   { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
//   { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
//   { name: 'susy', age: 30, position: 'cto', id: 3, salary: 500 },
//   { name: 'olga', age: 22, position: 'CEO', id: 4, salary: 500 },
// ]
// const total = people.reduce((acc, person) => {
//   acc += person.salary
//   return acc
// }, 0)
// console.log(total)

// Math
// console.log(Math.round(5.7))
// console.log(Math.floor(5.7))
// console.log(Math.sqrt(25))
// console.log(Math.PI)
// console.log(Math.max(6, 3, 5, 29))
// console.log(Math.random()) // return random between 0 and 0.999999999...99..999 (can't be 1)
// // get random number between 1 and 10
// console.log(Math.floor(Math.random() * 10) + 1)

// Date
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturdayßß',
]
// get current date
// const date = new Date()
// insert an old date, or new
// const date = new Date('1/12/2022')
// console.log(date)

// const month = date.getMonth()
// console.log(months[month])

// const day = date.getDay()
// console.log(days[day])

// console.log(date.getDate())
// console.log(date.getFullYear())

// const the_date = `${days[day]} , ${date.getDate()}, ${
//   months[month]
// } ${date.getFullYear()}`
// console.log(the_date)

// document.body.innerHTML = the_date

// DOM
// document.body.style.background = 'blue'
// document.body.style.color = 'yellow'

// document.getElementById('btn').style.color = 'red'

// console.log(window)

// window object (the tab we are currently operating) = browser api
// everything is inside window object, but if we didn't include window. and write an object Javascript will search for the object inside window for example alert
// window.alert('wussssup')
// alert('wussssup')
// document
// console.dir to know the properties of the object
// console.dir(document)

// Select the element or group of elements, decide the effect we want to apply to the selection
// getElementById('element')
// const h1_title_ele = document.getElementById('title')
// h1_title_ele.style.color = 'red'

// document.getElementById('btn').style.color = 'white'

// getElementByTagName('tagname') h1, li, ... tags
// node-list = array-like object

// const heading2 = document.getElementsByTagName('h2')
// heading2[0].style.color = 'red'
// console.log(heading2.length)

// const list_items = document.getElementsByTagName('li')
// const better_list_items = [...list_items]
// better_list_items.forEach((element) => {
//   element.style.color = 'red'
// })

// getElementByClassName('classsname')
// node-list = array-like object

// const cls_list_items = document.getElementsByClassName('special')
// const cls_list_items_arr = [...cls_list_items]

// cls_list_items_arr.forEach((element) => {
//   element.style.color = 'green'
// })

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

// document.querySelector('#result').style.color = 'red'
// const items = document.querySelectorAll('.special')
// console.log(items)

// const last_item = document.querySelector('li:last-child')
// console.log(last_item)

// traverse DOM tree
// navigate li(children) under ul (parent)
// const result = document.getElementById('result')
// select children
// childNodes - returns all childNodes including whitespace which is treated as a text node
// const allChildren = result.childNodes
// console.log(allChildren)

// const children = result.children
// console.log(children)
// firstChild, lastChild (this going to include textnode)
// console.log(result.firstChild)
// console.log(result.lastChild)

// parentElement
// const heading = document.querySelector('h2')
// console.log(heading.parentElement.parentElement.parentElement)
// const parent = heading.parentElement
// parent.style.color = 'red'

// previoussibling
// nextSibling
// returns withespace
// const first = document.querySelector('.first')
// console.log(first)
// const second = first.nextSibling.nextSibling
// second.style.color = 'red'
// console.log(second)

// const last = document.querySelector('.last')
// const third = last.previousSibling.previousSibling
// third.style.color = 'blue'
// console.log(third)

// nextElementSibilint
// previousElementSibiling

// const first = document.querySelector('.first')
// first.nextElementSibling.style.color = 'red'
// const last = document.querySelector('.last')
// last.previousElementSibling.style.color = 'blue'

// nodeValue
// textContent
// const item = document.getElementById('special')
// const value = item.firstChild.nodeValue
// console.log(value)

// console.log(item.textContent)

// getAttribute(), setAttribute()

// const first = document.querySelector('.first')
// console.log(first.getAttribute('class'))
// console.log(first.getAttribute('id'))

// const link = document.getElementById('link')
// console.log(link.getAttribute('href'))

// const last_item = link.nextElementSibling
// last_item.setAttribute('class', 'first')
// last_item.textContent = 'I also have class of first'

// const list = document.querySelectorAll('.first')
// console.log(list)

// Adding CSS classes dynamically to our elements using JavaScript (className)
// classList adding multiple classes to the element
// const first = document.getElementById('first')
// const second = document.getElementById('second')
// const thrid = document.getElementById('third')

// console.log(first.className)
// first.setAttribute('class', 'colors')

// second.className = 'text colors'
// console.log(second.className)

// // thrid.classList.add('text')
// // thrid.classList.add('colors')
// thrid.classList.add('text', 'colors')
// thrid.classList.remove('text')

// console.log(thrid.classList.contains('colors'))

// Add element dynamicaly
// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// create empty element
// const bodyDive = document.createElement('div')
// // create text node
// const text = document.createTextNode('a simple body div')
// // add text to bodyDive
// bodyDive.appendChild(text)
// // append bodydiv to body-element
// document.body.appendChild(bodyDive)

// const result = document.getElementById('result')
// console.log(result.children)
// const heading = document.createElement('h1')
// const heading_text = document.createTextNode('dynamic heading')
// heading.appendChild(heading_text)
// heading.classList.add('blue')
// result.appendChild(heading)

// // appendChild is not the only method to add element to our page, insterBefore('element', 'location')

// const heading2 = document.createElement('h1')
// const heading2_text = document.createTextNode('dynamic heading2')
// heading2.appendChild(heading2_text)
// result.insertBefore(heading2, heading)

// // replaceChild('new', 'old')

// const heading_3 = document.createElement('h3')
// const heading_3_text = document.createTextNode('dynamic heading 3 Replace')
// heading_3.appendChild(heading_3_text)
// heading_3.classList.add('red')

// document.body.replaceChild(heading_3, bodyDive)

// prepend opposite of append
// innerText
// const heading = document.createElement('h1')
// heading.innerText = 'dynamic heading'
// // document.body.insertBefore(heading, document.body.children[1])
// document.body.prepend(heading)

// remove element from DOM, remove(), removeChild

// document.getElementById('result').remove()
// const result = document.getElementById('result')
// heading = result.querySelector('h1')
// result.removeChild(heading)

// innerHTML
// textContent
// const list = document.getElementById('first')
// const div = document.getElementById('second')
// const item = document.getElementsByClassName('item')

// console.log(div.textContent)
// console.log(list.innerHTML)

// const ul = document.createElement('ul')
// ul.innerHTML = `<li> list item-2 </li>
//                 <li> list item-2 </li>`
// document.body.appendChild(ul)

const random = document.querySelector('.random')
console.log(random.style)
// random.style.backgroundColor = 'blue'
// random.style.color = 'white'
// random.style.fontSize = '3rem'
// random.style.textTransform = 'captalize'

random.classList.add('title')
