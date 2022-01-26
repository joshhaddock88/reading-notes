## Introduction - Chapter 1, HTML

DNS: Domain Name System
ISP: Internet Service Provier
IP: Internet Protocol

HTML pages are made up at "Elements" (characters or words that live inside brackets). They are made up of two tags, an opening and a closing.

\<p> An Element \</p>

^opening tag : ^ closing tage.

Attributes tell us more about the contents of an elements.

\<p lang="en-us"> Paragraph in English\</p>

           ^attribute value.

    ^attribute name.

One of the best ways to learn HTML to view source code, which can be done in browser by right clicking and going to view source.

HTML pages are text documents.


HTML uses tags(characters that sit inside angled brackets) to give the informatino they surround special meaning.

Tags are foten referred to as "Elements"

Tags usually come in pairs. The opening tag denotes the start of a piece of content; the closing tag denotes the end.

Opening tags can carry attributes, which tell us more about the content of that element.

Attributes require a name and a value.

To learn HTML you need to know what tags are available for use, what they do, and where they can go.

## Chapter 8, HTML

The DOCTYPE is no just HTML, post HTML5.

&lt!-- this is how you make a comment in HTML -->

**id**'s can be used to distinguish one element from all the others. It must be unique to each element and must begin with a char or _, but never a number.

Id's are global attributes, because they can be used on any element.

**Class** attributes can be used to lump several elements together.

Some elements will always appear to start on a new line. These elements are known as **"block level"** elements.
Examples of **block level elements**: \<h1> \<p> \<ul> and \<li>

**inline** elements will always appear on the same line as their neighboring elements.
Examples of **inline** elements: \<a> \<b> \<em> \<img>

The **\<div>** elements can be used to group elements together. Because of this, it can sometimes be helpful to add a comment to the end of a div.

The **\<span>** elements is like an inline version of a div. It can contain a section of text where there is no suitable elemetn to differentiate it from it's surrounding text.
**Class** or **id** attributes are typically used with span.

**\<iframe>** is a little window inside the page. It's used to embed (think google maps page, where the map is embedded into the page).
**iframe attributes**

src: specifies the URL of the page to show in the frame.

height: height of iframe in pixels.

width: wide of irame in pixels.

seamless: applied to iframe where scrollbars are not desired. It does not need a value, but is often given a value of "seamless".

**\<meta>** elements live inside the head. It contains information about the web page. The most common attributes in meta are **name** and **content**

Pre-defined values of **name**

**description**: Contains a description of the page. May be visible in search results. Maximum of 155 chars.

**keywords**:  list of coma seperated keywords that users might use to find the page.

**robots**: Indicates whether search engines should add this page to their search results. **noindex** is used in content to note if page should not appear in searches. 

**nofollow** is used to note that the page should appear in searches but the links within the page should not.

The **http-equiv** and **content** also appear as pairs. 

Pre-defined values of **http-equiv**

**author**: the author of the page.

**pragma**: Prevents broswer from caching the page.

**expires**: Because browsers often cache pages, the **expires** value indicates when the page should no longer be cached.

**expires format**: content="Fri, 04, Apr 2014 23:59:59 GMT"

Escape Characters (full list on pg194)

\<: &lt: &#60

\>: &gt: &#62

\&: &amp: &#38

\": &quot: &#34

DOCTYPES tell browser which version of HTML you are using.

You can add comments to your code between \<!-- and --> markers.

The id and class attributes allow you to indentify particular elements.

The \<div> and \<span> elements allow you to group block-level and inline elements together.

\<iframes> cut windows into your web pages through which other pages can e displayed.

The \<meta> tag allows  you to supply all kinds of informatino about your web page.

Escape charactes are used to include special characters in  your pages such as <, >, and copyright.

## Chapter 17, HTML

HTML5 (just HTML now, it's the only one and there won't be more) usese a variety of different named elements rather than divs.
These new elemens make the code much easier to read and also allow screen readers and other techonologies to better scan a web page.

\<header> and \<footer> are common elements. They can be used to denote the header and footer of an entire page.
Or they can be used inside of another element, like the \<article> element to denote the header and footer of that particular element.
For example, in a blog each post is it's own section, and each will have it's own header/footer.

\<nav> element is used to contain major navigational blocks. Think links at the bottom of page like "Contact, FAQ, Products, Pricing" etc.

\<article> This is an element that acts as a container for standalone content which is potentially syndicated. It's the meat.
If you click on a NYT article, the article that you read would be housed inside of the article element.
All other parts of the page, ads, links, etc are housed somewhere else.

\<aside> can have multiple functions. If nested inside an \<article> it likely acts as supplemental material (ie glosseries).
When outside of an \<article> it contains linkto other sections of the site, a list of recent posts, a search box, or recent tweets by the other.

\<section> is used to keep related content together. It could have various nested \<article> elements inside of it.
It should not be used as a wraper for the entire page, that job is still best left to a \<div>.

\<hgroup> is used to group heading together. The usefullness of this can be debated.

\<figure> element should contain content referenced in \<article>, however \<article> should still make sense even if the figure is absent.
It could include images, videos, graphs, diagrams, code samples etc.

