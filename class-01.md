Introduction - Chapter 1

DNS: Domain Name System
ISP: Internet Service Provier
IP: Internet Protocol

HTML pages are made up at "Elements" (characters or words that live inside brackets). They are made up of two tags, an opening and a closing.
\<p\>            \</p\> <- an elements
^opening tag : ^ closing tage.
Attributes tell us more about the contents of an elements.

<p lang="en-us"> Paragraph in English</p>
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

Chapter 8

The DOCTYPE is no just HTML, post HTML5.
&lt!-- this is how you make a comment in HTML -->
**id**'s can be used to distinguish one element from all the others. It must be unique to each element and must begin with a char or _, but never a number.
Id's are global attributes, because they can be used on any element.
**Class** attributes can be used to lump several elements together.

Some elements will always appear to start on a new line. These elements are known as **"block level"** elements.
Examples of **block level elements**: <h1> <p> <ul> and <li>

**inline** elements will always appear on the same line as their neighboring elements.
Examples of **inline** elements: <a> <b> <em> <img>

The **<div>** elements can be used to group elements together. Because of this, it can sometimes be helpful to add a comment to the end of a div.

The **<span>** elements is like an inline version of a div. It can contain a section of text where there is no suitable elemetn to differentiate it from it's surrounding text.
**Class** or **id** attributes are typically used with span.

**<iframe>** is a little window inside the page. It's used to embed (think google maps page, where the map is embedded into the page).
**iframe attributes**
src: specifies the URL of the page to show in the frame.
height: height of iframe in pixels.
width: wide of irame in pixels.
seamless: applied to iframe where scrollbars are not desired. It does not need a value, but is often given a value of "seamless".

**<meta>** elements live inside the head. It contains information about the web page. The most common attributes in meta are **name** and **content**

Pre-defined values of **name**
**description**: Contains a description of the page. May be visible in search results. Maximum of 155 chars.
**keywords**:  list of coma seperated keywords that users might use to find the page.
**robots**: Indicates whether search engines should add this page to their search results. **noindex** is used in content to note if page should not appear in searches. **nofollow** is used to note that the page should appear in searches but the links within the page should not.

The **http-equiv** and **content** also appear as pairs. 
Pre-defined values of **http-equiv**
**author**: the author of the page.
**pragma**: Prevents broswer from caching the page.
**expires**: Because browsers often cache pages, the **expires** value indicates when the page should no longer be cached.
**expires format**: content="Fri, 04, Apr 2014 23:59:59 GMT"

Escape Characters (full list on pg194)
<: &lt: &#60
>: &gt: &#62
&: &amp: &#38
": &quot: &#34

DOCTYPES tell browser which version of HTML you are using.

You can add comments to your code between <!-- and --> markers.

The id and class attributes allow you to indentify particular elements.

The <div> and <span> elements allow you to group block-level and inline elements together.

<iframes> cut windows into your web pages through which other pages can e displayed.

The <meta> tag allows  you to supply all kinds of informatino about your web page.

Escape charactes are used to include special characters in  your pages such as <, >, and copyright.