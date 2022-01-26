# Routing and Navigation

## Routing within MVC

**routing** is responsible for mappiny incoming requests to a particular controller actions.

1. Routing is enabled in applicatoin Web configuration.

2. Route table is created in Global.asax file. Global.asax is a special file that contains event handlers for ASP.NET.

The **Default** route includes routes for

* controller

* action

* id

## Routing within Core

Apps can configure routing using

* Controllers
* Razor Pages
* SignlarR
* gRPC Services
* Endpoint-enabled middleware such as Health Checks
* Delegates and lambdas registered with routing.

### Routing uses a pair of middleware

* **UseRouting**: adds route matching in the middleware pipeline.
* **UseEndpoints**: adds endpoint execution to the middleware pipeline.

**MapGet** method is used to define an *endpoint*.

A string like "/hey/{name:aplpha}" is a route template.

{name:alpha} is tied to a "name" parameter.

### Endpoint definition

* **Executable**: Has a RequestDelegate
* **Extensible**: Has a metadata collection.
* **Selectable**: Optionally, has routing information.
* **Enumerable**: The collection of nedpoints can be listed by retrieving the EndpointDataSource from DI.

Notes:

* The endpoint is always null before **UseRouting** is called.
* If a match is found, the endpoint is non-null between **UseRouting** and *UseEndpoints*.
* The **UseEndPoints** middleware is *terminal* when a match is found. **Terminal middleware** is defined later in this document.
