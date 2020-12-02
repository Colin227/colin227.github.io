// Select ul element that is hidden by default
let mainNav = document.getElementById("js-nav-menu");

// the hamburger menu icon
let navToggle = document.getElementById("js-nav-toggle");

// When the hamburger is clicked toggle the active class on ul element
navToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
});
let body = document.body;
let themeButton = document.getElementById("theme-toggle");

// Apply cached theme on reload
const theme = localStorage.getItem('theme');
if (theme) {
    body.className = '';
    body.classList.add(theme);
}

//switch between light and dark theme on buttonpress
themeButton.addEventListener("click", function(){
    let x = document.body;
    if (x.className === "dark") {
        x.classList.replace("dark", "light");
        localStorage.setItem('theme', 'light');

    } else {
        x.classList.replace("light", "dark");
        localStorage.setItem('theme', 'dark');

    }
});

