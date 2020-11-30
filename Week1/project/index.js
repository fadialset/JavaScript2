// your code goes in here
const quotes = [
    {
    quote :`Life is like riding a bicycle, to keep your balance, you must keep moving.`,
    author : '- Albert Einstein'
},{
    quote:`Love the life you live. Live the life you love.`,
    author: '- Bob Marley'
},{
    quote:`Our greatest glory is not in never falling, but in rising every time we fall.`,
    author: '- Confucius'
},{
    quote:`First, solve the problem. Then, write the code`,
    author: '– John Johnson'
},{
    quote:`Experience is the name everyone gives to their mistakes.`,
    author: '– Oscar Wilde'
},{
    quote:`Code is like humor. When you have to explain it, it’s bad.`,
    author: '– Cory House'
}];


function newQuote(){
    let x = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[x].quote;
    document.getElementById('author').innerText = quotes[x].author;
};


