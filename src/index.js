console.log('%c HI', 'color: firebrick')
// Wait for the DOM to fully load before executing
document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
    // Fetch dog images from the API
    fetch(imgUrl)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            const imagesContainer = document.getElementById('images-container');
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');  // Create an img element
                img.src = imageUrl;  // Set the src attribute to the image URL
                img.alt = "Dog image";  // Set alt text for the image
                imagesContainer.appendChild(img);  // Append the image to the container
            });
        })
        .catch(error => {
            console.error('Error fetching dog images:', error);
        });
});
document.addEventListener("DOMContentLoaded", function () {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    // Fetch dog breeds from the API
    fetch(breedUrl)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
            const breedsList = document.getElementById('breeds-list');
            const breeds = data.message;
            
            // Iterate over the breed data and create list items
            for (let breed in breeds) {
                const li = document.createElement('li');  // Create <li> element for each breed
                li.textContent = breed;  // Set text content to the breed name
                breedsList.appendChild(li);  // Append the list item to the <ul>
            }
        })
        .catch(error => {
            console.error('Error fetching dog breeds:', error);
        });
});
document.addEventListener("DOMContentLoaded", function () {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    // Fetch dog breeds from the API
    fetch(breedUrl)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
            const breedsList = document.getElementById('breeds-list');
            const breeds = data.message;
            
            // Iterate over the breed data and create list items
            for (let breed in breeds) {
                const li = document.createElement('li');  // Create <li> element for each breed
                li.textContent = breed;  // Set text content to the breed name
                breedsList.appendChild(li);  // Append the list item to the <ul>
            }
        })
        .catch(error => {
            console.error('Error fetching dog breeds:', error);
        });
});
document.addEventListener("DOMContentLoaded", function () {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const filterDropdown = document.getElementById('breed-filter');
    const breedsList = document.getElementById('breeds-list');

    // Fetch dog breeds and add them to the DOM
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = data.message;
            let breedArray = Object.keys(breeds);  // Get an array of all breed names

            // Add breed items to the list
            breedArray.forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                breedsList.appendChild(li);
            });

            // Filter breeds by selected letter in the dropdown
            filterDropdown.addEventListener('change', function () {
                const selectedLetter = filterDropdown.value;
                breedsList.innerHTML = '';  // Clear the list before filtering
                
                // Filter and display breeds starting with the selected letter
                breedArray.forEach(breed => {
                    if (breed[0].toLowerCase() === selectedLetter) {
                        const li = document.createElement('li');
                        li.textContent = breed;
                        breedsList.appendChild(li);
                    }
                });
            });
        })
        .catch(error => {
            console.error('Error fetching dog breeds:', error);
        });
});
