import './css/MainStyle.css';
import './css/w3.css';
import ImagenMain from './Imagenes/main-image.jpg'
import ImagenWhereTo from './Imagenes/WhereTo.jpg'
import ImagenFace from './Imagenes/facebook.png'
import ImagenTweet from './Imagenes/twitter.png'
import ImagenInst from './Imagenes/instagram.png'
import Rooms from './Files/rooms.json'

function componente(){
//             --------------------------------------------                      Links (sit on top) -->
// Create the main container div
var topContainer = document.createElement("div");
topContainer.className = "w3-top";

// Create the inner row div
var rowDiv = document.createElement("div");
rowDiv.className = "w3-row w3-padding w3-black";

// Create an array for the menu items
var menuItems = [
  { text: "HOME", href: "#" },
  { text: "ABOUT", href: "#about" },
  { text: "SERVICES", href: "#menu" },
  { text: "WHERE", href: "#where" }
];

// Create the menu items and append them to the row
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = document.createElement("div");
  menuItem.className = "w3-col s3";

  var anchor = document.createElement("a");
  anchor.href = menuItems[i].href;
  anchor.className = "w3-button w3-block w3-black";
  anchor.textContent = menuItems[i].text;

  menuItem.appendChild(anchor);
  rowDiv.appendChild(menuItem);
}

// Append the row to the top container
topContainer.appendChild(rowDiv);

//             --------------------------------------------                      Header with image -->
// Create the header element with classes and an ID
var header = document.createElement("header");
header.className = "bgimg w3-display-container w3-grayscale-min";
header.id = "home";

// Create the middle container
var middleContainer = document.createElement("div");
middleContainer.className = "w3-display-middle w3-center";

// Create a text element with white text and a specific font size
var text = document.createElement("span");
text.className = "w3-text-white";
text.style.fontSize = "90px";
text.innerHTML = "land<br>Hotel";

// Append the text element to the middle container
middleContainer.appendChild(text);

// Append the middle container to the header
header.appendChild(middleContainer);

//             --------------------------------------------                      About Container -->
// Create the main container div with classes
var mainContainer = document.createElement("div");
mainContainer.className = "w3-sand w3-grayscale w3-large";

// Create the inner container with an ID
var aboutContainer = document.createElement("div");
aboutContainer.className = "w3-container";
aboutContainer.id = "about";

// Create the content div with a maximum width
var contentDiv = document.createElement("div");
contentDiv.className = "w3-content";
contentDiv.style.maxWidth = "700px";

// Create the heading
var heading = document.createElement("h5");
heading.className = "w3-center w3-padding-64";
var headingSpan = document.createElement("span");
headingSpan.className = "w3-tag w3-wide";
headingSpan.textContent = "Step Into a Dream World";
heading.appendChild(headingSpan);

// Create the first paragraph
var paragraph1 = document.createElement("p");
paragraph1.textContent = "LAND® Florida Resort is a multi-day vacation destination built for kids! Located in the heart of Central Florida, just 45 minutes from Orlando and Tampa, the resort includes an interactive, 150-acre theme park with more than 50 rides, shows and attractions inspired by popular ® brands and characters, LAND® Water Park and a world-famous botanical garden. LAND® Hotel and LAND® Pirate Island Hotel are both located just steps from the theme park entrance and feature fully-themed rooms along with daily entertainment offerings designed for kids by the creative minds behind all of the theme park and event content year-round. LAND® Beach Retreat is a seasonal, lakefront resort with themed ® bungalows located directly across the street from the theme park. Prices, times and schedules are subject to change without notice. , the  logo, the Minifigure, DUPLO, the DUPLO logo, the FRIENDS logo, the MINIFIGURES logo, MINDSTORMS, NINJAGO, and the NINJAGO logo are trademarks and/or copyrights of the  Group. ©2021 The  Group. All rights reserved.";



// Create the image
var image = document.createElement("img");
image.src = ImagenMain;
image.style.width = "100%";
image.style.maxWidth = "1000px";
image.className = "w3-margin-top";

