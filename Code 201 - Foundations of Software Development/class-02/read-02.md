## Chapter 2, HTML

**structural markup** : elements that you can use to describe both headings and paragraphs.

**semantic markup** : provides additional information, such as emphasis, quotation etc.

**headings** HTML has six levels of headings, h1-h6. They get progressively smaller unless styled.

**paragraphs** by default a browser will show each new p element on a new line with space.

**bold** \<b> for obvious use.

**italics** \<i> for italics.

**superscript** to create superscript, ie 4th with a tiny "th"

**subscript** opposite of sup, think H20, with a tiny 2 beneath.

**white space** browsers use white space collapsing. Line breaks etc are read as a single space.

**breaks** \<br /> will create a break mid line.

**horizontal rule** \<hr /> creates a line across the page.

**empty elements** elements without words between them, like \<hr />

**Code views** show you code created by the visual editor.

**strong** \<strong> used to indicate importance. It differs from \<b> in that it indicates importance, not just bold.

**emphasis** \<em> indicates emphasis, specifically for things that subtly changes meaning of sentence.

**blockquote** \<blockquote> for longer quotes that take up an entire paragraph.

**quotes** \<q> is used for shorter quotes.

**abbreviation** \<abbr> If you use an abbreviation and want to provide the full name you can use this tag.

**cite** \<cite> can be used to show where you're citing from.

**defining instance** \<dfn> used for the first time you explain some new terminology (jargon or academic concept). Some browsers italize it, some don't.

**address** \<address> to contain contact details for the author of the page.

**insert & delete** \<ins> \<del> can be used to show text that has been inserted or deleted.

**outdated** \<s> shows no longer accurate or relevant data that should not be deleted.

## Chapter 10, HTML

**Selectors** indicates the elements to which a CSS rule will apply.

**Declarations** indicate how the selectors will be modified. Contains a **property** and a **value**.

**Properties** indicates the aspects of the elements which will be styled.

**Values** specify the settings for the chosen property.

### Using External CSS

**link** \<link> can be used inside an HTML document to tell the browser where to find the CSS file. It must contain an **href**, **type**, and **rel**.

**href**: shows the path to the CSS file.

**type** specifies the type of document(either text/css).

**rel**: tells the relationship of the file to the linked page. The value should be "stylesheet" when linked to a CSS file.

**Style**: you can also included CSS rules inside of a HTML document using the style element. This is not best practice. Styling and script should be in seperate files.

### CSS Selectors

**Universal Selectors**: *{ } applies to all elements on page.

**Type Selectors**: h1, p { } targets all types of that element.

**Class Selectors**: .note{ } targets any element in "note" class.

p.note { } only targets \<p> elements of "note" class.

**ID Selector** #introduction { }, targets an element with id of intoroduction.

**Child Selector** li>a { } targets an \<a> elements which are a child of \<li>.

**Descendant Selector** p a { } targets an \<a> element inside a \<p> element.

**Adjacent Sibling Selector** h1+p { } targes first \<p> element after any h1 element, but not other \<p> elements.

**General Sibling Selector** h1~p { } would match two \<p> elements following \<h1>.

**inherited vs not-inherited**: some properties are inherited, like font family, and some are not (like background color).

Some browsers have odd quirks when it comes to CSS displays. However, using debugging tools can help spot them out.

## Chapter 2, JavaScript

**Variables** are addresses. They are you telling your computer to remember something.

Variables are declared with **let** or **const**, var is outdated.

**numeric data type**: 0.75

**string data type**: "Hi!"

**boolean data type**: true or false.

**escaping** can be done by using backslash. This allows you to use quotes inside a string. You can also use backticks.

Variables can hold any data type, number, string, or boolean.

**Arrays** are lists or set of values related to each other. They are indexed.

Arrays begin with an index of zero.

**Expressions** evaluate into a single value.

## Chapter 4, JavaScript

**Logical operators** && and || or ! not