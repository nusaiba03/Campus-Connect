
// Function to flip the card when clicked
function flipCard() {
    var card = this.querySelector('.flip-card-inner');
    card.classList.toggle('flip');
}

// Function to handle the click event on the "Join" button
function handleJoinButtonClick() {
    // Redirect to the registration page
    window.location.href = "/register"; // Replace "/register" with the appropriate URL
    
    // Display a confirmation message
    alert("You have joined successfully!");
}

// Add event listeners to all flip cards
var flipCards = document.querySelectorAll('.flip-card');
flipCards.forEach(function(card) {
    card.addEventListener('click', flipCard);
});

// Add event listeners to all "Join" buttons
var joinButtons = document.querySelectorAll('.join-button');
joinButtons.forEach(function(button) {
    button.addEventListener('click', handleJoinButtonClick);
});
