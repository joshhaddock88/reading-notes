# Partner Power Hour

## Report 2

**Speaker**: Emily Kapor-Mater

**Topic**: GraphQL

Representational State Transfer (REST)



To look up how to use this, check out GraphQLZero (Fake online GraphyQL API for testing and prototyping)
* Zero-config, no registration, compatible, with React, Angular, Vue, and more.

A mutation is a graphQL request that changes something. Everything in CRUD except "read". No need to worry about the semantics of "put".


TypeScript = JavaScript with types.

```js
GET /api/shelters // list of all shelters
GET /api/shelters/:id //one shelter by its ID number
GET /api/pets/:id //one pet by it's ID number

POST /api/shelters // add new shelter
POST /api/pets // add new pet

PUT /api/shelters/:id // edit a shelter

DELETE /api/shelters/:id

"pets": [
    {
        "id": "1",
        "kind": "dog",
        "breed": "poodle",
        "name": "Casper",
        "photoUrl": "whatever"
    }, 
    {
        ...
    }
]
```

So what is GraphQL?

A way to get all the data with a single query

__________________________________

```js
Endpoint /api/graphql

query {
    shelters {
        name
        pets {
            kind
            breed
            name
            photoUrl
        }
    }
}
```

```js
import { useQuery } from 'apollo-client'

const GET_PETS_BY_SHELTER = gql'
    query GetPetsByShelter {

    }

```
```js

mutation CreatePost(
    $input: CreatePoistInput!
) {
    createPost

}
```

```js
mustation DeletePost(
    $id: ID!
) {
    deletePost(id: $id)
}
```

We're going to learn REST, which is a pattern that will be around for a very long time. Once you understand REST, though, it will be a lot easier to transition into something like graphQL. GraphQL will become something very similar to rest.

Emily is working on an open source project called "Gatsby".
