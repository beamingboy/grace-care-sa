$(function () {
    $("#footer-container").load("./assets/footer.html");
    $("#header-navigation").load("./assets/navbar.html");
});


$(window).scroll(function () {
    if ($(window).scrollTop()) {
        $("header").addClass("sticky");
    }
    else {
        $("header").removeClass("sticky");
    }
});