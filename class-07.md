# read07

## HTML 

A grid or table can be used to display a variety of different types of data. Sports results, stock reports, and railway schedules are just a few examples.
When expressing data in a table, consider in terms of a grid made up of rows and columns (similar to a spreadsheet). In this chapter, you'll learn how to: Create tables using the four key elements; Represent complex data using tables; and Add captions to tables.
A table is a grid-based representation of data.
Financial reports, TV schedules, and sports results are all examples of tables.
By referring information on two axes, grids help us grasp complex data.

### Basic Table Structure 

The table> element is used to generate a table. The table's contents are written out row by row.
The opening <tr> tag is used to denote the start of each row.
(The tr stands for table row.) One or more td> elements (one for each cell in that row) follow.
A closing </tr> tag is used at the conclusion of the row.
A <td> element is used to represent each cell in a table. (The td stands for table data.) A closing </td> tag is used at the conclusion of each cell.

<table>
 <tr>
 <td>15</td>
 <td>15</td>
 <td>30</td>
 </tr>
 <tr>
 <td>45</td>
 <td>60</td>
 <td>45</td>
 </tr>
 <tr>
 <td>60</td>
 <td>90</td>
 <td>90</td>
 </tr>
</table>

### Table Headings

The element is used in the same way as the element, however it's used to represent the heading for a column or a row. (The th represents a table heading.)
Even if a cell has no content, you must use the or element to indicate the presence of an empty cell, or the table will not render correctly. (In this example, the first cell in the first row is empty.)
When you start using CSS, using elements for headings helps users who use screen readers, enhances the ability of search engines to index your pages, and allows you to better control the appearance of tables.

<table>
 <tr>
 <th></th>
 <th scope="col">Saturday</th>
 <th scope="col">Sunday</th>
 </tr>
 <tr>
 <th scope="row">Tickets sold:</th>
 <td>120</td>
 <td>135</td>
 </tr>
 <tr>
 <th scope="row">Total sales:</th>
 <td>$600</td>
 <td>$675</td>
 </tr>
</table>

### Spanning ColumnS

You might need the entries in a table to span more than one column at times.
The colspan attribute, which can be applied to a th> or td> element, specifies how many columns that cell should span.
The example on the right shows a five-column timetable; the first column includes the row's title (the day), and the remaining four represent one-hour time slots.
When you look at the colspan property in the table cell that contains the words 'Geography,' you'll notice that it's set to 2, indicating that the cell should span two columns. 'Gym' spans three columns on the third row.

As you can see, there are less td> components in the second and third rows than there are columns. This is due to the fact that when a cell spans multiple columns, the td> or th> cells that would have taken the place of the broader cells are not included in the code.

<table>
 <tr>
 <th></th>
 <th>9am</th>
 <th>10am</th>
 <th>11am</th>
 <th>12am</th>
 </tr>
 <tr>
 <th>Monday</th>
 <td colspan="2">Geography</td>
 <td>Math</td>
 <td>Art</td>
 </tr>
 <tr>
 <th>Tuesday</th>
 <td colspan="3">Gym</td>
 <td>Home Ec</td>
 </tr>
</table>

### Spanning Rows

It's also possible that entries in a table will need to span more than one row.
To specify how many rows a cell should spread down the table, use the rowspan attribute on a th> or td> element.
In the example on the left, ABC is broadcasting a movie from 6pm to 8pm, however the BBC and CNN channels are both showing two programs (each lasting one hour) during this time period.
Despite the fact that there are four columns in the result below, the last tr> element only has three elements.
This is due to the rowspan attribute being used by the movie in the tr> element above to stretch down and take over the cell below.

<table>
 <tr>
 <th></th>
 <th>ABC</th>
 <th>BBC</th>
 <th>CNN</th>
 </tr>
 <tr>
 <th>6pm - 7pm</th>
 <td rowspan="2">Movie</td>
 <td>Comedy</td>
 <td>News</td>
 </tr>
 <tr>
 <th>7pm - 8pm</th>
 <td>Sport</td>
 <td>Current Affairs</td>
 </tr>
</table>

### Long Tables

There are three features that help differentiate between the table's main content and the first and last rows (which may have distinct content).
These elements assist screen readers and also allow you to style these sections differently than the rest of the table (as you will see when learning about CSS).
<thead>
The table's heads should be contained within the thead> element.
<tbody>
The body must be contained within the tbody> element.
<tfoot>
The footer is contained within the tfoot> element.

<table>
 <thead>
 <tr>
 <th>Date</th>
 <th>Income</th>
 <th>Expenditure</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <th>1st January</th>
 <td>250</td>
 <td>36</td>
 </tr>
 <tr>
 <th>2nd January</th>
 <td>285</td>
 <td>48</td>
 </tr>
 <!-- additional rows as above -->
 <tr>
 <th>31st January</th>
 <td>129</td>
 <td>64</td>
 </tr>
 </tbody>
 <tfoot>
 <tr>
 <td></td>
 <td>7824</td>
 <td>1241</td>
 </tr>
 </tfoot>
</table>


example : 

<html>
<head>
 <title>Tables</title>
</head>
<body>
 <table>
 <thead>
 <tr>
 <th></th>
 <th scope="col">Home starter hosting</th>
 <th scope="col">Premium business hosting</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <th scope="row">Disk space</th>
 <td>250mb</td>
 <td>1gb</td>
 </tr>
 <tr>
 <th scope="row">Bandwidth</th>
 <td>5gb per month</td>
 <td>50gb per month</td>
 </tr>
 <!-- more rows like the two above here -->
 </tbody>
 <tfoot>
 <tr>
 <td></td>
 <td colspan="2">Sign up now and save 10%!</td>
 </tr>
 </tfoot>
 </table>
