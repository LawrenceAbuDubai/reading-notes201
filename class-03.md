# read 03

## HTML Lists

There are lots of occasions when we need to use lists. HTML provides us with three different types:

Ordered lists have a number assigned to each item in the list. A list could be a collection of instructions in a recipe that must be completed in a specific order, or a legal contract.

where each point must be labeled with a section number.
Lists that start with a bullet point are known as unordered lists.
(rather than characters that represent the sequence of events).
Definition lists are made consisting of a list of terms and their definitions.
For each of the terms, there are definitions.

Ordered Lists 

<ol>
<li>Chop potatoes into quarters</li>
<li>Simmer in salted water for 15-20
 minutes until tender</li>
<li>Heat milk, butter and nutmeg</li>
<li>Drain potatoes and mash</li>
<li>Mix in the milk mixture</li>
</ol>


Unordered Lists

<ul>
<li>1kg King Edward potatoes</li>
<li>100ml milk</li>
<li>50g salted butter</li>
<li>Freshly grated nutmeg</li>
<li>Salt and pepper to taste</li>
</ul>

Definition Lists

<dl>
<dt>Sashimi</dt>
<dd>Sliced raw fish that is served with
 condiments such as shredded daikon radish or
 ginger root, wasabi and soy sauce</dd>
<dt>Scale</dt>
<dd>A device used to accurately measure the
 weight of ingredients</dd>
<dd>A technique by which the scales are removed
 from the skin of a fish</dd>
<dt>Scamorze</dt>
<dt>Scamorzo</dt>
<dd>An Italian cheese usually made from whole
 cow's milk (although it was traditionally made
 from buffalo milk)</dd>
</dl>



Example

<html>
<head>
 <title>Lists</title>
</head>
<body>
 <h1>Scrambled Eggs</h1>
 <p>Eggs are one of my favourite foods. Here is a
 recipe for deliciously rich scrambled eggs.</p>
 <h2>Ingredients</h2>
 <ul>
 <li>2 eggs</li>
 <li>1tbs butter</li>
 <li>2tbs cream</li>
 </ul>
 <h2>Method</h2>
 <ol>
 <li>Melt butter in a frying pan over a medium
 heat</li>
 <li>Gently mix the eggs and cream in a bowl</li>
 <li>Once butter has melted add cream and eggs</li>
 <li>Using a spatula fold the eggs from the edge of
 the pan to the center every 20 seconds (as if
 you are making an omelette)</li>
 <li>When the eggs are still moist remove from the
 heat (it will continue to cook on the plate
 until served)</li>
 </ol>
</body>
</html>
Here you can see a main heading followed by
an introductory paragraph. An unordered list is
used to outline the ingredients and an ordered
list is used to describe the steps.


Summary
LISTS
+ There are three types of HTML lists: ordered,unordered, and definition.
+ Ordered lists use numbers.
+ Unordered lists use bullets.
+ Definition lists are used to define terminology.
+ Lists can be nested inside one another.



## css boxes :

You can set several properties that affect the appearance of
these boxes. In this chapter you will see how to:
● Control the dimensions of your boxes
● Create borders around boxes
● Set margins and padding for boxes
● Show and hide boxes
Once you have learned how to control the appearance of each
box, you will see how to position these boxes on your pages in
Chapter 15 when we look at page layout.
A box's default size is simply large enough to hold its contents. The height and width parameters can be used to customize the dimensions of a box.
Pixels, percentages, and ems are the most common ways to specify the size of a box. Pixels have long been the most common option because they allow designers to precisely regulate the size of their designs.
When you use percentages, the box's size is proportional to the browser window's size or, if the box is encased within another box, it's a percentage of the containing box's size.

When you use ems, the box's size is determined by the size of the text inside it. As designers aim to build designs that are versatile across devices with different-sized screens, they have recently begun to employ percentages and ems more for measurements.
In the example on the right, a contained div> element with dimensions of 300 pixels wide by 300 pixels high is utilized.
There's a paragraph inside this that's 75% the width and height of the contained element.
This indicates that the paragraph is 225 pixels wide and 225 pixels tall.

