# Read 01: Exception Handling & Debugging

## Debuggin for absolute beginners

### Clarify the problem by asking yourself the right questions

- Errors(exceptions) can be good things. Debuggers can take you to the exact place where it happened.

### Examine assumptions

- Are you using the right API?

- Are you using it correctly?

- Check for typos.

- Did you make a change to your code that you thought was unrelated?

- Did you expect a different value than what you got?

- Did you know the intent of the code?

When writing code always start small. Find the smallest version of the problem possible and work up to greater complexity. Building a program is like eating a whale, one bite at a time.

**INSPECT VARIABLES** and check if they contain the type of values they should.

Check whether the application is even executing the code.

### Try/Catch

Place any code statments that might raise or throw an exception in a try block, and place statements to handle exception.

### Statement keywords (C# Reference)

Selection statements: if, else, switch, case

Iteration statemetns: do, for, foreach, while

Jump statements: break, continue, default, goto, return, yield

Exception handling statements: throw, try-catch, try-finally, try-catch-finally

Checked and unchecked: checked, unchecked

fixed statment: fixed

lock statement: lock

## try Statements and Exceptions

try block surrounds a piece of code which may throw an exception.

The Catch block clause specifies the type of exception to catch.

**exception filters** can be used to specify an exception *when*.

The finally block executes after any

- catch block finishes

- The try block finishes

- Control leaves teh try block because of a jump statement.

Exceptions can be thrown by either the runtime or user code.

### Common exception types

**ArgumentException**: thrown when a function is called with a bogus argument.

**ArgumentNullException**: Subclass of argument exception that's thrown when a function argument is null.

**ArgumentOutOfRangeException**: thrown when argument is too big/small.

**InvalidOperationException**: thrown when state of object is unsuitable for a method.
