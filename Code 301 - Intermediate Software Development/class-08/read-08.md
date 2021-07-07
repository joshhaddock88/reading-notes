## API Design Best Practices

**URI**: Uniform Resource Identifier.
**REST**: Representation State Transfer.

- REST API's are designed around **resources**
- Each resource has an identifier, which is a URI.

Clients interact with a service by exchanging *representations* of resources, not the resource itself.
Many API's use JSON as an exchange format.

The most common operation of REST APIs are
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE

- API's use a *stateless request model*.

**Taken from article**
**REST APIs are driven by hypermedia links contained in the representation**
```JSON
{
    "orderID":3,
    "productID":2,
    "quantity":4,
    "orderValue":16.60,
    "links": [
        {"rel":"product","href":"https://adventure-works.com/customers/3", "action":"GET" },
        {"rel":"product","href":"https://adventure-works.com/customers/3", "action":"PUT" }
    ]
}
```
### Lenoard Richardson's *Maturity Model*

1. Level 0: Define one URI, and all operations are POST requests to this URI.
2. Level 1: Create separate URIs for individual resources.
3. Level 2: Use HTTP methods to define operations on resources.
4. Level 3: Use hypermeida (HATEOAS).
Level 3 responed to a RESTful API.

**GET**: retrieves a representation of the resource at the specified URI. The body of the response message contains the details of the requested resource.

**POST**: Creates a new resource at the specified URI. The body of the request message provides the details of the new resource. Note that POST can also be used to trigger operations that don't actually create resources.

**PUT**: Either creates or replaces the resource at teh specified URI. The body of the request message specifies the resource to be created or updated.

**PATCH**: Performs a partial update of a resource. The request body specifies the set of changes t oapply to the resource.

**DELETE**: removes the resource from the specified URI.

### Media Types

- POST requests contain a representation of the resource to create.
- GET requests contained a representation of the fetched resource.
- HTTP protocal dictates formats through *media types*, also called **MIME** types.
- For non-binary data, APIs support JSON and sometimes XML..
- The *Content-Type* header in a request or response specifies the format of the representation.

```HTTP
POST https://adventure-works.com/orders HTTP/1.1
Content-Type: application/json; charset=utf-8
Content-Length: 57

{"Id":1,"Name":"Gizmo","Category":"Widgets","Price":1.99}
```

A client request can include an *Accept* header
```HTTP
GET https://adventure-works.com/orders/2 HTTP/1.1
Accept: application/json
```

- Successful **GET** returns **status code 200(OK)**
- If **POST** create a new resource, it returns **status code 201(Created)**
- **PUT** is trickier
  - **201** for creating new resource.
  - **200** for an update.
  - **204(No Content)** if there's nothing to update.
  - **409(Conflict)** if it's impossible to update.
