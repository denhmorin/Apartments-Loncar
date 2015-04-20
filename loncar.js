window.onscroll = changePos;

function changePos() {
    var navigation = document.getElementById("navigation");
    if (window.pageYOffset > 0) {
        navigation.style.position = "fixed";
        navigation.style.top = "0";
    } else {
        navigation.style.position = "";
        navigation.style.top = "";
    }
}window.onscroll = changePos;



