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

//Runner
loadCommonBody();
