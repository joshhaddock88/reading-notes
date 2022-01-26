# React Lifecycle

1. Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?
 - Render phase comes first.
 - Mounting, updating, and unmounting are the three phases of the component lifecycle.
 - Within the **Mounting** cycle the order is
    1. Constructor
    2. **static getDerivedStateFromProps**
    3. **render**
    4. **componentDidMount**
    5. **UNSAFE_componentWillMount**.
2. What is the very first thing to happen in the lifecycle of React?
- A *constructor* is called.
- You can at that time call **super(props)** and assign **this.state** for it's state.

3. Put the following things in the order that they happen: componentDidMount, render, constructor, componentWillUnmount, React Updates
      1. Constructor,
      2. render
      3. componentDidMount
      4. React Updates
      5. componentWillUnmount

4. What does componentDidMount do?
- This is a good place to set up subscriptions (but you must remember to unsubscribe during **componentWilUnmount**)
- setState can be called here (*use sparingly*)


## Constructor
```js
class FishTableRow extends React.Component {
  constructor() {
    super(props);//gives access to props
    //Don't call this.setState()here
    this.state = {//initialize local state
    showDescription: false;
    }
  }
}
```
Avoid using this.setState() in the constructor. It causes nasty side effects such as ignoring prop updates.


# React State Vs Props

1. What types of things can you pass in the props?
- They are like arguments to a function. If you have a counter application, you'll pass the counter component into props.
- So essentially anything you could pass as an argument in a function, can be passed as a prop.
2. What is the big difference between props and state?
- Props pass into a component, state is handled inside that component. So when we pass a prop into a component, say our counter, the initial count is as prop, once it is passed inside the componenet it is handled by state.
3. When do we re-render our application?
- Props can't be changed except outside the component.
State is there for when you need to re-render based upon something the user has done. So anytime information needs to be updated you will re-render, which changes the state but not hte prop.
4. What are some examples of things that we could store in state?
- State is like a variable within a function. Anything that needs to be updated over time would be stored in state (things like form data, checkboxes, a counter etc)