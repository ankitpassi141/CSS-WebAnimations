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
        alert("Next Page Coming Soon");
        break;
    }

}