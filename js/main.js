function expandProject(project) {
    var element = document.getElementById(project);
    var chevron_down = document.getElementById(project+"_chev");
    if (element.scrollHeight == 0) {
        chevron_down.style.transform = (!chevron_down.style.transform || chevron_down.style.transform =="rotate(0deg)") ? "rotate(360deg)" : "rotate(0deg)";
    } else if (element.style.height != element.scrollHeight+"px") {
        element.style.height = element.scrollHeight+"px";
        chevron_down.style.transform = "rotateX(180deg)";
    } else {
        element.style.height = "0px";
        chevron_down.style.transform = "rotateX(0deg)";
    }
}

const sticky_nav = document.querySelector('.navmenu');

const observer = new IntersectionObserver(
    ([e]) =>
    e.target.classList.toggle('sticky', e.intersectionRatio < 1),
    {threshold: [1]}
);

observer.observe(sticky_nav);