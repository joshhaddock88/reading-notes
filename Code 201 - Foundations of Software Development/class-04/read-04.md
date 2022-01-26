# Class 04

## Chapter 4, HTML CSS

- Links are created with the \<a> elements.
\<a href="url">Hyperlink\</a>

Absolute URLS: The website you type into your broswer. The link will have the name of the domain.

Relative URLS: Shorthand used ot link parts of a site together. It won't have the domain as the name and may be hyperlinked as "home" or "about".

*homepage* is your **index.html** file.

Websites are organized like a tree.

**parents** are the folder above another folder. The inner folder is called a **child** of the parent. Several folders up would be a **grandparent**.

**mailto** is a type of href which houses an email. Clicking it will take you to your primary email.

**target**  is an attribute typically with the value of "blank". This opens the link in a new window.

You can link to various parts of the same page using

```html
<a href="#id">Link will take you to element with said id</a>
```

You can link to a specific part of another page like so

```html
<a href="url/#id">Will take you to another page and to the element with a matching id</a>
```

## Chapter 15, HTML CSS

You can specify positions using the **position** and **float** properties in CSS.
**z-index** allows you to control which elements are on top when overlapping.

**position** take the box offset properties *top*, *bottom*, *left*, *right*

*normal flow* is **position: static;**

*relative positioning* is **position: relative;**

*absolute positioning* is **position: absolute;**

*fixed positioning* is **position: fixed;**

*overlapping elements* controlled with **z-index**.
Sometimes referred to as the *stacking context*.

*float* controlled with the **float** property. Duh.

**clear** allows  you to say that no other elements can touch the right or left of a float. It takes *right*, *left*, *both*, and *none*.

If the containing element only holds floated elements some browsers treat it like zero pixels. Therefore a div containing a floating \<p> with a 1px border would just looke like a 2px line.

^The solution to the problem above? **overflow** property set to a value of *auto*.

Developers design typically at 960-1000px wide. Judging screen height is harder.

**Fixed Width**
- advantages:
  - values and pixels accurate.
  - Designer has more control of appearance.
  - Size of images will always remain same.
- disadvantages:
  - Can end up with large gaps
  - Resolution effects text size.
  - etc

**Lidquid layouts**

Similar advantages and disadvantages but in reverse.

**960 grid** widely used by designers. See example on p388

## Chapter 3, JavaScript

asking a function to perform is known as "calling" the function.

**parameters** the variables placed in a function when it is declared.

**arguments** the real values used in place of the parameters when the function is called.

**return value** the answer your function returns to you.

None of the code in a function runs until the function is **called**

Function with no name is called an annoymous function. It can live inside of a variable
```javascript
function area(width, height){
  return width * height;
}

let size = area(3,4);

vs

let area = function(width, height){
  return width * height;
};

let size = area(3,4);
```

to call a function of code immediately
```javascript
let area = (function() {
  let width = 3;
  let height = 2;
  returnd width * height;
}()); //That last () tells the computer to run the function immediately.
```

**local** variables are called within a function. They can't be accessed in other parts of the program. A nested function a local parent variable will be accessible to the child but child variables won't be accessible to the parent.

**global** variables can be accessed both inside functions and throughout a program.