// Create the opening hours paragraph
var openingHoursParagraph = document.createElement("p");
openingHoursParagraph.innerHTML = "<strong>Opening hours:</strong> everyday from 6am to 5pm.";


// Append all elements to their respective parent elements
contentDiv.appendChild(heading);
contentDiv.appendChild(paragraph1);
contentDiv.appendChild(image);
contentDiv.appendChild(openingHoursParagraph);

aboutContainer.appendChild(contentDiv);
mainContainer.appendChild(aboutContainer);

//             --------------------------------------------                      Menu Container -->

// Create the main container div with classes and an ID
var menuContainer = document.createElement("div");
menuContainer.className = "w3-container";
menuContainer.id = "menu";

// Create the content div with a maximum width
var contentDiv = document.createElement("div");
contentDiv.className = "w3-content";
contentDiv.style.maxWidth = "700px";

// Create the heading
var heading = document.createElement("h5");
heading.className = "w3-center w3-padding-48";
var headingSpan = document.createElement("span");
headingSpan.className = "w3-tag w3-wide";
headingSpan.textContent = "SERVICES";
heading.appendChild(headingSpan);

// Create the tab buttons div
var tabButtonsDiv = document.createElement("div");
tabButtonsDiv.className = "w3-row w3-center w3-card w3-padding";

// Create the "Reservations" tab button
var ReservationsTabButton = document.createElement("a");
ReservationsTabButton.href = "javascript:void(0)";
ReservationsTabButton.onclick = function () { openMenu(event, 'Reservations'); };
var ReservationsTabContent = document.createElement("div");
ReservationsTabContent.className = "w3-col s6 tablink";
ReservationsTabContent.textContent = "Reservations";
// Create the "Drinks" tab button
var DrinksTabButton = document.createElement("a");
DrinksTabButton.href = "javascript:void(0)";
DrinksTabButton.onclick = function () { openMenu(event, 'Drinks'); };
var DrinksTabContent = document.createElement("div");
DrinksTabContent.className = "w3-col s6 tablink";
DrinksTabContent.textContent = "Drinks";


ReservationsTabButton.appendChild(ReservationsTabContent);
DrinksTabButton.appendChild(DrinksTabContent);

tabButtonsDiv.appendChild(ReservationsTabButton);
tabButtonsDiv.appendChild(DrinksTabButton);

// Create the "Reservations" menu items div
var ReservationsMenuDiv = document.createElement("div");
ReservationsMenuDiv.id = "Reservations";
ReservationsMenuDiv.className = "w3-container menu w3-padding-48 w3-card";
// Create "Reservations" menu items
var ReservationsItems = [
  { title: "Coffee", description: "Regular coffee 2.50" },
  { title: "Te", description: "Regular 10.50" },
  { title: "Beer", description: "Regular 20.50" },
];
// Create and append "Reservations" menu items to the div
for (var j = 0; j < ReservationsItems.length; j++) {
  var ReservationsItemTitle = document.createElement("h5");
  ReservationsItemTitle.textContent = ReservationsItems[j].title;
  
  var ReservationsItemDescription = document.createElement("p");
  ReservationsItemDescription.className = "w3-text-grey";
  ReservationsItemDescription.textContent = ReservationsItems[j].description;
  
  ReservationsMenuDiv.appendChild(ReservationsItemTitle);
  ReservationsMenuDiv.appendChild(ReservationsItemDescription);
}

// Create the "Drinks" menu items div
var DrinksMenuDiv = document.createElement("div");
DrinksMenuDiv.id = "Drinks";
DrinksMenuDiv.className = "w3-container menu w3-padding-48 w3-card";
// Create "Drink" menu items
var DrinksItems = [
    { title: "Coffee", description: "Regular coffee 2.50" },
    { title: "Te", description: "Regular 10.50" },
    { title: "Beer", description: "Regular 20.50" },
];
// Create and append "Drink" menu items to the div
for (var j = 0; j < DrinksItems.length; j++) {
  var DrinksItemTitle = document.createElement("h5");
  DrinksItemTitle.textContent = DrinksItems[j].title;
  
  var DrinksItemDescription = document.createElement("p");
  DrinksItemDescription.className = "w3-text-grey";
  DrinksItemDescription.textContent = DrinksItems[j].description;
  
  DrinksMenuDiv.appendChild(DrinksItemTitle);
  DrinksMenuDiv.appendChild(DrinksItemDescription);
}

