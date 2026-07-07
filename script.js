// =======================
// Smooth Scroll
// =======================

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// =======================
// Active Navigation
// =======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =======================
// Fade Animation
// =======================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".card,.skill,.certificate,.project-card,.about-container,.contact-box")
.forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});


// =======================
// Scroll To Top Button
// =======================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }

});

topButton.onclick = () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};


// =======================
// Typing Effect
// =======================

const typingText = [
    "Computer Science Student",
    "Python Programmer",
    "Web Developer",
    "Java Learner",
    "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === typingText.length){
        count = 0;
    }

    currentText = typingText[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".home-text h2").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type,1500);

    }

    else{

        setTimeout(type,120);

    }

})();


// =======================
// Sticky Header Shadow
// =======================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.5)";

    }

    else{

        header.style.boxShadow="none";

    }

});
