# Read 26: MVC

## What is MVC

MVC is a design pattern/architecture. It is desigend for efficiency.

* In MVC the View only deals with the UI and user actions are defined in Controller.
* MVC is action based architecture, which helps keep code clean and organized. Based on an action, a certain view is displayed.
* In MVC, we don't have View State to store the state information.
* In MVC action logic and UI are loosely coupled. Because of these they can be tested easily.

### Model

Layer represent the objects of the application.

### View

Layer contains all HTML controls to define UI. We can use Razor engine to help render View.

### Controller

Handles all requests from users. It's the engine of the MVC application.

The Controller is just a class wit ha group of methods called actions. Every action method returns a View.

MVC is not a new framework: it is built on top of ASP.NET, so all the features available in ASP.NET are still availabe using MVC.
