```js
//in refers to the KEY
// of refers to the value

let myArray = ['Nena', 'Lune', 'Bean', 'Bing'];

for (let index of myArray) {
  console.log(index);
  console.log(myArray[index]);
}

for (let dog of myArray) {
  console.log(dog);
}

// more crucial to know when begin itterating thorugh objects

let myDog = {
  name: 'Bad Dog',
  age: 3,
  size: 'large',
  bark: function(){
    console.log('bark');
  }
}

for (let key in myDog) {
  console.log(key); // gives the name of all the keys in the object myDog
}

for (let key in myDog) {
  consolelog(myDog[key]); // gives the value of each key
}
```

- Announcements
  - Reminder: Weekly survey will go out today
  - All assignments caught up by sunday night
  - 301 entry exam
- Code 301 preview
- Animations demo
- Merge Conflicts

# 310 Preview

Preview of 301

### Structure of 301

- Frequent pair programming
- Code Challenges
- use lots of array methods and string methods built in to JS.
- 3 modules + project week
  - Code 301 begins with front end development using React and Bootstrap. Module 2 introduces the back-end and building servers to serve files to React front-end. Module 3 brings everything together with the development of a full-stack application from starto to finish. The final module is team based project work.
- MERN - mongo(db), Express Server, React front end, Node.

### Concepts in 301

- Collaborativelly design and create web applications from scratch using MVC architecture built with proessional-grade HTML, CSS, and JavaScript.
- Work with string, array, and object data structures and algorithms to solve code challenges with pure JavaScript programming.
- Design dynamic front end and back end applications which can function together or independently and are deployed to cloud platforms.
- Explain fundamentals of how the World Wide Web works, over the internet.
- Utilize dependency management techniques to build with third-party libraries such as ExpressJS, React, and Bootstrap.
- Persist data Mongo databases, sources from third-party API or user-generated content.
- Follow agile software development practices during week-long sprints, including pair-programming, stand-ups, daily retrospectives, project management with Kanban boards, regular refactoring, and working in a shared code base.

## Final Project Overview