\<div> to be used when there is no suitable styling element. It's a sort of miscellaneous tag.

The \<a> element can wrap around a block, turning an entire block into a link.

TO make HTML5 elements work in Internet Explorer 8(and other older version of IE), extra JavaScript is needed, which is available free from Google.

## Chapter 18, HTML

To help figure out who your target audience is, invent fictional characters who might visit your site.
Thinking about what they get ouf of it will influence content and design decisions.

Once you understand who might be visiting your website determine "why" they're visiting. What are key motivations and specific goals.

Find out what each of your imaginary visitors is hoping to acheive by visiting your sight. This won't hit every reason, but it can help locate early blindspots.

Find out what information visitors need. Will visitors be familiar with the subject/brand? Will they be familiar with my product/service? What are common questions people ask about this particular subject area?

You also need to determine how often people will visit your site. Is it a one time visit? How often is stock update or service changed?

One helpful tool to organize information is a **site map**. To help decide what information goes where, you can use **card sorting**: placing pieces of info on seperate cards and organizing related information into groups. Remember to focus on the goals of your potential visitors (example **site map pg 462**)

**wireframes** a simple sketch of the key infomration that needs to go on each page of a site. It can help to show clients the wireframe of content before showing them the design to ensure the site has all the needed functionality.

Things to remember to get your message across:
**organize** and **prioritize**

**organize** group together related blocks and chunks. By presenting certain types of information in a similar visual style, users will learn to associate style and content.

**prioritize** by making parts of a page distinct, you can draw attention to it. **Visual hierarchy** helps users focus on key messages.

**visual hierarchy** elements of visual hierarchy include:

Size: larger elements grab attention first.

Color: Foreground and background color can draw attention to key messages. Think highlighted text.

Style: An element with a different style applied will make it stand out.

Visual hierarchy is acheived through **visual contrast** between items. Images create high visual contrast.

Different types of grouping:

**proximity**: items placed closer together are percieved as more related.

**closure**: When faced with complicated arrangments, we often look for recognisable patterns or forms.
A real or imaginary box can be formed around elemtns due to proximity and alignment.

**continuence**: Elements taking place in a line or curve are perceived as related.

**white space** leaving space between items helps disassociate items.

**color**: background color behind items emphasizes connection.

**borders**: a border draws a line between an element an it's neighbors.

We naturally observe similarities in design, even if they aren't there. To help we need

**consistency**: having read one element, it's easy to infer meanings on other elements if styling is consistent.

**headings**: giving each chunk of information a heading allows the user to see if content is relevant.

Designing Navigation

Navigation needs to be:
- Concise: easy to read, limited options.
- Clear: link content is predictable.
- Selective: primary navigation should only reflect content of the site. Logins and legal belong elsewhere.
- Context: good navigation provides context.
- Interactive: links should change on hover and click, it should be visually distinct.
- Consistent: Secondary navigation may change, primary navigation should be the same.

Design is about good communication.

## Chapter 1a, Javascript

Coding involves **vocabulary** and **syntax**. There are words for a specific language that a computer will understand, and rules for how those words are used and ordered.

**programmatic** computers "think" programmatically. That is they follow instructions one after another.

A script is a series of insturctions that the computer can follow in order to acheive a goal.

Each time a script runs, it might only use a sebset of all the insturctions.

Computers approach tasks in a different way than humans, so your instructions must let the computer solve the task programmatically.

To approach writing a script, break down your goal into a series of tasks and then work out each step needed to complete that task
(a flowchart can help).

## 1b, Javascript

**Objects** are things. They can be meta or simple.

Each object will have it's own **properties**, **events**, and **methods**.

**properties** are the characteristics of an object. Each property has a **name** and **value**, each name and value pair tell you something about the object.

**SEE pg 29** for object metaphor: cars/hotels.

**events** moments when a script interjects. Like clicking, or after a certain amount of time has passed, or hovering a cursor.

**methods** Tell you something about the objects or change the value of one or more of hte objects properties.
When you use a method, you don't always need to know how it works, but how to ask the question and interpret the answer given.

Computers use data to create models of things in the real world.

Web browsers are programs built using objects.

Brwosers receives an HTML page.
It creates a model of the page and stores it in memory.
It shows the page on screen using a rendering engine.

Computers create models of the world using data.

The models use objects to represent physical things. Objecsts can have: properties that tell us about the object; methods that peform tasks using the properties of that object; events which are triggered when a user interacts with the computer.

## 1c, Javascript

Programmers can write code to say "When blank-event occurs, run this code.

Web browsers use HTML markup to create a model of the web page. Each element creates its own node (sort of like an object).

To make web page interactive, you write code that uses browser's model of the web page.

It is best to keep JavaScript code in its own Javascript file. Javascript files are text files, but they have the .js extension.

The HTML script element is used in HTML pages to tell the browser to load the JavaScript file(rather like the link element can be used to load a CSS file).

If you view the source code of a page in the browser, the JavaScript will not have changed the HTML, because the script works with the model of the web page the browser created.