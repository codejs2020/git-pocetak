function fizzBuzz(num){
    if (num%3==0 && num%5==0 ) {
        console.log("FizzBuzz")
    }
    else if(num%3==0){
        console.log("Fizz")
    }
    else if(num%5==0){
        console.log("Buzz")
    }
    else{
        console.log(num)
    }
}
fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(10)
fizzBuzz(15)
fizzBuzz(52)
