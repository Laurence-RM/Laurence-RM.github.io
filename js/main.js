document.write(`
    <header>
        <div style="float: left; width: 80%">
            <h1 style="text-align: left"><a id="page_header" href="index.html">header</a></h1>
            <div class="navmenu">
                <li><a href="pages/resume.html">Résumé</a></li>
                <li><a href="pages/aboutme.html">About Me</a></li>
                <li><a href="pages/contact.html">Get in Contact</a></li>
            </div>
        </div>
        <h2 class="logo">Laurence<br />Ross<br />Mullen</h2>
    </header>
`);
document.getElementById("page_header").innerHTML = document.getElementsByTagName("title")[0].innerHTML;