// Append all elements to their respective parent elements
contentDiv.appendChild(heading);
contentDiv.appendChild(tabButtonsDiv);
contentDiv.appendChild(ReservationsMenuDiv);
contentDiv.appendChild(DrinksMenuDiv);

menuContainer.appendChild(contentDiv);

//             --------------------------------------------                      Contact/Area Container -->
// Create the main container div
var container = document.createElement("div");
container.className = "w3-container";
container.id = "where";
container.style.paddingBottom = "32px";

// Create the content div
var content = document.createElement("div");
content.className = "w3-content";
content.style.maxWidth = "700px";

// Create the heading
var heading = document.createElement("h5");
heading.className = "w3-center w3-padding-48";
var headingSpan = document.createElement("span");
headingSpan.className = "w3-tag w3-wide";
headingSpan.textContent = "WHERE TO FIND US";
heading.appendChild(headingSpan);

// Create the first paragraph
var paragraph1 = document.createElement("p");
paragraph1.textContent = "Winter Haven, FL, United States · +1 888-690-5346";

// Create the image
var image = document.createElement("img");
image.src = ImagenWhereTo;
image.className = "w3-image";
image.style.width = "100%";

// Create the second paragraph with a span
var paragraph2 = document.createElement("p");
var paragraph2Span = document.createElement("span");
paragraph2Span.className = "w3-tag";
paragraph2Span.textContent = "FYI!";
paragraph2.appendChild(paragraph2Span);
paragraph2.innerHTML += " We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggest criteria of them all, both look and taste.";

// Create the third paragraph with strong tag
var paragraph3 = document.createElement("p");
var strongTag = document.createElement("strong");
strongTag.textContent = "Reserve";
paragraph3.appendChild(strongTag);
paragraph3.innerHTML += " a room, ask for today's promos or just send us a message:";

// Create the form
var form = document.createElement("form");
form.action = "/action_page.php";
form.target = "_blank";

// Create input fields
var inputName = document.createElement("input");
inputName.className = "w3-input w3-padding-16 w3-border";
inputName.type = "text";
inputName.placeholder = "Name";
inputName.required = true;
inputName.name = "Name";

var inputPeople = document.createElement("input");
inputPeople.className = "w3-input w3-padding-16 w3-border";
inputPeople.type = "number";
inputPeople.placeholder = "How many people";
inputPeople.required = true;
inputPeople.name = "People";

var inputDate = document.createElement("input");
inputDate.className = "w3-input w3-padding-16 w3-border";
inputDate.type = "datetime-local";
inputDate.placeholder = "Date and time";
inputDate.required = true;
inputDate.name = "date";
inputDate.value = "2020-11-16T20:00";

var inputMessage = document.createElement("input");
inputMessage.className = "w3-input w3-padding-16 w3-border";
inputMessage.type = "text";
inputMessage.placeholder = "Message / Special requirements";
inputMessage.required = true;
inputMessage.name = "Message";

// Create the submit button
var submitButton = document.createElement("button");
submitButton.className = "w3-button w3-black";
submitButton.type = "submit";
submitButton.textContent = "SEND MESSAGE";

// Append elements to their respective parents
form.appendChild(inputName);
form.appendChild(inputPeople);
form.appendChild(inputDate);
form.appendChild(inputMessage);
form.appendChild(submitButton);

content.appendChild(heading);
content.appendChild(paragraph1);
content.appendChild(image);
content.appendChild(paragraph2);
content.appendChild(paragraph3);
content.appendChild(form);

container.appendChild(content);


//             --------------------------------------------                      Footer -->
// Create the footer element
var footer = document.createElement("footer");

