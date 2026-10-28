const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const githubBtn = document.getElementById('github-link');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = []; //Mutável

// Mostra o carregador
function loading(){
   loader.hidden = false;
   quoteContainer.hidden = true; 
}

//Esconde o carregador
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function newQuote(){
    loading();
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

    // Mostra a citação e esconde o carregador
    quoteText.textContent = quote.text;
    complete();
}

// Comunicação com a API de citações
async function getQuote() {
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const reponse = await fetch(apiUrl);
        apiQuotes = await reponse.json();
        newQuote();
    } catch (error) {
        //Error
    }
}

// Abre a página do meu Github
function githubLink() {
    const githubUrl = 'https://github.com/dekomonte';
    window.open(githubUrl, '_blank');
}

// Eventos
newQuoteBtn.addEventListener('click', newQuote);
githubBtn.addEventListener('click', githubLink);

getQuote();
