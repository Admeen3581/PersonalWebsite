function loadCommonBody()
{
    fetch("../commonElements/commonBody.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('commonBody').innerHTML = data;
        });
}

function goHome()
{
    window.location.href = "../index.html";
}

function goAboutme()
{
    window.location.href = "../forServices/forServices.html";
}

function goForBusiness()
{
    window.location.href = "../forBusiness/forBusiness.html";
}

function goForSocials()
{
    window.location.href = "../forSocials/forSocials.html";
}

//Runner
loadCommonBody();
