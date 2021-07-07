1. What is the correct way to bring a component into another file?
```js
import Component from './path-tocomponent.js';
```
2. What does MVC stand for?
- Model-View-Controller
3. Functions that are arguments, passed in to a function to be executed at a later point (for instance, when some event occurs) are often called:
- Callback functions
4. Which example below shows the best way to prevent the default behavior of actions (e.g., link clicks or form submissions) writing custom event handlers?
```js
function eventHandler(event) {
  event.preventDefault();
  // Do other stuff
}
```
5. In your terminal, you ar working in the main branch of a Git repo. Which of the following Git commands will create and check out a new branch named "foo" as a copy of the main branch?
- git checkout -b foo

6. How would you make a button that when clicked, updates the state of 'listening' from 'false' to 'true'?
 - !
```js
<button onClick={this.setState({listening: true})}> Click Me </button>
```

7. Let's say that a parent component passes a piece of state into a child component as props. How can that child component update the state of the aprent component?
- The parent component would have to pass a function into the child component that would allow them update the state in the parent component.

8. 
```js
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      email: cat@house.com
    }
    render () {
      return (
        <Profile />
      )
    }
  }
}
```
How would you send the email from state to the 'Profile' component with a key of 'email'?
```js
<profile email={this.state.email} />
```

9. React was created by Jordan Walke of Facebook
- True

10. In your terminal, which command will navigate to the immediate parent directory of your current working directory?
- **cd ..**

11. What command can you use in your terminal to initialize a new react application?
```js
npx create-react-app<application-name>
```

12. Whihc of the following statements is NOT consistent with Agile Development phillosophy?
- Once software requirements are determined by user stories, they should never be changed during the development lifecycle.

13. You would like to add call the 'handleClick' function whenver a button is clicked. How would you do that with React?
```js
<button onclick={this.handleClick}>Click Me</button>
```


2. What does '.filter()' return?
- A new array with a length less than or equal to the original array.

3. What response code sould a server send to the client when the server program hits an error unexpectedly?
- 500

4. What does WRRC stand for?
- Web Request Response Cycle

5. What kind of tool do we use to analyze our JavaScript for potential errors while we are writing code?
- Linter

6. Given the following code:
```js
const ticketPrice = isMember ? '$2.00' : '$10.00';
```
What is the value of ticketPrice?
- "$2.00" if 'isMember' is true, and "$10.00" if 'isMember' is false.

7. What will log to the debug console?
```js
const title = 'Boss';
if(title === 'Boss') {
  title = title.toUpperCase();
}
console.log('Title:', title);
```
- There's a typeError

8. What is a reason to NOT use the ES6 arror function?
- contextual this.

9. What values does JavaScript consider 'falsy'?
- 0, null, false, undefined, empty string

10. When a function is a property of an object what is it called?
- method