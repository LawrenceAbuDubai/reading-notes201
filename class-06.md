# JS

## objects 

Objects bring together a collection of variables and functions to construct a model of what you'd see in real life. Variables and functions in an object are given new names.

PROPERTIES ARE NAMED AFTER VARIABLES.
A property is a variable that is a part of an object. The name of a hotel or the number of rooms it has are examples of properties that tell us about the item.
Each hotel may have a different name and number of rooms than the others.
METHODS ARE GIVEN TO FUNCTIONS.
A method is a function that is an element of an object.
Methods are related with the object and represent tasks. For example, you may determine how many rooms are available by subtracting the number of rooms available from the total number of rooms available.

A hotel is represented by this object. It consists of five attributes and a single method.
Curly braces are used to hold the object in place. It's kept in a changeable named hotel.
Properties and methods, like variables and named functions, have a name and a value. That name is referred to as a key in an object.
There can't be two keys with the same name on the same object. Because keys are used to retrieve their matching values, this is the case.
A text, number, Boolean, array, or even another object can be used as the value of a property. A method's value is always a function.

#### CREATING· OBJECTS USING LITERAL NOTATION 

c3/ j s/obj ect-1itera1 . j s
var hote l = {
name: 'Quay',
rooms: 40,
booked : 25,
checkAvailability: function() {
return this.rooms - this.booked;
}
} ;
JAVASCRIPT
var el Name = document .getElementByld('hotelName');
elName.textContent =hotel .name;
var elRooms = document.getElementByid{'rooms');
elRooms.textContent = hotel .checkAvailability(); 


The first step in this example is to create an object using literal notation.
This item is called hotel, and it symbolizes the Quay Hotel, which has 40 rooms (25 of which are booked).
The page's content is then updated using data from this object. It uses the object's name property to display the hotel's name, as well as the checkAvail ablity() method to display the number of available rooms.

To go to a property of this object, type the object's name followed by a dot (the period sign) and the property's name.
Similarly, you can use the object name followed by the method name to call the method.
check availability of a hotel ()

#### CREATING MORE OBJECT LITERALS 

var hotel = {
name: 'Park',
rooms: 120,
booked : 77,
c03/js/ object-l iteral2.js
checkAvailabi lity: function() {
return this.rooms - this.booked;
}
} ;
var elName = document .getElementByid('hotelName') ;
elName .textContent =hotel .name ;
var el Rooms = document .getElementByid( 'rooms') ;
e 1 Rooms . text Content = hote 1 . checkAvai l abi lity();

Another item can be seen here.
It's called hote 1 once more, but this time the model is for a different hotel. Assume this is a separate page on the same travel website for a bit.
The Park hotel is more spacious. It has 120 rooms, 77 of which are occupied.
The values of the properties of the hot e 1 object are the only things that change in the code:
• The hotel's name 
• The number of rooms it has 
• The number of rooms that are booked

The rest of the page follows the same pattern. The same code is used to display the name.
The checkAvailability() method has remained unchanged and is used in the same way.
The only thing that would need to change if this site had 1,000 hotels would be the three properties of this object.
Because we used data to develop a model for the hotel, the same code may access and show information for any hotel that follows the same data model.

If you had two objects on the same page, you'd use the same syntax for both but put them in variables with distinct names.


The Document Object Model (DOM) describes how browsers should generate an HTML page model and how JavaScript can access and update a web page's contents while it is in the browser window.

The DOM is a separate set of rules that is not part of HTML or JavaScript.
It is used by all major browser manufacturers and covers two main areas:

GENERATING A HTM L PAGE MODEL
When a web page is loaded, the browser constructs a model of the page in memory.
The DOM describes how the browser should build this model in the form of a DOM tree.

Because the model (the DOM tree) is made up of objects, the DOM is called an object model.

EDITING AND ACCESSING THE HTML PAGE
The DOM also defines access and update methods and properties for each item in this model, which modifies what the user sees in the browser.
The Document Object Model (DOM) is also known as an Application Programming Interface (API) (API).
User interfaces allow humans to interact with programs, while APls allow programs (and scripts) to communicate with one another. The DOM specifies what your script can "ask the browser about the current page, and how to tell the browser to update what the user sees."

### THE DOM TREE IS A MODEL OF A WEB PAGE


BODY OF HTML PAGE
<html>
<body>
<di v id="page">
<hl id="header">List</hl>
<h2>Buy groceries</h2>
<ul >
<li id="one" class="hot"><em>fresh</em> figs</li>
<li id="two" class="hot">pine nuts</l i>
<l i id="three" class="hot">honey</l i >
<l i id="four">balsamic vinegar</l i>
</ ul >
<script src="js/l i st.js "></scri pt>
</ div>
</ body>
</ html > 