// Create the div with class "footer-content"
var footerContent = document.createElement("div");
footerContent.className = "footer-content";

// Create the first div with class "footer-info"
var footerInfo = document.createElement("div");
footerInfo.className = "footer-info";

// Create the "Contact Us" heading
var contactHeading = document.createElement("h2");
contactHeading.textContent = "Contact Us";

// Create the email paragraph
var emailParagraph = document.createElement("p");
emailParagraph.textContent = "Email: example@email.com";

// Create the phone paragraph
var phoneParagraph = document.createElement("p");
phoneParagraph.textContent = "Phone: (123) 456-7890";

// Create the address paragraph
var addressParagraph = document.createElement("p");
addressParagraph.textContent = "Address: Winter Haven, FL, United States";

// Append the elements to the "footer-info" div
footerInfo.appendChild(contactHeading);
footerInfo.appendChild(emailParagraph);
footerInfo.appendChild(phoneParagraph);
footerInfo.appendChild(addressParagraph);

// Create the second div with class "footer-social"
var footerSocial = document.createElement("div");
footerSocial.className = "footer-social";

// Create the "Follow Us" heading
var followHeading = document.createElement("h2");
followHeading.textContent = "Follow Us";

// Create an unordered list for social links
var socialList = document.createElement("ul");

// Create social list items with image icons
var socialLinks = [
  { text: "Facebook", href: "https://www.facebook.com", target: "_blank", imgSrc: ImagenFace, imgAlt: "Facebook" },
  { text: "Twitter", href: "https://www.twitter.com", target: "_blank", imgSrc: ImagenTweet, imgAlt: "Twitter" },
  { text: "Instagram", href: "https://www.instagram.com", target: "_blank", imgSrc: ImagenInst, imgAlt: "Instagram" },
];

// Create list items for social links
for (var i = 0; i < socialLinks.length; i++) {
  var listItem = document.createElement("li");
  var anchor = document.createElement("a");
  anchor.href = socialLinks[i].href;
  anchor.target = socialLinks[i].target;
  
  // Create an image element with src and alt attributes
  var img = document.createElement("img");
  img.src = socialLinks[i].imgSrc;
  img.alt = socialLinks[i].imgAlt;
  
  anchor.appendChild(img);
  listItem.appendChild(anchor);
  socialList.appendChild(listItem);
}

// Append the elements to the "footer-social" div
footerSocial.appendChild(followHeading);
footerSocial.appendChild(socialList);

// Append the "footer-info" and "footer-social" divs to the "footer-content" div
footerContent.appendChild(footerInfo);
footerContent.appendChild(footerSocial);

// Append the "footer-content" div to the footer element
footer.appendChild(footerContent);




//             --------------------------------------------                      Sppend the main container to the document -->
// 
document.body.appendChild(topContainer);
document.body.appendChild(header);
document.body.appendChild(mainContainer);
//document.body.appendChild(menuContainer);
document.body.appendChild(container);
document.body.appendChild(footer);


// Reserve Button
function ReserveRoom(evt, room){
    //var jsonData = Rooms;
    console.log(room);
    /*Object.keys(jsonData).forEach(room => {

    });*/
}

