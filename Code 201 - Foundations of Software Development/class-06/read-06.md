## Understanding the Problem Domain is the Hardest Part of Programming

You can often make the problem domain easier by cutting out cases and narrowing your focus to a particular part of the problem.
**It is easy to fall into the trap of thinking you understand enough of hte problem to get started coding it.** Resist the temptation to "not waste time talking" and make sure you understand a problem inside and out before you try and solve it with code.

## Chapter 3, JavaScript

**objects** are variables with many values called "properties". They can hold any data type, and can even hold functions.

**methods** are functions inside objects.

**properties** can be accessed through **bracket** notation or **dot** notation.

object.property

or

object['property']

## Chapter 5, JavaScript "The DOM"

**Application Programming Interface (API)** allows programs to talk to each other. The DOM is an API.

The Dom is a **tree model** of a web page. Each element is represented by a **node**.

You can store the location of elements in variables.

**live nodelist** when the script updates the nodelist updates as well. **.getElementsBy** return a live nodelist.

**static nodelist** the nodelist does not update with the page. **.querySelector**... return a static nodelist.

**There are two ways to select an element from the NodeList**

**item()** method
```javascript
let elements = document.getElementsByClassName('hot')
if (elements.length >= 1) {
  let firstItem = elements.item(0);
}
```
**Array Syntax**
```javascript
let elements = document.getElementsByClassName('hot');
if (elements.length >= 1) {
  let firstItem = elements[0];
}
```
**nodeValue** access text from the node

**innerHTML**  gets and sets text/markup 

**getAttribute()** method.