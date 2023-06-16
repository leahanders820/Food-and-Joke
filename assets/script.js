var recipeContents = document.getElementById("recipeContents")
var jokeContents = document.getElementById("jokeContents")

function renderJokeAndRecipe(){
  console.log("btnclicked")
  var Setup = (localStorage.getItem("Setup"))
  var Delivery = (localStorage.getItem("Delivery"))

  if (Setup !== null){
    jokeContents.innerHTML = Setup + "<br>" + Delivery
  }
   $('#ingredients').html(localStorage.getItem("ingredientsMeasurements"))
   $('#name').text(localStorage.getItem('recipeName'))
   $('#instructions').text(localStorage.getItem('recipeInstructions'))
   $('#savedRecipe2').removeClass("hidden")
   $('#savedJoke').removeClass("hidden")
}

// Recipe Fetch (API Call)
function populateRecipe() {
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
  var ingredientsArray = []
  console.log(data.meals)
  console.log(meals.strMeal)
  console.log(meals.strMealThumb)
  console.log(meals.strSource)
  console.log(meals.strYoutube)
  
  // For Loop to parse into strings, items from JSON Object from Recipe API
  for (let index = 1; index < 21; index++) {
    var ingredients = `strIngredient${index}`;
    var measurements = "strMeasure" + index.toString();
    ingredientsArray.push(meals[ingredients] + " " + meals[measurements]) 
    console.log(meals[ingredients], meals[measurements])
    }
  console.log(meals.strInstructions)
  populateRecipeCard(meals,ingredientsArray)
})
// function to populate ids on respective cards on UI from api
}
function populateRecipeCard(meals,ingredientsArray){
  $('#recipeName').html(meals.strMeal)
  $('#recipeUrl').html(meals.strSource)
  $('#recipeVideo').html(meals.strYoutube)
  $('#ingredientsMeasurements').html(meals)
  $('#recipeInstructions').html(meals.strInstructions)
  $('#recipeTitle').removeClass("hidden")
  $('#ingredientsTitle').removeClass("hidden")
  $('#instructionsTitle').removeClass("hidden")
  $('#hideMe').removeClass("hidden")
  console.log(ingredientsArray)
  for (let index = 0; index < ingredientsArray.length; index++) {
    const element = ingredientsArray[index];
    // element is the 'word' we want to put into a li tag in the html
    // target an ol in the html; create a li; set text content to element
    // append li onto the ol.
    if (element.length > 2 ){
    document.querySelector("#ingredientsMeasurements").innerHTML += element + "<br>"
    }
    console.log(element)
  }
}

function saveRecipe(){
  var ingredientsMeasurements = $('#ingredientsMeasurements').html()
  var recipeName = $('#recipeName').text()
  var recipeInstructions = $('#recipeInstructions').text()
  console.log({ingredientsMeasurements, recipeName, recipeInstructions})
  localStorage.setItem('ingredientsMeasurements', ingredientsMeasurements)
  localStorage.setItem('recipeName', recipeName)
  localStorage.setItem('recipeInstructions', recipeInstructions)  
}

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

// Attach event listener to form submission
$('#search-form').on('click', fetchJokes);
$('#search-form').on('click', populateRecipe);
$('#btnbottom').on('click', renderJokeAndRecipe);
// $('#btnbottom').on('click',"");
$('#savedRecipe').on('click', saveRecipe);
