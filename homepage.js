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

function hideNavBarOnScroll()
{
    if(window.innerWidth <= 890)//constant navBar for phones
    {
        return;
    }

    var prevScrollpos = window.scrollY;
    window.onscroll = function()
    {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos)
        {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-71px";
        }
        prevScrollpos = currentScrollPos;
    }
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

async function sleep(ms)//call with await sleep(<amount in ms>)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function onLoad()
{
    //preventScrollDuringLoad();
    //window.scrollTo(0,0);
}

async function preventScrollDuringLoad()
{
    document.getElementById("html").style.overflow = "hidden";
    await sleep(2500);
    document.getElementById("html").style.overflow = "visible";
}

function reloadOnResize()
{
    window.onresize = function (event)
    {
        window.location.reload();
    }
}