# Read 08 - Collections & Enums

# Collections

There are two ways t ogroup objects: Arrays and Collections

Arrays are best for working with a strict number of strongly typed objects.

Collections provide more flexible way to group objects.

A collection is a class, so you have to declare an instance of the class before adding element to the collection.

If you collection only contains a single data type you cna use one of hte classes in System.Collections.Generic namespace.

A generic collection enforces type safety so that no other data type can be added to it. The plus side ot this is that if you need to retrieve the data you do not have to determine it'e data type or convert it.

### Example
**Using .Add**
```csharp
// Create list of string
var salmons = new List<string>();
salmons.add("chinood");
salmons.Add("coho");
salmons.Add("pink");
salmons.Add("sockeye");

// Iterate through the list
foreach (var salmon in salmons)
{
    Console.Write(salmond + " ");
}
// Output: chinook coho pink sockeye
```
**Using Collection Initializer**
```csharp
//Create a list of string using a
// collection initializer
var salmons = new List<string> { "Chinook", "Coho", "Pink", "Sockeye" };

// Iterate though the lsit
foreach(var salmon in salmons)
{
    Console.Write(salmon + " ");
}
// Output: Chinook Coho Pink Sockeye
```

### Types of collections

* **System.Collections.Generic**: useful when everything is the same data type.

* **System.Collections.Concurrent**: To be used whenever multiple threads are accessing the collection concurrently.

* **System.Collections**: Only stores as type object. Generic is preferred.

Collections use Key/Value pairs

LINQ(Language-Integrated-Query) can be used to access collections.

You can define a custom colleciton by implementing the IEumerable<T> interface. // This is above my paygrade.

## Enumeration

### Enum is a value type

* It is dfined by a set of named constants of underlying integral numeric type (int).
