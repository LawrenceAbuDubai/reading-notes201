# read05

## HTML

### images 

There are a variety of reasons why you might wish to include an image on a web page, including a logo, photograph, illustration, diagram, or chart.

When choosing and creating photos for your website, there are various factors to consider, but taking the time to get them correctly will make it look more attractive and professional.
This chapter will teach you how to:

Include an image in your web pages using HTML; choose an image format; display an image at the appropriate size; optimize an image for web use to make pages load faster.
In less time than it takes to read a description, images may be utilized to define the tone for a website. If you don't have any photographs for your website, there are companies that sell stock images, which are images that you pay to use (a list of stock photography websites can be found below).
Remember that all images are protected by copyright, and merely copying photos from another website might get you in trouble.
If you have a website with multiple images (such as product photos or team members), putting them on a simple, consistent background will help them look more cohesive.

Images should...
+ Be relevant
+ Convey information
+ Convey the right mood
+ Be instantly recognisable
+ Fit the color palette

Keeping photos in a distinct folder as a website expands will assist you comprehend how the site is arranged. You can see an example of a website's files here; all of the images are placed in the images folder.
If you have a large site, you may want to create subfolders within the photos folder. Images such as logos and buttons, for example, might be stored in a folder named interface, product shots in a page called products, and news-related images in a folder called news.
If you're using a content management system or a blogging platform, there are usually features integrated into the admin site that let you upload images, and the software will almost certainly already have a separate folder.

<img src="images/quokka.jpg" alt="A family of quokka" title="The quokka is an Australian marsupial that is similar in size to the domestic cat." />

You must use an element to insert an image into the page. There is no closing tag on this element, so it is empty. It must possess the following two characteristics:
src
This instructs the browser on where to look for the image file. This is normally a relative URL to an image on your own website. (Note that the images are in a child folder called images; relative URLs were discussed on pages 83-84.)
alt
This gives you a text explanation of the image, which you can read if you can't see it.
title
You may also utilize the element's title attribute to convey more information about the image. The content of this attribute will be displayed as a tootip in most browsers.

Alt text is the name given to the text used in the alt attribute.
It should provide a detailed description of the image's content so that screen reader software (used by individuals with visual impairments) and search engines can understand it.
The alt attribute should still be used, but the quotations should be left empty if the picture is only to make a page look more attractive (and it has no meaning, such as a graphic dividing line).

An image> element will frequently employ two other characteristics to indicate its size:
height
This value represents the image's height in pixels.
width
This determines the image's width in pixels.
The HTML code that makes up the rest of the page often takes longer to load than images.
As a result, it's a good idea to define the image's size so that the browser can render the rest of the content on the page while still allowing enough room for the image that's still loading.
Image sizes are increasingly being supplied using CSS rather than HTML.

<img src="images/bird.gif" alt="Bird" width="100"height="100" />
<p>There are around 10,000 living species of birds that inhabit different ecosystems from the Arctic to the Antarctic. Many species undertake long distance annual migrations, and many more perform shorter irregular journeys.</p><hr />
<p><img src="images/bird.gif" alt="Bird" width="100"height="100" />There are around 10,000 living species of birds that inhabit different ecosystems from the Arctic to the Antarctic. Many species undertake long distance annual migrations, and many more perform shorter irregular journeys.</p><hr />
<p>There are around 10,000 living species of birds that inhabit different ecosystems from the Arctic to the Antarctic.<img src="images/bird.gif" alt="Bird" width="100"height="100" />Many species undertake long distance annual migrations, and many more perform shorter irregular journeys.</p>

The placement of an image in the code has an impact on how it is shown. Here are three image placement examples that create various outcomes:
1: at the start of a paragraph
After the image, the text begins on a new line.
2: at the beginning of a paragraph
The bottom of the image is aligned with the first row of text.
3: in the middle of a paragraph The image is placed in the middle of the text in which it appears.

It's crucial where you put the image in the code since browsers display HTML elements in one of two ways:
On a new line, block elements always appear. The and are examples of block elements.


elements.
If a block level element (such as a paragraph) follows the image, the block level element will appear on a new line following the image, as illustrated in the first example on this page.
Inline elements are those that are contained within a block level element and do not begin on a new line. The elements, and are examples of inline elements.
Any text or other inline elements will flow around the image if the element is inside a block level element, as illustrated in the second and third instances on this page.

