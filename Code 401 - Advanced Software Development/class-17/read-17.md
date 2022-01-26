# Read 17: Cookies

## Using HTTP cookies

### What is a cookie?

It's a small piece of data the server sends to the user's web browser. It is then stored and may be sent back with later requests from the same server. It's mostly used to keep track of whether two requests have come from the same browser(use case: keeping a user logged in).

### Creating cookies

You'll need a "Set-Cookie" header.

You also need to set the lifetime of a cookie: **Session** or **Permanent**.

You can restrict access to cookies with the **Secure** and **HttpOnly** attributes.

Define where cookies are sent with **Domain** and **Scope**

Cookie prefixes can consists of **_Host-** and **_Secure-**

There are several laws in place with international scope to regulate cookies.

## HTTP Cookies Explained

### Origin of Cookies

It was 1994 as a way to try and manage state.
**What is a Cookie?**: They are plain text; the contain so executable code.
**Cookie Creation**: You need an HTTP header called "Set-Cookie"
**Cookie Encoding**: Cookie specifications are suggest URL encoding but don't require it.

Session cookies can be created for automatic removal.

You can also remove a cookie by expiration date method.

## HTTPContext: Cookies

A cookie is a plain-text file.

To set a cookie in ASP.NET MVC
```csharp
var userId = HttpContext.Request.Cookies["user_id"];
```

There are various cookie options which can be accessed.

```csharp
CookieOptions cookieOptions = new CookieOptions();

//
cookieOptions.Expires = new DateTimOffset(DateTime.Now.AddDays(7));
```

Summary: Cookies can save information about a user and retrieve it for subsequent requests. It's an important technique which can be used in a wide range of situations.