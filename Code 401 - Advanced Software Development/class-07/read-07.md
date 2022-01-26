# Read-07

## Interfaces

An **interface** contains definitions for a group of related functionalities that are non-abstract class or a struct must implement.

It is able to define *static* methods which must be implemented.

By using interfaces you can include behavior for multiple sources in a class.

Interfaces are defined using the **interface** keyword.

An interface name but be a valid C# identifier name, and by convention will start with **I**.

```csharp
interface IEquatable<T>
{
    bool Equals (T obj);
}
```

An interface can't be instantiated directly. It's members are implemented by any class or struct that implements the interface.


## Back to Basics

What does it solve? Seperate how we use something from how it is implemented.

"The put this more simply, this means that ifyou hav ea Driver class it should be able to have a method Drive that can used to drive any car, boat, or other kin of class that implements the IDriveable interface.

The Drive class should not have to have a DriveBoat, DriveCar or DriveX methods for each kind of class that supports the same basic operations that are needed for it to be driven.

**Interfaces are trying t osolve a very specific problem by allowing us to interact iwth objects based on what they do, now how they do it.**"

Interfaces are **contracts**. "Concrete inheritance says **Car** is an **Automobile**, while an interface says **Car** implements the **Drivable** interface."

"When a class implements an interface, it does not mean that class **IS** that interface."

Interfaces are always implemented by more than one class.

## Interfaces 2

An interface can be a member of a namespace or class and can contain declarations of:

- Methods

- Properties

- Indexers

- Events

Beggining with C#8 they may also include

- Constants

- Operators

- Static constructors

- Nested types

- Static fields, methods, properties, indexers, and events

- Member declarations using the explicict interface implementation syntax.

- Explicity access modifiers.