function loadCommonBody()
{
    fetch("../commonElements/commonBody.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('commonBody').innerHTML = data;
        });
}

function hideNavBarOnScroll()
{
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

function goHome()
{
    window.location.href = "../index.html";
}

//Runner
loadCommonBody();