</body>
</html>




## Javascript

### CREATING· OBJECTS USING LITERAL NOTATION


The first step in this example is to create an object using literal notation.
This item is called hotel, and it symbolizes the Quay Hotel, which has 40 rooms (25 of which are booked).
The page's content is then updated using data from this object. It uses the object's name property to display the hotel's name, as well as the checkAvail ablity() method to display the number of available rooms.
To go to a property of this object, type the object's name followed by a dot (the period sign) and the property's name.
Similarly, you can use the object name followed by the method name to call the method.
check availability of a hotel ()

var hote l = {
name: 'Quay',
rooms: 40,
booked : 25,
checkAvailability: function() {
return this.rooms - this.booked;
}
} ;

var el Name = document .getElementByld('hotelName');
elName.textContent =hotel .name;
var elRooms = document.getElementByid{'rooms');
elRooms.textContent = hotel .checkAvailability(); 


### CREATING MORE OBJECT LITERALS 

Another item can be seen here.
It's called hote 1 once more, but this time the model is for a different hotel. Assume this is a separate page on the same travel website for a bit.
The Park hotel is more spacious. It has 120 rooms, 77 of which are occupied.
The values of the properties of the hot e 1 object are the only things that change in the code:
• The hotel's name • The number of rooms it has • The number of rooms that are booked
The rest of the page follows the same pattern. The same code is used to display the name.
The checkAvailability() method has remained unchanged and is used in the same way.

var hotel = {
name: 'Park',
rooms: 120,
booked : 77,
checkAvailabi lity: function() {
return this.rooms - this.booked;
}
} ;
var elName = document .getElementByid('hotelName') ;
elName .textContent =hotel .name ;
var el Rooms = document .getElementByid( 'rooms') ;
e 1 Rooms . text Content = hote 1 . checkAvai l abi lity(); 

The rest of the page follows the same pattern. The same code is used to display the name.
The checkAvailability() method has remained unchanged and is used in the same way.
The only thing that would need to change if this site had 1,000 hotels would be the three properties of this object.
Because we used data to develop a model for the hotel, the same code may access and show information for any hotel that follows the same data model.
If you had two objects on the same page, you'd construct them both with the same syntax but save them in different variables.



### CREATING OBJECTS USING CONSTRUCTOR SYNTAX 


The constructor function is used to build an empty object called hote 1 on the right.
The object is given three properties and a function after it has been formed.
(If the object already has any of these attributes, the values in those properties will be overwritten.)
You can use dot notation to access a property of this object, just like you can with any other object.
You could, for example, use hotel.name to acquire the hotel's name.
Similarly, you may use the object name followed by the method name to call the method: hotel.check
Availability()

var hotel = new Object();
hotel.name= 'Park';
hotel.rooms = 120;
hotel .booked = 77;
hotel .checkAvailability = function()
return this.rooms - this.booked;
} ;

var elName = document.getElementByid('hotelName');
elName.textContent = hotel . name;
var elRooms = document .getElementByid('rooms');
elRooms.textContent = hotel .checkAvailability(};


### CREATE & ACCESS OBJECTS CONSTRUCTOR NOTATION 

Here's an example that shows room availability in two hotels to help you understand why you would wish to create multiple objects on the same page.
To begin, a constructor function creates a hotel template.
Following that, two distinct instances of this hotel object are constructed. The first is for a Quay hotel, and the second is for a Park hotel.
After you've generated instances of these objects, you may use the same dot notation to access their attributes and methods as you would with any other object.
Data from both objects is accessed and written into the page in this example. (To accommodate the extra hotel, the HTML for this example changes.)
A variable is established for each hotel to hold the hotel name, followed by space, and the word rooms.
The line after that adds the number of available rooms in that hotel to that variable.
(The += operator is used to add material to a variable that already exists.)

function Hotel (name, rooms, booked) {
this.name = name;
this.rooms = rooms;
this.booked = booked;
this.checkAvailability = function()
return this.rooms - this.booked;
} ;
var quayHotel
var parkHotel
new Hotel('Quay', 40, 25);
new Hotel( ' Park', 120, 77);
var details!= quayHotel .name + ' rooms : ';
detailsl += quayHotel.checkAvailability();
var elHotell = docurnent.getElementByid('hotell');
elHotell.textContent =details!;
var details2 = parkHotel .name+ ' rooms: ';
detai ls2 += parkHotel.checkAvailability();
var e1Hotel2 = document.getEl ementByid('hotel2');
elHotel2.textContent = details2; 

### ADDING AND REMOVING PROPERTIES 

You can add new attributes to an object after it has been formed (using literal or constructor notation).
This is done with the dot notation that you saw on pl03 for adding properties to objects.
You can see how an object literal is used to build an instance of the hotel object in this example.
Following that, the hotel object is given two more properties that display the facilities (such as if it has a gym and/or a pool). Boolean values are assigned to these properties (true or false).
After you've added these properties to the object, you can use them just like any other property. They change the value of the cl ass attribute on their respective elements to show a check mark or a cross mark in this case.
You use the keyword delete to delete a property, then use dot notation to designate the property or method you want to remove from the object.
The booked property is removed from the object in this situation.

This syntax only adds or removes properties from one instance of an object (not all instances created with that function) if an object is created with a constructor function.

var hotel = {
name : 'Park' ,
rooms : 120,
booked : 77.
} ;
hotel .gym = t rue;
hotel .pool = fal se;
delete hotel .booked;
var elName = document .getEl ementByld('hotelName ');
elName.textContent = hotel . name;
var el Pool = document .getElementByid ('pool ') ;
elPool.cl assName = ' Pool: ' + hotel. pool ;
var elGym = document .getEl ementByld('gym' };
elGym.className = 'Gym: ' + hotel .gym; 