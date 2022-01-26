# Day 1

## Lecture Notes

What do we know about C#?

* LINQ is magic.
* Big O (measure operational complexity)
* Type safe (every variable has a type that you define. Every method returns a type).
* In JavaScript does a read, syntax check, compile, and run.
* A compile, in C#, produces an exe. If it gets to exe it has no physical bugs.
* Public static void stuff.
* Method | Class. Class system in C#.

```csharp
static void Main(string[] args)
{
    console.WriteLine("Hello World!");
}
```

Static = NO INSTANCE. IE it is entirely abstraction.
Void = The return type. It has no return.
Main = method
string[] args = the argument and it's data type.
(public would equal the scope)

### Problem Domain

* F() that reverses array

* Input <- Array [1,2,4,9]

* output -> Array [9,4,2,1]

* In place? Yes.

### Algorithm

* Identiy start & end

* while start < end

    * Swap

    * arr/start/end

### Pseudo

- Declare start <- 0

- Declare end <- arr.Length -1

- While start < end

    - Declare time <- arr[start]
    - Arr[start] = Arr[end]
    - Arr[end] = temp
    - start ++
    - end --

## Solutions

A solution can have many projects. A project can have many classes. A class may have many methods. All of this together is an exe once compiled.

Void? Return type
Static? No instance needed

string[] args: a variable called args that will have an array of strings.

All methods have the same signature

static/instnace void/type Main(type variable) <- **Signature**