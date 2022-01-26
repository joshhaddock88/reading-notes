# Read 02: Unit Tests and Documentation

## Unit Testing Best Practices

What is **Unit Testing**? It tests that isolate specific *units* of code.

In C# A *unit* can be a **Method** or sometimes **Class**.

### Best Practices

1. Arrange, Act, Assert

Lean heavily on the scientific method to understand. Consider your test as a hypothesis.

2. One Assert Per Test Method

You can have multiple test methdos, but only one assertion per.

3. Avoid interdependence

Each test should handle itself.

4. Keep It Short, Sweet, and Visible

Bite off the tiniest piece possible.

5. Recognize Test Setup Pain as a Smell

Tests provie excellent feedback on the design of code, speicifically it's modularity.

6. Add Them to the Build

If any test fails, then the build fails. No exceptions.

## Art of README

### Etymology

Nobody is exacly sure, though some have suggested Lewis Carroll, but the intent is clear.

### For Creators, for consumers 

Every module author is also a module consumer.

The README helps with longevity. Once a module has been abandoned by all human caretaking the README continues to educate and unlock it for progeny.

### Your Job, README writer

1. tell them what it is(withcontext)

2. show them what it looks like in action

3. show them how they use it

4. tell them any other relevant details

### Brevity

A lack of README can be a big red flag, but keep the them succinct.

### Key Elements

1. Name

2. One-Liner

3. Usage

4. API

5. Installation

6. License

### Bonus

1. Consider including a **Background** section.

2. Aggressively link to other modules, ideas, people etc.

3. Include information on types of args and params.

4. Include example code in a Usage file.

5. Be judicious in your use of badges. They add visual noise to a README and only function if the user is reading the Markdown in a broswer online.

6. Use whatever API formatting you think is clearest.
