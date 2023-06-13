// Recipe Fetch (API Call)
const url3 = 'https://cors-every-where.herokuapp.com/' + 'http://www.themealdb.com/api/json/v1/1/random.php';
const options3 = {
  method: 'GET',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET",
  }
}
fetch(url3, options3)
  .then(respons => respons.json())
  .then(data => console.log(data))
// Function to fetch jokes
function fetchJokes() {
  var apiUrl = 'https://v2.jokeapi.dev/joke/Any';
  $.ajax({
    url: apiUrl,
    method: 'GET',
    // data: {
    //   contains: query
    // },
    success: function (response) {
      // Process the response and display the jokes
      if (response.type === 'single') {
        populateSingleJoke(response.joke)
        // Display single-part joke
        console.log(response.joke);
      } else if (response.type === 'twopart') {
        // Display two-part joke
        console.log(response.setup);
        console.log(response.delivery);
      }
    },
    error: function () {
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
  // foodSearch(query);
}
function populateSingleJoke(joke) {
  $('#jokecontainer').append(joke)
}
// Attach event listener to form submission
$('#search-form').on('click', fetchJokes);

