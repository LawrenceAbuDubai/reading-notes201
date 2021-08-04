# read04 

## HTML links :

Because links allow you to go from one web page to another, they are the distinguishing feature of the internet.

browsing or surfing as a concept

Links from one website to another and links from one page to another on the same website are the most typical types of links you'll see.
Links that open in a new browser window from one area of a web page to another part of the same page
Links to open your email application and send a new email to a specific recipient.

The a> element is used to construct links. Between the initial a> tag and the ending /a> tag, users can click on anything. The href element is used to identify the page you wish to link to.

<a href="http://www.imdb.com">IMDB</a>

Link text is the text that appears between the opening a> tag and the closing /a> tag. Instead of simply saying "click here," your link text should clarify where visitors will be sent if they click on it.
The connection to IMDB that was made on the previous page is shown below.

Many people search for links in the text of webpages.
Clear link text can assist visitors in finding what they're looking for. This will offer readers a better image of your website and may inspire them to spend more time there. (It also assists those who use screen reader software.)

You can think of words people would use to find the page you're connecting to while writing good link text.
(For example, instead of writing "places to stay," you could write "hotels in New York.")

The a> element has a property called href that is used to construct links. The href attribute's value is the URL of the page you want people to visit when they click on the link.
Users can navigate to the page given in the href attribute by clicking on anything between the opening a> tag and the closing /a> tag.
When you connect to another website, the href attribute's value will be the site's full web address, often known as an absolute URL.
By default, browsers display links in blue with an underline.

<p>Movie Reviews:
<ul>
 <li><a href="http://www.empireonline.com">
 Empire</a></li>
 <li><a href="http://www.metacritic.com">
 Metacritic</a></li>
 <li><a href="http://www.rottentomatoes.com">
 Rotten Tomatoes</a></li>
 <li><a href="http://www.variety.com">
 Variety</a></li>
</ul>
</p>

You don't need to include the domain name in the URL when referring to other pages on the same site. You can use a relative URL as a shortcut.
If all of the site's pages are in the same folder, the href attribute's value is simply the file's name.
You can use a little more sophisticated syntax to specify where a page is in respect to the current page if you have distinct pages of a site in different directories. On pages 81-84, you can read more about these.
If you examine the download code for each chapter, you'll notice that the index.html file contains relative URL links.

You can use relative URLs to link to other pages on the same site. Because you don't have to mention the domain name, these are similar to abbreviated versions of absolute URLs.
On pages 83-84, we'll look into relative URLs in more detail because there are a few useful shortcuts for writing links to other pages on your own website.
When creating a website on your computer, relative URLs are useful because they allow you to create links between pages without having to set up your domain name or hosting.

### Directory Structure

It's a good idea to arrange your code on larger websites by putting the pages for each separate component of the site into a new folder. Directories are another term for folders on a website.

Structure
The graphic on the right depicts the directory structure for ExampleArts, a hypothetical entertainment listings website.
The root folder is the highest-level folder. (The root folder in this example is called examplearts.) The root folder houses all of a website's other files and folders.
Each section of the site is housed in its own folder, which aids with file organization.

Relationships
On a website, the relationship between files and folders is described in the same way that a family tree is described.
Some relationships have been sketched in on the right side of the diagram.
The movies, music, and theater folders are all children of the examplearts folder. The examplearts folder has children in the form of the movie, music, and theater folders.

Index.html is the name of the main homepage of an HTML site (as well as the homepages of each section in a child folder).
If no file name is given, most web servers will deliver the index.html file.
As a result, if you type in examplearts.com, you'll get examplearts.com/index.html and examplearts.com/index.html.music will return examplearts
.com/music/index.html.

You might not have individual files for each page of your website if you're using a content management system, blogging software, or an e-commerce system.
Instead, these systems frequently use a single template file for each type of page (for example, news stories, blog posts, or products).
If you update the template file, it will affect all of the pages that use it. If you edit any code that isn't HTML, the page may break.


## css layout :

We'll look at how to control where each element on a page resides and how to construct appealing page layouts in this chapter.
This entails understanding how creating for a screen differs from designing for other mediums (such as print). We'll look at how to place items using normal flow, relative positioning, absolute positioning, and floats in this chapter.
Learn how screen sizes and resolution fluctuate between devices and how this influences the design process.
Find out what the differences are between fixed width and liquid layouts, as well as how they're made.
Learn how to use grids in your page designs to make them look more professional.

CSS treats each HTML element as if it is in its
own box. This box will either be a block-level
box or an inline box.
Block-level boxes start on a new line and act as the main building blocks
of any layout, while inline boxes flow between surrounding text. You can
control how much space each box takes up by setting the width of the
boxes (and sometimes the height, too). To separate boxes, you can use
borders, margins, padding, and background colors. 

