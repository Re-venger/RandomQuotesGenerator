// *this gives the ref to the get quotes button
let new_quote_btn = document.querySelector("#js-new-quote");

// *Here is the code for the spinner
const spinner = document.querySelector('.sk-circle');

// *this is to get the ref of the tweet button
const twitterButton = document.querySelector("#js-tweet");




new_quote_btn.addEventListener('click', getQuote);

// !creating the endpoint for the API
const endPoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
const quoteEndPoint = 'https://api.quotable.io/random';


// ! fetching the quotes
async function getQuote() {
    let div = document.querySelector(".quote-text");
    div.innerHTML = "";
    // code for the spinner
    spinner.classList.remove('hidden');
    new_quote_btn.disabled = true;

    try{
        const response = await fetch(quoteEndPoint);
        if(!response.ok){
            throw Error(response.statusText);
        }
        
        const jsonData = await response.json();
        addQuote(jsonData.content, jsonData.author);
        sendTweetOverTwitter(jsonData.content, jsonData.author);
    }
    catch(err){
        alert("Failed TO Fetch new Quote! Sorry");
    }
    finally{
        new_quote_btn.disabled = false;
        spinner.classList.add('hidden');
    }
}

// !code to insert the code in the div
function addQuote(quote, author){
    let div = document.querySelector(".quote-text");
    let qAuth = document.querySelector(".author");
    div.innerHTML = quote + "<br><br>" + author;
}



// ! adding functionality to the tweet button
function sendTweetOverTwitter(quote, author){
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - ${author}`)
}


//! this will display the quote even when you referesh teh page
getQuote();

