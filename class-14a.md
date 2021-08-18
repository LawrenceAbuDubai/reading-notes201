#  CSS Transforms, Transitions, and Animations

## Transforms

CSS3 introduced additional methods for positioning and modifying components. Alternative approaches to size, position, and modify components may now be used to review general layout techniques. The transform property allows for all of these new approaches.
There are two types of transform properties: two-dimensional and three-dimensional. Each of them has its own set of characteristics and values.
We'll look at both two-dimensional and three-dimensional transforms in this session. In general, browser support for the transform property isn't excellent, but it's improving all the time. Vendor prefixes are recommended for the best support, however you may need to download them.

Transform Syntax

div {
  -webkit-transform: scale(1.5);
     -moz-transform: scale(1.5);
       -o-transform: scale(1.5);
          transform: scale(1.5);
}

The transform property's syntax is straightforward, consisting of the transform property followed by the value. Within parentheses, the value specifies the transform type, followed by a specific amount.

Take note of how the transform property includes various vendor prefixes for cross-browser compatibility. The un-prefixed declaration comes last to overwrite the prefixed versions, should a browser fully support the transform property.


The remainder of this course will not contain vendor prefixes for the sake of brevity. They are, nevertheless, strongly recommended for any code that will be used in a production setting. We will be able to remove these prefixes over time, but for the time being, we will maintain them.

2D Transforms
Elements may be distorted, or transformed, on both a two-dimensional plane or a three-dimensional plane. Two-dimensional transforms work on the x and y axes, known as horizontal and vertical axes. Three-dimensional transforms work on both the x and y axes, as well as the z axis. These three-dimensional transforms help define not only the length and width of an element, but also the depth. We’ll start by discussing how to transform elements on a two-dimensional plane, and then work our way into three-dimensional transforms.

2D Rotate
The transform property accepts a handful of different values. The rotate value provides the ability to rotate an element from 0 to 360 degrees. Using a positive value will rotate an element clockwise, and using a negative value will rotate the element counterclockwise. The default point of rotation is the center of the element, 50% 50%, both horizontally and vertically. Later we will discuss how you can change this default point of rotation.

HTML

<figure class="box-1">Box 1</figure>
<figure class="box-2">Box 2</figure>

              
CSS

.box-1 {
  transform: rotate(20deg);
}
.box-2 {
  transform: rotate(-55deg);
}


The gray box behind the rotated element symbolizes the original position of the element. Additionally, upon hover the box will rotate 360 degrees horizontally. As the lesson progresses, keep an eye out for the gray box within each demonstration as a reference to the element’s original position and the horizontal rotation to help demonstrate an elements alteration and depth.

2D Scale
Using the scale value within the transform property allows you to change the appeared size of an element. The default scale value is 1, therefore any value between .99 and .01 makes an element appear smaller while any value greater than or equal to 1.01 makes an element appear larger.

HTML

<figure class="box-1">Box 1</figure>
<figure class="box-2">Box 2</figure>

              
CSS

.box-1 {
  transform: scale(.75);
}
.box-2 {
  transform: scale(1.25);
}


It is possible to scale only the height or width of an element using the scaleX and scaleY values. The scaleX value will scale the width of an element while the scaleY value will scale the height of an element. To scale both the height and width of an element but at different sizes, the x and y axis values may be set simultaneously. To do so, use the scale transform declaring the x axis value first, followed by a comma, and then the y axis value.

HTML

<figure class="box-1">Box 1</figure>
<figure class="box-2">Box 2</figure>
<figure class="box-3">Box 3</figure>

              
CSS

.box-1 {
  transform: scaleX(.5);
}
.box-2 {
  transform: scaleY(1.15);
}
.box-3 {
  transform: scale(.5, 1.15);
}