If one block-level element sits inside another
block-level element then the outer box is
known as the containing or parent element.
It is common to group a number of elements together inside a <div>
(or other block-level) element. For example, you might group together
all of the elements that form the header of a site (such as the logo and
the main navigation). The <div> element that contains this group of
elements is then referred to as the containing element.
A box may be nested inside
several other block-level
elements. The containing
element is always the direct
parent of that element.

Normal flow, relative positioning, and absolute positioning are the three CSS positioning strategies that allow you to control the layout of a page. The position property in CSS is used to indicate the positioning system. The float property can also be used to float items.
Flow that is normal
Every element at the block level appears on a new line, causing each item to look lower on the page than the one before it.
Even if the box widths are specified and there is enough room for two items to sit next to each other, they will not display next to each other. This is the browser's default behavior (until you tell it otherwise).

Positioning in Relation to Others
This shifts an element from its normal position to the top, right, bottom, or left of where it would have been placed in normal flow. The position of surrounding elements is unaffected; they remain in the same position as they would be in regular flow.
Positioning that is absolute
This specifies the element's position in reference to its parent element. It is removed from the regular flow, which means it has no effect on the location of any nearby elements (because they just ignore the space it would have taken up).
As visitors scroll up and down the page, elements that are absolutely positioned move.

You may need to utilize box offset settings to inform the browser how far from the top, bottom, left, and right a box should be placed to indicate where it should be placed. (These will be introduced on the next pages when we introduce the placement systems.)
Fixed Placement
This is a type of absolute positioning in which the element is positioned in respect to the browser window rather than the containing element.
Fixed-position elements don't change when the user scrolls up or down the page, and they don't impact the position of surrounding components.

### Normal Flow

Each block-level element lies on top of the one before it in normal flow. You don't need a CSS attribute to specify that elements should appear in normal flow because this is how browsers treat HTML elements by default, however the syntax would be:
position: static; I haven't given the heading element a width property, so you can see how it stretches the full browser window by default.
The width of the paragraphs is limited to 450 pixels. This illustrates how components in normal flow begin on a new line even if they do not fill the entire browser window.
A similar HTML structure will be used in all of the positioning examples.

### Relative Positioning

In relative placement, an element is moved in respect to where it would be in regular flow.
You can, for example, move it 10 pixels lower or 20 percent to the right than it would have been in regular flow.
The position property with a value of relative can be used to specify that an element should be positioned relatively.
The offset properties (top, bottom, left, and right) are then used to specify how far the element should be moved from where it would have been in normal flow.
You can use the top or bottom properties to shift the box up or down.
You can use the left or right properties to shift the box horizontally.
The box offset parameters are commonly expressed in pixels, percentages or ems.

### Absolute Positioning

