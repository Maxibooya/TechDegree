// FSJS - Random Quote Generator

//The array where the quotes are stored as objects
var quotes = [
    {
        quote: 'Where we are going, we do not need roads.',
        source: 'Dr. Emmett Brown , Back to the Future'
    },{
        quote: 'Well, it is not the men in your life that counts, it is the life in your men.',
        source: 'Tira , I am No Angel'
    },{
        quote: 'Oh no, it was not the airplanes. It was beauty killed the beast.',
        source: 'Carl Denham , King Kong'
    },{
        quote: 'Go ahead, make my day.',
        source: 'Harry Callahan , Sudden Impact'
    },{
        quote: 'It is not the years honey, it is the mileage.',
        source: 'Indiana Jones , Raiders of the Lost Ark'
    }
]


//getRandomQuote function to generate a random quote from an array
function getRandomQuote(array){
  var randomNumber =  Math.floor(Math.random() * array.length);
  var randomQuote = array[randomNumber];
  return randomQuote;

}


//printQuote funtion accesses a random quote from the named array and formats it before sending it to the page
function printQuote(){
  var newQuote = getRandomQuote(quotes);
  var string = ' '+'<p class="quote">' + newQuote.quote + '</p>' + '<p class="source">' + newQuote.source;

    document.getElementById('quote-box').innerHTML = string;

}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
