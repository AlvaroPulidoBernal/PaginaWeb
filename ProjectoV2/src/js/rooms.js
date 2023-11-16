
var amountOfRooms = 0;
var amountOfRoomsOccupied = 0;

function getAmountOfRooms(){
    console.log(amountOfRooms);
    return amountOfRooms;
}

function getAmountOfRoomsFull(){
    console.log(amountOfRoomsOccupied);
    return amountOfRoomsOccupied;
}

function displayRooms(evt, menuName) {
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
    
    var ReservationsItems = [];
    if (menuName === 'Reservations') {
        // Clear existing menu items
        var existingDiv = document.getElementById("Reservations");
        while (existingDiv.firstChild) {
            existingDiv.removeChild(existingDiv.firstChild);
        }
        amountOfRooms = 0;
        amountOfRoomsOccupied = 0;
        fetch('src\\Files\\rooms.json')
        .then((response) => response.json())
        .then((jsonData) => {
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
                if(jsonData[room].Available){
                    ReservationsItems.push(item);
                    // Order ReservationsItems based on the number of guests
                    ReservationsItems.sort((a, b) => a.NumberOfGuests - b.NumberOfGuests);
                }else{
                    amountOfRoomsOccupied += 1;
                }
                amountOfRooms += 1;    
            });
            // Now ReservationsItems array contains the transformed data
            for (var j = 0; j < ReservationsItems.length; j++) {
                
                // Create a closure to capture the current RoomNumber
                (function (roomNumber){
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
                    var balconyStatus = ReservationsItems[j].Balcony ? "Available" : "Not included";
                    Balcony.textContent = "Balcony:  " + balconyStatus;
    
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
                    image.classList.add("responsive-image");
                    centerCell.appendChild(image);
    
                    // Append the button to the right cell
                    //rightCell.appendChild(button);
    
                    // Append left and right cells to the flex container
                    flexContainer.appendChild(leftCell);
                    flexContainer.appendChild(centerCell);
                    //flexContainer.appendChild(rightCell);
    
                    // Append the flex container to your parent element (ReservationsMenuDiv)
                    existingDiv.appendChild(flexContainer);
    
                })(ReservationsItems[j].RoomNumber); // Immediately invoke the closure function
            }


            
        })
        .catch((error) => {
            console.error('Error fetching or parsing the JSON file:', error);
        });
    }

  
  }