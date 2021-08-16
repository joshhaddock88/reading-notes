# Quiz answers

## Prework Quiz

1. C# is primarily a **type-safe** language, meaning it prevents a string from interacting with an integer.

2. Static typic means enforcing type sfaety at **compile time**.

3. No. The method of "Goober" only accept integers, and the Main method is sending it a string.

4. **.NET Framework** is restricte dt oWindows environmnets only. **.NET Core** is cross platform and open source.

5. CLR stands for **Common Language Runtime**

6. Output "Hello World" is **Console.WriteLine("Hell World");**

7. A method **performs an action in a statement block**

8. A method recieves inputs by specifying **parameters**, and outputs dat aby defining a **return type**.

9. Identify components:

    - All can access **public**

    - opposite of instance: **static**

    - return type: **void**

    - method name: **Goober**

    - parameter name: **oober**

    - parameter value type: **int**

    - comments: **// double slashes**

10. Assemply is **a unit of packagin and deployment in .NET which can be either an application or a library**.

11. DLL stands for **dynamic link library**

12. Name conventions

    - local variables = **camelCase**
    - private fields = **camelCase**
    - method names = **PascalCase**
    - class names = **PascalCase**

13. A semicolon **terminates a statement**

14. To invoke a method in a single line **ClassName.MethodName();**

15. What are reserved keywords? **bool, default**

16. Value type **examples include ints and bools. Value type instances ALWAYS copies the instance within the stack**.

17. What is a reference type? **A reference tpye examples include classes, arrays, and delegates. Value type instances copies the reference, but new assignments point to the same object with in the heap**.

18. How do you instantiate an array with 4 elements?

    int[] myArray = new int[4]

19. How do you instantiate a rectangle array?

    int[,] matric = new int[3,3];

20. How do you instantiate a jagged array?

    int[][] matrix = new int[3][];

21. **IndexOutOfRangeException** is thrown when an index that does not exist is asked for.

22. "using directive" **imports namespaces**

23. Code outputs 3.

## Quiz 1

1. A try block is required to be followed by either a catch or a finally black? **true**

2. 

## Quiz 2

1. What is the purpose of an interface?

    To group together behaviors that can be attached to a class in a contract like implementation.

2. What is the difference between an interface and an abstract method?

    An abstract method gets overridden, while an interface getrs implements with no override keyword present.

3. What about the difference between an abstract class and an interface?

    An interface is implemented and is a contract against the class it is being attached to. An Abstract Class is a template that contains both required and optional behaviors a class can contain.

4. What is the difference between a class and an object?

    An object is an instance of a class.

5. What symbol do you use to show inheritance?

    : (colon)

6. An interface tells us what a class "**has**", while inheritance tells us what a class "**can do**". **WRONG**

7. Write the LINQ Query(not method) that retrieves all of the numbers in the data source named my Numbers that are larger than 20. Name your variable in your query number.
**WRONG**
    var value = from number in myNumbers
                where number > 20
                select number;

8. What is the name of the method that is required when implementing IEnumerable?

    GetEnumerator

9. What are the four principles of OOP?

    Encapsulation, Inheritance, Polymorphism, Abstraction

10. Under the hood, a foreach loop is just a(n) **WRONG**

    method call

11. Create a class signature(excluding the curly braces) for Oober that is derived from class Goober, as well as implementing the interface named IDance. No access modifier is required, please provide spaced between each word/symbol

    class Oober : Goober, IDance

12. What happens if you do not have a "base case" in a recursive solution?

    StackOverflowException

13. What is the Big O time of a full traversal of a Linked List?

    O(n)

14. What is the difference between overloading a method and overriding a method?

    Overloading: More than one methdo of the same name exists within a class.

    Overriding: A methdo of the same name etc is inherited from the parent.

15. 