function expandProject(project) {
    var element = document.getElementById(project);
    var chevron_down = document.getElementById(project+"_chev");
    if (element.style.height != "300px") {
        element.style.height = "300px";
        chevron_down.style.transform = "rotateX(180deg)";
    } else {
        element.style.height = "5px";
        chevron_down.style.transform = "rotateX(0deg)";
    }
}