When the position attribute is set to absolute, the box is removed from the usual flow of the page and no longer impacts the position of other items. (They act as if it doesn't exist.)
The top, bottom, left, and right box offset parameters describe where the element should appear in reference to its containing element.
The header has been placed at the top of the page, 500 pixels from its left edge in this example. The heading's width has been set to 250 pixels.
The width property has been applied to the width property as well.


This example uses elements to keep the text from overlapping and becoming unreadable.






## JS Functions, Methods, and Objects :

We must provide browsers extremely specific instructions about what we want them to accomplish. As a result, long scripts can have hundreds (or even thousands) of lines. To arrange their code, programmers utilize functions, methods, and objects.

WHAT IS A FUNCTION? 

Functions let you to combine a set of statements to do a specified task. If several sections of a script do the same task, you can combine them.

use the function again (rather than repeating the same set of statements).

AN EXTREMELY EXTREMELY EXTREMELY EX
The user is presented a message at the top of the page in this example. The message is stored in an HTML element with the id attribute message.
JavaScript will be used to alter the message.
The URL to the JavaScript file may be seen just before the closing tag. The JavaScript file begins with a variable for storing a new message, followed by the updateMessage function ().
Basic Purpose
TravelWorthy
We'd like to welcome you to our website!
JAVASCRIPT
You don't need to worry about how this function works just yet; you'll find out about it on the following pages. For the time being, it's worth noticing that the function's curly braces contain two statements.

The message at the top of the page is updated by these remarks.
The function works like a store, storing the statements inside the curly brackets until you're ready to use them.
Those statements will not be executed until the function is invoked. The function is only called once in this script, on the last line.

### 6 Reasons for Pair Programming

Loops that repeat themselves. Review of the code. Quick response. Checking for errors and linting These are software engineering techniques that have been shown to significantly increase the quality of code produced by developers. What if you could access all of this without having to type code line by line and character by character? Pair programming, a technique used in many agile work contexts, allows you to do so.

Pair programming is the technique of two developers sharing a single workstation to collaboratively tackle a coding assignment. It's more like "two brains are better than one" than "stop reading over my shoulder." Pair programming is one method we build a collaborative environment at Code Fellows while creating key industry skills.

### How does pair programming work?

While there are many distinct types of pair programming, the Driver and the Navigator are the most typical roles. The Driver is the sole programmer whose hands are on the keyboard and who is typing. The Driver is in charge of the “mechanics” of coding, including the text editor, file switching, version control, and, of course, writing code. The Navigator directs the Driver with their words but does not give the computer any direct input. While checking for typos or defects, the Navigator considers the larger picture, what comes next, and how an algorithm might be transformed into code. In addition, the Navigator may use their computer as a second screen to look up solutions and documentation.but should not be writing any code.

### Why pair program?

Developers are likely to explore a variety of programming languages while learning to code. There are four key skills that help anyone learn a new language, similar to those taught in a foreign language class: Speaking: utilizing the relevant words to explain a concept Listening: hearing and interpreting the vocabulary Reading entails figuring out what a piece of written language is trying to say. Writing: constructing a meaningful text from the ground up

Developers describe out loud what the code should accomplish, listen to others' advise, examine code that others have created, and write code themselves in pair programming.

Code Fellows students focus on all four of these language-specific abilities over a five-hour partnered lab session. The skills students develop will benefit them in completing tasks, communicating and learning on their own, in interviews, and in preparing for a job in a firm that practices agile.

1. Greater efficiency

It is a prevalent misperception that pair programming is inefficient and takes a long time. In truth, it is easier to catch faults in the making when two individuals work on the same code base. According to research, pair programming takes a little longer but creates higher-quality code that requires less troubleshooting and debugging afterwards (let alone exposing users to a broken product). As a result, it's typically more efficient in the long term than having two employees working on distinct features. Two programmers may arrive at a solution faster than one programmer on their own while brainstorming ideas and discussing solutions aloud. When the duo is stuck, both programmers can help each other  research the problem and reach a solution faster. Researches also identified pairing enhances technical skills, team communication, and even enjoyability of coding in the workplace.

2. Collaborative engagement
When two programmers work together on the same code, the experience is more interesting, and both programmers are more focused than when they work alone. When someone else is counting on you to finish the job, it's difficult to postpone or get off track. When someone else is gazing at your screen, opening your Facebook timeline is just that much less appealing.

Knowing when to seek for help is also a crucial part of learning to program. Before approaching a teaching assistant or instructor for assistance, we suggest our students to spend no more than fifteen minutes stuck on a problem. When developers work in pairs, they are more reliant on one another and are more likely to find a solution together without needing to ask for additional help. Ultimately, this boosts overall confidence.

3. Gaining knowledge from fellow classmates
Everyone approaches issue solving differently, and working with a teammate can introduce developers to techniques they might not have considered otherwise. Pair programming exposes the other developer to a new solution if one developer has a unique approach to a given problem.

Often, the skill sets of the developers in a pair are disparate. If one programmer has greater experience with a certain ability, they can teach it to a pupil who has less experience. The less experienced developer gains from the knowledge and assistance of the more experienced developer, and the latter benefits from discussing the issue in their own words, thus cementing their own understanding.

4. Social abilities
Pair programming is an excellent way to improve social skills. Communication is crucial when dealing with someone who has a distinct coding style. When two programmers have opposing personalities, this becomes more difficult. Pair programming can assist programmers enhance their interpersonal abilities as well as their technical talents. When simply grabbing the keyboard and taking over isn't an option, learning to find the correct words is a skill in and of itself.

This has long-term implications for your career. Employers know that, as much as they desire strong programmers, they also need employees who can work effectively with others.

5. Interview preparation
Pair programming between a current employee and an applicant, either in person or over a shared screen, is a frequent phase in many interview procedures. They'll do things like code challenges, constructing a project or feature, and debugging an existing code base together. Companies can get a better sense of how an applicant will fit into the team and collaborate by doing so.

For most jobs, the capacity to collaborate and learn from others, as well as excellent communication skills, are just as (if not more!) crucial to a firm as technical expertise. All of those abilities are bolstered by pair programming.

6. Workplace preparedness
Many organizations that use pair programming anticipate to train new workers from computer science degree programs on how to deliver a product. Graduates of the Code Fellows program who are already familiar with the partnering process will have one fewer hurdle to overcome when starting a new employment.