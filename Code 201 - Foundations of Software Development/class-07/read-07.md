# Chapter 3, JavaScript
## Functions, Methods, and Objects

### Constructor notation
```js
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailibility = function(){
    return this.rooms - this.booked;
  }
}
```
**constructor** functions being with a **CAPITAL** letter, unlike other functions. This is to remind developers to use a new keyword when they create their next object.
```js
const parkHotel = new Hotel('Park', 120, 77);
```
**literal notation**
```js
const hotel = {}

hotel.name = 'Park';
hotel.rooms = 40;
```
**Object Constructor notation**
```js
const hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 40;
```

Things in the global context are within the **window** object.

Arrays are objects with indexs for property names.

### Three Groups of Built-In Objects
1. Browser Object Model
2. Document Object Model
3. Global JavaScript Objects

We used window object modeld when **alert**

String Methods on pp 128

### Global Number Object
**toFixed()**
**isNaN()**

### Math Object
- **Math.round()**
- **Math.floor()**
- **Math.random()**

### Date Object & Time
full list on pp 137

# Chapter 6, HTML
## Tables

```html
<table>
```
**\<tr>** table row

**\<td>** table data

**\<th>** table heading. Used just like td but used to represent the heading of either a column or row.

**\<td rowspan="2">** allows a td to take up two rows.

**\<thead>** for table headings

**\<tbody>** all \<td> \<tr> etc belond in \<tbody>

**\<tfoot>** footer belongs inside the footer element.