# CSS layout 

We'll look at how to control where each element on a page resides and how to construct appealing layouts in this chapter.

Layouts for pages

This entails learning about how to design for a screen.

Designing for other mediums is not the same as designing for the web (such as print). In this case,

In this chapter, we'll:

Using normal flow, relative positioning, absolute positioning, and floats, experiment with different approaches to position items.
Learn how screen sizes and resolution fluctuate between devices and how this influences the design process.
Find out what the differences are between fixed width and liquid layouts, as well as how they're made.
Learn how to use grids in your page designs to make them look more professional.

## Key Concepts in Positioning Elements

Each HTML element is treated as if it were in its own box by CSS. Either a block-level box or an inline box will be used for this box.
Inline boxes flow between surrounding text, but block-level boxes start on a new line and operate as the basic building elements of any arrangement. By adjusting the width of the boxes, you can decide how much space each one takes up (and sometimes the height, too). Borders, margins, padding, and background colors can all be used to separate boxes.

The outer box of a block-level element that resides inside another block-level element is known as the contained or parent element.
Within a (or other block-level) element, it's customary to group a lot of elements together. You could, for example, collect together all of the elements that make up a site's header (such as the logo and the primary menu). The contained element is the element that holds this set of items together.



Elements are represented by the orange lines in this diagram. One element contains the logo and navigation, another has the main content of the page, and a third contains the footer.


Normal flow, relative positioning, and absolute positioning are the three CSS positioning schemes that allow you to control the layout of a page. The position property in CSS is used to indicate the positioning system. The float attribute can also be used to float items. Normal flow Each block-level element appears on a new line, leading each item to seem lower down the page than the one before it.
Even if the box widths are specified and there is enough room for two items to sit next to each other, they will not display next to each other. This is the browser's default behavior (until you tell it otherwise).

Relative Positioning shifts an element from its typical flow position to the top, right, bottom, or left of where it would have been. The position of surrounding elements is unaffected; they remain in the same position as they would be in regular flow.

Absolute placement sets the element's position with reference to its parent element. It is removed from the regular flow, which means it has no effect on the location of any nearby elements (because they just ignore the space it would have taken up).
As visitors scroll up and down the page, elements that are absolutely positioned move.

### Normal Flow

<body>
<h1>The Evolution of the Bicycle</h1>
<p>In 1817 Baron von Drais invented a walking
 machine that would help him get around the
 royal gardens faster...</p>
</body>

body {
width: 750px;
font-family: Arial, Verdana, sans-serif;
color: #665544;}
h1 {
background-color: #efefef;
padding: 10px;}
p {
width: 450px;}

Each block-level element lies on top of the one before it in normal flow. Because this is how browsers treat HTML elements by default, you don't need a CSS attribute to specify that they should display in regular flow, but the syntax would be:
position: static; because I haven't given the heading element a width property, you can see how it expands the width of the full browser window by default.
The width of the paragraphs is limited to 450 pixels. This illustrates how components in normal flow begin on a new line even if they do not fill the entire browser window.

### Relative Positioning

<body>
<h1>The Evolution of the Bicycle</h1>
<p>In 1817 Baron von Drais invented a walking
 machine that would help him get around the
 royal gardens faster...</p>
</body>

p.example {
position: relative;
top: 10px;
left: 100px;}

In relative placement, an element is moved in respect to where it would be in regular flow.
You can, for example, move it 10 pixels lower or 20 percent to the right than it would have been in regular flow.
The position property with a value of relative can be used to specify that an element should be positioned relatively.
The offset properties (top, bottom, left, and right) are then used to specify how far the element should be moved from where it would have been in normal flow.
You can use the top or bottom properties to shift the box up or down.
You can use the left or right properties to shift the box horizontally.
The box offset attributes are normally specified in pixels.

### Absolute Positioning

<body>
<h1>The Evolution of the Bicycle</h1>
<p>In 1817 Baron von Drais invented a walking
 machine that would help him get around the
 royal gardens faster...</p>
</body>

h1 {
position: absolute;
top: 0px;
left: 500px;
width: 250px;}
p {
width: 450px;}

When the position attribute is set to absolute, the box is removed from the usual flow of the page and no longer impacts the position of other items. (They function as if it doesn't exist.) The box offset parameters (top, bottom, left, and right) describe where the element should appear in reference to its parent element.
The header has been placed at the top of the page, 500 pixels from its left edge in this example. The heading's width has been set to 250 pixels.
In this example, the width attribute has been added to the p> components to avoid the text from overlapping and becoming unreadable.

### Fixed Positioning

<body>
<h1>The Evolution of the Bicycle</h1>
<p class="example">In 1817 Baron von Drais
 invented a walking machine that would help him
 get around the royal gardens faster...</p>
</body>

h1 {
position: fixed;
top: 0px;
left: 50px;
padding: 10px;
margin: 0px;
width: 100%;
background-color: #efefef;}
p.example {
margin-top: 100px;}

Fixed positioning is a sort of absolute positioning that necessitates a fixed value for the position attribute.
The element is positioned in reference to the browser window.
As a result, when a user scrolls down the page, it remains in the same spot. To observe the effect, you should try this example in your browser.
The box offset settings are used to regulate where the fixed position box displays in reference to the browser window.
The header has been placed in the top left hand corner of the browser window in this example. The paragraphs disappear below the headline as the user scrolls down the page.
The elements are in a natural flow and are unconcerned with the space they are in.

### Floating Elements


<h1>The Evolution of the Bicycle</h1>
<blockquote>"Life is like riding a bicycle.
 To keep your balance you must keep moving." -
 Albert Einstein</blockquote>
<p>In 1817 Baron von Drais invented a walking
 machine that would help him get around the royal
 gardens faster: two same-size in-line wheels, the
 front one steerable, mounted in a frame ... </p>

 blockquote {
 float: right;
 width: 275px;
 font-size: 130%;
 font-style: italic;
 font-family: Georgia, Times, serif;
 margin: 0px 0px 10px 10px;
 padding: 10px;
 border-top: 1px solid #665544;
 border-bottom: 1px solid #665544;}


 The float attribute allows you to place an element in normal flow as far to the left or right as feasible from the contained element.
Anything else that is contained within the containing element will flow around the floated element.
You should utilize the width property in conjunction with the float property to specify how wide the floating element should be. If you don't, the results may be erratic, but the box will almost certainly take up the entire width of the contained element (as it would in normal flow).
A quotation is held in this example by an element. The element is the element's containing element.



