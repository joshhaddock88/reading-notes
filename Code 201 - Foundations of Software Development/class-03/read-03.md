## Chapter 3, HTML

Ordered lists are created with te \<ol> element, unordered is \<ul>. For individual items within those lists \<li>.

The \<dl> element is used to create a a list of terms and thei definitions. It will contain the items \<dt> and \<dd> respectively.
dt is definition term, dd is definition definition. Think Mario Mario.

You can nest lists.

## Chapter 13, HTML

**overflow** property tells the browser what to do incase a content overflows it's box.
Man Bear Pig - Margin, border, padding, from outermost to innermost.

The border styles are
- solid
- dotted
- dashed
- double
- groove
- ridge
- inset
- outset
- hidden/none

Border color can be changed with clockwise notation, making all sides a different color.

Margin has four properties: top, right, bottom, left.

Some common displays are
- inline: causes block level element to act like an inline element.
- block: casues inline element to act like a block level element.
- inline-block: causes a block element to flow into an inline element.

Display can be **none** so the element isn't there, or **hidden** so that it takes up space but isn't visible.

**border-image**: this property can add images as a border. You can either set it to round or stretch, depend on what look you want.

## Chapter 4 JavaScript

JavaScript uses type coercion. For instance, if you wrote ('100' > 1) JavaScript would say that is 'true'. We call that a 'truthy' statement.
It isn't strictly true, but based on loose equality it is true.

**Urnary operators** can be used. Checking for the presence of an element can be used as a boolean. If item exists, true, else false.

false == 0 is true
false === 0 is false

let band = 'Nirvana'
let bandA = (artist || 'Unknown') - bandA value become 'Nirvana'.

let band = '';
let bandA = (artist || 'Unknown') - bandA value becomes unknown, since artist is undefined.

Types of loops are **for**, **while**, **do while**.

Loops have three phases **initialization**, **condition**, and **update**.

**initialization**: let i = 0;

**condition**: i < 10;

**update**: i++

Loops are great for counting, or working through an array or object. Just be careful not to write an infinite loop.

The most important difference between a "while" and "do while" is that a "do while" will always iterate through the loop at least once, whereas I "while" will not.