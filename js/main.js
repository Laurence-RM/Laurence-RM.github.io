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

    // if (element.scrollHeight == 0) {
    //     chevron_down.style.transform = (!chevron_down.style.transform || chevron_down.style.transform =="rotate(0deg)") ? "rotate(360deg)" : "rotate(0deg)";
    // } else if (element.style.max-height == "0px") {
    //     element.style.maxHeight = "1000px";
    //     chevron_down.style.transform = "rotateX(180deg)";
    // } else {
    //     element.style.maxHeight = "0px";
    //     chevron_down.style.transform = "rotateX(0deg)";
    // }
}