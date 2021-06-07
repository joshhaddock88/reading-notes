# Reading Notes

## What Google Learned About Teams

- There aren't a lot of overlap of specific qualities or personality types which seperate an effective team form an ineffective one.
- The main component is phsycological safety. People need to know that they are in a safe space to work the most effectively.
- We need to be ourselves at home and at work, and we need to be able to speak.
- In the most effective teams, on average, each groups member spoke for roughly the same amount of time.

## CSS Transforms

Transform syntac is quite simple: transform property followed by a value.

- 2D transformation accepts a handful of values
  - **rotate(20deg)**: the rotate value followed by the number of degrees.
  - **scale(1.25)**: increases or decreases size.
    - **scaleX(.5)**: scales on the x-axis.
    - **scaleY(1.4)**: scales on the Y-axis.
    - **scale(.5, 1.4)**: scales on the x-axis and y-axis.
  - **translate**: similar to float. You can x or y translate *exactly* like scale.
  - **skew(5deg)**: distorts on a horizontal axis. Can go x, y, or both.

You can combine various transformations for effects. For instance, you can create a cube.
```css
.cube {
  position: relative;
}
.side {
  height: 95px;
  position: absolute;
  width: 95px;
}
.top {
  background: #9acc53;
  transform: rotate(-45deg) skew(15deg, 15deg);
}
.left {
  background: #8ec63f;
  transform: rotate(15deg) skew(15deg, 15deg) translate(-50%, 100%);
}
.right {
  background: #80b239;
  transform: rotate(-15deg) skew(-15deg, -15deg) translate(50%, 100%);
}
```
