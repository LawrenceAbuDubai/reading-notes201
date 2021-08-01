# Intro in building Websites(HTML, CSS and JavaScript):


## what is wireframe?

Wireframing is a **UX design** technique that allows **designers** to establish and arrange the information hierarchy of a website, app, or product. Based on the **user research** conducted by the UX design team, this approach focuses on how the designer or client wants the user to digest information on a site.

Before developing anything with code, you need to know where all the information is going to go in plain black and white diagrams when designing for the screen. Through the placement of buttons and choices on the diagrams, wireframing is also a wonderful approach to learn how a user interacts with your interface.

Wireframing allows you to arrange the layout and interactivity of your interface without the distractions of colors, typefaces, or text. One popular reason for wireframing is that if a user can't figure out where to go on a simple hand-drawn sketch of your site page, it doesn't matter what colors or fancy typography you use afterwards. Even if it isn't brightly colored or flashing, a button or call to action must be obvious to the user.

## Examples of wireframes

Take a peek at some wireframe examples before you start building your own app or product's wireframes. This will provide you with ideas for your own wireframes as well as an overview of the many methods for constructing them. Some people like to sketch their wireframes by hand, while others prefer to use software like Invision or Balsamiq to do so. We'll go through some of the tools you can use to build wireframes shortly, but it's essential to note that the way you design yours is entirely up to you: some individuals feel more creative when they're sitting at their computer, while others like to work with a pen and paper.

That said, for complete beginners, bear in mind the following when deciding on your wireframe creation process:

* Wireframes written on paper with a pencil or on a whiteboard have the advantage of looking and being very easy to change, which may be extremely useful during early discussions about your website or product.

* You may test with end users at every level of ideation and design using paper prototypes. Adjustments made at this stage are significantly easier—and thus less expensive—than changes made after coding has begun.

* After hand-drawing your wireframe, switching to software later allows you to keep track of more detailed considerations.

Starting with hand-drawn wireframes before moving on to more comprehensive versions using an internet program or software is likely to be advantageous. The wireframes below can help you visualize how information can be organized on the screen.

## What to consider when deciding on your wireframing process

As previously said, different UX designers take different approaches to wireframing. Some people prefer to draw by hand, while others prefer to use internet programs or tools. But, more often than not, the decision to use online tools or wireframe by hand, as well as the process used to get from wireframe to code, is less about the UX Designer's personal preference and more about the strategy required by the situation. It is mostly determined by how much attention is placed on visual design in a project and how much confusion exists about what is being designed.

In the bullet points below are a number of ways different designers can structure the process from design to implementation:

+ Wireframe > Interactive Prototype > Visual > Design
+ Sketch > Code
+ Sketch > Wireframe > Hi-Def Wireframe > Visual > Code
+ Sketch > Wireframe > Visual > Code

If the task is very narrow and the visual design is either fixed or unimportant (as with many backend administrative interfaces), then sketch > code makes sense; however, if the time, resources, and business value are all high, then spending the time to create a high-definition wireframe and going through a cycle of testing with a fully realized interactive prototype makes more sense.

There are a plethora of ***free tools*** available for building wireframes and prototypes, so try out as many as you can to find the ones that work best for you. **Remember that you can always use a pen and paper!** We've put up a list of three internet resources that we think are particularly useful. All of the examples below have free trials, so take a look!

UXPin: UXPin has a wide range of functionalities, but one of the best ones is how it facilitates building responsive clickable prototypes directly in your browser.

InVision: InVision allows you to get feedback straight from your team and users through clickable mock-ups of your site design. It’s completely free too!

Wireframe.cc: Wireframe.cc provides you with the technology to create wireframes really quickly within your browser, the online version of pen and paper.

# HTML 

HTML (Hypertext Markup Language) is the coding that organizes a web page's structure and content. Content could be organized using paragraphs, a list of bulleted points, or graphics and data tables, for example. This tutorial will teach you a fundamental understanding of HTML and its purposes, as the title suggests.


## what is HTML?

HTML is a markup language that specifies how your material is organized. HTML is made up of a set of elements that you may employ to enclose or wrap certain parts of your content to make it seem or perform a certain manner. The surrounding tags can be used to make a word or image hyperlink to another location, italicize words, change the font size, and so on. Take, for example, the following content line:

My cat is very grumpy

If we wanted the line to stand by itself, we could specify that it is a paragraph by enclosing it in paragraph tags:

<p>My cat is very grumpy</p>

## Anatomy of an HTML element

### The main parts of paragraph element are as follows:

+ The opening tag: This consists of the name of the element (in this case, p), wrapped in opening and closing angle brackets. This states where the element begins or starts to take effect — in this case where the paragraph begins.
+ The closing tag: This is the same as the opening tag, except that it includes a forward slash before the element name. This states where the element ends — in this case where the paragraph ends. Failing to add a closing tag is one of the standard beginner errors and can lead to strange results.
+ The content: This is the content of the element, which in this case, is just text.
+ The element: The opening tag, the closing tag, and the content together comprise the element.

Attributes contain extra information about the element that you don't want to appear in the actual content. Here, class is the attribute name and editor-note is the attribute value. The class attribute allows you to give the element a non-unique identifier that can be used to target it (and any other elements with the same class value) with style information and other things.

### Nesting elements

You can also nest elements inside other elements, which is known as nesting. If we wanted to say that our cat is very cranky, we could surround the word "very" in a <strong> element, which indicates that the phrase should be stressed strongly:

