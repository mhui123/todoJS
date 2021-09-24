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

### split

- String.split method divides string into an array by splitting words

      ex)
      let apps = "Calculator,Phone,Contacts";
      let appsArray = apps.split(",");
      console.log(appsArray); // ["Calculator", "Phone", "Contacts"]

### substring

- .substring(startIdx, endIdx) : can resize or extract strings;

### replace and replaceAll

- replace() just replace first occurence of been search.
- replaceAll() replace All occurrences.

### using map at html

```
const html =`<ul> ${users.map(user =>`<li>${user.name}</li>`).join("")} </ul>`;

console.log(html); // <ul> <li>Sam Doe</li><li>Alex Blue</li> </ul>

if there is no .join(""), result is with "," <ul> <li>Sam Doe</li>,<li>Alex Blue</li> </ul>
```

### every() , some()

```
every() is return true when every item satisfied with condition. like with &&
some() is return true when some item satisfied with condition. like with ||
```

## splice()

```
.splice(start[, deleteCount]) removes items from the array

const items = ["Pen", "Paper", "Staples"];
const deletedItem = items.splice(0, 1); // removes one element at index 0
console.log(deletedItem); // ["Pen"]

console.log(items); // ["Paper", "Staples"]
```
