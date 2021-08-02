#HTML 

## Code in a Content Management System

You'll probably log into a particular administration section of the website to control a content management system, blogging platform, or e-commerce program if you're using one. You will rarely encounter the html>, head>, or body> elements because the tools offered in the administration portions of these sites usually allow you to alter parts of the page rather than the full page. On the opposite page, you'll notice a box in the content management system.

This allows you to provide a page title, a box for the primary article, a way to enter a publication date, and a way to identify the section of the site this page belongs in.
In an e-commerce store, you might have boxes where you can enter a product's title, description, price, and quantity available.
This is because they govern all of the pages for a portion of the site using a single 'template.'
(An e-commerce system, for example, might use the same template to display all of its products.) The data you provide is entered into the templates.

The benefit of this approach is that it allows people who do not know how to develop web pages to add information to a website, and it also allows you to modify the appearance of something in the template, which will automatically update all pages that utilize that template. If you envision an e-commerce business with 1,000 products for sale, modifying just one template is a lot easier than redesigning each product's page. When you have a huge block of text to edit, such as a news article, blog entry, or product description in an e-commerce store, you will commonly see a text editor presented in systems like this.

Text editors typically include controls similar to those found in word processors, allowing you to style text, add links, and insert images.
These editors are adding HTML code to your text behind the scenes, similar to the code you saw previously in this chapter.
Many of these editors will provide you with the ability to view (and alter) the code they generate.

You'll have more control over these portions of your website after you know how to read and edit this code. You can see that the text editor offers a tab for Visual / HTML views of what the user enters in the sample above. Other systems may offer a button that indicates how to access the code (usually with angle brackets).
Some content management systems include tools for editing template files as well. If you try to alter template files, make sure to review the instructions for your CMS, as each one is different.
When altering template files, be cautious because deleting the wrong piece of code or adding something in the wrong location can cause the site to stop working.

### Looking at How Other sites are Built

Looking through the source code that made up web pages was one of the most common ways to learn about HTML and discover new tips and techniques when the web was initially taking off.
Although there are many more books and online tutorials that teach HTML these days, you may still examine the code that a web server delivers you. To try it out for yourself, go to www.htmlandcssbook.com/code/ and click on the "View Source" link in the sample code for this chapter.
After you've opened this page, go to your browser's View menu and pick Source or View source from the drop-down menu. (Depending on the browser you're using, the title varies.)

A new window should popup, containing the source code for this page.
The shot on the right shows the end outcome. The code is underneath the page you see, in the window at the top.
Don't get disheartened if this code appears difficult at first. You will be able to comprehend the next chapter of this book once you have finished the previous chapter.
On the internet, you'll find all of the examples for this book, and you may use this simple technique to examine how they function on any of them.
By clicking on the "Obtain" link on the same website, you can download the entire code for this book.



## CSS

CSS allows you to set rules that specify how an element's content should be displayed. For example, you can specify that the page's background be cream, that all paragraphs be gray and typeset in Arial, and that all level one heads be in a blue, italic Times typeface.
Studying CSS largely entails learning the different properties you can use once you've figured out how to construct a CSS rule.
As a result, this chapter will:
a) explain how CSS works;
b) teach you how to build CSS rules; and
c) demonstrate how CSS rules apply to HTML pages.
The rest of this section's chapters will go through all of the other CSS attributes you can use.
chapter-10/using-external-css.html HTML
In an HTML document, the element can be used to instruct the browser where to look for the CSS file that will be used to design the page. It is an empty element (i.e., it does not require a closing tag) that resides within the element.
It should have three characteristics:
href
This indicates the location of the CSS file (which is usually found in the css or styles folder).
type
The type of document being linked to is specified by this attribute. Text/css should be the value.
This describes the connection between the HTML page and the file to which it is linked. When connecting to a CSS file, the value should be stylesheet.
More than one CSS style sheet can be used on a single HTML page. To accomplish this it could have a  element for every CSS file it uses. For example, some authors use one CSS file to control the presentation (such as fonts and colors) and a second to control the layout.


CSS rules can also be included in an HTML page by putting them in the style> element, which is normally found in the page's head> element.
The type property should be used on the style> element to indicate that the styles are defined in CSS. Text/ css should be the value.
You should utilize an external CSS style sheet when creating a site with more than one page. This: Allows all pages to utilize the same style rules (rather than having them repeated on each one).
Separates the information from the appearance of the page.
This means you may modify the styles used on all pages by changing just one file (rather than each one separately).

#### CSS Selectors :

CSS selectors come in a variety of shapes and sizes, allowing you to apply rules to specific elements in an HTML text.
The CSS selectors that are most regularly used are included in the table on the opposite page.
An HTML file is included on this page to show which elements these CSS selectors would apply to.
CSS selectors must match element names and attribute values exactly because they are case sensitive.
On page 292, you'll find some more complex selectors that allow you to choose components based on attributes and their values.
The last two selectors in the table (the sibling selectors) were initially supported by IE7, hence their use is less widespread than the other selectors.

#### How Css Rules Cascade :

