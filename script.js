function openBar() {
    let navbar = document.querySelector("header")
    document.querySelector("header").style.transition = "all 1s";
    if (navbar.style.height === "5rem") {
        navbar.style.height = "100vh"
    }
    else {
        navbar.style.height = "5rem"
    }
}


function biggerFont() {
    const main = document.getElementById("maincontent");
    
    if (main.style.fontSize === "x-large") {
        main.style.fontSize = null;
    } else {
        main.style.fontSize = "x-large";
    }
}