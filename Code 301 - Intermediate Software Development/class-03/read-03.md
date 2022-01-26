# React Docs - List and Keys
1. What does .map() return?
- A transformed version of the entire array you apply it to.
2. If I want to loop through an array and display each value in JSX, how do I do that in React?
- Apply .map to the array, and then in using an arroy function create jsx elements.
```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```
^the except you need to apply keys.
3. Each list item needs a unique ___.
- Key
4. What is the purpose of a key?
- It helps react identi which items have changed.

# Spread Operator
1. What is the spread operator?
- (...arr), it spreads an array into seperate arguments.
2. List 4 things that the spread operator can do.
  * Combining objects
  * Using Math functions
  * Using an array as arguments.
  * Concatenating or combining arrays.
3. Give an example of using the spread operator to combine two arrays.
```js
const myArray = [1, 2, 3];
const yourArray = [4, 5, 6];
const ourArray = [...myArray, ...yourArray];
console.log(...ourArray) // 1, 2 ,3 ,4, 5, 6
```
4. Give an example of using the spread operator to add a new item to an array.

5. Give an example of using the spread operator to combine two objects into one.

# How to Pass Functions

1. In the video, what is the first step that the developer does to pass functions between components?
2. In your own words, what does the increment function do?
3. How can you pass a method from a parent component into a child component?
4. How does the child component invoke a method that was passed to it from a parent component?