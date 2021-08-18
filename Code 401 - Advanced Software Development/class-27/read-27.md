# Tables Read 27

## Views in ASP.NET Core MVC

Home Controller = represented by Home Folder in **Views**

**Layouts** - File used at top of *Views* folder to gie consistent webpage sections and reduce repeat code.

**Partial Views** Reduce code duplicationg by managine reusable parts.

**View Components** - Similar to partial views, but requires code to run on server in order to render to webpage.

### Benefits of Views

**Seperation of concerns**

1. App is easier to maintain due to better organization.
2. Parts are loosely coupled.
3. Easier to test user interface parts.
4. Due to organization, repeat sections are unlikely.

### Creation

* Views are created under the **Views**/**[Controller Name]** folder.

Razor markup starts with the @ symbol.

### How controllers specify views

Views from actions are returned as a ViewResult(a type of ActionResult).

Since most controllers inherit from Controller, simply use the View() helper method to return ViewResult().

View method has several overloads

1. An explicit view to return

```csharp
return View("Orders");
```

2. A model to pass to the view

```csharp
return View(Orders);
```

3. Both a view and a model

```csharp
return View(Order, "Orders");
```

When an action returns a *view*, view discovery takes place.
By default "return View();" will return a view with the same name as the action method from which it's called. For example

```csharp
return View(About)
```

Will search for a view file named About.cshtml. A view path can be provided instead of a view name

```csharp
return View("Views/Home/About.cshtml")
```

### Forms - Weakly Typed

Advantage
1. It's easy to create a form using Weakly Typed Mechanism.
2. Mostly used when you ned to create a form with one or two input items.

Disadvantage
1. Because it is not strongly typed, IntelliSense doesn't help you.
2. Have a higher chance of getting exception and runtime error messages.
3. Very difficult to manage when forms have multiple input items and controls.
4. It is very clumsy when you need to add or remove input items.
