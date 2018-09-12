const baseURL ="http://www.songsterr.com/a/ra/songs/byartists.json?artists=";
const key = '';
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');
searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();

    url = `${baseURL}"${searchTerm.value}"`;

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
    while (section.firstChild) {
    section.removeChild(section.firstChild);
    }
    let heading = document.createElement('p')
    let songTitles = document.createElement('ol')

    heading.textContent = `Songs by ${searchTerm.value}:`;
    section.appendChild(heading);
    section.appendChild(songTitles);

        for (let i = 0; i < json.length; i++) {
        let songNames = json[i].title;
        console.log(songNames)
        let songList = document.createElement('li')
        songList.textContent = songNames;
        songTitles.appendChild(songList);
    }
};
