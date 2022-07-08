console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(var i = 1; i < 101; i++)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(var i = 1; i < 101; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log(i + ' FIZZBUZZ');
    }
    else if(i % 5 == 0)
    {
        console.log(i + ' BUZZ')
    }
    else if(i % 3 == 0)
    {
        console.log(i + ' FIZZ');
    }
    
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
var x = 0;
do
{
    x = x + 1 && x < 100;

    if(x % 2 != 0)
    {
        console.log[x];
    }
}

while (x < 100)
{
if ( x % 3 === 0 && x % 5 === 0 )
{
console.log(x + ' Fizbuzz');
}

if( x % 3 === 0 )
{
console.log(x + ' Fizz');
}

if( x % 5 === 0 ) 
{
console.log(x + ' Buzz');
}

console.log(x.toString());

}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(var i = 0; i < n; i++)
{
    if(i == value)
    {
        console.log(i + ': Found value!');
        break;
    }
    else
    {
        console.log("Did not find value");
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let buzzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let k = Math.round(Math.random() * (1 - 1000) + 1);
let start = Math.round(Math.random() * (1 - 10) + 1);

for(var i = start; i <= k; i++)
{
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0)
    {
        console.log(i + ' FIZZBUZZ');
    }
    else if(i % buzzDivisor == 0)
    {
        console.log(i + ' BUZZ')
    }
    else if(i % fizzDivisor == 0)
    {
        console.log(i + ' FIZZ');
    }
}