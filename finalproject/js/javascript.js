//Navigation
function toggleMenu(){
    document.getElementById("navbar").classList.toggle("open");
    document.getElementById("nav-btn").classList.toggle("open");
}

const x = document.getElementById('nav-btn');   
x.onclick = toggleMenu;