When there are two or more rules that apply to the same element, it's crucial to know which one takes precedence.
THE FINAL RULE
The latter of the two choices will take precedence if they are identical. The second I selection takes precedence over the first in this case.
SPECIFICITY
If one selector is more particular than the others, it will take precedence over the more broad rules. Here's an example:
h1 is more precise than * p b is more specific than p p#intro is more specific than p IMPORTANT: IMPORTANT: IMPORTANT: IMPORTANT: IMPORTANT: IMPORTANT: IMPORTANT: IMPORTANT: IMPORTANT
You have the option to add!
After any property value, add essential to indicate that it should be prioritized over other rules that apply to the same element.
Because you may define basic rules that apply to most items and then override the properties on individual elements that need to appear differently, understanding how CSS rules cascade allows you to develop simpler style sheets.
Most child elements will inherit the font-family and color characteristics from the parent element. This is because the font-family property's value is passed down to child components. It reduces the number of items for which these properties must be applied (resulting in simpler style sheets).
This is similar to the background-color and border properties, which are not passed down to child components. If all child components inherited them, the page may become rather cluttered.
By using inherit for the value of the properties, you may compel a large number of properties to inherit values from their parent elements. In this instance, the

The pad is inherited by any element with the class page.




## JavaScript 

A script is a set of one-by-one instructions that a computer may follow.
A statement is the name given to each specific instruction or task.

A semicolon should be used at the end of each statement.

We'll look at what the code on the right does later, but for now, keep in mind:
• A statement is each of the green lines of code.
• The start and end of a code block are indicated by pink curly braces. (Each code block could contain a large number of additional statements.)
• The purple code determines which code should be executed.
CASE SENSITIVE JAVASCRIPT
Because JavaScript is case sensitive, the words hourNow and HOURNOW have different meanings.

var today= new Date{);
var hourNow = today.getHours{) ;
var greeting;
if (hourNow > 18) {
greeting= 'Good evening';
else if (hourNow > 12) {
greeting= 'Good afternoon';
else if (hourNow > O) {
greeting 'Good morning';
else {
greeting 'Welcome';
document.write(greeting) ; 


STATEMENTS ARE INSTRUCTIONS THAT BEGIN WITH A NEW LINE.
A statement is a single piece of information that the computer must obey. Each paragraph should begin with a new line and end with a semicolon. This makes it easy to read and understand your code.
The semicolon also indicates to the JavaScript interpreter that a step is complete and that it should proceed to the next.

CODE BLOCKS CAN BE ORGANIZED FROM STATEMENTS.
Curly braces surround some statements, which are referred to as code blocks. There is no semicolon after the final curly brace.
Each code block above includes a single statement linked to the current time. Many additional statemes will be grouped together using code blocks.

##### WHAT IS A VARIABLE? 

A script will have to temporarily store the data it requires to complete its task. This information can be saved in variables.
When writing JavaScript, you must tell the interpreter each and every step you want it to take. This can occasionally entail more information than you might imagine.
Consider determining the area of a wall: the area of a rectangle is calculated by multiplying two numbers: width x height Equals area in math.
You might be able to conduct calculations like this in your head, but you'll need to give the computer very specific instructions when developing a script to do so. You may instruct it to complete the following four stages in the following order:
1. Keep in mind the width value 
2. Remember the value for height
3. Multiply width by height to get the area
4. Return the result to the user
In this case, you would use variables to "remember"
the values for width and height. (This also illustrates
how a scrip( contains very explicit instructions about
exactly what you want the computer to do.)
You can compare variables to short-term memory,
because once you leave the page, the browser will
forget any information it holds. 

Because the data stored in a variable might change (or vary) each time a script runs, it's a fitting moniker for this concept.
You already know that you can calculate the area of any wall by multiplying its width by its height, regardless of its size.
Variables can be used to represent values in your scripts that are likely to change, just as they can be used to represent values in your scripts that need to achieve the same purpose even when executed with different data. Using the data stored in the variables, the result is said to be calculated or computed.
The concept of using variables to represent numbers or other types of data is quite similar to that of using le.tters to represent numbers in algebra.There is one key difference, however. The equals
sign does something very different in programming
(as you will see on the next two pages). 

##### DATA TYPES 

+ NUMERIC DATA TYPE
The numeric data type handles
numbers.
0.75 

+ STRING DATA TYPE
The strings data type consists of
letters and other characters.
'H.
1 ' Ivy! 

+ BOOLEAN DATA TYPE
Boolean data types can have one
of two values: true or false.
true 

NUMERIC DATA TYPE : You'll utilize numbers 0-9 for tasks that require counting or calculating sums. For example, five thousand, two hundred and seventy-two would be written 5272 (notice that the thousands and hundreds are separated by a comma). Negative numbers (such as -23678) and decimals (three quarters is written as 0.75) are also possible.

STRING DATA TYPE : It's worth noting that the string data type is contained by a pair of quotations.
These can be single or double quotes, but the opening and closing quotations must match.
Strings can be used to manipulate any type of text.
They can contain HTML markup and are frequently used to add additional material to a page.

BOOLEAN DATA TYPE : The Boolean data type may appear abstract at first, but it is actually highly useful.
It's similar to a light switch in that it may be turned on or off.
Booleans are useful when choosing which part of a script should run.
