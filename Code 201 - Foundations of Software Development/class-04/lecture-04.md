# Lecture Notes

## Display and Position
- Two properties that will help contribute to getting layout to look how you want.

Display inline puts elements in line with other around it. You cannot put properties like width or height to it.

**inline-block**
- compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.

- Also , with display: inline-block, the top and bottom margins/paddins are respected, but with display: inline they are not.

- Compared to display: block, the major difference is that display: inline-block does not add a line-break afte rthe element, so the element can sit next to other elements.

## display: block
- Display an element as a block elelemtn (like \<p>). It starts on a new line, and takes up the whole width of it's containing element.

## Positioning
- 2 types
  - static (default)
  - relative-type
    - relative (needs other values to say where something will sit relative to this position)
    - absolute
    - fixed
      - sticky

## Static is standard - where it normally sits

### Position Relative
Elements that are 'positiong: relative' can be mvoed out of their normal flow position while still taking up the same space. This is acheived by utilising those offset properties (top, bottom, left, right) to offset the element, relative to itself.

### Position Aboslute
Essentially does the same thing as position: relative, with two key differences:
The element is taken out of normal flow and leaves no space behind.
The element is positioned relative to its nearest parent with a relative-tiype(relative, absolute fixed) positioning.

### Position Fixed
Fixed is the same as aboslute with one key difference: The element is positioned relative to the viewport.

## Functions
- a new datatype

### what
- a function is a group of statement that perform a task or calculate a value, stored within a structure that prevents them from running until the function is **called** or **invoked**.

### why
- Functions are REUSABLE!
- Functions make our code DRY
- PREVENT BUGS

#### Monday
- Pour ingredients into a bowl
- mix ingredients for three minutes
- pour batter into a pan
- bake for 40min at 350

#### Tuesday
- Pour ingredients into a bowl
- mix ingredients for three minutes
- pour batter into a pan
- bake for 40min at 350

#### Wednesday
- Pour ingredients into a bowl
- mix ingredients for three minutes
- pour batter into a pan
- bake for 40min at 350

^ This is verbose. Instead

```javascript
function bakeACake() {
  pour ingredients into a bowl
  mix ingredients for 3 minutes
  pout the batter into pan
  bake or 40min at 350
}
```
#### Monday
- bakeACake()
#### Tuesday
- bakeACake()

Functions **always** return something in JavaScript.

**Parameters** are variables
**Arguments** are values

Fork - check that it has you rname.
Make sure to change base repository before you commit/push.

pull requests

Make sure to pull origin main to your computer.