<div>
<p>The Moog company pioneered the commercial
 manufacture of modular voltage-controlled
 analog synthesizer systems in the early
 1950s.</p>
</div>

div.box {
height: 300px;
width: 300px;
background-color: #bbbbaa;}
p {
height: 75%;
width: 75%;
background-color: #0088dd;}

Some page designs adapt to the size of the user's screen by expanding and contracting. When the browser window is narrow, the min-width property determines the smallest size a box can be displayed at, while the max-width property gives the largest width a box can extend to when the browser window is broad.
These are particularly useful features for making sure that page content is legible (especially on smaller screens like those found on portable devices). For example, the max-width property can be used to guarantee that lines of text do not appear too broad in a large browser window, and the min-width property can be used to ensure that they do not appear too narrow.

You might find it useful to run this example in your browser to examine what happens as the size of the browser window is increased or decreased.
These characteristics were initially supported in Internet Explorer 7 and Firefox 2, therefore they will not work in earlier versions of these browsers.

You could wish to limit the height of a box on a page in the same way that you might want to limit its width. The min-height and max-height attributes are used to do this.
These features are demonstrated in action in the example on this page. It also demonstrates what happens when the box's content takes up more space than the box's given size.
It can look very untidy if the box isn't big enough to accommodate the content and the material expands outside the box. The overflow attribute, which is covered on the next page, can be used to regulate what occurs when there isn't enough space for the content of a box.

If the content contained within a box is greater than the box itself, the overflow property tells the browser what to do. It can be one of two types of values:
hidden
This property simply conceals any information that doesn't fit inside the box.
scroll
This feature adds a scrollbar to the box so that viewers may see the missing content by scrolling down.
Two boxes on the left have contents that extend beyond their predefined dimensions. The overflow property in the first example is set to hidden.
The overflow property is set to scroll in the second example.
Because some browsers allow users to modify the size of the text to seem as large or little as they choose, the overflow attribute comes in handy.




## Basic JavaScript Instructions

### USING A VARIABLE TO STORE A NUMBER

Three variables are created and assigned values in this example.

• pricing saves the cost of a single tile.
• to ta 1 carries the total cost of the tiles 
• quantity holds the amount of tiles a customer wants

It's worth noting that the numbers aren't included in quotation marks.
Once a value has been assigned to a variable, the variable name can be used to represent that value (much like in algebra). The total cost is determined by multiplying the price of a single tile by the number of tiles requested by the customer.

The outcome is then recorded on the last two lines of the page.
On pages 194 and 216, you can see this technique in further depth.
The first of these two lines looks for an element with a cost value in its id attribute, and the last line replaces that element's content with new content.
Note: There are a variety of ways to add material to a page, as well as a variety of places to put your script. On page 226, the benefits and drawbacks of each technique are explained. In Internet Explorer 8, this strategy will not work.

Concentrate on the first four lines of JavaScript for the time being.
Username and message are two variables that are used to hold strings (the user's name and a message for that user).
In Chapter 5, the code to update the page (seen in the last four lines) is thoroughly covered.
This code selects two components based on their id attribute values. The values saved in these variables are used to change the text in those elements.
Take note of how the string is enclosed within quote marks. Single or double quotations are acceptable, but they must be identical. You must begin with a single quotation and conclude with a single quote, and you must begin with a double quote and end with a double quote.


## loops 

Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.

You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another. For example, the idea "Go five steps to the east" could be expressed this way as a loop:

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}

There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (Note that it's possible that number could be zero!)

The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.

###for statement
A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

A for statement looks as follows:

for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement

When a for loop executes, the following occurs:

The initializing expression initialExpression, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
The conditionExpression expression is evaluated. If the value of conditionExpression is true, the loop statements execute. If the value of condition is false, the for loop terminates. (If the condition expression is omitted entirely, the condition is assumed to be true.)
The statement executes. To execute multiple statements, use a block statement ({ ... }) to group those statements.
If present, the update expression incrementExpression is executed.
Control returns to Step 2.
Example
In the example below, the function contains a for statement that counts the number of selected options in a scrolling list (a <select> element that allows multiple selections). The for statement declares the variable i and initializes it to 0. It checks that i is less than the number of options in the <select> element, performs the succeeding if statement, and increments i by after each pass through the loop.

<form name="selectForm">
  <p>
    <label for="musicTypes">Choose some music types, then click the button below:</label>
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classical</option>
      <option>Opera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="How many are selected?" /></p>
</form>

<script>
function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
});
</script>

do...while statement
The do...while statement repeats until a specified condition evaluates to false.

A do...while statement looks as follows:

do
  statement
while (condition);
Copy to Clipboard
statement is always executed once before the condition is checked. (To execute multiple statements, use a block statement ({ ... }) to group those statements.)

If condition is true, the statement executes again. At the end of every execution, the condition is checked. When the condition is false, execution stops, and control passes to the statement following do...while.

Example
In the following example, the do loop iterates at least once and reiterates until i is no longer less than 5.

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
Copy to Clipboard
while statement
A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

while (condition)
  statement
Copy to Clipboard
If the *condition *becomes false, statement within the loop stops executing and control passes to the statement following the loop.

The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while.

To execute multiple statements, use a block statement ({ ... }) to group those statements.

Example 1
The following while loop iterates as long as n is less than 3:

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
Copy to Clipboard
With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:

After the first pass: n = 1 and x = 1
After the second pass: n = 2 and x = 3
After the third pass: n = 3 and x = 6
After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.

Example 2
Avoid infinite loops. Make sure the condition in a loop eventually becomes false—otherwise, the loop will never terminate! The statements in the following while loop execute forever because the condition never becomes false:

// Infinite loops are bad!
while (true) {
  console.log('Hello, world!');
}
Copy to Clipboard
labeled statement
A label provides a statement with an identifier that lets you refer to it elsewhere in your program. For example, you can use a label to identify a loop, and then use the break or continue statements to indicate whether a program should interrupt the loop or continue its execution.

The syntax of the labeled statement looks like the following:

label :
   statement
Copy to Clipboard
The value of label may be any JavaScript identifier that is not a reserved word. The statement that you identify with a label may be any statement.

Example
In this example, the label markLoop identifies a while loop.

markLoop:
while (theMark === true) {
   doSomething();
}
Copy to Clipboard
break statement
Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.

When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
When you use break with a label, it terminates the specified labeled statement.
The syntax of the break statement looks like this:

break;
break [label];
Copy to Clipboard
The first form of the syntax terminates the innermost enclosing loop or switch.
The second form of the syntax terminates the specified enclosing labeled statement.
Example 1
The following example iterates through the elements in an array until it finds the index of an element whose value is theValue:

for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}
Copy to Clipboard
Example 2: Breaking to a label
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
Copy to Clipboard
continue statement
The continue statement can be used to restart a while, do-while, for, or label statement.

