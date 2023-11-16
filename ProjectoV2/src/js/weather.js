

function displayWeather(evt, menuName) {
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
    
    if (menuName === 'Weather') {
        // Clear existing menu items
        var existingDiv = document.getElementById("Weather");
        while (existingDiv.firstChild) {
            existingDiv.removeChild(existingDiv.firstChild);
        }
        // Create the form element
        var form = document.createElement("form");
        form.action = "/weather";
        form.method = "GET";

        // Create the label element
        var label = document.createElement("label");
        label.htmlFor = "location";
        label.textContent = "Enter a location:      ";
        label.id = "weatherLabel";

        // Create the input element
        var input = document.createElement("input");
        input.type = "text";
        input.id = "location";
        input.name = "location";
        input.required = true;

        // Create the button element
        var button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Get Weather";
        button.id = "weatherButton";
            // Add a click event listener to the button
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default form submission
            var locationValue = input.value;
            getWeather(locationValue);
        });

        // Append label, input, and button to the form
        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(button);
        var weatherInfoDiv = document.createElement('div');
        // Set the id attribute of the div element
        weatherInfoDiv.id = 'weather-info';

        // Append the form to the container element with id "formContainer"
        existingDiv.appendChild(form);
        existingDiv.appendChild(weatherInfoDiv);

    }

  
  }


const apiKey = '55f45996a84706946ffe7f4204db6f9a';
// Function to fetch weather data
async function getWeather(city) {
  const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const weatherInfo = document.getElementById('weather-info');
    const data = await response.json();
    if (data.error) {
        weatherInfo.textContent = `Error: Please enter valid cities`;
    }else {
        const country = data.location.country;
        const region = data.location.region;
        const temperature = data.current.temperature;
        const description = data.current.weather_descriptions[0];
        const weatherIcons = data.current.weather_icons;

        let iconHtml = '';
        // Create HTML for weather icons
        if (weatherIcons && weatherIcons.length > 0) {
          iconHtml = weatherIcons.map(iconUrl => `<img src="${iconUrl}" alt="Weather Icon" />`).join('');
        }
        weatherInfo.innerHTML = 
                    `Country: ${country} <br><br>
                     Region: ${region} <br><br>
                     Temperature: ${temperature}°C <br><br> 
                     Description: ${description} <br><br>
                     ${iconHtml}`;
      }
    // Process the weather data here as needed
    // For example, you can access temperature: data.current.temperature

  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
}