A browser builds a model of a web page as it loads it.
The model is known as a DOM tree, and it is kept in the memory of browsers.
It is made up of four different sorts of nodes.
THE NODE FOR DOCUMENTS
The HTML code for a shopping list can be seen above, and the DOM tree for it can be found on the right hand page.
Every HTML element, attribute, and piece of text has its own DOM node.
A document node is added to the top of the tree, which represents the full page (and also corresponds to the document object, which you initially encountered on p36).
The document node is where you go to get to any element, attribute, or text node. It is the beginning point for all DOM tree visits.

NODES OF ELEMENTS
The structure of an HTML page is described by HTML elements. (The - elements indicate which portions are headers; the + elements indicate which parts are not.)

tags denote the beginning and end of paragraphs of content; and so on.)
You begin by looking for elements to gain access to the DOM tree. If you wish to, you can access the element's text and attribute nodes once you've found it. This is why you should begin by studying ways for accessing element nodes before moving on to accessing and altering text or attributes.

Note: We'll use this list as an example throughout this chapter and the next two chapters so you can see how different ways allow you to access and change the web page (which is representative of the web page).

The document's relationships with all of the element nodes are defined using terminology similar to those used in a family tree: parents, children, siblings, ancestors, and descendants. (The document node is the root of all nodes.)
Each node is a separate object with its own set of methods and properties.
This DOM tree is accessed and updated by scripts (not the source HTML file).
The browser reflects any modifications made to the DOM tree.

HTML elements' opening tags can contain attributes, which are represented by attribute nodes in the DOM tree.
Attribute nodes are not children of the element that contains them; they are an integral component of it. There are unique JavaScript methods and functions available once you've accessed an element properties to read or change that
element's attributes. For example, it is common to
change the values of cl ass attributes to trigger new
CSS rules that affect their presentation. 

NODES OF TEXT
You can then access the text within an element node once you've accessed it. This is saved in a separate text node.
Text nodes are not allowed to have children. When an element contains text and another child element, the child element is a child of the containing element rather than the text node. (Refer to the first item's element.) This shows how the text node is always a new branch of the DOM tree, with no other branches sprouting from it.

COLLABORATION WITH THE DOM TREE
There are two methods to accessing and updating the DOM tree:
1: Find the node that corresponds to the element you'd like to work with.
2: Make use of the text content, child elements, and attributes of the element.

GETTING ACCESS TO ELEMENTS
A DOM query might return a single element or a Nodelist, which is a group of nodes.
You may occasionally only need to access a single element (or a portion of the page stored within that one element). You may also want to choose a collection of elements, such as every hl> element on the page or every 1 I element in a specific list.

The DOM tree in this case displays the body of the list example's page. We prioritize accessing elements first, thus only element nodes are displayed. The graphics on the following pages show which items would be returned by a DOM query. (Remember that element nodes represent an element in the DOM.)

ELEMENT NODE GROUPINGS
If a method has the ability to return multiple nodes, it will always return a Nodelist, which is a collection of nodes (even if it only finds one matching element).
Then, using an index number (which implies the numbering starts at 0 like the items in an array), you must select the element you want from the list.
Because many elements can have the same tag name, get ElementsByTagName () always returns a Nodel I st.

THE QUICKEST WAY
Finding the shortest way to get to a particular element on your website will make it appear faster and/or more responsive. This usually entails determining the smallest number of nodes on the path to the element in question. For
example, getEl ementByld () will quickly return one
element (because no two elements on the same
page should have the same value for an id attribute),
but it can only be used when the element you want
to access has an id attribute. 

METHODS THAT RETURN A SINGLE ELEMENT NODE:
getElementByld( 1 id 1
)
Selects an individual element given the value of its i d attribute .
The HTML must have an id attribute in order for it to be selectable.
First supported: IE5.5, Opera 7, all versions of Chrome, Firefox, Safari.
querySel ector( 1
css selector')
Uses CSS selector syntax that would select one or more elements .
This method returns only the first of the matching elements.
First supported: IE8, Firefox 3.5, Safari 4. Chrome 4, Opera 10
...
get ElementByld('one')
...
querySelector('l i . hot ' )
METHODS THAT RETURN ONE OR MORE ELEMENTS (AS A NODELIST):
getEl ementsByClassName( 1
class 1 )
Selects one or more elements given the value of their cl ass attribute.
The HTML must have a cl ass attribute for it to be selectable.
This method is faster than querySe 1ectorA11 () .
First supported: IE9, Firefox 3, Safari 4, Chrome 4, Opera 10
(Several browsers had partial I buggy support in earlier versions)
getEl ementsByTagName( 1
tagName 1
)
Selects all elements on the page with the specified tag name.
This method is faster than querySe 1ectorA11 ().
First supported: IE6+, Firefox 3, Safari 4, Chrome, Opera 10
(Several browsers had partial I buggy support in earlier versions)
querySelectorAll ( 1
css select or•)
Uses CSS selector syntax to select one or more elements and returns all
of those that match.
First supported: IE8, Firefox 3.5, Safari 4, Chrome 4, Opera 10 
