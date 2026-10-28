const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const githubBtn = document.getElementById('github-link');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = []; //Mutável

function newQuote(){
    // Serve para pegar apenas um valor do retorno da API
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    if(!quote.author){
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    if(quote.text.length > 50){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
}

// Comunicação com a API de citações
async function getQuote() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const reponse = await fetch(apiUrl);
    apiQuotes = await reponse.json();
    newQuote();
  } catch (error) {
    //Error
  }
}

function github_link() {
    const githubUrl = 'https://github.com/dekomonte';
}

getQuote();
