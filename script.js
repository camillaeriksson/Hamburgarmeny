function openBar() {
    let navbar = document.querySelector("header")
    if (navbar.style.height === "5rem") {
        navbar.style.height = "100vh"
    }
    else {
        navbar.style.height = "5rem"
    }
}
