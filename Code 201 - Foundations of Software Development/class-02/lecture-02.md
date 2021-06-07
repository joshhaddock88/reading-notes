# Lecture Notes

# What is a data type
- a type of data
- a way of fomating data that the computer can undnerstand and make assumptions about.

JavaScript is a **loosely** typed **dynamic** language.
- we do not have to define a data type when declaring a variable.
- I can change datatypes AFTER I declare it

## Primitive Data Types
- A data type that cannot be broken down into something more basic. They're like the atoms of the language.

- Number
  - in JS it is THE numeric datatype. Technically there is BigInt.
  - can be negative numbers and decimals.
- Boolean
  - logical datatype.
  - can only be true or false.
- Strings
  - sequence of characters enclosed in ''
- Undefined
  - primitive value assigned to variable when no value is assigned.
- Null
  - an explicitly defiend value that means none/nothing.

**typeof** can be used to tell you what datatype a variable is.

console.log(typeof variable);

typeof when used on a null, you'll get back **object** rather than null.

When first declaring a variable, you need to declare it.

./ <- pathway. It's important for github pages.

Many front end developers do a lot of their styling in their dev tools. It's an easy way to see it as you go.

Man Bear Pig : margin border padding

border styling order isn't important, but you do need to include at least the "style" or the default style is none. Color and size have default.
You ALWAYS want to apply a reeset, that way you aren't fighting against the browser presets.

Difference between the "article" tag and "section" tag? It depends and will vary from company to company. We like to think of it like a newspaper. You have sections with various articles inside of them.

Styling by percentages will help with web design responsiveness.

Conditionals: if/else and Switch statments

if(somethingEvaluatesTrue) {
  do something
}

Switch statements are very precise. It's looking for strict equality.