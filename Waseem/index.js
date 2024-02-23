// Get the cardDiv element
const cardDiv = document.querySelector('.cardDiv');

// Create scroll buttons
const scrollLeftButton = document.createElement('button');
scrollLeftButton.innerHTML = '&lt;';
scrollLeftButton.id = 'scrollLeftButton';
scrollLeftButton.classList.add('scrollButton');

const scrollRightButton = document.createElement('button');
scrollRightButton.innerHTML = '&gt;';
scrollRightButton.id = 'scrollRightButton';
scrollRightButton.classList.add('scrollButton');

// Append scroll buttons to cardDiv
cardDiv.parentNode.insertBefore(scrollLeftButton, cardDiv);
cardDiv.parentNode.insertBefore(scrollRightButton, cardDiv.nextSibling);

// Add event listeners to scroll buttons
scrollLeftButton.addEventListener('click', () => {
  cardDiv.scrollLeft -= 100; // Adjust the scroll step as needed
});

scrollRightButton.addEventListener('click', () => {
  cardDiv.scrollLeft += 100; // Adjust the scroll step as needed
});
