# Read-06 Object Oriented Principals

## Inheritance

Parent/Child
Class with different attributes and behaviors

X is a Y, with some differences.

A base class could be Animal ->(Mammals, Reptile)
They are both animals but have different specializations of the base class.

## Abstract
Abstract classes/properties/methods must be passed on and given data. They can be overridden, but must appear within each child object.

Virtuals are only suggested classes/properties/methods.

A class must be abstract in order for any of it's props or methods to be abstract.

A class inheriting an abstract method cannot access the original implementation fo the method.

A sealed class cannot be a base class, therefore it cannto be abstract.
This is done to prevent derivation.

## Polymorphism

It allows the data inside props or methods to be changed/overridden by children of the base class.

A derived class that has overridden a method can still access the method or property of the base by using the **base** keyword.

## OOP(C#)

- Abstraction: modeling the relevant attributes and interactions of entitties as classes to define an abstract rpresentation of a system.

- Encapsulation: hiding the internal state and functinalty of an object and only allowing access through a publicset of functions.

- Inheritance: Ability to create new abstractions based on existing abstractions.

- Polymorphism: Ability to implement inherited properties or methods in different ways across multiple abstractions.
