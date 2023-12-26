// Your existing JavaScript code...
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*=============== When the user scrolls the page, execute myFunction==============*/
window.onscroll = function() {myFunction()};
            
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// Sample algorithm names (replace with your own)
const algorithmNames = ["Algorithm 1", "Algorithm 2", "Algorithm 3", "Algorithm 4"];

// Get DOM elements
const searchBar = document.getElementById("search-bar");
const suggestions = document.getElementById("suggestions");
const searchButton = document.getElementById("search-button");

// Event listener for typing in the search bar
searchBar.addEventListener("input", () => {
    const input = searchBar.value.toLowerCase();
    const matchingAlgorithms = algorithmNames.filter((name) => name.toLowerCase().includes(input));

    // Display matching suggestions
    suggestions.innerHTML = "";
    matchingAlgorithms.forEach((algorithm) => {
        const suggestion = document.createElement("li");
        suggestion.textContent = algorithm;
        suggestion.addEventListener("click", () => {
            searchBar.value = algorithm;
            suggestions.style.display = "none";
        });
        suggestions.appendChild(suggestion);
    });

    suggestions.style.display = matchingAlgorithms.length ? "block" : "none";
});

// Event listener for clicking the search button
searchButton.addEventListener("click", () => {
    const query = searchBar.value;
    // Redirect or perform the search based on the query
    // Replace this with your own logic
});


function toggleDetails(id) {
    var content = document.getElementById(id);
    content.classList.toggle('collapsible-active');
}
 



var dropdowns = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      // Adjust the value below to the maximum height you want for the dropdown
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


//chatbot

function sendMessage() {
    var userInput = document.getElementById('userInput');
    var chatbox = document.getElementById('chatbox');

    // Get user input
    var userMessage = userInput.value;

    // Display user message in the chatbox
    chatbox.innerHTML += '<div class="user-message">' + userMessage + '</div>';

    // You can send the user message to the backend (Java or Python) here for processing
    // Example: sendToBackend(userMessage);

    // Clear the input field
    userInput.value = '';

    // Simulate a bot response (replace this with actual backend integration)
    var botMessage = 'Bot: This is a bot response.';

    // Display bot response in the chatbox
    chatbox.innerHTML += '<div class="bot-message">' + botMessage + '</div>';

    // Scroll the chatbox to the bottom to show the latest messages
    chatbox.scrollTop = chatbox.scrollHeight;
}

// voice assistent

function openHtmlPage(pageUrl) {
    window.location.href = pageUrl;
  }
  