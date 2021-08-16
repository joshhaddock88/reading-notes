# Read 16 - DTO's

## Create Data Transfer Objects (DTOs)

### Reasons to shape data before the client sees it

* Remove circular references
* Hide specific properties from client.
* Omit props to reduce payload size.
* Flatten objc graphs which contained nested objects.
* Avoid "over-posting" vulnerabilities.
* Decouple your service layer from database layer.

To do it: define a DTO.

Put the DTO inside of the GET, so that the get method only grabs the properties from the DTO, rather than the entire object. Then you have to update POST as well.

## How to use Data Transfer Objects

By decoupling layers it can become easir to implement API's, MVC apps, and Message Broker.

You can use them for abstraction.

You can use them for data hiding.

DTOs are often serialized so that they can be independant of technology. They are immutable.