When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.
When you use continue with a label, it applies to the looping statement identified with that label.
The syntax of the continue statement looks like the following:

continue [label];
Copy to Clipboard
Example 1
The following example shows a while loop with a continue statement that executes when the value of i is 3. Thus, n takes on the values 1, 3, 7, and 12.

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
     // continue;
  }
  n += i;
  console.log(n);
}
// 1,3,6,10,15
Copy to Clipboard
Example 2
A statement labeled checkiandj contains a statement labeled checkj. If continue is encountered, the program terminates the current iteration of checkj and begins the next iteration. Each time continue is encountered, checkj reiterates until its condition returns false. When false is returned, the remainder of the checkiandj statement is completed, and checkiandj reiterates until its condition returns false. When false is returned, the program continues at the statement following checkiandj.

If continue had a label of checkiandj, the program would continue at the top of the checkiandj statement.

let i = 0;
let j = 10;
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) === 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
  }
Copy to Clipboard
for...in statement
The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:

for (variable in object)
  statement
Copy to Clipboard
Example
The following function takes as its argument an object and the object's name. It then iterates over all the object's properties and returns a string that lists the property names and their values.

function dump_props(obj, obj_name) {
  let result = '';
  for (let i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  }
  result += '<hr>';
  return result;
}
Copy to Clipboard
For an object car with properties make and model, result would be:

car.make = Ford
car.model = Mustang


