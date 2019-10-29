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