The align attribute was once widely used to specify how the rest of the page should flow around an image. It has been deprecated in HTML5, and new websites should now use CSS to handle picture alignment (as shown on pages 411-412).
I've included it here because you're likely to run into it if you look at older code, and since certain visual editors still use it to indicate how an image should be aligned.
These horizontal values can be used with the align attribute:
left
The image will be aligned to the left, allowing text to flow around its right side.
right Aligns the image to the right (allowing text to flow around it on the left).


# css

### colors

Foreground Color

You can use the color property to change the color of text inside an element. CSS allows you to specify any color in one of three ways:
values in rgb
These describe colors in terms of the proportions of red, green, and blue utilized to create them. For \sexample: rgb(100,100,90)
hexadecimal codes
These are six-digit codes preceded by a pound or hash # sign that reflect the amount of red, green, and blue in a color. Consider the following scenario: Color names for #ee3e80
Browsers recognize 147 color names that have been predefined. Consider the following scenario:
DarkCyan
On the next double-page spread, we'll look at three different approaches to specify colors.

In this example, you can see how CSS allows you to add comments to your CSS files above each CSS rule. The browser will not interpret anything between the /* symbols and the */ symbols.
They are depicted in grey in the image above.
Comments can assist you in understanding a CSS file (as well as organizing it by dividing a large document into pieces).
We've used comments to show which method is used to declare each of the many color categories.

Each HTML element is treated as if it were in a box, and the background-color parameter determines the color of the box's backdrop.
Background colors can be specified in the same three ways that foreground colors can be specified.

Computer monitors are made up of hundreds of tiny squares called pixels (which you should be able to see if you look closely at your monitor).
The screen is black when it is not turned on because it does not emit any light. When it's turned on, each pixel can be a different hue, resulting in the creation of an image.
Every pixel on the screen is colored by a combination of red, green, and blue, precisely like on a television screen.

Image editing systems like Photoshop and GIMP have color selecting options. The RGB values are specified adjacent to the R, G, and B radio buttons.
Next to the pound or hash # symbol is the hex value. There's also a useful color picker here.

The opacity property is new in CSS3, and it allows you to set the opacity of an element and any of its descendant elements.
The value is a number between 0.0 and 1.0 (for example, 0.5 represents 50% opacity and 0.15 represents 15% opacity).
The CSS3 rgba property lets you describe a color in the same way as an RGB value would, but with the addition of a fourth value to indicate opacity. An alpha value is a number between 0.0 and 1.0 that represents the degree of opacity (for example, a value of 0.5 represents 50% opacity and 0.15 represents 15% opacity). Only the element on which the rgba value is applied will be affected (not child elements).
Because some browsers will not understand RGBA colors, you can provide a solid color as a fallback.

Summary COLOR :

X Color not only brings your site to life, but also helps
convey the mood and evokes reactions.
X There are three ways to specify colors in CSS:
RGB values, hex codes, and color names.
X Color pickers can help you find the color you want.
X It is important to ensure that there is enough contrast
between any text and the background color (otherwise
people will not be able to read your content).
X CSS3 has introduced an extra value for RGB colors to
indicate opacity. It is known as RGBA.
X CSS3 also allows you to specify colors as HSL values,
with an optional opacity value. It is known as HSLA.

### text :

Specifying Typefaces

The font-family property lets you select the typeface to use for any text within the element(s) to which a CSS rule applies.
The name of the typeface you want to employ is the value of this attribute.
Visitors to your site will need to have the typeface you specified installed on their computer in order for it to be shown.
You can specify a list of fonts separated by commas so that the browser can try to use an alternate font from the list if the user does not have your initial choice installed.
Ending with a generic font name for that sort of typeface is also typical.

<!DOCTYPE html>
<html>
<head>
 <title>Font Family</title>
 <style type="text/css">
 body {
 font-family: Georgia, Times, serif;}
 h1, h2 {
 font-family: Arial, Verdana, sans-serif;}
 .credits {
 font-family: "Courier New", Courier,
 monospace;}
 </style>
</head>
<body>
 <h1>Briards</h1>
 <p class="credits">by Ivy Duckett</p>
 <p class="intro">The <a class="breed" href="http://en.wikipedia.org/wiki/Briard">briard</a>, or berger de brie, is a large breed of dog traditionally used as a herder and guardian of sheep...</p>
</body>
</html>

The font-size attribute allows you to set the font's size. A font's size can be specified in a variety of ways. The most prevalent are: pixels, pixels, pixels, pixels, pixels, pixels, pixels,
Pixels are popular because they provide site designers a lot of control over how much space their content takes up. The letters px are followed by the number of pixels.
percentages
In most browsers, text is set to 16px by default. As a result, a size of 75% would be 12px, while a size of 200 percent would be 32px.
If you write a rule to make all text inside the element 75% of the default size (to make it 12px), and then another rule to make the content of an element inside the element 75% size, the result will be 9px (75 percent of the 12px).

