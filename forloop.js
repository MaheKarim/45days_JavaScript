for (var i = 0; i < 4; i++) {
    console.log('Hello World!');
}

// Print Odd

for (var i = 0; i < 10; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// Summation 1-10
var sum = 0;

for (var i = 0; i <= 10; i++) {
    console.log(sum + ' + ' +  i + ' = ' + (sum+i));
    sum += i;
}