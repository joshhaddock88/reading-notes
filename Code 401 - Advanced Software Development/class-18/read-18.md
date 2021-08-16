# Read 18 - Identity

## Introduction to Identity on ASP.NET Core

ASP.NET Core Identtiy is a membership system that adds loging functionaliy to ASP.NET Core apps.

^ This whole article is documentation on exactly how to set up an Identtiy. It's useful for setting up a program but for the life of me I don't know how I'm supposed to write notes on it.

## ASP.NET Core 2.0 Authentication and Authorization System

### Identity

There are thre classes which represent identity: Claim, ClaimsIdentity, ClaimsPricipal

1. Claims: represents a single fact about the user. They are represented by the "Claim" class. It's most common constructs has two strings **Type** and **Value**.

2. ClaimsIdentity: This class represents a form of digital identification. Just as a drivers license contains many specifics about the individual, a ClaimsIdentiy may have many Claims.

3. ClaimsPrincipal: A **Principal** represents the actual user. It will contains one or more instance of ClaimsIdentity, which in turn contains one or more Claims, which are represented by a type and value.

### Verbs

* **Authenticate** - Gets the user's information if any exists.
* **Challenge** - Requests authentication by the user.
* **SignIn** - Persists the user's information somewhere.
* **SignOut** - Removes user's persists information.
* **Forbid** - Denies access to a resource for the unauthenticated users or authenticated but unauthorized users.

Authentication handlers will implement the five verbs above.

### Authentication and Authorization Flow

1. The request arrives at the server.
2. The authentication middleware calls the default handler's Authenticate method and populates the HttpContext.User object with any available information.
3. The request arrives at the controller action.
4. If the action is not decorated wit hthe [Authorize] attribute, display the page and stop here.
5. If the action is decored with [Authorize], the auth filter checks if the user was authenticated.
6. If the user was not, the auth filter calls Challenge, redirecting to the appropriate signing authority.
7. Once the signing authority directs the user back to the app, the auth filter checks if the user is authorized to view the page.
8. If the user is authorized, it displays the page, otherwise it calls Forbid, which display a 'not authorized' page.
