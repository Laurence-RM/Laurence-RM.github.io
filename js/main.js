function expandProject(project) {
    var element = document.getElementById(project);
    var chevron_down = document.getElementsByClassName("fa-chevron-down");
    var chevron_up = document.getElementsByClassName("fa-chevron-up");
    if (element.style.display == "none") {
        element.style.display = "inline-block";
        chevron_down[0].style.display = "none";
        chevron_up[0].style.display = "inline";
    } else {
        element.style.display = "none";
        chevron_down[0].style.display = "inline";
        chevron_up[0].style.display = "none";
    }
}