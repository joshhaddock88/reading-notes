# Reading Notes
## Chapter 7, HTML CSS "Forms"

Form can be used for
**adding text**

**making choices**

**submitting forms**

every **form** element requires and **action** attribute.

There are two methods: **get** and **post**

**input** used within the form to collect user data. May want **type="text"**, **name**, and **maxlength**. NOTE: **type** can also equal password.

**textarea** can be used for user to leave comments.

Other input types
- **radio**
- **checkbox**
  - values: name, value, checked

**select** element give the drop down bar to selection from. Must have **name** attribute and various nested **option** elements.

**Option** elements can have a **value** and a default **selected** attribute.

**input** **type="file"** allows the user to upload a file.

**input type="submit** gives us a submit button. It can have a name or value but needs neither. The value is simply what is displayed on the button.

To use an image for the submit button, you can use **type="image"**.

**label** exists to make forms accessible to vision impaired users. It needs a **for** attribute to denote which form it belongs to.

You can group field elements with the **fieldset**. This contains a **legend** element which contains a caption on the grouping details.

**form validation** can be done in HTML with the **required** attribute.

Other types
- email
- url
- search

## Chapter 14, HTML CSS "Lists Table Forms"

You can use list-style: img to upload an image via url or folder.

## Chapter 6, JavaScript "Events"

1. select element
2. indicate event
3. state code

**event listeners** are the preferred method of handling events.

```js
element.addEventListener('event', functionName, Boolean);
```

User Interface Events
- load
- unload
- error
-resize
- scroll

mouse events
- click
- dbclick
- mousedown
- mouseup
- mouseover
- mouseout
- mousemove

keyboard events
- input
- keydown
- keypress
- peyup