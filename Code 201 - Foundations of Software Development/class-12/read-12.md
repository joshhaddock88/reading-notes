# Reading Notes

## Chart.JS
- download Chart.js and add line in script.

- ad a **\<canvas> element to the HTML.

```js
const buyers = document.getElementByID('buyers').getContext('2d');
new Chart(buyers).Line(buyerData);
||
.Pie(pieData, pieOptions);
||
.Bar(barData);
```

## \<canvas>

### Basic Usage
- Has two attributes **width** and **height**.

The **id** attribute isn't specific to canvas.

The canvas begins blank. To fill it you need **.getContext**

### Drawing Shapes
Canvas grids have cordinates (x,y). The uppermost left hand corner is (0,0).

**fillRect(x, y, width, height)** draws a filled rectangle.

**strokeRect(x, y, width, height)** draws outline.

**clearRect(x, y, width, height)** draws clear rectangle.

**beingPath()** starts the drawing.

**moveTo()** the first path construction, and then subsequent points.

**closePath()** closes a shape by drawing a straight line to it's origin.

**createRadialGradient** can be used to create a fading effect on circular styles.

Images can be used to create patterns

You can also draw text.