var clicked = false;

function showNavbar() {
    if (clicked == false) {
        document.getElementById('navbar').style.visibility = 'visible';
        clicked = true;
    } 
    else {
        document.getElementById('navbar').style.visibility = 'hidden';
        clicked = false
    }
}