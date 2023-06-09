// Function to fetch jokes
function fetchJokes(query) {
  var apiUrl = 'https://v2.jokeapi.dev/joke/Any';

  $.ajax({
    url: apiUrl,
    method: 'GET',
    data: {
      contains: query
    },
    success: function(response) {
      // Process the response and display the jokes
      if (response.type === 'single') {
        // Display single-part joke
        console.log(response.joke);
      } else if (response.type === 'twopart') {
        // Display two-part joke
        console.log(response.setup);
        console.log(response.delivery);
      }
    },
    error: function() {
      // Handle error cases
      console.log('Error occurred while fetching jokes.');
    }
  });
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  
  var query = $('#search-input').val();

  // Fetch recipes and jokes based on the user query
  fetchJokes(query);
}

// Attach event listener to form submission
$('#search-form').on('submit', handleFormSubmit);
