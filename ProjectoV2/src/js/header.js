// JavaScript to handle image switching
var images = [
    'src/Imagenes/legoland-florida-resort.jpg',
    'src/Imagenes/main-image.jpg',
    'src/Imagenes/hotel-de-legoland-florida-7.jpg',
    'src/Imagenes/hotel-de-legoland-florida-770x385.jpg',
    'src/Imagenes/holidays-costume-characters.jpg'
]; 
var index = 0;
// Start the image-changing process
/*function changeImage() {
    var element = document.querySelector('.bgimg');
    element.style.opacity = 0.8; // Set opacity to 0 before changing the image
    setTimeout(function () {
        element.style.opacity = 0.5;
        // Add a delay before changing the image
        setTimeout(function () {
            element.style.backgroundImage = 'url(' + images[index] + ')';
            element.style.opacity = 1; // Set opacity back to 1 after changing the image
            index = (index + 1) % images.length;
            setTimeout(changeImage, 2500);
        }, 200); // Adjust the delay duration (in milliseconds) as needed
    }, 200); // Use a timeout that matches the transition duration
}*/
function changeImage() {
    document.querySelector('.bgimg').style.backgroundImage = 'url(' + images[index] + ')';
    index = (index + 1) % images.length;
    setTimeout(changeImage, 2500);
}

/*var timeOut = 100;
function changeImage() {
    var element = document.querySelector('.bgimg');
    element.style.opacity = 0.9; // Set opacity to 0 before changing the image

    setTimeout(function () {
        element.style.opacity = 0.8;
        // First delay
        setTimeout(function () {
            element.style.opacity = 0.7;
            // Second delay
            setTimeout(function () {
                element.style.opacity = 0.6;
                // Third delay
                setTimeout(function () {
                    element.style.opacity = 0.5;
                    // Fourth delay
                    setTimeout(function () {
                        element.style.opacity = 0.4;
                        // Fifth delay
                        setTimeout(function () {
                            element.style.opacity = 0.3;
                            // Sixth delay
                            setTimeout(function () {
                                element.style.opacity = 0.2;
                                // Seventh delay
                                setTimeout(function () {
                                    element.style.opacity = 0.1;
                                    // Eighth delay
                                    setTimeout(function () {
                                        element.style.backgroundImage = 'url(' + images[index] + ')';
                                        element.style.opacity = 1; // Set opacity back to 1 after changing the image
                                        index = (index + 1) % images.length;
                                        setTimeout(changeImage, 2500);
                                    }, timeOut); // Duration of the eighth delay
                                }, timeOut); // Duration of the seventh delay
                            }, timeOut); // Duration of the sixth delay
                        }, timeOut); // Duration of the fifth delay
                    }, timeOut); // Duration of the fourth delay
                }, timeOut); // Duration of the third delay
            }, timeOut); // Duration of the second delay
        }, timeOut); // Duration of the first delay
    }, timeOut); // Use a timeout that matches the transition duration
}*/

/*function changeImageWithDelays(delayCount) {
    var element = document.querySelector('.bgimg');
    element.style.opacity = 0.5; // Set opacity to 0 before changing the image

    function performChange() {
        element.style.backgroundImage = 'url(' + images[index] + ')';
        element.style.opacity = 1; // Set opacity back to 1 after changing the image
        index = (index + 1) % images.length;
        if (delayCount > 0) {
            setTimeout(function () {
                changeImageWithDelays(delayCount - 1);
            }, 100); // Duration of each delay is 1000 milliseconds (1 second)
        } else {
            setTimeout(changeImage, 2500); // Transition duration after all delays
        }
    }

    setTimeout(performChange, 200); // Use a timeout that matches the initial transition duration
}*/

// Call the function with the total number of delays (6 in this case)
//changeImageWithDelays(6);