<p>My cat is <strong>very</strong> grumpy.</p>

You do however need to make sure that your elements are properly nested. In the example above, we opened the <p> element first, then the <strong> element; therefore, we have to close the <strong> element first, then the <p> element. The following is incorrect:

<p>My cat is <strong>very grumpy.</p></strong>



# Semantics

Semantics is a term used in programming to describe the meaning of a piece of code, such as "what impact does running that line of JavaScript have?" or "what purpose or role does that HTML element have?" (rather than "what does it look like?").

## Semantics in JavaScript

Consider a function in JavaScript that accepts a string as a parameter and returns a li> element with that string as its textContent. If the function was called build('Peach') or createLiWithContent('Peach'), would you need to look at the code to figure out what it did?

## Semantics in CSS

Consider decorating a list with li components that represent various varieties of fruits with CSS. Would you know where in the DOM div > ul > li, or.fruits item, is being selected?

## Semantics in HTML

The h1> element in HTML, for example, is a semantic element that assigns to the text it wraps the role (or meaning) of "a top level heading on your website."

<h1>This is a top level heading</h1>

By default, most browser's user agent stylesheet will style an <h1> with a large font size to make it look like a heading (although you could style it to look like anything you wanted).

On the other hand, you could make any element look like a top level heading. Consider the following:

*<span style="font-size: 32px; margin: 21px 0;">Is this a top level heading?</span>*


## Javascript :

JavaScript (JS) is a first-class compiled programming language that is lightweight, interpreted, or just-in-time compiled. While JavaScript is best known as a scripting language for Web pages, it is also used in a variety of non-browser settings, including Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a single-threaded, prototype-based, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) programming styles. More information on JavaScript can be found here.

This section focuses on the JavaScript language as a whole, rather than the bits that are particular to Web pages or other host environments. Please visit Web APIs and DOM for information on API specifics to Web pages.

The ECMAScript Language Specification (ECMA-262) and the ECMAScript Internationalization API specification are the JavaScript standards (ECMA-402). The documentation for JavaScript on MDN is based on the most recent draft versions of ECMA-262 and ECMA-402. In addition, descriptions and examples in MDN articles may employ some of the new ECMAScript features that have already been deployed in browsers.

JavaScript is not to be confused with the Java programming language. Oracle's trademarks or registered trademarks in the United States and other countries include "Java" and "JavaScript." The two programming languages, on the other hand, have completely distinct syntax, semantics, and applications.

## Input Output in plain JavaScript

We saw how to alter the DOM to display anything in the first article, and then how to handle user events in the second. This time, we'll look at how to obtain user input and mix it with the other two to make a simple page that can impress you.


<html>
<head>
  <title>Hello World</title>
</head>
<body>
 
First name: <input id="first_name">
Last name: <input id="last_name">
<button id="say">Say hi!</button>
 
<hr>
<div id="result"></div>
 
<script>
function say_hi() {
    var fname = document.getElementById('first_name').value;
    var lname = document.getElementById('last_name').value;
 
    var html = 'Hello <b>' + fname + '</b> ' + lname;
 
    document.getElementById('result').innerHTML = html;
}
 
document.getElementById('say').addEventListener('click', say_hi);
</script>
 
</body>
</html>

## JavaScript Variables

Variables
Variables are containers for storing data (values).

In this example, x, y, and z, are variables, declared with the var keyword:

var x = 5;

var y = 6;

var z = x + y;

From the example above, you can expect:

+ x stores the value 5
+ y stores the value 6
+ z stores the value 11

### Much Like Algebra

var price1 = 5;
var price2 = 6;
var total = price1 + price2;

In programming, just like in algebra, we use variables (like price1) to hold values.

In programming, just like in algebra, we use variables in expressions (total = price1 + price2).

From the example above, you can calculate the total to be 11.

JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).


## CSS

CSS (Cascading Style Sheets) lets you make beautiful web pages, but how does it function behind the scenes? This article explains what CSS is and how to use it with a simple syntax example, as well as some crucial vocabulary.

We discussed what HTML is and how it is used to mark up documents in the Introduction to HTML module. Web browsers will be able to read these documents. Paragraphs split onto a new line and have space between them, and headings will appear larger than regular text. To identify them from the rest of the content, links are colored and highlighted. What you're seeing are the browser's default styles, which are very basic styles that the browser applies to HTML to ensure that it is legible even if the creator of the page hasn't given any explicit styling.

## What is CSS for?

CSS, as previously said, is a language for determining how documents are shown to users, including how they are formatted, laid out, and so on.

A document is typically a text file formatted using a markup language – the most prevalent markup language is HTML, although other markup languages such as SVG or XML may also be used.

Presenting a document to a user entails transforming it into a format that your audience can understand. Browsers such as Firefox, Chrome, and Edge are designed to graphically present content on a computer screen, projector, or printer.

CSS can be used to style the text in a document in very basic ways, such as changing the color and size of headings and links. It can be used to make layouts, such as turning a single column of text into one with a primary content section and a sidebar for relevant information. It can even be used to create animation effects. For specific examples, click on the links in this paragraph.

## CSS syntax
CSS is a rule-based language, which means you write rules that specify sets of styles to be applied to certain elements or groups of elements on your website. "I want the main heading of my page to be displayed as huge red text," for example.
