const ham = document.querySelector(".ham");
const navContent = document.querySelector(".nav-content");

ham.addEventListener("click", ()=>{
    ham.classList.toggle("active");
    navContent.classList.toggle("active");
})