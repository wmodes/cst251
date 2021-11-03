

function isEven(x){
    return (x % 2 == 0);
}

console.log(isEven(1));
false
isEven(2)
true
array = [100, 81, 4, 16, 42, 144, 10000]
(7) [100, 81, 4, 16, 42, 144, 10000]
array.map(isEven);
(7) [true, false, true, true, true, true, true]
array.map(function(x){
    return x ** 0.5;
})
(7) [10, 9, 2, 4, 6.48074069840786, 12, 100]