body {
font-family: Arial, Verdana, sans-serif;
font-size: 12px;}
h1 {
font-size: 200%;}
h2 {
font-size: 1.3em;}

The font-size attribute allows you to set the font's size. A font's size can be specified in a variety of ways. The most prevalent are: pixels, pixels, pixels, pixels, pixels, pixels, pixels,
Pixels are popular because they provide site designers a lot of control over how much space their content takes up. The letters px are followed by the number of pixels.
percentages
In most browsers, text is set to 16px by default. As a result, a size of 75% would be 12px, while a size of 200 percent would be 32px.
If you set a rule that specifies that all text inside the element should be 75 percent of the default size (to make it 12px), and then another rule that specifies that the content of an element inside the element should be 75 percent of the default size (to make it 12px),

It will be 9px (75 percent of the 1 inch) in size.

Type Scales

This is due to the fact that they are fixed to a scale or ratio devised by European typographers in the sixteenth century.
This type scale is seen to be attractive to the sight, and as a result, it hasn't altered much in the last 400 years.
As a result, choosing sizes from this scale while developing pages will make them look more appealing.
On the next page, you'll see how to use pixels, percentages, and ems to accomplish this scale.
The size of text is frequently expressed in points rather than pixels by print designers (thus the usage of pt in the scale on the right). Because a point equals 1/72 of an inch, a pixel is roughly equivalent to a point on most computer displays.

Text in a browser is 16 pixels wide by default. So, if you use percentages or ems, you compute the text size you want based on the browser's default text size.
For example, body copy may be scaled down to 12 pixels, but headings could be scaled up to 24 pixels.
Some site designers have recently begun to leave the body text at the default size of 16 pixels and modify the font sizes of the other fonts using a scale that maintains the relative proportions of this one.
When you first read 16-pixel body text, it may appear to be rather huge. Most individuals, however, find it much simpler to read once they've become used to the larger type, and returning to a page where the main text is 12 pixels will typically result in the same result.

@font-face allows you to use a font even if it isn't installed on the user's computer by allowing you to specify a path to a copy of the font that will be downloaded if it isn't already installed.
Because this technique allows a user to download a version of the font to their computer, it's critical that the font's license allows it to be used in this fashion.
The @font-face rule is used to add the font to your style sheet, as illustrated on the right.
font-family
This provides the font's name. The rest of the style sheet can then utilize this name as a value for the font-family property (as seen in the rule for the and elements).
src
@font-face {
font-family: 'ChunkFiveRegular';
src: url('fonts/chunkfive.eot');}
h1, h2 {
font-family: ChunkFiveRegular, Georgia, serif;}

This provides the font's path. You'll probably need to specify paths to a few different versions of the font, as indicated on the following page, in order for this strategy to operate in all browsers.
format
This specifies the font's format when it is downloaded. (It's covered in greater depth on the following page.)
Result

More Font Options
Many typeface designers would not let you use their fonts in this fashion, but there are open source fonts that you can freely use.
When looking at fonts on these sites, it's still a good idea to read the font's license agreement because some fonts are only free for personal use (not for commercial use).

@font-face {
font-family: 'ChunkFiveRegular';
src: url('fonts/chunkfive.eot');
src: url('fonts/chunkfive.eot?#iefix')
 format('embedded-opentype'),
 url('fonts/chunkfive.woff') format('woff'),
 url('fonts/chunkfive.ttf')
 format('truetype'),
 url('fonts/chunkfive.svg#ChunkFiveRegular')
 format('svg');}

 Because different browsers accept different font formats (just as they do different audio and video formats), you'll need to provide the font in multiple forms to reach all browsers.
If your font does not support all of these formats, you can upload it to the FontSquirrel website, which will convert it for you.
Font Squirrel also offers you with the @font-face rule's CSS code. This is particularly useful because the @font-face rule's src and format attributes can grow quite convoluted when dealing with numerous font formats.

You can make bold text with the font-weight parameter.
This attribute is frequently assigned one of two values:
normal
Text appears at a normal weight as a result of this.
bold
The text seems bold as a result of this.
The element whose class attribute has a value of credits has been bolded in this example.
You might be wondering why there is such a thing as a normal weight. This is because, if you defined a rule for the body> element specifying that all text inside the body should be bold, you may require an option that permits the text to seem regular weight in specific circumstances. As a result, it essentially serves as a "off switch."

