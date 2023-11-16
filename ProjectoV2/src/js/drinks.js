function displayDrinks(evt, menuName) {
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
    
    if (menuName === 'Drinks') {
        // Clear existing menu items
        var existingDiv = document.getElementById("Drinks");
        while (existingDiv.firstChild) {
            existingDiv.removeChild(existingDiv.firstChild);
        }
        // Create form elements
        var form = document.createElement('form');
        form.id = 'form-Drinks';

        var label = document.createElement('label');
        label.for = 'search-Input-Drinks';
        label.id = 'labelDrinks';
        label.textContent = 'Search through our drinks catalog';

        var input = document.createElement('input');
        input.type = 'text';
        input.id = 'search-Input-Drinks';
        input.name = 'searchInput';
        input.placeholder = 'Type the drink here';

        var button = document.createElement('button');
        button.type = 'submit';
        button.id = 'button-Drinks';
        button.textContent = 'Search';

        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default form submission
            var drinkValue = input.value;
            getDrink(drinkValue);
        });
        // Append elements to the form
        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(button);

        // Append the form to the body
        existingDiv.appendChild(form);
    }

    
    const apiKey = '1'; // Replace with your Weatherstack API key
    // Function to fetch drinks data
    async function getDrink(drink) {
      const apiUrl = `https://www.thecocktaildb.com/api/json/v1/${apiKey}/search.php?s=${drink}`;
      try {
        const response = await fetch(apiUrl);
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        var existingDiv = document.getElementById("Drinks");

        var elementsToDelete = document.getElementsByClassName('cocktail');        
        var elementsArray = Array.from(elementsToDelete);
        // Iterate over the array and remove each element
        elementsArray.forEach(function(element) {
            element.remove();
        });
        //Create Div to hold list of drinks
        var cocktailDiv = document.createElement('div');
        cocktailDiv.classList.add('cocktail');
        existingDiv.appendChild(cocktailDiv);

        const data = await response.json();
        if (data.error) {
            cocktailDiv.textContent = `Error: Please enter valid drinks`;
        }else {
            const cocktails = data.drinks;
            if (cocktails) {

                cocktails.forEach(cocktail => {
                    // Display basic information about the cocktail
                    const nameParagraph = document.createElement('p');
                    nameParagraph.textContent = `Cocktail Name: ${cocktail.strDrink}`;
                    cocktailDiv.appendChild(nameParagraph);
                    // Display ingredients in a list
                    const ingredientsList = document.createElement('ul');
                    ingredientsList.textContent = 'Ingredients:';
                    for (let i = 1; i <= 15; i++) {
                        const ingredient = cocktail[`strIngredient${i}`];
                        const measure = cocktail[`strMeasure${i}`];
                        // Check if ingredient and measure exist
                        if (ingredient) {
                            const listItem = document.createElement('li');
                            if(measure){
                                listItem.textContent = `${measure} ${ingredient}`;
                            }else{
                                listItem.textContent = `${ingredient}`;
                            }
                            ingredientsList.appendChild(listItem);
                        }
                    }
                    cocktailDiv.appendChild(ingredientsList);
                    const instructionsParagraph = document.createElement('p');
                    instructionsParagraph.textContent = `Instructions: ${cocktail.strInstructions}`;

                    // Display image
                    const image = document.createElement('img');
                    image.src = cocktail.strDrinkThumb; // Assuming the cocktail object has a property strDrinkThumb for the image URL
                    image.alt = `${cocktail.strDrink} Image`;
                    image.style.width = '400px'; 
                    image.style.display = 'block'; // Make the image a block-level element
                    image.style.margin = 'auto'; // Center the image
                    cocktailDiv.appendChild(image);

                    cocktailDiv.appendChild(instructionsParagraph);
                    const horizontalLine = document.createElement('hr');
                    horizontalLine.classList.add('custom-hr');
                    cocktailDiv.appendChild(horizontalLine);

                });
                // Append the cocktail div to the main div
                existingDiv.appendChild(cocktailDiv);
              } else {
                
                cocktailDiv.textContent = `Sorry the product entered does not exist`;
                console.log('No cocktails found for the specified name.');
              }
          }
      } catch (error) {
        console.error('Error fetching drinks data2:', error.message);
      }
    }
  
  }



