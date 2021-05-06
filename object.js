var karim = new Object();
karim = {
    fullName: 'Mahe Karim',
    age: 25,
    address: 'Jamalpur' ,
    job: 'Software Engineer',
    welcomeMsg: function () {
        console.log('Hello There!');
    }
}

console.log(karim.fullName)
karim.phoneNumber = '01303062727'
console.log(karim.phoneNumber)
console.log(karim)
 // Declare Function on Obj
karim.welcomeMsg()