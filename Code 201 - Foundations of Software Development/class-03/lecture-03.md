# Lecture Notes

## Falsy values in JavaScript
All these conditions will be automatically falsy if you pass them for evaluation.

- false
- 0 (zero)
- ''(empty string)
- null
- undefined
- NaN


```javascript
if (somethingEvaluatesTrue) {
  then do something
}
```
## comparison operators
a == b - "lossely equal to" 10 == '10' - type coercion / weak typing(as opposed to strict typing)

a === b - "strictly equal to" 10 === 10 but 10 !== '10'

a !== b - not equal to (! called bang!)

a > b - a is greater than b

a < b - a is less than b (8 < 10)

a >= b - greater than or equal to (10 >= 10 || 10 >= 9)

a <= b - less than or equal to

## logical operators 

|| or
&& and
! not

a && b - both have to be true for it to be truthy.

a || b - one has to be true for it to be truthy.

!a - bang not true

## Array
- datatype of Object
- a list of elements - the elements within the array can be any data type.
- ['car', 1, {name: 'Sara'}] try not to mix data types within an array. But it is possible.
- JavaScript has dynamic size arrays. That is we can say array = []
- We can do this because JavaScript stores memory non-consecutively.
- JS arrays are a zero based index system.
- Every element in an array has an index(for location reference) for where it can be found in an array.

let sarasArray = ['cookies', 'cupcakes', 'tacos', 'pizza', 'pasta']

sarasArray[1] === 'cupcakes'

sarasArray[3] === 'pizza'

sarasArray.length === 5

sarasArray.length - 1 (will give you the final index number of the array)

## loops

## what are they?
- a very common pattern in programming
- a block of code that repeats over and over until a condition changes and is no longer truthy.

## why?
- save us from having to write repeating code - make our code dry!

 Dry code and readable code are competing.

 let fz = 'bananas' <- bad variable naming. Have longer names that are understandable rather than short names that are dry.

 for every card - pat your head (this is dynamic, responsive)

 vs
 pat your head

 pat your head
 
 pat your head
 
 pat your head
 
 pat your head (not dynamic. If you add more things you have to rewrite and add instructions)

## Anatomy of a Loop

for(let count = 0; count < 10; count++) {
  console.log(this is the count', count);
}

incredment = count++

code block = console.log

