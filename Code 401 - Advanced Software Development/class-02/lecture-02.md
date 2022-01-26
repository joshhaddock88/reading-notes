# Testing

## Why test?

- Check for predictable errors.

- Ensure against edgecases.

- Works as intended
    - Given **THIS** expect **THAT**

- Obey the API /input -> output shape

    - Application Programming Interface

        - DB

        - Remote service
    
    - The rules and mechanics of access.

Metaphor Time: Waiter is a server. You ask the Server for food. The waiter now goes to the cook to request the food. The waiter is no longer a Server, but a Client. The Cook is the now hte Server. The Waiter is an API and so is the cook. Any time you're asking for data and getting anything back you're working with an API.

- Pinning Yourself
    - Refactoring (produce the same output with better code)
    - Change implementation but not API.

Most of the time your visible bugs are from edgecases. Testing is all about accounting for the unknown.

What do you test?

- Test Pyramid

- Unit tests
    
    - A test which specifically tests a unit of work; usually a method.

- Acceptance Tests

    - User tests

    - Behavior tests

    - Does the APP work?
