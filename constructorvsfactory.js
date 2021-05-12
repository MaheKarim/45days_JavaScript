
function productObj(firstName, lastName, age, profession) {
    return {
        firstName,
        lastName,
        age,
        profession,
    }
}

function Product(firstName, lastName, age, profession) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.profession = profession
}

const samimObj = new Product('Mahe', 'Karim', '23', 'Software Engineer');
console.log(samimObj)

console.log(productObj('Mahe', 'Karim', 21, 'Software Developer'))
console.log(productObj('Anis', 'Sheikh', 49, 'Software Engineer'))

const samim = {
    firstName: 'Mahe',
    lastName:  'Karim',
    age: 32,
    profession: 'Software Developer'
}

const saad = {
    firstName: 'Anis',
    lastName:  'Sheikh',
    age: 49,
    profession: 'Software Engineer'
}