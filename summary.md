### variable

### define variable concepts has two ways

    let & const
    let : can be reassign value, in block scope
    const : cannot be reassign value, in block scope.

### in condition you should use "= = =" than "= =";

.length is a property (pre-computed value) and not a function.

    let array = ["a", 2, 3];
    array[0] === "a"
    array.push(4) >> array = ["a", 2, 3, 4];

even though array has been defined as const, can be pushed

### **_filter and find_**

### filter : always return an aray,

### find() : returns first array item that matches the callback function or undefined

### map() : transform array to another one;

### include("obj") : check an array includes "obj" whether is in an array. if is in return true, otherwise return false;

### join("delimiter : '\' ',' '.' ...") : return string that has glued with delimiter

### arrow function

    const sum = (a, b) => {
    a + b;
    }

    sum(1, 3); // undefined

    // this works 👍 (implicit return)
    const sum = (a, b) => a + b;
    // write as inline is implicit return

    sum(1, 3); // 4
