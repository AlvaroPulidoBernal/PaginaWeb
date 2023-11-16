
function displayIntranet(evt, menuName) {
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
    
    if (menuName === 'Intranet') {
        // Clear existing menu items
        var existingDiv = document.getElementById("Intranet");
        while (existingDiv.firstChild) {
            existingDiv.removeChild(existingDiv.firstChild);
        }
        // Create a div element with class "login-container"
        var loginContainer = document.createElement('div');
        loginContainer.className = 'login-container';

        // Create an h2 element for the heading "Login"
        var heading = document.createElement('h2');
        heading.textContent = 'Login';

        // Create a form element
        var form = document.createElement('form');

        // Create a label and input element for the username
        var usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username:';
        usernameLabel.setAttribute('for', 'username');

        var usernameInput = document.createElement('input');
        usernameInput.setAttribute('type', 'text');
        usernameInput.setAttribute('id', 'username');
        usernameInput.setAttribute('name', 'username');
        usernameInput.setAttribute('required', 'true');

        // Create a label and input element for the password
        var passwordLabel = document.createElement('label');
        passwordLabel.textContent = 'Password:';
        passwordLabel.setAttribute('for', 'password');

        var passwordInput = document.createElement('input');
        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('id', 'password');
        passwordInput.setAttribute('name', 'password');
        passwordInput.setAttribute('required', 'true');

        // Create a button element for login
        var loginButton = document.createElement('button');
        loginButton.textContent = 'Login';
        loginButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default form submission
            loginButtonClick()
        });

        // Append the elements to the form
        form.appendChild(usernameLabel);
        form.appendChild(usernameInput);
        form.appendChild(passwordLabel);
        form.appendChild(passwordInput);
        form.appendChild(loginButton);

        // Append the heading and form to the login container
        loginContainer.appendChild(heading);
        loginContainer.appendChild(form);

        // Append the login container to the document body
        existingDiv.appendChild(loginContainer);

    }

  
  }

// Predefined set of valid credentials
var validUsername = 'a';
var validPassword = '1';
function loginButtonClick() {
    // Get the values from the username and password fields
    var usernameValue = document.getElementById('username').value;
    var passwordValue = document.getElementById('password').value;

    // Check if both fields are not empty
    if (usernameValue.trim() !== '' && passwordValue.trim() !== '') {
        if (usernameValue === validUsername && passwordValue === validPassword) {
            ShowComments();
            alert('Login successful!');
        } else {
            alert('Invalid username or password.');
        }
    } else {
        alert('Please enter both username and password.');
    }
}


function ShowComments(){
    // Clear existing menu items
    var existingDiv = document.getElementById("Intranet");
    while (existingDiv.firstChild) {
        existingDiv.removeChild(existingDiv.firstChild);
    }



    var amountOfRooms = 0;
    var amountOfRoomsOccupied = 0;
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
            if(!jsonData[room].Available){
                amountOfRoomsOccupied += 1;
            }
            amountOfRooms += 1;    
        });
                // Create table element
                const table = document.createElement('table');
                table.style.borderCollapse = 'collapse';
                table.style.width = '100%';
                table.style.marginTop = '20px';
        
                // Create table header
                const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');
                const headers = ['Total Rooms', 'Rooms occupied', 'Rooms available'];
        
                headers.forEach(headerText => {
                    const th = document.createElement('th');
                    th.style.border = '1px solid #dddddd';
                    th.style.textAlign = 'left';
                    th.style.padding = '8px';
                    th.style.backgroundColor = '#f2f2f2';
                    th.appendChild(document.createTextNode(headerText));
                    headerRow.appendChild(th);
                });
        
                thead.appendChild(headerRow);
                table.appendChild(thead);
        
                // Create table body
                const tbody = document.createElement('tbody');
                const rowData = [amountOfRooms, amountOfRoomsOccupied, amountOfRooms - amountOfRoomsOccupied];
                const row = document.createElement('tr');
        
                rowData.forEach(value => {
                    const cell = document.createElement('td');
                    cell.style.border = '1px solid #dddddd';
                    cell.style.textAlign = 'left';
                    cell.style.padding = '8px';
                    cell.appendChild(document.createTextNode(value));
                    row.appendChild(cell);
                });
        
                tbody.appendChild(row);
                table.appendChild(tbody);
                existingDiv.appendChild(table);
    })
    .catch((error) => {
        console.error('Error fetching or parsing the JSON file:', error);
    });






    var CommentsItems = [];
    fetch('src\\Files\\comments.json')
    .then((response) => response.json())
    .then((jsonData) => {
        Object.keys(jsonData).forEach(comment => {
            var item = {
                UserID: jsonData[comment].UserID,
                UserName: jsonData[comment].UserName,
                Comment: jsonData[comment].Comment,
                Rating: jsonData[comment].Rating,
                Date: jsonData[comment].Date
            };
            CommentsItems.push(item);
        });
        
            // Now CommentsItems array contains the transformed data
            var table = document.createElement("table");
            table.classList.add("responsive-table");
            table.style.borderCollapse = "collapse";
            table.style.width = "100%";

            // Create table header
            /*var header = table.createTHead();
            var headerRow = header.insertRow(0);
            var headers = ["User ID", "User Name", "Comment", "Rating", "Date"];
            headers.forEach(headerText => {
                var th = document.createElement("th");
                th.style.border = "3px solid #dddddd";
                th.style.textAlign = "left";
                th.style.padding = "8px";
                var text = document.createTextNode(headerText);
                th.appendChild(text);
                headerRow.appendChild(th);
            });*/

            // Create table body
            var tableBody = document.createElement("tbody");
            CommentsItems.forEach(comment => {
                var row = tableBody.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);

                var cells = [cell1, cell2, cell3, cell4, cell5];
                cells.forEach(cell => {
                    cell.style.border = "1px solid #dddddd";
                    cell.style.padding = "8px";
                });

                cell1.appendChild(document.createTextNode("User ID\n" + comment.UserID));
                cell2.appendChild(document.createTextNode("User Name\n" + comment.UserName));
                cell3.appendChild(document.createTextNode("Comment\n" + comment.Comment));

                // Create stars for the rating
                var ratingCell = document.createElement("div");
                ratingCell.innerHTML = "Rating\n" + generateStarRating(comment.Rating);
                cell4.appendChild(ratingCell);

                cell5.appendChild(document.createTextNode("Date\n" + comment.Date));
                /*cell1.style.borderBottom = "3px solid #000000";
                cell2.style.borderBottom = "3px solid #000000";
                cell3.style.borderBottom = "3px solid #000000";
                cell4.style.borderBottom = "3px solid #000000";*/
                cell5.style.borderBottom = "3px solid #000000";
            });

            table.appendChild(tableBody);
            existingDiv.appendChild(table);
    })
    .catch((error) => {
        console.error('Error fetching or parsing the JSON file:', error);
    });

}


function generateStarRating(rating) {
    var stars = "";
    for (var i = 0; i < rating; i++) {
        stars += "&#9733;"; // Unicode for a solid star
    }
    return stars;
}


function ShowAvailableRooms(){
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
            if(!jsonData[room].Available){
                amountOfRoomsOccupied += 1;
            }
            amountOfRooms += 1;    
        });
        console.log("Available rooms: " + amountOfRooms);
        console.log("Ocuppied rooms: " + amountOfRoomsOccupied);
    })
    .catch((error) => {
        console.error('Error fetching or parsing the JSON file:', error);
    });
    
}
