function changePage(element)
{
    let counter = 0;
    let value = document.getElementById(element).getAttribute("data-myValue");

    switch (value)
    {
        case "index_prev":
        alert("First Page");
        break;

        case "index_next":
        window.location = '/views/index1.html';
        break;

        /* Second Page */
        case "bounce_prev":
        window.location = '../index.html';
        break;

        case "bounce_next":
        window.location = '/views/index2.html';
        break;

        /* Third Page */
        case "rollingSquare_prev":
        window.location = '/views/index1.html';
        break;

        case "rollingSquare_next":
        window.location = '/views/index3.html';
        break;

        /* Fourth Page */
        case "rotatingCircles_prev":
        window.location = '/views/index2.html';
        break;

        case "rotatingCircles_next":
        window.location = '/views/index4.html';
        break;

        /* Fifth Page */
        case "mountains_prev":
        window.location = '/views/index3.html';
        break;

        case "mountains_next":
        window.location = '/views/index5.html';
        break;

        /* Sixth Page */
        case "menuAnimations_prev":
        window.location = '/views/index4.html';
        break;

        case "menuAnimations_next":
        alert("Next Page Coming Soon");
        break;
    }

}

let ham_1 = document.getElementsByClassName("hamburger_1");
let ham_2 = document.getElementsByClassName("hamburger_2");
let ham_3 = document.getElementsByClassName("hamburger_3");
let ham_4 = document.getElementsByClassName("hamburger_4");

function hamburgerAnimation_toggle()
{
    // $(".hamburger_1").addClass('animated');
    // setTimeout(function() {
    //       $(".hamburger_1").removeClass('animated');
    // }, 1500);

    ham_1[0].classList.add("animated");
    ham_2[0].classList.add("animated");
    ham_3[0].classList.add("animated");
    ham_4[0].classList.add("animated");

    setTimeout(function()
    {
        ham_1[0].classList.remove("animated");
        ham_2[0].classList.remove("animated");
        ham_3[0].classList.remove("animated");
        ham_4[0].classList.remove("animated");
    },2000);

    // ham_1.style.animation="hamburgerAnimation_opacity 1s";
    // ham_3.style.animation="hamburgerAnimation_opacity 1s";
    // ham_1.style.removeProperty="hamburgerAnimation_opacity";
    // ham_3.style.removeProperty="animation";

    // ham_2.style.animation="hamburgerAnimation 1s";

    // ham_4.style.animation="hamburgerAnimation_rev 1s";

}