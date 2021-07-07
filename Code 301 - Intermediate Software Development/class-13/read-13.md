## Status Code
HTTP status codes are numbers 100 > 600. It helps us interpret what happened.

**100-199**
- This is informational status codes; tells the client that the header request has been received and the server will try comply to the demand. It may send a different code when trying to load the body.

**200-299**
- Success codes. In a successful asynchronous request the client will receive code 202. This is happy code.

**300-399**
- Redirection codes. It tells the client that the resource is no longer available from the location requested, but offers a route for the client to follow if they so choose.

**400-499**
- Client error codes. Invalid requests, timeouts, miss authentication.

**500-599**
- Server errors. Often indicate and overwhelmed or unreachable servers.

**Custom Classes**
- This is code above 599. It is not allowed but some people use them anyway, so you may meet them in the wild.

### CRUD(Create, Read, Update, Delete)

**Create**

Implemented through HTTPs **POST** method. In RESTful APIs, these endpoints are used to create new resources or access tokens.
- **Status Codes**
  1. 200: Ok
  2. 201: Created
  3. 202: Accepted
  4. 303: See Other

**Read**

Read action gets implemented with the **GET** method and is used to fetch representations of a resources. Async funcs aren't much of a thing here.
- **Status Codes**
  1. 200: OK
  2. 206: Partial Content
  3. 300: Multiple Choices
  4. 308: Permanent Redirect
  5. 304: Not modified
  6. 307: Temporary Redirect


