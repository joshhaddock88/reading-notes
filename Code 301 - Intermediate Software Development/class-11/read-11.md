# Reading Notes 11

**OAuth** is an open-standard authorization protocol.

- An example of *OAuth* is when you try to log into a website and are given multiple opportunities to do so.

- It is the process of a user proving ownership.

How It Works

1.  First website connects to the second, for the user, using OAuth, providing the user's verified identity.
2. Second site generate a one-off token and one-time secret unique to the transaction and parties.
3. First site gives token and secret to client software.
4. Client software presents the request token and secret to their authorization provider.
5. If not already authoticated, suer may be asked to authoticate. After authication, the client is asked to approve authorization to second website.
6. User approves, a particular transaction type happens at fist site.
7. User is given approces access token.
8. User give approved token to the first website.
9. First site gives token to second site.
10. Second site gives first site access to their site.
11. User sees a completed transaction occur.

That is a basic flow but there are various flows depending on how authorization occurs. These can be:

- Authorization Code Flow with Proof Key for Code Exchange
- Implicit Flow with Form Post
- Hybrid Flow
- Client Credentials Flow
- Device Authorization Flow
- Resource Owner Password Flow