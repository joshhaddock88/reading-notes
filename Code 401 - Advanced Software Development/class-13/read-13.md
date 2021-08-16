# Dependency Injection & Repository Design Patter

## Dependency Injection

**Dependancy** is when an object depends on another object.

Dependency injection

* Uses an interface or base class to abstract the dpendency implementation.
* Registration of the dependency container.
* Injection of the service into the constructor of the class where used.

## Repository Pattern

"Keep things small, simple, and consistent"

Smaller and simpler is best.

## SOLID principles

### Single Responsiblity Principle

Each method and each class should be responsible for only one thing, one task.

### Open/Close

Open/Close Principle: Encapsulation and Inheritance. Create new derived classes which inheirt from base components.

### Liskov Substitution

"An object in your applicatino should be able to be replaced wit ha type derived from it without breaking the application.

### Interface Segregation

Clients shuld not be forced to rely on interfaces they do not use. OR

Make interfaces specific to the functions and needs of the client.

### Dependancy Inversion

Code should depend on abstractions; not concrete implementations, and those abstractions should depend on abstractions and not details.
