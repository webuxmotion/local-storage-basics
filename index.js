const num = 42
const ls = localStorage

ls.removeItem('number', num.toString())
//console.log(localStorage.getItem('number'))
ls.setItem('number', num.toString())
//console.log(localStorage.getItem('number'))
ls.clear()

const object = {
  name: 'Max',
  age: 20
}

ls.setItem('person', JSON.stringify(object))

const raw = ls.getItem('person')
const person = JSON.parse(raw)
person.name = 'Andrii'

//console.log(person)

window.addEventListener('storage', e => {
  console.log(e)  
})

