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

const url = 'https://humor-jokes-and-memes.p.rapidapi.com/jokes/search?exclude-tags=nsfw&keywords=rocket&min-rating=7&include-tags=one_liner&number=3&max-length=200';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95dd2557d2msh5efa2a3a96ccc0bp1ff4fbjsn4b53cc8c12dd',
		'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
	}
};
function foodSearch(foodInput){
	var formattedFoodSearch = foodInput.replace(" ","%20")
	console.log(foodInput)
	console.log(formattedFoodSearch)
	const url2 = "https://yummly2.p.rapidapi.com/feeds/auto-complete?q="+foodInput;
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95dd2557d2msh5efa2a3a96ccc0bp1ff4fbjsn4b53cc8c12dd',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}}

fetch(url2, options2)
	.then(respons => respons.json())
	.then(data => console.log(data))
}
foodSearch("fish tacos with cabbage")




// recipe api
const url3 = 'https://cors-every-where.herokuapp.com/'+'http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';

const options3 = {
	method: 'GET',
	headers: {
		"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Credentials": "true",
	"Access-Control-Allow-Methods": "GET",
	}}
fetch(url3, options3)
	.then(respons => respons.json())
	.then(data => console.log(data))