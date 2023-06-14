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
        
        setTimeout(function(){populateTwoPartDelivery(response.delivery)}, 3000)
        // sets timer for 3 seconds for delivery joke
        
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
  $('#delivery').empty()
  // clears joke

  console.log(joke)
  $('#setup').html(joke)
  // sends single joke to html
  
}


function populateTwoPartSetup(setup) {
  console.log(setup)
  $('#setup').html(setup)
  // sends the setup of twopartjoke to the html
}

function populateTwoPartDelivery(delivery){
  $('#delivery').html(delivery)
  // sends the delivery of twopartjoke to the html
}



function getLastJokeAndRecipe() {
  localStorage.getItem(Last-Joke)
  // not sure
}



function saveJoke (){
  var joke1 =$('#setup').text()  
  // creates a variable for setup joke
  var joke2 =$('#delivery').text()
  // creates a variable for delivery joke
  
  localStorage.setItem("Setup", joke1)
  localStorage.setItem("Delivery", joke2)
  // stores setup and delivery into localStorage under "Setup" and "Delivery"
}
$('#saveJoke').on('click', saveJoke)
// button that saves joke in localStorage
$('#newJoke').on('click', fetchJokes);
// button that generates new joke