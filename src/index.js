document.addEventListener('DOMContentLoaded', function () {
    console.log('%c HI', 'color: firebrick');
  
    // Challenge 1: Fetch and render dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById('dog-image-container');
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          dogImageContainer.appendChild(imgElement);
        });
      });
  
    // Challenge 2: Fetch and render dog breeds
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    const dogBreedsList = document.getElementById('dog-breeds');
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const liElement = document.createElement('li');
          liElement.textContent = breed;
          dogBreedsList.appendChild(liElement);
        });
      });
  
    // Challenge 3: Change font color on li click
    dogBreedsList.addEventListener('click', function (event) {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'purple'; 
      }
    });
  
    // Challenge 4: Filter breeds based on selected letter
    const breedDropdown = document.getElementById('breed-dropdown');
  
    breedDropdown.addEventListener('change', function () {
      const selectedLetter = breedDropdown.value;
      const allBreeds = Array.from(dogBreedsList.children);
  
      allBreeds.forEach(breed => {
        const breedName = breed.textContent.toLowerCase();
        breed.style.display = breedName.startsWith(selectedLetter) ? 'block' : 'none';
      });
    });
  });
  