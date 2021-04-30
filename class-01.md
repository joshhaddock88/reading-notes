## Introduction - Chapter 1

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

## Chapter 8

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

## Chapter 17

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

## Chapter 18

