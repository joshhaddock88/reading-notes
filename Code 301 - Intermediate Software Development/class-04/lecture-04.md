
```js
let form = document.getElementById('myForm');

form.addEventListeniner('submit', function(e) {
  e.preventDefault();
  console.log('submitted');
})
```

```html
<html>
  <head>
    <title>
      Form thingy
    </title>
  </head>
  <body>
    <h2>Welcome, user</h2>
    <main>
      <form>
        <label for="name">Name</label>
        <input type="text" name="name" id="name"/>
        <br />
        <label for="DOB">Date of Birth</label>
  </body>

</html>
```