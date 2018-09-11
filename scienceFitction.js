const baseURL ="http://www.songsterr.com/a/ra/songs/byartists.json?artists=";
const key = '';
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');
nav.style.display = 'none';
let pageNumber = 0;
console.log('pageNumber', pageNumber);
let displayNav = false;
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) {
    e.preventDefault();
    console.log(e)

    url = `${baseURL}"${searchTerm.value}"`;
    console.log(url);

    fetch(url)
      .then(function (result) {
        return result.json();
      }).then(function (json) {
        displayResults(json);
      })
      .catch(function(err) {
          console.log(err);
      });
  }
  
function displayResults(json) {
    console.log("DisplayResults", json);
    console.log(json[0]);

    for (let i = 0; i < json.length; i++) {
        console.log(json[i].title)
}};
function nextPage(){
    console.log("Next button clicked");
    } 
    function previousPage(){
    console.log("Next button clicked");
    } 