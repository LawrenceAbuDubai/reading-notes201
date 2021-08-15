# css

Using CSS to control the size and alignment of your images keeps rules that effect the appearance of your page out of the HTML text.
Background pictures can also be used to create a variety of intriguing effects. In this chapter, you'll learn how to: Specify an image's size and alignment using
Create picture rollovers in CSS by adding background images to boxes.

## Controlling sizes of images in CSS

<img src="images/magnolia-large.jpg"
 class="large" alt="Magnolia" />
<img src="images/magnolia-medium.jpg"
 class="medium" alt="Magnolia" />
<img src="images/magnolia-small.jpg"
 class="small" alt="Magnolia" />

 img.large {
width: 500px;
height: 500px;}
img.medium {
width: 250px;
height: 250px;}
img.small {
width: 100px;
height: 100px;}

The width and height attributes in CSS may be used to control the size of an image, just as they can be used to control the size of any other box.
Because the HTML and CSS code generally loads before the images, giving the browser how much space to allocate for an image allows it to generate the remainder of the page without having to wait for the image to download helps pages load more quickly.
You might imagine that your website will feature photos of various sizes, however many websites use the same image size throughout multiple pages.

For example, product photographs on an e-commerce site are usually displayed at the same size. Alternatively, if your site is grid-based, you may have a set of picture sizes that are regularly used across all pages, such as:
220 × 360 pixels for a little portrait
330 x 210 pixels for a little landscape
Featured image: 620 x 400 pixels
Instead of specifying the dimensions in the HTML, you can use CSS to control the dimensions of the images whenever you utilize consistently sized images across a site.

You must first decide the sizes of photos that will be used often throughout the site, and then name each size.
For instance, small, medium, and huge
Instead of utilizing the width and height attributes where the img> components occur in HTML, you can utilize these names as values for the class attribute.
You add selectors for each of the class names in CSS, then adjust the picture proportions with the CSS width and height attributes.

## AligNing images 

You saw how the float property may be used to move an element to the left or right of its contained block, allowing text to flow around it, in the previous chapter.
Web page authors are increasingly employing the float property to align pictures instead of the element's align attribute. This is usually accomplished in one of two ways:
1: The float attribute is applied to the class that was constructed to represent the picture size (in our case, the tiny class).
2: To align the photos to the left or right of the page, new classes with names like align-left or align-right are created.
In addition to classes that identify the image size, these class names are utilized.

**note : It is also common to add a margin to the image to ensure that the text does not touch their edges.**

<p><img src="images/magnolia-medium.jpg"
 alt="Magnolia" class="align-left medium" />
 <b><i>Magnolia</i></b> is a large genus that
 contains over 200 flowering plant species...</p>
<p><img src="images/magnolia-medium.jpg"
 alt="Magnolia" class="align-right medium" />
Some magnolias, such as <i>Magnolia stellata</i>
 and <i>Magnolia soulangeana</i>, flower quite
 early in the spring before the leaves open...</p>

 img.align-left {
float: left;
margin-right: 10px;}
img.align-right {
float: right;
margin-left: 10px;}
img.medium {
width: 250px;
height: 250px;}


## Centering images Using C

Images are inline items by default. This implies they blend in with the rest of the text.
To center a picture, use the display property with the value block to transform it into a blocklevel element.
There are two typical approaches to horizontally center a picture once it has been converted into a block-level element:
1: Use the text-align property with a value of center on the contained element.
2: Use the margin attribute on the image itself and set the left and right margins to auto.
In the same manner that you may define class names for picture size and alignment, you can specify class names that allow any element to be centered.

<p><img src="images/magnolia-medium.jpg"
 alt="Magnolia" class="align-center medium" />
 <b><i>Magnolia</i></b> is a large genus that
 contains over 200 flowering plant species. It
 is named after French botanist Pierre Magnol and,
 having evolved before bees appeared, the
 flowers were developed to encourage pollination
 by beetle.</p>

 img.align-center {
display: block;
margin: 0px auto;}
img.medium {
width: 250px;
height: 250px;}


## Background Images background-image

body {
background-image: url("images/pattern.gif");}

You can use the background-image property to put an image behind any HTML element. This could be the whole page or only a portion of it. A background picture will repeat to fill the entire box by default.
The image's path is enclosed in parenthesis and quotes and begins with the letters url.
The image tile that was utilized in this example is shown below.
Because the CSS selector applies to the body> element in the first example, a background image is applied to the entire page.
The background picture in the second example only applies to a paragraph.


## Repeating Images background-repeat background-attachment

There are four possible values for the background-repeat property:
repeat
The background picture is repeated both horizontally and vertically (as is the case if the backgroundrepeat parameter is not set).
repeat-x Only the horizontal portion of the image is repeated (as in the first example on the left).
repeat-y
Only the vertical portion of the image is repeated.
no-repeat
The image appears only once.
The background-attachment attribute controls whether a background picture remains static or moves as the user scrolls up and down the page. It can be one of two types of values:
fixed
On the page, the background image remains in the same place.

body {
background-image: url("images/header.gif");
background-repeat: repeat-x;}

body {
background-image: url("images/tulip.gif");
background-repeat: no-repeat;
background-attachment: fixed;}