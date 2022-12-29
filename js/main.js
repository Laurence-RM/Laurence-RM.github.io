function expandProject(project) {
    var element = document.getElementById(project);
    var chevron_down = document.getElementById(project+"_chev");
    element.classList.toggle('closed');
    console.log(chevron_down.style.transform);
    if (chevron_down.style.transform == "rotateX(180deg)") {
        chevron_down.style.transform = "rotateX(0deg)";
    } else {
        chevron_down.style.transform = "rotateX(180deg)";
    }
}