// Tabbed Menu
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-dark-grey";


      // Load Reservations items dynamically
  if (menuName === 'Reservations') {
    // Clear existing menu items
    while (ReservationsMenuDiv.firstChild) {
        ReservationsMenuDiv.removeChild(ReservationsMenuDiv.firstChild);
    }

    var jsonData = Rooms;
    //var jsonData = 'rooms.json';
    var ReservationsItems = [];
    Object.keys(jsonData).forEach(room => {
        var item = {
            RoomNumber: jsonData[room].RoomNumber,
            BedType: jsonData[room].BedType,
            NumberOfGuests: jsonData[room].NumberOfGuests,
            Balcony: jsonData[room].Balcony,
            Available: jsonData[room].Available,
            ImagePath: jsonData[room].ImagePath,
            Date: jsonData[room].Date
        };
        ReservationsItems.push(item);
    });

    // Define the dynamic Reservations items
    for (var j = 0; j < ReservationsItems.length; j++) {
        
        // Create a closure to capture the current RoomNumber
        (function (roomNumber){
            // Create a container div for the flex layout
            var flexContainer = document.createElement("div");
            flexContainer.style.display = "flex";
            flexContainer.style.justifyContent = "space-between"; // Align items with space between
        
            // Create a container div for the flex layout
            var flexContainer = document.createElement("div");
            flexContainer.style.display = "flex";
            flexContainer.style.justifyContent = "space-between"; // Align items with space between

            var leftCell = document.createElement("div"); // Left cell
            var centerCell = document.createElement("div"); // Right cell
            centerCell.style.display = "flex";
            centerCell.style.justifyContent = "center"; // Center horizontally
            centerCell.style.alignItems = "center"; // Center vertically
            var rightCell = document.createElement("div"); // Right cell
            rightCell.style.display = "flex";
            rightCell.style.justifyContent = "center"; // Center horizontally
            rightCell.style.alignItems = "center"; // Center vertically

            var space = document.createElement("br");

            var RoomNumber = document.createElement("h5");
            RoomNumber.textContent = "Room  " + ReservationsItems[j].RoomNumber;

            var BedType = document.createElement("p");
            BedType.className = "w3-text-grey";
            BedType.textContent = "Bed Type:  " + ReservationsItems[j].BedType;

            var Balcony = document.createElement("p");
            Balcony.className = "w3-text-grey";
            Balcony.textContent = "Balcony:  " + ReservationsItems[j].Balcony;

            var Guest = document.createElement("p");
            Guest.className = "w3-text-grey";
            Guest.textContent = "Guests:  " + ReservationsItems[j].NumberOfGuests;

            /*var button = document.createElement("button");
            button.textContent = "Reserve"; // Change the text as needed
            button.className = "w3-button";
            // Add a click event listener to the button
            button.href = "javascript:void(0)";
            button.onclick = function () { ReserveRoom(event, roomNumber) };*/

            // Append elements to left cell
            leftCell.appendChild(space);
            leftCell.appendChild(RoomNumber);
            leftCell.appendChild(BedType);
            leftCell.appendChild(Balcony);
            leftCell.appendChild(Guest);

            // Append the button to the center cell
            var image = document.createElement("img");
            image.src = ReservationsItems[j].ImagePath;
            image.width = 260;
            image.height = 100;
            centerCell.appendChild(image);

            // Append the button to the right cell
            /////rightCell.appendChild(button);

            // Append left and right cells to the flex container
            flexContainer.appendChild(leftCell);
            flexContainer.appendChild(centerCell);
            flexContainer.appendChild(rightCell);

            // Append the flex container to your parent element (ReservationsMenuDiv)
            ReservationsMenuDiv.appendChild(flexContainer);

        })(ReservationsItems[j].RoomNumber); // Immediately invoke the closure function

    }
  }

  if (menuName === 'Drinks') {
    // Clear existing menu items
    while (DrinksMenuDiv.firstChild) {
        DrinksMenuDiv.removeChild(DrinksMenuDiv.firstChild);
    }

    // Define the dynamic Drinks items
    var DrinksItems = [
      { title: "Coffee3", description: "Regular coffee 2.50" },
      { title: "Tea2", description: "Assorted tea varieties 2.00" },
      { title: "Latte3", description: "Espresso with steamed milk 4.00" },
    ];

    // Create and append the dynamic "Drinks" menu items to the div
    for (var j = 0; j < DrinksItems.length; j++) {
      var DrinksItemTitle = document.createElement("h5");
      DrinksItemTitle.textContent = DrinksItems[j].title;

      var DrinksItemDescription = document.createElement("p");
      DrinksItemDescription.className = "w3-text-grey";
      DrinksItemDescription.textContent = DrinksItems[j].description;

      DrinksMenuDiv.appendChild(DrinksItemTitle);
      DrinksMenuDiv.appendChild(DrinksItemDescription);
    }
  }



  }



}





document.body.appendChild(componente());