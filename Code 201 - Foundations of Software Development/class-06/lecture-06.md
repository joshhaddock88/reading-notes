# Lectures Notes

## const
### what is it?
- a way to declare variables whose value will never change.
- a constant valued variable.

### why use const?
- Because it never can be changed it prevents errors and tells a better story with our code.

```js
const newVariable = 'unchanging';
```
## Template literals
- A new way to write strings without concatenation.
```js
`Wrap string in backticks. Wrap expressions ${inCurlyBraces}!`
```

## fonts
### serif
### sans-serif
### Custom google fonts
- not quite custom. Outside sourced.
- just type in google fonts and you can go through and look at fonts
- allows you to look at test sentences.

## OBJECTS!
- "something that we can describe"
- a container for data. 
- give objects properties and methods.

- JS objects are convenient and powerful ways to group data and functions (attributes and behavior, aka adjectives and verbs).
- store data as **properties**. They have two pieces **key** and **value pairs**. They can also have **methods**, which are functions specifically associated with objects.

arrays are a type of object *without* key names. Instead they have indexes.

```js
const myArray = ['a', 'b', 'c'] // const can still change the contents of objects.

const myObject = {
  0 : 'a',
  1: 'b',
  2: 'c'
}
```
**keys** are variables inside of an object.

**Prototypes**
- Every object has a prototype. That is, it has a blueprint that the object is based on. This is sort of in place of classes.
Math. Number. String.

Math.random()

Math.floor()

All new objecst has as a prototype Object.
Meaning the blueprint that it came from is the capitol O Object in JavaScript.

```js
let cat = 'My Cat';
let lowerCaseCat = cat.toLowerCase();
// because cat was declared as a string, it now has access to all string prototypes.
```

keyword **this**!!!!! you'll see it often when talking about objects.

Refers to the current instance of an object.

## Adding someting to the DOM

### The DOM

**Document Object Model**

Document is an object, and you can refer to is using dot notation just like with other objects.

**getElementById**

<div id="parentElement">
</div>

**Steps**
Make a JavaScript reference (a variable) to the parent element

`let something = document.getElementByID('paraentElement');