const mobile_nav=document.querySelector(".mobile-navbar");
const nav_header=document.querySelector(".header");

const tooglenavbar=()=>{
    // alert("hello");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click",()=>tooglenavbar());
