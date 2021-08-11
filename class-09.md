# HTML 

## tables : 

The term 'form' has traditionally referred to a printed paper with spaces for you to fill in information.
HTML uses the term "form" to refer to several elements that allow you to collect information from site users.
HTML forms provide a set of elements to collect data from your consumers, whether you're putting a basic search box to your website or need to develop more involved insurance applications. In this chapter, you'll learn how to make a form for your website, as well as the many tools for data collection and new HTML5 form controls.


The search box in the middle of Google's homepage is undoubtedly the most well-known form on the internet.

Forms allow users to do more than just search. They also allow them to complete various tasks online. When enrolling as a member of a website, shopping online, or joining up for newsletters or mailing lists, you'll come across forms.

There are several types of form controls that
you can use to collect information from visitors
to your site.
Form Controls
ADDING TEXT:
Making Choices:
Submitting Forms: Uploading Files:
Password input
Like a single line text box but it
masks the characters entered.
Text input (single-line)
Used for a single line of text such
as email addresses and names.
Text area (multi-line)
For longer areas of text, such as
messages and comments.
Checkboxes
When a user can select and
unselect one or more options.
Radio buttons
For use when a user must select
one of a number of options.
Drop-down boxes
When a user must pick one of a
number of options from a list.
Image buttons
Similar to submit buttons but
they allow you to use an image.
Submit buttons
To submit data from your form
to another web page.
File upload
Allows users to upload files
(e.g. images) to a website.


A form may contain numerous form controls, each of which collects data in a different way. The server has to know which form element corresponds to which piece of submitted data.

Information is transferred from the browser to the server in name/value pairs to distinguish between various pieces of entered data. The form in this example requests the visitor's username as well as their favorite jazz musician. The following are the name/value pairs sent to the server:

username=Ivy
If the user may enter text into the form control, the value of the form control is whatever the user has written in.
vote=Herbie
If the form control permits you to select from a limited number of options, the web page creator will include code that allows you to do so.


Form controls are contained within an element. The action attribute should always be present on this element, as well as the method and id attributes.
action
An action attribute is required for each element. Its value is the URL of the server page that will receive the data from the form once it is submitted.
method
Get or post are the two techniques for sending forms.
The values from the form are appended to the end of the URL supplied in the action attribute by the get method. The get method is ideal for the following situations:

brief forms (such as search boxes) when obtaining data from a web server (rather than transmitting information to be updated to or deleted from a database)

<form action="http://www.example.com/subscribe.php"
method="get">
<p>This is where the form controls will appear.
 </p>
</form>

The values are delivered in what are known as HTTP headers when using the post method. As a general guideline, the post method should be used whenever your form: allows users to upload a file; is particularly long; contains sensitive data (e.g. passwords); or adds or deletes information from a database.
If the method attribute is omitted, the get method will be utilized to send the form data.
id
The id attribute is discussed on page 183, but the value is used to distinguish the form from other components on the page (and is frequently used by scripts, such as those that verify that you have input data into fields that require values).


### Text Input

<form action="http://www.example.com/login.php">
<p>Username:
 <input type="text" name="username" size="15"
 maxlength="30" />
</p>
</form>

The element is used to make a variety of form controls. The type attribute's value specifies the type of input they will generate.
type="text"
When the type attribute is set to text, a singleline text input is created.
name
The server has to know which form control each piece of data was entered into when users enter information into a form.
(In a login form, for example, the server needs to know what was input as the username and what was given as the password.) As a result, each form control must have a name attribute.
The value of this attribute identifies the form control and is delivered to the server along with the data users enter.

On new forms, the size attribute should not be used. It was once used to indicate the breadth of the text entry (as determined by the number of characters that would be seen) in older forms.
A value of 3 would, for example, generate a box large enough to display three characters (though a user might enter more if desired).
CSS should be used to control the width of form elements in any new forms you create.
The size attribute is only mentioned since it may appear in older code.

maxlength
The maxlength attribute can be used to limit the number of characters a user can type into a text field. The number of characters they can enter is its value.

### Password Input

<form action="http://www.example.com/login.php">
<p>Username:
 <input type="text" name="username" size="15"
 maxlength="30" />
</p>
<p>Password:
 <input type="password" name="password" size="15"
 maxlength="30" />
</p>
</form>


<input> \stype="password"
When the type property is set to password, a text box appears that behaves similarly to a single-line text input except that the characters are blocked off.
They're hidden this way so that someone looking over the user's shoulder won't see critical information like passwords.
name
The name attribute specifies the name of the password input, which is delivered together with the password entered by the user to the server.
size and maximum length
Like the single-line text input, it can also include size and maxlength properties.



## CSS 

There are a number of CSS attributes designed to operate with specific HTML components, such as lists, tables, and forms.
You'll learn how to: Specify the type of bullet point or numbering on lists in this chapter.
Control the appearance of form controls by adding borders and backgrounds to table cells.
These variables work together to provide you more control over specific portions of your pages.

