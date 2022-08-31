let url = 'https://api.adviceslip.com/advice';
const adviceDisplaySubtitle = document.querySelector('.subtitle');
const adviceDisplayQuote = document.querySelector('.innerQuote');
const generateNewQuoteBtn = document.querySelector('.getNewQuote');

function getQuote() {
  fetch(url, {cache: "no-cache"}).then((response)=> response.json()).then((data) => 
{ console.log(data);
  let adviceNum = data.slip.id;
  let adviceString = data.slip.advice;
  console.log(adviceNum, adviceString);
  adviceDisplaySubtitle.innerHTML = `Advice #${adviceNum}`;
  adviceDisplayQuote.innerHTML = `"${adviceString}"`;
});
}

getQuote();

generateNewQuoteBtn.addEventListener('click', getQuote);


