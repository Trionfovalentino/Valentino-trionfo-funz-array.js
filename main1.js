let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];


array.sort(function(a, b) {
    return b - a; 
});

console.log("Decrescente:", array); 
// Output: [25, 12, 8, 7, 6, 5, 5, 3, 2, 1, -2, -4]