### Table Properties

<h1>First Edition Auctions</h1>
<table>
<tr>
 <th>Author</th>
 <th>Title</th>
 <th class="money">Reserve Price</th>
 <th class="money">Current Bid</th>
</tr>
<tr>
 <td>E.E. Cummings</td>
 <td>Tulips & Chimneys</td>
 <td class="money">$2,000.00</td>
 <td class="money">$2,642.50</td>
</tr>
<tr class="even">
 <td>Charles d'Orleans</td>
 <td>Poemes</td>
 <td class="money"></td>
 <td class="money">$5,866.00</td>
</tr>
<tr>
 <td>T.S. Eliot</td>
 <td>Poems 1909 - 1925</td>
 <td class="money">$1,250.00</td>
 <td class="money">$8,499.35</td>
</tr>
<tr class="even">
 <td>Sylvia Plath</td>
 <td>The Colossus</td>
 <td class="money"></td>
 <td class="money">$1031.72</td>
</tr>
</table>



You've already encountered a number of table-related attributes. We'll use the following as an example to put them all together:
padding to set the gap between the border of each table cell and its content width to set the width of the table
font-size to add further decoration to the content of the table headers, text-transform to convert the content of the table headers to uppercase letter-spacing
To set borders above and below the table headings, use border-top and border-bottom.
background-color to change the background color of the alternating table rows :hover to highlight a table row text-align to align the writing to the left of some table cells and to the right of others

body {
font-family: Arial, Verdana, sans-serif;
color: #111111;}
table {
width: 600px;}
th, td {
padding: 7px 10px 10px 10px;}
th {
text-transform: uppercase;
letter-spacing: 0.1em;
font-size: 90%;
border-bottom: 2px solid #111111;
border-top: 1px solid #999;
text-align: left;}
tr.even {
background-color: #efefef;}
tr:hover {
background-color: #c3e6e5;}
.money {
text-align: right;}

If the text in a table cell meets a border (or another cell), it becomes more harder to read. Padding makes the text easier to read.
Make table heads stand out by making all of them bold (the element's default style). This makes them simpler to read. You may also make headings uppercase and then apply a background color or an underline to make them stand out from the rest of the text.
If you shade every other row, it will be easier for users to follow the lines.
To keep the table looking neat, use a small contrast from the typical color of the rows.

Numbers should be aligned.
The text-align property can be used to align the content of any column containing numbers to the right, allowing large numbers to be differentiated from smaller ones.
Extras available on the internet
More examples of using CSS to layout tables may be seen in the website's tools section.


## JS

When you visit the internet, your browser records a variety of events. It's the browser's way of expressing, "Hey, something happened just now." These events can then be handled by your script.
Scripts frequently react to these events by altering the web page's content (through the Document Object Model), making the page feel more interactive. 

EVENTS THAT INITIALIZE JAVASCRIPT CODE
When a user interacts with HTML on a web page, there are three stages that must be followed in order for JavaScript code to be triggered.
The term "event handling" refers to the combination of these stages.
1
Choose the element node(s) to which the script should respond.
If you want to run a script when a user clicks on a specific link, for example, you'll need to acquire the DOM node for that link element. A DOM query is used to do this (see Chapter 5).

2
Choose which event(s) on the selected node(s) will cause the response to be triggered.
Binding an event to a DOM node is what programmers call it.
The last two pages displayed a list of popular events that you may keep an eye on.

3
Declare the code that should be executed when the event happens.
When an event occurs on a given element, a function is called. It's possible that this is a named or anonymous function.

You can see how event handling may be used to deliver feedback to users who fill out a registration form in this example. If their username is too short, an error message will appear.

1 ELEMENT SELECTION
The text input, where users enter their username, is the element with which users interact.

2 SPECIFIC! EVENT FOR FY
The text input loses focus when the user moves away from it, and the blur event is triggered on this element.

CALL CODE 3
When the blur event occurs on the username input, a function named checkUsername is invoked ().

<form method="post" action="http://www.example.org/register">
<label for="username">Create a username: </l abel>
<input type="text" i d="username" onbl ur="checkUsername()" />
<div id="feedback"></div>
<label for="password">Create a password: </label>
<input type="password" id="password" />
<input type="submit" value="Sign up!" />
</ fonn>
<script type="text/javascript" src="js/event-attributes.js "></script> 

function checkUsername() { // Dec lare funct ion
var elMsg = document .getElementByi d('feedback') ; // Get feedback element
var elUsername = document .getEl ementByld('username ');// Get username input
if (elUsername .value .length < 5) { / / If username too short
elMsg.textContent ' Username must be 5 characters or more'; // Set msg
else { //Otherwise

}}}
elMsg.textContent = ''; //Clear message 