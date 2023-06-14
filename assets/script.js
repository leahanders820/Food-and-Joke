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
// Fetch to get items contained in the Json Object from Recipe API
// Items are logged out to console
fetch(url3, options3)
  .then(respons => respons.json())
  .then(data => {
  var meals = data.meals[0]
  console.log(data.meals)
  console.log(meals.strMeal)
  console.log(meals.strMealThumb)
  console.log(meals.strSource)
  console.log(meals.strYoutube)

  // For Loop to parse into strings, items from JSON Object from Recipe API

  for (let index = 1; index < 21; index++) {
    // var ingredients = "strIngredient" + index.toString();
    var ingredients = `strIngredient${index}`;
    var measurements = "strMeasure" + index.toString();
    console.log(meals[ingredients], meals[measurements])
    }
  console.log(meals.strInstructions)

})
// Function to fetch 'clean' jokes
function fetchJokes() {
  var apiUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
  $.ajax({
    url: apiUrl,
    method: 'GET',
 
    success: function (response) {
      // Process the response and display the jokes
      if (response.type === 'single') {
        populateSingleJoke(response.joke)
        // Display single-part joke
        console.log(response.joke);
      } else if (response.type === 'twopart') {
        populateTwoPartSetup(response.setup)
        // Display two-part joke
        populateTwoPartDelivery(response.delivery)
        // setTimeout(populateTwoPartDelivery(response.delivery), 3000)
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

function populateSingleJoke(joke) {
  $('#jokecontainer2').empty()
  console.log(joke)
  $('#setup').html(joke)
  localStorage.setItem("Last-Joke", joke)
}

// function populateTwoPartSetup(setup){
//  $('#jokecontainer').append(setup)
// }
function populateTwoPartSetup(setup) {
  // $('#jokecontainer').empty()

  console.log(setup)
  $('#setup').html(setup)
  // $('#jokecontainer2').html(delivery)
  // localStorage.setItem("Last-Joke", setup)
}

function populateTwoPartDelivery(delivery){
  setTimeout($('#jokecontainer2').html(delivery), 3000)
}



function getLastJokeAndRecipe() {
  localStorage.getItem(Last-Joke)
}
// Attach event listener to form submission
$('#search-form').on('click', fetchJokes);
