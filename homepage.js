//Home page scripting file
//Written by Adam Long

function loadTextFileToElement(path, id)
{
    let textFile = new XMLHttpRequest();
    var textToWrite = "404 ERROR - FileNotFound";
    textFile.onreadystatechange = function ()
    {
        if (textFile.readyState === 4 && textFile.status === 200)
        {
            textToWrite = textFile.responseText;
            textToWrite = textToWrite.split("\n").join("<br>"); //Breaks the text into HTML breaks
        }
        try
        {
            document.getElementById(id).innerHTML = textToWrite;
        }
        catch (e) {/*above throws an Uncaught exception. Not sure why because it works?*/}
    }
    textFile.open("GET", path, true);
    textFile.send();
}

function hideNavBarOnVisibleFooter()
{
    /*
    const navbar = document.getElementById('navbar');
    const footer = document.querySelector(".footerDetails");

    if (navbar && footer)
    {
        window.addEventListener('scroll', relay(function ()
        {
            const rectNavbar = navbar.getBoundingClientRect();
            const rectFoot = footer.getBoundingClientRect();

            if (rectFoot && rectNavbar)
            {
                console.log("HELLOOOO");
                if (rectNavbar.bottom >= rectFoot.top)
                {
                    navbar.classList.add("hidden");
                } else {
                    navbar.classList.remove("hidden");
                }
            }
        }, 100));
    }

     */
    document.addEventListener('DOMContentLoaded', relay(function () {
        var navbar = document.getElementById('navbar');
        var footer = document.getElementById('foot');

        if (navbar && footer) {
            var observer = new IntersectionObserver(function (entries) {
                if (entries[0].isIntersecting) {
                    navbar.classList.add('hidden');
                } else {
                    navbar.classList.remove('hidden');
                }
            });

            observer.observe(footer);
        }
    }, 100));
}

function relay(func, delay)
{
    let timer;
    return function()
    {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function()
        {
            func.apply(context, args);
        }, delay);
    }
}