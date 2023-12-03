//Home page scripting file
//Written by Adam Long

function goHome()
{
    window.location.href = "index.html";
}

function goAboutme()
{
    window.location.href = "forServices/forServices.html";
}

function goForBusiness()
{
    window.location.href = "forBusiness/forBusiness.html";
}

function goForSocials()
{
    window.location.href = "forSocials/forSocials.html";
}



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