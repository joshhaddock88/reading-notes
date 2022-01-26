# Lecture Notes
## Forms in HTML
- Forms take in data from the user and give us the potential to do something with it.
- the default behavior of forms is weird - prevent default behavior to stop it from erasing the data.

- form data comes in as a **string** datatype.
  - if you want to use as number you will have to convert it.
    - parseInt()
    - Number()
- We recieve the data on the backend from a *submit event* that we will *listen* for.

placeholders do not store as values.

What is an event?
## Browser events
- any time a user interacts with a page it causes an event.
- You can activate listeners to to react to an event if it occurs.

## JS Even Listeners
- specify a 'target' to listen to
- add a listener
- say what to listen for

1. Where do we want to listen
2. Identify  the element in JS
3. Attach a listener to your element. What do we want to listen for? (Submit for forms)
4. Handle the even.

## Organize your JS code:
1. Declare global variables
2. Declare constructor functions
3. Declare prototype methods
4. Declare regular functions
5. Add event listeners
6. Call functions
