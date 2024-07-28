
var typed = new Typed(".text", {
    strings: ["Programming" , "data science" , "Web Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


// const toTop = document.querySelector(".top");
// window.addEventListener("scroll",() =>{
//     if (window.pageYOffset > 100){
//         toTop.classList.add("active");
//     }
//     else{
//         toTop.classList.remove("active");
//     }
// })

// const btn = document.getElementById("day-modes");
// var currentState = true;
// function switchTheme() {
//     if (currentState) {
//         document.getElementById('css').href = "public\css\styles.css";
//     } 
//     else{
//         document.getElementById('css').href = "public\css\style.css";
//     }
//     currentState = !currentState;
// }

const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

const btn = document.getElementById("day-modes");
var currentState = true;
function switchTheme() {
    if (currentState) {
        document.getElementById('css').href = "public/css/styles.css";
    } else {
        document.getElementById('css').href = "public/css/style.css";
    }
    currentState = !currentState;
}


// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggle = document.getElementById('day-modes');
//     const themeStyle = document.getElementById('theme-style');

//     // Load the saved theme from localStorage if available
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         themeStyle.setAttribute('href', savedTheme);
//     }

//     themeToggle.addEventListener('click', () => {
//         // Get the current theme file
//         const currentTheme = themeStyle.getAttribute('href');

//         // Toggle between style.css and styles.css
//         if (currentTheme === 'style.css') {
//             themeStyle.setAttribute('href', 'styles.css');
//             localStorage.setItem('theme', 'styles.css');
//         } else {
//             themeStyle.setAttribute('href', 'style.css');
//             localStorage.setItem('theme', 'style.css');
//         }
//     });
// });


// btn.addEventListener('click', switchTheme);


// btn.addEventListener("click",function(){
//     rot.style.setProperty('--background-color', 'white');
// })



// document.addEventListener('DOMContentLoaded',function(){
//     var current = localStorage.getItem('current');
  
//      var istoggled = false;
//     btn.addEventListener("click",function ()
// { var stimulus = document.getElementById('css');
   
//     if(!istoggled)
//     {
//         stimulus.setAttribute("href","styles.css");
//         istoggled = true;
//     }

//     else
//     {
//         stimulus.setAttribute("href","style.css");
//         istoggled = false;
//     }


// });
// });



// function togglestylesheet()
// {
//     var style = document.getElementById('css');
//     if(style.getAttribute('href')==="style.css")
//     {
//         style.setAttribute("href","styles.css");
//     }

//     else
//     {
//         style.setAttribute("href","style.css");
//     }


// }